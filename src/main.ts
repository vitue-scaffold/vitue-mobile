import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import messages from '@intlify/vite-plugin-vue-i18n/messages';
import App from './App.vue';
import router from '@/router/index';

import 'virtual:windi.css';

const app = createApp(App);

const i18n = createI18n({
  locale: 'en',
  messages,
});
app.use(i18n);

app.use(router);
app.use(createPinia());

app.mount('#app');
