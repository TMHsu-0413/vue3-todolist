import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
import AllLogoIcon from 'vue-ionicons/dist/ionicons-logo.js'
import AllMdIcon from 'vue-ionicons/dist/ionicons-md.js'

//axios
/*export const http = axios.create({
    baseURL: "http://127.0.0.1:8888/api"
})*/

createApp(App).use(store).use(router).use(AllIosIcon).use(AllLogoIcon).use(AllMdIcon).mount("#app");
