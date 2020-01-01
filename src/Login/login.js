import React from 'react';

import {Link,Route} from 'react-router-dom';
import Register from './../Register/register';
import WrappedNormalLoginForm from './WrappedNormalLoginForm/WrappedNormalLoginForm';
var LoginCss=require('./login.css')


export default class Login extends React.Component {
    render(){
        return(
            <div className={LoginCss.all}>
                <div className={LoginCss.center}>
                    <div className={LoginCss.center_top}>
                        <div className={LoginCss.center_top_shouye}><Link to="/homepage" className={LoginCss.link}>返回首页</Link></div>
                        <div className={LoginCss.center_top_right}><Link to="/register" className={LoginCss.link}>没有账号去？去注册</Link></div>
                       
                    </div>
                    <div className={LoginCss.center_bottom}>
                        <div className={LoginCss.login_leirong}>
                            <div className={LoginCss.add_img}>
                                <img src={require("../imgs/logo.png")} style={{width: '50%'}} ></img>
                            </div>
                            <WrappedNormalLoginForm></WrappedNormalLoginForm>
                        </div>
                    </div>
              
                </div>
            </div>
        )
    }

}

