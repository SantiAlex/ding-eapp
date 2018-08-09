Page({
  data: {
    title: "Dingtalk",
    items:[
      {
        key:'1',
        val:'1'
      },{
        key:'2',
        val:'2'
      },{
        key:'3',
        val:'3'
      },{
        key:'4',
        val:'4'
      },{
        key:'5',
        val:'5'
      },{
        key:'6',
        val:'6'
      },{
        key:'7',
        val:'7'
      },{
        key:'8',
        val:'8'
      },

    ]
  },
  onLoad(query) {
    // 页面加载
    console.log(query);
    if(query.id){
      dd.httpRequest({
        url: 'http://192.168.0.100/api/work/'+query.id,
        method: 'GET',
        // data: {
        //   from: '钉钉',
        //   production: 'Dingtalk',
        // },
        dataType: 'json',
        success: function(res) {
          dd.alert({content: JSON.stringify(res.data.data)});
        },
        fail: function(res) {
          dd.alert({content: 'fail'});
        },
        complete: function(res) {
          dd.hideLoading();
          dd.alert({content: 'complete'});
        }
      });
    }
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
   // 返回自定义分享信息
  },
  viewTap() {
    // 事件处理
    this.setData({
      text: 'Set data for update.'
    })
  },
  go() {
    // 带参数的跳转，从 page/index 的 onLoad 函数的 query 中读取 xx
    dd.navigateTo('/page/index?xx=1')
  },
  customData: {
    hi: 'Dingtalk'
  }
})