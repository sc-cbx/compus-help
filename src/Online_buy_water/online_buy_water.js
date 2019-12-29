import React from 'react';
import {Form, Button, Input,BackTop,Modal } from 'antd'
import './online_buy_water.css'
import online_img from "../imgs/24.png";
import Header from '../Header/header';
import And_reduce from '../Assembly/And_reduce/and_reduce';
import Footer from '../Footer/footer';
var on_buy_wt = require('./online_buy_water.css')
function success() {
    Modal.success({
      content: '提交成功，等待送水即可，货到付款！',
    });
  }
export default class Online_buy_water extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }
    onChange = e =>{
        // this.setState({
        //     value: e.target.value,
        // });

    };


    render() {
        return(
            <div>
                <Header/>

                {/* 网上购水：内容 */}
                <form action="" className={on_buy_wt.box}>
                    <div className={on_buy_wt.item_name}>
                        <img src={online_img} alt="网上购水"/>
                        <h3>网上购水</h3>
                    </div>

                    {/*快递图片：装饰*/}
                    {/* <div className={on_buy_wt.online_img}>
                        <img src={online_slider_img} alt="购水图片"/>
                    </div> */}

                    {/*主要内容*/}
                    <div className={on_buy_wt.container}>
                        <div className={on_buy_wt.content}>
                            <div className={on_buy_wt.onlinewater_name}>
                                <label>姓名：</label>
                                <input type="name" placeholder="姓名"/>
                            </div>
                            <div className={on_buy_wt.onlinewater}>
                                <label>电话号码：</label>
                                <input type="telephone" placeholder="电话号码" />
                            </div>



                            {/*下拉菜单*/}
                            <div className={on_buy_wt.onlinewater_num}>
                                <label>寝室号：</label>
                                <input type="site" placeholder="寝室号" />
                            </div>

                            {/*数量*/}
                            <div>
                                <div className={on_buy_wt.onlinewater_numbers}>
                                    <label>数量：</label>
                                    <div className={on_buy_wt.onlinewater_number}>
                                        <And_reduce/>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <Button type="submit" onClick={success}>提交</Button>
                        </div>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}