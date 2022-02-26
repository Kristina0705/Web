<template>
  <span class="display-name">{{ displayName }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { displayName: "Корякина Кристина Дмитриевна" };
  },
});
</script>

<style scoped>
.display-name {
  font: 3em "Lobster", Avenir, Helvetica, Arial, sans-seri;
}
</style>
