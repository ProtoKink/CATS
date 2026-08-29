import { SubscreenOptions } from 'bc-deeplib/base/base_subscreen';
import { advElement, BaseSubscreen, getText, layout } from 'bc-deeplib/deeplib';
import { GlobalSettingsModel } from '../models/settings';
import { syncEmojiBackgroundVisibility, syncTranslateButtonVisibility } from '../modules/global';

export class GlobalSubscreen extends BaseSubscreen {

  protected static override subscreenOptions: SubscreenOptions = {
    name: 'global',
    icon: `${PUBLIC_URL}/images/cog.svg`
  };

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  load(): void {
    super.load();

    const modEnabledLabel = advElement.createCheckbox({
      id: 'cats-mod-enabled',
      label: getText('global.modEnabled'),
      setElementValue: () => this.settings.modEnabled,
      setSettingValue: (val) => {
        this.settings.modEnabled = val;
      },
    });
    layout.getSettingsDiv().appendChild(modEnabledLabel);

    const doShowNewVersionMessageLabel = advElement.createCheckbox({
      id: 'cats-do-show-new-version-message',
      label: getText('global.showNewVersionMessage'),
      setElementValue: () => this.settings.doShowNewVersionMessage,
      setSettingValue: (val) => {
        this.settings.doShowNewVersionMessage = val;
      },
    });
    layout.getSettingsDiv().appendChild(doShowNewVersionMessageLabel);

    const incomingAutoTranslateCheckbox = advElement.createCheckbox({
      id: 'cats-incoming-auto-translate',
      label: getText('global.incomingAutoTranslate'),
      setElementValue: () => this.settings.incomingAutoTranslate,
      setSettingValue: (val) => {
        this.settings.incomingAutoTranslate = val;
      },
    });
    layout.appendToSettingsDiv(incomingAutoTranslateCheckbox);

    const showTranslateButtonCheckbox = advElement.createCheckbox({
      id: 'cats-show-translate-button',
      label: getText('global.showTranslateButton'),
      setElementValue: () => this.settings.showTranslateButton,
      setSettingValue: (val) => {
        this.settings.showTranslateButton = val;
        syncTranslateButtonVisibility(val);
      },
    });
    layout.appendToSettingsDiv(showTranslateButtonCheckbox);

    const showComposeBarCheckbox = advElement.createCheckbox({
      id: 'cats-show-compose-bar',
      label: getText('global.showComposeBar'),
      setElementValue: () => this.settings.showComposeBar === true,
      setSettingValue: (val) => {
        this.settings.showComposeBar = val;
      },
    });
    layout.appendToSettingsDiv(showComposeBarCheckbox);

    const prettifyOnTranslateCheckbox = advElement.createCheckbox({
      id: 'cats-prettify-on-translate',
      label: getText('global.prettifyOnTranslate'),
      setElementValue: () => this.settings.prettifyOnTranslate,
      setSettingValue: (val) => {
        this.settings.prettifyOnTranslate = val;
        syncEmojiBackgroundVisibility(val);
      },
    });
    layout.appendToSettingsDiv(prettifyOnTranslateCheckbox);

    // const outcomingAutoTranslateCheckbox = advElement.createCheckbox({
    //   id: 'cats-outgoing-auto-translate',
    //   label: getText('global.outcomingAutoTranslate'),
    //   setElementValue: () => this.settings.outcomingAutoTranslate,
    //   setSettingValue: (val) => {
    //     this.settings.outcomingAutoTranslate = val;
    //   },
    // });
    // layout.appendToSettingsDiv(outcomingAutoTranslateCheckbox);
  }
}