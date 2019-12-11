import React from 'react';
import {Link,BrowserRouter,Route} from 'react-router-dom';
import {Input,Menu,Dropdown,Icon} from 'antd';
const { Search } = Input;
var DetailsCss=require('./details.css');
export default class Details extends React.Component {
    render() {
        return (
            // 商品详情
            <div className={DetailsCss.div}>
            {/* 商品内容 */}
                <div className={DetailsCss.gd}>
                   <h2  className={DetailsCss.dh2}>宝贝介绍：</h2>
                   <p className={DetailsCss.dp}>价格实惠，买了两箱，够吃一段时间了，吃完再来回购柳州螺狮粉是我第一个收到的包裹。里面的配料很多，有酸笋，木耳，花生，油炸腐竹等等，吃起来软滑爽口，味道非常的正宗。里面的调料包就有七八包的样子，比在实体店买的一桶的螺蛳粉分量还足吃起来好吃还不贵，经济实惠，很过瘾。</p>
                </div>
            {/* 商品图片 */}
                <div className={DetailsCss.dd}>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/12047089632441691876&fm26&gp.jpg")} className={DetailsCss.mimg}></img>
                    </div>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/12047089632441691876&fm26&gp.jpg")} className={DetailsCss.mimg}></img>
                    </div>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/12047089632441691876&fm26&gp.jpg")} className={DetailsCss.mimg}></img>
                    </div>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/12047089632441691876&fm26&gp.jpg")} className={DetailsCss.mimg}></img>
                    </div>
                </div>
            </div>
        );
    }
}