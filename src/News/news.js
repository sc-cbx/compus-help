import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var NewsCss=require('./news.css');
// 消息
export default class News extends React.Component{
    render(){
        return(
            <div className={NewsCss.header}>
                消息
            </div>
        )
    }
}