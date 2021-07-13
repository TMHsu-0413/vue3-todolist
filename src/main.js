import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
import AllLogoIcon from 'vue-ionicons/dist/ionicons-logo.js'
createApp(App).use(store).use(router).use(AllIosIcon).use(AllLogoIcon).mount("#app");
