<template lang="pug">
.index.pa-5
  .font-weight-black ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
  v-row
    v-col(
      cols="2"
      sm="0"
    )
      SidebarFilter
    v-col(
      cols="10"
      sm="0"
    )
      .elm
        template(
          v-for="(merchant, i) in ywc18.merchants"
          )
          MerchantElement(:merchant="merchant" :key="`${merchant.shopNameTH}-${i}`")
          .mb-3
        .d-flex.justtify-center
          v-btn ดูเพิ่มเติม

</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import MerchantElement from '~/components/MerchantElement.vue';
import SidebarFilter from '~/components/SidebarFilter.vue';
import ywc18 from 'assets/ywc18';

const index = defineComponent({
  setup() {
    return {
      MerchantElement,
      SidebarFilter,
      ywc18,
    }
  },
});

export default index;
</script>

<style lang="scss">

</style>
