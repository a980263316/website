<template>
    <div v-html="parameter" class="parameter">

    </div>
</template>
<script>
  export default {
    props: ['id'],
    data () {
      return {
        parameter: require('@/assets/md/parameter_' + this.id + '_' + this.$i18n.locale + '.md')
      }
    },
    watch: {
      'id'(newval, oldval){
        if (newval !== oldval) {
          this.id = newval;
          this.parameter = require('@/assets/md/parameter_' + this.id + '_' + this.$i18n.locale + '.md')
          console.log(this.parameter, 'parameter')
        }
      },
      '$i18n.locale'(newVal, oldVal){
        if (newVal !== oldVal) {
          this.parameter = require('../assets/md/parameter_' + this.id + '_' + this.$i18n.locale + '.md')
        }
      }
    }
  }
</script>
<style lang="less">
    .parameter>p{
        display: flex;
        justify-content: flex-start;
        height: auto;
        padding: 40px 0;
        overflow: hidden;
        font-size: 32px;
        background-color: transparent;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
    }
    .left{
        display: block;
        width: 25%;
        height: auto;
        border: 0;
        padding-top: 0;
        font-size: 28px;
        line-height: 70px;
        color: #333;
        text-align: left;
    }
    .right{
        display: block;
        height: auto;
        border: 0;
        padding-top: 0;
        font-size: 28px;
        line-height: 70px;
        color: #333;
        text-align: left;
    }
</style>
