import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

import 'uno.css'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  messages
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
