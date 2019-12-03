import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var MypromiseCss=require('./mypromise.css');
//我们承诺
export default class Mypromise extends React.Component{
    render(){
        return(
            <div className={MypromiseCss.header}>
                <p className={MypromiseCss.p}>1.我们承诺，用户下单后，按照下单顺序，会第一时间发货</p>
                <p className={MypromiseCss.p}>2.我们承诺，商品描述不符时，会尽快为你解决，上门取货，退款。</p>
                <p className={MypromiseCss.p}>3.我们承诺，会尽快解决你的意见反馈</p>
                <p className={MypromiseCss.p}>4.我们承诺，会第一时间解决你的举报，并进行相应的赔偿</p>
            </div>
        )
    }
}