import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import mianbao from '../../imgs/TB2QtOOdAvoK1RjSZFNXXcxMVXa3002499014.jpg'

var staplefood = require('./staplefood.css')

export default class Staplefood extends React.Component {
    render() {
        return (
            <div className={staplefood.container}>

                {/* 熟食 */}
                <div className={staplefood.content}>
                    <ul>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/goods/details">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <a href="/goods/details">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                    </ul>                     
                </div>
            </div>
        );
    }
}