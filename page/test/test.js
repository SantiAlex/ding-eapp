const chartDataNew = [
    { value: 63.4, city: 'New York', date: '2018-10-01' },
    { value: 62.7, city: 'Alaska', date: '2018-10-01' },
    { value: 72.2, city: 'Austin', date: '2018-10-01' },
    { value: 58, city: 'New York', date: '2018-10-02' },
    { value: 59.9, city: 'Alaska', date: '2018-10-02' },
    { value: 67.7, city: 'Austin', date: '2018-10-02' },
    { value: 53.3, city: 'New York', date: '2018-10-03' },
    { value: 59.1, city: 'Alaska', date: '2018-10-03' },
    { value: 69.4, city: 'Austin', date: '2018-10-03' },
    { value: 55.7, city: 'New York', date: '2018-10-04' },
    { value: 58.8, city: 'Alaska', date: '2018-10-04' },
    { value: 68, city: 'Austin', date: '2018-10-04' },
    { value: 64.2, city: 'New York', date: '2018-10-05' },
    { value: 58.7, city: 'Alaska', date: '2018-10-05' },
    { value: 72.4, city: 'Austin', date: '2018-10-05' },
    { value: 58.8, city: 'New York', date: '2018-10-06' },
    { value: 57, city: 'Alaska', date: '2018-10-06' },
    { value: 77, city: 'Austin', date: '2018-10-06' },
    { value: 57.9, city: 'New York', date: '2018-10-07' },
    { value: 56.7, city: 'Alaska', date: '2018-10-07' },
    { value: 82.3, city: 'Austin', date: '2018-10-07' },
    { value: 61.8, city: 'New York', date: '2018-10-08' },
    { value: 56.8, city: 'Alaska', date: '2018-10-08' },
    { value: 78.9, city: 'Austin', date: '2018-10-08' },
    { value: 69.3, city: 'New York', date: '2018-10-09' },
    { value: 56.7, city: 'Alaska', date: '2018-10-09' },
    { value: 68.8, city: 'Austin', date: '2018-10-09' },
    { value: 71.2, city: 'New York', date: '2018-10-10' },
    { value: 60.1, city: 'Alaska', date: '2018-10-10' },
    { value: 68.7, city: 'Austin', date: '2018-10-10' },
    { value: 68.7, city: 'New York', date: '2018-10-11' },
    { value: 61.1, city: 'Alaska', date: '2018-10-11' },
    { value: 70.3, city: 'Austin', date: '2018-10-11' },
    { value: 61.8, city: 'New York', date: '2018-10-12' },
    { value: 61.5, city: 'Alaska', date: '2018-10-12' },
    { value: 75.3, city: 'Austin', date: '2018-10-12' },
    { value: 63, city: 'New York', date: '2018-10-13' },
    { value: 64.3, city: 'Alaska', date: '2018-10-13' },
    { value: 76.6, city: 'Austin', date: '2018-10-13' },
    { value: 66.9, city: 'New York', date: '2018-10-14' },
    { value: 67.1, city: 'Alaska', date: '2018-10-14' },
    { value: 66.6, city: 'Austin', date: '2018-10-14' },
    { value: 61.7, city: 'New York', date: '2018-10-15' },
    { value: 64.6, city: 'Alaska', date: '2018-10-15' },
    { value: 68, city: 'Austin', date: '2018-10-15' },
    { value: 61.8, city: 'New York', date: '2018-10-16' },
    { value: 61.6, city: 'Alaska', date: '2018-10-16' },
    { value: 70.6, city: 'Austin', date: '2018-10-16' },
    { value: 62.8, city: 'New York', date: '2018-10-17' },
    { value: 61.1, city: 'Alaska', date: '2018-10-17' },
    { value: 71.1, city: 'Austin', date: '2018-10-17' },
    { value: 60.8, city: 'New York', date: '2018-10-18' },
    { value: 59.2, city: 'Alaska', date: '2018-10-18' },
    { value: 70, city: 'Austin', date: '2018-10-18' },
    { value: 62.1, city: 'New York', date: '2018-10-19' },
    { value: 58.9, city: 'Alaska', date: '2018-10-19' },
    { value: 61.6, city: 'Austin', date: '2018-10-19' },
    { value: 65.1, city: 'New York', date: '2018-10-20' },
    { value: 57.2, city: 'Alaska', date: '2018-10-20' },
    { value: 57.4, city: 'Austin', date: '2018-10-20' },
    { value: 55.6, city: 'New York', date: '2018-10-21' },
    { value: 56.4, city: 'Alaska', date: '2018-10-21' },
    { value: 64.3, city: 'Austin', date: '2018-10-21' },
    { value: 54.4, city: 'New York', date: '2018-10-22' },
    { value: 60.7, city: 'Alaska', date: '2018-10-22' },
    { value: 72.4, city: 'Austin', date: '2018-10-22' },
    { value: 54.4, city: 'New York', date: '2018-10-23' },
    { value: 65.1, city: 'Alaska', date: '2018-10-23' },
    { value: 72.4, city: 'Austin', date: '2018-10-23' },
    { value: 54.8, city: 'New York', date: '2018-10-24' },
    { value: 60.9, city: 'Alaska', date: '2018-10-24' },
    { value: 72.5, city: 'Austin', date: '2018-10-24' },
    { value: 57.9, city: 'New York', date: '2018-10-25' },
    { value: 56.1, city: 'Alaska', date: '2018-10-25' },
    { value: 72.7, city: 'Austin', date: '2018-10-25' },
    { value: 54.6, city: 'New York', date: '2018-10-26' },
    { value: 54.6, city: 'Alaska', date: '2018-10-26' },
    { value: 73.4, city: 'Austin', date: '2018-10-26' },
    { value: 54.4, city: 'New York', date: '2018-10-27' },
    { value: 56.1, city: 'Alaska', date: '2018-10-27' },
    { value: 70.7, city: 'Austin', date: '2018-10-27' },
    { value: 42.5, city: 'New York', date: '2018-10-28' },
    { value: 58.1, city: 'Alaska', date: '2018-10-28' },
    { value: 56.8, city: 'Austin', date: '2018-10-28' },
    { value: 40.9, city: 'New York', date: '2018-10-29' },
    { value: 57.5, city: 'Alaska', date: '2018-10-29' },
    { value: 51, city: 'Austin', date: '2018-10-29' },
    { value: 38.6, city: 'New York', date: '2018-10-30' },
    { value: 57.7, city: 'Alaska', date: '2018-10-30' },
    { value: 54.9, city: 'Austin', date: '2018-10-30' },
    { value: 44.2, city: 'New York', date: '2018-10-31' },
    { value: 55.1, city: 'Alaska', date: '2018-10-31' },
    { value: 58.8, city: 'Austin', date: '2018-10-31' },
    { value: 49.6, city: 'New York', date: '2018-11-01' },
    { value: 57.9, city: 'Alaska', date: '2018-11-01' },
    { value: 62.6, city: 'Austin', date: '2018-11-01' },
    { value: 47.2, city: 'New York', date: '2018-11-02' },
    { value: 64.6, city: 'Alaska', date: '2018-11-02' },
    { value: 71, city: 'Austin', date: '2018-11-02' }
]

