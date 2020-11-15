<template lang="pug">
.price-level-display
  span.font-sm(v-for="lv in 4" :class="`${lv > level ? 'text-grey' : 'font-weight-medium'}`")
    | ฿
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const PriceLevelDisplay = defineComponent({
  // setup() {},
  props: {
    level: {
      type: Number,
      default() { return 0; },
    },
  },
});

export default PriceLevelDisplay;
</script>

<style lang="scss">
// .price-level-display {}
</style>
