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
            <div className={HomePageCss.homepage_div}>
                <Header/>
                <div className={HomePageCss.homepage_homepage}>
                   
                        {/* 分类导航栏 */}
                        <div className={HomePageCss.homepage_classification}>
                            {/* 分类栏 */}
                            <div className={HomePageCss.homepage_allfication}>
                                <PageHeader title={<span  className={HomePageCss.homepage_menuheader}>分类</span>} style={{height:50,}}></PageHeader>
                                <Menu onClick={handleClick} mode="vertical" className={HomePageCss.homepage_fication} >
                                    
                                    <SubMenu  key="sub1" className={HomePageCss.homepage_submenutop} title={<Link to="/courier_help" className={HomePageCss.homepage_link}><span><img src={require("../imgs/19.png")} className={HomePageCss.homepage_fiicon}/><span className={HomePageCss.homepage_fispan}>快递帮拿</span></span></Link>}>
                                        <Menu.Item key="3"><Link to="/courier_help">小（货到付款）</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/courier_help">中（货到付款）</Link></Menu.Item>
                                        <Menu.Item key="5"><Link to="/courier_help">大（货到付款）</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" className={HomePageCss.homepage_submenu} title={<Link to="/quick_food_purchase/foods" className={HomePageCss.homepage_link}><span><img src={require("../imgs/20.png")} className={HomePageCss.homepage_fiicon}/><span className={HomePageCss.homepage_fispan}>食品速购</span></span></Link>}>
                                        <Menu.Item key="6"><Link to="/quick_food_purchase/cookedfood"><img src={require("../imgs/21.png")} className={HomePageCss.homepage_fiicon}/>熟食</Link></Menu.Item>
                                        <Menu.Item key="7"><Link to="/quick_food_purchase/snacks"><img src={require("../imgs/22.png")} className={HomePageCss.homepage_fiicon}/>零食</Link></Menu.Item>
                                        <Menu.Item key="8"><Link to="/quick_food_purchase/staplefood."><img src={require("../imgs/23.png")} className={HomePageCss.homepage_fiicon}/>膨化</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" className={HomePageCss.homepage_submenu} title={<Link to="/online_buy_water" className={HomePageCss.homepage_link}><span><img src={require("../imgs/24.png")} className={HomePageCss.homepage_fiicon}/><span className={HomePageCss.homepage_fispan}>网上购水</span></span></Link>}>
                                        <Menu.Item key="9"><Link to="/online_buy_water">1号公寓（货到付款）</Link></Menu.Item>
                                        <Menu.Item key="10"><Link to="/online_buy_water">2号公寓（货到付款）</Link></Menu.Item>
                                        <Menu.Item key="11"><Link to="/online_buy_water">3号公寓（货到付款）</Link></Menu.Item>
                                        <Menu.Item key="12"><Link to="/online_buy_water">4号公寓（货到付款）</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" className={HomePageCss.homepage_submenu} title={<Link to="/secondgoods/phone" className={HomePageCss.homepage_link}><span><img src={require("../imgs/25.png")} className={HomePageCss.homepage_fiicon}/><span className={HomePageCss.homepage_fispan}>跳蚤市场</span></span></Link>}>
                                        <Menu.Item key="12"><Link to="/secondgoods/phone"><img src={require("../imgs/29.png")} className={HomePageCss.homepage_fiicon}/>手机数码</Link></Menu.Item>
                                        <Menu.Item key="13"><Link to="/secondgoods/renting"><img src={require("../imgs/26.png")} className={HomePageCss.homepage_fiicon}/>租房</Link></Menu.Item>
                                        <Menu.Item key="14"><Link to="/secondgoods/beautymakeup"><img src={require("../imgs/28.png")} className={HomePageCss.homepage_fiicon}/>美妆</Link></Menu.Item>
                                        <Menu.Item key="15"><Link to="/secondgoods/clothes"><img src={require("../imgs/27.png")} className={HomePageCss.homepage_fiicon}/>衣服</Link></Menu.Item>
                                        <Menu.Item key="16"><Link to="/secondgoods/digital"><img src={require("../imgs/30.png")} className={HomePageCss.homepage_fiicon}/>其他</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu  key="sub5" className={HomePageCss.homepage_submenu} title={<Link to="/helpbar/threeday" className={HomePageCss.homepage_link}><span><img src={require("../imgs/31.png")} className={HomePageCss.homepage_fiicon}/><span className={HomePageCss.homepage_fispan}>互助贴吧</span></span></Link>}>
                                        <Menu.Item key="18"><Link to="/helpbar/threeday"><img src={require("../imgs/31.png")} className={HomePageCss.homepage_fiicon}/>互助贴吧</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub6" className={HomePageCss.homepage_submenu} title={<Link to="/repair" className={HomePageCss.homepage_link}><span><img src={require("../imgs/32.png")} className={HomePageCss.homepage_fiicon}/><span className={HomePageCss.homepage_fispan}>维修搬运</span></span></Link>}>
                                        <Menu.Item key="19"><Link to="/repair"><img src={require("../imgs/32.png")} className={HomePageCss.homepage_fiicon}/>维修搬运</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                            {/* 轮播图 */}
                            <div className={HomePageCss.homepage_carousel}>
                                <Carousel autoplay>
                                    <div>
                                        <Link to="/quick_food_purchase/foods"><img src={require("../imgs/t1.png")} className={HomePageCss.homepage_rotary}></img></Link>
                                    </div>
                                    <div>
                                        <Link to="/quick_food_purchase/foods"><img src={require("../imgs/t2.png")} className={HomePageCss.homepage_rotary}></img></Link>
                                    </div>
                                    <div>
                                        <Link to="/quick_food_purchase/foods"><img src={require("../imgs/t3.png")} className={HomePageCss.homepage_rotary}></img></Link>
                                    </div>
                                    <div>
                                        <Link to="/quick_food_purchase/foods"><img src={require("../imgs/t4.png")} className={HomePageCss.homepage_rotary}></img></Link>
                                    </div>
                                </Carousel>
                            </div>
                            {/* 登陆注册（个人中心） */}
                            <div className={HomePageCss.homepage_lr}>
                                <div className={HomePageCss.homepage_tou}>
                                    <img src={require("../imgs/7.png")} className={HomePageCss.homepage_itou}></img>
                                </div>
                                <div className={HomePageCss.homepage_login}>
                                    <Button className={HomePageCss.homepage_lb}><Link to="/login">登陆</Link></Button>
                                    <Button className={HomePageCss.homepage_lb}><Link to="/register">注册</Link></Button>
                                    <h3 className={HomePageCss.homepage_wec}>Welcome to Compus Help！</h3>
                                </div>
                            </div>
                        </div>
                        {/* 精选栏 */}
                        <div className={HomePageCss.homepage_xuan}>
                            {/* 食品精选 */}
                            <div className={HomePageCss.homepage_food}>
                                <div className={HomePageCss.homepage_fh}>
                                    <div className={HomePageCss.homepage_more}>
                                        <div className={HomePageCss.homepage_f}>精选食品</div>
                                        <a target="_blank" rel="noopener noreferrer" href ="/quick_food_purchase/foods" className={HomePageCss.homepage_lf}>查看更多>>></a> 
                                    </div>
                                    <div className={HomePageCss.homepage_picd}>
                                        <div className={HomePageCss.homepage_pics}>
                                            <a target="_blank" rel="noopener noreferrer" href="/quick_food_purchase/foods" className={HomePageCss.homepage_pica}>
                                                <div className={HomePageCss.homepage_pd1}><img src={require("../imgs/t1.png")} className={HomePageCss.homepage_pic} /></div>
                                                <div className={HomePageCss.homepage_pd2}>
                                                    <h2 className={HomePageCss.homepage_pich}>阿宽红油面皮速食品拌面袋装啊宽宿舍即食方便面泡面麻酱凉皮</h2>
                                                    <p className={HomePageCss.homepage_picp}>地道香辣川味，红油酸辣新口味</p>
                                                    <p className={HomePageCss.homepage_picp2}>4元/包</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/quick_food_purchase/foods"  className={HomePageCss.homepage_pica}>
                                                <div className={HomePageCss.homepage_pd1}><img src={require("../imgs/t2.png")} className={HomePageCss.homepage_pic} /></div>
                                                <div className={HomePageCss.homepage_pd2}>
                                                    <h2 className={HomePageCss.homepage_pich}>嗨吃家酸辣粉正宗网红酸辣粉桶装速食粉丝米线</h2>
                                                    <p className={HomePageCss.homepage_picp}>酸香麻辣，口感独特</p>
                                                    <p className={HomePageCss.homepage_picp2}>6元/桶</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/quick_food_purchase/foods"  className={HomePageCss.homepage_pica}>
                                                <div className={HomePageCss.homepage_pd1}><img src={require("../imgs/t3.png")} className={HomePageCss.homepage_pic} /></div>
                                                <div className={HomePageCss.homepage_pd2}>
                                                    <h2 className={HomePageCss.homepage_pich}>韩太螺蛳粉广西正宗螺丝粉速食方便面酸辣粉米粉螺狮粉</h2>
                                                    <p className={HomePageCss.homepage_picp}>七包料，口味升级</p>
                                                    <p className={HomePageCss.homepage_picp2}>4元/包</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/quick_food_purchase/foods"  className={HomePageCss.homepage_pica}>
                                                <div className={HomePageCss.homepage_pd1}><img src={require("../imgs/t4.png")} className={HomePageCss.homepage_pic} /></div>
                                                <div className={HomePageCss.homepage_pd2}>
                                                    <h2 className={HomePageCss.homepage_pich}>韩太火鸡面国产方便面网红速食超辣干拌炸酱面料袋装泡面</h2>
                                                    <p className={HomePageCss.homepage_picp}>甜辣劲爽，辣爆味蕾</p>
                                                    <p className={HomePageCss.homepage_picp2}>4元/包</p>
                                                </div>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* 跳蚤市场 */}
                            <div className={HomePageCss.homepage_second}>
                                <div className={HomePageCss.homepage_sec}>
                                    <div className={HomePageCss.homepage_smore}>
                                        <div className={HomePageCss.homepage_s}>跳蚤市场</div>
                                        <a target="_blank" rel="noopener noreferrer" href ="/secondgoods/phone" className={HomePageCss.homepage_sm}>查看更多>>></a> 
                                    </div>
                                    <div className={HomePageCss.homepage_spicd}>
                                        <div className={HomePageCss.homepage_spics}>
                                        {/*  target="_blank" rel="noopener noreferrer表示可以超链接到一个新的页面窗口 */}
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/renting" className={HomePageCss.homepage_spica}>
                                                <div className={HomePageCss.homepage_spd1}><img src={require("../imgs/ren1.jpg")} className={HomePageCss.homepage_spic} /></div>
                                                <div className={HomePageCss.homepage_spd2}>
                                                    <h2 className={HomePageCss.homepage_spich}>阿尔法温栖日租房</h2>
                                                    <p className={HomePageCss.homepage_p1}>￥</p>
                                                    <p className={HomePageCss.homepage_spicp2}>70</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/phone" className={HomePageCss.homepage_spica}>
                                                <div className={HomePageCss.homepage_spd1}><img src={require("../imgs/ph1.png")} className={HomePageCss.homepage_spic} /></div>
                                                <div className={HomePageCss.homepage_spd2}>
                                                    <h2 className={HomePageCss.homepage_spich}>华为honor/荣耀 畅玩7X 全网通高配版移动联通电信4G人脸解锁手机</h2>
                                                    <p className={HomePageCss.homepage_p1}>￥</p>
                                                    <p className={HomePageCss.homepage_spicp2}>540</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/digital" className={HomePageCss.homepage_spica}>
                                                <div className={HomePageCss.homepage_spd1}><img src={require("../imgs/dg1.jpg")} className={HomePageCss.homepage_spic} /></div>
                                                <div className={HomePageCss.homepage_spd2}>
                                                    <h2 className={HomePageCss.homepage_spich}>富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</h2>
                                                    <p className={HomePageCss.homepage_p1}>￥</p>
                                                    <p className={HomePageCss.homepage_spicp2}>200</p>
                                                </div>
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href="/secondgoods/clothes" className={HomePageCss.homepage_spica}>
                                                <div className={HomePageCss.homepage_spd1}><img src={require("../imgs/yi1.png")} className={HomePageCss.homepage_spic} /></div>
                                                <div className={HomePageCss.homepage_spd2}>
                                                    <h2 className={HomePageCss.homepage_spich}>汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</h2>
                                                    <p className={HomePageCss.homepage_p1}>￥</p>
                                                    <p className={HomePageCss.homepage_spicp2}>666</p>
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