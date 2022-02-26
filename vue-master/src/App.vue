<template>
  <header v-flex="''">
    <user-info />
    <login-form />
  </header>
  <main>
    <page-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "./components/LoginForm.vue";
import UserInfo from "./components/UserInfo.vue";
import PageView from "./components/PageView.vue";

export default defineComponent({
  name: "App",
  components: {
    UserInfo,
    LoginForm,
    PageView,
  },
});
</script>

<style>
@font-face {
  font-family: "Lobster";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/src/assets/fonts/Lobster-Regular.ttf) format("truetype");
}
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.flex-view {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.flex-view.mobile {
  flex-direction: column;
}
main {
  flex: 1 1 auto;
  display: flex;
}
</style>
