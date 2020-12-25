<template>
    <div class="about">
        <div class="about_nav">
            <div style="padding: 20px 0">
              <p @click="setFlag(true)" :class="flag ? 'active_about' : ''">{{$t('about.company_profile')}}</p>
              <p @click="setFlag(false)" :class="!flag ? 'active_about' : ''">{{$t('about.Contact_us')}}</p>
            </div>
        </div>
        <div class="about_content">
          <div v-if="flag" v-html="about" class="about_Introduction "></div>
          <div v-if="!flag"><about-contact /></div>
        </div>
    </div>
</template>
<script>
  import aboutContact from '@/view/about_contact'
  // console.log(aboutContact)
  export  default  {
    components:{
      aboutContact
    },
    mounted() {
      console.log(this, 'this', this.$store)
    },
    data (){
      return {
        about: require('../assets/md/about_' + this.$i18n.locale + '.md'),
        flag: true
      }
    },
    methods: {
      setFlag(val){
        console.log(val, this.about)
        this.flag = val
      },
      addCount(){
        this.$store.commit('addCount')
      }
    },
    watch: {
      '$i18n.locale'(newval, oldval){
        console.log(newval, 'newval')
        if (newval !== oldval) {
          console.log(this.about)
          this.about = require('../assets/md/about_' + newval + '.md')
        }
      }
    }
  }
</script>
<style lang="less">
.about{
    width:100%;
    height: auto;
    /*overflow: hidden;*/
    /*overflow-y: auto;*/
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603086080037&di=872af55d0bcf3035f5f4241bbb8f73c4&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0328%2F6d863aa7b4f07457eebe561035aa1d08.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .about_nav{
        position: relative;
        width: 1200px;
        margin: 0 auto;
        top:0;
        left:0;
        color: #fff;
        z-index: 999;
        .active_about {
          color: yellowgreen;
        }
        div{
            position: absolute;
            /*width: 200px;*/
            display: flex;
            top:0;
            right:0;
            p{
                margin-left: 20px;
                cursor: pointer;
            }
        }
    }
    .about_content{
        margin-top: 80px;
        width:100%;
        background-repeat:no-repeat;
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        min-height: calc(100vh - 80px);
        .about_Introduction{
            /*color: #fff;*/
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0;
            p{
              color: #fff;
              text-align: center;
                font-size: 32px;
                line-height: 60px;
                >img {
                  position: fixed;
                  top:80px;
                  left:0;
                  width:100vw;
                  height:100vh;
                }
            }
            span{
                font-size: 28px;
                line-height:50px;
                text-indent: 40px;
                display:block;
            }
        }
    }
    >img{
        width:100%;
    }
}
</style>
