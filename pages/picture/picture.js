// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[1,2,3,4,5],
     item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查询距离
    const query = wx.createSelectorQuery()
    query.select('#the-id').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res){
      console.log(res)
      res[0].top       // #the-id节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     console.log(wx.getSystemInfoSync())
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      wx.getUserInfo({
        complete: (res) => {
          console.log(res)
        },
      })
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