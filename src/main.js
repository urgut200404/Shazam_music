import { createApp } from 'vue'
import './style.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import Particles from "vue3-particles";
import {createPinia} from 'pinia';
import router from './router/index';
import App from './App.vue'
import { Skeletor } from 'vue-skeletor';
let app = createApp(App);
app.use(router);
app.use(createPinia);
app.use(Particles);
app.component(Skeletor.name, Skeletor);
app.mount('#app')
