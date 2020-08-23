Page({
    data: {
        images: ["./1.jpg"],
        display: "inline-block"
    },

    add: function (e) {
        let that = this
        wx.chooseImage({
            count: 1,
            success: function (res) {
                let images = that.data.images.concat(res.tempFilePaths)
                console.log(images)
                that.setData({
                    images
                })
                console.log(that.data)
            }
        })
    },
    post: function (e) {
        if (this.data.display === "none") {
            this.setData({
                display: "inline-block"
            })
        } else {
            this.setData({
                display: "none"
            })
        }
    }
})