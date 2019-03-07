import React, { PureComponent } from 'react';
import styles from './index.css';
import { Cascader,Button,Divider,Radio,Drawer,Row, Col,Spin ,Menu,Tag} from 'antd';
import ownerCarsOption from '../../assets/mock/ownerCars'
import comptiterCars from '../../assets/mock/comptiterCars'
import {ownerIndexViewOption,treeData} from '../../assets/mock/ownerIndexTreeOption'
import indexBarOption from '../../assets/mock/indexBarOption'
import getComprehensiveScoreOption from '../../assets/mock/comprehensiveScore'
import {queryCommentCountByTagCode} from '../../service/car'
import uuid from 'uuid/v1'

const echarts = require('echarts');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const feedBackGood = ['优秀','很好','方便','好看','非常满意','实用'];
const feedBackBad = ['不方便','不好看','不满意','不实用'];

export default class CompetitiveAnalysis extends PureComponent {
    constructor(props) {
        super(props);
        // this.allNodes = level_1_nodes;
        // this.nodeLinks = links;
        this.state = {
            spinning: true,
            drawerVisible: false,
            drawerTitle: "",
            ownerCarOption: ownerCarsOption,
            competitorCarOption: comptiterCars,
            ownerIndexViewOption: ownerIndexViewOption,
            competitorIndexViewOption: ownerIndexViewOption,
            ownerCar: ['传祺 GS5','2019款','1.5T 自动 235T 舒适版 10.98万'],
            competitorCar: ['荣威', 'RX5', '2019款', '20T 两驱手动4G互联铂金版 11.98万'],
            analysisType: 'b',
            ownerComprehensiveScoreOption: getComprehensiveScoreOption(),
            competitorComprehensiveScoreOption: getComprehensiveScoreOption(),
            indexDatasFeedbacks: treeData,
            analysisOwnerCarName: '',
            analysisCmpCarName: '',
            selectLv1Index: [treeData.children[0]["id"]],
            selectLv2Index: '',
            renderId: '',
            renderName: '',
            subIndexRenderName: '',
            subIndexList: [],
            selectTagCode: 'G00',
            selectCarId : '1',
        };

        this.plusOrMinus = 'p';

        this.indexBarOptionsPositive = [];

        this.indexBarOptionsNegative  = [];

    }

    ownerCarChange = (value) => {
        this.setState({
            ownerCar: value,
        });
    };

    competitorCarChange = (value) => {
        this.setState({
            competitorCar: value,
        });
    };

   componentWillMount () {
       // 随机生成评论
       this.randomComment(this.state.indexDatasFeedbacks);
   }

    componentDidMount () {
        let _self = this;

        this.setState({
            selectLv1Index: [treeData.children[0]["id"]],
            renderId: treeData.children[0]["id"],
            renderName: treeData.children[0]["name"],
            subIndexList: treeData.children[0]["children"],
        });
        // 查询默认的车型的第一个一级指标的数据

        setTimeout(function (){
            _self.renderIndexChart();
            _self.renderComprehensiveRadar();
            _self.renderSelectedIndexBar();
            _self.setState({
                spinning: false,
            });
        },0);
    }

    async queryTagCommentCount () {
       await queryCommentCountByTagCode({
           carid: this.state.selectCarId,
           code: this.state.selectTagCode,
           positive: this.plusOrMinus === 'p',
       });
    }

    nodeClickHandler (params) {

        // 展开反馈内容
        if (!params.data || !params.data.leaf) return;
        this.setState({
            drawerTitle: params.data.parentName + "-" + params.data.name + " TOP 20",
        });
        this.showDrawer();
    }

    showDrawer () {
        this.setState({
            drawerVisible: true,
        });
    }

