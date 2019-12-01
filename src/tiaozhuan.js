import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Courier_helps from './courier_helpls/courier_helps';




export default class Tiaozhuan extends React.Component{
    constructor(){
        super();
        this.state={
        
        }
    }


    render(){
        return(
            <div>
                
                测试页面
                <Link to="/courier_helps">快递帮拿</Link>
                
            </div>
        )
    }
}