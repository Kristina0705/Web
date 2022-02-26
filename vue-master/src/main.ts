import { createApp } from "vue";
import App from "./App.vue";
import isMobile from "./utils/IsMobile";

const app = createApp(App);

app.directive("flex", {
  beforeMount: (el: HTMLElement) => {
    el.classList.add("flex-view");
    if (isMobile()) {
      el.classList.add("mobile");
    }
  },
});

app.mount("#app");
