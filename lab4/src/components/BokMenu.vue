<template>
<div class="contener">
    <div class="a">
        <img class="pic" src="@/assets/1.png">
        <a class="text" href="#">Overview</a>
    </div>
    <div class="a">
         <img class="pic" src="@/assets/2.png">
        <a class="text" href="#">Trade</a>
    </div>
    <div class="a">
        <img class="pic" src="@/assets/1.png">
        <a class="text" href="#">Wallet</a>
    </div>
    <div class="a">
         <img class="pic" src="@/assets/4.png">
        <a class="text" href="#">Transactions</a>
    </div>
    <div class="a">
         <img class="pic" src="@/assets/5.png">
        <a class="text" href="#">Statistics</a>
    </div>
    <div class="a">
         <img class="pic" src="@/assets/4.png">
        <a class="text" href="#">Settings</a>
    </div>
</div>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";

export default class BokMenu extends Vue{

}
</script>

<style>
.text {
    display: flex;
padding-left: 15px;
font-family: 'Poppins';
font-style: normal;
font-size: 12px;
color: #858585;
 text-decoration: none;
}
.a {
    display: flex;
    padding-top: 57px;
}
.contener {
    height: 100%;
    width: 290px;
    display: block;
    border-right-width:1;
    border-right-color: #F0F0F0;
    border-right-style: solid;
}
.pic {
    display: flex;
padding-left: 92px;
width: 15px;
height: 10px;
}
</style>