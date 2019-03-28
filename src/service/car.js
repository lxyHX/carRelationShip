import { requestForm,requestJSON, apiPrefix } from './index'

/**
 *  {
 *       carId: 0,
         code: 'G01',
         positive: 1,
 *  }
 * @param option
 * @returns {{success: boolean, data: {tags: *[], values: *[]}}}
 */
export function queryCommentCountByTagCode (option) {
  return requestJSON(apiPrefix + '/queryCommentCountByTagCode', { method: 'POST',body: option},false)
  //   return {
  //       success: true,
  //       data: {
  //         tags: [
  //             {
  //           name: 'A',
  //           id:'a'},{
  //           name: 'B',
  //           id:'B'},{
  //           name: 'C',
  //           id:'C'},{
  //           name: 'D',
  //           id:'D'},
  //         ],
  //         values: [
  //             [
  //                 Math.floor(Math.random()* 100) ,
  //                 Math.floor(Math.random()* 100) ,
  //                 Math.floor(Math.random()* 100) ,
  //                 Math.floor(Math.random()* 100) ,
  //             ],
  //             [
  //                 Math.floor(Math.random()* 100) ,
  //                 Math.floor(Math.random()* 100) ,
  //                 Math.floor(Math.random()* 100) ,
  //                 Math.floor(Math.random()* 100) ,
  //             ],
  //         ],
  //       },
  //   }
}

// 获取车辆信息，如果参数为空，则获取所有自有车型 和 竞争车型
// 如果有参数，怎根据参数获取结果
// 参数： {
//     ownerCar: "", 
//     competitors: [],
// }
export function queryCarList (option) {
  return requestJSON(apiPrefix + '/queryCarList', { method: 'POST',body: option},false)
  // return {
  //   success: true,
  //     data : {
  //         ownerCars: [
  //             {
  //                 "value": "传祺 GS4",
  //                 "label": "传祺 GS4",
  //                 "children": [{
  //                     "value": "2017款",
  //                     "label": "2017款",
  //                     "children": [{
  //                         id : 0,
  //                         "value": "1.3T 手动 200T 舒适版 9万",
  //                         "label": "1.3T 手动 200T 舒适版 9万",
  //                     }, {
  //                         id : 1,
  //                         "value": "1.3T 手动 200T 精英版 10万",
  //                         "label": "1.3T 手动 200T 精英版 10万",
  //                     }, {
  //                         id : 2,
  //                         "value": "1.3T 手动 200T 豪华版 12万",
  //                         "label": "1.3T 手动 200T 豪华版 12万",
  //                     }],
  //                 },
  //                     {
  //                         "value": "2018款",
  //                         "label": "2018款",
  //                         "children": [{
  //                             id : 3,
  //                             "value": "1.3T 手动 200T 舒适版 9万",
  //                             "label": "1.3T 手动 200T 舒适版 9万",
  //                         }, {
  //                             id : 4,
  //                             "value": "1.3T 手动 200T 精英版 10万",
  //                             "label": "1.3T 手动 200T 精英版 10万",
  //                         }, {
  //                             id : 5,
  //                             "value": "1.3T 手动 200T 豪华版 12万",
  //                             "label": "1.3T 手动 200T 豪华版 12万",
  //                         }],
  //                     }],
  //             }, {
  //                 "value": "传祺 GS5",
  //                 "label": "传祺 GS5",
  //                 "children": [{
  //                     "value": "2019款",
  //                     "label": "2019款",
  //                     "children": [{
  //                         id : 6,
  //                         "value": "1.5T 自动 235T 舒适版 10.98万",
  //                         "label": "1.5T 自动 235T 舒适版 10.98万",
  //                     },  {
  //                         id : 7,
  //                         "value": "1.5T 自动 270T 精英版 13.38万",
  //                         "label": "1.5T 自动 270T 精英版 13.38万",
  //                     },{
  //                         id : 8,
  //                         "value": "1.5T 自动 235T 豪华版 14.38万",
  //                         "label": "1.5T 自动 235T 豪华版 14.38万",
  //                     }],
  //                 }],
  //             }],
  //         competitorCars: [
  //             {
  //                 "value": "荣威RX5",
  //                 "label": "荣威RX5",
  //                 "children": [
  //                     {
  //                         "value": "2018款",
  //                         "label": "2018款",
  //                         "children": [{
  //                             id : 0,
  //                             "value": "20T 两驱自动互联网智惠版 14.38万",
  //                             "label": "20T 两驱自动互联网智惠版 14.38万",
  //                         }, {
  //                             id : 1,
  //                             "value": "20T 两驱自动互联网智尊版 15.88万",
  //                             "label": "20T 两驱自动互联网智尊版 15.88万",
  //                         }],
  //                     } , {
  //                         "value": "2019款",
  //                         "label": "2019款",
  //                         "children": [{
  //                             id : 2,
  //                             "value": "20T 两驱手动精英版 9.98万",
  //                             "label": "20T 两驱手动精英版 9.98万",
  //                         }, {
  //                             id : 3,
  //                             "value": "20T 两驱手动旗舰版 11.98万",
  //                             "label": "20T 两驱手动旗舰版 11.98万",
  //                         }, {
  //                             id : 4,
  //                             "value": "20T 两驱手动4G互联铂金版 11.98万",
  //                             "label": "20T 两驱手动4G互联铂金版 11.98万",
  //                         }, {
  //                             id : 5,
  //                             "value": "20T 两驱自动豪华版 12.98万",
  //                             "label": "20T 两驱自动豪华版 12.98万",
  //                         }],
  //                     }],
  //             },
  //         ],
  //     },
  // }
}

