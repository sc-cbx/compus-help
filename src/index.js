import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import LoginPage from './Login/login';
import Personal from './Personal/personal';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Myorder from './Myorder/myorder';
import Collection from './Collection/collection';
import Shopping_cart from './Shopping_cart/shopping_cart';
import News from './News/news';
import Register from './Register/register';
import Guarantee from './Footer/Guarantee/guarantee';
import Us from './Footer/Us/us';
import Secondgoods from './Secondgoods/secondgoods';
import Quick_food_purchase from './Quick_food_purchase/quick_food_purchase';
import Ordersec from './Ordersec/ordersec';
import Buysec from './Buysec/buysec';
import Release from './Secondgoods/Release/release';
import Courier_helps from './Courier_help/courier_helps';
import Online_buy_waters from './Online_buy_water/online_buy_water';
import Helpbar from './Helpbar/helpbar';
import Repair from './Repair/repair';
import Helpdetails from './Helpbar/Helpdetails/helpdetails';
import Helprelease from './Helpbar/Helprelease/helprelease';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import User_locked from './Personal/Safety/User_lockes';
import User_notlocked from './Personal/Safety/User_notlocked';
import User_safety from './Personal/Safety/User_safety';
import UserLocked from './Personal/UserLocked/UserLocked';
import MyWallet from './Personal/wallet/MyWallet';
import ZhangHao_card_add from './Personal/wallet/ZhangHao_card_add';
// import Picture1 from './HomePage/First/Picture1/picture1';


class IndexPage extends React.Component{
    render(){

        return(
            <div>
               <BrowserRouter>
               <Switch>
                   <Route path="/homepage" component={HomePage}></Route>
                   <Route path="/secondgoods" component={Secondgoods}></Route>
                   <Route path="/login" component={LoginPage}></Route>
                   <Route path="/myorder" component={Myorder}></Route>
                   <Route path="/collection" component={Collection}></Route>
                   <Route path="/shopping_cart" component={Shopping_cart}></Route>
                   <Route path="/news" component={News}></Route>
                   <Route path="/register" component={Register}></Route>
                   <Route path="/guarantee" component={Guarantee}></Route>
                   <Route path="/personal" component={Personal}></Route>
                   <Route path="/us" component={Us}></Route>
                   <Route path="/quick_food_purchase" component={Quick_food_purchase}></Route>
                   <Route path="/ordersec" component={Ordersec}></Route>
                   <Route path="/buysec" component={Buysec}></Route>
                    <Route path="/release" component={Release}></Route>
                    <Route path="/courier_helps" component={Courier_helps}></Route>
                    <Route path="/online_buy_waters" component={Online_buy_waters}></Route>
                    <Route path="/helpbar" component={Helpbar}></Route>
                    <Route path="/repair" component={Repair}></Route>
                    <Route path="/helpdetails" component={Helpdetails}></Route>
                    <Route path="/helprelease" component={Helprelease}></Route>
                    <Route path="/forgetpassword" component={ForgetPassword}></Route>
                    <Route path="/userlocked" component={UserLocked}></Route>
                   <Route path="/user_locked" component={User_locked}></Route>
                   <Route path="/user_notlocked" component={User_notlocked}></Route>
                   <Route path="/user_safety" component={User_safety}></Route>
                   <Route path="/mywallet" component={MyWallet}></Route>
                   <Route path="/zhanghao_card_add" component={ZhangHao_card_add}></Route>
                   {/*<Route component={Main}/> */}{/* 默认路由 */}
                   
                   <Redirect to="/homepage"></Redirect>
               </Switch>
               </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
