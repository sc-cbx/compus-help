import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { Menu, Carousel,PageHeader,Button,BackTop  } from 'antd';
import Secondgoods from '../Secondgoods/secondgoods';
const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}
var HomePageCss=require('./homepage.css');
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.div}>
                <Header/>
                <div className={HomePageCss.homepage}>
                   
                        {/* 分类导航栏 */}
                        <div className={HomePageCss.classification}>
                            {/* 分类栏 */}
                            <div className={HomePageCss.allfication}>
                                <PageHeader title={<span  className={HomePageCss.menuheader}>分类</span>} style={{height:50,}}></PageHeader>
                                <Menu onClick={handleClick} mode="vertical" className={HomePageCss.fication} >
                                    
                                    <SubMenu  key="sub1" className={HomePageCss.submenutop} title={<span><img src={require("../imgs/19.png")} className={HomePageCss.fiicon}/><span className={HomePageCss.fispan}><Link to="/courier_helps" className={HomePageCss.link}>快递帮拿</Link></span></span>}>
                                        <Menu.Item key="3"><Link to="/expresshelp">小</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/expresshelp">中</Link></Menu.Item>
                                        <Menu.Item key="5"><Link to="/expresshelp">大</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" className={HomePageCss.submenu} title={<span><img src={require("../imgs/20.png")} className={HomePageCss.fiicon}/><span className={HomePageCss.fispan}><Link to="/quick_food_purchase/foods" className={HomePageCss.link}>食品速购</Link></span></span>}>
                                        <Menu.Item key="6"><Link to="/quick_food_purchase/cookedfood"><img src={require("../imgs/21.png")} className={HomePageCss.fiicon}/>熟食</Link></Menu.Item>
                                        <Menu.Item key="7"><Link to="/quick_food_purchase/snacks"><img src={require("../imgs/22.png")} className={HomePageCss.fiicon}/>零食</Link></Menu.Item>
                                        <Menu.Item key="8"><Link to="/quick_food_purchase/staplefood."><img src={require("../imgs/23.png")} className={HomePageCss.fiicon}/>膨化</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" className={HomePageCss.submenu} title={<span><img src={require("../imgs/24.png")} className={HomePageCss.fiicon}/><span className={HomePageCss.fispan}><Link to="/online_buy_waters/online_buy_waters" className={HomePageCss.link}>网上购水</Link></span></span>}>
                                        <Menu.Item key="9"><Link to="/water">1号公寓</Link></Menu.Item>
                                        <Menu.Item key="10"><Link to="/water">2号公寓</Link></Menu.Item>
                                        <Menu.Item key="11"><Link to="/water">3号公寓</Link></Menu.Item>
                                        <Menu.Item key="12"><Link to="/water">4号公寓</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" className={HomePageCss.submenu} title={<span><img src={require("../imgs/25.png")} className={HomePageCss.fiicon}/><span className={HomePageCss.fispan}><Link to="/secondgoods/phone" className={HomePageCss.link}>跳蚤市场</Link></span></span>}>
                                        <Menu.Item key="12"><Link to="/secondgoods/renting"><img src={require("../imgs/26.png")} className={HomePageCss.fiicon}/>租房</Link></Menu.Item>
                                        <Menu.Item key="14"><Link to="/secondgoods/beautymakeup"><img src={require("../imgs/28.png")} className={HomePageCss.fiicon}/>美妆</Link></Menu.Item>
                                        <Menu.Item key="15"><Link to="/secondgoods/clothes"><img src={require("../imgs/27.png")} className={HomePageCss.fiicon}/>衣服</Link></Menu.Item>
                                        <Menu.Item key="16"><Link to="/secondgoods/phone"><img src={require("../imgs/29.png")} className={HomePageCss.fiicon}/>手机数码</Link></Menu.Item>
                                        <Menu.Item key="17"><Link to="/secondgoods/digital"><img src={require("../imgs/30.png")} className={HomePageCss.fiicon}/>其他</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu  key="sub5" className={HomePageCss.submenu} title={<span><img src={require("../imgs/31.png")} className={HomePageCss.fiicon}/><span className={HomePageCss.fispan}><Link to="/helpbar/threeday" className={HomePageCss.link}>互助贴吧</Link></span></span>}>
                                        <Menu.Item key="18"><Link to="/helpbar/threeday"><img src={require("../imgs/31.png")} className={HomePageCss.fiicon}/>互助贴吧</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub6" className={HomePageCss.submenu} title={<span><img src={require("../imgs/32.png")} className={HomePageCss.fiicon}/><span className={HomePageCss.fispan}><Link to="/repair" className={HomePageCss.link}>维修搬运</Link></span></span>}>
                                        <Menu.Item key="19"><Link to="/repair"><img src={require("../imgs/32.png")} className={HomePageCss.fiicon}/>维修搬运</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                            {/* 轮播图 */}
                            <div className={HomePageCss.carousel}>
                                <Carousel autoplay>
                                    <div>
                                        <Link to="/quickfood"><img src={require("../imgs/t1.png")} className={HomePageCss.rotary}></img></Link>
                                    </div>
                                    <div>
                                        <Link to="/quickfood"><img src={require("../imgs/t2.png")} className={HomePageCss.rotary}></img></Link>
                                    </div>
                                    <div>
                                        <Link to="/quickfood"><img src={require("../imgs/t3.png")} className={HomePageCss.rotary}></img></Link>
                                    </div>
                                    <div>
                                        <Link to="/quickfood"><img src={require("../imgs/t4.png")} className={HomePageCss.rotary}></img></Link>
                                    </div>
                                </Carousel>
                            </div>
                            {/* 登陆注册（个人中心） */}
                            <div className={HomePageCss.lr}>
                                <div className={HomePageCss.tou}>
                                    <img src={require("../imgs/7.png")} className={HomePageCss.itou}></img>
                                </div>
                                <div className={HomePageCss.login}>
                                    <Button className={HomePageCss.lb}><Link to="/login">登陆</Link></Button>
                                    <Button className={HomePageCss.lb}><Link to="/register">注册</Link></Button>
                                    <h3 className={HomePageCss.wec}>Welcome to Compus Help！</h3>
                                </div>
                            </div>
                        </div>
                        {/* 精选栏 */}
                        <div className={HomePageCss.xuan}>
                            {/* 食品精选 */}
                            <div className={HomePageCss.food}>
                                <div className={HomePageCss.fh}>
                                    <div className={HomePageCss.more}>
                                        <div className={HomePageCss.f}>精选食品</div>
                                        <a target="_blank" rel="noopener noreferrer" href ="/quickfood" className={HomePageCss.lf}>查看更多>>></a> 
                                    </div>
                                    <div className={HomePageCss.picd}>
                                        <div className={HomePageCss.pics}>
                                            <a target="_blank" rel="noopener noreferrer" href="/quickfood" className={HomePageCss.pica}>
                                                <div className={HomePageCss.pd1}><img src={require("../imgs/t1.png")} className={HomePageCss.pic} /></div>
                                                <div className={HomePageCss.pd2}>
                                                    <h2 className={HomePageCss.pich}>阿宽红油面皮速食品拌面袋装啊宽宿舍即食方便面泡面麻酱凉皮</h2>
                                                    <p className={HomePageCss.picp}>地道香辣川味，红油酸辣新口味</p>
                                                    <p className={HomePageCss.picp2}>4元/包</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/quickfood"  className={HomePageCss.pica}>
                                                <div className={HomePageCss.pd1}><img src={require("../imgs/t2.png")} className={HomePageCss.pic} /></div>
                                                <div className={HomePageCss.pd2}>
                                                    <h2 className={HomePageCss.pich}>嗨吃家酸辣粉正宗网红酸辣粉桶装速食粉丝米线</h2>
                                                    <p className={HomePageCss.picp}>酸香麻辣，口感独特</p>
                                                    <p className={HomePageCss.picp2}>6元/桶</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/quickfood"  className={HomePageCss.pica}>
                                                <div className={HomePageCss.pd1}><img src={require("../imgs/t3.png")} className={HomePageCss.pic} /></div>
                                                <div className={HomePageCss.pd2}>
                                                    <h2 className={HomePageCss.pich}>韩太螺蛳粉广西正宗螺丝粉速食方便面酸辣粉米粉螺狮粉</h2>
                                                    <p className={HomePageCss.picp}>七包料，口味升级</p>
                                                    <p className={HomePageCss.picp2}>4元/包</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/quickfood"  className={HomePageCss.pica}>
                                                <div className={HomePageCss.pd1}><img src={require("../imgs/t4.png")} className={HomePageCss.pic} /></div>
                                                <div className={HomePageCss.pd2}>
                                                    <h2 className={HomePageCss.pich}>韩太火鸡面国产方便面网红速食超辣干拌炸酱面料袋装泡面</h2>
                                                    <p className={HomePageCss.picp}>甜辣劲爽，辣爆味蕾</p>
                                                    <p className={HomePageCss.picp2}>4元/包</p>
                                                </div>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* 跳蚤市场 */}
                            <div className={HomePageCss.second}>
                                <div className={HomePageCss.sec}>
                                    <div className={HomePageCss.smore}>
                                        <div className={HomePageCss.s}>跳蚤市场</div>
                                        <a target="_blank" rel="noopener noreferrer" href ="/secondgoods/phone" className={HomePageCss.sm}>查看更多>>></a> 
                                    </div>
                                    <div className={HomePageCss.spicd}>
                                        <div className={HomePageCss.spics}>
                                        {/*  target="_blank" rel="noopener noreferrer表示可以超链接到一个新的页面窗口 */}
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/renting" className={HomePageCss.spica}>
                                                <div className={HomePageCss.spd1}><img src={require("../imgs/ren1.jpg")} className={HomePageCss.spic} /></div>
                                                <div className={HomePageCss.spd2}>
                                                    <h2 className={HomePageCss.spich}>阿尔法温栖日租房</h2>
                                                    <p className={HomePageCss.p1}>￥</p>
                                                    <p className={HomePageCss.spicp2}>70</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/phone" className={HomePageCss.spica}>
                                                <div className={HomePageCss.spd1}><img src={require("../imgs/ph1.png")} className={HomePageCss.spic} /></div>
                                                <div className={HomePageCss.spd2}>
                                                    <h2 className={HomePageCss.spich}>华为honor/荣耀 畅玩7X 全网通高配版移动联通电信4G人脸解锁手机</h2>
                                                    <p className={HomePageCss.p1}>￥</p>
                                                    <p className={HomePageCss.spicp2}>540</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/digital" className={HomePageCss.spica}>
                                                <div className={HomePageCss.spd1}><img src={require("../imgs/dg1.jpg")} className={HomePageCss.spic} /></div>
                                                <div className={HomePageCss.spd2}>
                                                    <h2 className={HomePageCss.spich}>富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</h2>
                                                    <p className={HomePageCss.p1}>￥</p>
                                                    <p className={HomePageCss.spicp2}>200</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/clothes" className={HomePageCss.spica}>
                                                <div className={HomePageCss.spd1}><img src={require("../imgs/yi1.png")} className={HomePageCss.spic} /></div>
                                                <div className={HomePageCss.spd2}>
                                                    <h2 className={HomePageCss.spich}>汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</h2>
                                                    <p className={HomePageCss.p1}>￥</p>
                                                    <p className={HomePageCss.spicp2}>666</p>
                                                </div>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Route path="/secondgoods/phone" component={Secondgoods}></Route>
                        </div>
                   
                </div> 
                       
                <div>
    <BackTop />
   
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
   
  </div>
                <Footer/>
        
            </div>
        )
    }
}