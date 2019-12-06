import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'
import latiao from '../../imgs/O1CN01wXiDJZ1GtwILME6a3_2200070681.jpg'
import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'
import binggan from '../../imgs/TB2lfK5spXXXXaaXXXXXXXXXXXX_925879943.jpg'
import mianbao from '../../imgs/TB2QtOOdAvoK1RjSZFNXXcxMVXa3002499014.jpg'

var foods = require('./foods.css')
export default class Foods extends React.Component{
    render(){
        return(
            <div className={foods.container}>
                
                {/* 食品：主要内容 */}
                <div className={foods.content}>
                    <ul>
                        <li>
                            <a href="/goods/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥16.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={latiao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</a>
                                    <p>￥10.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={binggan} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</a>
                                    <p>￥6.00</p>
                                </div>
                            </a>
                        </li>  
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={latiao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</a>
                                    <p>￥10.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥16.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={binggan} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</a>
                                    <p>￥6.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={foods.price}>
                                    <a href="/goods/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥16.00</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}