import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'

var cookedfood = require('./cookedfood.css')

export default class Cookedfood extends React.Component {
    render() {
        return (
            <div className={cookedfood.container}>

                {/* 熟食 */}
                <div className={cookedfood.content}>
                    <ul>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">康师傅方便面单桶泡面 已泡好</Link>
                                    <p>￥5.00</p>
                                </div>
                            </Link>
                        </li>
                    </ul>                     
                </div>         
            </div>
        );
    }
}