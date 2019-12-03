import React from 'react'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'

var RegisterCSS = require('./register.css')

export default class Register extends React.Component {
    log=()=>{
        fetch("/user/getAll")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className={RegisterCSS.login}>
                <div className={RegisterCSS.content}>
                    <div className={RegisterCSS.welcome}>
                        欢迎注册
                    </div>
                    <div className={RegisterCSS.login1}>
                        <div className={RegisterCSS.name}>
                            用户名:<br></br>
                            <Input type="text" placeholder="请输入学号" className={RegisterCSS.input}/>
                        </div>
                        <div className={RegisterCSS.password}>
                            密  码:<br></br>
                            <Input.Password placeholder="请输入密码" className={RegisterCSS.input}/>
                        </div>
                    </div>
                    <div className={RegisterCSS.land}>
                        <Link to="/login"><Button className={RegisterCSS.button}>注册</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}