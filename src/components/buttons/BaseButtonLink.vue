<template>
  <!-- BUTTON LINK -->
  <a>{{ btnText }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    btnText: {
      type: String,
    },
  },
});
</script>

<style lang="css" scoped>
.btn--link {
  @apply inline-block px-9 py-2 font-bold
  text-btn-text-color transition duration-300
    cursor-pointer text-lg bg-primary-base-color rounded-md hover:bg-primary-dark-color;
}
</style>
