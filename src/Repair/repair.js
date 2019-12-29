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
                    <div className={RepairCSS.dtitle}>
                        <img className={RepairCSS.ititle} src={require("../imgs/32.png")}></img>
                        <h1 className={RepairCSS.title}>维修搬运</h1>
                    </div>
                    <Form className={RepairCSS.form}>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>损坏描述：</h1>
                            <Input className={RepairCSS.text} placeholder="请描述维修情况，方便维修人员带工具"/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>修理要求：</h1>
                            <Input className={RepairCSS.text} placeholder="请写出修理要求"/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>宿舍：</h1>
                            <Input className={RepairCSS.text} placeholder="请写出完整的寝室号，比如2-172"/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>联系人：</h1>
                            <Input className={RepairCSS.text} placeholder="联系人"/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.item}>
                            <h1  className={RepairCSS.h}>联系方式：</h1>
                            <Input className={RepairCSS.text} placeholder="联系方式"/>
                        </Form.Item>
                        <Form.Item className={RepairCSS.itbu}>
                            <Button type="submit" onClick={success} className={RepairCSS.bu}><h3 className={RepairCSS.buh}>确定</h3></Button>
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