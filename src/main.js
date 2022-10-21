import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/scss/index.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";
import Axios from "axios";

import "./assets/main.css";

Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
