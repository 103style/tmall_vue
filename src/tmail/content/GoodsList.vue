// 猜你喜欢商品列表
<template>
  <div id="goodListBox">
    <h2 class="goodLisTitleBox">
      <span class="goodLisTitle">
        <span class="iconfont guesssIcon">{{ guessIcon }}</span>
        猜你喜欢
      </span>
    </h2>
    <div class="goodsBox" v-for="(goodsItem, index) in goodsData">
      <a
        :href="'#' + goodsItem.title"
        target="_blank"
        :class="['goodsItemBox', index % 5 == 4 ? '' : 'marginRight8p5']"
      >
        <div class="goodsCoverBox">
          <img class="goodsCover" :src="goodsItem.cover" alt="" />
        </div>
        <div class="textBox">
          <div class="goodsTitle">{{ goodsItem.title }}</div>
          <div class="goodsPrice">{{ goodsItem.price }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guessIcon: "\u3459",
      goodsData: [
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/1656624709/O1CN01i11iJs1kelhXt9UV8_!!1656624709.jpg_400x400q60.jpg",
          title: "九阳三明治早餐机神器家用小型多功能轻食面包吐司压烤机华夫饼机",
          price: "¥129.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/725677994/O1CN01WMINGM28vImwvic51_!!2-item_pic.png_400x400q60.jpg",
          title: "威露士除菌内衣洗衣液300g专业洗内裤除螨抑菌 去血渍去异味亮白",
          price: "¥36.5",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB18OBMjIKfxu4jSZPfXXb3dXXa.png_400x400q60.jpg",
          title: "维达手帕纸超韧4层8张18包卫生纸巾 自然无香面巾纸 新旧交替发货",
          price: "¥11.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01aNthAw23trTq7vfTC_!!6000000007314-2-yinhe.png_400x400q60.jpg",
          title: "百草味-零食大礼包 网红爆款休闲充饥夜宵小吃饼干组合一整箱送礼",
          price: "¥58.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1_gzhHYr1gK0jSZR0XXbP8XXa.png_400x400q60.jpg",
          title: "Walch/威露士倍护滋润抑菌洗手液525ml抵御干燥 怡人清香清香型",
          price: "¥20.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01KyjByU1PCjYQkKCDG_!!6000000001805-2-yinhe.png_400x400q60.jpg",
          title: "维达棉韧立体美压花抽纸3层100抽6包卫生纸巾餐巾纸 新旧随机发货",
          price: "¥29.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/725677994/O1CN01bMrRrI28vIn67AZdE_!!2-item_pic.png_400x400q60.jpg",
          title: "三只松鼠手撕面包1kg整箱网红零食礼包早餐休闲食品蛋糕点心吐司",
          price: "¥29.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/2772080898/O1CN01xuz7dm1IVKIGjFVni_!!2-item_pic.png_400x400q60.jpg",
          title: "芭芭农场专用兑换品 广西百香果2斤装",
          price: "¥14.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1YmPsH1L2gK0jSZPhXXahvXXa.png_400x400q60.jpg",
          title: "维达无芯卷纸超韧4层78克10卷(中棒)卫生纸巾 厕纸手纸家用实惠装",
          price: "¥39.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01pNGAZ91MdLimUt4Zy_!!6000000001457-2-yinhe.png_400x400q60.jpg",
          title: "奥克斯取暖器电暖风机家用电暖气小太阳热风机办公室节能省电小型",
          price: "¥74.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01b5zRWJ1JCpww3da5S_!!6000000000993-2-yinhe.png_400x400q60.jpg",
          title: "百草味麻辣零食大礼包鸭脖小吃网红肉类熟食卤味整箱年货四川特产",
          price: "¥42.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01kizfjd1MIjtd4UhMi_!!6000000001412-2-yinhe.png_400x400q60.jpg",
          title: "飞科剃须刀电动男士刮胡刀全身水洗智能充电式须刀官方旗舰店正品",
          price: "¥99.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01zFhjHZ1Ew702guP95_!!6000000000415-2-yinhe.png_400x400q60.jpg",
          title: "广西武鸣沃柑新鲜沙塘桔子水果10斤大果皇帝丑柑当季砂糖橘子整箱",
          price: "¥14.5",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/619123122/O1CN01qpqUjc1Yvv8n16DGK_!!2-item_pic.png_400x400q60.jpg",
          title: "【良品铺子-猪肉脯100g】猪肉铺熟食肉类小吃零食休闲食品满减",
          price: "¥29.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1AcD.Xz39YK4jSZPcXXXrUFXa.png_400x400q60.jpg",
          title: "维达厨房卷纸2层75节2卷厨房专用去油污卫生纸巾 新旧包装交替",
          price: "¥9.5",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01IzltcI22GdvOQzaAT_!!6000000007093-2-yinhe.png_400x400q60.jpg",
          title: "百草味山楂条228g 果丹皮山楂干片卷糕球果脯蜜饯儿童开胃小零食",
          price: "¥7.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/2097802715/O1CN01xy5opH1VvVxljhwis_!!2-item_pic.png_400x400q60.jpg",
          title: "绝世原味黑椒烤肠地道肠火山石台式热狗肠2斤装纯肉香肠小吃包邮",
          price: "¥59.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1hWHBHW61gK0jSZFlXXXDKFXa.png_400x400q60.jpg",
          title: "百草味开心果100g坚果炒货干果仁原色盐焗味袋装休闲零食孕妇小吃",
          price: "¥39.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN016qYgrx1MLwer3njyk_!!6000000001419-2-yinhe.png_400x400q60.jpg",
          title: "良品铺子酥脆薄饼干300g早餐代餐充饥零食海苔咸味休闲食品小包装",
          price: "¥22.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01N0Lnj21ZGzMmWiOs5_!!6000000003168-2-yinhe.png_400x400q60.jpg",
          title: "威露士多用途衣物家居消毒液1L杀菌率99.999%柠檬清新 用途广泛",
          price: "¥57.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01fWrjLh20DJpxB3BZH_!!6000000006815-2-yinhe.png_400x400q60.jpg",
          title: "雀巢动物性淡稀奶油250ml 蛋糕裱花蛋挞液慕斯甜品家用烘焙原材料",
          price: "¥15.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i2/725677994/O1CN01vL525r28vIn1V6msl_!!2-item_pic.png_400x400q60.jpg",
          title: "三只松鼠芒果干60g蜜饯果脯水果干网红休闲办公室零食小吃食品",
          price: "¥11.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01ySpJ8h1znDF5o4tm6_!!6000000006758-2-yinhe.png_400x400q60.jpg",
          title: "展艺棉花糖低甜500g烘焙雪花酥饼干家用牛轧糖草莓奶枣专用原材料",
          price: "¥7.6",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01JZErON1lq367tkryA_!!6000000004869-2-yinhe.png_400x400q60.jpg",
          title: "飞科电吹风机FH6232大功率可折叠冷热风家用电吹风筒宿舍用学生",
          price: "¥49.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i4/725677994/O1CN01hSChdL28vImqCenSN_!!2-item_pic.png_400x400q60.jpg",
          title: "三只松鼠手剥巴旦木120g特产炒货扁桃仁坚果休闲零食干果杏仁",
          price: "¥58.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1TY6khoD1gK0jSZFGXXbd3FXa.png_400x400q60.jpg",
          title: "满减【三只松鼠_夏威夷果160g】坚果奶油味干果仁休闲年货小零食",
          price: "¥49.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01i9gFbP1DrhamXWrXU_!!6000000000270-2-yinhe.png_400x400q60.jpg",
          title: "【好想你年货红枣礼盒】枣夹核桃新疆特产坚果零食大礼包春节送礼",
          price: "¥109.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/725677994/O1CN01UdEIXY28vImIy9Q3r_!!2-item_pic.png_400x400q60.jpg",
          title: "三只松鼠蜀香麻辣味牛肉干吃100g零食熟食特产牛肉粒美食小吃即食",
          price: "¥35.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01im3VeA1Dy7748ZB8S_!!6000000000284-2-yinhe.png_400x400q60.jpg",
          title: "全棉时代一次性洗脸巾棉柔巾纯棉升级加厚洁面巾干湿两用80抽/盒",
          price: "¥19.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01EStAyM1eCTXdwxzqk_!!6000000003835-2-yinhe.png_400x400q60.jpg",
          title: "好奇皇家御裤拉拉裤L6婴儿宝宝尿不湿丝柔超薄裤型纸尿裤麒麟裤",
          price: "¥19.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/1917047079/O1CN01RAue1W22AENWLX18A_!!0-item_pic.jpg_400x400q60.jpg",
          title: "Apple/苹果 20W USB-C 电源适配器",
          price: "¥149.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/415670368/O1CN01Mr39nE1EaaNduKOVN_!!415670368.jpg_400x400q60.jpg",
          title: "九阳绞肉机家用电动全自动多功能小型搅拌打碎肉馅菜料理机大容量",
          price: "¥99.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1dIvlhbr1gK0jSZR0XXbP8XXa.png_400x400q60.jpg",
          title: "满减【三只松鼠_碧根果160g】奶油味坚果仁长寿果休闲零食核桃",
          price: "¥36.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/725677994/O1CN01jWf6LB28vImMumdjM_!!2-item_pic.png_400x400q60.jpg",
          title: "三只松鼠酸辣粉130g桶装速食即食方便面食品泡面正宗四川小吃",
          price: "¥18.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1awXjaKpyVu4jSZFhXXbBpVXa.png_400x400q60.jpg",
          title: "维达洁肤杀菌湿巾湿纸巾10片1包 便携装卫生湿纸巾湿巾纸新旧交替",
          price: "¥6.6",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01iFgabH1JaeXhkfHV4_!!6000000001045-2-yinhe.png_400x400q60.jpg",
          title: "Lancome/兰蔻清滢提亮舒缓补水粉水收缩毛孔爽肤水保湿水",
          price: "¥319.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01eDT1ZV1D8okltiMuJ_!!6000000000172-2-yinhe.png_400x400q60.jpg",
          title: "百草味炭烧腰果100g坚果干果仁每日休闲食品原味零食网红特产小吃",
          price: "¥39.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01H5qzXO209CGwug6K6_!!6000000006806-2-yinhe.png_400x400q60.jpg",
          title: "展艺硅油纸烘焙烤箱烧烤盘烤肉吸油纸食物专用锡纸不粘家用耐高温",
          price: "¥4.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i2/725677994/O1CN01ZTv7bp28vImInF27u_!!2-item_pic.png_400x400q60.jpg",
          title: "满减三只松鼠肉松饼456g整箱糕点早餐营养点心面包美食休闲小零食",
          price: "¥42.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01Ehoebx1GQAcLIzyeV_!!6000000000616-2-yinhe.png_400x400q60.jpg",
          title: "百草味蔓越莓干100g 烘焙用果脯蜜饯曼越梅干水果越蔓莓干小零食",
          price: "¥19.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN010U8DkD1ICY4xJCgDI_!!6000000000857-2-yinhe.png_400x400q60.jpg",
          title: "【新年礼物】全新Dior迪奥烈艳蓝金唇膏口红传奇新色丝绒999 720",
          price: "¥350.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01GE64Ju1SHGISzZ9FY_!!6000000002221-2-yinhe.png_400x400q60.jpg",
          title: "奥克斯电热毯单人双人电褥子双控宿舍学生水暖安全家用无辐射正品",
          price: "¥79.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01gx6PSZ1nPbSSCQDai_!!6000000005082-2-yinhe.png_400x400q60.jpg",
          title: "飞科毛衣服起球修剪器充电式衣物剃打刮吸毛球机家用去球神器除毛",
          price: "¥59.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/1714128138/O1CN01HoJIMB29zFqCnEkAa_!!1714128138.png_400x400q60.jpg",
          title:
            "【6+128GB立省100元】红米9A 抢购5000mAh大电量大屏幕游戏备用老年人手机xiaomi小米官方旗舰店官网8正品",
          price: "¥599.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i2/2973966816/O1CN01t6BK1F20DmEu6MpiK_!!2973966816.jpg_400x400q60.jpg",
          title: "美的电热水壶家用不锈钢正品电热一体烧水壶自动断电大容量开水壶",
          price: "¥79.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01pVzUlv1VPSEbdQ766_!!6000000002645-2-yinhe.png_400x400q60.jpg",
          title: "百草味 板栗仁80g坚果炒货零食特产熟制甘栗仁毛栗子即食干果栗子",
          price: "¥12.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01m6LWhB22fpjPg5mFM_!!6000000007148-2-yinhe.png_400x400q60.jpg",
          title: "百草味香辣味手撕蟹味棒120g 蟹棒蟹肉棒海味零食即食网红小吃",
          price: "¥29.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i4/1917047079/O1CN01G9o6zZ22AENCvMWPF_!!2-item_pic.png_400x400q60.jpg",
          title: "Apple/苹果 10.2 英寸 iPad",
          price: "¥2499.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01NvVaeB2AJPGM5WyuV_!!6000000008182-2-yinhe.png_400x400q60.jpg",
          title: "自然堂喜马拉雅补水面膜21片面膜补水保湿女学生男女适用官方正品",
          price: "¥99.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01oDwBpO1vG03ev6vYn_!!6000000006144-2-yinhe.png_400x400q60.jpg",
          title: "威露士衣物消毒水除菌液1.2L 薰衣草香深层杀菌99.9% 清新去异味",
          price: "¥54.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01DAXY9y1DfKtvi6SWF_!!6000000000243-2-yinhe.png_400x400q60.jpg",
          title: "欧莱雅发油护发精油女士头发卷发烫发护理柔顺防改善毛躁烫染受损",
          price: "¥69.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01lBSyXa1cxzQHkRxtf_!!6000000003668-2-yinhe.png_400x400q60.jpg",
          title: "稳健全棉时代一次性成人儿童口罩50片三层防护透气防尘官方旗舰店",
          price: "¥69.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01O0iJ1J1WqlTpELfLt_!!6000000002840-2-yinhe.png_400x400q60.jpg",
          title: "奥克斯足浴盆电动按摩加热洗脚盆家用全自动恒温泡脚桶神器高深桶",
          price: "¥59.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01y4TIT31NHCB8vNO0D_!!6000000001544-2-yinhe.png_400x400q60.jpg",
          title:
            "绿光膜苹果11钢化膜iPhone12手机pro全屏11ProMax覆盖mini贴膜xs7plus全包边xr抗摔6s防窥6p防偷窥x水凝膜se8",
          price: "¥15.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01fOObEo1dbNUG1Wvud_!!6000000003754-2-yinhe.png_400x400q60.jpg",
          title: "百草味去骨鸡爪135g柠檬酸辣无骨脱骨凤爪小吃即食袋装零食休闲",
          price: "¥25.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN018jNPhu1V6fzsml30w_!!6000000002604-2-yinhe.png_400x400q60.jpg",
          title: "雀巢脆脆鲨巧克力威化饼干食品24+8条网红休闲怀旧解馋零食盒装",
          price: "¥33.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/2939922051/O1CN01u7MZ671R1OzFQcetU_!!2939922051.jpg_400x400q60.jpg",
          title: "四川爱媛38号果冻橙10斤装橙子新鲜当季水果整箱柑橘蜜桔子包邮甜",
          price: "¥19.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i2/1714128138/O1CN01jAupjv29zFq9hPPLX-1714128138.jpg_400x400q60.jpg",
          title:
            "【包邮 多仓速发】小米米家体重秤体脂秤智能家用婴儿女生宿舍称重健康减肥称精准迷你小型人体电子秤女",
          price: "¥59.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01s5pbmm21oFMyR7rJP_!!6000000007031-2-yinhe.png_400x400q60.jpg",
          title:
            "Apple/苹果原装数据线iPhone7/8plus/x/XR/11/pro正品XS/MAX原厂手机充电线7p充电器头PD20W快充头认证12加长",
          price: "¥38.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/2781001416/O1CN01vrJQ0j1MKZTEuMSSe_!!2781001416.jpg_400x400q60.jpg",
          title: "TCL电热水龙头速热即热式加热厨房宝快速过自来水热电热水器家用",
          price: "¥109.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01mKk53P1CE1ePEN9cT_!!6000000000048-2-yinhe.png_400x400q60.jpg",
          title: "百草味无核白葡萄干200g新疆特产免洗即食果干蜜饯提子休闲零食品",
          price: "¥9.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/3409867774/O1CN01WwHyJM27IXfjgQHQM_!!3409867774.jpg_400x400q60.jpg",
          title: "美的L201B微波炉蒸烤箱一体家用智能杀菌平板变频小型光波炉正品",
          price: "¥519.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1dhnZHGL7gK0jSZFBXXXZZpXa.png_400x400q60.jpg",
          title: "维达便携装湿厕纸10片1包 私处清洁湿巾 干湿搭配 屁屁更干净",
          price: "¥5.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/2973966816/O1CN01Af8a1a20DmExsJhmP_!!2973966816.jpg_400x400q60.jpg",
          title: "美的电磁炉家用火锅炒菜多功能一体节能小型宿舍官方旗舰正品套装",
          price: "¥149.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/725677994/O1CN01goAAvt28vIlVyZOFK_!!2-item_pic.png_400x400q60.jpg",
          title: "Nestle/雀巢茶萃低糖桃子清乌龙果汁茶饮料250ml*6包",
          price: "¥19.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/4097272169/O1CN01lol9tI1RtRip1wlfm_!!0-item_pic.jpg_400x400q60.jpg",
          title: "恒都原肉谷饲整切牛排套餐10片黑椒牛肉家庭新鲜儿童西冷牛扒20",
          price: "¥199.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01ActcvK1vGST717uwx_!!6000000006145-2-yinhe.png_400x400q60.jpg",
          title: "擦玻璃清洁布不留痕鱼纹鱼鳞抹布吸水不掉毛专用无痕厨房洗碗毛巾",
          price: "¥15.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01EsbwJ3287q1gFtp08_!!6000000007886-2-yinhe.png_400x400q60.jpg",
          title: "奥克斯理发器电推剪头发充电式电推子神器自己剃发电动剃头刀家用",
          price: "¥59.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01RClRlT1pVDY0u3598_!!6000000005365-2-yinhe.png_400x400q60.jpg",
          title: "美的加湿器家用静音卧室客厅小型大喷雾器大雾量孕妇婴儿净化空气",
          price: "¥109.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01B9EVlV1Ie1qUCYtpL_!!6000000000917-2-yinhe.png_400x400q60.jpg",
          title: "优衣库 男装 仿羊羔绒运动长裤 429174 UNIQLO",
          price: "¥149.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01KyAPZk1ZXTeK2bpDy_!!6000000003204-2-yinhe.png_400x400q60.jpg",
          title: "THERMOS膳魔师不锈钢保温杯车载便携运动成人儿童水杯简约 500ml",
          price: "¥139.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/619123122/O1CN01gjYKUQ1Yvv5eplL8b_!!2-item_pic.png_400x400q60.jpg",
          title: "【良品铺子-香卤铁蛋128g】鹌鹑蛋小吃零食休闲食品满减",
          price: "¥25.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01m09E9S237JUnCQS86_!!6000000007208-2-yinhe.png_400x400q60.jpg",
          title: "美宝莲眼唇卸妆液脸部温和清洁眼唇脸三合一卸妆水官方正品卸妆油",
          price: "¥56.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN017LeXK01Pm036Mpu7y_!!6000000001882-2-yinhe.png_400x400q60.jpg",
          title: "Swisse斯维诗钙片维生素D150片孕妇VD钙成人老年补钙",
          price: "¥93.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB10BvxGbY1gK0jSZTEXXXDQVXa.png_400x400q60.jpg",
          title: "满减【百草味-蔓越莓曲奇100g】网红美食手工饼干点心办公室零食",
          price: "¥14.7",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/430490406/O1CN01ADtktq1ErzQfZVC9Y_!!430490406.jpg_400x400q60.jpg",
          title: "全棉时代婴儿棉柔巾纯棉新生儿宝宝手口屁专用干湿两用非湿巾6包",
          price: "¥79.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01OKhkVT1XnqZbNWny5_!!6000000002969-2-yinhe.png_400x400q60.jpg",
          title: "优衣库 【新年红】女装 HEATTECH摇粒绒两翻领套头衫 428327",
          price: "¥79.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/689731377/O1CN01VFsaBI1M2i0e6ApCA_!!689731377.png_400x400q60.jpg",
          title:
            "联想品牌无线运动跑步蓝牙耳机磁吸双耳颈挂脖入耳挂耳头戴式超长待机续航苹果11安卓小米华为通用2020年新款",
          price: "¥69.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01Sf2cYe1FAJIbz7krA_!!6000000000446-2-yinhe.png_400x400q60.jpg",
          title: "TCL电子称体重秤人体家用智能测脂肪体脂精准女生宿舍小型高精度",
          price: "¥54.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01am9gAU1zBCOJrpqJW_!!6000000006675-2-yinhe.png_400x400q60.jpg",
          title: "美宝莲官方旗舰店fitme粉底液干皮遮瑕保湿持久水润轻薄全新升级",
          price: "¥109.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01cFlqil24YAKgI8Y69_!!6000000007402-2-yinhe.png_400x400q60.jpg",
          title: "欧莱雅男士保湿霜护肤霜滋润补水保湿乳液润肤面霜擦脸脸部护肤品",
          price: "¥69.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01KtMXIo1ieByPgQm77_!!6000000004437-2-yinhe.png_400x400q60.jpg",
          title: "满减【百草味-鲜蔬麻辣味零食大礼包510g】 网红卤味零食夜宵年货",
          price: "¥44.7",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i1/1714128138/O1CN01pv3oso29zFpyyyZaM-1714128138.jpg_400x400q60.jpg",
          title:
            "【急速发货】小米路由器4A千兆版 5G双频1200M无线路由器千兆端口家用高速WiFi穿墙王学生家长控制",
          price: "¥109.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01wCtvPa1swe6zSyaUh_!!6000000005831-2-yinhe.png_400x400q60.jpg",
          title: "优衣库【薇娅推荐】【新年红】女装 长绒摇粒绒拉链茄克 428330",
          price: "¥129.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i2/1710482305/O1CN013E3O2C1StjZskO1su_!!1710482305.jpg_400x400q60.jpg",
          title: "展艺抹茶粉+ 可可粉组合食用绿茶蛋糕雪花酥饼干奶茶冲饮烘焙原料",
          price: "¥8.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01aL7Lg61eiXHsEDsoC_!!6000000003905-2-yinhe.png_400x400q60.jpg",
          title: "尚巧厨-展艺蛋糕低筋粉500g*2饼干小麦面粉家用白面粉烘焙专用粉",
          price: "¥11.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01CJlOpM251w4w6U4Zv_!!6000000007467-2-yinhe.png_400x400q60.jpg",
          title: "百草味草莓干100g蜜饯水果干果脯网红休闲小吃特产零食品办公室",
          price: "¥19.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i4/619123122/O1CN01t1SYyx1Yvv7XzYBgy_!!619123122-0-lubanu-s.jpg_400x400q60.jpg",
          title: "【良品铺子小食仙-芝麻夹心海苔35g】儿童零食即食香脆食品满减",
          price: "¥17.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01O1irps1dfV2RSGNdl_!!6000000003763-2-yinhe.png_400x400q60.jpg",
          title: "森马秋冬季小熊耳朵帽子围巾女三件套保暖可爱一体网红围脖韩版潮",
          price: "¥29.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i4/2360209412/TB25P_awq8lpuFjy0FpXXaGrpXa_!!2360209412.jpg_400x400q60.jpg",
          title: "【新品】兰蔻明星护肤尝鲜礼盒 持妆/小黑/极光/塑颜 蜜享盒",
          price: "¥20.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01NCex901g3Qyjoa1GP_!!6000000004086-2-yinhe.png_400x400q60.jpg",
          title: "优衣库 女装 弹力棉质两翻领T恤(长袖) 428311 UNIQLO",
          price: "¥59.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01GjrnIm1ULxabhRJ7a_!!6000000002502-2-yinhe.png_400x400q60.jpg",
          title: "富光牛奶杯带刻度早餐喝奶杯微波炉可加热玻璃儿童冲泡奶粉吸管杯",
          price: "¥29.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1ngvxHYj1gK0jSZFuXXcrHpXa.png_400x400q60.jpg",
          title: "百草味手撕鱿鱼条80g休闲零食鱿鱼丝海味零食小吃即食海鲜特产",
          price: "¥14.9",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01Zjvryd1Pji33VywJ8_!!6000000001877-2-yinhe.png_400x400q60.jpg",
          title: "展艺吉利丁片食用鱼胶粉明胶粉家用奶酪棒果冻慕斯蛋糕烘焙原材料",
          price: "¥7.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01WbJw9i1IpTkGvJwJn_!!6000000000942-2-yinhe.png_400x400q60.jpg",
          title: "innisfree/悦诗风吟控油矿物质薄荷定妆散粉持久自然 控油蜜粉",
          price: "¥35.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01frka6n1zJRW6ueKyw_!!6000000006693-2-yinhe.png_400x400q60.jpg",
          title: "展艺葡式蛋挞皮102 带锡纸底半成品酥皮壳蛋挞液套装家用烘焙材料",
          price: "¥10.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN01XbVMwy1Gc4vVJFha3_!!6000000000642-2-yinhe.png_400x400q60.jpg",
          title: "3m双面胶高粘度强力汽车专用固定墙面车用无痕贴胶带泡沫海绵粘胶",
          price: "¥5.8",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/O1CN019JvIHq1Ccl31J83ZU_!!6000000000102-2-yinhe.png_400x400q60.jpg",
          title: "展艺披萨饼底6/8寸饼皮饼底胚半成品加热即食套餐马苏里拉原材料",
          price: "¥12.5",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/i3/725677994/O1CN01LeLClK28vImjWIxWK_!!2-item_pic.png_400x400q60.jpg",
          title: "三只松鼠开口松子100g休闲零食坚果炒货特产东北手剥小吃食品",
          price: "¥58.0",
        },
        {
          cover:
            "//img.alicdn.com/bao/uploaded/bao/upload/TB1k2RqIoY1gK0jSZFCXXcwqXXa.png_400x400q60.jpg",
          title: "包邮欧莱雅护发精油女小金瓶发油修护头发卷发柔顺干枯改善毛躁",
          price: "¥69.9",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#goodListBox {
  padding-right: 30px;
  width: 1230px;
  margin: 30px auto 0;

  .goodLisTitleBox {
    color: #666;
    text-align: center;
    height: 43px;
    font-weight: 100;
    font-size: 18px;
    line-height: 20px;

    .goodLisTitle {
      position: relative;
      font-size: 18px;
      line-height: 20px;
      font-family: 'Microsoft YaHei', SimSun, sans-serif, '\65b9\6b63\5170\4ead\9ed1';

      .guesssIcon {
        position: relative;
        top: 1px;
        margin-right: 4px;
        font-size: 20px;
        color: #ff0036;
      }
    }

    .goodLisTitle:before {
      left: -38px;
    }

    .goodLisTitle:before, .goodLisTitle:after {
      content: '';
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: #979797;
      top: 12px;
    }
  }

  .goodsBox {
    height: 333px;
    float: left;

    .goodsItemBox {
      width: 235px;
      height: 315px;
      display: block;
      border: 2px solid #fff;
      position: relative;
      background-color: #fff;
      overflow: hidden;
      text-align: center;

      .goodsCoverBox {
        width: 185px;
        height: 185px;
        overflow: hidden;
        position: relative;
        margin: 20px auto 0;
        transition: opacity 0.3s ease-out;

        .goodsCover {
          width: 185px;
          height: 185px;
        }
      }

      .textBox {
        padding: 14px 12px 8px;
        text-align: center;

        .goodsTitle {
          margin: 8px auto;
          width: 135px;
          height: 40px;
          font-size: 14px;
          line-height: 20px;
          color: #666;
          overflow: hidden;
        }

        .goodsPrice {
          font-size: 18px;
          line-height: 32px;
          color: #ff0036;
        }
      }
    }

    .marginRight8p5 {
      margin-right: 8.5px;
    }
  }
}
</style>