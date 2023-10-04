<template>
  <button @click="handleButtonClick">
    <slot>
      {{ btnText }}
    </slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    btnText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleButtonClick() {
      console.log("Button was pressed");
    },
  },
});
</script>

<style lang="css" scoped>
.btn--rounded {
  @apply w-20 h-20 text-lg duration-500 rounded-full bg-primary-base-color text-btn-text-color hover:bg-primary-dark-color font-bold;
}

.btn {
  @apply text-lg duration-500 rounded-md px-9 py-2 bg-primary-base-color text-btn-text-color hover:bg-primary-dark-color font-bold;
}
</style>
