import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Error403, Error404, Error500 } from './Error'
import { Spin } from 'antd'
import { getMenuData } from './menu'
import dynamic from './dynamic';
import CompetitiveAnalysis from '../../src/components/CompetitiveAnalysis'
import Relationship from '../../src/components/Relationship'

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" style={{width: '100%',margin: '40px 0 !important'}} />;
});

const routerData = {
  '/': {
    component: BasicLayout,
  },
  '/performance/CompetitiveAnalysis':{
    component:CompetitiveAnalysis,
  },
  '/performance/relationShip':{
    component:Relationship,
  },
  '/error/403':{
    component:Error403,
  },
  '/error/404':{
    component:Error404,
  },
  '/error/500':{
    component:Error500,
  },
};

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = item.name;
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = item.name;
    }
  });
  return keys;
}

export function getRouterData(){
  const rawMenu=getMenuData();
  const menuData = getFlatMenuData(rawMenu);
  const routerDataWithName = {};

  Object.keys(routerData).forEach((item) => {
    routerDataWithName[item] = {
      ...routerData[item],
      name: routerData[item].name || menuData[item.replace(/^\//, '')],
    };
  });
  return routerDataWithName;
}

