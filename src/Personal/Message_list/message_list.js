import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

var Message_listCss =require('./message_list.css');
export default class Message_list extends React.Component{
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub5','sub6','sub7'];

  state = {
    openKeys: ['null'],
  
  };


  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render(){
    return(
      <Menu 
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 198,height: 50 }}
      >
        <SubMenu  className={Message_listCss.menu}
          key="sub1"
          title={
            <span>
              <span>我的订单</span>
            </span>
          }
        >
          <Menu.Item key="1"  className={Message_listCss.item}>全部订单</Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}>待付款</Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}>待收货</Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}>待评价</Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}>退款退货</Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}>订单回收</Menu.Item>
        </SubMenu>
        <SubMenu  className={Message_listCss.menu}
          key="sub2"
          title={
            <span>
              <span>我的钱包</span>
            </span>
          }
        >
          <Menu.Item key="5"  className={Message_listCss.item}></Menu.Item>
        </SubMenu>
        <SubMenu  className={Message_listCss.menu}
          key="sub4"
          title={
            <span>
              <span>会员中心</span>
            </span>
          }
        >
          <Menu.Item key="9"  className={Message_listCss.item}>会员中心</Menu.Item>
        </SubMenu>
        < SubMenu  className={Message_listCss.menu}
          key="sub5"
          title={
            <span>
              <span>地址管理</span>
            </span>
          }
        >
          <Menu.Item key="10"  className={Message_listCss.item}></Menu.Item>
        </SubMenu>
        <SubMenu  className={Message_listCss.menu}
          key="sub6"
          title={
            <span>
              <span>安全设置</span>
            </span>
          }
        >
          <Menu.Item key="11"  className={Message_listCss.item}>设置密码</Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}>绑定手机</Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}>实名认证</Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}>用户锁定</Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}>账户注销</Menu.Item>
        </SubMenu>

        <SubMenu  className={Message_listCss.menu}
          key="sub7"
          title={
            <span>
              <span>账号设置</span>
            </span>
          }
        >
          <Menu.Item key="12"  className={Message_listCss.item}>基本信息</Menu.Item>
          <Menu.Item key="12"  className={Message_listCss.item}>修改头像</Menu.Item>
          
        </SubMenu>

        
      </Menu>
    )
  }
}
