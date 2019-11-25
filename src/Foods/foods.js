import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import foods_img from '../imgs/78c1d1f9654772c7c208068a27c8701d.jpeg'


var foods = require('./foods.css')
export default class Foods extends React.Component{
    render(){
        return(
            <div className={foods.container}>
                <div className={foods.container_top}>
                    <div className={foods.food_title}>
                        <h3>食品</h3>
                    </div>
                    <div className={foods.container_title}>
                        <Link to="/quick_food_purchase">综合</Link>
                        <span>|</span>
                        <Link to="/quick_food_purchase">销量</Link>
                        <span>|</span>
                        <Link to="/quick_food_purchase">新品</Link>
                    </div>
                </div>

                {/* 食品：主要内容 */}
                <div className={foods.content}>
                    <ul>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={foods_img} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">瓜子</Link>
                                    <p>￥6.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={foods_img} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">瓜子</Link>
                                    <p>￥6.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={foods_img} alt="食品图片"/>
                                <div className={foods.price}>
                                    <Link to="/quick_food_purchase">瓜子</Link>
                                    <p>￥6.00</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}