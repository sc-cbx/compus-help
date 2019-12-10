import React from 'react'
import { Button,Modal, Input,Carousel,BackTop } from 'antd'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from '../Header/header';
import Details from './Details/details';
import Commenton from './Commenton/commenton';
import Buysec from '../Buysec/buysec';
import Footer from '../Footer/footer';
var goods = require('./goods.css');
function success() {
    Modal.success({
      content: '成功加入购物车！',
    });
  }
  
export default class Goods extends React.Component {
    render() {
        return (
            // 跳蚤市场，商品详情总
            <div className={goods.all}>
                <Header/>
                <div className={goods.ad}>
                    <div className={goods.order}>
                        <div className={goods.picture}>
                            <Carousel autoplay className={goods.car}>
                                <div><img src={require("../imgs/O1CN01e2sClP1rp1p4H6oPVitem_pic.jpg")} className={goods.img}></img></div>
                                <div><img src={require("../imgs/12047089632441691876&fm26&gp.jpg")}  className={goods.img}></img></div>
                                <div><img src={require("../imgs/u3851711179942763536&fm26&gp0.jpg")}  className={goods.img}></img></div>
                                <div><img src={require("../imgs/u41477241454285966385&fm26&gp0.jpg")}  className={goods.img}></img></div>
                            </Carousel>
                        </div>
                        <div className={goods.buy}>
                            <div className={goods.di1}>
                                <h1 className={goods.h1}>嗨吃家酸辣粉正宗网红酸辣粉桶装速食粉丝米线</h1>
                                <p className={goods.p1}>酸香麻辣，口感独特</p>
                            </div>
                            <div className={goods.di2}>
                                <h2 className={goods.h2}>原价</h2>
                                <p className={goods.p2}>¥</p>
                                <p className={goods.p3}>9.00</p>
                            </div>
                            <div className={goods.di3}>
                                <h2 className={goods.h3}>转价</h2>
                                <p className={goods.p4}>¥</p>
                                <p className={goods.p5}>8.50</p>
                            </div>
                            <div className={goods.di4}>
                                <h3 className={goods.h}>口味：</h3>
                                <p className={goods.p}>酸辣</p>
                            </div>
                            <div className={goods.di5}>
                                <h3 className={goods.h}>联系方式：</h3>
                                <p className={goods.p}>183****33**</p>
                            </div>
                            <div className={goods.di6}>
                                <Button className={goods.bu1}><Link to="/buysec">立即购买</Link></Button>
                                <Button onClick={success} className={goods.bu2}><img src={require("../imgs/33.png")} className={goods.buimg}></img>加入购物车</Button>
                            </div>
                        </div>
                    </div>
                    {/* 详情，评论 */}
                    <div className={goods.omore}>
                        <BrowserRouter basename="goods">
                            <div className={goods.menu}>
                                <div className={goods.menuall}>
                                    <Link to="/details" className={goods.link}><div className={goods.divs}>商品详情</div></Link>
                                    <Link to="/commenton" className={goods.link}><div className={goods.divs}>评论</div></Link>
                                </div>
                                
                                <div className={goods.down}>
                                
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