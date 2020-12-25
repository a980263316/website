<template>
    <div class="product">
        <div class="prodcut_header">
            <div class="product_nav">
                <div style="text-indent:20px;">
                    <p>FreeIOE {{$t('series')}}<span style="border-left:1px solid #ccc;margin-left:10px;padding-left:10px;">{{id}} {{$t('series')}}</span></p>
                </div>
                <div>
                    <ul>
                        <li @click="getComponentId(0)" :class="!flag ? 'product_active' : ''">{{$t('overview')}}</li>
                        <li @click="getComponentId(1)" :class="flag ? 'product_active' : ''">{{$t('parameter')}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="product_content">
            <div>
                <keep-alive><component :is="componentId" :id="id"></component></keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
    import Overview from './overview';
    import Parameter from './parameter';
    export default {
        components: {
            Overview,
            Parameter
        },
        data(){
            return {
                componentId: 'Overview',
                id: this.$route.params.id,
                flag: true
            }
        },
        methods: {
            getComponentId(idx) {
                switch (idx) {
                    case 0:
                    this.componentId = "Overview";
                    this.flag = false;
                    break;
                    case 1:
                    this.componentId = "Parameter";
                    this.flag = true;
                }
            }
        },
      beforeRouteUpdate: function (to, from, next) {
        if (to.params.id !== from.params.id) {
          this.id = to.params.id
        }
        next()
      }
    }
</script>
<style lang="less" scoped>
    .product{
        width: 100%;
    }
    .prodcut_header{
        height:50px;
        line-height: 50px;
        box-shadow: 0 5px 5px rgba(0,0,0,.07);
    }
    .product_nav{
        max-width: 1200px;
        margin:0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
      .product_active{
        color: #3fb5be;
      }
        ul {
            display: flex;
            li{
                margin: 0 20px;
                list-style:none;
                cursor: pointer;
            }
        }
    }
    .product_content{
        max-width: 1200px;
        margin:0 auto;
    }
</style>
