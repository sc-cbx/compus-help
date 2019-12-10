import React from 'react';


import {Button} from 'antd';
var User_lockedCss=require('./User_locked.css')
export default class User_locked extends React.Component{
    render(){
        return(
            <div className={User_lockedCss.set_color}>
                 <div className={User_lockedCss.set_img} >
                     <div className={User_lockedCss.logo}><h3>校园帮safe</h3></div>
                     <div className={User_lockedCss.center}>
                         <div className={User_lockedCss.center_xingxi}>

                             
                                  {/* //信息 */}
                             <div className={User_lockedCss.title}>
                                 <p><span>|</span>用户锁定</p>
                             </div>


                             <div className={User_lockedCss.center_leirong}>
                                 <div className={User_lockedCss.leirong}>
                                     <div className={User_lockedCss.top}>
                                         <div className={User_lockedCss.phone}>手机号：12345677890</div>
                                         <input className={User_lockedCss.button} type="submit" name="获取验证码" value="获取验证码"/>
                                     </div>

                                     <form>
                                     <div className={User_lockedCss.buttom}>
                                         <p><span>*</span>验证码：</p>
                                         <input className={User_lockedCss.yanzhenpassword} type="yanzhengma" name="yanzhengma"  placeholder="请输入"/>
                                         <tr></tr>
                                         <input className={User_lockedCss.submit} type="submit" name="确认" value="确认" />
                                     </div>
                                     </form>

                                 </div>
                             </div>

                         </div>
                         <div className={User_lockedCss.bottom}><p>@2019校园帮&nbsp;&nbsp;&nbsp;localhost:3000&nbsp;&nbsp;拾荒小分队</p></div>
                     </div>
                 </div>
            </div>
           
        )
    }
}
