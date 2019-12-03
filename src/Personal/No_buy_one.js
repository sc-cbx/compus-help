import React from 'react';
import {Link} from 'react-router-dom'




var No_buy_oneCss=require('./No_buy_one.css')
export default class No_buy_one extends React.Component{
    render(){
        return(
            <div className={No_buy_oneCss.allorder_bottom}>
            <div className={No_buy_oneCss.zuo}><img src={require('../images/1.png')}></img></div>
            <div className={No_buy_oneCss.you}>
                <h5 className={No_buy_oneCss.h5}>你还没有购买过商品,赶紧去挑选商品~</h5>
                <p>去<Link to="/homepage"  className={No_buy_oneCss.link}>商城</Link>看看大家都喜欢的商品</p>
            </div>
        </div>
        )
    }
}