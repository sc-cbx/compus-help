import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from "../Header/header";

import shop_cart_imgs from '../imgs/1 (10).png'
import goods_img from '../imgs/52d183cd08dda67ed4d44bd43ac0dabc.jpeg'

var shop_cart = require('./shopping_cart.css')
export default class Shopping_cart extends React.Component {
    render() {
        return(
            <div>
                <Header/>

                {/*购物车*/}
                <form action="" className={shop_cart.box}>

                    {/*购物车顶部*/}
                    <div className={shop_cart.shop_cart_title}>
                        <div className={shop_cart.title_top}>
                            <img src={shop_cart_imgs} alt="购物车图片"/>
                            <h2>购物车</h2>
                        </div>
                    </div>

                    <div className={shop_cart.classifications}>

                        <div className={shop_cart.cltions}>
                            {/*全部分类*/}
                            <div className={shop_cart.cltions_left}>
                                <Link to="/shopping_cart">全部商品</Link>
                                <span>|</span>
                                <Link to="/shopping_cart">降价商品</Link>
                                <span>|</span>
                                <Link to="/shopping_cart">商品不存在</Link>
                            </div>
                        </div>



                        {/*购物车：主要内容*/}
                        <div className={shop_cart.container}>
                            <div className={shop_cart.all_elections}>
                                <div className={shop_cart.all_election}>
                                    <input type="checkbox"/>
                                    <label>全选</label>
                                </div>

                                {/*结算*/}
                                <div className={shop_cart.Settlement}>
                                    <h4>选择购买 <span>￥0.00</span></h4>
                                    <button className={shop_cart.settlement}>付款</button>
                                </div>
                            </div>

                            {/*店铺*/}
                            <div className={shop_cart.content}>
                                <ul>
                                    <ol>

                                        {/*店名介绍*/}
                                        <div className={shop_cart.store_name}>
                                            <div className={shop_cart.st_name}>
                                                <input type="checkbox"/>
                                                <label>店铺：</label>
                                                <Link to="./shopping_cart">校园帮店</Link>
                                            </div>
                                        </div>

                                        {/*店铺里的商品*/}
                                        <li>
                                            <div className={shop_cart.goods}>
                                                <input type="checkbox" className={shop_cart.good}/>
                                                <img src={goods_img} alt="商品图片"/>
                                                <div className={shop_cart.price}>
                                                    <Link to="/shopping_cart">雪地靴</Link>
                                                    <h4>单价：<span>￥188.00</span></h4>
                                                </div>
                                                <div className={shop_cart.goods_num}>

                                                    {/*数量*/}
                                                    <input value="数量"/>

                                                    <h3>总价：￥123.00</h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={shop_cart.goods}>
                                                <input type="checkbox" className={shop_cart.good}/>
                                                <img src={goods_img} alt="商品图片"/>
                                                <div className={shop_cart.price}>
                                                    <Link to="/shopping_cart">雪地靴</Link>
                                                    <h4>单价：<span>￥188.00</span></h4>
                                                </div>

                                                <div className={shop_cart.goods_num}>

                                                    {/*数量*/}
                                                    <input value="数量"/>

                                                    <h3>总价：￥123.00</h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>


                                    {/*店名介绍*/}
                                    <ol>
                                        <div className={shop_cart.store_name}>
                                            <div className={shop_cart.st_name}>
                                                <input type="checkbox"/>
                                                <label>店铺：</label>
                                                <Link to="./shopping_cart">校园帮店</Link>
                                            </div>
                                        </div>


                                        {/*店铺里的商品*/}
                                        <li>
                                            <div className={shop_cart.goods}>
                                                <input type="checkbox" className={shop_cart.good}/>
                                                <img src={goods_img} alt="商品图片"/>
                                                <div className={shop_cart.price}>
                                                    <Link to="/shopping_cart">雪地靴</Link>
                                                    <h4>单价：<span>￥188.00</span></h4>
                                                </div>

                                                <div className={shop_cart.goods_num}>

                                                    {/*数量*/}
                                                    <input value="数量"/>

                                                    <h3>总价：￥123.00</h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>



                                    {/*店名介绍*/}
                                    <ol>
                                        <div className={shop_cart.store_name}>
                                            <div className={shop_cart.st_name}>
                                                <input type="checkbox"/>
                                                <label>店铺：</label>
                                                <Link to="./shopping_cart">校园帮店</Link>
                                            </div>
                                        </div>


                                        {/*店铺里的商品*/}
                                        <li>
                                            <div className={shop_cart.goods}>
                                                <input type="checkbox" className={shop_cart.good}/>
                                                <img src={goods_img} alt="商品图片"/>
                                                <div className={shop_cart.price}>
                                                    <Link to="/shopping_cart">雪地靴</Link>
                                                    <h4>单价：<span>￥188.00</span></h4>
                                                </div>

                                                <div className={shop_cart.goods_num}>

                                                    {/*数量*/}
                                                    <input value="数量"/>

                                                    <h3>总价：￥123.00</h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={shop_cart.goods}>
                                                <input type="checkbox" className={shop_cart.good}/>
                                                <img src={goods_img} alt="商品图片"/>
                                                <div className={shop_cart.price}>
                                                    <Link to="/shopping_cart">雪地靴</Link>
                                                    <h4>单价：<span>￥188.00</span></h4>
                                                </div>

                                                <div className={shop_cart.goods_num}>

                                                    {/*数量*/}
                                                    <input value="数量"/>

                                                    <h3>总价：￥123.00</h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </ul>
                            </div>
                            <div className={shop_cart.all_elections}>
                                <div className={shop_cart.all_election}>
                                    <input type="checkbox"/>
                                    <label>全选</label>
                                </div>

                                {/*结算*/}
                                <div className={shop_cart.Settlement}>
                                    <h4>选择购买 <span>￥0.00</span></h4>
                                    <button className={shop_cart.settlement}>付款</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}