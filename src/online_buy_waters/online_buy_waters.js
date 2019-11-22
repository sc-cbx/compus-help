import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import online_img from '../imgs/互联网.png'
import Header from '../Header/header';

var on_buy_wts = require('./online_buy_waters.css')
export default class Online_buy_waters extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                
                {/* 网上购水入口 */}
                <form action="" className={on_buy_wts.box}>
                    <div className={on_buy_wts.item_name}>
                        <h3>网上购水</h3>
                        <img src={online_img} alt="网上购水"/>
                    </div>
                    {/*入口一*/}
                    <div className={on_buy_wts.frame}>
                        <Link to="/courier_help" >
                            <div className={on_buy_wts.apartment1}>
                                <Link to="/courier_help">一公寓</Link>
                            </div>
                        </Link>
                    </div>



                    {/*入口二*/}
                    <div className={on_buy_wts.frame}>
                        <Link to="/courier_help" >
                            <div className={on_buy_wts.apartment2}>
                                <Link to="/courier_help">二公寓</Link>
                            </div>
                        </Link>
                    </div>


                    {/*入口三*/}
                    <div className={on_buy_wts.frame}>
                        <Link to="/courier_help" >
                            <div className={on_buy_wts.apartment3}>
                                <Link to="/courier_help">三公寓</Link>
                            </div>
                        </Link>
                    </div>

                    {/*更多入口*/}

                    <div className={on_buy_wts.frame}>
                        <Link to="/courier_help" >
                            <div className={on_buy_wts.apartment4}>
                                <Link to="/courier_help">四公寓</Link>
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}