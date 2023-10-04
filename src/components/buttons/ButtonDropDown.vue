<template>
  <button
    class="flex items-center pl-1 border-black rounded-md border-1"
    @click="$emit('toggleMenu')"
  >
    <span>Create Account</span>
    <IconDownArrow class="w-8 h-8" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT ICONS
import IconDownArrow from "~icons/heroicons/arrow-small-down-20-solid";

export default defineComponent({
  props: {
    isNavOpen: {
      type: Boolean,
    },
  },
  components: {
    IconDownArrow,
  },
  methods: {},
});
</script>
