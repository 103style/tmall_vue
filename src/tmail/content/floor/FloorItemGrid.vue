<template>
  <div class="gridLayout"></div>
</template>

<script>
export default {
  props: {
    gridList: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style lang="stylus" scoped>
.gridLayout {
  width: 995px;
  height: 618px;
  overflow: hidden;
}
</style>