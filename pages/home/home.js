// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onLoad: function (options) {
    const that = this
    wx.request({
      url: 'https://tstxxy.icu:3001/text',
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

  post: function () {
    console.log('Post')
    wx.navigateTo({
      url: `../post/post`,
    })
  }
  
})