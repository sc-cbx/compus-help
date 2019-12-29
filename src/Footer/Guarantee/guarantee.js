import React from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import { BackTop  } from 'antd';
import Customer from './Customer/customer';
import Problem from './Problem/problem';
import Feedback from './Feedback/feedback';
var GuaranteeCss=require('./guarantee.css');

export default class Guarantee extends React.Component{
    render(){
        return(
            // 新手帮助
            <div>
                <div className={GuaranteeCss.tou}>
                    <img src={require("./../../imgs/logo.png")} className={GuaranteeCss.timg}></img>
                    <h1 className={GuaranteeCss.h1}>新手帮助</h1>
                    <Link to="/homepage" className={GuaranteeCss.back}>返回</Link>
                </div>
                <BrowserRouter basename="guarantee">
                <div  className={GuaranteeCss.down}>
                     <div className={GuaranteeCss.left}>
                        <Link to="/problem" className={GuaranteeCss.link}><h2 className={GuaranteeCss.h}>常见问题</h2></Link>
                        <Link to="/customer" className={GuaranteeCss.link}><h2 className={GuaranteeCss.h2}>联系客服</h2></Link>
                       <Link to="/feedback" className={GuaranteeCss.link}> <h2 className={GuaranteeCss.h2}>意见反馈</h2></Link>
                    </div>
                    <div className={GuaranteeCss.right}>
                        <Route path="/problem" component={Problem}></Route>
                        <Route path="/customer" component={Customer}></Route>
                        <Route path="/feedback" component={Feedback}></Route>
                    </div>
                </div>
               </BrowserRouter>
               <BackTop />
   
   <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>  
            </div>
        )
    }
}