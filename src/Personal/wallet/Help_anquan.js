import React from 'react';

var Help_anquanCss=require('./Help_anquan.css')
export default class Help_anquan extends React.Component{
    render(){
        return(
            <div className={Help_anquanCss.all}>
                <div className={Help_anquanCss.title}>账户安全</div>
                <div className={Help_anquanCss.center}>
                      <p className={Help_anquanCss.forget_password}>忘记密码怎么办？</p>
                      <p className={Help_anquanCss.forget_password_son}>在不小心忘记密码时，可以通过点击（忘记密码链接），再通过绑定手机，发送验证码到手机。然后更改新的密码，新的密码一定要记住哦！</p>
                      <p className={Help_anquanCss.about_chongzhi}>关于充值</p>
                      <p className={Help_anquanCss.about_chongzhi_son}>校园帮余额资金发生变化时，需进行手机验证。该验证手机实名认证时的银行预留手机号码一致。如银行预留手机号码发生变化，则不能完成充值。需重新绑定。</p>
                </div>
            </div>
        )
    }
}
