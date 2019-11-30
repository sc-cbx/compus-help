import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from '../Header/header';

import Foods from '../Goods/Foods/foods'

import quick_food_img from '../imgs/1 (29).png'
import search_img from '../imgs/12.png'
import foods_img from '../imgs/78c1d1f9654772c7c208068a27c8701d.jpeg'

import Tiaozhuan from '../tiaozhuan';


var quick_food = require('./quick_food_purchase.css')
export default class Quick_food_purchase extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                
                {/* 食品速购 */}
                <BrowserRouter basename="quick_food_purchase">
                    <div className={quick_food.box}>

                        {/* 食品速购：头部 */}
                        <div className={quick_food.quick_food_title}>

                            {/* 搜索 */}
                            <div className={quick_food.search}>
                                <div className={quick_food.search_left}>
                                    <img src={quick_food_img} alt="食品速购"/>
                                    <h2>食品速购</h2>
                                </div>
                                <div className={quick_food.search_right}>
                                    <input type="search" placeholder="搜索"/>
                                    <button className={quick_food.search_btn}>
                                        <img src={search_img} alt="搜索"/>
                                    </button>
                                </div>
                            </div>
                            

                            {/* 食品分类 */}
                            <div className={quick_food.classification}>
                                <div className={quick_food.cooked_foods}>
                                    <div className={quick_food.cooked_food}>
                                        <Link to="/foods">熟食</Link>
                                        <img src={foods_img} alt="食品图片"/>
                                    </div>
                                    <Link to="/foods">泡面</Link>
                                    <span>|</span>
                                    <Link to="/foods">早餐</Link>
                                    <span>|</span>
                                    <Link to="/foods">正餐</Link>
                                </div>

                                <div className={quick_food.snackses}>
                                    <div className={quick_food.snacks}>
                                        <Link to="foods">零食</Link>
                                        <img src={foods_img} alt="食品图片"/>
                                    </div>
                                    <Link to="/foods">瓜子</Link>
                                    <span>|</span>
                                    <Link to="/foods">辣条</Link>
                                    <span>|</span>
                                    <Link to="/foods">饮料</Link>
                                </div>

                                <div className={quick_food.puffed_foods}>
                                    <div className={quick_food.puffed_food}>
                                        <Link to="/foods">膨化</Link>
                                        <img src={foods_img} alt="食品图片"/>
                                    </div>
                                    <Link to="/foods">饼干</Link>
                                    <span>|</span>
                                    <Link to="/foods">面包</Link>
                                    <span>|</span>
                                    <Link to="/foods">薯片</Link>
                                </div>
                            </div>
                        </div>


                        {/* 主要内容 */}
                        <div className={quick_food.container}>
                            <div className={quick_food.container_top}>
                                <div className={quick_food.food_title}>
                                    <h3>食品</h3>
                                </div>
                                <div className={quick_food.container_title}>
                                    <Link to="/foods">综合</Link>
                                    <span>|</span>
                                    <Link to="/foods">销量</Link>
                                    <span>|</span>
                                    <Link to="/foods">新品</Link>
                                </div>
                            </div>

                            {/* 食品：主要内容 */}
                            <div className={quick_food.content}>
                                {/* <ul>
                                    <li>
                                        <Link to="/quick_food_purchase">
                                            <img src={foods_img} alt="食品图片"/>
                                            <div className={quick_food.price}>
                                                <Link to="/quick_food_purchase">瓜子</Link>
                                                <p>￥6.00</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/quick_food_purchase">
                                            <img src={foods_img} alt="食品图片"/>
                                            <div className={quick_food.price}>
                                                <Link to="/quick_food_purchase">瓜子</Link>
                                                <p>￥6.00</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/quick_food_purchase">
                                            <img src={foods_img} alt="食品图片"/>
                                            <div className={quick_food.price}>
                                                <Link to="/quick_food_purchase">瓜子</Link>
                                                <p>￥6.00</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul> */}
                                <Route component={Foods}></Route>
                                <Route path="/quick_food_purchase/quick_food_purchase/tiaozhuan" component={Tiaozhuan}></Route>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
            
            
        )
    }
}