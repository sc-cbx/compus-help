import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";


import goods_img from '../../imgs/52d183cd08dda67ed4d44bd43ac0dabc.jpeg'
import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'
import latiao from '../../imgs/O1CN01wXiDJZ1GtwILME6a3_2200070681.jpg'
import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'
import binggan from '../../imgs/TB2lfK5spXXXXaaXXXXXXXXXXXX_925879943.jpg'

import And_reduce from '../../Assembly/And_reduce/and_reduce';


var cart_goods = require('./cart_goods.css')
export default class Cart_goods extends React.Component{
    constructor(){
        super();
        this.state={
            checked: true,
        }
    }

    selection(){
        this.setState({
            // checked:(this.state.)
        })
    }

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
                                    <input type="checkbox" id="all_input"/>
                                    <label>店铺：</label>
                                    <Link to="./shopping_cart">校园帮店</Link>
                                </div>
                            </div>   


                            {/*店铺里的商品*/}
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good} id="a_input"/>
                                    <img src={guazi} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                        <h4>单价：<span>￥16.00</span></h4>
                                    </div>
                                    <div className={cart_goods.goods_num}>  

                                        {/*数量*/}
                                        <div className={cart_goods.numbers}>
                                            <And_reduce/>  
                                        </div>

                                        <div className={cart_goods.all_price}>
                                            <h3>总价：￥16.00</h3>
                                            <a href="#">删除</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good} id="a_input"/>
                                    <img src={latiao} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</Link>
                                        <h4>单价：<span>￥10.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>  

                                        {/*数量*/}
                                        <div className={cart_goods.numbers}>
                                            <And_reduce/> 
                                        </div>

                                        <div className={cart_goods.all_price}>
                                            <h3>总价：￥10.00</h3>
                                            <a href="#">删除</a>
                                        </div>
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
                                    <img src={paomian} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">康师傅方便面单桶泡面 已泡好</Link>
                                        <h4>单价：<span>￥5.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>   

                                        {/*数量*/}
                                        <div className={cart_goods.numbers}>
                                            <And_reduce/>
                                        </div>

                                        <div className={cart_goods.all_price}>
                                            <h3>总价：￥5.00</h3>
                                            <a href="#">删除</a>
                                        </div>
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
                                    <img src={binggan} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</Link>
                                        <h4>单价：<span>￥6.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>

                                        {/*数量*/}
                                        <div className={cart_goods.numbers}>
                                            <And_reduce/>   
                                        </div>

                                        <div className={cart_goods.all_price}>
                                            <h3>总价：￥6.00</h3>
                                            <a href="#">删除</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={cart_goods.goods}>
                                    <input type="checkbox" className={cart_goods.good}/>
                                    <img src={guazi} alt="商品图片"/>
                                    <div className={cart_goods.price}>
                                        <Link to="/shopping_cart">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</Link>
                                        <h4>单价：<span>￥16.00</span></h4>
                                    </div>      
                                    <div className={cart_goods.goods_num}>   
                                        
                                        {/*数量*/}
                                        <div className={cart_goods.numbers}>
                                            <And_reduce/>  
                                        </div>

                                        <div className={cart_goods.all_price}>
                                            <h3>总价：￥16.00</h3>
                                            <a href="#">删除</a>
                                        </div>
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
                        <a href="#">删除</a>
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