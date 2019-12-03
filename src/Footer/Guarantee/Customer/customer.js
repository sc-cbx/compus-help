import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var CustomerCss=require('./customer.css');
// 联系客服
export default class Customer extends React.Component{
    render(){
        return(
            <div className={CustomerCss.header}>
                <div className={CustomerCss.d1}>
                    <h1 className={CustomerCss.h}>在线客服</h1>
                    <p className={CustomerCss.p}>在线客服通过人工QQ在线解答的方式，及时处理消费者在校园帮遇到的各种问题，一般等待时间在10分钟以内。</p>
                    <p className={CustomerCss.p}>请加客服QQ：223****051</p>
                    <p className={CustomerCss.p}>工作时间：09:00 ～ 22:00（周一至周日）</p>
                    <p className={CustomerCss.p}>如果没有及时回复，请亲谅解，我们看到后一定会及时回复的哦，亲！</p>
                </div>
                <div className={CustomerCss.d2}>
                    <h1 className={CustomerCss.h}>热线服务</h1>
                    <p className={CustomerCss.p}>热线客服通过人工电话解答的方式，接受消费者的各类咨询和反馈，忙碌时需要等待一段时间</p>
                    <p className={CustomerCss.p}>请拨打电话：183****3304</p>
                    <p className={CustomerCss.p}>工作时间：09:00 ～ 22:00（周一至周日）</p>
                </div>
                <div>

                </div>
            </div>
        )
    }
}