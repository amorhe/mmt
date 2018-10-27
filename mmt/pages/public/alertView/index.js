// pages/public/alertView/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {
    // 弹框标题
    title:{
      type:String,
      value:'标题'
    },
    // 弹框内容
    content:{
      type:String,
      value:'弹框详细内容'
    },
    // 弹框取消按钮文字
    canceText:{
      type:String,
      value:'取消'
    },
    // 弹框确认按钮文字
    confirmText:{
      type:String,
      value:'确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 公共方法
     */
    // 隐藏弹框
    hideAlertView(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 显示弹框
    showAlertView(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /**
     * 私有方法
     */
    _cancelEvent(){
      this.triggerEvent('cancelEvent')
    },
    _confirmEvent(){
      this.triggerEvent('confirmEvent')
    }
  }
})
