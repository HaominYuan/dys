Page({
    data: {
        images: [],
        display: "inline-block",
        content: ""
    },

    add: function (e) {
        let that = this
        wx.chooseImage({
            count: 1,
            success: function (res) {
                let images = that.data.images.concat(res.tempFilePaths)
                that.setData({
                    images
                })
                that.setData({
                    display: "none"
                })
            }
        })
    },
    post: function (e) {
        let that = this
        console.log(that.data.images[0])
        wx.uploadFile({
          filePath: that.data.images[0],
          name: 'name',
          url: 'https://tstxxy.icu:3001/photo',
          formData: {
              content: that.data.content
          }
        })
    },

    textinput: function(e) {
        this.setData({
            content: e.detail.value
        })
    }
})