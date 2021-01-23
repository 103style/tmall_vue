<template>
  <div id="floorList">
    <FloorItem v-for="item in floorItems" :floorItemData="item" />
  </div>
</template>

<script>
import FloorItem from "./floor/FloorItem.vue";
export default {
  components: {
    FloorItem,
  },
  data() {
    return {
      floorItems: [
        {
          imageUrl:
            "//img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png",
          bigBanner: [
            {
              bgUrl:
                "//img.alicdn.com/tfs/TB1nveReMoQMeJjy1XaXXcSsFXa-235-618.png",
              leftTitle: "韩国进口",
              rightTitle: ["天猫专享", "进口水果季"],
            },
          ],
          gridList: {
            mainData: {
              tabTitles: [
                { title: "量贩装", bgColor: "#00B262", color: "#fff" },
              ],
              cover:
                "//img.alicdn.com/tfs/TB18RDjcUT1gK0jSZFrXXcNCXXa-400-400.jpg",
              detailIcon:
                "//img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png",
              detailTitle: "早餐代餐",
              detailTitleColor: "#00B262",
              detailSubTitle: "第2件0元",
            },
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/113/O1CN01Euo1Tz1ChnPbKDR36_!!113-0-lubanu.jpg",
                title: "老街口蒜香花生420g坚果干果炒货干货休闲零食特色特产小吃",
                price: "￥12.5",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/725677994/O1CN01P4hOpW28vIns7HObt_!!725677994-0-sm.jpg",
                title:
                  "详情页领券colorkey珂拉琪空气唇釉丝绒雾面口红孟美岐显白女学生",
                price: "￥59",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/161/O1CN01pkzkq31D3mQEa0EDB_!!161-0-lubanu.jpg",
                title:
                  "映趣剃须刀电动3D刮胡刀男刀头智能充电式水洗胡须刀递须刀胡子刀",
                price: "￥39.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/92/O1CN01ezj1xf1CYB5vsRaRY_!!92-0-lubanu.jpg",
                title:
                  "HarbinBeer/哈尔滨哈啤醇爽9度330ml*24听*2新鲜听装啤酒组套装",
                price: "￥74.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/60/O1CN01meKNIv1CJWQ89nBJs_!!60-0-lubanu.jpg",
                title:
                  "魔幻厨房硅胶垫耐高温揉面垫加厚防滑大号不沾和面垫带刻度烘焙",
                price: "￥31",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/725677994/O1CN01BkUEdb28vIo3EeC3M_!!725677994-0-sm.jpg",
                title:
                  "soffny/诺绵婴幼儿手口湿巾80抽3包宝宝专用诺棉加厚pp湿纸巾家用",
                price: "￥24.9",
              },
            ],
          },
        },
        {
          imageUrl:
            "//img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png",
          bigBanner: [
            {
              bgUrl:
                "//img.alicdn.com/tfs/TB1fQ1VeMoQMeJjy0FpXXcTxpXa-235-301.png",
              leftTitle: "奢享人生",
              rightTitle: ["极速发货", "全球低价"],
            },
            {
              bgUrl:
                "//img.alicdn.com/tfs/TB1xvaReMoQMeJjy1XaXXcSsFXa-235-301.png",
              leftTitle: "春季上新",
              rightTitle: ["日本专业级", "瘦脸美容仪"],
            },
          ],
          gridList: {
            recommendData: {
              title: "识货",
              subTitle: "每日精选新鲜好货",
              cover: "//img.alicdn.com/tps/i4/TB1Njg2bjuhSKJjSspmSuwQDpXa.jpg",
            },
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2207678506784/O1CN01q6SrSf1zz7VMmT76o_!!2207678506784.jpg",
                title: "大卫杜夫 - 冷水淡香水喷雾 花果香调 100ml/3.3oz",
                price: "￥150",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/2206736426581/O1CN01XS28o31yU9A2bKLYo_!!0-item_pic.jpg",
                title: "日本进口尤妮佳Moony畅透系列L44片男婴儿透气裤型纸尿裤",
                price: "￥108",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2201196002635/O1CN01ENAYMv1VKsGNia4Nm_!!0-item_pic.jpg",
                title: "施华洛世奇手提袋送礼物用 礼品配件【仅限保税仓配送】",
                price: "￥13",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/6000000001940/O1CN01OWWHRi1QCYzIqSEhQ_!!6000000001940-0-at.jpg",
                title:
                  "英国MatchstickMonkey火柴猴牙胶有尾宝宝婴儿咬安抚磨牙棒软硅胶",
                price: "￥115",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/6000000000311/O1CN01M4aeam1EATmjnIk7t_!!6000000000311-0-at.jpg",
                title:
                  "日本进口NOBEL诺贝尔柠檬可乐苏打超酸糖88g珍珠奶茶90g提神",
                price: "￥18",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/2828729903/O1CN015dnxhj2N1csztJN79_!!0-item_pic.jpg",
                title:
                  "日本原装进口花王美白牙膏男去黄牙垢亮白除口臭去烟渍口气清新女",
                price: "￥19.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/1785908005/O1CN01Tdea7N290L0CeSzIs_!!0-item_pic.jpg",
                title:
                  "carhartt男毛呢外套上衣保暖抗风翻领做旧秋冬经典正品3215903",
                price: "￥2084.53",
              },
            ],
          },
        },
        {
          adUrl: "//aecpm.alicdn.com/simba/img/TB1_EfIJFXXXXXOXFXXSutbFXXX.jpg",
        },
        {
          title: "美丽人生",
          subTitle: "FASHION & BEAUTY",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1U8CRhKEJL1JjSZFGwu16OXXa.png",
              leftTitle: "焕新换型",
              rightTitle: ["时尚女装", "优雅而知性"],
            },
          ],
          gridList: {
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2749387595/O1CN01m7Ube225yYhC8Q6gK_!!0-item_pic.jpg",
                title:
                  "短款卫衣女秋冬2020新款韩版加绒宽松无帽圆领高腰加厚小个子上衣",
                price: "￥59.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2255705037/O1CN01DSuEgu1n4zcVfMbJg_!!0-item_pic.jpg",
                title:
                  "美肤宝美白隔离防晒霜bb遮瑕三合一面部二合一官方旗舰店正品女",
                price: "￥49",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/2099164071/O1CN01b14HzL1fwYtpTLTBK_!!0-item_pic.jpg",
                title:
                  "乔丹男鞋正品绒皮面防水保暖跑步鞋紫色运动鞋低调复古旅游鞋波鞋",
                price: "￥168",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/1589912725/O1CN01kL29Y11W05rqKUZ4l_!!0-item_pic.jpg",
                title:
                  "木林森男鞋秋季单鞋正品休闲鞋真皮鞋冬季加绒棉鞋英伦软皮软底潮",
                price: "￥199",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2314724409/O1CN019vzvOU1iRMsxPz7Ok_!!0-item_pic.jpg",
                title:
                  "2020秋冬款加绒风衣青年男士翻领加厚外套中长款夹克帅气男上衣潮",
                price: "￥128",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/1645276708/TB2syEGdhjaK1RjSZFAXXbdLFXa_!!1645276708-0-item_pic.jpg",
                title:
                  "老人头驾驶证皮套男真皮超薄小女式证件钱包多功能男士卡包行驶证",
                price: "￥59",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/2200711532099/O1CN014LXYdh1RNNskq51Br_!!0-item_pic.jpg",
                title:
                  "【品牌断码清仓】红蜻蜓秋季女单鞋女时尚休闲真皮舒适女士皮鞋子",
                price: "￥99",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/2294375246/O1CN01KNO6Bq1ociPy3gc5L_!!0-item_pic.jpg",
                title:
                  "大耳圈耳环洋气欧美夸张个性时尚宴会气质手工耳坠耳环2020新款潮",
                price: "￥39.9",
              },
            ],
          },
        },
        {
          title: "潮电酷玩",
          subTitle: "ELECTRONICS",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1sgSzhFcJL1JjSZFOwu3WlXXa.png",
              leftTitle: "明星同款",
              rightTitle: ["畅享音乐", "耳机发烧友"],
            },
          ],
          gridList: {
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/751075004/O1CN01qx6VHm1mpsYpqoshT_!!0-item_pic.jpg",
                title:
                  "【新款国行128G】Apple/苹果 iPhone12全网通5G手机 原装国行中国电信天翼直售苹果12手机",
                price: "￥6999",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/2201474491152/O1CN01OxaCc21KNeutqwheg_!!0-item_pic.jpg",
                title:
                  "小才天儿童电话手表全网通4G视频通话防水电信版智能多功能男女孩初高中小学生定位360WiFi适配小米华为手机",
                price: "￥149",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/3311803109/O1CN01Em1x3K1YpxwUuMomW_!!0-item_pic.jpg",
                title:
                  "马歇尔 MARSHALL 3.5mm 原装音箱音频连接线 电视机车载音频线",
                price: "￥99",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/3251162040/O1CN01aW7vfw1QwMc5lYycA_!!0-item_pic.jpg",
                title:
                  "美菱取暖器暖风机壁挂电暖炉浴室家用电暖气省电遥控挂壁式电热器",
                price: "￥159",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/3079353377/O1CN01heUGyo1aoi4JkUPzH_!!0-item_pic.jpg",
                title:
                  "荣事达双杆蒸汽挂烫机家用小型手持立挂式烫衣服熨烫机手持电熨斗",
                price: "￥119",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/2619709162/O1CN01fFgf3U2HYFOiUiRbw_!!0-item_pic.jpg",
                title: "小米手环3NFC版 黑色 心率睡眠监测智能手环",
                price: "￥128",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/2204192985417/O1CN01LCDha91pt28D1cEZh_!!0-item_pic.jpg",
                title:
                  "华为原装智能插座带usb插排wifi排插手机远程遥控定时开关家用正泰快充充电多功能转换器插线板多孔接拖线板",
                price: "￥105",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/742650321/TB1pANXnILJ8KJjy0FnXXcFDpXa_!!0-item_pic.jpg",
                title:
                  "金士顿HyperX复仇女神电竞游戏鼠标垫小号中大键鼠桌垫吃鸡鼠标垫",
                price: "￥79",
              },
            ],
          },
        },
        {
          adUrl: "//aecpm.alicdn.com/simba/img/TB1tELGJFXXXXaLXFXXSutbFXXX.jpg",
        },
        {
          title: "居家生活",
          subTitle: "GROCERY & HEALTH",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1QsmZhUQIL1JjSZFhwu1DZFXa.png",
              leftTitle: "美家",
              rightTitle: ["家饰尚品", "清新居家"],
            },
          ],
          gridList: {
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/1816075766/O1CN01ifhJQf1sSsJ4k7O8x_!!0-item_pic.jpg",
                title:
                  "口水娃兰花豆500g*2蟹黄味蚕豆牛肉味香辣味怪味胡豆休闲零食小吃",
                price: "￥10.8",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/1629284890/O1CN014XLN3G1lzfPezZPeg_!!0-item_pic.jpg",
                title:
                  "儿童加绒裤男童运动裤一体绒男大童棉裤保暖冬装男童加厚裤子秋冬",
                price: "￥59.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2200645675873/O1CN01GdPkLn1tFsfrDNo2t_!!0-item_pic.jpg",
                title:
                  "恐龙手偶手套软胶三角霸王龙儿童仿真动物模型鲨鱼鲨臂头男孩玩具",
                price: "￥16",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/2417357679/O1CN01XdD6Ie26b1uib1va2_!!0-item_pic.jpg",
                title:
                  "金纺护理衣液纯净温和衣物柔顺剂精纺柔软剂防静电持久留香经济装",
                price: "￥39.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/3419050153/O1CN01xZhPNf1D07F4WIkix_!!0-item_pic.jpg",
                title:
                  "力士沐浴露液乳男女香体持久留香小苍兰家庭装正品通用官方旗舰店",
                price: "￥21.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/3985647342/TB25_xIagHqK1RjSZJnXXbNLpXa_!!3985647342-0-item_pic.jpg",
                title:
                  "晨光修正带免运费30米大容量改正带学生用实惠装小清新可爱修改带150米修真带简约韩国创意多功能涂改带批发",
                price: "￥10.8",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/3432737463/O1CN01e9uHF92506SGQcz4h_!!0-item_pic.jpg",
                title:
                  "3M强力单面海绵胶带eva防水无痕汽车用高粘泡沫单面胶防撞密封隔音防震缓冲海绵条自粘橡胶条5-8-10mm厚",
                price: "￥7",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/1639220898/TB2Mc2LXrJmpuFjSZFwXXaE4VXa_!!1639220898.jpg",
                title:
                  "北极星大号简约夜光石英钟表客厅办公挂钟时钟日历万年历个性挂表",
                price: "￥55",
              },
            ],
          },
        },
        {
          title: "打造爱巢",
          subTitle: "HOME",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1MesKcWmWQ1JjSZPhwu0CJFXa.png",
              leftTitle: "轻松生活",
              rightTitle: ["温纹尔雅", "极致条纹感"],
            },
          ],
          gridList: {
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/858286437/O1CN01Z9Jsgc1xQC2swn8Ua_!!0-item_pic.jpg",
                title:
                  "午憩宝 配套躺椅棉垫 午睡椅垫 沙滩椅垫 办公室折叠椅垫子午休床",
                price: "￥59",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/452341432/O1CN01bJO7pN1MRtlKmoKCf_!!0-item_pic.jpg",
                title:
                  "Midea/美的 MC-JHN30F 电饼铛家用双面悬浮加热煎烤薄饼机电饼档",
                price: "￥109",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2201508881101/O1CN01c5YNiJ1K0IirMJonR_!!0-item_pic.jpg",
                title:
                  "电压力锅家用双胆迷你小型4L5L6L8L升智能高压电饭煲电高压锅",
                price: "￥119.9",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/1910480193/O1CN01yuAJLn1DIR3Emni66_!!2-item_pic.png",
                title:
                  "九阳ZD-5J91蒸蛋器家用煮蛋器多功能早餐小型煮鸡蛋羹机神器迷你",
                price: "￥59",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/TB1Tr58RXXXXXceaXXXXXXXXXXX_!!0-item_pic.jpg",
                title:
                  "纯色双色全棉被套150 180 200x230 220x240纯棉单人双人单件被罩",
                price: "￥89",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/764442017/O1CN01lhXLMU1QlpTCZY2cw_!!0-item_pic.jpg",
                title:
                  "商场立式烟蒂柱不锈钢灭烟桶户外吸烟区烟灰缸室外落地灭烟垃圾桶",
                price: "￥125",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/2222828811/O1CN01fI2fXS2ExUIrolwgG_!!0-item_pic.jpg",
                title:
                  "小米蓝牙语音遥控器通用小米电视机盒子红外万能遥控原装正品mini",
                price: "￥68",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/1584152385/O1CN01L0d0Fi1TUNGWGJlWq_!!0-item_pic.jpg",
                title:
                  "迷你屋免安装蒙古包简易蚊帐1.5米双开/三开门拉链1.8m床双人家用",
                price: "￥89",
              },
            ],
          },
        },
        {
          adUrl: "//aecpm.alicdn.com/simba/img/TB1x8DCJFXXXXc7XFXXSutbFXXX.jpg",
        },
        {
          title: "户外出行",
          subTitle: "OUTDOORS & AUTOMOTIVE",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1w6JJhol7MKJjSZFDwu1OEpXa.png",
              leftTitle: "户外大牌",
              rightTitle: ["拎包远足", "套装精选"],
            },
          ],
          gridList: {
            gridDatas: [
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/4116366996/O1CN01f6hJA421YDX4pvFkK_!!4116366996.jpg",
                title: "CANADA GOOSE / 加拿大鹅 Freestyle 马甲 2832L",
                price: "￥4000",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/772352677/O1CN01buZfPA1Ve6vQfzHPW_!!772352677.jpg",
                title:
                  "Nike耐克双肩包男女高中大学生书包大容量电脑旅行背包BA5554-101",
                price: "￥289",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i1/2786684144/O1CN018Z8TZV1gTzx3So15h_!!2786684144.jpg",
                title: "Adidas阿迪达斯男包女包新款旅行包斜挎包拎包休闲包BQ6975",
                price: "￥129",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/2064013613/O1CN01X0T0JX1cYnc5UNVQ6_!!0-item_pic.jpg",
                title:
                  "中老年冲锋衣女妈妈秋冬季加绒加厚大码三合一可拆卸保暖防风外套",
                price: "￥238",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/1993730769/O1CN01xel7DZ1HYFENu49tW_!!0-item_pic.jpg",
                title:
                  "探路者男鞋2020秋季新款运动户外鞋徒步鞋耐磨跑步鞋越野跑鞋",
                price: "￥1060",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i2/2068534786/O1CN012FQGzZ1lE23aIPe8o_!!0-item_pic.jpg",
                title: "户外速干衬衫衬衣速干衣快干衣T恤长袖短袖服装男款新品",
                price: "￥89",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i3/650568026/O1CN01f1hbpl299xTnMc2v6_!!650568026.jpg",
                title:
                  "2020秋冬新品Columbia哥伦比亚户外男防泼水抓绒内里软壳衣WE3241",
                price: "￥639",
              },
              {
                cover:
                  "//gw.alicdn.com/bao/uploaded/i4/1579814274/O1CN01nCfZWh1hRXRLPVkGH_!!1579814274.png",
                title:
                  "Timberland添柏岚大黄靴踢不烂户外防水保暖男鞋雪地马丁靴|10061",
                price: "￥1490",
              },
            ],
          },
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#floorList {
  margin: 20px auto 0;
  width: 1230px;
  padding-right: 30px;
}
</style>