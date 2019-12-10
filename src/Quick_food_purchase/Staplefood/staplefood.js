import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import mianbao from '../../imgs/TB2QtOOdAvoK1RjSZFNXXcxMVXa3002499014.jpg'

var staplefood = require('./staplefood.css')

export default class Staplefood extends React.Component {
    render() {
        return (
            <div className={staplefood.container}>

                {/* 膨化*/}
                <div className={staplefood.content}>
                    <ul>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={mianbao} alt="食品图片"/>
                                <div className={staplefood.price}>
                                    <Link to="/quick_food_purchase">休闲农场三明治蒸蛋糕营养早餐夹心网红零食品小面包小吃点心*1</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                    </ul>                     
                </div>
            </div>
        );
    }
}