import React from 'react';
import { Button, Input,BackTop,Pagination } from 'antd'
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from '../Header/header';



import quick_food_img from '../imgs/1 (29).png'
import search_img from '../imgs/12.png'
import shushi from '../imgs/22.png'
import lingshi from '../imgs/23.png'
import penghua from '../imgs/fugkj.png'



import Cookedfood from './Cookedfood/cookedfood';
import Staplefood from './Staplefood/staplefood';
import Snacks from './Snacks/snacks';
import Foods from './Foods/foods';
import Footer from '../Footer/footer';

var quick_food = require('./quick_food_purchase.css')
export default class Quick_food_purchase extends React.Component {
    constructor(){
        super();
        this.state={
            
        };
    }
    render() {
        return(
            <div>
                <Header/>
                
                {/* 食品速购 */}
                <BrowserRouter basename="quick_food_purchase">
                    <div className={quick_food.box}>

                        {/* 食品速购：头部 */}
                        <div className={quick_food.quick_food_title}>

                            {/* 食品分类 */}
                            <div className={quick_food.classification}>
                                <div className={quick_food.cooked_foods}>
                                    <div className={quick_food.cooked_food}>
                                        <Link to="/cookedfood">熟食</Link>
                                        <img src={shushi} alt="食品图片"/>
                                    </div>
                                    <Link to="/cookedfood">泡面</Link>
                                    <span>|</span>
                                    <Link to="/staplefood">早餐</Link>
                                    <span>|</span>
                                    <Link to="/staplefood">正餐</Link>
                                </div>

                                <div className={quick_food.snackses}>
                                    <div className={quick_food.snacks}>
                                        <Link to="/snacks">零食</Link>
                                        <img src={lingshi} alt="食品图片"/>
                                    </div>
                                    <Link to="/snacks">瓜子</Link>
                                    <span>|</span>
                                    <Link to="/snacks">辣条</Link>
                                    <span>|</span>
                                    <Link to="/snacks">饮料</Link>
                                </div>

                                <div className={quick_food.puffed_foods}>
                                    <div className={quick_food.puffed_food}>
                                        <Link to="/staplefood">膨化</Link>
                                        <img src={penghua} alt="食品图片"/>
                                    </div>
                                    <Link to="/staplefood">饼干</Link>
                                    <span>|</span>
                                    <Link to="/staplefood">面包</Link>
                                    <span>|</span>
                                    <Link to="/snacks">薯片</Link>
                                </div>
                            </div>
                        </div>


                        {/* 主要内容 */}
                        <div className={quick_food.container}>
                            <div className={quick_food.container_top}>
                                <div className={quick_food.all}>
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
                                
                                <div>
                                    <Pagination defaultCurrent={6} total={300} pageSizeOptions={15}  className={quick_food.page}/>
                                    {/* pageSizeOptions表示每页可以显示多少条 */}
                                </div>
                            </div>
                            
                            {/* 食品：主要内容 */}
                            <div className={quick_food.content}>
                                <Route path="/foods" component={Foods}></Route>
                                <Route path="/cookedfood" component={Cookedfood}></Route>
                                <Route path="/staplefood" component={Staplefood}></Route>
                                <Route path="/snacks" component={Snacks}></Route>

                            </div>
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