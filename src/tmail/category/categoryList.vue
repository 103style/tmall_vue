<template>
  <div id="category_list">
    <ul class="categorys">
      <li
        v-for="(item, index) in items"
        class="category_list_item"
        v-bind:class="colorClass[index % colorClass.length]"
        v-on:mouseenter="changeHotWord(index)"
      >
        <span class="iconfont">{{ item.iconDes }}</span>
        <a
          v-bind:href="'#' + title"
          target="_blank"
          v-for="(title, index) in item.titles"
        >
          {{ index != 0 ? "/" : "" }}{{ title }}
        </a>
      </li>
    </ul>

    <HotWord class="category_detail" :hotitem="hotWordItem"></HotWord>
  </div>
</template>

<script>
import HotWord from "./hotword.vue";
export default {
  components: {
    HotWord,
  },
  data() {
    //iconfont字符修正 在WPF中字体图标"&#xe522;"通过字段绑定需要写为"\ue522"，否在只显示字符串
    return {
      items: [
        { titles: ["女装", "内衣"], iconDes: "\u3459" },
        {
          titles: ["男装", "运动户外"],
          iconDes: "\u346c",
        },
        {
          titles: ["女鞋", "男鞋", "箱包"],
          iconDes: "\u346d",
        },
        {
          titles: ["美妆", "个人护理"],
          iconDes: "\u345c",
        },
        {
          titles: ["腕表", "眼镜", "珠宝饰品"],
          iconDes: "\u3452",
        },
        {
          titles: ["手机", "数码", "电脑办公"],
          iconDes: "\u3457",
        },
        { titles: ["母婴玩具"], iconDes: "\u3456" },
        {
          titles: ["零食", "茶酒", "进口食品"],
          iconDes: "\u3455",
        },
        { titles: ["生鲜水果"], iconDes: "\u3485" },
        { titles: ["大家电", "生活电器"], iconDes: "\u3454" },
        { titles: ["家具建材"], iconDes: "\u3453" },
        { titles: ["汽车", "配件", "用品"], iconDes: "\u345d" },
        { titles: ["家纺", "家饰", "鲜花"], iconDes: "\u345e" },
        { titles: ["医药保健"], iconDes: "\u3460" },
        { titles: ["厨具", "收纳", "宠物"], iconDes: "\u345f" },
        { titles: ["图书音像"], iconDes: "\u3461" },
      ],
      colorClass: [
        "colore54077",
        "color6347ed",
        "color427def",
        "colorf7a831",
        "color3bc7b0",
      ],
      hotWords: [
        {
          hotitems: [
            {
              title: "当季流行",
              items: [
                { name: "女装新品", isHot: true },
                { name: "商场同款" },
                { name: "仙女连衣裙", isHot: true },
                { name: "T恤" },
                { name: "衬衫" },
                { name: "时髦外套" },
                { name: "休闲裤" },
                { name: "牛仔裤" },
                { name: "无痕文胸", isHot: true },
                { name: "运动文胸" },
                { name: "潮流家居服", isHot: true },
                { name: "百搭船袜" },
              ],
            },
            {
              title: "精选上装",
              items: [
                { name: "毛呢外套", isHot: true },
                { name: "羽绒服", isHot: true },
                { name: "棉服", isHot: true },
                { name: "丝绒卫衣" },
                { name: "毛针织衫" },
                { name: "皮毛一体" },
                { name: "皮草" },
                { name: "毛衣" },
                { name: "衬衫" },
                { name: "卫衣" },
                { name: "针织衫" },
                { name: "T恤", isHot: true },
                { name: "短外套" },
                { name: "小西装", isHot: true },
                { name: "风衣" },
              ],
            },
            {
              title: "浪漫裙装",
              items: [
                { name: "连衣裙", isHot: true },
                { name: "半身裙" },
                { name: "A字裙", isHot: true },
                { name: "荷叶边裙", isHot: true },
                { name: "大摆裙" },
                { name: "包臀裙" },
                { name: "百褶裙", isHot: true },
                { name: "长袖" },
                { name: "连衣裙" },
                { name: "棉麻连衣裙" },
                { name: "牛仔裙" },
                { name: "蕾丝连衣裙" },
                { name: "真丝连衣裙" },
                { name: "印花连衣裙" },
              ],
            },
            {
              title: "女士下装",
              items: [
                { name: "休闲裤", isHot: true },
                { name: "阔腿裤", isHot: true },
                { name: "牛仔裤" },
                { name: "打底裤" },
                { name: "开叉运动裤", isHot: true },
                { name: "哈伦裤背带裤" },
                { name: "小脚裤西装裤" },
                { name: "短裤" },
              ],
            },
            {
              title: "特色女装",
              items: [
                { name: "时尚套装", isHot: true },
                { name: "休闲套装" },
                { name: "日系女装", isHot: true },
                { name: "精选妈妈装", isHot: true },
                { name: "大码女装" },
                { name: "职业套装" },
                { name: "优雅旗袍" },
                { name: "精致礼服" },
                { name: "婚纱" },
                { name: "唐装" },
                { name: "小码女装" },
              ],
            },
            {
              title: "文胸塑身",
              items: [
                { name: "光面文胸" },
                { name: "运动文胸" },
                { name: "美背文胸" },
                { name: "聚拢文胸" },
                { name: "大杯文胸" },
                { name: "轻薄塑身" },
              ],
            },
            {
              title: "家居服",
              items: [
                { name: "春夏家居服" },
                { name: "纯棉家居服" },
                { name: "莫代尔家居服" },
                { name: "真丝家居服" },
                { name: "春夏睡裙" },
                { name: "男士家居服" },
                { name: "情侣家居服" },
                { name: "性感睡裙" },
              ],
            },
            {
              title: "内裤背心",
              items: [
                { name: "男士内裤" },
                { name: "女式内裤" },
                { name: "男士内裤多条装" },
                { name: "女士内裤多条装" },
                { name: "莫代尔内裤" },
              ],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "当季流行",
              items: [
                { name: "当季新品", isHot: true },
                { name: "商场同款" },
                { name: "羽绒服", isHot: true },
                { name: "潮流卫衣", isHot: true },
                { name: "牛仔衬衫" },
                { name: "修身夹克", isHot: true },
                { name: "保暖棉服", isHot: true },
                { name: "温暖的针织衫" },
                { name: "修身西服" },
                { name: "秋冬风衣", isHot: true },
                { name: "束脚裤", isHot: true },
                { name: "破洞牛仔裤" },
                { name: "跑步鞋", isHot: true },
                { name: "休闲鞋", isHot: true },
                { name: "篮球鞋", isHot: true },
                { name: "自行车", isHot: true },
                { name: "平衡车" },
                { name: "帆布鞋" },
                { name: "运动套装" },
                { name: "运动卫衣", isHot: true },
                { name: "鱼竿", isHot: true },
                { name: "冲锋衣", isHot: true },
                { name: "跑步机", isHot: true },
                { name: "电动车", isHot: true },
              ],
            },
            {
              title: "男士外套",
              items: [
                { name: "夹克", isHot: true },
                { name: "单西" },
                { name: "棒球服" },
                { name: "棉衣", isHot: true },
                { name: "毛呢大衣", isHot: true },
                { name: "风衣" },
                { name: "西服套装", isHot: true },
                { name: "羽绒服", isHot: true },
                { name: "皮衣" },
                { name: "运动服" },
                { name: "工装外套" },
                { name: "针织开衫" },
                { name: "马甲" },
              ],
            },
            {
              title: "男士内搭",
              items: [
                { name: "短袖T恤", isHot: true },
                { name: "POLO衫", isHot: true },
                { name: "短袖衬衫" },
                { name: "背心" },
                { name: "卫衣", isHot: true },
                { name: "针织衫/毛衣" },
                { name: "长袖衬衫", isHot: true },
                { name: "长袖T恤" },
              ],
            },
            {
              title: "男士裤装",
              items: [
                { name: "小脚裤", isHot: true },
                { name: "9分裤", isHot: true },
                { name: "短裤" },
                { name: "休闲裤", isHot: true },
                { name: "牛仔裤", isHot: true },
                { name: "针织裤", isHot: true },
                { name: "西裤" },
                { name: "运动裤" },
                { name: "工装裤" },
              ],
            },
            {
              title: "特色男装",
              items: [
                { name: "潮牌", isHot: true },
                { name: "中老年" },
                { name: "加大码", isHot: true },
                { name: "职场精英" },
                { name: "中国风", isHot: true },
                { name: "情侣装" },
              ],
            },
            {
              title: "运动鞋",
              items: [
                { name: "跑步鞋", isHot: true },
                { name: "运动鞋" },
                { name: "板鞋" },
                { name: "潮鞋", isHot: true },
                { name: "休闲鞋" },
                { name: "篮球鞋", isHot: true },
                { name: "足球鞋" },
              ],
            },
            {
              title: "运动服",
              items: [
                { name: "短袖t恤", isHot: true },
                { name: "运动裤", isHot: true },
                { name: "运动内衣", isHot: true },
                { name: "速干t恤", isHot: true },
                { name: "运动Polo", isHot: true },
                { name: "运动卫衣" },
                { name: "运动套装", isHot: true },
                { name: "运动短裤", isHot: true },
                { name: "健身服", isHot: true },
                { name: "运动茄克" },
              ],
            },
            {
              title: "户外鞋服",
              items: [
                { name: "冲锋衣", isHot: true },
                { name: "抓绒衣", isHot: true },
                { name: "登山鞋", isHot: true },
                { name: "户外休闲衣" },
                { name: "军迷", isHot: true },
                { name: "钓鱼服" },
              ],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "推荐女鞋",
              items: ["潮流过膝靴气质百搭踝靴永远的帆布鞋流行松糕底英伦牛津鞋"],
            },
            {
              title: "潮流男鞋",
              items: [
                "商场同款休闲鞋正装皮鞋休闲皮鞋板鞋户外休闲帆布鞋运动休闲乐福鞋豆豆鞋布洛克帆船鞋布鞋",
              ],
            },
            {
              title: "女单鞋",
              items: [
                "单鞋小白鞋商场同款帆布鞋深口单鞋浅口单鞋平底单鞋高跟单鞋坡跟单鞋豆豆鞋乐福鞋牛津鞋",
              ],
            },
            {
              title: "特色鞋",
              items: [
                "妈妈鞋大码女鞋小码女鞋女内增高男内增高软轻风爸爸鞋大码男鞋小码男鞋",
              ],
            },
            {
              title: "潮流女包",
              items: [
                "新品推荐商场同款女士钱包单肩包斜跨包手提包手拿包腰包胸包化妆包",
              ],
            },
            {
              title: "精品男包",
              items: [
                "男士钱包收纳包胸包腰包手拿包手提包斜跨包单肩包商场同款新品推荐",
              ],
            },
            {
              title: "功能箱包",
              items: [
                "旅行箱万向轮箱旅行袋女士双肩包男士双肩包韩版双肩包铆钉双肩包女士钱包男士钱包大容量印花",
              ],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "护肤品",
              items: [
                "官方直售面膜护肤套装乳液面霜精华液护手霜爽肤水洁面眼霜身体乳卸妆身体护理男士护理精油芳疗丰胸面部喷雾T区护理去角质补水祛痘敏感修护线上专柜",
              ],
            },
            {
              title: "彩妆",
              items: [
                "时尚彩妆香水BB霜美容工具口红隔离粉底粉饼气垫bb指甲油美甲工具眉笔睫毛膏眼线唇彩眼影蜜粉彩妆套装",
              ],
            },
            {
              title: "男士护肤",
              items: [
                "洁面爽肤水乳液/面霜面膜面部精华眼部护理防晒唇部护理T区护理控油",
              ],
            },
            {
              title: "肤质推选",
              items: ["混合偏油型中性偏干型敏感性干性油性混合型中性"],
            },
            {
              title: "美发护发",
              items: [
                "洗发水进口洗发水护发素发膜洗护套装护发精油头发造型弹力素染发霜整顶假发假发配件男性假发",
              ],
            },
            {
              title: "口腔护理",
              items: [
                "牙膏进口牙膏牙刷进口牙刷漱口水牙线牙粉口气清新剂牙贴口腔美白假牙清洁",
              ],
            },
            {
              title: "身体女性",
              items: [
                "沐浴露香皂泡澡浴盐护足洗手液手动剃须刀卫生巾成人护垫私处洗液卫生棉条",
              ],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "黄金首饰",
              items: [
                "耳钉黄金项链投资黄金婚嫁套饰黄金对戒转运珠足金饰品K金饰品商场同款",
              ],
            },
            {
              title: "钻石彩宝",
              items: [
                "结婚钻戒钻石吊坠钻石耳饰钻石手链裸钻定制红蓝宝石绿宝石坦桑石其他天然宝石",
              ],
            },
            {
              title: "珍珠玉翠",
              items: [
                "珍珠项链送妈妈海水珍珠和田玉翡翠摆件翡翠手镯翡翠项链琥珀手链天然琥珀原矿琥珀",
              ],
            },
            {
              title: "潮流饰品",
              items: [
                "明星同款传统银饰木手串银手镯石榴石手链开口戒指胸针宝宝银饰手链项链发饰手镯耳饰戒指项坠施华洛世奇shes银时代伊泰莲娜PH7MonchhichiALEXANDRE",
              ],
            },
            {
              title: "腕表",
              items: [
                "瑞士名表日韩港表欧美手表经典国表国货精表男表女表情侣表儿童手表机械表石英表光能表防水表运动表学生表军表陶瓷表",
              ],
            },
            {
              title: "眼镜",
              items: [
                "太阳镜墨镜眼镜框近视眼镜防辐射眼镜老花镜司机镜偏光镜驾驶镜3D眼镜雷朋暴龙宝岛眼镜oakley",
              ],
            },
            {
              title: "烟具",
              items: ["电子烟烟盒烟斗烟嘴烟油蒸汽烟水烟戒烟女士烟鼻烟雪茄"],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "热门手机",
              items: ["小米iPhone魅族荣耀乐视OPPOvivo三星华为"],
            },
            {
              title: "特色手机",
              items: ["AliOS千元指纹双卡双待大屏自拍移动联通电信合约机"],
            },
            {
              title: "手机特惠",
              items: ["打折秒杀新品特卖实惠精选"],
            },
            {
              title: "电脑整机",
              items: ["笔记本平板电脑台式机一体机DIY游戏本iPadSurface"],
            },
            {
              title: "智能数码",
              items: [
                "智能设备智能手表智能手环VR眼镜智能摄像智能健康智能机器人",
              ],
            },
            {
              title: "游戏组装",
              items: ["DIY电脑竞技DIY显示器游戏本机械键盘XBOX游戏手柄"],
            },
            {
              title: "硬件存储",
              items: ["显示器机械键盘固态硬盘CPU显卡主板高速U盘路由器"],
            },
            {
              title: "摄影摄像",
              items: ["相机单反单电微单摄像机自拍神器拍立得镜头自拍杆"],
            },
            {
              title: "影音娱乐",
              items: ["耳机天猫魔盒数码影音家庭影院蓝牙耳机网络播放器"],
            },
            {
              title: "办公文教",
              items: ["文具电子书笔类／书写工具智能投影打印机保险箱"],
            },
            {
              title: "数码配件",
              items: ["手机配件苹果配件笔记本配件平板配件相机配件手机车载配件"],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "童装",
              items: ["商场同款套装裤子外套T恤裙子内衣裤连体衣亲子装"],
            },
            {
              title: "婴儿服",
              items: ["连体衣内衣套装裤子婴儿礼盒外套家居服T恤反穿衣肚兜"],
            },
            {
              title: "童鞋",
              items: ["学步鞋运动鞋亲子鞋帆布鞋皮鞋雨靴靴子拖鞋棉鞋凉鞋"],
            },
            {
              title: "车床用品",
              items: ["婴儿推车学步车安全座椅婴儿背带腰凳婴儿床餐椅睡袋抱被"],
            },
            {
              title: "喂养",
              items: ["奶瓶奶嘴水杯餐具消毒锅辅食机调奶器暖奶器围嘴"],
            },
            {
              title: "洗护",
              items: ["洗发水沐浴露润肤浴盆湿巾洗衣液洗衣皂理发器驱虫止痒"],
            },
            {
              title: "玩具",
              items: [
                "婴儿玩具儿童自行车儿童电动车毛绒玩具积木电动遥控儿童箱包",
              ],
            },
            {
              title: "天猫动漫",
              items: ["动漫周边影视周边手办高达魔术道具COSPLAY桌游变形金刚"],
            },
            {
              title: "奶粉",
              items: ["牛奶粉羊奶粉特殊配方奶粉宝宝辅食宝宝零食宝宝营养DHA"],
            },
            {
              title: "纸尿裤",
              items: ["纸尿裤拉拉裤纸尿片LXLMSNB新生儿组合"],
            },
            {
              title: "孕产",
              items: ["孕产用品孕妈洗护孕妈装月子服哺乳文胸防辐射吸奶器待产包"],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
        {
          hotitems: [
            {
              title: "",
              items: [""],
            },
          ],
        },
      ],
      hotWordItem: null,
    };
  },
  methods: {
    changeHotWord(index) {
      this.hotWordItem = this.hotWords[index];
    },
  },
};
</script>

<style lang="stylus" scoped>
#category_list:hover .category_detail {
  visibility: visible;
}

#category_list {
  position: relative;

  .category_detail {
    visibility: hidden;
    position: absolute;
    width: 852px;
    height: 500px;
    left: 200px;
    background-color: #fff;
  }

  .categorys {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.55);
    width: 200px;
    height: 500px;
    z-index: 11;

    .category_list_item {
      height: 31.2px;
      color: #fff;

      a {
        height: 31px;
        line-height: 31px;
        color: #fff;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
      }

      span {
        margin-left: 14px;
        margin-right: 4px;
        height: 31px;
        color: #fff;
        opacity: 0.5;
        display: inline-block;
        line-height: 31px;
        vertical-align: middle;
        font-size: 16px;
      }
    }

    li:hover {
      background: #fff;
    }

    li:hover span {
      color: red;
      opacity: 1;
    }

    li:hover a {
      color: red;
      font-weight: 700;
    }

    .colore54077:hover a {
      color: #e54077 !important;
    }

    .color6347ed:hover a {
      color: #6347ed !important;
    }

    .color427def:hover a {
      color: #427def !important;
    }

    .colorf7a831:hover a {
      color: #f7a831 !important;
    }

    .color3bc7b0:hover a {
      color: #3bc7b0 !important;
    }
  }
}
</style>