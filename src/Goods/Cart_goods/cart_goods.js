import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";


import goods_img from '../../imgs/52d183cd08dda67ed4d44bd43ac0dabc.jpeg'


var cart_goods = require('./cart_goods.css')
export default class Cart_goods extends React.Component{
    render(){
        return(
            
            /*购物车：主要内容*/
            <div className={cart_goods.container}>
               
                <div className={cart_goods.all_elections}>
                    <div className={cart_goods.all_election}>
                        <input type="checkbox"/>
                        <label>全选</label>
                    </div>


                    {/*结算*/}
                    <div className={cart_goods.Settlement}>
                        <h4>选择购买 <span>￥0.00</span></h4>
                        <button className={cart_goods.settlement}>付款</button>
                    </div>
                </div>


                {/*店铺*/}
                <div className={cart_goods.content}>
                    <ul>
                        <ol>   


                            {/*店名介绍*/}
                            <div className={cart_goods.store_name}>
                                <div className={cart_goods.st_name}>
                                    <input type="checkbox"/>
                                    <label>店铺：</label>
                                    <Link to="./shopping_cart">校园帮店</Link>
                                </div>
                            </div>   


                            {/*店铺里的商品*/}
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good}/>
                                    <img src={goods_img} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">雪地靴</Link>
                                        <h4>单价：<span>￥188.00</span></h4>
                                    </div>
                                    <div className={cart_goods.goods_num}>  



                                        {/*数量*/}
                                        <input value="数量"/>       
                                        <h3>总价：￥123.00</h3>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good}/>
                                    <img src={goods_img} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">雪地靴</Link>
                                        <h4>单价：<span>￥188.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>  



                                        {/*数量*/}
                                        <input value="数量"/>       
                                        <h3>总价：￥123.00</h3>
                                    </div>
                                </div>
                            </li>
                        </ol>      



                        {/*店名介绍*/}
                        <ol>
                            <div className={cart_goods.store_name}>
                                <div className={cart_goods.st_name}>
                                    <input type="checkbox"/>
                                    <label>店铺：</label>
                                    <Link to="./shopping_cart">校园帮店</Link>
                                </div>
                            </div>      



                            {/*店铺里的商品*/}
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good}/>
                                    <img src={goods_img} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">雪地靴</Link>
                                        <h4>单价：<span>￥188.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>   

                                        {/*数量*/}
                                        <input value="数量"/>       
                                        <h3>总价：￥123.00</h3>
                                    </div>
                                </div>
                            </li>
                        </ol>       


                        {/*店名介绍*/}
                        <ol>
                            <div className={cart_goods.store_name}>
                                <div className={cart_goods.st_name}>
                                    <input type="checkbox"/>
                                    <label>店铺：</label>
                                    <Link to="./shopping_cart">校园帮店</Link>
                                </div>
                            </div>    



                            {/*店铺里的商品*/}
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good}/>
                                    <img src={goods_img} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">雪地靴</Link>
                                        <h4>单价：<span>￥188.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>       
                                        {/*数量*/}
                                        <input value="数量"/>       
                                        <h3>总价：￥123.00</h3>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good}/>
                                    <img src={goods_img} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">雪地靴</Link>
                                        <h4>单价：<span>￥188.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>       
                                        {/*数量*/}
                                        <input value="数量"/>       
                                        <h3>总价：￥123.00</h3>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </ul>
                </div>


                <div className={cart_goods.all_elections}>
                    <div className={cart_goods.all_election}>
                        <input type="checkbox"/>
                        <label>全选</label>
                    </div>     
                    
                     
                    {/*结算*/}
                    <div className={cart_goods.Settlement}>
                        <h4>选择购买 <span>￥0.00</span></h4>
                        <button className={cart_goods.settlement}>付款</button>
                    </div>
                </div>
                        
               
            </div>
        )
    }
}