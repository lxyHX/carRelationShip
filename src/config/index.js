/**
 * Created by lenovo on 2017/12/18.
 */
let global=window.config||{};

const defaultConfig={
  apiPrefix:'/carApi',
  enableNotification:true,
  reduxDevToolEnable:false,
  needLogin:false,
};

const devConfig={
  reduxDevToolEnable:false,
  //needLogin:false,
};

const prodConfig={

};

let config=process.env.NODE_ENV==='production'?prodConfig:devConfig;

export default {...defaultConfig,...config,...global};