Page({
  data: {
    form:{},
     width:200,
       height:200,
       chart: null,
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
    footerImg: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
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
      items: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表双行列表双行列表双行列表双行列表双行列表双行列表双行列表双行列表双行列表双行列表双行列表',
        brief: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
  },
  onCardClick: function(ev) {
    my.showToast({
      content: ev.info,
    });
  },
  onLoad() {

    dd.httpRequest({
      url: 'http://192.168.0.100/api/work/id/5b61357f1d24121bafec7827',
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
  },
  pickWork(){
    dd.navigateTo({
      url: '/page/work/work?id=5b61357f1d24121bafec7827'
    })
  },

  pickPerson(){

    dd.complexChoose({
      title:"测试标题",            //标题
      multiple:false,            //是否多选
      limitTips:"超出了",          //超过限定人数返回提示
      maxUsers:1,            //最大可选人数
      // pickedUsers:[],            //已选用户
      // pickedDepartments:[],          //已选部门
      // disabledUsers:[],            //不可选用户
      // disabledDepartments:[],        //不可选部门
      // requiredUsers:[],            //必选用户（不可取消选中状态）
      // requiredDepartments:[],        //必选部门（不可取消选中状态）
      // appId:158,              //微应用的Id
      // permissionType:"xxx",          //可添加权限校验，选人权限，目前只有GLOBAL这个参数
      responseUserOnly:false,        //返回人，或者返回人和部门
      startWithDepartmentId:0 ,   // 0表示从企业最上层开始
      success:function(res){
          /**
          {
              selectedCount:1,                              //选择人数
              users:[{"name":"","avatar":"","userId":""}]，//返回选人的列表，列表中的对象包含name（用户名），avatar（用户头像），userId（用户工号）三个字段
              departments:[{"id":,"name":"","number":}]//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
          }
          */    
        },
        fail:function(err){
        }
    })

  },
   


    onDraw(ddChart){
        //dd-charts组件内部会回调此方法，返回图表实例ddChart
        //提示：可以把异步获取数据及渲染图表逻辑放onDraw回调里面
        ddChart.clear()
        ddChart.source(chartDataNew, {
            date: {
                range: [ 0, 1 ],
                type: 'timeCat',
                mask: 'MM-DD'
            },
            value: {
                max: 300,
                tickCount: 4
            }
        })
        ddChart.tooltip({
            showCrosshairs: true,
            custom: true, // 自定义 tooltip 内容框
            onChange(obj) {
                const legend = chart.get('legendController').legends.top[0];
                const tooltipItems = obj.items;
                const legendItems = legend.items;
                const map = {};
                legendItems.map(item => {
                    map[item.name] = Object.assign({}, item);
                });
                tooltipItems.map(item => {
                    const { name, value } = item;
                    if (map[name]) {
                    map[name].value = value;
                    }
                });
                legend.setItems(Object.values(map));
            },
            onHide() {
                const legend = chart.get('legendController').legends.top[0];
                legend.setItems(chart.getLegendItems().country);
            }
        });
        ddChart.axis('date', {
            label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
                textCfg.textAlign = 'left';
            }
            if (index === total - 1) {
                textCfg.textAlign = 'right';
            }
            return textCfg;
            }
        });
        ddChart.area().position('date*value').color('city').adjust('stack');
        ddChart.line().position('date*value').color('city').adjust('stack');
        ddChart.render()
    },

  touch(e){
    console.log(e)
  },
  move(e){
    console.log(e)
  }

});
