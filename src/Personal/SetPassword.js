import React from 'react';


var SetPasswordCss=require('./SetPassword.css')
export default class SetPassword extends React.Component{
    render(){
        return(
            <div className={SetPasswordCss.setpassword}>
                <div className={SetPasswordCss.password_head}>用户密码</div>
                <div className={SetPasswordCss.password_center}>
                    <div className={SetPasswordCss.password_form}>
                        <form>
                           
                                    <tr>
                                        <td className={SetPasswordCss.td_width}>&nbsp;&nbsp;&nbsp;新密码：</td>
                                        <td><input className={SetPasswordCss.newpass} type="newpassword" name="newpassword"/></td>
                                    </tr>

                                    <tr>
                                        <td className={SetPasswordCss.td_width}>确认密码:</td>
                                        <td><input className={SetPasswordCss.conpass}  type="c_password" name="c_password"/></td>
                                    </tr>

                                    
                                        <input className={SetPasswordCss.submit} type="submit" name="确认" value="确认"/>
                              
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
