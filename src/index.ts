import { getModule, GUI, GuiImportExport, initMod, modStorage, Style, VersionModule } from 'bc-deeplib/deeplib';
import { CommandsModule } from './modules/commands';
import { GlobalModule } from './modules/global';
import { TranslatorModule } from './modules/translator';
import { V1_Migrator } from './migrators/v1_migrator';
import { ComposeModule } from './modules/compose';

(async () => {
  const changelog = await fetch(`${PUBLIC_URL}/text/changelog.txt`)
    .then((res) => res.text())
    .then((text) => text.replace(/\r\n/g, '\n'));

  initMod({
    modules: {
      GUI: new GUI({
        buttonText: 'CATS',
        identifier: 'CATS',
        image: `${PUBLIC_URL}/images/mod.svg`,
      }),
      GlobalModule: new GlobalModule(),
      ComposeModule: new ComposeModule(),
      CommandsModule: new CommandsModule(),
      TranslatorModule: new TranslatorModule(),
      VersionModule: new VersionModule({
        migrators: [
          new V1_Migrator()
        ],
        newVersionMessage: changelog,
        showNewVersionMessage: () => getModule('GlobalModule').settings.doShowNewVersionMessage
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
})();

