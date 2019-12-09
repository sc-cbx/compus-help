import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
var MyorderCss=require('./myorder.css');
export default class Myorder extends React.Component{
    render(){
        return(
            <div className={MyorderCss.header}>
                我的订单
            </div>
        )
    }
}