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
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a href="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={paomian} alt="食品图片"/>
                                <div className={cookedfood.price}>
                                    <a herf="/ordersec/details">康师傅方便面单桶泡面 已泡好</a>
                                    <p>￥5.00</p>
                                </div>
                            </a>
                        </li>
                    </ul>                     
                </div>         
            </div>
        );
    }
}