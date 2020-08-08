// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  textTap: function () {
    console.log(this.data.text)
    let data = {
      user: 'yhm',
      age: '18',
      sexy: '男'
    }

    data = JSON.stringify(data)
    wx.navigateTo({
      url: `../text/text?data=${data}`
    })
  },

  onLoad: function (options) {
    const that = this
    wx.request({
      url: 'https://tstxxy.icu:3001/',
      data: {

      },
      header: {
      },
      success(res) {
        that.setData({
          text: res.data
        })
      },
      fail(error) {
        console.log(error)
      }
    })
  }
})