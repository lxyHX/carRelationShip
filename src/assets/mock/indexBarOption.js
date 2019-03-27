import seriesColor from '../../components/common/seriesColor'
let option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    seriesLabel: true,
    barWidth: 12,
    xWidth: 55,
    color: seriesColor,
    grid: {
        top: 20,
        bottom: 10,
        left: '3%',
        right: '4%',
        containLabel: true
    },
    yAxis :  [{
        scale:  false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:  false,
            textStyle: {
                color: '#687284'
            }
        },
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#F1F3F5',
                type: 'solid'
            },
        },
    }],
};

export default option
