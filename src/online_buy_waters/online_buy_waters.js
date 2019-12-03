import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import { Card } from 'antd';

import onliner_img from '../imgs/30638047562372970443260.jpg'
import online_img from "../imgs/24.png";
import Header from '../Header/header';
import Footer from '../Footer/footer';

var on_buy_wts = require('./online_buy_waters.css')
export default class Online_buy_waters extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                
                {/* 网上购水入口 */}
                <form action="" className={on_buy_wts.box}>
                    <div className={on_buy_wts.item_name}>
                        <img src={online_img} alt="网上购水"/>
                        <h3>网上购水</h3>
                        {/* <img src={online_img} alt="网上购水"/> */}
                    </div>
                    {/*入口一*/}
                    <div className={on_buy_wts.frame}>
                        
                        <Link to="/online_buy_water">
                            <Card 
                                hoverable 
                                style={{ width: '22%', height: '35%' }}
                                cover={
                                    <img alt="example" src={onliner_img}  
                                            className={on_buy_wts.enter_imgs} />}
                                className={on_buy_wts.enter}
                            >
                                <Link to="/online_buy_water">一公寓</Link>    
                            </Card>
                        </Link>


                        {/*入口二*/}
                        <Link to="/online_buy_water">
                            <Card 
                                hoverable 
                                style={{ width: '22%', height: '35%' }}
                                cover={
                                    <img alt="example" src={onliner_img}  
                                            className={on_buy_wts.enter_imgs} />}
                                className={on_buy_wts.enter}
                            >
                                <Link to="/online_buy_water">二公寓</Link>    
                            </Card>
                        </Link>


                        {/*入口三*/}
                        <Link to="/online_buy_water">
                            <Card 
                                hoverable 
                                style={{ width: '22%', height: '35%' }}
                                cover={
                                    <img alt="example" src={onliner_img}  
                                            className={on_buy_wts.enter_imgs} />}
                                className={on_buy_wts.enter}
                            >
                                <Link to="/online_buy_water">三公寓</Link>    
                            </Card>
                        </Link>

                        {/*入口四*/}
                        <Link to="/online_buy_water">
                            <Card 
                                hoverable 
                                style={{ width: '22%', height: '35%' }}
                                cover={
                                    <img alt="example" src={onliner_img}  
                                            className={on_buy_wts.enter_imgs} />}
                                className={on_buy_wts.enter}
                            >
                                <Link to="/online_buy_water">四公寓</Link>    
                            </Card>
                        </Link>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}