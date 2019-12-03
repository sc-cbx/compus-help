import React from 'react';
import {Link,Route} from 'react-router-dom';
import Help_congzhi from './Help_chongzhi';
import Help_renzhen from './Help_renzhen';
import Help_anquan from './Help_anquan';


var HelpCss=require('./Help.css')
export default class Help extends React.Component{
    render(){
        return(
            <div className={HelpCss.all}>
                <div className={HelpCss.left_list}>
                     <ul>
                         <li className={HelpCss.icon}>帮助中心</li>
                        <Link to="/mywallet/help/help_chongzhi" className={HelpCss.link}><li>充值</li></Link> 
                        <Link to="/mywallet/help/help_renzhen" className={HelpCss.link}><li>实名认证</li></Link> 
                        <Link to="/mywallet/help/help_anquan" className={HelpCss.link}><li>账户安全</li></Link>
                     </ul>
                </div>

                <div className={HelpCss.right_center}>
                       <Route path="/mywallet/help/help_chongzhi" component={Help_congzhi}></Route>
                       <Route path="/mywallet/help/help_renzhen" component={Help_renzhen}></Route>
                       <Route path="/mywallet/help/help_anquan" component={Help_anquan}></Route>
                </div>
                
            </div>
        )
    }
}