    // 指标分析图-自有车型
    renderOwnerIndexChart = () => {
        let option = this.state.ownerIndexViewOption;
        if (this.state.ownerCar.length > 0) {
            option.title.text = this.state.analysisOwnerCarName;
        }
        if (!this.myChart) {
            this.myChart = echarts.init(document.getElementById('index_feedback_owner_view'));
        }
        this.myChart.setOption(option);
        let _self = this;
        setTimeout(function (){
            window.onresize = function () {
                _self.chartResize();
            }
        },200);
        this.myChart.on('click', function (params) {
            _self.nodeClickHandler(params);
        });
    };

    // 指标分析图-竞品车型
    renderCompetitorIndexChart = () => {
        let option = this.state.competitorIndexViewOption;
        if (this.state.competitorCar.length > 0) {
            option.title.text = this.state.analysisCmpCarName;
        }
        if (!this.myChart) {
            this.myChart = echarts.init(document.getElementById('index_feedback_competitor_view'));
        }
        this.myChart.setOption(option);
    };

    renderOwnerComprehensiveRadar () {
        if (!this.ownerRadar) {
            this.ownerRadar = echarts.init(document.getElementById('comprehensiveRadarWrapOwner'));
        }
        this.ownerRadar.setOption(this.state.ownerComprehensiveScoreOption);
    }

    renderCompetitorComprehensiveRadar () {
        if (!this.competitorRadar) {
            this.competitorRadar = echarts.init(document.getElementById('comprehensiveRadarWrapCompetitor'));
        }
        this.competitorRadar.setOption(this.state.competitorComprehensiveScoreOption);
    }

