import * as path from 'path';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import eslintPlugin from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import viteStylelint from '@amatlash/vite-plugin-stylelint';
import { viteVConsole } from 'vite-plugin-vconsole';
import styleImport from 'vite-plugin-style-import';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart#fang-shi-er.-zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
    vueJsx(),

    // https://github.com/gxmari007/vite-plugin-eslint
    eslintPlugin({
      fix: true,
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/vadxq/vite-plugin-vconsole
    viteVConsole({
      entry: path.resolve('src/main.ts'),
      localEnabled: true,
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark',
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, 'src/locales/**'),
    }),

    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),

    // https://github.com/AMatlash/vite-plugin-stylelint
    // viteStylelint(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/_configuration.scss";',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    // https://cn.vitejs.dev/config/#server-proxy
    proxy: {},
  },
  // https://cn.vitejs.dev/config/#envdir
  envDir: './.env',
  envPrefix: 'W6S_',
});
