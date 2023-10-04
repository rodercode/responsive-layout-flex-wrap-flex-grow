// Global styles
import "./assets/tailwind.css";

// Dependencies
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

const app = createApp(App).use(router);

router.isReady().then(() => {
  app.mount("#app");
});