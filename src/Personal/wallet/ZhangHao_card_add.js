import React from 'react';

import {Link} from 'react-router-dom';
var ZhangHao_card_addCss=require('./ZhangHao_card_add.css')
export default class ZhangHao_card_add extends React.Component{
    render(){
        return(
            <div className={ZhangHao_card_addCss.all}>
                {/* //头 */}
                <div className={ZhangHao_card_addCss.tiny_head}>
                    <div className={ZhangHao_card_addCss.tiny}>
                     <div className={ZhangHao_card_addCss.gohome}><Link to="/homepage">校园帮首页</Link></div>
                        <div className={ZhangHao_card_addCss.right}>退出登录</div>
                        <div className={ZhangHao_card_addCss.left}>您好，XXXX</div>
                    </div>
                </div>

                <div className={ZhangHao_card_addCss.add}>
                    <div className={ZhangHao_card_addCss.add_center}>
                         <div className={ZhangHao_card_addCss.title}>
                             <span>银行卡支付</span>
                             银行卡支付，安全快捷！
                         </div>
                         <div className={ZhangHao_card_addCss.leirong}>
                             <p>开通银行卡支付，安全快捷</p>
                             <div className={ZhangHao_card_addCss.leirong_add}>
                                <tr>
                                    <td>输入银行卡号：</td>
                                    <td><input className={ZhangHao_card_addCss.input} placeholder="请输入银行卡号码" type="text"/></td>
                                </tr>
                                <input className={ZhangHao_card_addCss.submit} type="submit" name="下一步" value="下一步"/>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}
