import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from "../Header/header";

import collect_imgs from '../imgs/1 (17).png'
import  search_img from '../imgs/12.png'

import Commodity from '../Goods/Commodity/commodity'


var collection = require('./collection.css')
export default class Collection extends React.Component {
    render() {
        return(
            <div>
                <Header/>

                {/*收藏*/}
                <BrowserRouter basename="foods">
                    <div className={collection.box}>

                        {/*收藏夹顶部*/}
                        <div className={collection.collection_title}>
                            <div className={collection.collection_title_left}>
                                <div className={collection.title_top}>
                                    <img src={collect_imgs}/>
                                    <h2>收藏夹</h2>
                                </div>
                                {/* <span>|</span> */}
                                <button className={collection.baby_collection}>宝贝收藏</button>
                                <button className={collection.store_collection}>店铺收藏</button>
                            </div>
                            <div className={collection.collection_title_right}>
                                <input type="search" placeholder="搜索"/>
                                <button className={collection.search}>
                                    <img src={search_img}/>
                                </button>
                            </div>
                        </div>
            
                        {/*主要内容*/}
                        <div className={collection.container}>
            
                            {/*主要内容：顶部*/}
                            <div className={collection.container_top}>
                                <div className={collection.classifications}>
                                    <div className={collection.all_baby}>
                                        <Link to="/commodity">全部宝贝</Link>
                                        <span>|</span>
                                        <Link to="commodity">降价</Link>
                                        <span>|</span>
                                        <Link to="/commodity">失效/宝贝不存在</Link>
                                    </div>
                                </div>
                                <div className={collection.classification}>
                                    <div className={collection.classification_left}>
                                        <Link to="/commodity">全部宝贝</Link>
                                        <Link to="/commodity">衣服</Link>
                                        <Link to="/commodity">鞋子</Link>
                                        <Link to="/commodity">食品</Link>
                                        <Link to="/commodity">其他</Link>
                                    </div>
            
                                    <div className={collection.classification_right}>
                                        <button className={collection.btn}>整理</button>
                                    </div>
            
                                </div>
                            </div>
                            <div className={collection.kong}></div>
            
                            {/* 主要内容：内容 */}
                            <div className={collection.container_content}>
                                {/* <ul>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/collection">
                                            <img src={commodity_img} alt="商品图片"/>
                                            <div className={collection.price}>
                                                <Link to="/collection">雪地靴</Link>
                                                <p>￥35.00<span>￥100.00</span></p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul> */}
    
                                <Route component={Commodity}></Route>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>

        )
    }
}