import { BaseModule, getModule, modStorage, setSubscreen } from 'bc-deeplib/deeplib';
import { GlobalSettingsModel } from '../models/settings';
import { syncComposeBar } from './compose';

export class CommandsModule extends BaseModule {

  get settings(): GlobalSettingsModel {
    return getModule('GlobalModule').settings;
  }

  load(): void {
    CommandCombine({
      Tag: 'cats',
      Description: 'CATS commands',
      Subcommands: [
        {
          Tag: 'toggle',
          Description: 'Toggle CATS on or off',
          Action: () => {
            this.settings.modEnabled = !this.settings.modEnabled;
            const state = this.settings.modEnabled ? 'ON' : 'OFF';
            ChatRoomSendLocal(`Chat Translator is now ${state}`, 3000);
            syncComposeBar();
            modStorage.save();
          },
        },
        {
          Tag: 'status',
          Description: 'Check the status of CATS',
          Action: () => {
            const state = this.settings.modEnabled ? 'ON' : 'OFF';
            const compose = this.settings.showComposeBar === true ? 'ON' : 'OFF';
            ChatRoomSendLocal(`Chat Translator is ${state}, compose bar ${compose}`, 4000);
          },
        },
        {
          Tag: 'compose',
          Description: 'Toggle the compose bar above chat input',
          Action: () => {
            this.settings.showComposeBar = this.settings.showComposeBar !== true;
            const compose = this.settings.showComposeBar === true ? 'ON' : 'OFF';
            ChatRoomSendLocal(`Compose bar is now ${compose}`, 3000);
            syncComposeBar();
            modStorage.save();
          },
        },
        {
          Tag: 'settings',
          Description: 'Open the CATS settings',
          Action: async () => {
            ChatRoomOpenInformationScreen();
            await setSubscreen('mainmenu');
          },
        }
      ]
    });
  }
}