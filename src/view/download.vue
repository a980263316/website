<script src="../assets/json/homeBanner.js"></script>
<template>
    <div class="download">
        <div class="download_nav">
            <div
                :class="['item', { Icon: idx == checkedIdx }]"
                v-for="(item, idx) in sideBarList"
                :key="idx"
                @click="toggle(idx)"
                >
                {{ item.name }}
            </div>
        </div>
        <div class="download_content">
            <div>
                {{sideBarList[checkedIdx].content}}
                <p><a :href="sideBarList[checkedIdx].url">{{$t("download.clickDown")}}</a></p>
                <p>{{$t('navBar.home')}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import sideBarList from '@/assets/json/download'
    export default {
    name: "download",
    props: {
        activeIdx: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            sideBarList: sideBarList[this.$i18n.locale],
            checkedIdx: this.activeIdx
        };
    },

    methods: {
        toggle(idx) {
            this.checkedIdx = idx;
        }
    },
    watch: {
      '$i18n.locale'(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.sideBarList = sideBarList[newVal]
        }
      }
    }
    };
</script>
<style lang="less" scoped>
    .download {
        margin:30px auto;
        max-width: 1200px;
        display: flex;
        .download_nav{
            box-shadow: 0 4px 12px 0 rgba(9, 13, 44, 0.06);
            border-radius: 4px 4px 0 0;
            min-width:300px;
            cursor: pointer;
            margin-top: 20px;
        }
        .download_content{
            margin-left: 40px;
            margin-top: 40px;
            text-indent: 30px;
        }
        .item {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
        }
        .item:hover {
            color: #3fb5be;
        }
        .Icon {
            color: #3fb5be;
            background: url("../assets/images/jiantou.png") no-repeat 90% center;
        }
        a:link{
          color: blue;
        }
        a:visited{
          color: blue;
        }
        a:hover{
          color: blue;
        }
        a:active{
          color: blue;
        }
    }
</style>
