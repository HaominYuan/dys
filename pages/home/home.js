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
      url: `../disc/disc?data=${data}`
    })
  },

  onLoad: function (options) {
    const that = this
    wx.request({
      url: 'http://42.194.215.137:3000/',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.setData({
          text: res.data
        })
      }
    })
  }
})