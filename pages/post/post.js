Page({
    data: {
        images: [],
        display: "inline-block"
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
    }
})