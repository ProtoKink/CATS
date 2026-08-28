import { advElement, BaseModule, getModule, sdk } from 'bc-deeplib/deeplib';
import { GlobalSettingsModel } from '../models/settings';
import { TranslatedMessage, TranslatorModule } from './translator';
import { GlobalSubscreen } from '../screens/global';
import { googleSourceLanguages } from '../utilities/languages';
import { catsify } from '../utilities/pretty';
import { notifyLocalBuild, syncComposeBar } from './compose';

export class GlobalModule extends BaseModule {

  get settingsScreen() {
    return GlobalSubscreen;
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get defaultSettings(): GlobalSettingsModel {
    return {
      modEnabled: false,
      doShowNewVersionMessage: false,
      incomingAutoTranslate: false,
      // outcomingAutoTranslate: false,
      showTranslateButton: true,
      showComposeBar: false,
      prettifyOnTranslate: true,
      translationEngine: 'google',
    };
  }

  load() {
    syncEmojiBackgroundVisibility(this.settings.prettifyOnTranslate);
    syncTranslateButtonVisibility(this.settings.showTranslateButton);

    sdk.hookFunction('ChatRoomMessageDisplay', 0, (args, next) => {
      const div = next(args);

      if (!this.settings.modEnabled) return div;

      const popupMenu = div?.querySelector('.chat-room-message-popup');
      const sourceMessage = div.querySelector('.chat-room-message-content')?.textContent;
      const messageId = div.querySelector('.chat-room-message-content')?.getAttribute('msgid') ?? CommonGenerateUniqueID();
      if (!sourceMessage) return div;

      if (popupMenu) {
        const translationButton = createPopupButton(sourceMessage, messageId, div);
        popupMenu.append(translationButton);
      }

      if (this.settings.incomingAutoTranslate) {
        TranslatorModule.translate(sourceMessage).then((translatedMessage) => {
          if (!translatedMessage) return;
          if (translatedMessage.text === sourceMessage) return;
          const element = createTranslatedMessage(translatedMessage, messageId);
          if (!element) return;
          div.appendChild(element);
        }).catch((error) => {
          console.warn('[CATS] incoming translate failed', error);
        });
      };

      return div;
    });

    try {
      sdk.hookFunction('ChatRoomLoad', 0, (args, next) => {
        const result = next(args);
        void Promise.resolve(result).then(() => {
          syncComposeBar();
          notifyLocalBuild();
        }).catch((error) => {
          console.warn('[CATS] compose bar load failed', error);
        });
        return result;
      });
    } catch (error) {
      console.warn('[CATS] ChatRoomLoad hook failed', error);
    }

    // sdk.hookFunction('ServerSend', HookPriority.Observe, (args, next) => {
    //   if (args[0] !== 'ChatRoomChat') return next(args);
    //   const data: ServerChatRoomMessage = args[1];
    //   const messageType = data.Type;
    //   if (!['Emote', 'Chat', 'Whisper'].includes(messageType)) return next(args);
    //   if (!this.settings.outcomingAutoTranslate) return next(args);

    //   TranslatorModule.translate(data.Content).then((translatedMessage) => {
    //     if (!translatedMessage) return;
    //     if (translatedMessage.text === data.Content) return;
    //     data.Content += `\n\n[${translatedMessage.text}]`;

    //     return next(args);
    //   });
    // });
  }
}

export function syncEmojiBackgroundVisibility(visible: boolean) {
  document.body.classList.toggle('cats-prettify', visible);
}

export function syncTranslateButtonVisibility(visible: boolean) {
  document.body.classList.toggle('cats-show-translate-button', visible);
}

function createPopupButton(sourceMessage: string, messageId: string, messageElement: HTMLDivElement) {
  return advElement.createButton({
    id: `cats-translation-button-${messageId}`,
    options: {
      image: `${PUBLIC_URL}/images/mod.svg`,
      imageColor: 'gray',
      noStyling: true,
      tooltip: 'Translate Message',
    },
    htmlOptions: {
      button: {
        classList: ['cats-translation-button'],
      }
    },
    onClick: () => {
      TranslatorModule.translate(sourceMessage).then((data) => {
        if (!data) return;
        if (data.text === sourceMessage) return;
        const element = createTranslatedMessage(data, messageId);

        if (!element) return;
        messageElement.appendChild(element);
      }).catch((error) => {
        console.warn('[CATS] incoming translate failed', error);
      });
    }
  });
}

function createTranslatedMessage(translatedMessage: TranslatedMessage, messageId: string) {
  if (ElementWrap(`cats-translated-message-${messageId}`)) return;
  const element = ElementCreate({
    tag: 'div',
    classList: ['ChatMessage', 'deeplib-message', 'translated-message'],
    attributes: {
      id: `cats-translated-message-${messageId}`,
      'data-time': ChatRoomCurrentTime(),
      'data-sender': Player.MemberNumber?.toString(),
    },
    children: [
      {
        tag: 'img',
        attributes: {
          src: `${PUBLIC_URL}/images/mod.svg`,
        }
      },
      {
        tag: 'span',
        children: CommonStringPartitionReplace(translatedMessage.text, {
          '\n': ElementCreate({
            tag: 'br',
          }),
        }),
      },
      {
        tag: 'div',
        classList: ['cats-message-meta'],
        children: [
          `(Translated from ${googleSourceLanguages[translatedMessage.sourceLanguage]} — `,
          {
            tag: 'a',
            attributes: {
              href: '#',
            },
            children: ['Dismiss'],
            eventListeners: {
              click: () => {
                element.remove();
              },
            },
          },
          ')'
        ],
      },
    ]
  });
  if (getModule('GlobalModule').settings.prettifyOnTranslate) {
    catsify(element);
  }

  return element;
}