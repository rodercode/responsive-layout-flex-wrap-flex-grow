<template>
  <button class="lg:hidden" @click="$emit('toggleMenu')">
    <IconMenu class="w-8 h-8" />
    <IconClose class="hidden w-8 h-8" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT ICONS
import IconMenu from "~icons/heroicons/bars-3";
import IconClose from "~icons/heroicons/x-mark-20-solid";

export default defineComponent({
  props: {
    isNavOpen: {
      type: Boolean,
    },
  },
  components: {
    IconMenu,
    IconClose,
  },
  methods: {},
});
</script>
