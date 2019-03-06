const echarts = require('echarts');
let getOption = () => ({
  tooltip: {},
  radar: {
    radius: 100,
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
        {
            'name': '外观造型',
            'max': 5
        }, {
            'name': '内饰造型',
            'max': 5
        }, {
            'name': '外观品质',
            'max': 5
        }, {
            'name': '内饰品质',
            'max': 5
        }, {
            'name': '动力性',
            'max': 5
        }, {
            'name': '驾驶操控性',
            'max': 5
        }, {
            'name': '便利性',
            'max': 5
        }, {
            'name': '安全性',
            'max': 5
        }, {
            'name': '使用经济性',
            'max': 5
        }, {
            'name': '舒适性',
            'max': 5
        }, {
            'name': '乘坐空间',
            'max': 5
        }, {
            'name': '储物空间',
            'max': 5
        }, {
            'name': '通过性',
            'max': 5
        }, {
            'name': '智能信息娱乐系统',
            'max': 5
        }, {
            'name': '新能源特性',
            'max': 5
        }
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    // areaStyle: {normal: {}},
    data : [
      {
        value : [
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1),
              ((Math.random()* 0.5 + 0.5) * 5).toFixed(1)
         ],
        name : '预算分配（Allocated Budget）'
      }
    ],
      label: {
          normal: {
              show: true,
              formatter:function(params) {
                  return params.value;
              }
          }
      },
      areaStyle: {
      normal: {
              opacity: 0.7,
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                  {
                      color: '#B8D3E4',
                      offset: 0
                  },
                  {
                      color: '#72ACD1',
                      offset: 1
                  }
              ])
          }
      }
  }]
});

export default getOption