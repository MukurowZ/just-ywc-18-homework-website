<template lang="pug">
.index.pa-5
  .font-weight-black ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
  .d-flex.mt-3
    SidebarFilter.flex-grow-1.sidebar.d-none.d-sm-flex.mr-3(
      @filterCategoryChange="filterCategoryChangeHandle"
      @filterProvinceChange="filterProvinceChangeHandle"
      @filterPriceChange="filterPriceChangeHandle"
      @filterSubCategoryChange="filterSubCategoryChangeHandle"
    )
    .elm.flex-grow-1
      template(
        v-for="(merchant, i) in computedMerchants"
        )
        MerchantElement(:merchant="merchant" :key="i")
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
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';
import MerchantElement from '~/components/MerchantElement.vue';
import SidebarFilter from '~/components/SidebarFilter.vue';
import ywc18 from 'assets/ywc18';

const index = defineComponent({
  setup(props: any) {
    const filterCategory = ref('ร้านอาหารและเครื่องดื่ม');
    function filterCategoryChangeHandle(category: string) {
      filterCategory.value = category;
    }

    const filterProvince = ref('พื้นที่ใกล้ฉัน');
    function filterProvinceChangeHandle(province: string) {
      filterProvince.value = province;
    }

    const filterPriceChange = ref('');
    function filterPriceChangeHandle(price: string) {
      filterPriceChange.value = price;
    }

    const filterSubCategory = ref('ทั้งหมด');
    function filterSubCategoryChangeHandle(subCategory: string) {
      filterSubCategory.value = subCategory;
    }

    const computedMerchants = computed(() => {
      let arr = ywc18.merchants;
      if (filterProvince.value !== 'พื้นที่ใกล้ฉัน') {
        arr = arr.map((elm: any) => {
          if (elm.addressProvinceName === filterProvince.value) return elm;
        }).filter((elm: any) => elm !== undefined);
      }
      if (filterPriceChange.value !== '') {
        if (filterPriceChange.value === 'ทุกช่วงราคา') return arr;
        const priceTier = [ '', 'ไม่เกิน 100 บาท', '100 - 300 บาท', '300 - 600 บาท', 'มากกว่า 600 บาท' ];
        arr = arr.map((elm: any) => {
          if (elm.priceLevel === priceTier.indexOf(filterPriceChange.value)) return elm;
        }).filter((elm: any) => elm !== undefined);
      }
      return arr;
    });

    return {
      MerchantElement,
      SidebarFilter,
      computedMerchants,
      filterCategoryChangeHandle,
      filterProvinceChangeHandle,
      filterPriceChangeHandle,
      filterSubCategoryChangeHandle,
    }
  },
});

export default index;
</script>

<style lang="scss">
.index {
  background: linear-gradient(4deg, rgba(0,212,255,1) 6%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 89%);
  background-image: url('https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/result-bg.png?fbclid=IwAR2lutABcSBPZy3Q10wyWMklbEftLkV4vXd_dgP4rFdWjK3pCVVrhK6e87Q');
  background-size: cover;
  min-height: 100vh;
  .sidebar {
    max-width: 300px;
  }
}
</style>
