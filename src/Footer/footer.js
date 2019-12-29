import React from 'react';
import {Link} from 'react-router-dom';
var FooterCss=require('./footer.css');
export default class Footer extends React.Component{
    render(){
        return(
            // 脚部
            <div className={FooterCss.footer_footer}>
                <div className={FooterCss.footer_logo}>
                    <img src={require('./../imgs/35.png')} className={FooterCss.footer_loimg}></img>
                </div>
                {/* 新手帮助 */}
                <div className={FooterCss.footer_d1}>
                    <h1 className={FooterCss.footer_gh}>新手帮助</h1>
                    <Link to="/guarantee/problem"><p className={FooterCss.footer_ga}>常见问题</p></Link>
                    <Link to="/guarantee/customer"><p className={FooterCss.footer_ga}>联系客服</p></Link>
                    <Link to="/guarantee/feedback"><p className={FooterCss.footer_ga}>意见反馈</p></Link>
                </div>
                {/*权益保障 */}
                <div className={FooterCss.footer_d2}>
                    <h1 className={FooterCss.footer_gh}>权益保障</h1>
                    <p className={FooterCss.footer_ga}>全校包邮</p>
                    <p className={FooterCss.footer_ga}>描述不符退货</p>
                    <p className={FooterCss.footer_ga}>上门退货</p>
                </div>
                {/* 付款方式 */}
                <div className={FooterCss.footer_d3}>
                    <h1 className={FooterCss.footer_gh}>支付方式</h1>
                    <p className={FooterCss.footer_ga}>网银支付</p>
                    <p className={FooterCss.footer_ga}>货到付款</p>
                    <p className={FooterCss.footer_ga}>用户自主</p>
                </div>
                {/* 关于我们 */}
                <div className={FooterCss.footer_d4}>
                    <h1 className={FooterCss.footer_gh}>关于我们</h1>
                    <Link to="/us/purpose"><p className={FooterCss.footer_ga}>网页用途</p></Link>
                    <Link to="/us/mypromise"><p className={FooterCss.footer_ga}>我们承诺</p></Link>
                    <Link to="/us/idea"><p className={FooterCss.footer_ga}>我的理念</p></Link>
                </div>
            </div>
        )
    }
}