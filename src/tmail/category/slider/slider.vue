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
        :class="[index == curIndex ? 'block' : 'none']"
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
import SliderItem from "./slider_item.vue";
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
            "http://img.alicdn.com/imgextra/i4/10/O1CN01wMqgTs1Bwcc9lw9HN_!!10-0-luban.jpg_q100.jpg_.webp",
          url:
            "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.d1.66144265RNNH4X&amp;trackInfo=20160815100101;1206628928840;410579;15241241282;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;1;0;10000002;38366264;1;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=15241241282&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=1&amp;status_bar_transparent=true&amp;activity_id=410579&amp;wh_pid=industry-229989&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8893751",
          floors: [
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.2.66144265RNNH4X&amp;trackInfo=20160815100201;120385271834;410600;613832739487;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;1;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=613832739487&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=5&amp;status_bar_transparent=true&amp;activity_id=410600&amp;wh_pid=industry-229884&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8893779",
              img:
                "https://img.alicdn.com/imgextra/i3/177/O1CN01lofYPj1DB6kuxF5Hp_!!177-2-luban.png_240x5000q100.jpg_.webp",
            },
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.3.66144265RNNH4X&amp;trackInfo=20160815100201;120504765114;411005;625968626314;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;2;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=625968626314&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=6&amp;status_bar_transparent=true&amp;activity_id=411005&amp;wh_pid=industry-229921&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8894543",
              img:
                "https://img.alicdn.com/imgextra/i1/194/O1CN01c6iXI81DItUXv2sMN_!!194-2-luban.png_240x5000q100.jpg_.webp",
            },
          ],
        },
        {
          bgColor: "rgb(232, 232, 232)",
          img:
            "https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg",
          url:
            "https://click.mz.simba.taobao.com/ecpm?e=NU70CPWI0f0PO53EdXrfSxsQmLP5zomMY3z5wZ98r5AQRBndNpiqqtqdN8nP%2FVfafkYuInP414P%2F6eIJKzWyc2RV5VLNsTWptbR9sxq9q4jPdxtGLmpJMKiTZU1Z7A7u9iFUaGvyKCGT5fzkODgSz1197sOzUjzt4jY1ac3z3kmf52u0Wo2aiiEWLN70CJk%2BnTuJ%2BsiI2R7rHgcBQpOPjNvqD%2F9rxwfnSFYNFayp5hH8xSnVMbLortW1cLR5yCndXjRJVUfql1gvBP5DxWRifl3RRb3zgOP74RdT%2BGuek5UgMB9QIg0vKNYOU2cUWT5IwCEMcFrruVWA1w4A95GtqvpubJAzD2PS%2BwdTuO6%2BFmb6mAwcWwYv8YHjbeOEr%2FtW4RdT%2BGuek5WC6FQufIgff%2B44T3zIsk0k6g1%2BSvUvjS8Nt8pALCn8zrnVXcU8sx%2FrVd5pGDPEOBmOCbrBczaZ9%2BN%2Bt7UDhb9jPvRQt%2BG9Jaf0zmZCifwRUH9wSXS1bio4GbE3o186Z8ze48nO2bg%2BzgviZ5%2BuqQ9MxjFCFotPkN1GR3S7Oa9utQ%3D%3D&amp;u=https%3A%2F%2Fwww.tmall.com%2Fwow%2Fbrand%2Fact%2Ffashion%3Facm%3Dlb-zebra-2386-265936.1003.4.410386%26scm%3D1003.4.lb-zebra-2386-265936.OTHER_1_410386&amp;k=569",
          adurl:
            "https://alm.tclcom.com:7003/im;jsessionid=F0AFEE17DA278B2D76E1C3243E9B092C?mks.commandRunner=1578#1",
          floors: [],
        },
        {
          bgColor: "#ed472e",
          img:
            "http://img.alicdn.com/imgextra/i3/20/O1CN01R9KIXN1C1CZong1vz_!!20-0-luban.jpg_q100.jpg_.webp",
          url:
            "https://classykiss.tmall.com/shop/view_shop.htm?spm=875.7931836/B.2016006.d3.66144265RNNH4X&amp;user_number_id=3951969853&amp;pos=1&amp;tracelog=twddp&amp;turing_bucket=8&amp;acm=&amp;scm=1049.lyg_turing_-1_344.164205.164205-THJH_288937&amp;lygClk=1&amp;impid=4E79GZttlLR",
          floors: [
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.10.66144265RNNH4X&amp;trackInfo=20160815100201;120382051144;410669;539960343324;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;5;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=539960343324&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=9&amp;status_bar_transparent=true&amp;activity_id=410669&amp;wh_pid=industry-229868&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8893764",
              img:
                "https://img.alicdn.com/imgextra/i4/144/O1CN015F8YtM1Cvzgfh3flR_!!144-2-luban.png_240x5000q100.jpg_.webp",
            },
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.11.66144265RNNH4X&amp;trackInfo=20160815100201;120387478674;410675;612421555445;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;6;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=612421555445&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=10&amp;status_bar_transparent=true&amp;activity_id=410675&amp;wh_pid=industry-229828&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8894732",
              img:
                "https://img.alicdn.com/imgextra/i4/140/O1CN01bSiPhq1CuA6V9APX1_!!140-2-luban.png_240x5000q100.jpg_.webp",
            },
          ],
        },
        {
          bgColor: "rgb(232, 232, 232)",
          imadurl:
            "https://img.alicdn.com/tfs/TB1c_LDLXXXXXXoXpXXXXXXXXXX-24-14.png",
          img:
            "https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg",
          url:
            "https://click.mz.simba.taobao.com/ecpm?e=9zV0YR08FFcPO53EdXrfSxsQmLP5zomMH3KJ8TA565wBx9r7Hj1zr4ZjlPp7rGekfkYuInP414N6rGKtMBt8C8R92%2BP%2FC62ktbR9sxq9q4jPdxtGLmpJMKeFzZhjx1TouB4VMot2Z8qNmOOEIouSXIOBnwnLo8Fb0G7opvdXLoaf52u0Wo2aiiEWLN70CJk%2BnTuJ%2BsiI2R7rHgcBQpOPjNvqD%2F9rxwfnSFYNFayp5hH8xSnVMbLortW1cLR5yCndXjRJVUfql1gvBP5DxWRifl3RRb3zgOP74RdT%2BGuek5UgMB9QIg0vKNYOU2cUWT5IwCEMcFrruVWA1w4A95GtqvpubJAzD2PS%2BwdTuO6%2BFmb6mAwcWwYv8YHjbeOEr%2FtW4RdT%2BGuek5WC6FQufIgff%2B44T3zIsk0k6g1%2BSvUvjS8Nt8pALCn8zrnVXcU8sx%2FrVd5pGDPEOBmOCbrBczaZ9%2BN%2Bt7UDhb9jPvRQt%2BG9Jaf0zmZCifwRUJuHx4QRWodmGbE3o186Z8ze48nO2bg%2BzgviZ5%2BuqQ9MxjFCFotPkN1GR3S7Oa9utQ%3D%3D&amp;u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&amp;k=569",
          floors: [],
        },
        {
          bgColor: "#a70700",
          img:
            "https://img.alicdn.com/imgextra/i4/26/O1CN01Hs57qk1C3wwzpuQdF_!!26-0-luban.jpg_q100.jpg_.webp",
          url:
            "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.d5.66144265RNNH4X&amp;trackInfo=20160815100101;1203182305640;409757;612134696981;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;2;0;10000002;38049826;1;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=612134696981&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=2&amp;status_bar_transparent=true&amp;activity_id=409757&amp;wh_pid=industry-229920&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8894475",
          floors: [
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.10.66144265RNNH4X&amp;trackInfo=20160815100201;120382051144;410669;539960343324;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;5;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=539960343324&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=9&amp;status_bar_transparent=true&amp;activity_id=410669&amp;wh_pid=industry-229868&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8893764",
              img:
                "https://img.alicdn.com/imgextra/i4/187/O1CN01MuyfPq1DFgigaJKTE_!!187-2-luban.png_240x5000q100.jpg_.webp",
            },
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.11.66144265RNNH4X&amp;trackInfo=20160815100201;120387478674;410675;612421555445;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;6;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=612421555445&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=10&amp;status_bar_transparent=true&amp;activity_id=410675&amp;wh_pid=industry-229828&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8894732",
              img:
                "https://img.alicdn.com/imgextra/i1/173/O1CN01wbRnWB1D9HAnaWecq_!!173-2-luban.png_240x5000q100.jpg_.webp",
            },
          ],
        },
        {
          bgColor: "#ff8200",
          img:
            "http://img.alicdn.com/imgextra/i2/175/O1CN01spq6Ft1DABxseY4w7_!!175-0-luban.jpg_q100.jpg_.webp",
          url:
            "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.d6.66144265RNNH4X&amp;trackInfo=20160815100101;120511987464;411051;558815180482;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;3;0;10000002;38357066;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=558815180482&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=3&amp;status_bar_transparent=true&amp;activity_id=411051&amp;wh_pid=industry-229870&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8897588",
          floors: [
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.13.66144265RNNH4X&amp;trackInfo=20160815100201;120388106944;410674;547635852076;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;7;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=547635852076&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=11&amp;status_bar_transparent=true&amp;activity_id=410674&amp;wh_pid=industry-229829&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8894612",
              img:
                "https://img.alicdn.com/imgextra/i1/142/O1CN01TYgosI1Cv4taXREzF_!!142-2-luban.png_240x5000q100.jpg_.webp",
            },
            {
              url:
                "https://pages.tmall.com/wow/a/act/tmall/tmc/29126/3965/wupr?spm=875.7931836/B.2016006.14.66144265RNNH4X&amp;trackInfo=20160815100201;120383572804;410663;614731558795;3;null;1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;8;0;10000002;38332132;66049;null_null_0.5_null_false_e:1007.14152.156103.100200300000000;c6ffec8f-ff0e-4e05-be13-b77fe150fd67;0&amp;item_id=614731558795&amp;pvid=c6ffec8f-ff0e-4e05-be13-b77fe150fd67&amp;pos=12&amp;status_bar_transparent=true&amp;activity_id=410663&amp;wh_pid=industry-229909&amp;disableNav=YES&amp;acm=07055.1003.1.2519102&amp;scm=1003.1.20160815.OTHER_0_8896372",
              img:
                "https://img.alicdn.com/imgextra/i3/90/O1CN01cN26YC1CXGIi0xl8L_!!90-2-luban.png_240x5000q100.jpg_.webp",
            },
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