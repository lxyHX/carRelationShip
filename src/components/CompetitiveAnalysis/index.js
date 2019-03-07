import React, { PureComponent } from 'react';
import styles from './index.css';
import { Cascader,Button,Divider,Radio,Drawer,Row, Col,Spin ,Menu,Tag} from 'antd';
import {ownerIndexViewOption,treeData} from '../../assets/mock/ownerIndexTreeOption'
import indexBarOption from '../../assets/mock/indexBarOption'
import getComprehensiveScoreOption from '../../assets/mock/comprehensiveScore'
import {queryCommentCountByTagCode,queryCarList,queryFirstLevelTag,queryCompositeScore} from '../../service/car'
import uuid from 'uuid/v1'
const echarts = require('echarts');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class CompetitiveAnalysis extends PureComponent {
    constructor(props) {
        super(props);
        // this.allNodes = level_1_nodes;
        // this.nodeLinks = links;
        this.state = {
            spinning: true,
            drawerVisible: false,
            drawerTitle: "",
            ownerCarOption: [],
            competitorCarOption: [],
            ownerIndexViewOption: ownerIndexViewOption,
            competitorIndexViewOption: ownerIndexViewOption,
            selectOwnerCar: [],
            selectCompetitorCar: [],
            analysisType: 'b',
            indexDatasFeedbacks: treeData,
            analysisOwnerCarName: '',
            analysisCmpCarName: '',
            tagMenuSelected: [],
            selectLv2Index: '',
            renderId: '',
            renderName: '',
            subIndexRenderName: '',
            subIndexList: [],
            selectTagCode: 'G00',
            firstTagData: [],
        };

        this.plusOrMinus = 'p';

        // 指标对比柱图数据
        this.tagBarProps = {
            subTags : [], // 二三级指标名称
            ownerCount: [], // 自有车型反馈统计
            competitorCount: [], // 竞品车型反馈统计
        };

        // 雷达图数据
        this.radarProps = {
            positive: [[],[]],  // 正面评价，两组数据
            negative:[[],[]],   // 负面评价，两组数据
        }
    }

    ownerCarChange = (value) => {
        this.setState({
            selectOwnerCar: value,
        });
    };

    competitorCarChange = (value) => {
        this.setState({
            selectCompetitorCar: value,
        });
    };

   async componentWillMount () {
       // 获取参数
       const {owner,competitors} = this.props.location.state.query;
       // 获取车辆信息
       await this._queryCarList(owner,competitors);
   }

    async componentDidMount () {
       await this._initDataAndChart();
       await this._queryFirstLevelTag();
    }

    // 在第一次加载 和 点击分析按钮 根据选择车辆初始化数据和图表
   async  _initDataAndChart () {
        // 选择车型的第一个一级指标二级三级指标的反馈统计
        await this._queryTagCommentCount();
        // 获取雷达图的数据
       await this._queryCompositeScore();
        setTimeout( () => {
            // 树图
            this.renderIndexChart();
            // 指标雷达图
            this.renderComprehensiveRadar();
            // 选中一级指标的二三级指标对比柱图
            this.renderSelectedIndexBar();
            this.setState({ spinning: false });
        },0);
    }

    //查询车辆集合
    async _queryCarList (ownerCar, competitors) {
        const rep = await queryCarList({
            ownerCar: ownerCar,
            competitors: competitors,
        });
        if (rep.success) {
            let data = rep.data;
            // 默认选中值
            this.setState({
                ownerCarOption: data.ownerCars,
                competitorCarOption: data.competitorCars,
                selectOwnerCar: [ data.ownerCars[0].value, data.ownerCars[0].children[0].value, data.ownerCars[0].children[0].children[0].value],
                selectCompetitorCar: [ data.competitorCars[0].value,data.competitorCars[0].children[0].value, data.competitorCars[0].children[0].children[0].value],
            });

        }
    }

    // 获取二级三级指标的反馈统计
    async _queryTagCommentCount () {
      const rep = await queryCommentCountByTagCode({
           carId: this._getCarIdByCarName(this.state.selectOwnerCar,true),
           code: this.state.selectTagCode,
           positive: this.plusOrMinus === 'p',
       });
      if (rep.success) {
          let data = rep.data;
          this.tagObjList = data.tags;
          this.tagBarProps.subTags = data.tags.map(e => e.name);
          this.tagBarProps.ownerCount = data.values[0];
          this.tagBarProps.competitorCount = data.values[1];
      }
    }

    // 获取一级指标信息
    async _queryFirstLevelTag () {
        const rep = await queryFirstLevelTag();
        if (rep.success) {
            let data = rep.data;
            this.setState({
                firstTagData: data,
                tagMenuSelected: [data[0].id],
            });
        }
    }

    // 获取正负面综合评分信息
    async _queryCompositeScore () {
        const rep = await queryCompositeScore({
            ownerCarId: this._getCarIdByCarName(this.state.selectOwnerCar,true),
            competitorCarId: this._getCarIdByCarName(this.state.selectCompetitorCar,false),
        });
        if (rep.success) {
            let {positive,negative} = rep.data;
            this.radarProps.positive = positive;
            this.radarProps.negative = negative;
        }
    }

    // 通过车辆选择信息查询车辆Id ['传奇GS5','2019款','2.0T 精英型']
    _getCarIdByCarName (carNameArr,isOwner) {
        let carOption = isOwner ? this.state.ownerCarOption : this.state.competitorCarOption;
        carNameArr.forEach((carName,i) => {
            let filterCarOption = carOption.filter(e => e.value === carName)[0];
            if (i < carNameArr.length - 1) {
                carOption = filterCarOption.children;
            } else {
                carOption = filterCarOption
            }
        });
        return carOption.id;
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
        if (this.state.selectOwnerCar.length > 0) {
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
        if (this.state.selectCompetitorCar.length > 0) {
            option.title.text = this.state.analysisCmpCarName;
        }
        if (!this.myChart) {
            this.myChart = echarts.init(document.getElementById('index_feedback_competitor_view'));
        }
        this.myChart.setOption(option);
    };

    _renderPositiveRadar () {
        if (!this.ownerRadar) {
            this.ownerRadar = echarts.init(document.getElementById('comprehensiveRadarWrapOwner'));
        }
        let option = getComprehensiveScoreOption();
        option.title.text = "正面口碑综合评分";
        option.radar.indicator = this.state.firstTagData;
        option.series[0].data[0].name = this.state.analysisOwnerCarName;
        // option.series[0].data[0].value = this.radarProps.positive[0];
        option.series[0].data[1].name = this.state.analysisCmpCarName;
        // option.series[0].data[1].value = this.radarProps.positive[1];

        this.ownerRadar.setOption(option);
    }

    _renderNegativeRadar () {
        if (!this.competitorRadar) {
            this.competitorRadar = echarts.init(document.getElementById('comprehensiveRadarWrapCompetitor'));
        }
        let option = getComprehensiveScoreOption();
        option.title.text = "负面口碑综合评分";
        option.radar.indicator = this.state.firstTagData;
        option.series[0].data[0].name = this.state.analysisCmpCarName;
        option.series[0].data[0].value = this.radarProps.negative[0];
        option.series[0].data[1].name = this.state.analysisCmpCarName;
        option.series[0].data[1].value = this.radarProps.negative[1];

        this.competitorRadar.setOption(option);
    }


    renderSelectedIndexBar () {
        if (!this.indexBarChart) {
            this.indexBarChart = echarts.init(document.getElementById("indexBarWrap"));
        }

        let xAxis = {
                type : 'category',
                data : this.tagBarProps.subTags,
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
                data: this.tagBarProps.ownerCount,
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
                data: this.tagBarProps.competitorCount,
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
            analysisOwnerCarName: this.state.selectOwnerCar.length > 0 ? this.state.selectOwnerCar.reduce((a,b) => a + "/" + b) : '',
            analysisCmpCarName: this.state.selectCompetitorCar.length > 0 ? this.state.selectCompetitorCar.reduce((a,b) => a + "/" + b) : '',
        });
      this.renderOwnerIndexChart();
      // this.renderCompetitorIndexChart();
    };

    // 渲染 正负面雷达图
    renderComprehensiveRadar = () => {
        this._renderPositiveRadar();
        this._renderNegativeRadar();
    };

    tagMenuSelected = async ({ item, key }) => {
        if (this.selectTagCode !== key) {
            this.setState({
                tagMenuSelected: [key],
            });
            this.selectTagCode = key;
            await this._queryTagCommentCount();
            this.renderSelectedIndexBar()
        }
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
                    {/*<p>综合评分: 4.6</p>*/}
                </Col>
                <Col span={10}>
                    <div className={styles.comprehensiveRadarWrap} id="comprehensiveRadarWrapCompetitor"/>
                    {/*<p>综合评分: 4.5</p>*/}
                </Col>
            </Row>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <RadioGroup defaultValue="a" style={{marginTop: "20px"}} onChange={this.toggleIndexType.bind(this)}>
                    <RadioButton value="a">正面口碑</RadioButton>
                    <RadioButton value="b">负面口碑</RadioButton>
                </RadioGroup>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                <Menu  selectedKeys={this.state.tagMenuSelected}  mode="horizontal"  onClick={this.tagMenuSelected.bind(this)}>
                    {this.state.firstTagData.map(e => <Menu.Item key={e.id}> {e.name} </Menu.Item>)}
                </Menu>
            </div>

            <Row className={styles.contrastRow} >
                <Col span={24}>
                    <div className={styles['index-bar-wrap']} id="indexBarWrap"/>
                </Col>
            </Row>
        </div>)
    }





     toggleIndexType = async (e) => {
        if (e.target.value === 'b') {
            this.plusOrMinus = 'm';
        } else {
            this.plusOrMinus = 'p';
        }
        await this._queryTagCommentCount();
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
                            <Cascader allowClear={false} value={this.state.selectOwnerCar} onChange = {this.ownerCarChange}  options={this.state.ownerCarOption} style = {{width: "400px"}}   placeholder="选择自有车型" />
                        </span>
                        <span className={styles["jp-car"]}>竞品车型：</span>
                        <span>
                            <Cascader  value={this.state.selectCompetitorCar}  options={this.state.competitorCarOption} onChange = {this.competitorCarChange} style = {{width: "400px"}} placeholder="选择竞品车型" />
                        </span>
                        <span style={{marginLeft:'50px'}}> <Button type="primary"  icon="line-chart" onClick={() => {this._initDataAndChart()}}>分析</Button></span>
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
