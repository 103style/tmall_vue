// 头部的搜索框
<template>
  <div id="headerSearchBox">
    <div class="headerLayout">
      <div class="searchBox">
        <input
          type="text"
          class="searchInput"
          id="smq"
          v-on:focus="searchFocused"
          v-on:input="onSearchInput"
          v-on:blur="loseFocus"
          autofocus="autofocus"
        />
        <label
          for="smq"
          v-if="!inputing"
          v-bind:class="['searchLable', inputFoucsed ? 'searchLableLose' : '']"
        >
          搜索 天猫 商品/品牌/店铺
        </label>
        <button class="searchBtn">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFoucsed: false,
      inputing: false,
    };
  },
  methods: {
    searchFocused() {
      this.inputFoucsed = true;
    },
    onSearchInput() {
      this.inputing = true;
    },
    loseFocus(e) {
      const val = e.target.value;
      this.inputing = val.length != 0;
      this.inputFoucsed = val.length != 0;
    },
  },
};
</script>

<style lang="stylus" scoped>
#headerSearchBox {
  margin-bottom: 0;
  min-width: 990px;
  background: #fff;
  height: 130px;
  margin-top: 0 !important;

  .headerLayout {
    width: 1230px;
    padding-top: 38px;
    margin: 0 auto;

    .searchBox {
      margin: 0 auto;
      height: 40px;
      box-sizing: border-box;
      width: 625px;
      position: relative;
      border: solid red;
      border-width: 2px 0 2px 2px;

      .searchInput {
        width: 100%;
        padding: 5px 137px 5px 5px;
        height: 36px;
        color: #000;
        line-height: 36px;
        font-size: 14px;
        outline: 0;
        border: none;
        box-sizing: border-box;
        background: 0 0;
      }

      .searchLable {
        font: 14px tahoma, arial, '\5b8b\4f53';
        vertical-align: middle;
        position: absolute;
        top: 0;
        color: rgb(102, 102, 102);
        height: 36px;
        max-width: 90%;
        overflow: hidden;
        white-space: nowrap;
        line-height: 36px;
        vertical-align: middle;
        left: 8px;
      }

      .searchLableLose {
        color: rgb(204, 204, 204);
      }

      .searchBtn {
        position: absolute;
        right: 0;
        width: 132px;
        height: 36px;
        top: 0;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 5px;
        border: none;
        cursor: pointer;
        color: #fff;
        background: #FF0036;
      }
    }
  }
}
</style>