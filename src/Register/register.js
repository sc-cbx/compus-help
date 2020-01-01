import React from 'react';
import {Link} from 'react-router-dom';
import WrappedNormalRegisterForm from './WrappedNormalRegisterForm/WrappedNormalRegisterForm';
var RegisterCss=require('./register.css')
export default class Register extends React.Component{
    render(){
        return(
            <div className={RegisterCss.all}>
            <div className={RegisterCss.center}>
                <div className={RegisterCss.center_top}>
                    <div className={RegisterCss.center_top_shouye}><Link to="/homepage" className={RegisterCss.link}>返回首页</Link></div>
                    <div className={RegisterCss.center_top_right}><Link to="/login" className={RegisterCss.link}>已有账号？去登录</Link></div>

                </div>
                <div className={RegisterCss.center_bottom}>
                          <div className={RegisterCss.add_img}>
                            <img src={require("../imgs/logo.png")} style={{width: '30%'}} ></img>
                          </div>
                          <div className={RegisterCss.leirong}>
                              <WrappedNormalRegisterForm></WrappedNormalRegisterForm>
                          </div>
                </div>
          
            </div>
        </div>
        )
    }
} 
