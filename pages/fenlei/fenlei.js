// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     currentid:1,
     cateList:[
       {
         name:'居家',
         id:1
       },
       {
        name:'餐厨',
        id:2
      },
      {
        name:'饮食',
        id:3
      },
      {
        name:'配件',
        id:4
      },
      {
        name:'服装',
        id:5
      },
      {
        name:'婴童',
        id:6
      },
      {
        name:'杂货',
        id:7
      },
      {
        name:'洗护',
        id:8
      },
      {
        name:'志趣',
        id:9
      }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //小程序是不能直接传参的
  // change(id){
  //    console.log(id)
  // },
    change(event){
      var that =  this
    //  console.log(event.target.dataset.id)
     that.setData({
      currentid:event.target.dataset.id
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