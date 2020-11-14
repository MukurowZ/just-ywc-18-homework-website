<template lang="pug">
v-card.merchant-element
  .d-flex
    .pic
      img(
        :src="merchant.coverImageId")
    .ml-3.pa-2.d-flex.flex-column
      .d-flex
        .font-weight-bold.mr-3
          | {{ merchant.shopNameTH }}
        .ship.pa-1(:class="`${merchant.isOpen === 'Y' ? 'halfhalf-green' : 'halfhalf-grey'}`")
          | {{ merchant.isOpen === 'Y' ? 'เปิดอยู่' : 'ปิดแล้ว' }}
      .d-flex
        .text-grey.font-sm {{ merchant.subcategoryName }} |
        PriceLevelDisplay.ml-2(:level="merchant.priceLevel")
        .ml-2.text-grey.font-sm {{ '| ' }} {{ merchant.addressDistrictName }} {{ merchant.addressProvinceName }}
      br
      .text-grey.font-sm(v-html="merchant.highlightText")
      .d-flex
        .font-sm เมนูแนะนำ:
        span.ml-1.text-grey.font-sm(v-for="(recItem, i) in merchant.recommendedItems")
          |  {{ recItem }}
          span(v-if="i !== merchant.recommendedItems.length - 1") ,
      br
      .d-flex
        v-icon.text-halfhalf-green.mr-1(
          v-for="facility in merchant.facilities"
          :key="`${merchant.shopNameTH}-${facility}`"
          ) {{ facilityToIcon(facility) }}

</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ywc18 from 'assets/ywc18';
import PriceLevelDisplay from '../components/PriceLevelDisplay.vue';

const MerchantElement = defineComponent({
  setup() {
    function facilityToIcon(facility: string) {
      switch(facility) {
        case 'ที่จอดรถ':
          return 'mdi-car-hatchback';
        case 'สามารถนำสัตว์เลี้ยงเข้าได้':
          return 'mdi-paw';
        case 'รับจองล่วงหน้า':
          return 'mdi-bookmark-check-outline';
      }
      return '';
    };

    return {
      facilityToIcon,
      PriceLevelDisplay,
    };
  },
  props: {
    merchant: {
      type: Object,
      default() { return {
        shopNameTH: '',
        categoryName: '',
        subcategoryName: '',
        coverImageId: '',
        facilities: [],
        priceLevel: 0,
        isOpen: 'N',
        highlightText: '',
        recommendedItems: '',
        addressProvinceName: '',
        addressDistrictName: '',
      }},
    },
  },
});

export default MerchantElement;
</script>

<style lang="scss">
.merchant-element {
  .pic {
    overflow: hidden;
    width: 240px;
    height: 224px;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;

      object-fit: cover;
    }
  }

  .ship {
    border-radius: 5px;
    color: white;
    font-size: 0.8rem;
  }

  .halfhalf-green {
    background-color: #1fc300;
  }

  .halfhalf-grey {
    background-color: #a1a1a1;
  }

  .font-sm {
    font-size: 0.9rem;
  }
}

.text-halfhalf-green {
  color: #1fc300 !important;
}

.text-grey {
  color: #a4a4a4;
}
</style>
