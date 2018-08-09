App({
  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', dd.getSystemInfoSync());
    console.log('SDKVersion', dd.SDKVersion);
    // dd.navigateTo({
    //   url: '/page/test/test'
    // })
  },
  onShow() {
    console.log('App Show');
    // dd.navigateTo({
    //   url: '/page/test/test'
    // })
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
  },
});
