import React from 'react';

var ZhangHao_shimingCss=require('./ZhangHao_shiming.css')
export default class ZhangHao_shiming extends React.Component{
    render(){
        return(
            <div className={ZhangHao_shimingCss.shiming}>
                <p>实名认证</p>
                <form className={ZhangHao_shimingCss.the_form}>
                    <tr className={ZhangHao_shimingCss.tr}>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账户名：</td>
                        <td>王粑粑200703</td>
                    </tr>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;真实姓名:</td>
                        <td><input type="text" /></td>
                    </tr>
                   
                    <tr>
                        <td>身份证号码：</td>
                        <td><input type="text"/></td>
                    </tr>
                   
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;手机号码：</td>
                        <td><input type="text"/></td>
                    </tr>
                   
                    <tr>
                        <td>手机验证码：</td>
                        <td>
                            <input className={ZhangHao_shimingCss.fasong} type="text"/>
                            <div className={ZhangHao_shimingCss.yanzhen}>发送验证码</div>
                       </td>
                        
                    </tr>
                   
                    
                        <input className={ZhangHao_shimingCss.submit} type="submit" name="立即实名" value="立即实名"/>
                    
                </form>
            </div>
        )
    }
}
