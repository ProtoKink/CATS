import { advElement, BaseSubscreen, getText, layout } from 'bc-deeplib/deeplib';
import { googleSourceLanguages, GoogleSourceLanguageCode, GoogleTargetLanguageCode } from '../utilities/languages';
import { TranslatorSettingsModel } from '../models/settings';
import { SubscreenOptions } from 'bc-deeplib/base/base_subscreen';

export class TranslatorSubscreen extends BaseSubscreen {

  protected static override subscreenOptions: SubscreenOptions = {
    name: 'translator',
    icon: `${PUBLIC_URL}/images/translator.svg`
  };

  get settings(): TranslatorSettingsModel {
    return super.settings as TranslatorSettingsModel;
  }

  load(): void {
    super.load();
    const settings = this.settings;

    advElement.createLabel({
      id: 'cats-incoming-lang-label',
      label: getText('translator.incomingLanguagesLabel'),
      htmlOptions: {
        parent: layout.getSettingsDiv(),
      }
    });

    const incomingSourceLangOptions: readonly Omit<HTMLOptions<'option'>, 'tag'>[] = Object.entries(googleSourceLanguages).map(([key, value]) => ({
      attributes: {
        value: key,
        label: value,
        selected: key === this.settings.google.incomingSourceLang
      }
    }));

    advElement.createDropdown({
      id: 'cats-incoming-source-lang',
      optionsList: incomingSourceLangOptions,
      label: getText('translator.source'),
      onChange: function () {
        const sourceLang = this.value as GoogleSourceLanguageCode;
        if (!sourceLang) return;

        if (googleSourceLanguages[sourceLang]) {
          settings.google.incomingSourceLang = sourceLang as GoogleSourceLanguageCode;
        }
      },
      htmlOptions: {
        container: {
          parent: layout.getSettingsDiv(),
        },
        select: {
          classList: ['cats-lang-select'],
        }
      }
    });

    const incomingTargetLangOptions: readonly Omit<HTMLOptions<'option'>, 'tag'>[] = Object.entries(googleSourceLanguages).filter(([key]) => key !== 'auto').map(([key, value]) => ({
      attributes: {
        value: key,
        label: value,
        selected: key === this.settings.google.incomingTargetLang
      }
    }));

    advElement.createDropdown({
      id: 'cats-incoming-target-lang',
      optionsList: incomingTargetLangOptions,
      label: getText('translator.target'),
      onChange: function () {
        const targetLang = this.value as GoogleTargetLanguageCode;
        if (!targetLang) return;

        if (googleSourceLanguages[targetLang]) {
          settings.google.incomingTargetLang = targetLang as GoogleTargetLanguageCode;
        }
      },
      htmlOptions: {
        container: {
          parent: layout.getSettingsDiv(),
        },
        select: {
          classList: ['cats-lang-select'],
        }
      }
    });

    advElement.createLabel({
      id: 'cats-compose-lang-label',
      label: getText('translator.composeLanguagesLabel'),
      htmlOptions: {
        parent: layout.getSettingsDiv(),
      }
    });

    const composeSourceLangOptions: readonly Omit<HTMLOptions<'option'>, 'tag'>[] = Object.entries(googleSourceLanguages).map(([key, value]) => ({
      attributes: {
        value: key,
        label: value,
        selected: key === this.settings.google.composeSourceLang
      }
    }));

    advElement.createDropdown({
      id: 'cats-compose-source-lang',
      optionsList: composeSourceLangOptions,
      label: getText('translator.source'),
      onChange: function () {
        const sourceLang = this.value as GoogleSourceLanguageCode;
        if (!sourceLang) return;

        if (googleSourceLanguages[sourceLang]) {
          settings.google.composeSourceLang = sourceLang as GoogleSourceLanguageCode;
        }
      },
      htmlOptions: {
        container: {
          parent: layout.getSettingsDiv(),
        },
        select: {
          classList: ['cats-lang-select'],
        }
      }
    });

    const composeTargetLangOptions: readonly Omit<HTMLOptions<'option'>, 'tag'>[] = Object.entries(googleSourceLanguages).filter(([key]) => key !== 'auto').map(([key, value]) => ({
      attributes: {
        value: key,
        label: value,
        selected: key === this.settings.google.composeTargetLang
      }
    }));

    advElement.createDropdown({
      id: 'cats-compose-target-lang',
      optionsList: composeTargetLangOptions,
      label: getText('translator.target'),
      onChange: function () {
        const targetLang = this.value as GoogleTargetLanguageCode;
        if (!targetLang) return;

        if (googleSourceLanguages[targetLang]) {
          settings.google.composeTargetLang = targetLang as GoogleTargetLanguageCode;
        }
      },
      htmlOptions: {
        container: {
          parent: layout.getSettingsDiv(),
        },
        select: {
          classList: ['cats-lang-select'],
        }
      }
    });
  }
}