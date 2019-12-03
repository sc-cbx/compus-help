import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Collapse} from 'antd';
const {Panel}=Collapse;
var Message_listCss =require("./Message_list/message_list.css");
export default class RealName extends React.Component{
    render(){
        return(
            <div>
                 <Collapse bordered={false} className={Message_listCss.col} defaultActiveKey={['1']}>
                    <Panel header="我的订单" key="1">
                    <ul>
                    <li  className={Message_listCss.item}><Link to="/personal/allorder/no_buy_one" className={Message_listCss.color}>全部订单</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/allorder/waitgivemoney" className={Message_listCss.color}>待付款</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/allorder/waitgetgood" className={Message_listCss.color}>待收货</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/allorder/waitevaluate" className={Message_listCss.color}>待评价</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/allorder/returngood" className={Message_listCss.color}>退款退货</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/allorder/recyleorder" className={Message_listCss.color}>订单回收</Link></li>
                    </ul>
                    </Panel>

                    <Panel header="我的钱包" key="2">
                    <ul>
                    <li  className={Message_listCss.item}><Link to="/mywallet/first_page" className={Message_listCss.color}>我的钱包</Link></li>
                   </ul>
                    </Panel>


                    <Panel header="消息中心" key="3">
                    <ul>
                    <li  className={Message_listCss.item}><Link to="/personal/news" className={Message_listCss.color}>消息中心</Link></li>
                    </ul>
                    </Panel>

                    <Panel header="地址管理" key="4">
                    <ul>
                    <li  className={Message_listCss.item}><Link to="/personal/address" className={Message_listCss.color}>地址管理</Link></li>
                    </ul>
                    </Panel>

                    <Panel header="安全设置" key="5">
                    <ul>
                    <li  className={Message_listCss.item}><Link to="/personal/setpassword" className={Message_listCss.color}>密码设置</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/bindingphone" className={Message_listCss.color}>绑定邮箱</Link></li>
                    <li  className={Message_listCss.item}><Link to="/mywallet/zhanghao/zhanghao_shiming" className={Message_listCss.color}>实名认证</Link></li>
                    <li  className={Message_listCss.item}><Link to="/userlocked" className={Message_listCss.color}>账户锁定</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/userdelete" className={Message_listCss.color}>账户注销</Link></li>
                    </ul>
                    </Panel>

                    <Panel header="账号设置" key="6">
                    <ul>
                    <li  className={Message_listCss.item}><Link to="/personal/information" className={Message_listCss.color}>基本信息</Link></li>
                    <li  className={Message_listCss.item}><Link to="/personal/changeheadphone" className={Message_listCss.color}>修改头像</Link></li>
                    </ul>
                    </Panel>
                 </Collapse>
            </div>
        )
    }
}
