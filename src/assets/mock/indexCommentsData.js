import indexDatas from './indexDetail'
import clone from 'lodash/cloneDeep'

let cloneDatas = clone(indexDatas);
const level_1 = 10;
const level_2 = 8;
const level_3 = 6;

let level_1_nodes = [
    {
        "name": "汽车",
        "symbolSize": 20,
        id: 0,
    }
];

// 节点映射，存放二三四级节点
let nodeMap = {};

let links = [];

let tempParentId = '';
let lv2ParentId = '';
let tempId = 1;
for (let _i = 0; _i < cloneDatas.length; _i++) {
    let node = cloneDatas[_i];
    delete node.draggable;
    node.id = tempId ++;
    node.loadData = false;
    // node.fixed = true;
    if (node.symbolSize === level_1) {
        node.level = 1;
        node.index = level_1_nodes.length;
        level_1_nodes.push(node);
        tempParentId = node.id;
        // 添加链接数据
        links.push({target: level_1_nodes.length - 1,source:0, targetId: node.id, sourceId: 0});
    } else  {
        let parentId = tempParentId;
        if (node.symbolSize === level_2) {
            lv2ParentId = node.id;
            node.level = 2;
            if (cloneDatas[_i + 1]['symbolSize'] !== level_3) {
                addRandomComments(node);
            }
        } else {
            parentId = lv2ParentId;
            node.level = 3;
            addRandomComments(node);
        }
        let nodeArr = nodeMap[parentId] ;
        if (!nodeArr) {
            nodeArr = [];
            nodeMap[parentId] = nodeArr
        }
        nodeArr.push(node);
    }
}


function addRandomComments(node) {
    let value_1 = Math.floor( Math.random() * 1000 );
    let randomCount_satisfy = {
        name : "非常满意(" + value_1 +")",
        id: tempId ++,
        parentName: node.name,
        symbolSize: level_3,
        category: node.category,
        itemStyle: {
            color: "red"
        },
        leaf: true
    };

    let value_2 = Math.floor( Math.random() * 100 );

    let randomCount_no_satisfy = {
        name : "不满意(" + value_2 +")",
        id: tempId ++,
        parentName: node.name,
        symbolSize: level_3,
        category: node.category,
        itemStyle: {
            color: "green"
        },
        leaf: true
    };

    let nodeArr = nodeMap[node.id] ;
    if (!nodeArr) {
        nodeArr = [];
        nodeMap[node.id] = nodeArr
    }
    nodeArr.push(randomCount_satisfy);
    nodeArr.push(randomCount_no_satisfy);
}
console.log(level_1_nodes);
export {level_1_nodes,nodeMap, links}