import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import { Link } from 'react-router-dom';
// import NoticeIcon from '../../components/NoticeIcon';
// import HeaderSearch from '../../components/HeaderSearch';
import styles from './index.css';

const { Header } = Layout;

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map((notice) => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      // transform id to item key
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = ({
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        })[newNotice.status];
        newNotice.extra = <Tag color={color} style={{ marginRight: 0 }}>{newNotice.extra}</Tag>;
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  }
  @Debounce(600)
  triggerResizeEvent() { // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  render() {
    const {
      currentUser, collapsed, fetchingNotices, isLogo,isMenu=true,controlMenu, logo,
      onNoticeVisibleChange, onMenuClick, onNoticeClear,title="",
    } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item disabled><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );
    return (
      <Header className={styles.header}>
        {isLogo && (
          <React.Fragment>
             <Link to="/" className={styles.logo}>
                <img src={logo} alt="logo" width="32" />
             </Link>
            <Divider type="vertical"/>
            {title&&<div className={styles.title}><h2>{title}</h2></div>}
          </React.Fragment>
        )}
        {isMenu&&
        <React.Fragment>
          <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        {title&&<div className={styles.title}><h2>{title}</h2></div>}
        </React.Fragment>
        }
        {controlMenu!==null&&controlMenu}
        <div className={styles.right}>
            <Dropdown overlay={menu}>
              <span className={`${styles.action} ${styles.account}`}>
                <Avatar className={styles.avatar} src={currentUser.avatar||'/static/image/avatar/timg.jpg'} />
                <span className={styles.name}>普通用户</span>
              </span>
            </Dropdown>
        </div>
      </Header>
    );
  }
}
