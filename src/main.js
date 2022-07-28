import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from 'vuex'
import store from './store'

const vuexStore = createStore(store)
createApp(App).use(vuexStore).mount("#app");
