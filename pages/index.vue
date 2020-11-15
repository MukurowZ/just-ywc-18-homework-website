<template lang="pug">
.index.pa-5
  .font-weight-black ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
  .d-flex.mt-3
    SidebarFilter.flex-grow-1.sidebar.d-none.d-sm-flex.mr-3
    .elm.flex-grow-1
      template(
        v-for="(merchant, i) in ywc18.merchants"
        )
        MerchantElement(:merchant="merchant" :key="`${merchant.shopNameTH}-${i}`")
        .mb-3
      .d-flex.justify-center
        v-btn(
          :min-width="100"
          :max-width="300"
          :width="300"
          :height="60"
          large) ดูเพิ่มเติม

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
.index {
  background: rgb(0,212,255);
  background: linear-gradient(4deg, rgba(0,212,255,1) 6%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 89%);
  .sidebar {
    max-width: 300px;
  }
}
</style>
