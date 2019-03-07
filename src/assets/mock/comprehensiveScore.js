const echarts = require('echarts');
let getOption = () => ({
    title: {
        text: '基础雷达图',
        left: 'center',
        bottom: 0,
        textStyle: {
            fontSize: 13,
            color: "#666"
        }
    },
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
    indicator: [],
  },
  series: [{
    type: 'radar',
    data : [
        {
          lineStyle: {color: "rgb(63, 167, 220)"},
          label: {normal: {color:"rgb(63, 167, 220)"}},
          value : [
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
            ],
          name : 'A',
          areaStyle: {
              normal: {
                  opacity: 0.6,
                  color: "rgba(63, 167, 220,0.5)"
              }
          }
        },
        {
            lineStyle: {color: "rgb(112, 145, 196)"},
            label: {normal: {color:"rgb(112, 145, 196)"}},
            value : [
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
                parseFloat(((Math.random()* 0.5 + 0.5) * 5).toFixed(1)),
            ],
            name : 'B'
        }

    ],
      label: {
          normal: {
              show: true,
              formatter:function(params) {
                  return params.value;
              }
          }
      }
  }]
});

export default getOption