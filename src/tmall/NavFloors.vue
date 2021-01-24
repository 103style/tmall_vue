<template>
  <div class="navFloorLaypout">
    <div class="navFloor" :class="{ showNavFloor: showNavFloor }">
      <div class="navFloorWrapper">
        <div class="floorLinkLayout headerNav">导航</div>
        <div class="floorList">
          <a
            :href="'#' + floorItem"
            v-for="floorItem in floorList"
            class="floorLinkLayout"
          >
            <div class="floorLink">
              {{ floorItem }}
            </div>
          </a>
        </div>
        <div class="floorLinkLayout backToTop">导航</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showNavFloor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      floorList: [
        "天猫超市",
        "天猫国际",
        "美丽人生",
        "潮电酷玩",
        "居家生活",
        "打造爱巢",
        "户外出行",
        "猜你喜欢",
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.navFloorLaypout {
}

.navFloor {
  display: none;
  position: fixed;
  left: 50%;
  z-index: 9999;
  width: 35px;
  text-align: center;
  bottom: 50px;
  transition: all 30s ease-out;

  .floorLinkLayout {
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1px;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    font-size: 12px;
  }

  .navFloorWrapper {
    margin-left: -673px !important;

    .headerNav {
      background-color: #ff0036;
    }

    .floorList {
      .floorLink {
        line-height: 12px;
        width: 24px;
        height: 28px;
        margin: 6px auto;
      }
    }

    .backToTop {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

.showNavFloor {
  display: block;
}
</style>