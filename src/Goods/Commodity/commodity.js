import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import commodity_img from  '../../imgs/80fd528ef75869ef7c5ed1f9288624a0.jpeg'
import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'
import latiao from '../../imgs/O1CN01wXiDJZ1GtwILME6a3_2200070681.jpg'
import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'
import binggan from '../../imgs/TB2lfK5spXXXXaaXXXXXXXXXXXX_925879943.jpg'

var commodity = require('./commodity.css')
export default class Commodity extends React.Component{
    render(){
        return(
            /*主要内容：内容*/

            <div className={commodity.container_content}>
                <ul>
                    <li>
                        <Link to="/collection">
                            <img src={paomian} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">康师傅方便面单桶泡面 已泡好</Link>
                                <p>￥5.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={binggan} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</Link>
                                <p>￥6.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={guazi} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                <p>￥16.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={latiao} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</Link>
                                <p>￥10.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={binggan} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</Link>
                                <p>￥6.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={paomian} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">康师傅方便面单桶泡面 已泡好</Link>
                                <p>￥5.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={latiao} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</Link>
                                <p>￥10.00</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            <img src={binggan} alt="商品图片"/>
                            <div className={commodity.price}>
                                <Link to="/collection">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</Link>
                                <p>￥6.00</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}