// 主界面路由组件
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Courier_help from '../courier_helpls/courier_help/courier_help'
import Courier_helps from "../courier_helpls/courier_helps";

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    {/*<Courier_help/>*/}
                    <Courier_helps/>
                </BrowserRouter>
            </div>
        )
    }
}