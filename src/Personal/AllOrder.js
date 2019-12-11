import React from 'react';
import {Link,Route} from 'react-router-dom'
import No_buy_one from './No_buy_one';
import No_buy_two from './No_buy_two';




var AllOrderCss=require('./AllOrder.css')
//  class NoBuy extends React.Component{
//     render(){
//         return(
//             <div className={AllOrderCss.allorder_bottom}>
//             <div className={AllOrderCss.zuo}><img src={require('../images/1.png')}></img></div>
//             <div className={AllOrderCss.you}>
//                 <h5>你还没有购买过商品,赶紧去挑选商品~</h5>
//                 <p>去<Link to="/homepage"  className={AllOrderCss.link}>商城</Link>看看大家都喜欢的商品</p>
//             </div>
//         </div>
//         )
//     }
// }

export default class AllOrder extends React.Component{
    render(){
        return(
            <div className={AllOrderCss.all}>
                <div className={AllOrderCss.shousuo}>
                    <div className={AllOrderCss.shousuo_center}>
                       <div className={AllOrderCss.shousuo_left}><input type="text" placeholder="请输入订单中的商品名称或订单号"></input></div>
                       <div className={AllOrderCss.shousuo_right}>搜索</div>
                   </div>
                </div>

                <div className={AllOrderCss.allorder_list}>
                    <ul>
                        <li className={AllOrderCss.goods}>商品</li>
                        <li className={AllOrderCss.price}>单价(元)</li>
                        <li className={AllOrderCss.quantity}>数量</li>
                        <li className={AllOrderCss.aftersale}>售后</li>
                        <li className={AllOrderCss.total}>实付款(元)</li>
                        <li className={AllOrderCss.status}>交易状态</li>
                        <li className={AllOrderCss.other}>操作</li>
                    </ul>
                </div>
                 <div className={AllOrderCss.set_result}>
                     <div className={AllOrderCss.no_result}>
                        <Route path="/personal/allorder/no_buy_one" component={No_buy_one}></Route>
                        <Route path="/personal/allorder/waitgivemoney" component={No_buy_two}></Route>
                        <Route path="/personal/allorder/waitgetgood" component={No_buy_two}></Route>
                        <Route path="/personal/allorder/waitevaluate" component={No_buy_two}></Route>
                        <Route path="/personal/allorder/returngood" component={No_buy_two}></Route>
                        <Route path="/personal/allorder/recyleorder" component={No_buy_two}></Route>
                     </div>
                 
                 </div>
               {/* <NoBuy></NoBuy> */}
            </div>
        )
    }
}
