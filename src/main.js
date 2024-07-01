import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import AOS from 'aos';
import 'aos/dist/aos.css';

loadFonts();

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app', () => {
  AOS.init();
});
