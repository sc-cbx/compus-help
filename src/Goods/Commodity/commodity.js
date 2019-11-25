import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import commodity_img from  '../../imgs/80fd528ef75869ef7c5ed1f9288624a0.jpeg'

var commodity = require('./commodity.css')
export default class Commodity extends React.Component{
    render(){
        return(
            /*主要内容：内容*/

            <div className={commodity.container_content}>
                <ul>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={commodity_img} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">雪地靴</Link>
                                <p>￥35.00<span>￥100.00</span></p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}