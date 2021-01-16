<template>
  <div id="hotItem">
    <div v-for="items in hotitem">
      <a href="#" v-for="item in items">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotitem: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
</style>