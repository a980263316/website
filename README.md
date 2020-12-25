vue版本官网
## 本站使用的是md以及js文件当做数据源 ##
数据内容都存储在assets目录下的md文件夹以及json文件夹下

md文件内容可以随意更改，json目录下的js文件请保持文件格式，可以改动内容，但是请勿随意改动数据格式
> assets目录下的json目录
>> download.js 存储的文件为下载页面中的内容:
>
>>>name为左侧列表内容，content为列表选择后相对应的介绍文字，url为下载链接地址，content可以使用文字也可以引用md文件，格式为 "content": "xxxxxx" 或 "content": require('../md/xxxx.md')注:后一种需要在md目录下新建对应的md文件，否则会报错。
>
>> homeBanner.js 存储的文件为主页:
>
>>> url为图片地址，text为定位中的文字，title为定位中的标题
>
>> productList.js 存储的文件为产品列表:
>
>>>name为设备名称，overview引用的为assets/md/overview + id所对应的概述， parameter引用的为assets/md/parameter + id所对应的参数，imgSrc为图片文件地址
>
>> contact.js存储的文件为公司联系信息:
>
>>>address为公司地址， email为公司邮箱，public为公众号，phone为公司电话，position为公司经纬度坐标

> assets目录下的md目录
>> md目录下xxx_en.md存储的是xxx对应的英文版本md文件

>> md目录下xxx_zh.md存储的是xxx对应的中文版本md文件
>> about.md存储的为公司简介信息
>
>>freeioe.md 存储的为Freeioe页面
>
>>overview_XXX.md存储的为产品目录下的概述XXX代表的是对应的型号
>
>>parameter_XXX.md存储的为产品目录下的参数XXX代表的是对应的型号
>
