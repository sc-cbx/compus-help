import React from 'react'
import { Button,Modal, Input,Carousel,BackTop } from 'antd'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from '../Header/header';
import Details from './Details/details';
import Commenton from './Commenton/commenton';
import Buysec from '../Buysec/buysec';
import Footer from '../Footer/footer';
var OrdersecCSS = require('./ordersec.css');
function success() {
    Modal.success({
      content: '成功加入购物车！',
    });
  }
  
export default class Ordersec extends React.Component {
    render() {
        return (
            // 跳蚤市场，商品详情总
            <div className={OrdersecCSS.all}>
                <Header/>
                <div className={OrdersecCSS.ad}>
                    <div className={OrdersecCSS.order}>
                        <div className={OrdersecCSS.picture}>
                            <Carousel autoplay className={OrdersecCSS.car}>
                                <div><img src={require("../imgs/xq2.png")} className={OrdersecCSS.img}></img></div>
                                <div><img src={require("../imgs/xq3.png")}  className={OrdersecCSS.img}></img></div>
                                <div><img src={require("../imgs/xq2.png")}  className={OrdersecCSS.img}></img></div>
                                <div><img src={require("../imgs/xq3.png")}  className={OrdersecCSS.img}></img></div>
                            </Carousel>
                        </div>
                        <div className={OrdersecCSS.buy}>
                            <div className={OrdersecCSS.di1}>
                                <h1 className={OrdersecCSS.h1}>富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</h1>
                                <p className={OrdersecCSS.p1}>免费代写贺卡 简易曝光调整 自动出片</p>
                            </div>
                            <div className={OrdersecCSS.di2}>
                                <h2 className={OrdersecCSS.h2}>原价</h2>
                                <p className={OrdersecCSS.p2}>¥</p>
                                <p className={OrdersecCSS.p3}>300</p>
                            </div>
                            <div className={OrdersecCSS.di3}>
                                <h2 className={OrdersecCSS.h3}>转价</h2>
                                <p className={OrdersecCSS.p4}>¥</p>
                                <p className={OrdersecCSS.p5}>200</p>
                            </div>
                            <div className={OrdersecCSS.di4}>
                                <h3 className={OrdersecCSS.h}>成色：</h3>
                                <p className={OrdersecCSS.p}>全新</p>
                            </div>
                            <div className={OrdersecCSS.di5}>
                                <h3 className={OrdersecCSS.h}>联系方式：</h3>
                                <p className={OrdersecCSS.p}>183****33**</p>
                            </div>
                            <div className={OrdersecCSS.di6}>
                                <Button className={OrdersecCSS.bu1}><Link to="/buysec">立即购买</Link></Button>
                                <Button onClick={success} className={OrdersecCSS.bu2}><img src={require("../imgs/33.png")} className={OrdersecCSS.buimg}></img>加入购物车</Button>
                            </div>
                        </div>
                    </div>
                    {/* 详情，评论 */}
                    <div className={OrdersecCSS.omore}>
                        <BrowserRouter basename="ordersec">
                            <div className={OrdersecCSS.menu}>
                                <div className={OrdersecCSS.menuall}>
                                    <Link to="/details" className={OrdersecCSS.link}><div className={OrdersecCSS.divs}>商品详情</div></Link>
                                    <Link to="/commenton" className={OrdersecCSS.link}><div className={OrdersecCSS.divs}>评论</div></Link>
                                </div>
                                
                                <div className={OrdersecCSS.down}>
                                
                                    <Route path="/details" component={Details}></Route>
                                    <Route path="/commenton" component={Commenton}></Route>
                                    
                                </div>
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
                <div>
    <BackTop />
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
  
  </div>
            <Footer/>
            </div>
        );
    }
}