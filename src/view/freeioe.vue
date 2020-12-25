<template>
    <div class="freeioe">
      <div v-html="mark" class="freeioe_list">

      </div>
    </div>
</template>
<script>
  export default {
    name: 'freeioe',
    data () {
      return {
        mark: require('../assets/md/freeioe_' + this.$i18n.locale + '.md')
      }
    },
    methods: {

    },
    watch: {
      '$i18n.locale'(newval, oldval){
        if (newval !== oldval) {
          console.log(newval, oldval)
          this.mark = require('../assets/md/freeioe_' + newval + '.md')
        }
      }
    }
  }
</script>
<style lang="less">
    .freeioe{
        max-width: 1200px;
        margin:0 auto;
        height: 100%;
      .freeioe_list{
        display: flex;
        flex-direction: column;
        /*text-align: center;*/
        p{
          /*display: flex;*/
          /*flex-direction: column;*/
          /*text-align: center;*/
          padding: 50px;
          font-size: 34px;
          text-indent: 40px;
          line-height: 60px;
          /*border-bottom: 1px solid #ccc;*/
          /*align-items: center;*/
          img{
            display: block;
            /*margin: 0 auto;*/
            width:100%;
            /*height:200px;*/
            /*flex-shrink: 0;*/
          }
          span{
            margin-top: 20px;
            display: block;
            width: 100%;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
    }
</style>
