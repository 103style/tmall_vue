<template>
  <div id="sliderbox">
    <div
      class="sliderContents"
      @mouseover="stopSlider"
      @mouseout="resumeSlider"
    >
      <SliderItem
        v-for="(sliderContent, index) in sliderContents"
        :sliderInfo="sliderContent"
        :class="{ none: index != curIndex }"
      ></SliderItem>
    </div>

    <div class="sliderDotBox">
      <li
        class="sliderDot"
        v-bind:class="{ sliderDotSelected: index == curIndex }"
        @click="changeCurIndex(index)"
        v-for="(sliderContent, index) in sliderContents"
      ></li>
    </div>
  </div>
</template>

<script>
import SliderItem from "./SliderItem.vue";
export default {
  components: {
    SliderItem,
  },
  methods: {
    changeCurIndex(index) {
      this.stopSlider();
      this.curIndex = index;
      this.resumeSlider();
    },
    updateCurIndex() {
      this.curIndex = (this.curIndex + 1) % this.sliderContents.length;
    },
    stopSlider() {
      clearInterval(this.timer);
    },
    resumeSlider() {
      this.timer = setInterval(this.updateCurIndex, 5000);
    },
  },
  mounted() {
    this.resumeSlider();
  },
  data() {
    return {
      curIndex: 0,
      timer: null,
      sliderContents: [
        {
          bgColor: "#3800c0",
          img:
            "//img.alicdn.com/imgextra/i4/10/O1CN01wMqgTs1Bwcc9lw9HN_!!10-0-luban.jpg_q100.jpg_.webp",
          url: "#1",
          floors: [
            "//img.alicdn.com/imgextra/i3/177/O1CN01lofYPj1DB6kuxF5Hp_!!177-2-luban.png_240x5000q100.jpg_.webp",
            "//img.alicdn.com/imgextra/i1/194/O1CN01c6iXI81DItUXv2sMN_!!194-2-luban.png_240x5000q100.jpg_.webp",
          ],
        },
        {
          bgColor: "rgb(232, 232, 232)",
          img: "//aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg",
          url: "#2",
          adurl:
            "//alm.tclcom.com:7003/im;jsessionid=F0AFEE17DA278B2D76E1C3243E9B092C?mks.commandRunner=1578#1",
          floors: [],
        },
        {
          bgColor: "#ed472e",
          img:
            "http://img.alicdn.com/imgextra/i3/20/O1CN01R9KIXN1C1CZong1vz_!!20-0-luban.jpg_q100.jpg_.webp",
          url: "#3",
          floors: [
            "//img.alicdn.com/imgextra/i4/144/O1CN015F8YtM1Cvzgfh3flR_!!144-2-luban.png_240x5000q100.jpg_.webp",
            "//img.alicdn.com/imgextra/i4/140/O1CN01bSiPhq1CuA6V9APX1_!!140-2-luban.png_240x5000q100.jpg_.webp",
          ],
        },
        {
          bgColor: "rgb(232, 232, 232)",
          imadurl: "//img.alicdn.com/tfs/TB1c_LDLXXXXXXoXpXXXXXXXXXX-24-14.png",
          img: "//aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg",
          url: "#4",
          floors: [],
        },
        {
          bgColor: "#a70700",
          img:
            "//img.alicdn.com/imgextra/i4/26/O1CN01Hs57qk1C3wwzpuQdF_!!26-0-luban.jpg_q100.jpg_.webp",
          url: "#5",
          floors: [
            "//img.alicdn.com/imgextra/i4/187/O1CN01MuyfPq1DFgigaJKTE_!!187-2-luban.png_240x5000q100.jpg_.webp",
            "//img.alicdn.com/imgextra/i1/173/O1CN01wbRnWB1D9HAnaWecq_!!173-2-luban.png_240x5000q100.jpg_.webp",
          ],
        },
        {
          bgColor: "#ff8200",
          img:
            "http://img.alicdn.com/imgextra/i2/175/O1CN01spq6Ft1DABxseY4w7_!!175-0-luban.jpg_q100.jpg_.webp",
          url: "#6",
          floors: [
            "//img.alicdn.com/imgextra/i1/142/O1CN01TYgosI1Cv4taXREzF_!!142-2-luban.png_240x5000q100.jpg_.webp",
            "//img.alicdn.com/imgextra/i3/90/O1CN01cN26YC1CXGIi0xl8L_!!90-2-luban.png_240x5000q100.jpg_.webp",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#sliderbox {
  position: relative;
  height: 100%;
  width: 100%;

  .sliderContents {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 1230px;
    margin: 0 auto;
    padding-right: 30px;
  }

  .sliderDotBox {
    width: 200px;
    height: 40px;
    display: block;
    position: relative;
    margin: -40px auto 0;
    text-align: center;
    z-index: 10;

    .sliderDot {
      background: #000;
      width: 25px;
      height: 5px;
      display: inline-block;
      overflow: hidden;
      margin-left: 5px;
      cursor: pointer;
      opacity: 0.3;
    }

    .sliderDotSelected {
      background: #fff;
      opacity: 0.6;
    }
  }
}
</style>