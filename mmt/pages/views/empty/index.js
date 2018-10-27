//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../../images/banner1.jpg',
      '../../../images/banner2.jpg',
      '../../../images/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    menuList: [
      { url: '../../../images/menu1.png', title: '公司简介' },
      { url: '../../../images/menu2.png', title: '产品展示' },
      { url: '../../../images/menu3.png', title: '最近动态' },
      { url: '../../../images/menu4.png', title: '联系我们' }
    ],
    companyImg: [
      '../../../images/banner1.jpg',
      '../../../images/banner2.jpg',
      '../../../images/banner3.jpg',
      '../../../images/banner1.jpg'
    ],
    productList: [
      { src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3002585019,3876149690&fm=26&gp=0.jpg', name: '香樟' },
      { src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1595331429,1771842796&fm=26&gp=0.jpg', name: '桂花' },
      { src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2828743325,4289230488&fm=200&gp=0.jpg', name: '茶苗' },
      { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=38621358,574682154&fm=26&gp=0.jpg', name: '梧桐' }
    ],
    dynamicArr: [
      {
        year: '2018年', content: [
          { time: '今天', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1956998421,1469803247&fm=26&gp=0.jpg', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购。' },
          { sort: '01', time: '10月', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1956998421,1469803247&fm=26&gp=0.jpg', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购。' },
          { sort: '25', time: '9月', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购,国庆大活动，滴血大甩卖......' },
          { text: '金九银十很多果苗已经涨价啦，各位老板。' },
          { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1956998421,1469803247&fm=26&gp=0.jpg', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购,国庆大活动，滴血大甩卖......' }
        ]
      },
      {
        year: '2017年', content: [
          { time: '今天', url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=300325754,2616487868&fm=26&gp=0.jpg', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购。' },
          { sort: '11', time: '10月', url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=300325754,2616487868&fm=26&gp=0.jpg', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购。' },
          { sort: '15', time: '9月', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购,国庆大活动，滴血大甩卖......' },
          { text: '金九银十很多果苗已经涨价啦，各位老板。' },
          { url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=300325754,2616487868&fm=26&gp=0.jpg', text: '金九银十很多果苗已经涨价啦，各位老板欢迎进店选购,国庆大活动，滴血大甩卖......' }
        ]
      }
    ],
    markers: [{
      iconPath: "/images/iconP.png",
      id: 0,
      latitude: 30.312094,
      longitude: 120.101129,
      width: 16,
      height: 35
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
