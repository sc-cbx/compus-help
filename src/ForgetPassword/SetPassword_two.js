import React from 'react';
import {Link}  from 'react-router-dom';

var SetPassword_twoCss =require('./SetPassword_two.css');
export default class SetPassword_two extends React.Component{
    render(){
        return(
            <div className={SetPassword_twoCss.all}>
                <form classNam={SetPassword_twoCss.form}>
        <p>以向你的邮箱152*****342qq.com发送验证码，请在下方输入：</p>
                    <tr>
                        <td>验证码：</td>
                        <td> <input className={SetPassword_twoCss.input_one} type="text" /></td>
                        <td> <input className={SetPassword_twoCss.input_two} type="submit" name="发送验证码" value="发送验证码"/></td>
                        
                    </tr>

                  <Link to="/forgetpassword/setpassword_three"><input className={SetPassword_twoCss.submit} type="submit" name="下一步" value="下一步"/></Link>
                </form>
            </div>
        )
    }
}