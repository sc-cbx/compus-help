import React from 'react';

import {Link,Route} from 'react-router-dom';
import ZhangHao_card from './ZhangHao_card';
import ZhangHao_xingxi from './ZhangHao_xingxi';
import ZhangHao_shiming from './ZhangHao_shiming';
var ZhangHaoCss=require('./ZhangHao.css')
export default class ZhangHao extends React.Component{
    render(){
        return(
            <div className={ZhangHaoCss.all}>
                <div className={ZhangHaoCss.left_list}>
                     <ul>
                         <li className={ZhangHaoCss.icon}>账户管理</li>
                        <Link to="/mywallet/zhanghao/zhanghao_xingxi" className={ZhangHaoCss.link}><li>账户信息</li></Link> 
                        <Link to="/mywallet/zhanghao/zhanghao_card" className={ZhangHaoCss.link}><li>我的银行卡</li></Link> 
                        <Link to="/mywallet/zhanghao/zhanghao_shiming" className={ZhangHaoCss.link}><li>实名认证</li></Link>
                     </ul>
                </div>

                <div className={ZhangHaoCss.right_center}>
                       <Route path="/mywallet/zhanghao/zhanghao_xingxi" component={ZhangHao_xingxi}></Route>
                       <Route path="/mywallet/zhanghao/zhanghao_card" component={ZhangHao_card}></Route>
                       <Route path="/mywallet/zhanghao/zhanghao_shiming" component={ZhangHao_shiming}></Route>
                </div>
                
            </div>
        )
    }
}
