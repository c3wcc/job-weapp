// pages/resume/ resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choSex:'boy',
    chooseGra:'school'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  goIndex(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  chooseSex(e){
    console.log(e.currentTarget.dataset.sex)
    if (e.currentTarget.dataset.sex =="gril"){
    this.setData({
      choSex: "gril"
    })
    }else{
      this.setData({
        choSex: "boy"
      })
    }
  },
  chooseGra(e) {
    console.log(e.currentTarget.dataset.gra)
    if (e.currentTarget.dataset.gra=='school'){
    this.setData({
      chooseGra: 'school'
    })
    }else{
      this.setData({
        chooseGra: 'graduate'
      })
    }
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