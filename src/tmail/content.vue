<template>
  <div id="content">
    <NavTabs></NavTabs>
    <CategoryBox></CategoryBox>
    <FestivalPageList></FestivalPageList>
    <BrandList></BrandList>
  </div>
</template>

<script>
import NavTabs from "./nav_tabs.vue";
import CategoryBox from "./categoryBox.vue";
import FestivalPageList from "./content/festivalPageList.vue";
import BrandList from "./content/brandList.vue";
export default {
  components: {
    NavTabs,
    CategoryBox,
    FestivalPageList,
    BrandList,
  },
};
</script>

<style lang="stylus" scoped>
#content {
  background-image: url('//img.alicdn.com/imgextra/i4/O1CN012KZjVO24U2liLOBDh_!!6000000007393-2-tps-1702-1356.png');
  background-repeat: no-repeat;
  background-position: center -170px;
  height: 5000px;
}
</style>