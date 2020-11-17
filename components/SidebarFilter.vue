<template lang="pug">
v-card.sidebar-filter
  .pa-3
    .merchant-type-filter
      .font-weight-bold ประเภทร้านค้า
      v-radio-group(
        v-model="selectedCategory"
        @input="$emit('filterCategoryChange', selectedCategory)"
        )
        v-radio(
          v-for="category in categories"
          :key="category.name"
          :label="category.name"
          :value="category.name"
          )

    .merchant-province-filter.mt-5
      .font-weight-bold จังหวัด/ใกล้ฉัน
      v-select.flex-grow-0.search-select(
        v-model="selectedSearchProvince"
        @input="$emit('filterProvinceChange', selectedSearchProvince)"
        :items="searchProvince"
        single-line
        dense
        outlined)
        template(v-slot:prepend-inner)
          v-icon mdi-map-marker

    .merchant-price-filter.mt-5
      .font-weight-bold ราคา
      v-select.flex-grow-0.search-select(
        v-model="selectedSearchPrice"
        @input="$emit('filterPriceChange', selectedSearchPrice)"
        :items="priceRanges"
        :placeholder="'กรุณาเลือก'"
        single-line
        dense
        outlined)

    .merchant-subcategory-filter.mt-5(v-if="subCategories.length > 0")
      .font-weight-bold ประเภทร้านอาหารและเครื่องดื่ม
      v-radio-group(
        v-model="subCategoryFilter"
        @input="$emit('filterSubCategoryChange', subCategoryFilter)"
        )
        v-radio(
          v-for="(subCategory, i) in subCategories"
          :key="`${subCategory}-${i}`"
          :label="subCategory"
          :value="subCategory"
          )
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@nuxtjs/composition-api';
import ywc18 from 'assets/ywc18';

const SidebarFilter = defineComponent({
  setup(props: any, context: any) {
    const categories = [{ name: 'ทั้งหมด', subcategories: [], }, ...ywc18.categories ];
    const selectedCategory = ref('ร้านอาหารและเครื่องดื่ม');

    const provinces = ywc18.provinces;
    const selectedSearchProvince = ref('พื้นที่ใกล้ฉัน');
    const searchProvince = [ 'พื้นที่ใกล้ฉัน', ...provinces ];

    const priceRanges = [ 'ทุกช่วงราคา', ...ywc18.priceRange ];
    const selectedSearchPrice = ref('');

    const subCategoryFilter = ref('ทั้งหมด');
    const subCategories = computed(() => {
      const index = ywc18.categories.find(elm => elm.name == selectedCategory.value);
      if (index) return [ 'ทั้งหมด', ...index.subcategories ];
      return [];
    });

    return {
      categories,
      selectedCategory,
      searchProvince,
      selectedSearchProvince,
      priceRanges,
      selectedSearchPrice,
      subCategoryFilter,
      subCategories,
    };
  },
});

export default SidebarFilter;
</script>

<style lang="scss">
// .sidebar-filter {}
</style>
