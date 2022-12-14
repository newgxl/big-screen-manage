// 导入store
// import store from "@/store"
// console.log("======", store.getters.theme)
// 一些不变的量  会被挂载到this.$globalData上
export default {
  TIMEOUT: 10000,
  CYCLE_TIME: 3 * 60 * 1000,
  logoUrl: require("@/assets/images/logo.png"),
  lightLogo: require("@/assets/images/_logo.png"),
  bgs: [
    require("@/assets/images/background3.png"),
    require("@/assets/images/background17.png")
    // require("@/assets/images/background3.png")
    // require("@/assets/images/background8.jpg"),
    // require("@/assets/images/background9.png"),
    // require("@/assets/images/background10.jpg"),
    // require("@/assets/images/background11.jpg")
    // require("@/assets/images/background12.jpg"),
    // require("@/assets/images/background13.jpg"),
    // require("@/assets/images/background14.jpg")
    // require("@/assets/images/background15.jpg")
    // require("@/assets/images/background16.jpg")
  ],
  RESET_PWD_URL: "http://10.151.128.172:8089/Login/Repassword"
}

// 系统的路由部分
export let CMA_CONFIG = new Map([
  [
    "device",
    [
      {
        id: 1,
        imgUrl: require("@/assets/images/aa.png"),
        info: "AA設備總覽",
        target: "device",
        belong: "设备总览",
        to: "aa"
      },
      {
        id: 2,
        imgUrl: require("@/assets/images/fol.png"),
        info: "FOL設備總覽",
        target: "device",
        belong: "设备总览",
        to: "fol"
      },
      {
        id: 3,
        imgUrl: require("@/assets/images/eol.png"),
        info: "EOL設備總覽",
        target: "device",
        belong: "设备总览",
        to: "eol"
      },
      {
        id: 4,
        isExternalLink: true,
        imgUrl: require("@/assets/images/spotcheck.jpg"),
        info: "AA PDI AI 檢測界面",
        target: "device",
        belong: "设备总览",
        to: "http://10.142.117.50:32001/standard/design/#/share/OS4L2ZWV"
      },
      {
        id: 5,
        isExternalLink: true,
        imgUrl: require("@/assets/images/device4.jpg"),
        info: "實時統計",
        target: "device",
        belong: "设备总览",
        to: "http://10.142.117.50:32001/share.html?token=8ZBXMVWR"
      },
      {
        id: 6,
        isExternalLink: true,
        imgUrl: require("@/assets/images/device5.png"),
        info: "歷史日統計",
        target: "device",
        belong: "设备总览",
        to: "http://10.142.117.50:32001/share.html?token=V3SKHL6X"
      },
      {
        id: 7,
        isExternalLink: true,
        imgUrl: require("@/assets/images/device6.png"),
        info: "歷史周統計",
        target: "device",
        belong: "设备总览",
        to: "http://10.142.117.50:32001/share.html?token=HYMY179K"
      },
      {
        id: 8,
        isExternalLink: true,
        imgUrl: require("@/assets/images/device7.png"),
        info: "歷史月統計",
        target: "device",
        belong: "设备总览",
        to: "http://10.142.117.50:32001/share.html?token=TLYKVQQY"
      }
    ]
  ],
  [
    "make",
    [
      {
        id: 9,
        imgUrl: require("@/assets/images/output.png"),
        info: "產出可視化平台",
        target: "make",
        belong: "制造总览",
        to: "output"
      },
      {
        id: 10,
        imgUrl: require("@/assets/images/output2.png"),
        info: "九宮格產出看板",
        target: "make",
        belong: "制造总览",
        to: "output2"
      },
      {
        id: 11,
        imgUrl: require("@/assets/images/makewar.png"),
        info: "製造戰情中心",
        target: "make",
        belong: "制造总览",
        to: "makewar"
      }
    ]
  ],
  [
    "yield",
    [
      // 良率总览
      {
        id: 12,
        imgUrl: require("@/assets/images/sap.png"),
        info: "SAP良率",
        target: "yield",
        belong: "良率总览",
        to: "sap"
      },
      {
        id: 13,
        imgUrl: require("@/assets/images/sap.png"),
        info: "SFC良率",
        target: "yield",
        belong: "良率总览",
        to: "sfc"
      },
      {
        id: 14,
        imgUrl: require("@/assets/images/tsfc.png"),
        info: "SFC总良率预览",
        target: "yield",
        belong: "良率总览",
        to: "tsfc"
      },
      {
        id: 15,
        imgUrl: require("@/assets/images/defect.png"),
        info: "Top 25 Defect Item",
        target: "yield",
        belong: "良率总览",
        to: "defect"
      }
    ]
  ]
])

