import React from 'react';
import {Link} from 'react-router-dom';
import { Form,Modal, Input, Button ,BackTop} from 'antd';
import Header from '../Header/header';
import Footer from '../Footer/footer';
var BuysecCss=require('./buysec.css');
export default class Buysec extends React.Component{
    render(){
        return(
            //点击购买后的页面
            <div className={BuysecCss.all}>
                <Header/>
                <div  className={BuysecCss.buy}>
                    <div className={BuysecCss.div}>
                        <h1 className={BuysecCss.h1}>请亲们如实填写哦，我们会尽快送达到你的手里哦！</h1>
                    </div>
                    <div>
                        <Form className={BuysecCss.form}>
                            <Form.Item className={BuysecCss.it1}>
                                <h1 className={BuysecCss.h2}>姓名：</h1>
                                <Input placeholder="请输入你的姓名" className={BuysecCss.in1} />
                            </Form.Item>
                            <Form.Item className={BuysecCss.it2}>
                                <h1 className={BuysecCss.h2}>电话：</h1>
                                <Input placeholder="请输入你的电话" className={BuysecCss.in2} />
                            </Form.Item>
                            <Form.Item className={BuysecCss.it3}>
                                <h1 className={BuysecCss.h2}>地址：</h1>
                                <Input className={BuysecCss.in3} placeholder="请输入你的地址，方便派送哦，亲！" />
                            </Form.Item>
                            <Form.Item className={BuysecCss.it4}>
                                <h1 className={BuysecCss.h2}>备注：</h1>
                                <Input className={BuysecCss.in4} placeholder="选填" />
                            </Form.Item>
                            <Button className={BuysecCss.bu}><Link >确定并立即购买</Link></Button>
                        </Form>
                    </div>
                </div>
                <div>
    
  </div>
                <Footer/>
            </div>
        )
    }
}