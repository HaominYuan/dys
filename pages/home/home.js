// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  disctap: function() {
    let data = {
      user: 'yhm',
      age: '18',
      sexy: '男'
    }

    data = JSON.stringify(data)
    wx.navigateTo({
      url: `../disc/disc?data=${data}`
    })
  }
})