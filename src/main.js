import { createApp, h, Fragment } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/main.css";

let app = null;

// if (import.meta.env.NODE_ENV === "development") {
import("vue-axe").then((res) => {
  const VueAxe = res.default;
  const VueAxePopup = res.VueAxePopup;
  app = createApp({
    render: () => h(Fragment, [h(App), h(VueAxePopup)]),
  });
  app.use(VueAxe);
  app.use(createPinia());
  app.use(router);

  app.mount("#app");
});
// } else {
//   app = createApp(App);
// }
