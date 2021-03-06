import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, message } from 'antd'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import GlobalHeader from '../components/GlobalHeader'
import SiderMenu from '../components/SiderMenu'
import { getRoutes } from '../utils'
import { getMenuData } from '../routes/menu'
import { fetchCurrentUser } from '../store/User/action'
import Immutable from 'immutable'
import { Error404 } from '../routes/Error'

import logo from '../assets/logo/logo.png'

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = []
const getRedirect = (item) => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `/${item.path}`,
        to: `/${item.children[0].path}`,
      })
      item.children.forEach((children) => {
        getRedirect(children)
      })
    }
  }
}
getMenuData().forEach(getRedirect)

const {Content} = Layout

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
}

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }

  getChildContext () {
    const {location, routerData: breadcrumbNameMap} = this.props
    return {location, breadcrumbNameMap}
  }

  componentDidMount () {
    this.props.dispatch(fetchCurrentUser())
  }

  getPageTitle () {
    const {routerData, location} = this.props
    const {pathname} = location
    let title = '广汽用户洞察系统';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} `
    }
    return title
  }

  handleMenuCollapse = (collapsed) => {

  }

  handleMenuClick = ({key}) => {

  }

  handleNoticeClear = (type) => {
    message.success(`清空了${type}`)

  }

  handleNoticeVisibleChange = (visible) => {

  }

  render () {
    const {
      currentUser, collapsed, fetchingNotices, notices, routerData, match, location,
    } = this.props
    const {name:projectTitle}=this.props.currentProject;

    const layout = (
      <Layout>
        {/*<SiderMenu*/}
          {/*collapsed={collapsed}*/}
          {/*location={location}*/}
          {/*onCollapse={this.handleMenuCollapse}*/}
        {/*/>*/}
        <Layout>
          {/*<GlobalHeader*/}
            {/*logo={logo}*/}
            {/*currentUser={currentUser}*/}
            {/*fetchingNotices={fetchingNotices}*/}
            {/*notices={notices}*/}
            {/*collapsed={collapsed}*/}
            {/*title={projectTitle}*/}
            {/*onNoticeClear={this.handleNoticeClear}*/}
            {/*onCollapse={this.handleMenuCollapse}*/}
            {/*onMenuClick={this.handleMenuClick}*/}
            {/*onNoticeVisibleChange={this.handleNoticeVisibleChange}*/}
          {/*/>*/}
          {/*<Content style={{margin: '24px 24px 0', height: '100%'}}>*/}
          <Content style={{margin: '0', height: '100%'}}>
            {/*<div style={{minHeight: 'calc(100vh - 100px)'}}>*/}
            <div style={{minHeight: 'calc(100vh )'}}>
              <Switch>
                {
                  getRoutes(match.path, routerData).map(item =>
                    (
                      <Route
                        exact={item.exact}
                        key={item.path}
                        path={item.path}
                        component={item.component}
                      />
                    )
                  )
                }
                <Redirect exact from="/" to="/performance/relationShip"/>
                <Route render={Error404}/>
              </Switch>
            </div>

          </Content>
        </Layout>
      </Layout>
    )

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    )
  }
}

export default connect(state => {
  let currentUser = state.getIn(['user', 'currentUser'], Immutable.Map())
  return {
    currentProject: state.getIn(['projectized', 'currentProject'], Immutable.Map()).toObject(),
    currentUser: currentUser.toObject(),
    collapsed: state.get('collapsed'),
    fetchingNotices: state.get('fetchingNotices'),
    notices: state.get('notices').toArray(),
  }
})(BasicLayout)