    renderSelectedIndexBar () {
        if (!this.indexBarChart) {
            this.indexBarChart = echarts.init(document.getElementById("indexBarWrap"));
        }
        let negative = !this.plusOrMinus === 'p' ;
        let optionData = negative ? this.indexBarOptionsNegative : this.indexBarOptionsPositive;
        let xAxis = {
                type : 'category',
                data : optionData[this.state.renderId]["xAxisData"],
                axisLabel: {
                    show:  true,
                    textStyle: {
                        color: '#666',
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#f1f1f1',
                        type: 'solid',
                    },
                },
                axisTick: {
                    alignWithLabel: true,
                },
        };
        let series = [
            {
                name: this.state.analysisOwnerCarName,
                type:'bar',
                data: optionData[this.state.renderId]["ownerData"],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            textAlign: 'left',
                            fontSize: 11,
                        },
                    },
                },
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: 4,
                    },
                },
            },
            {
                name: this.state.analysisCmpCarName,
                type:'bar',
                data: optionData[this.state.renderId]["competitorData"],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            textAlign: 'left',
                            fontSize: 11,
                        },
                    },
                },
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: 4,
                    },
                },
            },
        ];
        let option = Object.assign(indexBarOption, {xAxis,series});
        this.indexBarChart.setOption(option);
        this.indexBarChart.on('click', (e) => {
            this.setState({
                drawerTitle: (this.state.subIndexRenderName || this.state.renderName) + "-" + e.name  + " TOP 20",
            });
            this.showDrawer();
        });
    }

    chartResize () {
       if (this.competitorChart)  this.competitorChart.resize();
       if (this.myChart) this.myChart.resize();
       if (this.ownerRadar) this.ownerRadar.resize();
       if (this.competitorRadar) this.competitorRadar.resize();
    }

    onDrawerClose = () => {
        this.setState({
            drawerVisible: false,
        });
    };



    renderIndexChart = () => {
        this.setState({
            analysisOwnerCarName: this.state.ownerCar.length > 0 ? this.state.ownerCar.reduce((a,b) => a + "/" + b) : '',
            analysisCmpCarName: this.state.competitorCar.length > 0 ? this.state.competitorCar.reduce((a,b) => a + "/" + b) : '',
        });
      this.renderOwnerIndexChart();
      // this.renderCompetitorIndexChart();
    };

    renderComprehensiveRadar = () => {
        this.renderOwnerComprehensiveRadar();
        this.renderCompetitorComprehensiveRadar();
    };

    clickLv1Handle = ({ item, key }) => {
        let seleceNode = this.state.indexDatasFeedbacks.children.filter(e => e.id === key)[0];
        let name = seleceNode.name;
        let reRender = false;
        if (this.state.renderId !== key) {
            reRender = true;
        }
        this.setState({
            selectLv1Index: [key],
            renderId: key,
            renderName:name,
            subIndexList: seleceNode.children,
        })
        if (reRender)  this.renderSelectedIndexBar()
    };

    clickTagHandle = (tagId,tagName) => {
        if (this.state.selectLv2Index !== tagId) {
            this.setState({
                    selectLv2Index: tagId,
                    renderId: tagId,
                    subIndexRenderName: tagName,
                },this.renderSelectedIndexBar);
        } else {
            this.setState({
                selectLv2Index: '',
                renderId: this.state.selectLv1Index,
                subIndexRenderName: "",
            },this.renderSelectedIndexBar);
        }

    }

    getDetailContrastDom() {

        return (<div style={{width:'90%', margin: '0 auto'}}>
            <Row className={styles.contrastRow + " " + styles.contrastTitle} >
                <Col span={4}/>
                <Col span={10}><span style={{padding: " 0 10px", marginRight:"10px", backgroundColor:"#3FA7DC"}}/>
                    {this.state.analysisOwnerCarName}
                </Col>
                <Col span={10}><span  style={{padding: "0 10px", marginRight:"10px", backgroundColor:"#7091C4"}}/>
                    {this.state.analysisCmpCarName}
                </Col>
            </Row>
            <Row className={styles.contrastRow}>
                <Col span={4} className={styles["contrast-col-title"]}>售价</Col>
                <Col span={10}>10.98万元</Col>
                <Col span={10}>11.98万元</Col>
            </Row>
            <Row className={styles.contrastRow}>
                <Col span={4} className={styles["contrast-col-title"]}>综合评分</Col>
                <Col span={10}>
                    <div className={styles.comprehensiveRadarWrap} id="comprehensiveRadarWrapOwner"/>
                    <p>综合评分: 4.6</p>
                </Col>
                <Col span={10}>
                    <div className={styles.comprehensiveRadarWrap} id="comprehensiveRadarWrapCompetitor"/>
                    <p>综合评分: 4.5</p>
                </Col>
            </Row>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <RadioGroup defaultValue="a" style={{marginTop: "20px"}} onChange={this.toggleIndexType}>
                    <RadioButton value="a">正面口碑</RadioButton>
                    <RadioButton value="b">负面口碑</RadioButton>
                </RadioGroup>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                <Menu  selectedKeys={this.state.selectLv1Index}  mode="horizontal"  onClick={this.clickLv1Handle.bind(this)}>
                    {treeData.children.map(e => <Menu.Item key={e.id}> {e.name} </Menu.Item>)}
                </Menu>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '5px 0',flexWrap: 'wrap'}}>
                {this.state.subIndexList.map(e =>  <Tag  color={ this.state.selectLv2Index === e.id ? 'magenta' : 'blue'} style={{marginTop: '5px'}} onClick={this.clickTagHandle.bind(this,e.id,e.name)}>{e.name}</Tag>)}
            </div>
            <Row className={styles.contrastRow} >
                <Col span={4} className={styles["contrast-col-title"]}>{this.state.renderName + (this.state.subIndexRenderName ? (' 》 ' + this.state.subIndexRenderName) : '')}</Col>
                <Col span={20}>
                    <div className={styles['index-bar-wrap']} id="indexBarWrap"/>
                </Col>
            </Row>
        </div>)
    }

    randomComment (node) {
        let id = uuid();
        node.id = id;
        // 随机生成反馈
        this.randomPositiveComments(node);
        // 随机反面反馈
        this.randomPositiveComments(node,true);
        if (node.children && node.children.length > 0) {
             for (let i = 0; i < node.children.length; i++) {
                 this.randomComment(node.children[i]);
             }
        }
    }

    randomPositiveComments (node,negative) {
        const comments = negative ? feedBackBad.concat() : feedBackGood.concat();
        // 1. 随机有几类反馈
        const commentsTypesCount = Math.floor(Math.random() * comments.length) + 1;
        let xAxisData = [];
        for (let i = 0; i < commentsTypesCount; i++) {
            let randomIndex = Math.floor(Math.random() * comments.length)
            xAxisData.push(comments.splice(randomIndex,1)[0]);
        }
        // 2. 随机反馈的评论数量
        let ownerData = [];
        let competitorData = [];
        for (let i = 0; i < xAxisData.length; i++) {
            ownerData.push( Math.floor(Math.random() * (negative ? 100 : 1000)) );
            competitorData.push( Math.floor(Math.random() * (negative ? 100 : 1000)) );
        }
        // 保存随机生成的数据
        if (negative) {
            this.indexBarOptionsNegative[node.id] = {
                xAxisData: xAxisData,
                ownerData: ownerData,
                competitorData: competitorData,
            };
        } else {
            this.indexBarOptionsPositive[node.id] = {
                xAxisData: xAxisData,
                ownerData: ownerData,
                competitorData: competitorData,
            };
        }
    }

    toggleIndexType = (e) => {
        if (e.target.value === 'b') {
            this.plusOrMinus = 'm';
        } else {
            this.plusOrMinus = 'p';
        }
        this.renderSelectedIndexBar();
    };

    commentCarChange = (e) => {
        let value = e.target.value;
        if (value === "a") {
            this.renderOwnerIndexChart();
        } else {
            this.renderCompetitorIndexChart();
        }
    };

    render() {
        const top20Contents = (() => {
            let ele = [];
            for (let i = 0; i < 20; i++) {
                ele.push(<p>{i}. Some contents...</p>);
            }
            return ele
        })();
        return (
            <Spin spinning={this.state.spinning}>
                <div className={styles["main-wrap"]} id="analysisWrap">
                    {/*<Divider>选择车型</Divider>*/}
                    <div className={styles["car-selector"]}>
                        <span>自有车型：</span>
                        <span>
                            <Cascader allowClear={false} value={this.state.ownerCar} onChange = {this.ownerCarChange}  options={this.state.ownerCarOption} style = {{width: "400px"}}   placeholder="选择自有车型" />
                        </span>
                        <span className={styles["jp-car"]}>竞品车型：</span>
                        <span>
                            <Cascader  value={this.state.competitorCar}  options={this.state.competitorCarOption} onChange = {this.competitorCarChange} style = {{width: "400px"}} placeholder="选择竞品车型" />
                        </span>
                        <span style={{marginLeft:'50px'}}> <Button type="primary"  icon="line-chart" onClick={() => {this.renderIndexChart()}}>分析</Button></span>
                    </div>
                    <Divider>
                        口碑详细对比
                    </Divider>
                    { this.getDetailContrastDom()}
                    <Drawer
                        title={this.state.drawerTitle}
                        placement="right"
                        closable={true}
                        width={500}
                        onClose={this.onDrawerClose}
                        visible={this.state.drawerVisible}
                    >
                        {top20Contents}
                    </Drawer>

                    {/*<h3 className={styles["h2"]}>汽车指标用户反馈分析</h3>*/}
                    <Divider>口碑分析图</Divider>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
                        <RadioGroup defaultValue="a" style={{marginLeft: "10px"}}  onChange={this.commentCarChange} >
                            <RadioButton value="a">{this.state.analysisOwnerCarName}</RadioButton>
                            <RadioButton value="b">{this.state.analysisCmpCarName}</RadioButton>
                        </RadioGroup>
                    </div>
                        <div className={styles["index-feedback"]} id="index_feedback_owner_view"/>

                </div>
            </Spin>
        )
    }
}
