const level_1 = 10;
const level_2 = 8;
const level_3 = 6;
let indexDatas =  [
    {
        "name": "外观造型",
        "symbolSize": level_1,
        "category": "外观造型",
        "draggable": "true"
    }, {
        "name": "外观造型_其他",
        "symbolSize": level_2,
        "category": "外观造型",
        "draggable": "true",
    }, {
        "name": "前脸整体印象",
        "symbolSize": level_2,
        "category": "外观造型",
        "draggable": "true",
    },{
        "name": "侧面整体印象",
        "symbolSize": level_2,
        "category": "外观造型",
        "draggable": "true",
    },{
        "name": "尾部整体印象",
        "symbolSize": level_2,
        "category": "外观造型",
        "draggable": "true",
    },{
        "name": "整体协调性",
        "symbolSize": level_2,
        "category": "外观造型",
        "draggable": "true",
    },{
        "name": "造型风格",
        "symbolSize": level_2,
        "category": "外观造型",
        "draggable": "true",
    }, {
        "name": "内饰造型",
        "symbolSize": level_1,
        "category": "内饰造型",
        "draggable": "true"
    },{
        "name": "内饰造型_其他",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "仪表/方向盘区域",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "中控区域",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "前中央通道控制台区域",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "门板和立柱造型",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "座椅造型",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "内饰整体协调性",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    },{
        "name": "内饰造型风格",
        "symbolSize": level_2,
        "category": "内饰造型",
        "draggable": "true",
    }, {
        "name": "外观品质",
        "symbolSize": level_1,
        "category": "外观品质",
        "draggable": "true"
    },{
        "name": "外观品质_其他",
        "symbolSize": level_2,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "外部品质",
        "symbolSize": level_2,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "漆面质感",
        "symbolSize": level_3,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "外部缝隙宽度、均匀度、视觉品质等",
        "symbolSize": level_3,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "装饰件品质",
        "symbolSize": level_3,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "外部操作品质",
        "symbolSize": level_2,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "车门开闭品质",
        "symbolSize": level_3,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "车窗开闭品质",
        "symbolSize": level_3,
        "category": "外观品质",
        "draggable": "true",
    },{
        "name": "后备箱、引擎盖等其他部件的开闭品质",
        "symbolSize": level_3,
        "category": "外观品质",
        "draggable": "true",
    }, {
        "name": "内饰品质",
        "symbolSize": level_1,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "内饰品质_其他",
        "symbolSize": level_2,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "内部品质",
        "symbolSize": level_2,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "仪表台品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "中控品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "门板立柱品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "座椅品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "遮阳板、顶棚、地毯品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "车内灯光效果",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "换挡杆品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "方向盘品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "行李箱品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "中央扶手品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "按钮/开关品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "内部缝隙宽度、均匀度、视觉品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "内部操作品质",
        "symbolSize": level_2,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "车内盖板操作品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    },{
        "name": "开关按键、旋钮、内把手等操作品质",
        "symbolSize": level_3,
        "category": "内饰品质",
        "draggable": "true",
    }, {
        "name": "动力性",
        "symbolSize": level_1,
        "category": "动力性",
        "draggable": "true"
    },{
        "name": "动力性_其他",
        "symbolSize": level_2,
        "category": "动力性",
        "draggable": "true",
    },{
        "name": "起步性能(0-20km/h)",
        "symbolSize": level_2,
        "category": "动力性",
        "draggable": "true",
    },{
        "name": "城市路况动力性（20-80km/h）",
        "symbolSize": level_2,
        "category": "动力性",
        "draggable": "true",
    },{
        "name": "高速路况(80km/h以上)动力性",
        "symbolSize": level_2,
        "category": "动力性",
        "draggable": "true",
    },{
        "name": "油门踏板响应",
        "symbolSize": level_2,
        "category": "动力性",
        "draggable": "true",
    },{
        "name": "爬坡能力",
        "symbolSize": level_2,
        "category": "动力性",
        "draggable": "true",
    }, {
        "name": "驾驶操控性",
        "symbolSize": level_1,
        "category": "驾驶操控性",
        "draggable": "true",
    },{
        "name": "驾驶操控性_其他",
        "symbolSize": level_2,
        "category": "驾驶操控性",
        "draggable": "true",
    },{
        "name": "转向性能（转向力、精准度）",
        "symbolSize": level_2,
        "category": "驾驶操控性",
        "draggable": "true",
    },{
        "name": "稳定性（跑偏、发飘）",
        "symbolSize": level_2,
        "category": "驾驶操控性",
        "draggable": "true",
    },{
        "name": "换挡操作（顺畅感、反馈感、操作力）",
        "symbolSize": level_2,
        "category": "驾驶操控性",
        "draggable": "true",
    }, {
        "name": "便利性",
        "symbolSize": level_1,
        "category": "便利性",
        "draggable": "true",
    },{
        "name": "便利性_其他",
        "symbolSize": level_2,
        "category": "便利性",
        "draggable": "true",
    },{
        "name": "按键操作/调节便利性",
        "symbolSize": level_2,
        "category": "便利性",
        "draggable": "true",
    },{
        "name": "取置物便利性",
        "symbolSize": level_2,
        "category": "便利性",
        "draggable": "true",
    },{
        "name": "人员进出便利性（前排/后排）",
        "symbolSize": level_2,
        "category": "便利性",
        "draggable": "true",
    },{
        "name": "信息娱乐接口便利性",
        "symbolSize": level_2,
        "category": "便利性",
        "draggable": "true",
    }, {
        "name": "安全性",
        "symbolSize": level_1,
        "category": "安全性",
        "draggable": "true",
    },{
        "name": "安全性_其他",
        "symbolSize": level_2,
        "category": "安全性",
        "draggable": "true",
    },{
        "name": "视野",
        "symbolSize": level_2,
        "category": "安全性",
        "draggable": "true",
    },{
        "name": "行车灯光照明度",
        "symbolSize": level_2,
        "category": "安全性",
        "draggable": "true",
    },{
        "name": "刹车性能",
        "symbolSize": level_2,
        "category": "安全性",
        "draggable": "true",
    },{
        "name": "驻车功能",
        "symbolSize": level_2,
        "category": "安全性",
        "draggable": "true",
    },{
        "name": "碰撞星级",
        "symbolSize": level_2,
        "category": "安全性",
        "draggable": "true",
    }, {
        "name": "使用经济性",
        "symbolSize": level_1,
        "category": "使用经济性",
        "draggable": "true",
    },{
        "name": "使用经济性_其他",
        "symbolSize": level_2,
        "category": "使用经济性",
        "draggable": "true",
    },{
        "name": "油耗",
        "symbolSize": level_2,
        "category": "使用经济性",
        "draggable": "true",
    },{
        "name": "电耗",
        "symbolSize": level_2,
        "category": "使用经济性",
        "draggable": "true",
    }, {
        "name": "舒适性",
        "symbolSize": level_1,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "舒适性_其他",
        "symbolSize": level_2,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "座椅舒适",
        "symbolSize": level_2,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "座椅舒适性",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "座椅操作舒适",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "扶手舒适性",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "环境舒适性",
        "symbolSize": level_2,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "车内环境舒适",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "怠速及噪音",
        "symbolSize": level_2,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "怠速舒适性",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "加/减速车内噪音",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "风噪",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "车内隔音效果（静止状态）",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "道路噪音",
        "symbolSize": level_3,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "行驶平稳",
        "symbolSize": level_2,
        "category": "舒适性",
        "draggable": "true",
    },{
        "name": "动力平顺性",
        "symbolSize": level_2,
        "category": "舒适性",
        "draggable": "true",
    }, {
        "name": "乘坐空间",
        "symbolSize": level_1,
        "category": "乘坐空间",
        "draggable": "true",
    },{
        "name": "乘坐空间_其他",
        "symbolSize": level_2,
        "category": "乘坐空间",
        "draggable": "true",
    },{
        "name": "前排空间",
        "symbolSize": level_2,
        "category": "乘坐空间",
        "draggable": "true",
    },{
        "name": "第二排空间",
        "symbolSize": level_2,
        "category": "乘坐空间",
        "draggable": "true",
    },{
        "name": "空间可调性",
        "symbolSize": level_2,
        "category": "乘坐空间",
        "draggable": "true",
    },{
        "name": "第三排空间",
        "symbolSize": level_2,
        "category": "乘坐空间",
        "draggable": "true",
    }, {
        "name": "储物空间",
        "symbolSize": level_1,
        "category": "储物空间",
        "draggable": "true"
    },{
        "name": "储物空间_其他",
        "symbolSize": level_2,
        "category": "储物空间",
        "draggable": "true",
    },{
        "name": "行李箱空间",
        "symbolSize": level_2,
        "category": "储物空间",
        "draggable": "true",
    },{
        "name": "车内储物空间",
        "symbolSize": level_2,
        "category": "车内储物空间",
        "draggable": "true",
    }, {
        "name": "通过性",
        "symbolSize": level_1,
        "category": "通过性",
        "draggable": "true",
    },{
        "name": "通过性_其他",
        "symbolSize": level_2,
        "category": "通过性",
        "draggable": "true",
    },{
        "name": "各路况下的通过性",
        "symbolSize": level_2,
        "category": "通过性",
        "draggable": "true",
    },{
        "name": "最小离地间隙",
        "symbolSize": level_2,
        "category": "通过性",
        "draggable": "true",
    }, {
        "name": "智能信息娱乐系统",
        "symbolSize": level_1,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "智能信息娱乐系统_其他",
        "symbolSize": level_2,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "信息音响系统",
        "symbolSize": level_2,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "显示屏技术",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "仪表盘技术",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "音响",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "智能网联系统",
        "symbolSize": level_2,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "导航和定位",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "远程控制",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "人车交互控制",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "智能安全辅助",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "生活娱乐服务",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "社交和共享",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "升级与识别学习能力",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "定制化",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    },{
        "name": "使用成本",
        "symbolSize": level_3,
        "category": "智能信息娱乐系统",
        "draggable": "true",
    }, {
        "name": "新能源特性",
        "symbolSize": level_1,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "新能源特性_其他",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "电池质量及稳定性",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "续航里程",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "充电时长",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "充电便利性",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "能量管理",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "能量信息显示",
        "symbolSize": level_2,
        "category": "新能源特性",
        "draggable": "true",
    },{
        "name": "其他",
        "symbolSize": level_1,
        "category": "其他",
        "draggable": "true",
    }
];

export default indexDatas