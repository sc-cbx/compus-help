import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

var Message_listCss =require("../Message_list/message_list.css");
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
      <div className={Message_listCss.userList}>
      
      <Menu 
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width:115 , height:0 }}
      >
        
        <SubMenu  className={Message_listCss.menu}
          key="sub1"
          title={
            <span>
              <span>我的订单</span>
            </span>
          }
        >
          <Menu.Item key="1"  className={Message_listCss.item}><Link to="/allorder">全部订单</Link></Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}><Link to="/waitgivemoney">待付款</Link></Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}><Link to="/waitgetgood">待收货</Link></Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}><Link to="/waitevaluate">待评价</Link></Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}><Link to="/returngood">退款退货</Link></Menu.Item>
          <Menu.Item key="1"  className={Message_listCss.item}><Link to="/recyleorder">订单回收</Link></Menu.Item>
        </SubMenu>
       

       
        <SubMenu  className={Message_listCss.menu}
          key="sub2"
          title={
            <span>
              <span><Link to="/mywallet">我的钱包</Link></span>
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
          <Menu.Item key="9"  className={Message_listCss.item}><Link to="/membercenter">会员中心</Link></Menu.Item>
        </SubMenu>
        


      
        < SubMenu  className={Message_listCss.menu}
          key="sub5"
          title={
            <span>
              <span><Link to="/address">地址管理</Link></span>
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
          <Menu.Item key="11"  className={Message_listCss.item}><Link to="/setpassword">设置密码</Link></Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}><Link to="/bindingphone">绑定手机</Link></Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}><Link to="/realname">实名认证</Link></Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}><Link to="/userlocked">用户锁定</Link></Menu.Item>
          <Menu.Item key="11"  className={Message_listCss.item}><Link to="/userdelete">账户注销</Link></Menu.Item>
        </SubMenu>
      


       
        <SubMenu  className={Message_listCss.menu}
          key="sub7"
          title={
            <span>
              <span>账号设置</span>
            </span>
          }
        >
          <Menu.Item key="12"  className={Message_listCss.item}><Link to="/information">基本信息</Link></Menu.Item>
          <Menu.Item key="12"  className={Message_listCss.item}><Link to="/changeheadphone">修改头像</Link></Menu.Item>
          
        </SubMenu>
       

        
      </Menu>
      </div>
    )
  }
}
