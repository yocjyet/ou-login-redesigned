import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import { replaceCodePlugin } from 'vite-plugin-replace';
import RemoveConsole from 'vite-plugin-remove-console';
import { version } from './package.json';
import fs from 'fs/promises';
// https://vitejs.dev/config/

export default defineConfig(async ({ mode }) => ({
  plugins: [
    replaceCodePlugin({
      replacements: [
        {
          from: /{% HTML %}/g,
          to: await fs.readFile('./ui/src/lib/Main.svelte', 'utf-8'),
        },
        {
          from: /{% CSS %}/g,
          to: await fs.readFile('./ui/src/app.css', 'utf-8'),
        },
      ],
    }),
    ...(mode === 'production' ? [RemoveConsole()] : []),
    monkey({
      entry: 'src/main.ts',
      server: {
        open: false,
      },
      userscript: {
        name: {
          en: 'Osaka University Login Redesigned',
          ja: '阪大ログイン画面再設計版',
          zh: '大阪大学登录界面重新设计版',
        },
        namespace: 'https://yocjyet.dev/',
        version,
        description: {
          en: 'Improve login UI of the authentication system of Osaka University to allow password autocompletion and redesigned on the theme of Sci-Fi to fit modern style.',
          ja: '阪大のログイン画面をSF風に再設計し、パスワード管理ソフトの自動記入不能の問題を修正した。',
          zh: '改善大阪大学认证系统的登录界面，允许密码自动完成，并在科幻主题上重新设计，以适应现代风格。',
        },
        author: 'Yo Cjyet',
        match: 'https://ou-idp.auth.osaka-u.ac.jp/idp/*',
        icon: 'https://www.osaka-u.ac.jp/favicon.ico',
        grant: undefined,
        license: 'MIT',
      },
    }),
  ],
}));
