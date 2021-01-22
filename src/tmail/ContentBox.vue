<template>
  <div id="contentBox">
    <NavCategoryTabs></NavCategoryTabs>
    <CategoryBox></CategoryBox>
    <FestivalPageList></FestivalPageList>
    <BrandList></BrandList>
  </div>
</template>

<script>
import NavCategoryTabs from "./NavCategoryTabs.vue";
import CategoryBox from "./CategoryBox.vue";
import FestivalPageList from "./content/FestivalPageList.vue";
import BrandList from "./content/BrandList.vue";
export default {
  components: {
    NavCategoryTabs,
    CategoryBox,
    FestivalPageList,
    BrandList,
  },
};
</script>

<style lang="stylus" scoped>
#contentBox {
  background-image: url('//img.alicdn.com/imgextra/i4/O1CN012KZjVO24U2liLOBDh_!!6000000007393-2-tps-1702-1356.png');
  background-repeat: no-repeat;
  background-position: center -170px;
  height: 5000px;
}
</style>