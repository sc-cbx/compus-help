import React from 'react';

import {Link} from 'react-router-dom';
var ZhangHao_cardCss=require('./ZhangHao_card.css')
export default class ZhangHao_card extends React.Component{
    render(){
        return(
            <div className={ZhangHao_cardCss.card}>
                <p>我的银行卡</p>
                <div className={ZhangHao_cardCss.card_center}>
                   <Link to="/zhanghao_card_add" className={ZhangHao_cardCss.link}><div className={ZhangHao_cardCss.add}><span>+</span>添加银行卡</div></Link>  
                </div>
            </div>
        )
    }
}
