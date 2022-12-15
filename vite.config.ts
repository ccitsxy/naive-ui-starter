import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import DefineOptions from 'unplugin-vue-define-options/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, 'src/locales/**')]
    }),
    Unocss(),
    Components({
      resolvers: [NaiveUiResolver(), VueUseComponentsResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
