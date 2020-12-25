<template>
  <!-- 模板，html -->
  <div class="hospital_map">
    <!-- 地图渲染的容器 -->
    <div id="container_hospital"></div>
    <div class="phone">
      <h2>{{$t('about.Contact_us')}}</h2>
      <div style="color:#fff;">
        <p><i class="el-icon-message"></i><span>{{$t('about.email')}}</span>{{contact.email}}</p>
        <p><i class="el-icon-s-custom"></i><span>{{$t('about.weChart')}}</span>{{contact.public}}</p>
        <p><i class="el-icon-phone"></i><span>{{$t('about.phone')}}</span>{{contact.phone}}</p>
        <p><i class="el-icon-s-promotion"></i><span>{{$t('about.address')}}</span>{{contact.address}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  // 脚本，js
  // import AMap from 'vue-amap'
  import contact from '../assets/json/contact'
  import '../assets/icon/iconfont.css'
  export default {
    data() {
      return {
        contact
      }
    },
    // dom追加到网页中
    mounted(){
      // window.onload = () => {
        const map = new AMap.Map('container_hospital', {
          center: contact.position,
          zoom:17
        });
        map.setMapStyle('amap://styles/63af89bdb35aca086c81ae384f545103');
        // 创建一个 Marker 实例：
        const marker = new AMap.Marker({
          position: contact.position,   // 经纬度对象，也可以是经纬度构成的一维数组[114.932499,25.855219]
          // title: '旋思科技',
          icon: require('@/assets/images/address.png'),
          // offset: [158, 158],
          anchor: 'center'
        });
        // 将创建的点标记添加到已有的地图实例：
        map.add(marker);
      // }
    }
  }
</script>
<style lang="less" scoped>
  /* 样式，css */
  #container_hospital {
    height:600px;
  }
  .hospital_map{
    position: relative;
    width: 1200px;
    margin: 20px auto;
    padding: 50px 0;
  }
  .phone{
    left:0;
    top:50px;
    height:180px;
    width: 100%;
    position: absolute;
    background: rgba(41,36,33, 0.4);
    z-index: 2;
    i{
      font-size: 40px;
    }
    h2{
      margin-top: 20px;
      text-align: center;
      color: #fff;
    }
    p{
      text-align: center;
      color: #fff!important;
      font-size: 18px;
      margin-top: 20px;
      line-height: 30px;
    }
    >div{
      display: flex;
      justify-content: space-around;
    }
    span{
      display: block;
      font-size: 22px;
      line-height: 30px;
    }
    .amap-icon:before{
      width:50px;
      height:50px;
      display: block;
      background: red;
      content: '';
    }
  }
</style>