// 获取一级指标信息
export function queryFirstLevelTag () {
    return requestJSON(apiPrefix + '/queryFirstLevelTag', { method: 'POST',body: {}},false)
    // return {
    //     success: true,
    //     data: [
    //         {
    //         'name': '外观造型',
    //          id: "G01",
    //         'max': 5},
    //         {
    //         'name': '内饰造型',
    //             id: "G02",
    //         'max': 5},
    //         {
    //         'name': '外观品质',
    //             id: "G03",
    //         'max': 5},
    //         {
    //         'name': '内饰品质',
    //             id: "G04",
    //         'max': 5},
    //         {
    //         'name': '动力性',
    //             id: "G05",
    //         'max': 5},
    //         {
    //         'name': '驾驶操控性',
    //             id: "G00",
    //         'max': 5},
    //         {
    //         'name': '便利性',
    //             id: "G06",
    //         'max': 5},
    //         {
    //         'name': '安全性',
    //             id: "G07",
    //         'max': 5},
    //         {
    //         'name': '使用经济性',
    //             id: "G08",
    //         'max': 5},
    //         {
    //         'name': '舒适性',
    //             id: "G09",
    //         'max': 5}, {
    //         'name': '乘坐空间',
    //             id: "G10",
    //         'max': 5},
    //         {
    //         'name': '储物空间',
    //             id: "G11",
    //         'max': 5}, {
    //         'name': '通过性',
    //             id: "G12",
    //         'max': 5}, {
    //         'name': '智能信息娱乐系统',
    //             id: "G13",
    //         'max': 5}, {
    //         'name': '新能源特性',
    //             id: "G14",
    //         'max': 5}],
    // }
}

// 获取车型的正负面综合评分数据
/**
 *  {
 *      ownerCarId: 0,
 *      competitorCarId: 1
 *  }
 * @param option
 */
export function queryCompositeScore (option) {
    return requestJSON(apiPrefix + '/queryCompositeScore', { method: 'POST',body: option},false)
    // return {
    //     success: true,
    //     data:{
    //         tags: [],
    //         positive: [
    //             [
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //             ],
    //             [
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //             ],
    //         ],
    //         negative: [
    //             [
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //             ],
    //             [
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //                 (Math.random()*5).toFixed(1),
    //             ],
    //         ],
    //     },
    // }
}

export function queryRecomContent(options) {
  return requestJSON(apiPrefix + '/queryRecomContent', { method: 'POST',body: options},false)
}

export function queryTop10FirstLevelTag(options) {
  return requestJSON(apiPrefix + '/queryTop10FirstLevelTag', { method: 'POST',body: options},false)
}
export function queryRelationShipData (urlParam) {
  return requestJSON(apiPrefix + '/getRelationShipDatas?reqCategory='+urlParam, { method: 'GET'},false)
}
