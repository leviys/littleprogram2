// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     cartList:[
       {
         id:0,
         imgsrc:'/images/pc1.jpg',
         num:1,
         des:'士力架撒打算安段',
         price:'285',
         chcked:false,
         isShow:false
       },
       {
        id:1,
        imgsrc:'/images/pc2.jpg',
        num:1,
        des:'电子琴阿松大阿松大撒大苏打',
        price:'100',
        chcked:false,
        isShow:false
      },
      {
        id:2,
        imgsrc:'/images/pc3.jpg',
        num:1,
        des:'水果俩阿松大阿松大阿松大',
        price:'145',
        chcked:false,
        isShow:false
      }
     ],
     allSelct:false,
     totalpric:0,
     selectNum:0,
     startx:0,
     endx:0
  },
  //单选
  changeSelcet(event){
    var index = event.target.dataset.index
    var list =this.data.cartList
    list[index].chcked =!list[index].chcked
    this.setData({
      cartList:list
    })
    //设置 allSelct 的状态
    var status = list.every(item=>{
      return item.chcked ===true
    })
    this.setData({
      allSelct:status
    })
    this.calcTotal()

  },
  //全选
  selectAll(){
    var that = this
    that.setData({
      allSelct:!that.data.allSelct
    })
    //设置数组中选中状态跟allselect一致
    var list = that.data.cartList
      list.forEach(item=>{
        item.chcked=that.data.allSelct
      })
      that.setData({
        cartList:list
      })
      this.calcTotal()

  },
  //计算总价
  calcTotal(){
     var list =this.data.cartList
     var alltota=list.reduce((totle,item)=>{
        if(item.chcked){
       return totle += item.price*item.num
        }else{
          return totle
        }
     },0)

      //计算选中数量
      var num=list.reduce((totle,item)=>{
        if(item.chcked){
       return totle += item.num
        }else{
          return totle
        }
     },0)

     this.setData({
      totalpric :alltota,
      selectNum:num
    })
  },

   //删除功能
   tstart(event){
  var that = this
   var  startx = event.touches[0].clientX
     console.log('tstart',startx)
    that.setData({
      startx:startx
    })

   },
   tmove(event){
    var that = this
    var endx = event.touches[0].clientX
     console.log('tmove',endx)
    that.setData({
      endx:endx
    })
   },
   tend(event){
    // console.log('tend')
     var that =this
    //传过来的索引值
     var  index = event.target.dataset.index
     var offsetX = that.data.startx - that.data.endx
      console.log(offsetX)
    //  左滑
     if(offsetX>20){
      console.log(1)
       var list = that.data.cartList
       list[index].isShow = true
       that.setData({
        cartList:list
       })
     }
     else if(offsetX<-20){
       console.log(2)
      var list = that.data.cartList
      list[index].isShow = false
      that.setData({
       cartList:list
      })
     }
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