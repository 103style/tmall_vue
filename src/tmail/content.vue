<template>
  <div id="content">
    <NavTabs></NavTabs>
    <CategoryBox></CategoryBox>
  </div>
</template>

<script>
import NavTabs from "./nav_tabs.vue";
import CategoryBox from "./categoryBox.vue";
export default {
  components: {
    NavTabs,
    CategoryBox,
  },
};
</script>
