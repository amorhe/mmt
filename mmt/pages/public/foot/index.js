// pages/public/foot/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    openMy() {
      wx.navigateTo({
        url: '/pages/views/open/index'
      })
    }
  }
})
