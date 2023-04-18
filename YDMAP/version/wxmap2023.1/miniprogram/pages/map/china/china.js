Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataPoint: [{"name":"南海诸岛","coord":[130,22],"value":0},{"name":"西藏","coord":[89.132212,32.110361],"value":0}],
    dataList: [
      { name: '南海诸岛', value: 0 },
      { name: '北京', value: 54 },
      { name: '天津', value: 13 },
      { name: '上海', value: 40 },
      { name: '重庆', value: 75 },
      { name: '河北', value: 13 },
      { name: '河南', value: 83 },
      { name: '云南', value: 11 },
      { name: '辽宁', value: 19 },
      { name: '黑龙江', value: 15 },
      { name: '湖南', value: 69 },
      { name: '安徽', value: 60 },
      { name: '山东', value: 39 },
      { name: '新疆', value: 2 },
      { name: '江苏', value: 31 },
      { name: '浙江', value: 104 },
      { name: '江西', value: 36 },
      { name: '湖北', value: 1052 },
      { name: '广西', value: 33 },
      { name: '甘肃', value: 7 },
      { name: '山西', value: 9 },
      { name: '内蒙古', value: 7 },
      { name: '陕西', value: 22 },
      { name: '吉林', value: 4 },
      { name: '福建', value: 18 },
      { name: '贵州', value: 5 },
      { name: '广东', value: 98 },
      { name: '青海', value: 1 },
      { name: '西藏', value: 0 },
      { name: '四川', value: 44 },
      { name: '宁夏', value: 4 },
      { name: '海南', value: 22 },
      { name: '台湾', value: 3 },
      { name: '香港', value: 5 },
      { name: '澳门', value: 5 }
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