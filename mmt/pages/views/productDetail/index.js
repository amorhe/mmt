// pages/views/productDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:[
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3851361349,910789518&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1083374501,200197021&fm=26&gp=0.jpg'
    ],
    state:'none',
    modalFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.alertView = this.selectComponent("#alertView")
  },
  payBtn() {
    let that = this;
    setTimeout(function () {
      that.setData({
        state: 'block'
      })
    }, 100)
  },
  closeBtn() {
    let that = this;
    setTimeout(function () {
      that.setData({
        state: 'none'
      })
    }, 100)
  },
  // 按钮点击事件
  payBtn(){
    this.alertView.showAlertView();
  },

  // 取消事件
  cancelEvent(){
    this.alertView.hideAlertView()
  },
  // 确定事件
  confirmEvent(){
    this.alertView.hideAlertView()
    wx.navigateTo({
      url: '/pages/views/open/index',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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