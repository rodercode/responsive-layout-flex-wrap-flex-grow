<template>
  <li class="transition duration-300 hover:text-primary-base-color">
    <a href="#">{{ name }}</a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
});
</script>
