<template>
  <div class="contener2">
    <img class="logo" src="@/assets/logo1.png">

    <div class="poisk">
      <img class="logo1" src="@/assets/Search-Icon.png">
      <input class="input" name="s" placeholder="" type="search">
    </div>
  
    <img class="user" src="@/assets/user.png">

    <p class="username">Raman Ridwan</p>

    <img class="uvedomlenie" src="@/assets/logo3.png">
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  position: absolute;
  width: 104px;
  height: 20.96px;
  left: 20px;
  top: 35.02px;
}
.lupa {
  position: absolute;
  left: 50.4%;
  right: 48.7%;
  top: 4.76%;
  bottom: 93.48%;
}
.user {
  position: absolute;
  width: 36px;
  height: 36px;
  left: 1196px;
  top: 23px;
}
.username {
  position: absolute;
width: 91px;
height: 24px;
left: 1243px;
top: 35px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
/* identical to box height, or 200% */
color: #858585;
}
.uvedomlenie {
  position: absolute;
width: 65.62px;
height: 33.19px;
left: 1377px;
top: 30.81px;
}
.poisk {
  position: absolute;
  left: 722px;
  top: 21px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  border-color: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  border: 1px solid;
  padding: 10px;
  width: 422px;
}
.logo1 {
top: 4.76%;
bottom: 93.48%;
padding-left: 50px;
}
.input {
outline: none;
border: none;
width: auto;
}
.contener2 {
  height: 43px;
  border-bottom-width:1;
    border-bottom-color: #F0F0F0;
    border-bottom-style: solid;
}
</style>
