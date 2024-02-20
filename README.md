# PWA 化の基本

1. vite-plugin-pwa を devdependencies にインストール

```zh
npm install vite-plugin-pwa@0.17.4 --save-dev
```

<details>
<summary> 2. vite.config.ts を下記のように編集する</summary>

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        theme_color: ' #000000',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        name: 'hoge',
        short_name: 'huga',
        description: 'hogehoge',
        icons: [
          {
            src: '/Icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 9988,
  },
});
```

</details>

3. public フォルダに sw.js を追加（build 時に public に存在するファイルは自動で巻き込まれて dist ファイルに入る）

- sw.js

```js
self.addEventListener('fetch', function (e) {
  //空でOK
});
```

<details>
<summary>    4. index.htmlのボディの中に下記のようなscriptタグを追加</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('./sw.js')
            .then((reg) =>
              console.log('サービスワーカーの登録成功です！！', reg.scope)
            )
            .catch((err) => console.log('サービスワーカーの登録失敗', err));
        });
      }
    </script>
  </body>
</html>
```

</details>

- パスは/public から見てのパスになることに注意
