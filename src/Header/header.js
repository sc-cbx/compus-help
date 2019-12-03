import React from 'react';
import {Link,BrowserRouter,Route} from 'react-router-dom';
import {Input,Menu,Dropdown,Icon} from 'antd';
var HeaderCss=require('./header.css');
const { Search } = Input;
const { SubMenu } = Menu;
const menu = (
        <Menu>
            <SubMenu title="新手帮助">
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="/Guarantee/Problem">
                    常见问题
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="/Guarantee/Customer">
                    联系客服
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="/Guarantee/Feedback">
                    意见反馈
                    </a>
                </Menu.Item>
            </SubMenu>
          
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
              权益保障
            </a>
          </Menu.Item>
          <SubMenu title="关于我们">
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="Us/Purpose">
                    网页用途
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="Us/Mypromise">
                    我们承诺
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="Us/Idea">
                    我的理念
                </a>
            </Menu.Item>
          </SubMenu>
          
        </Menu>
      );
export default class Header extends React.Component{
    
    render(){
        return(
            <div className={HeaderCss.header}>
          
                    {/*表头 */}
                    <div className={HeaderCss.div}>
                        
                        <ul className={HeaderCss.first}>
                            <li className={HeaderCss.firstli}>
                                <div className={HeaderCss.firstdiv}>
                                    <span >
                                        <img src={require('./../imgs/11.png')} className={HeaderCss.firstimg}></img>
                                    </span>
                                    <span className={HeaderCss.span}><Link to="/homepage" className={HeaderCss.link}>首页</Link></span>
                                </div>
                                
                            </li>
                            <li className={HeaderCss.separate}>|</li>
                            <li className={HeaderCss.order}>
                                <div className={HeaderCss.myorder}>
                                    <span className={HeaderCss.span}><Link to="/myorder" className={HeaderCss.link}>我的订单</Link></span>
                                </div>
                            </li>
                            <li className={HeaderCss.us}>
                                <div className={HeaderCss.myorder}>
                                <Dropdown overlay={menu} className={HeaderCss.dro}>
                                    <a className={HeaderCss.dspan} href="#">
                                    关于我们 <Icon type="down" className={HeaderCss.dc}/>
                                    </a>
                                </Dropdown>
                                </div>
                            </li>
                       </ul>
                    </div>
                    {/*搜索栏  */}
                    <div className={HeaderCss.search}>
                        <div className={HeaderCss.search_center}>
                        <ul>
                            {/* logo */}
                            <li className={HeaderCss.lilogo}>
                                <div>
                                    <Link to="/homepage"><img src={require('./../imgs/11.png')} className={HeaderCss.img}></img></Link>
                                </div>
                            </li>
                            {/* 搜索 */}
                            <li  className={HeaderCss.lisearch}>
                                <div>
                                <Search onSearch={value => console.log(value)} className={HeaderCss.input}/>
                                </div> 
                            </li>
                            <li className={HeaderCss.linews}>
                                <div>
                                    <span>
                                        <img src={require('./../imgs/6.png')} className={HeaderCss.img}></img>
                                    </span>
                                    <span className={HeaderCss.ds}><Link to="/news"  className={HeaderCss.link}>消息</Link></span>
                                </div>
                            </li>
                            <li className={HeaderCss.liCollection}>
                                <div>
                                    <span>
                                        <img src={require('./../imgs/4.png')} className={HeaderCss.img}></img>
                                    </span>
                                    <span className={HeaderCss.ds}><Link to="/collection/commodity" className={HeaderCss.link}>收藏</Link></span>
                                </div>
                            </li>
                            <li className={HeaderCss.lishop}>
                                <div>
                                    <span>
                                        <img src={require('./../imgs/10.png') } className={HeaderCss.img}></img>
                                    </span>
                                    <span className={HeaderCss.ds}><Link to="/shopping_cart/cart_goods" className={HeaderCss.link}>购物车</Link></span>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div>
                      
                    </div>
                
            </div>
        )
    }
}