import React from 'react';
import { Progress } from "antd";
import {Link} from 'react-router-dom';

var User_safetyCss=require('./User_safety.css')
export default class User_safety extends React.Component{
    render(){
        return(
            <div className={User_safetyCss.set_color}>
            <div className={User_safetyCss.set_img} >
                <div className={User_safetyCss.logo}><h3>校园帮safe</h3></div>
                <div className={User_safetyCss.center}>
                    <div className={User_safetyCss.center_xingxi}>
                         <div className={User_safetyCss.safe_top}>
                             <div className={User_safetyCss.title}><p>您的账户安全得分</p></div>
                             <div className={User_safetyCss.safe_check}>
                                 <div className={User_safetyCss.safe_score}>
                                    <Progress  type="circle" percent={60} format={percent => `${percent} 分`} />
                                </div>
                             </div>
                         </div>

                         <div className={User_safetyCss.safe_buttom}>
                               <p>未实名认证？去<Link to="/mywallet/zhanghao/zhanghao_shiming">认证</Link></p>
                               <p>未绑定手机？去<Link to="/personal/bindingphone">绑定</Link></p>
                             </div>
                    </div>
                    <div className={User_safetyCss.bottom}><p>@2019校园帮&nbsp;&nbsp;&nbsp;localhost:3000&nbsp;&nbsp;拾荒小分队</p></div>
                </div>
            </div>
       </div>
        )
    }
}
