
const list = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    msg:'Nihao',
    ad:'/images/shi3.mp4'
  },
   
  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.route)
    console.log(getCurrentPages())
    wx.setStorageSync({    //同步  执行完成下面代码才能执行
      data: '123456',
      key: 'demo',
    })
    this.setData({
      list:list.data
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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