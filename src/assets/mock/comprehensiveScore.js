import seriesColor from '../../components/common/seriesColor'
let getOption = () => ({
    title: {
        text: '基础雷达图',
        left: 'center',
        top: 0,
        textStyle: {
            fontSize: 15,
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
        name: "",
    type: 'radar',
    data : [
        {
          lineStyle: {color: seriesColor[0]},
          label: {normal: {color:"rgb(63, 167, 220)"}},
            itemStyle : {
                borderColor :  seriesColor[0],
            },
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
                  color: "rgba(255, 0, 0,0.5)"
              }
          }
        },
        {
            lineStyle: {color: seriesColor[1]},
            label: {normal: {color:"rgb(112, 145, 196)"}},
            itemStyle : {
                borderColor :  seriesColor[1],
            },
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