<template>
  <div id="tmailEnsure">
    <div>
      <a :href="'#' + i" target="_blank" v-for="i in 4"> </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
#tmailEnsure {
  width: 1190px;
  height: 100px;
  background: url('//img.alicdn.com/tfs/TB14dANRXXXXXbdXXXXXXXXXXXX-1190-100.jpg') no-repeat;
  margin: 25px auto;
  padding: 0;

  a {
    float: left;
    display: block;
    width: 297px;
    height: 100px;
  }
}
</style>