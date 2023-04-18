Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataPoint: [],
    dataList: [
      { name: '海淀区', value: 54 },
      { name: '东城区', value: 13 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取自定义地图组件的实例，如果页面有点击函数或者互联网请求，即可使用 this.mapComponent调用自定义echarts地图组件中定义的出事化函数（this.mapComponent.getOneOption()）
    // this.mapComponent = this.selectComponent('#mapComponent');
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