import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var IdeaCss=require('./idea.css');
//我的理念
export default class Idea extends React.Component{
    render(){
        return(
            <div className={IdeaCss.header}>
                <p className={IdeaCss.p}>1.我们是一个为学生福利而产生的网页，我们的一切出发点都以学生利益考虑。</p>
                <p className={IdeaCss.p}>2.我们是一个严格尊重用户隐私的网页，绝不会出现信息泄露的情况！</p>
                <p className={IdeaCss.p}>3.我们是一个虚心接受建议的网页，欢迎各位学生用户反馈建议！</p>
            </div>
        )
    }
}