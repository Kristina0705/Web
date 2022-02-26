<template>
  <div class="container" v-html="html"></div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return { html: "" };
  },
  mounted() {
    axios
      .get((process.env.BASE_URL || "/") + "ya-copy.html")
      .then(({ data }) => (this.html = data));
  },
});
</script>
<style scoped>
.container {
  flex: 1 1 auto;
}
</style>
