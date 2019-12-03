import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from "../Header/header";

import shop_cart_imgs from '../imgs/1 (10).png'

import Cart_goods from './Cart_goods/cart_goods'
import Footer from '../Footer/footer';

var shop_cart = require('./shopping_cart.css')
export default class Shopping_cart extends React.Component {
    render() {
        return(
            <div>
                <Header/>

                {/*购物车*/}
                <BrowserRouter basename="shopping_cart">
                    <div className={shop_cart.box}>

                        {/*购物车顶部*/}
                        <div className={shop_cart.shop_cart_title}>
                            <div className={shop_cart.title_top}>
                                <img src={shop_cart_imgs} alt="购物车图片"/>
                                <h2>购物车</h2>
                            </div>
                        </div>      
                        <div className={shop_cart.classifications}>   
                          
                            {/*全部分类*/}
                            <div className={shop_cart.cltions_left}>
                                <Link to="/cart_goods">全部商品</Link>
                                <span>|</span>
                                <Link to="/cart_goods">降价商品</Link>
                                <span>|</span>
                                <Link to="/cart_goods">商品不存在</Link>
                            </div>

                            {/* 购物车：主要内容 */}
                            <div className={shop_cart.container}>
                                <Route path="/cart_goods" component={Cart_goods}></Route>
                            </div>

                        </div>
                    </div>
                </BrowserRouter>
                <Footer/>
            </div>

        )
    }
}