import React, { PureComponent } from 'react';
import styles from './index.css';
import { Cascader,Button,Divider,Radio,Drawer,Row, Col,Spin ,Menu,message} from 'antd';
import {ownerIndexViewOption,treeData} from '../../assets/mock/ownerIndexTreeOption'
import indexBarOption from '../../assets/mock/indexBarOption'
import getComprehensiveScoreOption from '../../assets/mock/comprehensiveScore'
import {queryCommentCountByTagCode,queryCarList,queryTop10FirstLevelTag,queryFirstLevelTag,queryCompositeScore,queryRecomContent} from '../../service/car'
import seriesColor from '../common/seriesColor'
import carIcon from '../../assets/images/car.png'
import echarts from "echarts"
import uuid from "uuid/v1"
// import  'echarts-wordcloud'
import WorldCloud from '../WorldCloud'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const defaultSelectCar = "传祺GS4";

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
            allCommentContent: [],
            showWordCloud: false,
            wordCloudTitle: '',
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
            firstTagList: [],
            positive: [[],[]],  // 正面评价，两组数据
            negative:[[],[]],   // 负面评价，两组数据
        }
        // 临时存放二级三级指标的数据包括名称和ID
        this.tagObjList = [];
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
       // let owner,competitors;
       // // 获取参数
       // if (this.props.location.state && this.props.location.state.query) {
       //     ({owner,competitors} = this.props.location.state.query);
       // }

   }

    async componentDidMount () {
        let owner,competitors;
        // 获取参数
        if (this.props.location.state && this.props.location.state.query) {
            ({owner,competitors} = this.props.location.state.query);
        }
        // 获取车辆信息
        const result = await this._queryCarList(owner,competitors);
        if (!result) return false;
        // await this._queryFirstLevelTag();
        await this._initDataAndChart();
    }

    // 在第一次加载 和 点击分析按钮 根据选择车辆初始化数据和图表
   async  _initDataAndChart () {
       let carId = this._getCarIdByCarName(this.state.selectOwnerCar,true);
       this.setState({
           spinning: true,
       });
       let tagResult = await this._queryFirstLevelTag(carId);
        if (!tagResult) {
            this.setState({
                spinning: false,
            });
            return
        }
        setTimeout( async() => {
            // 选择车型的第一个一级指标二级三级指标的反馈统计
            await this._queryTagCommentCount();
            // 获取雷达图的数据
            const self = this;
            let result = await this._queryCompositeScore();
            if (!result) return;
            // 树图
            // self.renderIndexChart();
            // 指标雷达图
            self.renderComprehensiveRadar();
            // 选中一级指标的二三级指标对比柱图
            self.renderSelectedIndexBar();
            // 渲染默认的词云

            // 找出最大的那个指标
            let maxIndex = 0;
            let maxCount = 0;
            self.tagBarProps.ownerCount.forEach((e,i) => {if (e > maxCount) {maxCount = e ;maxIndex = i}});
            let code = self.tagObjList[maxIndex].code;
            let name = self.tagObjList[maxIndex].name;
            await self._tagBarClickHandle(null,carId,name,code);
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
            if (JSON.stringify(data.ownerCars) === "{}" || JSON.stringify(data.competitorCars) === "{}") {
                message.error('未查询到车辆信息');
                this.props.history.push('/performance/relationShip');
                return false;
            }
            // 将 map结构转换成 数组结构
            let ownerCarOption = convertMapToArray (data.ownerCars);
            let competitorCarOption = convertMapToArray (data.competitorCars);
            let selectCar = ownerCarOption.filter(e => e.value === defaultSelectCar)[0];
            selectCar = selectCar || ownerCarOption[0];
            const selectOwnerCar = [ selectCar.value, selectCar.children[0].value, selectCar.children[0].children[0].value];
            const selectCompetitorCar =  [ competitorCarOption[0].value,competitorCarOption[0].children[0].value, competitorCarOption[0].children[0].children[0].value];
            // 默认选中值
           await this.setState({
                ownerCarOption: ownerCarOption,
                competitorCarOption: competitorCarOption,
                selectOwnerCar: selectOwnerCar,
                selectCompetitorCar: selectCompetitorCar,
            });
           return true
        }

        function convertMapToArray (treeData) {
            let options = [];
            for (let key in treeData) {
                let value = treeData[key];
                let node = {};
                node.label = key;
                node.value = key;
                if (value instanceof Object && !(value instanceof Array)) {
                    node.children = convertMapToArray(value);
                } else {
                    node.children = value
                }
                options.push(node);
            }
            return options;
        }
    }

    // 获取二级三级指标的反馈统计
    async _queryTagCommentCount () {
      const rep = await queryCommentCountByTagCode({
           ownerCarId: this._getCarIdByCarName(this.state.selectOwnerCar,true),
           competitorCarId: this._getCarIdByCarName(this.state.selectCompetitorCar,false),
           code: this.state.tagMenuSelected[0],
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
    async _queryFirstLevelTag (carId) {
        const rep = await queryTop10FirstLevelTag({carId});
        if (rep.success) {
            let data = rep.data.filter(e => e.id !== 'G00');
            if (data.length === 0) {
                message.error("未查询到口碑数据！");
                return false
            }
            this.setState({
                firstTagData: data,
                tagMenuSelected: [data[0].id],
            });
            return true;
        }
    }

    // 获取正负面综合评分信息
    async _queryCompositeScore () {
        const rep = await queryCompositeScore({
            ownerCarId: this._getCarIdByCarName(this.state.selectOwnerCar,true),
            competitorCarId: this._getCarIdByCarName(this.state.selectCompetitorCar,false),
        });
        if (rep.success) {
            let {positive,negative,tagIndicator} = rep.data;
            // 计算正面和负面的最大者
            this.positiveMax = 0;
            this.nagativeMax = 0;
            positive.forEach( _e => { _e.forEach(e => {if ( e > this.positiveMax ) this.positiveMax = e }) });
            negative.forEach( _e => { _e.forEach(e => {if ( e > this.nagativeMax ) this.nagativeMax = e }) } );
            this.positiveMax = this.positiveMax * 1.2;
            this.nagativeMax = this.nagativeMax * 1.2;
            this.radarProps.firstTagList = tagIndicator.map(e =>  ({...e}));
            this.radarProps.positive = positive;
            this.radarProps.negative = negative;
            return true
        } else {
            message.error("网络出错，请刷新页面");
            return false
        }
    }

    // 获取用户的评论详情
    async _queryRecomContent (carId ,code) {
        const rep = await queryRecomContent({
            carId: carId,
            code: code,
            positive: this.plusOrMinus === 'p',
        });
        if (rep.success) {
            this.setState({
                allCommentContent: rep.data,
            })
        } else {
            message.error("查询反馈信息内容失败！")
        }

    }

    // 通过车辆选择信息查询车辆Id ['传奇GS5','2019款','2.0T 精英型']
    _getCarIdByCarName (carNameArr,isOwner) {
        let carOption = isOwner ? this.state.ownerCarOption : this.state.competitorCarOption;
        carNameArr.forEach((carName,i) => {
            if (carName !== '全部') {
                let filterCarOption = carOption.filter(e => e.value === carName)[0];
                if (i < carNameArr.length - 1) {
                    carOption = filterCarOption.children;
                } else {
                    carOption = [filterCarOption.id]
                }
            } else if (i === carNameArr.length - 1) {
                carOption = carOption.map(e => e.id);
            }

        });
        return carOption;
    }


    _renderPositiveRadar () {
        if (!this.ownerRadar) {
            this.ownerRadar = echarts.init(document.getElementById('comprehensiveRadarWrapOwner'));
        }
        let option = getComprehensiveScoreOption();
        option.title.text = "正面口碑";
        option.radar.indicator = this.radarProps.firstTagList.map(e => ({...e,max: this.positiveMax}));
        option.series[0].data[0].name = this.state.analysisOwnerCarName;
        option.series[0].data[0].value = this.radarProps.positive[0];
        option.series[0].data[1].name = this.state.analysisCmpCarName;
        option.series[0].data[1].value = this.radarProps.positive[1];

        this.ownerRadar.setOption(option);
    }

    _renderNegativeRadar () {
        if (!this.competitorRadar) {
            this.competitorRadar = echarts.init(document.getElementById('comprehensiveRadarWrapCompetitor'));
        }
        let option = getComprehensiveScoreOption();
        option.title.text = "负面口碑";
        option.radar.indicator = this.radarProps.firstTagList.map(e => ({...e,max: this.nagativeMax}));
        option.series[0].data[0].name = this.state.analysisCmpCarName;
        option.series[0].data[0].value = this.radarProps.negative[0];
        option.series[0].data[1].name = this.state.analysisCmpCarName;
        option.series[0].data[1].value = this.radarProps.negative[1];

        this.competitorRadar.setOption(option);
    }

    renderSelectedIndexBar () {
        if (!this.indexBarChart) {
            this.indexBarChart = echarts.init(document.getElementById("indexBarWrap"));
            this.indexBarChart.on('click', (e) => {
                this._tagBarClickHandle(e);
            });
            window.onresize =  () => {
                this.indexBarChart.resize();
            }
        }

        let xAxis = {
                type : 'category',
                data : this.tagBarProps.subTags,
                axisLabel: {
                    show:  true,
                    textStyle: {
                        color: '#666',
                    },
                    formatter: (value, index) => {
                        if (value.length > 3) {
                            return value.substring(0,3) + '...'
                        }
                        return value
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
    }

   async  _tagBarClickHandle(e,carId,name,code) {
       if (!name) name = e.name;
        // 计算一级指标的名称
       if (!carId) {
           let {seriesIndex} = e;
           carId = this._getCarIdByCarName(seriesIndex === 0 ? this.state.selectOwnerCar : this.state.selectCompetitorCar, seriesIndex === 0);
       }
       if (!code) code = this.tagObjList.filter(_e => _e.name === name)[0].code;
        // 请求反馈内容详细信息
        await  this._queryRecomContent(carId,code);
        this.setState({
            showWordCloud: true,
            wordCloudTitle: name,
        },() => {
            // this._renderWordCloud();
        });
    }

    // 渲染 正负面雷达图
    renderComprehensiveRadar = () => {
        this._renderPositiveRadar();
        this._renderNegativeRadar();
    };

    tagMenuSelected = async ({ item, key }) => {
        if (this.selectTagCode !== key) {
            this.setState({
                tagMenuSelected: [key],
            },async () => {
                this.selectTagCode = key;
                await this._queryTagCommentCount();
                this.renderSelectedIndexBar()
            });

        }
    };


    getDetailContrastDom() {

        return (<div style={{width:'90%', margin: '0 auto'}}>
            {/*<Row className={styles.contrastRow + " " + styles.contrastTitle} >*/}
                {/*<Col span={4}>*/}
                    {/*<span style={{padding: " 0 10px", marginRight:"10px", backgroundColor: seriesColor[0]}}/>*/}
                    {/*{this.state.selectOwnerCar.length > 0 ? this.state.selectOwnerCar.reduce((a,b) => (a +  "/" + b)) : ''}*/}
{/*<br/>*/}
                    {/*<span  style={{padding: "0 10px", marginRight:"10px", backgroundColor: seriesColor[1]}}/>*/}
                    {/*{this.state.selectCompetitorCar.length > 0 ? this.state.selectCompetitorCar.reduce((a,b) => (a +  "/" + b)) : ''}*/}
                {/*</Col>*/}
                {/*<Col span={12}>*/}
                    {/*正面评价*/}
                {/*</Col>*/}
                {/*<Col span={12}>*/}
                    {/*负面评价*/}
                {/*</Col>*/}
            {/*</Row>*/}
            {/*<Row className={styles.contrastRow}>*/}
                {/*<Col span={4} className={styles["contrast-col-title"]}>售价</Col>*/}
                {/*<Col span={10}>10.98万元</Col>*/}
                {/*<Col span={10}>11.98万元</Col>*/}
            {/*</Row>*/}
            <Row className={styles.contrastRow}>
                {/*<Col span={4} className={styles["contrast-col-title"]}>指标热度</Col>*/}
                <Col span={12}>
                    <div className={styles.comprehensiveRadarWrap} id="comprehensiveRadarWrapOwner"/>
                    {/*<p>综合评分: 4.6</p>*/}
                </Col>
                <Col span={12}>
                    <div className={styles.comprehensiveRadarWrap} id="comprehensiveRadarWrapCompetitor"/>
                    {/*<p>综合评分: 4.5</p>*/}
                </Col>
            </Row>
            <Row className={styles.contrastRow + " " + styles.contrastTitle} >
                <Col span={24}>
                <span style={{padding: " 0 10px", marginRight:"10px", backgroundColor: seriesColor[0]}}/>
                <span>{this.state.selectOwnerCar.length > 0 ? this.state.selectOwnerCar.reduce((a,b) => (a +  "/" + b)) : ''}</span>

                <span  style={{padding: "0 10px", margin:"0 10px", backgroundColor: seriesColor[1]}}/>
                    <span>{this.state.selectCompetitorCar.length > 0 ? this.state.selectCompetitorCar.reduce((a,b) => (a +  "/" + b)) : ''}</span>
                </Col>
            </Row>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <RadioGroup defaultValue="a" style={{marginTop: "20px"}} onChange={this.toggleIndexType.bind(this)}>
                    <RadioButton value="a">正面口碑</RadioButton>
                    <RadioButton value="b">负面口碑</RadioButton>
                </RadioGroup>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                <Menu  selectedKeys={this.state.tagMenuSelected} style={{width: '100%',display: 'flex',justifyContent: 'center'}}  mode="horizontal"  onClick={this.tagMenuSelected.bind(this)}>
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


    render() {
        return (
            <Spin spinning={this.state.spinning}>
                <div className={styles["main-wrap"]} id="analysisWrap">
                    {/*<Divider>选择车型</Divider>*/}
                    <div className={styles["car-selector"]}>
                        <span>自有车型：</span>
                        <span style={{width: '20%'}}>
                            <Cascader allowClear={false} value={this.state.selectOwnerCar} onChange = {this.ownerCarChange}  options={this.state.ownerCarOption} style = {{width: "100%"}}   placeholder="选择自有车型" />
                        </span>
                        <span className={styles["jp-car"]}>竞品车型：</span>
                        <span style={{width: '20%'}}>
                            <Cascader  value={this.state.selectCompetitorCar}  options={this.state.competitorCarOption} onChange = {this.competitorCarChange} style = {{width: "100%"}} placeholder="选择竞品车型" />
                        </span>
                        <span style={{marginLeft:'50px'}}> <Button type="primary"  icon="line-chart" onClick={() => {this._initDataAndChart()}}>分析</Button></span>
                    </div>
                    <Divider>
                        <span className={styles.hot}/> 指标热度
                    </Divider>
                    {this.getDetailContrastDom()}
                    <WorldCloud width={560} height={270} data={this.state.allCommentContent} showWordCloud={this.state.showWordCloud} wordCloudTitle={this.state.wordCloudTitle}/>
                    {/*<div style={{display: this.state.showWordCloud ? 'block': 'none'}} key={uuid()}>*/}
                        {/*<Divider>评价内容 - {this.state.wordCloudTitle}</Divider>*/}
                        {/*<div className={styles["index-feedback"]} id="world_cloud_container"/>*/}
                    {/*</div>*/}
                </div>
            </Spin>
        )
    }
}
