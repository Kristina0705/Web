<template>
    <div id="ch1">
      <HelloWorld />
    </div>
    <div id="ch2">
      <div class="box">
        <BokMenu />
      </div>
      <div class="box">
        <OsnovaMenu />
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import OsnovaMenu from "./components/OsnovaMenu.vue";
import BokMenu from "./components/BokMenu.vue";


@Options({
  components: {
    HelloWorld,
    OsnovaMenu,
    BokMenu
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  margin-top: 60px;
}
#contener {
  width: 100%;
}
#ch2 {
  display: flex;
} 
#ch1 {
  display: block;
} 
.box {
  display: flex;
}
</style>
