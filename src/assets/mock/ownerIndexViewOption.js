import {level_1_nodes,nodeMap, links} from './indexCommentsData'
const echarts = require('echarts');

const categories = [
    {
    'name': '外观造型'
}, {
    'name': '内饰造型'
}, {
    'name': '外观品质'
}, {
    'name': '内饰品质'
}, {
    'name': '动力性'
}, {
    'name': '驾驶操控性'
}, {
    'name': '便利性'
}, {
    'name': '安全性'
}, {
    'name': '使用经济性'
}, {
    'name': '舒适性'
}, {
    'name': '乘坐空间'
}, {
    'name': '储物空间'
}, {
    'name': '通过性'
}, {
    'name': '智能信息娱乐系统'
}, {
    'name': '新能源特性'
}, {
    'name': '其他'
}];
let count = [];

for (let _i = 0; _i < 1000; _i ++) {
    count.push(_i)
}

const ownerIndexViewOption  = {
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    // color: ["#d48265",'#bda29a','#c4ccd3','#91c7ae','#26f0e5','#e4b694','#ed9de8'],
    title:{
        show: false,
        text: "",
        top: 10,
        left: 10,
    },
    tooltip: {},
    legend: [{
        formatter: function (name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },

        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['外观造型', '内饰造型', '外观品质', '内饰品质', '动力性', '驾驶操控性', '便利性', '安全性', '使用经济性', '舒适性', '乘坐空间', '储物空间', '通过性', '智能信息娱乐系统', '新能源特性',  '其他']
    }],
    series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        force: {
            repulsion: 100
        },
        data: level_1_nodes,
        edges: links,
        categories: categories,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};
console.log(level_1_nodes);
export {ownerIndexViewOption,level_1_nodes,nodeMap, links}