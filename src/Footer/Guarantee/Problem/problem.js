import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var ProblemCss=require('./problem.css');
// 常见问题
export default class Problem extends React.Component{
    render(){
        return(
            <div className={ProblemCss.header}>
                <div className={ProblemCss.d1}>
                    <h1 className={ProblemCss.h}>账号与安全</h1>
                    <p className={ProblemCss.p2}>1.游客浏览是无法执行购买商品等操作的，游客只能浏览商品。</p>
                    <p className={ProblemCss.p}>2.同个ID只能注册一个校园帮账户。</p>
                </div>
                <div className={ProblemCss.d2}>
                    <h1 className={ProblemCss.h}>购物指南</h1>
                    <p className={ProblemCss.p}>1.跳蚤市场的价格由出手人决定，可以私聊商家，询问是否能优惠</p>
                    <p className={ProblemCss.p}>2.食品购买下单后，商家会根据各个买家下单时间，依序为买家拿货，派货！</p>
                    <p className={ProblemCss.p}>3.拍下商品，信息地址填错了，可以退货，或者私聊卖家。</p>
                    <p className={ProblemCss.p}>4.跳蚤市场的商品，由于是转手，所以，一旦有买家付款，此商品将会自动消除，喜欢的亲们，一定要快速决定哦！</p>
                    <p className={ProblemCss.p1}>注：跳蚤市场的一切商品除特殊情况下，均不许退货！</p>
                </div>
                <div className={ProblemCss.d3}>
                    <h1 className={ProblemCss.h}>投诉卖家&举报</h1>
                    <p className={ProblemCss.p}>1.商家出现付款不发货的情况下，可投诉举报</p>
                    <p className={ProblemCss.p}>2.出现不诚信，商品描述差异极大时可投诉卖家，我们会进行相应的理赔</p>
                </div>
                <div className={ProblemCss.d4}>
                    <h1 className={ProblemCss.h}>退款与售后</h1>
                    <p className={ProblemCss.p}>1.退货后，如果超过7天没有收到退款，可以联系卖家或发布意见反馈，我们会尽快为你解决！</p>
                </div>
            </div>
        )
    }
}