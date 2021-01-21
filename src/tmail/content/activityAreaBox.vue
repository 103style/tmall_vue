<template>
  <div id="activityAreaBox">
    <FestivalPageList></FestivalPageList>
  </div>
</template>
<script>
import FestivalPageList from "./festivalPageList.vue";
export default {
  components: {
    FestivalPageList,
  },
};
</script>

<style lang="stylus" scoped>
#activityAreaBox {
  height: 1000px;
  margin: auto;
  width: 1230px;
  padding-right: 30px;
}
</style>