// 通过函数来解决主题变化的时候显示不同的图片
export let changeCmaConfig = (theme = "dark") => {
  return new Map([
    [
      "device",
      [
        {
          id: 1,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/aa.png")
              : require("@/assets/images/_aa.png"),
          info: "AA設備總覽",
          target: "device",
          belong: "设备总览",
          to: "aa"
        },
        {
          id: 2,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/fol.png")
              : require("@/assets/images/_fol.png"),
          info: "FOL設備總覽",
          target: "device",
          belong: "设备总览",
          to: "fol"
        },
        // {
        //   id: 3,
        //   imgUrl: require("@/assets/images/eol.png"),
        //   info: "EOL設備總覽",
        //   target: "device",
        //   belong: "设备总览",
        //   to: "eol"
        // },
        {
          id: 4,
          isExternalLink: true,
          imgUrl: require("@/assets/images/spotcheck.jpg"),
          info: "AA PDI AI 檢測界面",
          target: "device",
          belong: "设备总览",
          to: "http://10.142.117.50:32001/standard/design/#/share/OS4L2ZWV"
        },
        {
          id: 5,
          isExternalLink: true,
          imgUrl: require("@/assets/images/device4.jpg"),
          info: "實時統計",
          target: "device",
          belong: "设备总览",
          to: "http://10.142.117.50:32001/share.html?token=8ZBXMVWR"
        },
        {
          id: 6,
          isExternalLink: true,
          imgUrl: require("@/assets/images/device5.png"),
          info: "歷史日統計",
          target: "device",
          belong: "设备总览",
          to: "http://10.142.117.50:32001/share.html?token=V3SKHL6X"
        },
        {
          id: 7,
          isExternalLink: true,
          imgUrl: require("@/assets/images/device6.png"),
          info: "歷史周統計",
          target: "device",
          belong: "设备总览",
          to: "http://10.142.117.50:32001/share.html?token=HYMY179K"
        },
        {
          id: 8,
          isExternalLink: true,
          imgUrl: require("@/assets/images/device7.png"),
          info: "歷史月統計",
          target: "device",
          belong: "设备总览",
          to: "http://10.142.117.50:32001/share.html?token=TLYKVQQY"
        }
      ]
    ],
    [
      "make",
      [
        {
          id: 9,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/output.png")
              : require("@/assets/images/_output.png"),
          info: "產出可視化平台",
          target: "make",
          belong: "制造总览",
          to: "output"
        },
        {
          id: 10,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/output2.png")
              : require("@/assets/images/_output2.png"),
          info: "九宮格產出看板",
          target: "make",
          belong: "制造总览",
          to: "output2"
        },
        {
          id: 11,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/makewar.png")
              : require("@/assets/images/_makewar.png"),
          info: "製造戰情中心",
          target: "make",
          belong: "制造总览",
          to: "makewar"
        }
      ]
    ],
    [
      "yield",
      [
        // 良率总览
        // {
        //   id: 12,
        //   imgUrl: require("@/assets/images/sap.png"),
        //   info: "SAP良率",
        //   target: "yield",
        //   belong: "良率总览",
        //   to: "sap"
        // },
        {
          id: 13,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/sfc.png")
              : require("@/assets/images/_sfc.png"),
          info: "SFC良率",
          target: "yield",
          belong: "良率总览",
          to: "sfc"
        },
        {
          id: 14,
          imgUrl:
            theme == "dark"
              ? require("@/assets/images/tsfc.png")
              : require("@/assets/images/_tsfc.png"),
          info: "SFC总良率预览",
          target: "yield",
          belong: "良率总览",
          to: "tsfc"
        },
        {
          id: 15,
          imgUrl: require("@/assets/images/defect.png"),
          info: "Top 25 Defect Item",
          target: "yield",
          belong: "良率总览",
          to: "defect"
        }
      ]
    ]
  ])
}
