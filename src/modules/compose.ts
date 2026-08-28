import { getModule, getText, modStorage } from 'bc-deeplib/deeplib';
import {
  googleSourceLanguages,
  GoogleSourceLanguageCode,
  GoogleTargetLanguageCode,
  isGoogleSourceLanguage,
  isGoogleTargetLanguage,
} from '../utilities/languages';
import { TranslatorModule } from './translator';

const COMPOSE_ID = 'cats-compose-bar';
const COMPOSE_MAX_LENGTH = 1000;

let composeSyncFrame = 0;

export function syncComposeBar() {
  if (composeSyncFrame) return;
  composeSyncFrame = requestAnimationFrame(() => {
    composeSyncFrame = 0;
    applyComposeBar();
  });
}

function applyComposeBar() {
  try {
    const input = findChatInput();
    const existing = document.getElementById(COMPOSE_ID);
    const global = getModule('GlobalModule')?.settings;
    const enabled = !!global?.modEnabled && global.showComposeBar === true;

    if (!enabled || !input) {
      existing?.remove();
      return;
    }

    if (existing) {
      if (existing.nextElementSibling !== input) {
        input.parentElement?.insertBefore(existing, input);
      }
      syncComposeTheme(existing);
      syncComposeSelects(existing);
      return;
    }

    const bar = createComposeBar();
    input.parentElement?.insertBefore(bar, input);
  } catch (error) {
    console.warn('[CATS] compose bar sync failed', error);
  }
}

function findChatInput(): HTMLTextAreaElement | HTMLInputElement | null {
  const byId = document.getElementById('InputChat');
  if (byId instanceof HTMLTextAreaElement || byId instanceof HTMLInputElement) return byId;
  return null;
}

function getClubColorTheme(): string {
  const fromLog = document.getElementById('TextAreaChatLog')?.getAttribute('data-colortheme');
  if (fromLog) return fromLog.toLowerCase();
  const fromPlayer = Player?.ChatSettings?.ColorTheme;
  if (fromPlayer) return String(fromPlayer).toLowerCase();
  return 'light';
}

function syncComposeTheme(bar: HTMLElement) {
  const theme = getClubColorTheme();
  if (bar.dataset['colortheme'] !== theme) {
    bar.dataset['colortheme'] = theme;
  }
}

function composeLangs() {
  const google = getModule('TranslatorModule')?.settings?.google;
  const source = google?.composeSourceLang ?? 'auto';
  const target = google?.composeTargetLang ?? 'en';
  return {
    source: isGoogleSourceLanguage(source) ? source : 'auto',
    target: isGoogleTargetLanguage(target) ? target : 'en',
  };
}

function syncComposeSelects(bar: HTMLElement) {
  const selects = bar.querySelectorAll('select');
  const langs = composeLangs();
  if (selects[0] && selects[0].value !== langs.source) selects[0].value = langs.source;
  if (selects[1] && selects[1].value !== langs.target) selects[1].value = langs.target;
}

function languageOptions(mode: 'source' | 'target', selected: string): HTMLOptions<'option'>[] {
  return Object.entries(googleSourceLanguages)
    .filter(([key]) => mode === 'source' || key !== 'auto')
    .map(([key, value]) => ({
      tag: 'option',
      attributes: {
        value: key,
        label: value,
        selected: key === selected,
      },
      children: [value],
    }));
}

function setChatInputValue(value: string): boolean {
  const input = findChatInput();
  if (!input) return false;

  const incoming = String(value || '');
  const current = String(input.value || '');
  let next = incoming;
  if (current.trim()) {
    if (!incoming) return true;
    const gap = /\s$/.test(current) ? '' : ' ';
    next = current + gap + incoming;
  }

  const maxLength = Number(input.getAttribute('maxlength')) || COMPOSE_MAX_LENGTH;
  if (next.length > maxLength) next = next.slice(0, maxLength);

  input.value = next;
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.focus();
  return true;
}

function createComposeBar(): HTMLDivElement {
  const langs = composeLangs();

  const sourceSelect = ElementCreate({
    tag: 'select',
    attributes: {
      title: getText('compose.sourceTitle'),
    },
    children: languageOptions('source', langs.source),
    eventListeners: {
      change() {
        if (!isGoogleSourceLanguage(this.value)) return;
        const google = getModule('TranslatorModule')?.settings?.google;
        if (!google) return;
        google.composeSourceLang = this.value;
        modStorage.save();
      },
    },
  });

  const targetSelect = ElementCreate({
    tag: 'select',
    attributes: {
      title: getText('compose.targetTitle'),
    },
    children: languageOptions('target', langs.target),
    eventListeners: {
      change() {
        if (!isGoogleTargetLanguage(this.value)) return;
        const google = getModule('TranslatorModule')?.settings?.google;
        if (!google) return;
        google.composeTargetLang = this.value;
        modStorage.save();
      },
    },
  });

  const box = ElementCreate({
    tag: 'textarea',
    attributes: {
      placeholder: getText('compose.placeholder'),
      rows: '1',
      maxlength: String(COMPOSE_MAX_LENGTH),
    },
  });

  const button = ElementCreate({
    tag: 'button',
    attributes: {
      type: 'button',
    },
    children: [getText('compose.translateBtn')],
  });

  async function runComposeTranslate() {
    if (!button.isConnected || !box.isConnected) return;

    const text = box.value.trim();
    if (!text) {
      ChatRoomSendLocal(getText('compose.emptyText'), 3000);
      return;
    }

    button.disabled = true;
    button.textContent = getText('compose.translating');
    try {
      const sourceLang = sourceSelect.value as GoogleSourceLanguageCode;
      const targetLang = targetSelect.value as GoogleTargetLanguageCode;
      if (!isGoogleSourceLanguage(sourceLang) || !isGoogleTargetLanguage(targetLang)) {
        ChatRoomSendLocal(getText('compose.emptyResult'), 3000);
        return;
      }

      const result = await TranslatorModule.translate(text.slice(0, COMPOSE_MAX_LENGTH), {
        sourceLang,
        targetLang,
      });
      if (!button.isConnected) return;
      if (!result?.text) {
        ChatRoomSendLocal(getText('compose.emptyResult'), 3000);
        return;
      }
      if (!setChatInputValue(result.text)) {
        ChatRoomSendLocal(getText('compose.noInput'), 3000);
      }
    } catch (error) {
      console.warn('[CATS] compose translate failed', error);
      if (button.isConnected) ChatRoomSendLocal(getText('compose.emptyResult'), 3000);
    } finally {
      if (button.isConnected) {
        button.disabled = false;
        button.textContent = getText('compose.translateBtn');
      }
    }
  }

  button.addEventListener('click', () => {
    void runComposeTranslate();
  });
  box.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.shiftKey) return;
    event.preventDefault();
    event.stopPropagation();
    void runComposeTranslate();
  });

  return ElementCreate({
    tag: 'div',
    attributes: {
      id: COMPOSE_ID,
      'data-colortheme': getClubColorTheme(),
    },
    children: [
      {
        tag: 'div',
        classList: ['cats-compose-row'],
        children: [
          {
            tag: 'span',
            classList: ['cats-compose-label'],
            children: [getText('compose.label')],
          },
          sourceSelect,
          targetSelect,
        ],
      },
      {
        tag: 'div',
        classList: ['cats-compose-row'],
        children: [box, button],
      },
    ],
  });
}
