import { BaseModule } from 'bc-deeplib/deeplib';
import { GoogleSourceLanguageCode, GoogleTargetLanguageCode, isGoogleSourceLanguage, isGoogleTargetLanguage } from '../utilities/languages';
import { TranslatorSettingsModel } from '../models/settings';
import { TranslatorSubscreen } from '../screens/translator';

interface GoogleData {
  translation: string;
  sourceLanguage: GoogleSourceLanguageCode;
}

export interface TranslatedMessage {
  text: string;
  sourceLanguage: GoogleSourceLanguageCode;
}

export class TranslatorModule extends BaseModule {
  private static _instance: TranslatorModule;

  constructor() {
    super();
    TranslatorModule._instance = this;
  }

  get settingsScreen() {
    return TranslatorSubscreen;
  }

  get settings(): TranslatorSettingsModel {
    return super.settings as TranslatorSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get defaultSettings(): TranslatorSettingsModel {
    return {
      google: {
        incomingSourceLang: 'auto',
        incomingTargetLang: 'en',
        composeSourceLang: 'auto',
        composeTargetLang: 'en',
      }
    };
  }

  private static async googleTranslate(text: string, sourceLang: GoogleSourceLanguageCode, targetLang: GoogleTargetLanguageCode): Promise<GoogleData> {
    const url = 'https://translate-pa.googleapis.com/v1/translate?' + new URLSearchParams({
      'params.client': 'gtx',
      'dataTypes': 'TRANSLATION',
      'key': 'AIzaSyDLEeFI5OtFBwYBIoK_jj5m32rZK5CkCXA', // some google API key
      'query.sourceLanguage': sourceLang,
      'query.targetLanguage': targetLang,
      'query.text': text,
    });

    const res = await fetch(url);
    if (!res.ok)
      throw new Error(
        `Failed to translate "${text}" (${sourceLang} -> ${targetLang})`
        + `\n${res.status} ${res.statusText}`
      );

    const { sourceLanguage, translation }: GoogleData = await res.json();

    return {
      sourceLanguage,
      translation,
    };
  }

  static async translate(
    text: string,
    options?: {
      sourceLang?: GoogleSourceLanguageCode;
      targetLang?: GoogleTargetLanguageCode;
    }
  ): Promise<TranslatedMessage | undefined> {
    const google = TranslatorModule._instance?.settings?.google;
    if (!google) return undefined;

    const sourceLang = (
      options?.sourceLang
      ?? (isGoogleSourceLanguage(google.incomingSourceLang) ? google.incomingSourceLang : 'auto')
    );
    const targetLang = (
      options?.targetLang
      ?? (isGoogleTargetLanguage(google.incomingTargetLang) ? google.incomingTargetLang : 'en')
    );
    if (!isGoogleSourceLanguage(sourceLang) || !isGoogleTargetLanguage(targetLang)) return undefined;

    if (sourceLang !== 'auto' && sourceLang === targetLang) {
      return { sourceLanguage: sourceLang, text };
    }

    const { sourceLanguage, translation } = await TranslatorModule.googleTranslate(text, sourceLang, targetLang);
    return { sourceLanguage, text: translation };
  }
}