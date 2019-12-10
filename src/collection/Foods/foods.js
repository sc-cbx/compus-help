import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'
import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'

var foods = require('./foods.css')
export default class Foods extends React.Component{
    render(){
        return(
            <div className={foods.container}>
                
                {/* 食品：主要内容 */}
                <div className={foods.content}>
                    <ul>
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
                    </ul>
                </div>
            </div>
        )
    }
}