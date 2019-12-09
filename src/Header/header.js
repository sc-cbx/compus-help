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
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
              支付方式
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
                    <div className={HeaderCss.header_div}>
                        
                        <ul className={HeaderCss.header_first}>
                            <li className={HeaderCss.header_firstli}>
                                <div className={HeaderCss.header_firstdiv}>
                                    <span >
                                        <img src={require('./../imgs/11.png')} className={HeaderCss.header_firstimg}></img>
                                    </span>
                                    <span className={HeaderCss.header_span}><Link to="/homepage" className={HeaderCss.header_link}>首页</Link></span>
                                </div>
                                
                            </li>
                            <li className={HeaderCss.header_separate}>|</li>
                            <li className={HeaderCss.header_order}>
                                <div className={HeaderCss.header_myorder}>
                                    <span className={HeaderCss.header_span}><Link to="/personal/allorder/no_buy_one" className={HeaderCss.header_link}>我的订单</Link></span>
                                </div>
                            </li>
                            <li className={HeaderCss.header_us}>
                                <div className={HeaderCss.header_myorder}>
                                <Dropdown overlay={menu} className={HeaderCss.header_dro}>
                                    <a className={HeaderCss.header_dspan} href="#">
                                    关于我们 <Icon type="down" className={HeaderCss.header_dc}/>
                                    </a>
                                </Dropdown>
                                </div>
                            </li>
                       </ul>
                    </div>
                    {/*搜索栏  */}
                    <div className={HeaderCss.header_search}>
                        <div className={HeaderCss.search_center}>
                        <ul>
                            {/* logo */}
                            <li className={HeaderCss.header_lilogo}>
                                <div>
                                    <Link to="/homepage"><img src={require('./../imgs/logo.png')} className={HeaderCss.header_logo}></img></Link>
                                </div>
                            </li>
                            {/* 搜索 */}
                            <li  className={HeaderCss.header_lisearch}>
                                <div>
                                <Search onSearch={value => console.log(value)} className={HeaderCss.header_input}/>
                                </div> 
                            </li>
                            <li className={HeaderCss.header_linews}>
                                <div>
                                    <span>
                                        <img src={require('./../imgs/6.png')} className={HeaderCss.header_img}></img>
                                    </span>
                                    <span className={HeaderCss.header_ds}><Link to="/personal/news"  className={HeaderCss.header_link}>消息</Link></span>
                                </div>
                            </li>
                            <li className={HeaderCss.header_liCollection}>
                                <div>
                                    <span>
                                        <img src={require('./../imgs/4.png')} className={HeaderCss.header_img}></img>
                                    </span>
                                    <span className={HeaderCss.header_ds}><Link to="/collection/commodity" className={HeaderCss.header_link}>收藏</Link></span>
                                </div>
                            </li>
                            <li className={HeaderCss.header_lishop}>
                                <div>
                                    <span>
                                        <img src={require('./../imgs/10.png') } className={HeaderCss.header_img}></img>
                                    </span>
                                    <span className={HeaderCss.header_s}><Link to="/shopping_cart/cart_goods" className={HeaderCss.header_link}>购物车</Link></span>
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