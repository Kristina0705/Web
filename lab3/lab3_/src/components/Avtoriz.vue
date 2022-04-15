<template>
  <div class="body-div">
    <div class="body-authorization">
      <div class="title">Авторизация</div>
      <div class="form-authorization">
        <div class="login">
          <p>Логин</p>
          <input class="login-input" type="text" v-model="data.login" />
        </div>
        <div class="password">
          <p>Пароль</p>
          <input
            class="password-input"
            type="password"
            v-model="data.password"
          />
        </div>
        <div class="button-div">
          <button type="submit" @click="signInButtonPressed">
            Авторизоваться
          </button>
          <button class="button" type="submit1" @click="signInButtonPressed1">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueRouter from "vue-router";
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

Vue.use(VueRouter);

export type LoginDTO = {
  login: string;
  password: string;
};


@Component
export default class HelloWorld extends Vue {
  data: LoginDTO = { login: "", password: "" };
  signInButtonPressed1(){
    this.$router.push("/");
    }
  signInButtonPressed(): void {
    axios
      .post("/auth", this.data)
      .then((res) =>
        alert(
          res.data.success
            ? "Вы успешно авторизованы"
            : "Вы ввели не верные данные"
        )
      );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.body {
  margin: 0px auto;
  min-height: 100vh;
}
.body-div {
  padding-top: 14%;
  align-self: center;
}
.body-authorization {
  background-color: #d0eb85;
  border-radius: 5px;
  font-family: Arial;
  margin: 0 auto;
  width: 25%;
  min-width: 350px;
}
.title {
  font-size: 30px;
  padding-top: 10px;
  text-align: center;
  margin: 0 auto auto 0;
}
.form-authorization {
  font-size: 24px;
  padding: 30px;
  text-align: left;
}
.input {
  border-radius: 6px;
  font-size: 22px;
}
.button-div {
  padding-top: 30px;
}
.button-input {
  border-radius: 30px;
  border-width: 16px;
  border-color: rgb(10, 10, 10);
  background: rgb(2, 2, 2);
  height: 60px;
  color: rgb(255, 249, 249);
}
p {
  margin: 3px 0;
}
.button-div {
  padding-left: 5%;
}
</style>
