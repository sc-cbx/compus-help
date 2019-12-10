import React from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import { BackTop  } from 'antd';
import Purpose from './Purpose/purpose';
import Mypromise from './Mypromise/mypromise';
import Idea from './Idea/idea';
var UsCss=require('./us.css');
export default class Us extends React.Component{
    render(){
        return(
            // 关于我们
            <div>
                <div className={UsCss.tou}>
                    <img src={require("./../../imgs/35.png")} className={UsCss.timg}></img>
                    <h1 className={UsCss.h1}>校园帮——关于我们</h1>
                    <Link to="/homepage" className={UsCss.back}>返回</Link>
                </div>
                <BrowserRouter basename="us">
                <div  className={UsCss.down}>
                     <div className={UsCss.left}>
                        <h2 className={UsCss.h}><Link to="/purpose" className={UsCss.link}>网页用途</Link></h2>
                        <h2 className={UsCss.h2}><Link to="/mypromise" className={UsCss.link}>我们承诺</Link></h2>
                        <h2 className={UsCss.h2}><Link to="/idea" className={UsCss.link}>我的理念</Link></h2>
                    </div>
                    <div className={UsCss.right}>
                        <Route path="/purpose" component={Purpose}></Route>
                        <Route path="/mypromise" component={Mypromise}></Route>
                        <Route path="/idea" component={Idea}></Route>
                    </div>
                </div>
               </BrowserRouter>
               <BackTop />
   
   <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>  
            </div>
        )
    }
}