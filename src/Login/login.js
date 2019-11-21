import React from 'react'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'

var LoginPageCSS = require('./login.css')

export default class LoginPage extends React.Component {
    log=()=>{
        fetch("/user/getAll")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className={LoginPageCSS.login}>
                <div className={LoginPageCSS.content}>
                    <div className={LoginPageCSS.welcome}>
                        欢迎登录
                    </div>
                    <div className={LoginPageCSS.login1}>
                        <div className={LoginPageCSS.name}>
                            用户名:<br></br>
                            <Input type="text" placeholder="请输入学号" className={LoginPageCSS.input}/>
                        </div>
                        <div className={LoginPageCSS.password}>
                            密  码:<br></br>
                            <Input.Password placeholder="请输入密码" className={LoginPageCSS.input}/>
                        </div>
                    </div>
                    <div className={LoginPageCSS.land}>
                        <Link to="/homepage/first"><Button className={LoginPageCSS.button}>登录</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}