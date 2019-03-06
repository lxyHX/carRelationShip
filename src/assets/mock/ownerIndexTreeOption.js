const level_1 = 9;
const level_2 = 6;
const level_3 = 4;

let treeData = {
        "name": "car",
        children: [
            {
                "name": "外观造型",
                children: [
                    {
                        "name": "外观造型_其他",
                        "symbolSize": level_2,
                        "category": "外观造型",
                        value: 100,
                    }, {
                        "name": "前脸整体印象",
                        "symbolSize": level_2,
                        "category": "外观造型",
                        value: 100,
                    },{
                        "name": "侧面整体印象",
                        "symbolSize": level_2,
                        "category": "外观造型",
                        value: 100,
                    },{
                        "name": "尾部整体印象",
                        "symbolSize": level_2,
                        "category": "外观造型",
                        value: 100,
                    },{
                        "name": "整体协调性",
                        "symbolSize": level_2,
                        "category": "外观造型",
                        value: 100,
                    },{
                        "name": "造型风格",
                        "symbolSize": level_2,
                        "category": "外观造型",
                        value: 100,
                    }
                ]
            } , {
            "name": "内饰造型",
            "symbolSize": level_1,
            "category": "内饰造型",
            children:[
                {
                "name": "内饰造型_其他",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "仪表/方向盘区域",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "中控区域",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "前中央通道控制台区域",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "门板和立柱造型",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "座椅造型",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "内饰整体协调性",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            },{
                "name": "内饰造型风格",
                "symbolSize": level_2,
                "category": "内饰造型",
                value: 100,
            }]
            }, {
            "name": "外观品质",
            "symbolSize": level_1,
            "category": "外观品质",
            children: [
                {
                "name": "外观品质_其他",
                "symbolSize": level_2,
                "category": "外观品质",
                value: 100,
            },{
                "name": "外部品质",
                "symbolSize": level_2,
                "category": "外观品质",
                value: 100,
            },{
                "name": "漆面质感",
                "symbolSize": level_3,
                "category": "外观品质",
                value: 100,
            },{
                "name": "外部缝隙宽度、均匀度、视觉品质等",
                "symbolSize": level_3,
                "category": "外观品质",
                value: 100,
            },{
                "name": "装饰件品质",
                "symbolSize": level_3,
                "category": "外观品质",
                value: 100,
            },{
                "name": "外部操作品质",
                "symbolSize": level_2,
                "category": "外观品质",
                value: 100,
            },{
                "name": "车门开闭品质",
                "symbolSize": level_3,
                "category": "外观品质",
                value: 100,
            },{
                "name": "车窗开闭品质",
                "symbolSize": level_3,
                "category": "外观品质",
                value: 100,
            },{
                "name": "后备箱、引擎盖等其他部件的开闭品质",
                "symbolSize": level_3,
                "category": "外观品质",
                value: 100,
            }]
            }, {
            "name": "内饰品质",
            "symbolSize": level_1,
            "category": "内饰品质",
             children: [
                 {
                     "name": "内饰品质_其他",
                     "symbolSize": level_2,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "内部品质",
                     "symbolSize": level_2,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "仪表台品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "中控品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "门板立柱品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "座椅品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "遮阳板、顶棚、地毯品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "车内灯光效果",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "换挡杆品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "方向盘品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "行李箱品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "中央扶手品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "按钮/开关品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "内部缝隙宽度、均匀度、视觉品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "内部操作品质",
                     "symbolSize": level_2,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "车内盖板操作品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 },{
                     "name": "开关按键、旋钮、内把手等操作品质",
                     "symbolSize": level_3,
                     "category": "内饰品质",
                     value: 100,
                 }
             ],
            }, {
            "name": "动力性",
            "symbolSize": level_1,
            "category": "动力性",
             children: [
                 {
                     "name": "动力性_其他",
                     "symbolSize": level_2,
                     "category": "动力性",
                     value: 100,
                 },{
                     "name": "起步性能(0-20km/h)",
                     "symbolSize": level_2,
                     "category": "动力性",
                     value: 100,
                 },{
                     "name": "城市路况动力性（20-80km/h）",
                     "symbolSize": level_2,
                     "category": "动力性",
                     value: 100,
                 },{
                     "name": "高速路况(80km/h以上)动力性",
                     "symbolSize": level_2,
                     "category": "动力性",
                     value: 100,
                 },{
                     "name": "油门踏板响应",
                     "symbolSize": level_2,
                     "category": "动力性",
                     value: 100,
                 },{
                     "name": "爬坡能力",
                     "symbolSize": level_2,
                     "category": "动力性",
                     value: 100,
                 }
             ]
            }, {
            "name": "驾驶操控性",
            "symbolSize": level_1,
            "category": "驾驶操控性",
                children: [
                    {
                        "name": "驾驶操控性_其他",
                        "symbolSize": level_2,
                        "category": "驾驶操控性",
                        value: 100,
                    },{
                        "name": "转向性能（转向力、精准度）",
                        "symbolSize": level_2,
                        "category": "驾驶操控性",
                        value: 100,
                    },{
                        "name": "稳定性（跑偏、发飘）",
                        "symbolSize": level_2,
                        "category": "驾驶操控性",
                        value: 100,
                    },{
                        "name": "换挡操作（顺畅感、反馈感、操作力）",
                        "symbolSize": level_2,
                        "category": "驾驶操控性",
                        value: 100,
                    }
                ]
            }, {
            "name": "便利性",
            "symbolSize": level_1,
            "category": "便利性",
              children: [
                    {
                        "name": "便利性_其他",
                        "symbolSize": level_2,
                        "category": "便利性",
                        value: 100,
                    },{
                        "name": "按键操作/调节便利性",
                        "symbolSize": level_2,
                        "category": "便利性",
                        value: 100,
                    },{
                        "name": "取置物便利性",
                        "symbolSize": level_2,
                        "category": "便利性",
                        value: 100,
                    },{
                        "name": "人员进出便利性（前排/后排）",
                        "symbolSize": level_2,
                        "category": "便利性",
                        value: 100,
                    },{
                        "name": "信息娱乐接口便利性",
                        "symbolSize": level_2,
                        "category": "便利性",
                        value: 100,
                    }
                ]
        }, {
            "name": "安全性",
            "symbolSize": level_1,
            "category": "安全性",
                children: [
                    {
                        "name": "安全性_其他",
                        "symbolSize": level_2,
                        "category": "安全性",
                        value: 100,
                    },{
                        "name": "视野",
                        "symbolSize": level_2,
                        "category": "安全性",
                        value: 100,
                    },{
                        "name": "行车灯光照明度",
                        "symbolSize": level_2,
                        "category": "安全性",
                        value: 100,
                    },{
                        "name": "刹车性能",
                        "symbolSize": level_2,
                        "category": "安全性",
                        value: 100,
                    },{
                        "name": "驻车功能",
                        "symbolSize": level_2,
                        "category": "安全性",
                        value: 100,
                    },{
                        "name": "碰撞星级",
                        "symbolSize": level_2,
                        "category": "安全性",
                        value: 100,
                    }
                ]
        }, {
            "name": "使用经济性",
            "symbolSize": level_1,
            "category": "使用经济性",
                children: [
                    {
                        "name": "使用经济性_其他",
                        "symbolSize": level_2,
                        "category": "使用经济性",
                        value: 100,
                    },{
                        "name": "油耗",
                        "symbolSize": level_2,
                        "category": "使用经济性",
                        value: 100,
                    },{
                        "name": "电耗",
                        "symbolSize": level_2,
                        "category": "使用经济性",
                        value: 100,
                    }
                ]
        }, {
            "name": "舒适性",
            "symbolSize": level_1,
            "category": "舒适性",
                children: [
                    {
                        "name": "舒适性_其他",
                        "symbolSize": level_2,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "座椅舒适",
                        "symbolSize": level_2,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "座椅舒适性",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "座椅操作舒适",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "扶手舒适性",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "环境舒适性",
                        "symbolSize": level_2,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "车内环境舒适",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "怠速及噪音",
                        "symbolSize": level_2,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "怠速舒适性",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "加/减速车内噪音",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "风噪",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "车内隔音效果（静止状态）",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "道路噪音",
                        "symbolSize": level_3,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "行驶平稳",
                        "symbolSize": level_2,
                        "category": "舒适性",
                        value: 100,
                    },{
                        "name": "动力平顺性",
                        "symbolSize": level_2,
                        "category": "舒适性",
                        value: 100,
                    }
                ]
        }, {
            "name": "乘坐空间",
            "symbolSize": level_1,
            "category": "乘坐空间",
                children: [
                    {
                        "name": "乘坐空间_其他",
                        "symbolSize": level_2,
                        "category": "乘坐空间",
                        value: 100,
                    },{
                        "name": "前排空间",
                        "symbolSize": level_2,
                        "category": "乘坐空间",
                        value: 100,
                    },{
                        "name": "第二排空间",
                        "symbolSize": level_2,
                        "category": "乘坐空间",
                        value: 100,
                    },{
                        "name": "空间可调性",
                        "symbolSize": level_2,
                        "category": "乘坐空间",
                        value: 100,
                    },{
                        "name": "第三排空间",
                        "symbolSize": level_2,
                        "category": "乘坐空间",
                        value: 100,
                    }
                ]
        }, {
            "name": "储物空间",
            "symbolSize": level_1,
            "category": "储物空间",
                children: [
                    {
                        "name": "储物空间_其他",
                        "symbolSize": level_2,
                        "category": "储物空间",
                        value: 100,
                    },{
                        "name": "行李箱空间",
                        "symbolSize": level_2,
                        "category": "储物空间",
                        value: 100,
                    },{
                        "name": "车内储物空间",
                        "symbolSize": level_2,
                        "category": "车内储物空间",
                        value: 100,
                    }
                ]
        }, {
            "name": "通过性",
            "symbolSize": level_1,
            "category": "通过性",
                children: [
                    {
                        "name": "通过性_其他",
                        "symbolSize": level_2,
                        "category": "通过性",
                        value: 100,
                    },{
                        "name": "各路况下的通过性",
                        "symbolSize": level_2,
                        "category": "通过性",
                        value: 100,
                    },{
                        "name": "最小离地间隙",
                        "symbolSize": level_2,
                        "category": "通过性",
                        value: 100,
                    }
                ]
        }, {
            "name": "智能信息娱乐系统",
            "symbolSize": level_1,
            "category": "智能信息娱乐系统",
                children: [
                    {
                        "name": "智能信息娱乐系统_其他",
                        "symbolSize": level_2,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "信息音响系统",
                        "symbolSize": level_2,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "显示屏技术",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "仪表盘技术",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "音响",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "智能网联系统",
                        "symbolSize": level_2,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "导航和定位",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "远程控制",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "人车交互控制",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "智能安全辅助",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "生活娱乐服务",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "社交和共享",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "升级与识别学习能力",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "定制化",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    },{
                        "name": "使用成本",
                        "symbolSize": level_3,
                        "category": "智能信息娱乐系统",
                        value: 100,
                    }
                ]
        }, {
            "name": "新能源特性",
            "symbolSize": level_1,
            "category": "新能源特性",
                children: [
                    {
                        "name": "新能源特性_其他",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    },{
                        "name": "电池质量及稳定性",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    },{
                        "name": "续航里程",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    },{
                        "name": "充电时长",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    },{
                        "name": "充电便利性",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    },{
                        "name": "能量管理",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    },{
                        "name": "能量信息显示",
                        "symbolSize": level_2,
                        "category": "新能源特性",
                        value: 100,
                    }
                ]
        }
],
};

function recursion (obj,level,index) {
    if (level != 0) obj.collapsed = true;
    if (level === 1 && index === 0)   delete obj.collapsed;
    if (obj.children && obj.children.length > 0) {
        for (let i = 0; i < obj.children.length; i ++) {
            recursion(obj.children[i],level + 1,i)
        }
    } else {
        // 随机反馈节点
        let randomCount_satisfy = {
            name : "非常满意：" + Math.floor(Math.random() * 1000),
            itemStyle: {borderColor : "#FF0000"},
            parentName: obj.name,
            leaf: true
        };
        let randomCount_no_satisfy = {
            name : "不好：" + Math.floor(Math.random() * 1000),
            itemStyle: {borderColor : "#00FF00"},
            parentName: obj.name,
            leaf: true
        };
        let children = [randomCount_satisfy,randomCount_no_satisfy];
        obj.children = children;
    }
}

recursion(treeData,0,0);

let ownerIndexViewOption = {
    title: {
        text: "",
        top: 10,
        left: 10
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',
            data: [treeData],
            top: '18%',
            bottom: '14%',
            symbolSize: 10,
            initialTreeDepth: 3,
            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },
            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12
                }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};

export {ownerIndexViewOption, treeData}