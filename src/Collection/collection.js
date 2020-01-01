import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from "../Header/header";
import { Button, Input,BackTop,Pagination } from 'antd'
import collect_imgs from '../imgs/1 (17).png'
import  search_img from '../imgs/12.png'

import Clothes from './Clothes/clothes';
import Beautymakeup from './Beautymakeup/beautymakeup';
import Foods from './Foods/foods';
import Digital from './Digital/digital';
import Commodity from './Commodity/commodity';
import Footer from '../Footer/footer';


var collection = require('./collection.css')
export default class COllection extends React.Component {
    render() {
        return(
            <div>
                <Header/>

                {/*收藏*/}
                <BrowserRouter basename="collection">
                    <div className={collection.box}>
                        <div className={collection.all}>
                            <div className={collection.head}>
                        <div className={collection.collection_title}>
                            <div className={collection.collection_title_left}>
                                <div className={collection.title_top}>
                                    <img src={collect_imgs}/>
                                    <h2>收藏夹</h2>
                                </div>
                                        {/* <span>|</span> */}
                                        <Link to="/commodity" className={collection.baby_collection}>宝贝收藏</Link>
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
                                        <Link to="/clothes">衣服</Link>
                                        <Link to="/eautymakeup">美妆</Link>
                                        <Link to="/foods">食品</Link>
                                        <Link to="/digital">其他</Link>
                                    </div>
                                    <div className={collection.classification_right}>
                                        <button className={collection.btn}>整理</button>
                                    </div>
                                </div>
                            </div>
                                    {/*收藏夹顶部*/}
                                </div>  
                            </div>
            
                        </div>
                            <div className={collection.container_content}>
                                <Route path="/commodity" component={Commodity}></Route>
                                <Route path="/clothes" component={Clothes}></Route>
                                <Route path="/eautymakeup" component={Beautymakeup}></Route>
                                <Route path="/foods" component={Foods}></Route>
                                <Route path="/digital" component={Digital}></Route>
                            
                            </div>
                        <div>
                                <Pagination defaultCurrent={6} total={300} pageSizeOptions={15}  className={collection.page}/>
                                    {/* pageSizeOptions表示每页可以显示多少条 */}
                        </div>
                    </div>
                </BrowserRouter>
                        <div>
                        <BackTop />
                    
                        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
                    
                    </div>  
                <Footer/>
            </div>

        )
    }
}