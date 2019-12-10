import React from 'react';

var Help_renzhenCss=require('./Help_renzhen.css')
export default class Help_renzhen extends React.Component{
    render(){
        return(
            <div className={Help_renzhenCss.all}>
                <div className={Help_renzhenCss.title}>实名认证</div>
                <div className={Help_renzhenCss.center}>
                    <p className={Help_renzhenCss.father}>实名认证介绍</p>
                    <p className={Help_renzhenCss.father}>如何实名认证？</p>
                    <p className={Help_renzhenCss.son}>打开“我的钱包”-“账号管理”-“实名认证”页面，按照流程提示完成身份及银行卡信息验证，即可完成；</p>
                    <p className={Help_renzhenCss.father}>实名认证有何好处？</p>
                    <p className={Help_renzhenCss.son}>1.实名认证之后会在一定程度上提高你的账户安全系数。</p>
                    <p className={Help_renzhenCss.son}>2.同时也方便了快捷支付方式的实施。</p>
                    <p className={Help_renzhenCss.father}>实名认证之后能否修改？</p>
                    <p className={Help_renzhenCss.son}>实名认证之后，信息不可以修改！</p>
                    <p className={Help_renzhenCss.father}>实名认证的范围？</p>
                    <p className={Help_renzhenCss.son}>仅支持中国大陆居民省份证。</p>
                </div>
            </div>
        )
    }
}
