App({
  globalData: {
    userInfo: null,
    env: 'dev'
  },

  onLaunch() {
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  }
});
