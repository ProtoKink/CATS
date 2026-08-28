import { GUI, GuiImportExport, initMod, Style, VersionModule } from 'bc-deeplib/deeplib';
import { CommandsModule } from './modules/commands';
import { GlobalModule } from './modules/global';
import { TranslatorModule } from './modules/translator';
import { V1_Migrator } from './migrators/v1_migrator';

initMod({
  modules: {
    GUI: new GUI({
      buttonText: 'CATS',
      identifier: 'CATS',
      image: `${PUBLIC_URL}/images/mod.svg`,
    }),
    GlobalModule: new GlobalModule(),
    CommandsModule: new CommandsModule(),
    TranslatorModule: new TranslatorModule(),
    VersionModule: new VersionModule({
      migrators: [
        new V1_Migrator()
      ]
    })
  },
  translationOptions: {
    pathToTranslationsFolder: `${PUBLIC_URL}/translations/`,
    fixedLanguage: true,
  },
  mainMenuOptions: {
    importExportSubscreen: new GuiImportExport({
      customFileExtension: 'cats',
    }),
  },
  initFunction: () => {
    Style.injectEmbed('cats-settings-style', `${PUBLIC_URL}/styles/settings.css`);
    Style.injectEmbed('cats-chat-style', `${PUBLIC_URL}/styles/chat.css`);
  }
});
