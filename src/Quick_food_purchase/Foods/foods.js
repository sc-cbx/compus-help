import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'
import latiao from '../../imgs/O1CN01wXiDJZ1GtwILME6a3_2200070681.jpg'
import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'
import binggan from '../../imgs/TB2lfK5spXXXXaaXXXXXXXXXXXX_925879943.jpg'
import mianbao from '../../imgs/TB2QtOOdAvoK1RjSZFNXXcxMVXa3002499014.jpg'

var foods = require('./foods.css')
export default class Foods extends React.Component{
    // log=()=>{
    //     fetch("/user/getAll")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res)
    //     })
    // }
    render(){
        return(
            <div className={foods.container}>
                
                {/* 食品：主要内容 */}
                <div className={foods.content}>
                    <ul>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥16.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={latiao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</Link>
                                    <p>￥10.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={binggan} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</Link>
                                    <p>￥6.00</p>
                                </div>
                            </Link>
                        </li>  
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={latiao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</Link>
                                    <p>￥10.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥16.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={binggan} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</Link>
                                    <p>￥6.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥16.00</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}