<template lang="pug">
.merchant-element
  img(src="")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ywc18 from 'assets/ywc18';

const MerchantElement = defineComponent({
  setup() {

    return {
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
// .merchant-element {}
</style>
