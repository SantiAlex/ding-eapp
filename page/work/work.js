Page({
  data: {
    title: "Dingtalk",
    work_id:'',
    time:'',
    flow:[],
    received: false,
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

    ],
    activeIndex: 1,
    steps: [{
      title: '步骤1',
      description: '这是步骤1',
    }, {
      title: '步骤2',
      description: '这是步骤2',
    }, {
      title: '步骤3',
      description: '这是步骤3',
    }],
  },
  onLoad(query) {
    // 页面加载
    console.log(query);
    let me = this
    if(query.id){
      dd.httpRequest({
        url: 'http://192.168.0.100/api/work/id/'+query.id,
        method: 'GET',
        // data: {
        //   from: '钉钉',
        //   production: 'Dingtalk',
        // },
        dataType: 'json',
        success: function(res) {
          // dd.alert({content: JSON.stringify(res.data.data)});
          let info = res.data.data
          let flow = info.flow
          let testData = []
          for (var i = 0; i < flow.length; i++) {
              let step = flow[i]
              testData.push({
                  
                  'title': step.action,
                  'description':step.time
              })
          }
          // dd.alert({content: JSON.stringify(testData)});
          me.setData({
            items: info.form,
            title: info.title,
            time:info.time,
            work_id:info.work_id,
            flow:testData,
            activeIndex: testData.length,
          })
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
  },

  receive(){
     this.setData({
      received: true
    })
  },
   pickPerson(){

    dd.complexChoose({
      title:"选择要转送的同事",            //标题
      multiple:false,            //是否多选
      responseUserOnly:true,        //返回人，或者返回人和部门
      startWithDepartmentId:0 ,   // 0表示从企业最上层开始
      success:function(res){
          /**
          {
              
              selectedCount:1,                              //选择人数
              users:[{"name":"","avatar":"","userId":""}]，//返回选人的列表，列表中的对象包含name（用户名），avatar（用户头像），userId（用户工号）三个字段
              departments:[{"id":,"name":"","number":}]//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
          }
          */    
          dd.alert({content: JSON.stringify(res)});
          dd.navigateTo({
            url: '/page/transfer/transfer?user='+res.users[0].name
          })
        },
        fail:function(err){
        }
    })

  },
})