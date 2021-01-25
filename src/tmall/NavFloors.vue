<template>
  <div class="navFloorLaypout">
    <div class="navFloor" :class="{ showNavFloor: showNavFloor }">
      <div
        class="navFloorWrapper"
        :class="{ showNavFloorWrapper: showNavFloor }"
      >
        <div class="floorLinkLayout headerNav">导航</div>
        <div class="floorList">
          <a
            @click="scroolToView(floorItem.id)"
            v-for="(floorItem, index) in floorList"
            class="floorLinkLayout"
            :style="changeStyle(index)"
          >
            <div class="floorLink">
              {{ floorItem.title }}
            </div>
          </a>
        </div>
        <div class="floorLinkLayout backToTop" @click="backToTop">
          <span class="iconfont iconfontSpan">&#xe501;</span>
          <div>顶部</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    changeStyle() {
      return function (itemIndex) {
        if (itemIndex != this.showIndexArea) return "";

        return "background:" + this.floorList[itemIndex].bgColor;
      };
    },
  },
  data() {
    return {
      showIndexArea: -1,
      showIndexAreaThreshold: -320,
      showNavFloor: false,
      floorList: [
        {
          title: "天猫超市",
          id: "floor-tmcs",
          bgColor: "#64C333",
        },
        {
          title: "天猫国际",
          id: "floor-tmgj",
          bgColor: "#ff0036",
        },
        {
          title: "美丽人生",
          id: "floor-mlrs",
          bgColor: "#EA5F8D",
        },
        {
          title: "潮电酷玩",
          id: "floor-cdkw",
          bgColor: "#0AA6E8",
        },
        {
          title: "居家生活",
          id: "floor-jjsh",
          bgColor: "#64C333",
        },
        {
          title: "打造爱巢",
          id: "floor-dzac",
          bgColor: "#F15453",
        },
        {
          title: "户外出行",
          id: "floor-hwcx",
          bgColor: "#19C8A9",
        },
        {
          title: "猜你喜欢",
          id: "floor-cnxh",
          bgColor: "#ff0036",
        },
      ],
      floorListTops: [],
    };
  },
  mounted() {
    // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    window.addEventListener("scroll", this.handleScroll);

    for (let i = 0; i < this.floorList.length; i++) {
      let id = "#" + this.floorList[i].id;
      this.floorListTops[i] = document.querySelector(id).offsetTop;
    }
  },
  methods: {
    handleScroll() {
      let y;
      if (window.pageXOffset) {
        y = window.pageYOffset;
      } else {
        y = document.body.scrollTop + document.documentElement.scrollTop;
      }
      let id = "#" + this.floorList[0].id;
      let target = document.querySelector(id);
      let threshold = y + window.screen.availHeight;
      this.showNavFloor = threshold > target.offsetTop;

      this.showIndexArea = -1;
      for (let i = this.floorListTops.length - 1; i >= 0; i--) {
        if (y - this.floorListTops[i] > this.showIndexAreaThreshold) {
          this.showIndexArea = i;
          break;
        }
      }
    },
    scroolToView(id) {
      let idValue = "#" + id;
      let top = document.querySelector(idValue).offsetTop;
      window.scrollTo({ top: top - 60, behavior: "smooth" });
    },
    backToTop() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.navFloorLaypout {
}

.navFloor {
  margin-left: -673px !important;
  position: fixed;
  left: 50%;
  z-index: 9999;
  width: 35px;
  text-align: center;
  bottom: 50px;

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
    height: 0;
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s ease-out;

    .headerNav {
      background-color: #ff0036;
    }

    .floorList {
      width: 35px;

      .floorLink {
        line-height: 12px;
        width: 24px;
        height: 28px;
        margin: 6px auto;
      }
    }

    .backToTop {
      background-color: rgba(0, 0, 0, 0.3);
      line-height: 13px;

      .iconfontSpan {
        font-size: 26px;
        margin-top: 4px;
        margin-bottom: 1px;
        display: block;
      }
    }
  }

  .showNavFloorWrapper {
    opacity: 1;
    width: 100%;
    height: 370px;
  }
}

.showNavFloor {
  display: block;
}
</style>