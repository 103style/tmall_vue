<template>
  <div id="festivalList">
    <div class="festivalBox">
      <div v-for="(item, index) in festivalList" class="festivalItem">
        <a :href="'#' + item.title" target="_black" class="festivalLink">
          <span class="iconfont">
            {{ item.iconDes }}
          </span>
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    festivalList: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
#festivalList {
  height: 500px;
  width: 200px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA1BMVEUYFRXvJ83tAAAAAXRSTlPM0jRW/QAAAApJREFUCNdjAAIAAAQAASDSLW8AAAAASUVORK5CYII=');

  a {
    font-size: 14px;
  }

  .festivalBox {
    position: relative;
    padding-top: 29px;

    .festivalItem {
      width: 100%;
      padding: 0 24px;
      margin-bottom: 14px;
      position: relative;
      height: 31.2px;
      line-height: 31.2px;
      color: #fff;
      font-size: 14px;
      overflow: hidden;
      box-sizing: border-box;

      .festivalLink {
        display: block;
        width: 100%;
        height: 31px;
        border: 1px solid #cb0c10;
        border-radius: 10px;
        color: #fff;
        text-align: left;
        padding-left: 34px;
        box-sizing: border-box;
        padding-right: 10px;
        line-height: 29px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .festivalLink:hover {
        background: #cb0c10;
      }
    }
  }
}</style>