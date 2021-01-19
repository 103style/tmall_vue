<template>
  <div id="hotItem">
    <div v-for="items in hotitem">
      <div v-for="item in items">
        <a href="#">
          {{ item.title }}
        </a>
        <div>
          <span v-for="t in item.items">{{ t.name }}  </span>
        </div>
      </div>
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