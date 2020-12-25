<template>
  <div class="error">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604662658177&di=2b2e7e89936ad48c3a03f9903d9917c7&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F130116%2F235005-13011609304575.jpg" alt="">
    <p>
      很抱歉，你访问的页面不存在
      输入地址有误或该地址已被删除。
      <br/>
      <span @click="toggleHome">点击返回</span>  首页。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    toggleHome(){
      this.$router.push('/home')
    }
  }
  //created: {}
};
</script>
<style lang='less' scoped>

  .error{
    margin:0 auto;
    width: 100%;
    text-align: center;
    font-size: 34px;
    img{
      width: 100%;
    }
    p{
      position: absolute;
      left:0;
      top:50%;
      text-align: center;
      width: 100%;
      color:#fff;
      span{
        text-decoration: underline;
        cursor: pointer;
      }
      /*transform: translateX('50%');*/
    }
  }
</style>
