<template lang="pug">
v-app.index
  v-main
    .py-1.px-10.d-flex.justify-center
      img.justify-left.d-none.d-sm-flex(
        style="height: 40px;"
        src="~/assets/halfhalf-logo.png")
      img.justify-left.d-flex.d-sm-none(
        style="height: 40px;"
        src="~/assets/halfhalfhalf-logo.png")
      .search-box.ml-5.flex-grow-1
        .d-flex.flex-row(style="flex-wrap: nowrap;")
          v-select.flex-grow-0.search-select.d-none.d-sm-flex(
            v-model="selectedSearchType"
            :items="searchType"
            single-line
            dense
            outlined)
            template(v-slot:prepend-inner)
              v-icon mdi-map-marker
          v-text-field.flex-grow-1.search-input(
            dense
            outlined
            append-icon='mdi-magnify'
            placeholder='ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป'
          )
          v-btn(
            icon
          ).ml-3
            v-icon.d-flex.d-sm-none.pointer mdi-filter-outline
    .top-nav-bar
      v-breadcrumbs.pointer(
        dark
        :items="breadcrumbItems")

    Nuxt
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import ywc18 from 'assets/ywc18';

const defaultLayout = defineComponent({
  setup() {
    const selectedSearchType = ref('พื้นที่ใกล้ฉัน');
    const provinces = ywc18.provinces;
    const searchType = [ 'พื้นที่ใกล้ฉัน', ...provinces ];

    const breadcrumbItems = [{ text: 'หน้าแรก' }, { text: 'ค้นหา'}];
    return {
      searchType,
      selectedSearchType,
      breadcrumbItems,
    }
  },
});

export default defaultLayout;
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');

.filter-button {
  display: none !important;
}

.logo-small {
  display: none;
}

.logo-normal {
  display: inline-flex;
}

.search-box {
  box-shadow: none;
  box-sizing: border-box;
  border-color: rgb(180, 180, 180) !important;
}

.v-application {
  font-family: 'Prompt', sans-serif !important;
}

.v-text-field__details {
  display: none;
}

.top-nav-bar {
  background-color: #283a7c;
  min-height: 50px;
  color: white;

  .pointer {
    cursor: pointer;
  }
}
</style>
