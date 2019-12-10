import React from 'react';
import {Link} from 'react-router-dom';

var SetPassword_threeCss =require('./SetPassword_three.css');
export default class SetPassword_three extends React.Component{
    render(){
        return(
            <div className={SetPassword_threeCss.all}>
                <p>*恭喜你！验证成功，请重置密码并妥善保管</p>
                <form>
                    <tr>
                        <td>新密码：</td>
                        <td><input className={SetPassword_threeCss.new_password} type="password" placeholder="设置你的密码"/></td>
                    </tr>

                    <tr>
                        <td>确认密码：</td>
                        <td><input className={SetPassword_threeCss.confirm_password} type="confirm" placeholder="重新输入你输入的密码"/></td>
                    </tr>

                 <Link to="/login">  <input className={SetPassword_threeCss.submit} type="submit" name="确认" value="确认"/></Link> 
                </form>
            </div>
        )
    }
}