import { BaseModule, getModule, getText, HookPriority, modStorage, sdk } from 'bc-deeplib/deeplib';
import {
  googleSourceLanguages,
  GoogleSourceLanguageCode,
  GoogleTargetLanguageCode,
  isGoogleSourceLanguage,
  isGoogleTargetLanguage,
} from '../utilities/languages';
import { TranslatorModule } from './translator';

const COMPOSE_MAX_LENGTH = 10000;

const ids = Object.freeze({
  bar: 'cats-compose-bar',
  sourceSelect: 'cats-compose-source',
  targetSelect: 'cats-compose-target',
  translateButton: 'cats-compose-translate',
  dropButton: 'cats-compose-drop',
  langsSettings: 'cats-compose-langs-settings',
  toggleButton: 'cats-compose-toggle',
});

function languageOptions(mode: 'source' | 'target', selected: string): Omit<HTMLOptions<'option'>, 'tag'>[] {
  return Object.entries(googleSourceLanguages)
    .filter(([key]) => mode === 'source' || key !== 'auto')
    .map(([key, value]) => ({
      attributes: {
        value: key,
        selected: key === selected,
      },
      children: [value],
    }));
}

export class ComposeModule extends BaseModule {
  load(): void {
    sdk.hookFunction('ChatRoomCreateElement', HookPriority.Observe, (args, next) => {
      const ret = next(args);

      const globalSettings = getModule('GlobalModule').settings;
      const enabled = globalSettings.modEnabled && globalSettings.showComposeBar === true;

      const chatRoomButtons = ElementWrap('chat-room-buttons');
      const chatInput = ElementWrap('InputChat');
      const chatRoomDiv = ElementWrap('chat-room-div');
      const chatRoomBottom = ElementWrap('chat-room-bot');

      ComposeModule.syncComposeSelects();

      if (!chatRoomButtons || !chatInput || !chatRoomDiv || !chatRoomBottom) return ret;

      const existing = ElementWrap(ids.bar);

      if (existing) {
        const hiddenChanged = existing.getAttribute('hidden') !== String(enabled);
        existing.toggleAttribute('hidden', !enabled);
        if (hiddenChanged) ChatRoomInputResize(chatInput);

        return ret;
      }

      const toggleButton = ElementButton.Create(
        ids.toggleButton,
        function () {
          globalSettings.showComposeBar = this.getAttribute('aria-checked') === 'true';
          modStorage.save();
        },
        {
          image: `${PUBLIC_URL}/images/mod.svg`,
          tooltip: getText('compose.toggleBtn'),
          role: 'checkbox',
          ariaChecked: globalSettings.showComposeBar === true,
          noStyling: true,
        },
        {
          button: {
            classList: ['cats-compose-toggle', 'chat-room-button'],
            attributes: {
              hidden: true,
            }
          },
        },
      );

      chatRoomButtons.appendChild(toggleButton);

      const bar = ComposeModule.createComposeBar();
      chatRoomDiv.insertBefore(bar, chatRoomBottom);

      return ret;
    });
  }

