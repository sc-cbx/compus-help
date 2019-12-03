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
                   <p className={DetailsCss.dp}>相机入手了了3个月，只用过两次，平常太忙，没时间使用，低价出售，保证质量没有问题，详情可咨询。</p>
                </div>
            {/* 商品图片 */}
                <div className={DetailsCss.dd}>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/xq1.png")} className={DetailsCss.mimg}></img>
                    </div>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/xq1.png")} className={DetailsCss.mimg}></img>
                    </div>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/xq1.png")} className={DetailsCss.mimg}></img>
                    </div>
                    <div className={DetailsCss.dpic}>
                        <img  src={require("../../imgs/xq1.png")} className={DetailsCss.mimg}></img>
                    </div>
                </div>
            </div>
        );
    }
}