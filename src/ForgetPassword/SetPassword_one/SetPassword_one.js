import React from 'react';
import {Link} from 'react-router-dom';

var SetPassword_oneCss =require('./SetPassword_one.css');
export default class SetPassword_one extends React.Component{
    render(){
        return(
            <div className={SetPassword_oneCss.one}>
                <form className={SetPassword_oneCss.form}>
                    <tr>
                        <td>邮箱：</td>
                        <td><input className={SetPassword_oneCss.youxiang} type="text" placeholder="请输入你的邮箱" /> </td>
                    </tr>

               <Link to="/forgetpassword/setpassword_two" className={SetPassword_one.link}>  <input className={SetPassword_oneCss.next} type="submit" name="下一步" value="下一步"/></Link>  
                </form>
            </div>
        )
    }
}