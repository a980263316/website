<template>
    <div class="overview">
        <div v-html="overview">
        </div>
    </div>
</template>
<script>
  export default {
    props: ['id'],
    data (){
      return {
        overview: require('@/assets/md/overview_' + this.id +'_' + this.$i18n.locale +'.md')
      }
    },
    watch: {
      'id'(newval, oldval){
        if (newval !== oldval) {
          this.overview = require('@/assets/md/overview_' + newval + '_' + this.$i18n.locale +'.md')
          this.id = newval
        }
      },
      '$i18n.locale'(newval, oldval){
        if (newval !== oldval) {
          this.overview = require('@/assets/md/overview_' + this.id + '_' + newval + '.md')
        }
      }
    }
  }
</script>
<style lang="less" >
    .overview p{
        font-size: 28px;
        line-height: 70px;
        color: #333;
        text-align: left;
        border-bottom: 1px solid #e5e5e5;
        padding: 40px 0;
        text-indent: 40px;
    }
</style>
