import React from 'react';
import {Link} from 'react-router-dom';

var First_pageCss=require('./First_page.css')
export default class First_page extends React.Component{
    render(){
        return(
            <div className={First_pageCss.page_one}>
                {/* //头像 */}
                <div className={First_pageCss.photo}>
                    <div className={First_pageCss.photo_center}>
                       <img scr=""/>
                       <p>亲爱的的王粑粑200707，你好！</p>
                       <br></br>
                       <br></br>
                       <span>没有实名认证？<Link to="/mywallet/zhanghao/zhanghao_shiming">去认证</Link></span>
                    </div>
                </div>

                {/* 我的资产 */}
                <div className={First_pageCss.money}>
                    <h3>我的资产</h3>
                    <div className={First_pageCss.rest}>
                        <span>余额：</span>
                        <div className={First_pageCss.rest_money}>0.00</div>
                        <div className={First_pageCss.add_money}>充值</div>
                    </div>
                </div>

                {/* 绑定银行卡 */}
                <div className={First_pageCss.wallet_card}>
                    <div className={First_pageCss.card_title}>未绑定银行卡/<span>0张</span></div>
                    <div className={First_pageCss.card_center}>
                        <div className={First_pageCss.top}>
                            <img src={require('../../images/no.png')}/>
                        </div>
                        <div className={First_pageCss.bottom}><Link to="/mywallet/zhanghao/zhanghao_card">查看我的银行卡</Link></div>
                    </div>

                </div>
            </div>
        )
    }
}
