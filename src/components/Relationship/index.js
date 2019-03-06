import React, { PureComponent } from 'react';
import {data,links,categories} from '../../assets/mock/RelationshipOptions'
import {withRouter } from 'react-router';
import style from './style.css'
const echarts = require('echarts');

let chartOption = {
    "title": [
        {
            "text": "\u6c7d\u8f66\u7ade\u4e89\u5173\u7cfb\u56fe",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18,
                color: "#FFF"},
            "subtextStyle": {
                "fontSize": 12}}],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"},
            "restore": {
                "show": true,
                "title": "restore"},
            "dataView": {
                "show": true,
                "title": "data view"}}},
    "series_id": 811278,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line" },
        "textStyle": {
            "fontSize": 14},
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0},
    "series": [
        {
            "type": "graph",
            "layout": "force",
            "circular": {
                "rotateLabel": false},
            "force": {
                "repulsion": 900,
                "edgeLength": 50,
                "gravity": 0.1 },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "textStyle": {
                        "fontSize": 12}},
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12}}},
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0.05,
                    "type": "solid",
                    "color": "#aaa"}},
            "roam": true,
            "focusNodeAdjacency": true,
            "data": [],
            "categories": [],
            "edgeSymbol": [
                null,
                null],
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    borderWidth: 8,
                },
            },
            "links":[],
        },
    ],
    "legend": [
        {
            "data":[],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12,
                "color": "#fff",
            },
        },
    ],
    "animation": true,
    "color":  ['#18ddd4', '#4185f7', '#62abe1', '#f1e871',  '#eeeeee'],
};

class Relationship extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        setTimeout(() => {
            if (!this.mychart) this.mychart = echarts.init(document.getElementById('relationshipContainer'));
            chartOption.series[0].data = data;
            chartOption.series[0].categories = categories;
            chartOption.series[0].links = links;
            chartOption.legend[0].data = categories;
            this.mychart.setOption(chartOption);
            this.mychart.on('click', (option) => {
                let node = option.data;
                if (node.category === '传祺') {
                    // 页面跳转
                    this.props.history.push('/performance/CompetitiveAnalysis');
                }
            });
            this.mychart.setOption(chartOption);
            window.onresize =  () => {
                this.mychart.resize();
            }
        },200);
    }

    render () {
        return (<div className={style.relationShipWrap} id="relationshipContainer" />)
    }
}

Relationship = withRouter(Relationship);
export default  Relationship;