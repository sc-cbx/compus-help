import React from 'react';
import 'antd/dist/antd.css';
import { Button, Collapse } from 'antd';
import Message_list from './Message_list/message_list';


 const {Panel}=Collapse
var PeraonalCss=require('./personal.css');

const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
)

export default class Peraonal extends React.Component{
   

 

   
    render(){
      
   
        return(
       
        <div>
                 {/* <Button onClick={this.bbb}>按钮</Button> */}
            {/* 这里是头部 */}
            <div className={PeraonalCss.heard}>
              <div className={PeraonalCss.leirong}>头部</div>
            </div>
            {/* 这里是个人中心的页面 */}
            <div className={PeraonalCss.center_message}>
                {/* 左侧栏 */}
                <div className={PeraonalCss.left_message}>
                    {/* 头像 */}
                    <div className={PeraonalCss.photo}>头像</div>
                    {/* 信息列表 */}
                    <div className={PeraonalCss.message_list}>
                      <Message_list></Message_list>
                    <Button type="primary">我真的是一个组件吗</Button>
               
{/*                     
                    <Collapse accordion>
                     
                         <Panel hearder="我的订单" key="1">
                            <ul className={PeraonalCss.u_order}>
                                {text}
                             <li>全部订单</li>
                             <li>待付款</li>
                             <li>待收货</li>
                             <li>待评价</li>
                             <li>退款退货</li>
                             <li>订单回收站</li>
                         </ul>
                             
                         </Panel>

                         <Panel hearder="我的钱包" key="2">
                             
                         </Panel>

                         <Panel hearder="会员中心" key="3">
                         <ul className={PeraonalCss.u_member}>
                             <li>会员中心</li>
                         </ul>
                         </Panel>

                         <Panel hearder="地址管理" key="4">

                         </Panel>

                         <Panel hearder="安全设置" key="5">
                         <ul className={PeraonalCss.u_security}>
                             <li>设置密码</li>
                             <li>绑定手机</li>
                             <li>实名认证</li>
                             <li>账户锁定</li>
                             <li>账户注销</li>
                         </ul>
                         </Panel>

                         <Panel hearder="账号设置" key="6">
                         <ul className={PeraonalCss.u_account}>
                             <li>基本信息</li>
                             <li>修改头像</li>
                         </ul>
                         </Panel>

                    </Collapse> */}

                    {/* 订单信息 */}
                   
                      {/* <div className={PeraonalCss.order}>
                         <div className={PeraonalCss.font}>我的订单</div>
                         <ul className={PeraonalCss.u_order}>
                             <li>全部订单</li>
                             <li>待付款</li>
                             <li>待收货</li>
                             <li>待评价</li>
                             <li>退款退货</li>
                             <li>订单回收站</li>
                         </ul>

                    </div> */}


                      {/* 钱包 */}
                     {/* <div className={PeraonalCss.money}>
                         <div className={PeraonalCss.font}>我的钱包</div>
                     </div> */}


                      {/* 会员中心 */}
                     {/* <div className={PeraonalCss.member}>
                         <div className={PeraonalCss.font}>优惠特权</div>
                         <ul className={PeraonalCss.u_member}>
                             <li>会员中心</li>
                         </ul>
                    </div>  */}

                    {/* 地址管理 */}
                     {/* <div className={PeraonalCss.adderss}>
                          <div className={PeraonalCss.font}>地址管理</div>>
                     </div> */}

                     {/* 安全设置 */}
                     {/* <div className={PeraonalCss.security}>
                         <div className={PeraonalCss.font}>安全设置</div>
                         <ul className={PeraonalCss.u_security}>
                             <li>设置密码</li>
                             <li>绑定手机</li>
                             <li>实名认证</li>
                             <li>账户锁定</li>
                             <li>账户注销</li>
                         </ul>
                    </div> */}

                     {/* 账号设置 */}
                     {/* <div className={PeraonalCss.account}>
                         <div className={PeraonalCss.font}>账号设置</div>
                         <ul className={PeraonalCss.u_account}>
                             <li>基本信息</li>
                             <li>修改头像</li>
                         </ul>
                    </div> */}


                    </div>
                </div>  
                <div className={PeraonalCss.right_message}></div>


            </div>
            {/* 这里是尾部 */}
            <div className={PeraonalCss.flooer}></div>
            
            <div >

            </div>
        </div>
        )
    
    }
}