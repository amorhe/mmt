// pages/views/dynamic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      '/images/bar3.jpg'
    ],
    imageList:[
      { name: '张三', avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=872222622,1085477049&fm=11&gp=0.jpg', time: '刚刚', text: '权威和各位还去个机会为全国', imageUrls: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=112393895,2893275462&fm=26&gp=0.jpg']},
      { name: '李四', avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1852984079,2679693130&fm=11&gp=0.jpg', time: '昨天', text: '五千金额和武器进口国和空间我切换国家温泉文化期望价格很委屈改回去温哥华更权威和感情维护价格回去我哥和我去干活国庆万恒机会千万个机会千万个好几千万个还去温哥华千万个IE要求无恶意哦我去以前我也驱蚊液u我去恶趣味护额业务区域几千万业务区域一起玩个月ui', imageUrls: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4185877719,2281675697&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3417572166,404987400&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1702859796,1715712793&fm=200&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071235688,783602607&fm=26&gp=0.jpg'], discuss: [{ name: '王五', content: '个未完全' }, { name: '吴六', content: '全委会' }] }
    ],
    row: 4,
    str:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 打开行
  openRow(){
    this.setData({
      row:9999
    })
  },
  closeRow(){
    this.setData({
      row: 4
    })
  },
  // 评论
  discussClick(){
    this.setData({
      str:'您还未下载苗木通APP,需下载安装后才能进行评论！'
    })
    this.alertView.showAlertView();
  },
  // 点赞
  dianzan(){
    this.setData({
      str: '您还未下载苗木通APP,需下载安装后才能进行点赞！'
    })
    this.alertView.showAlertView();
  },
  // 取消事件
  cancelEvent() {
    this.alertView.hideAlertView();
  },
  // 确定事件
  confirmEvent() {
    this.alertView.hideAlertView();
    wx.navigateTo({
      url: '/pages/views/open/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.alertView = this.selectComponent("#alertView");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // let that = this;
    // for (var i = 0; i < this.data.imageList.length; i++) {
    //   var query = wx.createSelectorQuery();
    //   query.select('.dynamic_text').boundingClientRect();
    //   query.exec((res) => {
    //     var box_height = res[0].height;
    //     that.setData({
    //       row: Math.ceil(box_height / 42)
    //     })
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})