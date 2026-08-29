import { GlobalModule } from '../modules/global';
import { CommandsModule } from '../modules/commands';
import { TranslatorModule } from '../modules/translator';
import { ComposeModule } from '../modules/compose';
import { GUI } from 'bc-deeplib/deeplib';

declare module 'bc-deeplib/deeplib' {
  interface ModulesList {
    GUI: GUI;
    GlobalModule: GlobalModule;
    ComposeModule: ComposeModule;
    CommandsModule: CommandsModule;
    TranslatorModule: TranslatorModule;
  }
}