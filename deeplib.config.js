import { defineConfig } from 'bc-deeplib/build';

export default defineConfig({
  entry: 'index.ts',
  outfile: 'index.js',
  globalName: 'CATS',
  modInfo: {
    name: 'CATS',
    fullName: 'Chat Auto Translator System',
    repository: 'https://github.com/ProtoKink/CATS',
  },
  distDirName: 'dist',
  publicDirName: 'public',
  scripts: ['./scripts/copy_files.js'],
  prodRemoteURL: 'https://protokink.github.io/CATS',
  devRemoteURL: 'https://ProtoKink.github.io/CATS/dev',
  host: 'localhost',
  port: 45009,
});