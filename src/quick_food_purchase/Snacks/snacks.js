import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'

var snacks = require('./snacks.css')

export default class Snacks extends React.Component {
    render() {
        return (
            <div className={snacks.container}>

                {/* 熟食 */}
                <div className={snacks.content}>
                    <ul>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                    <p>￥4.50</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/ordersec/details">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <a href="/ordersec/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
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