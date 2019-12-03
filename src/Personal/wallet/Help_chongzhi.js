import React from 'react';

var Help_congzhiCss=require('./Help_chongzhi.css')
export default class Help_congzhi extends React.Component{
    render(){
        return(
            <div className={Help_congzhiCss.all}>
                <div className={Help_congzhiCss.title}>充值</div>
                <div className={Help_congzhiCss.center}>
                    <p className={Help_congzhiCss.father}>余额充值支持哪些方式？</p>
                    <p>余额充值现在可支持银行卡支付，支付宝支付，花呗支付，微信支付等。</p>
                    <p className={Help_congzhiCss.father}>单笔充值的额度？</p>
                    <p>单笔限额1万。</p>
                    <p className={Help_congzhiCss.father}>充值到账时间？</p>
                    <p>充值到账时间一般为一至两个工作日，特殊节假日会有延后。</p>
                    
                </div>
                
            </div>
        )
    }
}
