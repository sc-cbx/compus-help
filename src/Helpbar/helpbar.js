import React from 'react'
import { Button, Input,BackTop,Avatar } from 'antd'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import Threeday from './Threeday/threeday';
import Week from './Week/week';
import Month from './Month/month';
var HelpbarCSS = require('./helpbar.css')
// 互助贴吧的首页
export default class Helpbar extends React.Component {
    render() {
        return (
            <div className={HelpbarCSS.div}>
                <Header/>
                <div className={HelpbarCSS.up}>
                    <div className={HelpbarCSS.upd}>
                        <Link to="/helprelease" className={HelpbarCSS.link}><img src={require('../imgs/2.png')} className={HelpbarCSS.upimg}></img><p className={HelpbarCSS.upp}>求助</p></Link>
                    </div>
                </div>
                <div>
                    <BrowserRouter basename="helpbar">
                        <div className={HelpbarCSS.menu}>
                            <div className={HelpbarCSS.menuall}>
                                <Link to="/threeday" className={HelpbarCSS.link}><div className={HelpbarCSS.divs}>3天之内</div></Link>
                                <Link to="/week" className={HelpbarCSS.link}><div className={HelpbarCSS.divs}>1周之内</div></Link>
                                <Link to="/month" className={HelpbarCSS.link}><div className={HelpbarCSS.divs}>1月之内</div></Link>
                            </div>
                            <div className={HelpbarCSS.down}>
                            <Route path="/threeday" component={Threeday}></Route>
                            <Route path="/week" component={Week}></Route>
                            <Route path="/month" component={Month}></Route>
                        </div>
                        </div>
                    </BrowserRouter>
                </div>

                   <div>
                <BackTop />
            
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
             
            </div>            
                <Footer/>
        </div>
            
        );
    }
}