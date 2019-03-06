const menuData = [
  {
    name: '市场表现',
    icon: 'dashboard',
    path: 'performance',
      children: [
          {
              name: '竞争关系图',
              icon: 'bars',
              path: 'relationShip'},
          {
              name: '竞品分析',
              icon: 'bars',
              path: 'CompetitiveAnalysis'},
      ],
  },
]

function formatter (data, parentPath = '') {
  return data.map((item) => {
    const result = {
      ...item,
      path: item.path ? `${parentPath}${item.path}` : `${parentPath}${item.match}`,
    }
    if (item.children) {
      result.children = formatter(item.children, item.path ? `${parentPath}${item.path}/` : ``)
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData)
  