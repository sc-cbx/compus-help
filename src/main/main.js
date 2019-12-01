// 主界面路由组件
import React from 'react';
import { BrowserRouter, Route,Link } from "react-router-dom";


import Courier_help from '../courier_helpls/courier_help/courier_help'
import Courier_helps from "../courier_helpls/courier_helps";
import Online_buy_waters from '../online_buy_waters/online_buy_waters'
import Online_buy_water from "../online_buy_waters/online_buy_water/online_buy_water";
import Collection from "../collection/collection";
import Shopping_cart from "../shopping_cart/shopping_cart";
import Quick_food_purchase from "../quick_food_purchase/quick_food_purchase";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    {/*快递帮拿*/}
                    {/* <Courier_helps/> */}
                    {/* <Courier_help/> */}

                    {/*网上购水*/}
                    {/* <Online_buy_waters/> */}
                    {/* <Online_buy_water/> */}

                    {/*收藏*/}
                    {/* <Collection/> */}

                    {/*购物车*/}
                    {/* <Shopping_cart/> */}

                    {/*食品速购*/}
                    {/* <Quick_food_purchase/> */}

                </BrowserRouter>
            </div>
        )
    }
}