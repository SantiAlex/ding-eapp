Page({
  data: {
    user:''
  },
  onLoad(query) {
    this.setData({
      user:query.user
    })

  },
  click(){
    dd.navigateBack({delta:1})
  }
});
