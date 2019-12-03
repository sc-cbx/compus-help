import React from 'react';
import {Link,Route} from 'react-router-dom';
import Footer from '../Footer/footer';
import SetPassword_one from './SetPassword_one';
import SetPassword_two from './SetPassword_two';
import SetPassword_three from './SetPassword_three';

var ForgetPasswordCss =require('./ForgetPassword.css');
export default class ForgetPassword extends React.Component{
    render(){
        return(
            <div>
                <div className={ForgetPasswordCss.all}>
                    <div className={ForgetPasswordCss.logo}>
                        <img src=""/>
                    </div>
                    <div className={ForgetPasswordCss.zhaohui_password}>
                        <div className={ForgetPasswordCss.title}>
                            <p>找回密码</p>
                           
                            <ul>
                              <li>01/输入邮箱</li>
                              <li>02/验证信息</li>
                              <li>03/重置密码</li> 
                            </ul>
                            
                        </div>
                        <div className={ForgetPasswordCss.leirong}>
                            {/* <SetPassword_one></SetPassword_one> */}
                            <Route path="/forgetpassword/setpassword_one" component={SetPassword_one}></Route>
                            <Route path="/forgetpassword/setpassword_two" component={SetPassword_two}></Route>
                            <Route path="/forgetpassword/setpassword_three" component={SetPassword_three}></Route>
                        </div>
                        
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}