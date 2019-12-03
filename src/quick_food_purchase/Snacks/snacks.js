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
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                    <p>￥4.50</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quick_food_purchase">
                                <img src={guazi} alt="食品图片"/>
                                <div className={snacks.price}>
                                    <Link to="/quick_food_purchase/quick_food_purchase/tiaozhuan">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
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