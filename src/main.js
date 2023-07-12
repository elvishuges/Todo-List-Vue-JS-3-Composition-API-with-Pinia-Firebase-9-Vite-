import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia();

const app = createApp(App).use(router).use(vuetify).use(pinia);

app.mount('#app');