  static createComposeBar(): HTMLDivElement {
    const googleSettings = getModule('TranslatorModule').settings.google;
    const sourceLang = googleSettings.composeSourceLang ?? 'auto';
    const targetLang = googleSettings.composeTargetLang ?? 'en';
	
    const sourceSelect = ElementDropdown.CreateLabelled(
      ids.sourceSelect,
      languageOptions('source', sourceLang),
      getText('compose.sourceTitle'),
      function () {
        if (!isGoogleSourceLanguage(this.value)) return;
        googleSettings.composeSourceLang = this.value;
        modStorage.save();
      }
    );
	
    const targetSelect = ElementDropdown.CreateLabelled(
      ids.targetSelect,
      languageOptions('target', targetLang),
      getText('compose.targetTitle'),
      function () {
        if (!isGoogleTargetLanguage(this.value)) return;
        googleSettings.composeTargetLang = this.value;
        modStorage.save();
      },
    );
	
    const box = ElementCreate({
      tag: 'textarea',
      attributes: {
        placeholder: getText('compose.placeholder'),
        maxlength: String(COMPOSE_MAX_LENGTH),
      },
      eventListeners: {
        keydown: (event) => {
          if (!CommonKey.IsPressed(event, 'Enter')) return;
          runComposeTranslate();
        }
      }
    });
	
    const button = ElementButton.Create(
      ids.translateButton,
      () => {
        runComposeTranslate();
      },
      {
        image: `${PUBLIC_URL}/images/mod.svg`,
        tooltip: getText('compose.translateBtn'),
      },
    );
	
    async function runComposeTranslate() {
      if (!button || !box) return;
	
      const text = box.value.trim();
      if (!text) {
        ToastManager.warning(getText('compose.emptyText'), { duration: 3000 });
        return;
      }
	
      button.disabled = true;
      try {
        const sourceLang = sourceSelect.querySelector('select')?.value as GoogleSourceLanguageCode;
        const targetLang = targetSelect.querySelector('select')?.value as GoogleTargetLanguageCode;
        if (!isGoogleSourceLanguage(sourceLang) || !isGoogleTargetLanguage(targetLang)) {
          ToastManager.warning(getText('compose.emptyResult'), { duration: 3000 });
          return;
        }
	
        const result = await TranslatorModule.translate(text.slice(0, COMPOSE_MAX_LENGTH), {
          sourceLang,
          targetLang,
        });
        if (!button) return;
        if (!result?.text) {
          ToastManager.warning(getText('compose.emptyResult'), { duration: 3000 });
          return;
        }
        if (!ComposeModule.setChatInputValue(result.text)) {
          ToastManager.warning(getText('compose.noInput'), { duration: 3000 });
        }
      } catch (error) {
        console.warn('[CATS] compose translate failed', error);
        if (button) ToastManager.warning(getText('compose.emptyResult'), { duration: 3000 });
      } finally {
        if (button) {
          button.disabled = false;
        }
      }
    }
	
    const dropbutton = ElementButton.Create(
      ids.dropButton,
      function () {
        const langsSettings = ElementWrap(ids.langsSettings);
        const chatInput = ElementWrap('InputChat');
        if (!chatInput) return;
        const checked = this.getAttribute('aria-checked') === 'true';
	
        if (langsSettings) langsSettings.toggleAttribute('hidden', !checked);
        const img = this.querySelector('.button-image') as HTMLImageElement | HTMLDivElement | null;
        if (!img) return;
        const imgSrc = checked ? 'Icons/CaretDown.svg' : 'Icons/CaretUp.svg';
        if (img instanceof HTMLImageElement) {
          if (!img.src.endsWith(imgSrc)) {
            img.src = imgSrc;
          }
        } else if (img.style.backgroundImage !== imgSrc) {
          img.style.backgroundImage = `url("${imgSrc}")`;
          img.style.maskImage = `url("${imgSrc}")`;
        }
        ChatRoomInputResize(chatInput);
      },
      {
        image: 'Icons/CaretUp.svg',
        role: 'checkbox',
      },
    );
	
    return ElementCreate({
      tag: 'div',
      attributes: {
        id: ids.bar,
      },
      children: [
        {
          tag: 'div',
          classList: ['cats-compose-row', 'cats-compose-row-input'],
          children: [dropbutton, box, button],
        },
        {
          tag: 'div',
          classList: ['cats-compose-row', 'cats-compose-row-langs'],
          attributes: {
            id: ids.langsSettings,
            hidden: true,
          },
          children: [
            sourceSelect,
            targetSelect,
          ],
        },
      ],
    });
  }

  static syncComposeSelects() {
    const sourceSelect = ElementWrap(ids.sourceSelect) as HTMLSelectElement | null;
    const targetSelect = ElementWrap(ids.targetSelect) as HTMLSelectElement | null;
    if (!sourceSelect || !targetSelect) return;

    const googleSettings = getModule('TranslatorModule').settings.google;
    const sourceLang = googleSettings.composeSourceLang ?? 'auto';
    const targetLang = googleSettings.composeTargetLang ?? 'en';
    if (sourceSelect.value !== sourceLang) sourceSelect.value = sourceLang;
    if (targetSelect.value !== targetLang) targetSelect.value = targetLang;
  }

  static setChatInputValue(value: string): boolean {
    const input = ElementWrap('InputChat') as HTMLTextAreaElement | HTMLInputElement | null;
    if (!input || !value) return false;
	
    const incoming = value;
    const current = input.value;
    let next = incoming;
    if (current.trim()) {
      if (!incoming) return true;
      const gap = /\s$/.test(current) ? '' : ' ';
      next = current + gap + incoming;
    }
	
    const maxLength = CommonParseInt(input.getAttribute('maxlength') ?? '') ?? 10000;
    if (next.length > maxLength) next = next.slice(0, maxLength);
	
    input.value = next;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
		
    return true;
  }
}