<template>
<div id="contener1">
    <div class="text1">
        <p >Wallet</p>
    </div>
    <div class="logo">
       <img src="@/assets/Wallet.png"> 
    </div>
</div>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";

export default class OsnovaMenu extends Vue{

}
</script>

<style>
.logo {
/* width: 1023px; */
height: 324px;
padding-left: 50px;
}
.text1 {
display: flex;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
padding-left: 50px;
color: #858585;
padding-top: 60px;
}
#contener1 {
    display: block;
    background-color: #FFFFFF;
}
</style>