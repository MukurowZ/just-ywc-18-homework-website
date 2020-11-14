<template lang="pug">
.index.pa-5
  .font-weight-black ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
  MerchantElement(
    v-for="(merchant, i) in ywc18.merchants"
    :merchant="merchant"
    :key="`${merchant.shopNameTH}-${i}`"
    )
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import MerchantElement from '~/components/MerchantElement.vue';
import ywc18 from 'assets/ywc18';

const index = defineComponent({
  setup() {
    return {
      MerchantElement,
      ywc18,
    }
  },
});

export default index;
</script>

<style lang="scss">

</style>
