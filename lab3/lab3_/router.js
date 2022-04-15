import VueRouter from "vue-router";
import { component } from "vue/types/umd";
import Regist from "./src/components/Regist.vue";

export default new VueRouter({
    routes: [
        path, "/regist",
        name, "regist",
        component, Regist
    ],
    mode: 'history'
})