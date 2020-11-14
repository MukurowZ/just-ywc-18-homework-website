<template lang="pug">
.index.pa-5
  .font-weight-black ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import ywc18 from 'assets/ywc18';

const index = defineComponent({
  setup() {
    return {
      ywc18,
    }
  },
});

export default index;
</script>

<style lang="scss">

</style>
