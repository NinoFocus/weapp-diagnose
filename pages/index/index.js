Page({
  data: {
    systemInfo: null,
    networkType: '',
    systemInfoLoaded: false,
    networkTypeLoaded: false
  },

  onShow() {
    this.getSystemInfo()
    this.getNetworkType()
  },

  getSystemInfo() {
    wx.getSystemInfo({
      success: (systemInfo) => {
        this.setData({
          systemInfo,
          systemInfoLoaded: true
       })
      }
    })
  },

  getNetworkType() {
    wx.getNetworkType({
      success: (res) => {
        this.setData({
          networkType: res.networkType,
          networkTypeLoaded: true
        })
      }
    })
  },

  handleCopy() {
    const { networkType, systemInfo } = this.data
    let data = []

    data.push(`网络: ${networkType}`)
    data.push(`客户端平台: ${systemInfo.platform}`)
    data.push(`操作系统版本: ${systemInfo.system}`)
    data.push(`微信版本号: ${systemInfo.version}`)
    data.push(`客户端基础库版本: ${systemInfo.SDKVersion}`)
    data.push(`手机品牌: ${systemInfo.brand}`)
    data.push(`手机型号: ${systemInfo.model}`)

    wx.setClipboardData({
      data: data.join('\n'),
      success: function() {
        wx.showToast({
          title: '复制成功'
        })
      }
    })
  }
})
