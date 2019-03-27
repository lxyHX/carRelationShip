import React, { PureComponent } from 'react';
import styles from "../CompetitiveAnalysis/index.css";
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import assign from 'lodash/assign'
import bgImage from "../../assets/images/worldCloud/bg2.png";
import { Divider} from 'antd';

export default class WorldCloud extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        if (this.props.showWordCloud) {
            this.imageMask = new Image();
            this.imageMask.crossOrigin = '';
            this.imageMask.src = bgImage;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data) {
            // 重新渲染
            if (!this.chart) {
                this.painting();
            } else {
                this.update();
            }
        }
    }

    painting () {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            drawShape: function drawShape(cfg, container) {
                const attrs = WorldCloud._getTextAttrs(cfg);
                return container.addShape('text', {
                    attrs: assign(attrs, {
                        x: cfg.x,
                        y: cfg.y,
                    }),
                });
            },
        });

        const dv = this._getDV();
        let chart = this.chart = new G2.Chart({
            container: 'world_cloud_container',
            width: this.props.width, // 宽高设置最好根据 imageMask 做调整
            height: this.props.height,
            padding: 0,
        });

        chart.source(dv, {
            x: {
                nice: true,
            },
            y: {
                nice: true,
            },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(false);
        chart.coord().reflect();
        chart.point().position('x*y').color('text').shape('cloud');
        chart.render();

    }

    _getDV () {
        let dv = new DataSet.View().source(this.props.data);
        let range = dv.range('value');
        let min = range[0];
        let max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            imageMask: this.imageMask,
            font: 'Verdana',
            size: [this.props.width, this.props.height], // 宽高设置最好根据 imageMask 做调整
            padding: 0,
            timeInterval: 5000, // max execute time
            rotate: 0,
            fontSize: function fontSize(d) {
                if (max > min) {
                    return (d.value - min) / (max - min) * (32 - 8) + 14 ;
                } else {
                    return 20
                }
            },
        });
        return dv
    }

    update () {
        const newDv = this._getDV();
        this.chart.changeData(newDv);
    }

    static _getTextAttrs(cfg) {
        return assign({}, cfg.style, {
            fillOpacity: cfg.opacity,
            fontSize: cfg.origin._origin.size,
            rotate: cfg.origin._origin.rotate,
            text: cfg.origin._origin.text,
            textAlign: 'center',
            fontFamily: cfg.origin._origin.font,
            fill: cfg.color,
            textBaseline: 'Middle',
        });
    }

    render() {
        return (<div style={{display: this.props.showWordCloud ? 'block': 'none'}} >
            <Divider><span className={styles["world-cloud"]}/>  评价内容 - {this.props.wordCloudTitle} </Divider>
            <div className={styles["world_cloud_wrap"]}>
                <div className={styles["world_cloud_container"]} style={{width:this.props.width + "px", height: this.props.height + "px"} } id="world_cloud_container"/>
            </div>

        </div>)
    }
}