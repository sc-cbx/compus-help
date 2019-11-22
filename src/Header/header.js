import React from 'react';
import {Link} from 'react-router-dom';
var HeaderCss=require('./header.css');
export default class Header extends React.Component{
    render(){
        return(
            <div className={HeaderCss.header}>
                    {/* 首页 */}
                    <div className={HeaderCss.div}>
                        
                        <ul className={HeaderCss.first}>
                            <li className={HeaderCss.firstli}>
                                <div className={HeaderCss.firstdiv}>
                                    <span >
                                        <img src={require('./../imgs/11.png')} className={HeaderCss.firstimg}></img>
                                    </span>
                                    <span className={HeaderCss.span}>首页</span>
                                </div>
                                
                            </li>
                            <li className={HeaderCss.separate}>|</li>
                            <li className={HeaderCss.order}>
                                <div className={HeaderCss.myorder}>
                                    <span className={HeaderCss.span}>我的订单</span>
                                </div>
                            </li>
                            <li className={HeaderCss.order}>
                                <div className={HeaderCss.myorder}>
                                    <span className={HeaderCss.span}>关于我们</span>
                                </div>
                            </li>
                       </ul>
                    </div>  
            </div>
        )
    }
}