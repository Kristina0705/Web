import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Regist from "./components/Regist.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/regist",
    component: Regist,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");