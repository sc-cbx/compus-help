import React from 'react';

var BindingPhoneCss=require('./BindingPhone.css')
export default class BindingPhone extends React.Component{
    render(){
        return(
            <div className={BindingPhoneCss.all}>
                <div className={BindingPhoneCss.title}>绑定邮箱</div>
                <div className={BindingPhoneCss.center}>
                    <p>*变更绑定手机请先获得验证码</p>
                    <form className={BindingPhoneCss.youxiang}>
                        <tr>
                            <td>当前邮箱：</td>
                            <td><input className={BindingPhoneCss.input} type="text" placeholder="请输入你的邮箱"/></td>
                        </tr>

                        <tr>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;验证码：</td>
                            <td><input className={BindingPhoneCss.input} type="text" /></td>
                            <td><input className={BindingPhoneCss.yanzhenma} type="submit" name="获取验证码" value="获取验证码"/></td>
                        </tr>
                        <input className={BindingPhoneCss.submit} type="submit" name="确认" value="确认"/>

                        
                    </form>
                </div>
                
            </div>
        )
    }
}
