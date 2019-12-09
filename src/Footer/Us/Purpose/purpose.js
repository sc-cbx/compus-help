import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var PurposeCss=require('./purpose.css');
//网页用途
export default class Purpose extends React.Component{
    render(){
        return(
            <div className={PurposeCss.header}>
                <p className={PurposeCss.p}>1.本网页仅用于校园内（西南交通大学希望）。</p>
                <p className={PurposeCss.p}>2.本网页大部分应用适用于“懒癌”学生，或需要帮助的学生。</p>
                <p className={PurposeCss.p}>3.本网页是结合校园生活现状而产生，按照某些学生的需求而产生。</p>
                <p className={PurposeCss.p}>4.本网页还在开发中，如果没有你想要的功能，可以反馈给我们，我们非常欢迎亲们的反馈哦！</p>
                <p className={PurposeCss.p}>5.本网页开发出来不久，有什么问题都可以咨询或反馈！</p>
              
            </div>
        )
    }
}