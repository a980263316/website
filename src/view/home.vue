<template>
  <div class="home">
    <div class="block">
<!--      <el-carousel trigger="click" class="home_banner">-->
<!--        <el-carousel-item v-for="(item, idx) in bannerList" :key="idx">-->
<!--          <img :src="item" alt />-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--      <div v-for="(item, idx) in bannerList" :key="idx">-->
<!--        <img :src="item" alt />-->
<!--      </div>-->
      <div v-for="(item, idx) in bannerList" :key="idx" style="position: relative;">
        <img :src="item.url" style="width: 100%;"alt />
        <div :style="getPosition(item.position)">
          <div class="banner_title">{{item.title}}</div>
          <p class="banner_text">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerList from '@/assets/json/homeBanner';
export default {
  data() {
    return {
      bannerList:bannerList[this.$i18n.locale]
    };
  },

  methods: {
    getPosition(obj){
      const color = obj && obj.color ? 'color:' + obj.color + ';' : ''
      if (!obj) {
        return 'position: absolute; width: 100%; left:0px;top:100px;' + color;
      }
      let top = ''
      let left = ''
      if (obj.topKey === 'bottom') {
        top = 'bottom'
      } else {
        top = 'top'
      }
      if (obj.leftKey === 'right') {
        left = 'right'
      } else {
        left = 'left'
      }
      let topVal = ''
      let leftVal = ''
      if (obj.topVal) {
        topVal = obj.topVal
      } else {
        topVal = '100px';
      }
      if (obj.leftVal) {
        leftVal = obj.leftVal
      } else {
        leftVal = '0px';
      }
      return `position: absolute; width: 100%; ${left}: ${leftVal}; ${top}: ${topVal}; ${obj.color ? 'color:' + obj.color + ';' : ''}`
    }
  },
  watch: {
    '$i18n.locale'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.bannerList = bannerList[newVal]
      }
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.el-carousel__container {
  height: 900px !important;
}
.home_banner img {
  width: 100%;
  height: calc(100vh - 80px);
}
  .banner_title{
    font-size: 36px;
    font-weight: 800;
    width:100%;
    text-align: center;
  }
  .banner_text{
    font-size: 24px;
    width: 80%;
    box-sizing: border-box;
    padding: 0 30% 0 10%;
    margin-top: 20px;
    margin-left: 18%;
    margin-right: 10%;
    text-align: left;
    text-indent: 30px;
    word-wrap: break-word;
  }
</style>
