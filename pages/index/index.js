Page({
  data: {
    systemInfo: {},
    networkType: ''
  },

  onLoad: function () {
    this.getSystemInfo()
    this.getNetworkType()
  },

  getSystemInfo() {
    let systemInfo = wx.getSystemInfoSync()
    this.setData({ systemInfo })
  },

  getNetworkType() {
    wx.getNetworkType({
      success: (res) => {
        console.log(res)
        this.setData({
          networkType: res.networkType
        })
      }
    })
  }
})
