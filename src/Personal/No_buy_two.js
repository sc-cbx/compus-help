import React from 'react';
import {Link} from 'react-router-dom'




var No_buy_twoCss=require('./No_buy_two.css')
export default class No_buy_two extends React.Component{
    render(){
        return(
            <div className={No_buy_twoCss.allorder_bottom}>
            <div className={No_buy_twoCss.zuo}><img src={require('../images/1.png')}></img></div>
            <div className={No_buy_twoCss.you}>
                <h5 className={No_buy_twoCss.h5}>啊呀，此状态下没有对应的订单！</h5>
                <p>去<Link to="/homepage"  className={No_buy_twoCss.link}>商城</Link>看看大家都喜欢的商品</p>
            </div>
        </div>
        )
    }
}