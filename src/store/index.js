import {
  createStore, applyMiddleware, compose,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import config from '../config'
import Immutable from 'immutable'
import user from './User'

let {reduxDevToolEnable} = config
let defaultState = {
  widget: {
    currentWidget: {},
    loading: true,
    currentList:{total:0,list:[]},
    listLoading:true,
    dataLoading:false,
    deployList:[],
    listAll:[],
  },
  user: {
    list: [],
    loading: false,
    currentUser: {},
  },
  projectized:{
    loading:true,
    list:[],
    memberList:[],
    currentProject:Immutable.Map(),
  },
  authorization:{
    entities:{module:{}},
    result:[],
  },
  login: {
    //0:未登录 1:已登陆  2:已退出   4:后台请求出错或者验证不通过
    status: 1,
    submitting: false,
    redirectTarget:'/',
  },
  register: {
    status: null,
    submitting: false,
  },
  controlMenu:null,
  collapsed: false,
  notices: [],
  fetchingNotices: false,
}

const composeEnhancers =
  typeof window === 'object' &&
  reduxDevToolEnable &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose

export default createStore(
  combineReducers({user}),
  Immutable.fromJS(defaultState),
  composeEnhancers(applyMiddleware(
    thunkMiddleware
  ))
)