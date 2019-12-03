import React from 'react'
import { Button, Input ,BackTop} from 'antd'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import Phone from './../Secondgoods/Phone/phone';
import Digital from './../Secondgoods/Digital/digital';
import Renting from './../Secondgoods/Renting/renting';
import Beautymakeup from './../Secondgoods/Beautymakeup/beautymakeup';
import Clothes from './../Secondgoods/Clothes/clothes';
var SecondgoodsCSS = require('./secondgoods.css')
// 跳蚤市场 sc-cbx
export default class Secondgoods extends React.Component {
    render() {
        return (
            <div className={SecondgoodsCSS.div}>
                <Header/>
                <div className={SecondgoodsCSS.up}>
                    <div className={SecondgoodsCSS.upd}>
                        <Link to="/release" className={SecondgoodsCSS.link}><img src={require('../imgs/2.png')} className={SecondgoodsCSS.upimg}></img><p className={SecondgoodsCSS.upp}>发布闲置</p></Link>
                    </div>
                </div>
                <div>
                    <BrowserRouter basename="secondgoods">
                        <div className={SecondgoodsCSS.menu}>
                            <div className={SecondgoodsCSS.menuall}>
                                <Link to="/phone" className={SecondgoodsCSS.link}><div className={SecondgoodsCSS.divs}>手机数码</div></Link>
                                <Link to="/renting" className={SecondgoodsCSS.link}><div className={SecondgoodsCSS.divs}>租房</div></Link>
                                <Link to="/beautymakeup" className={SecondgoodsCSS.link}><div className={SecondgoodsCSS.divs}>美妆</div></Link>
                                <Link to="/clothes" className={SecondgoodsCSS.link}><div className={SecondgoodsCSS.divs}>衣服</div></Link>
                                <Link to="/digital" className={SecondgoodsCSS.link}><div className={SecondgoodsCSS.divs}>其他</div></Link>
                                
                            </div>
                            <div className={SecondgoodsCSS.down}>
                                <Route path="/phone" component={Phone}></Route>
                                <Route path="/digital" component={Digital}></Route>
                                <Route path="/renting" component={Renting}></Route>
                                <Route path="/beautymakeup" component={Beautymakeup}></Route>
                                <Route path="/clothes" component={Clothes}></Route>
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