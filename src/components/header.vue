<script src="../main.js"></script>
<template>
  <div :class="['view', { view2: classActive }]">
    <div class="content"
          @mouseleave="hideproduct()">
      <div class="pages_info">
        <span
          @click="toggle(idx)"
          :class="{ active: idx == checkedIdx }"
          v-for="(item, idx) in pageList"
          :key="idx"
          @mouseover="toggleproduct(idx)"
          >{{ $t(item.nav) }}
        </span>
      </div>
      <el-collapse-transition>
      <div v-show="product" class="product" @mouseleave="hideproduct()">
        <div class="product_wrap">
          <div v-for="(item) in productList" class="productList" @click="redirect(item)">
            <img :src="item.imgSrc" />
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      </el-collapse-transition>
      <div class="console">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ activeLanguage }}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, idx) in languageList"
              :key="idx"
              :command="item.id"
            >{{ item.info }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from "@/EventBus.js";
import productList from '@/assets/json/productList'
export default {
  data() {
    let self = this;
    return {
      product: false,
      // 页面列表
      pageList: [
        { nav: "home" },
        { nav: "product" },
        { nav: "freeIoe" },
        { nav: "downLoad" },
        { nav: "About" },
        { nav: "cloud", url: "https://cloud.thingsroot.com/" },
        { nav: "community", url: "https://freeioe.org/" }
      ],
      productList:productList.zh,
      // 默认页面
      checkedIdx: 0,
      // 语音列表
      languageList: [
        {
          id: "zh",
          info: this.$t("zh")
        },
        {
          id: "en",
          info: this.$t("en")
        }
      ],
      // 默认中文
      activeLanguage: self.getLanguage() ? this.$t("zh") : this.$t("en"),
      classActive: false
    };
  },
  mounted: () => {
    console.log(this.$i18n.locale, 'locale')
  },
  methods: {
    goHome() {
      // if (this.checkedIdx != 0) {
        this.$router.push("/home");
        this.checkedIdx = 0;
      // }
    },
    getLanguage(){
      const val = localStorage.getItem('language');
      if (!val || val === 'zh'){
        return true
      } else {
        return false
      }
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.product) {
        this.product = false;
      }
    },
    toggleproduct (idx) {
      if (idx === 1) {
        this.product = true;
      } else {
        this.product = false;
      }
    },
    hideproduct (){
      this.product = false;
    },
    redirect(item){
      if (this.$route.params.id === item.id) {
        return false;
      }
      this.$router.push('/product/' + item.id)
      this.product = false;
      if (this.checkedIdx !== 1) {
        this.checkedIdx = 1;
      }
    },
    // 切换页面
    toggle(idx) {
      if (this.pageList[idx].url) {
        window.open(this.pageList[idx].url, '_blank')
        return false;
      }
      switch (idx) {
        // case this.checkedIdx:
        //   break;
        case 0:
          this.$router.push("/home");
          break;
        case 1:

          break;
        case 2:
          this.$router.push("/freeioe");
          break;
        case 3:
          this.$router.push("/download");
          break;
        case 4:
          this.$router.push("/about");
          break;

        default:
          this.$router.push("/home");
          break;
      }
      if (idx === 1) {
        return false;
      }
      this.checkedIdx = idx;
    },
    // 下拉框选择语言
    handleCommand(command) {
      console.log(command, 'command')
      switch (command) {
        case "zh":
          this.activeLanguage = this.$t("zh");
          localStorage.setItem('language', 'zh')
          break;
        case "en":
          this.activeLanguage = this.$t("en");
          localStorage.setItem('language', 'en')
          break;

        default:
          this.activeLanguage = this.$t("zh");
          break;
      }
      this.$i18n.locale = command;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.menu)
  },
  watch: {
    checkedIdx(val) {
      if (val == 0) {
        this.classActive = false;
      } else {
        this.classActive = true;
      }
    }
  },
  created() {
    const command = this.getLanguage() ? 'zh' : 'en';
    this.handleCommand(command)
    EventBus.$on("switchTab", index => {
      this.checkedIdx = index;
    });
    let key = this.$route.path;
    if (key.indexOf('product') !== -1) {
      key = '/product'
    }
    switch (key) {
      case "/home":
        this.checkedIdx = 0;
        break;
      case "/product":
        this.checkedIdx = 1;
        break;
      case "/freeioe":
        this.checkedIdx = 2;
        break;
      case "/download":
        this.checkedIdx = 3;
        break;
      case "/about":
        this.checkedIdx = 4;
        break;

      default:
        this.checkedIdx = 0;
        break;
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.menu)
  }
};
import "../assets/less/index.css";
</script>
<style lang="less" scoped>
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
.view {
  width: 100%;
  height: 80px;
  line-height: 80px;
  // background: rgba(0, 0, 0, 0.4);
  background: #fff;
  color: #000;
  position: absolute;
  top: 0;
  z-index: 3;
  min-width: 750px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
}
.view2 {
  // background-color: rgba(255, 255, 255, 0.4);
  background-color: #fff;
  box-shadow: 0 1px 3px 0 hsla(0, 0%, 80%, 0.5);
  color: #000000;
  position: absolute;
  top: 0;
  z-index: 3;
  a {
    color: #2c3e50 !important;
  }
  .el-dropdown-link {
    color: #2c3e50;
  }
}
.pages_info{
  color:#000;
}
.product{
  width:100vw;
  background:#fff;
  margin:0 auto;
  border-bottom: 1px solid #ccc;
  position: fixed;
  left:0;
  top:81px;
  box-shadow: 0 3px 4px rgba(0,0,0,.18);
}
.product_wrap {
  /*height: 300px;*/
  width:1200px;
  margin:0 auto;
  background: #fff;
  z-index: 999;
  display: flex;
  justify-content: space-around;
}
.productList{
  font: 16px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: #000;
  width: 20%;
  img{
    width:130px;
    height:130px;
    display: block;
    padding-top:30px;
  }
  span{
    display: block;
    box-sizing: border-box;
    padding: 20px;
  }
}
.productList:before{
  position: absolute;
  right: 0;
  top: 35px;
  z-index: 1;
  width: 1px;
  height: 130px;
  content: "";
  background-color: #e0e0e0;
}
.productList:last-child:before{
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  width: 0;
  height: 0;
  content: "";
  background-color: #e0e0e0;
}
.content {
  position: relative;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  .logo {
    margin-top: 20px;
    width: 100px;
    height: 40px;
    float: left;
  }
  .pages_info {
    float: left;
    span {
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      margin-left: 20px;
    }
    .active {
      color: rgb(63, 181, 190);
    }
  }
  .console {
    float: right;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      vertical-align: middle;
      margin-right: 10px;
    }
    a {
      color: #fff;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  margin-left: 10px;
  font-size: 15px;
}
.el-icon-arrow-down {
  font-size: 14px;
}
</style>
