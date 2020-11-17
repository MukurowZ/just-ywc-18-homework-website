<template lang="pug">
.merchant-element
  v-card.d-none.d-sm-flex.pa-1
    .pic
      img(
        :src="merchant.coverImageId")
    .ml-3.pa-2.d-flex.flex-column
      .d-flex
        .font-weight-bold.mr-3(v-if="merchant.shopNameTH") {{ merchant.shopNameTH }}
        .ship.pa-1(:class="getOpenClass(merchant.isOpen)")
          | {{ getOpenStatus(merchant.isOpen) }}
      .text-grey.font-sm(v-html="getMerchantDescription()")
      br
      .text-grey.font-sm(v-html="merchant.highlightText")
      .d-flex(v-if="merchant.categoryName === 'ร้านอาหาร'")
        .font-sm เมนูแนะนำ:
        .text-grey.font-sm {{ getRecommendMenu() }}
      br
      .d-flex
        v-icon.text-halfhalf-green.mr-1(
          v-for="facility in merchant.facilities"
          :key="`${merchant.shopNameTH}-${facility}`"
          ) {{ facilityToIcon(facility) }}

  v-card.d-flex.flex-column.d-sm-none.mx-auto.mb-6(max-width="600")
    .pic(style="width: 100%")
      img(
        :src="merchant.coverImageId")
    v-card-text
      .d-flex
        .font-weight-bold.mr-3(v-if="merchant.shopNameTH") {{ merchant.shopNameTH }}
        .ship.pa-1(:class="getOpenClass(merchant.isOpen)")
          | {{ getOpenStatus(merchant.isOpen) }}
      .text-grey.font-sm(v-html="getMerchantDescription()")
      br
      .text-grey.font-sm(v-html="merchant.highlightText")
      .d-flex(v-if="merchant.categoryName === 'ร้านอาหาร'")
        .font-sm เมนูแนะนำ:
        .text-grey.font-sm {{ getRecommendMenu() }}
      br
      .d-flex
        v-icon.text-halfhalf-green.mr-1(
          v-for="facility in merchant.facilities"
          :key="`${facility}`"
          ) {{ facilityToIcon(facility) }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const MerchantElement = defineComponent({
  setup(props: any) {
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

    function getOpenStatus(status: string) {
      if (status === 'Y') return 'เปิดอยู่';
      if (status === 'N') return 'ปิดแล้ว';
      return '';
    }

    function getOpenClass(status: string) {
      if (status === 'Y') return 'halfhalf-green';
      if (status === 'N') return 'halfhalf-grey';
      return '';
    }

    function getMerchantDescription() {
      let output = '';
      output += props.merchant.subcategoryName;
      output += ' | ';
      for(let i = 0; i < 4; i += 1) {
        if (props.merchant.priceLevel >= i) output += '<b>฿</b>';
        else output += '฿';
      }
      output += ' | ';
      output += props.merchant.addressDistrictName;
      output += props.merchant.addressProvinceName;
      return output;
    }

    function getRecommendMenu() {
      let output = ' ';
      props.merchant.recommendedItems.forEach((elm: any, index: number) => {
        output += elm;
        if (index !== props.merchant.recommendedItems.length - 1) output += ', ';
      });
      return output;
    }

    return {
      facilityToIcon,
      getOpenStatus,
      getOpenClass,
      getMerchantDescription,
      getRecommendMenu,
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

}
.font-sm {
  font-size: 0.9rem;
}

.text-halfhalf-green {
  color: #1fc300 !important;
}

.text-grey {
  color: #a4a4a4;
}
</style>
