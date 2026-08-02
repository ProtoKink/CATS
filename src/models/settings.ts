import { BaseSettingsModel } from 'bc-deeplib/deeplib';
import { GoogleSourceLanguageCode, GoogleTargetLanguageCode } from '../utilities/languages';

export interface SettingsModel {
  global: GlobalSettingsModel;
  google: TranslatorSettingsModel;
}

export interface GlobalSettingsModel extends BaseSettingsModel {
  modEnabled: boolean;
  incomingAutoTranslate: boolean;
  // outcomingAutoTranslate: boolean;
  showTranslateButton: boolean;
  prettifyOnTranslate: boolean;
  doShowNewVersionMessage: boolean;
}

export interface TranslatorSettingsModel extends BaseSettingsModel {
  google: {
    incomingSourceLang: GoogleSourceLanguageCode;
    incomingTargetLang: GoogleTargetLanguageCode;
    // outcomingSourceLang: GoogleSourceLanguageCode;
    // outcomingTargetLang: GoogleTargetLanguageCode;
  }
}