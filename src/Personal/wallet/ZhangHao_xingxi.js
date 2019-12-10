import React from 'react';

import {Link} from 'react-router-dom';
var ZhangHao_xingxiCss=require('./ZhangHao_xingxi.css')
export default class ZhangHao_xingxi extends React.Component{
    render(){
        return(
            <div className={ZhangHao_xingxiCss.all}>
                {/* //头 */}
                <div className={ZhangHao_xingxiCss.title}>
                    <h3>你的账户安全等级较弱</h3>
                    <p>完成<Link to="/mywallet/zhanghao/zhanghao_shiming">实名认证</Link></p>
                </div>

                <div className={ZhangHao_xingxiCss.center}>
                    {/* //安全信息 */}
                    <div className={ZhangHao_xingxiCss.xingxi_one}>
                        <div className={ZhangHao_xingxiCss.one_left}>
                            <img src={require('../../images/l1.PNG')}/>
                        </div>
                        <div className={ZhangHao_xingxiCss.one_right}>
                            <h4>账户安全信息</h4>
                            <p>实名认证：未认证<span><Link  to="/mywallet/zhanghao/zhanghao_shiming">认证</Link></span></p>
                        </div>
                    </div>
                    {/* //实名信息 */}
                    <div className={ZhangHao_xingxiCss.xingxi_two}>
                        <div className={ZhangHao_xingxiCss.two_left}>
                            <img src={require('../../images/l2.PNG')}/>
                        </div>
                        <div className={ZhangHao_xingxiCss.two_right}>
                            <h4>账户基本信息</h4>
                            <tr>
                                <td>真实姓名：</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>身份证号码：</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>手机号码：</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>认证时间：</td>
                                <td></td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
