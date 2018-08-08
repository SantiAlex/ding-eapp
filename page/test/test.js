Page({
  data: {
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
        title: '双行列表',
        brief: '描述信息',
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
  onLoad() {},
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
});
