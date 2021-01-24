<template>
  <div id="footerBox">
    <TmailEnsure />
    <TmailDes />
  </div>
</template>

<script>
import TmailEnsure from "./footer/TmailEnsure.vue";
import TmailDes from "./footer/TmailDes.vue";
export default {
  components: {
    TmailEnsure,
    TmailDes,
  },
};
</script>

// background background-image 会依次起作用
<style lang="stylus" scoped>
#footerBox {
  background: #fff;
  background-image: url('//img.alicdn.com/imgextra/i3/O1CN01gnsENf1c476ULFnub_!!6000000003546-2-tps-1702-546.png');
  background-size: 1702px 410px;
  background-repeat: no-repeat;
  background-position: center bottom;
  min-height: 558px;
  border-top: 1px solid #D1D7DC;
  clear: both;
  margin: 0;
  text-align: center;
  position: relative;
}
</style>