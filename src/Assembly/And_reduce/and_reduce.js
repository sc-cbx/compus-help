import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";



var and_reduce = require('./and_reduce.css')
export default class And_reduce extends React.Component{
    constructor(){
        super();
        this.state={
            num: 1,
            i: 0
        }
    }

    // 增加
    increase(){
        this.setState({
            num: (this.state.num == this.props.max)?this.props.max: (this.state.num + 1)
        });
        
    }

    // 减少
    decrease(){
        const i=0;
        this.setState({
            num : (this.state.num == this.state.i)? this.state.num: (this.state.num - 1)
        });
    }

    render(){
        return(

            /*数字加减框*/
            <div className={and_reduce.numbers}>
                <input type="button" value="-" onClick={this.decrease.bind(this)} /> 
                <input type="button" value={this.state.num}/>
                <input type="button" value="+" onClick={this.increase.bind(this)} />   
            </div>
        )
    }
}