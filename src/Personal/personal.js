import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import { Button, Collapse, List } from 'antd';
import List_lift from './List_left/List_left';
// import Message_list from './Message_list/message_list';
import BindingPhone from './BindingPhone/BindingPhone';
import AllOrder from './AllOrder/AllOrder';
import Address from './Address/Address';
import ChangeHeadPhoto from './ChangeHeadPhoto/ChangeHeadPhoto';
import Information from './Information/Information';
import News from './News/News';
// import MyWallet from './MyWallet';
import RealName from './RealName/RealName';
import RecyleOrder from './RecycleOrder/RecycleOrder';
import ReturnGood from './ReturnGood/ReturnGood';
import SetPassword from './SetPassword/SetPassword';
import UserDelete from './UserDelete/UserDelete';
// import UserLocked from './UserLocked';
import WaitEvaluate from './WaitEvaluate/WaitEvaluate';
import WaitGetGood from './WaitGetGood/WaitGetGood';
import WaitGiveMoney from './WaitGiveMoney/WaitGiveMoney';
import Header from './../Header/header';
import Footer from './../Footer/footer';


var PeraonalCss=require('./personal.css');


export default class Peraonal extends React.Component{
   

 

   
    render(){
      
   
        return(
            
       
        <div>
            
                 {/* <Button onClick={this.bbb}>按钮</Button> */}
            {/* 这里是头部 */}
            
            {/* <div className={PeraonalCss.heard}> */}
            
              {/* <div className={PeraonalCss.leirong}>头部</div> */}
            {/* </div> */}
            <Header></Header>
           
            {/* 这里是个人中心的页面 */}
            <div className={PeraonalCss.center_message}>
                {/* 左侧栏 */}
                <div className={PeraonalCss.left_message}>
                    {/* 头像 */}
                    <div className={PeraonalCss.photo}>
                        <div className={PeraonalCss.headphoto}>
                            <img src=""></img>
                        </div>
                        <p>王粑粑200703</p>
                    </div>
                    {/* 信息列表 */}
                    <div className={PeraonalCss.message_list}>
                      <div className={PeraonalCss.userlist}>
                      {/* <Message_list></Message_list> */}
                      <List_lift></List_lift>
                      </div>
                    </div>
                </div>  
      
                <div className={PeraonalCss.right_message}>
                  
                    <Route path="/personal/address" component={Address}></Route>
                    <Route path="/personal/allorder" component={AllOrder}></Route>
                    <Route path="/personal/bindingphone" component={BindingPhone}></Route>
                    <Route path="/personal/changeheadphone" component={ChangeHeadPhoto}></Route>
                    <Route path="/personal/information" component={Information}></Route>
                    <Route path="/personal/news" component={News}></Route>
                    {/* <Route path="/personal/mywallet" component={MyWallet}></Route> */}
                    <Route path="/personal/realname" component={RealName}></Route>
                    <Route path="/personal/recyleorder" component={RecyleOrder}></Route>
                    <Route path="/personal/returngood" component={ReturnGood}></Route>
                    <Route path="/personal/setpassword" component={SetPassword}></Route>
                    <Route path="/personal/userdelete" component={UserDelete}></Route>
                    {/* <Route path="/userlocked" component={UserLocked}></Route> */}
                    <Route path="/personal/waitevaluate" component={WaitEvaluate}></Route>
                    <Route path="/personal/waitgetgood" component={WaitGetGood}></Route>
                    <Route path="/personal/waitgivemoney" component={WaitGiveMoney}></Route>
                    
                </div>
               

            </div>
            {/* 这里是尾部 */}
            <div className={PeraonalCss.flooer}>
                <Footer></Footer>
            </div>
          

            
            <div >

            </div>
        </div>
        )
    
    }
}