import { createApp } from 'vue';
import App from './App.vue';

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

const app = createApp(App).use(router).use(vuetify);

app.mount('#app');
