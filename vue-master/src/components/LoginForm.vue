<template>
  <form class="login" v-flex>
    <div class="login__logo"></div>
    <span class="login__input vertical">
      <span class="avtoriz">
        <label for="username">Авторизация</label>
      </span>
      <label for="username">Имя пользователя</label>
      <input
        type="text"
        name="username"
        id="username"
        autocomplete="username"
      />
      <label for="password">Пароль</label>
      <input
        type="password"
        name="password"
        id="password"
        autocomplete="password"
      />
      <span class="login__input">
        <input type="checkbox" name="do-not-exit" id="do-not-exit" />
        <label for="do-not-exit">Сохранить пароль</label>
      </span>
      <button class="login__submit" type="submit">Войти</button>
    </span>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import isMobile from "../utils/IsMobile";

export default defineComponent({
  data() {
    return {
      isMobile: isMobile(),
    };
  },
});
</script>

<style scoped>
.login {
  gap: 8px;
}
.avtoriz {
  text-align: center;
}
.login .login__logo {
  background-image: url(../assets/images/pepe.gif);
  background-size: contain;
  height: 3em;
  width: 3em;
}
.login.mobile .login__logo {
  background-image: url(../assets/images/pepe-sad.gif);
  position: relative;
  width: 50%;
  height: 0;
  padding-bottom: 50%;
}
.login .login__input {
  display: flex;
  gap: 4px;
}
.login .login__input.vertical {
  flex-direction: column;
  width: 500px;
  line-height: 30px;
  font-size: 20px;
}
</style>
