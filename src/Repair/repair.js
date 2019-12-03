import React from 'react'
import {Form, Button, Input,BackTop,Modal } from 'antd'
import { Link } from 'react-router-dom'
import Header from './../Header/header';
import Footer from './../Footer/footer';
var RepairCSS = require('./repair.css')
function success() {
    Modal.success({
      content: '发布成功！',
    });
  }
// 宿舍维修 sc-cbx
export default class Repair extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={RepairCSS.all}>
                    <Form className={RepairCSS.form}>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>损坏描述：</h1>
                            <Input className={RepairCSS.text}/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>修理要求：</h1>
                            <Input className={RepairCSS.text}/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>宿舍：</h1>
                            <Input className={RepairCSS.text}/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>联系人：</h1>
                            <Input className={RepairCSS.text}/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>联系方式：</h1>
                            <Input className={RepairCSS.text}/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.itbu}>
                            <Button onClick={success} className={RepairCSS.bu}>确定</Button>
                        </Form.Item>
                    </Form>
                </div>
                <BackTop />
   
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
                <Footer/>                
            </div>
        );
    }
}