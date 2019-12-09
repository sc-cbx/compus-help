import React from 'react';
import {Link,Route} from 'react-router-dom';
import First_page from './First_page';
import ZhangHao from './ZhangHao';
import Help from './Help';

var MyWalletCss=require('./MyWallet.css');


 


export default class MyWallet extends React.Component{
 

        

   
    render(){
        return(
            <div className={MyWalletCss.all}>
                <div className={MyWalletCss.tiny_head}>
                    <div className={MyWalletCss.tiny}>
                     <div className={MyWalletCss.gohome}><Link to="/homepage">校园帮首页</Link></div>
                        <div className={MyWalletCss.right}>退出登录</div>
                        <div className={MyWalletCss.left}>您好，XXXX</div>
                    </div>
                </div>
                <div className={MyWalletCss.wallet_head}>
                    <div className={MyWalletCss.title}>
                       <Link to="/mywallet/first_page"> <h3>我的钱包</h3></Link>
                        <div className={MyWalletCss.wallet_list}>
                               <ul>
                                   <Link to="/mywallet/first_page" className={MyWalletCss.link}><li>首页</li></Link>
                                   <Link to="/mywallet/zhanghao/zhanghao_xingxi" className={MyWalletCss.link}><li>账号管理</li></Link> 
                                   <Link to="/mywallet/help/help_anquan" className={MyWalletCss.link}><li>帮助中心</li></Link>
                               </ul>
                        </div>  
                    </div>

                </div>

                        <div className={MyWalletCss.page}>
                          <Route path="/mywallet/first_page" component={First_page}></Route>
                          <Route path="/mywallet/zhanghao" component={ZhangHao}></Route>
                          <Route path="/mywallet/help" component={Help}></Route>

                        </div>
            </div>
        )
    }
}
