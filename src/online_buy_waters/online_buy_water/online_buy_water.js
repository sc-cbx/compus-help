import React from 'react';

import './online_buy_water.css'
import online_img from "../../imgs/互联网.png";
import online_slider_img from "../../imgs/78c1d1f9654772c7c208068a27c8701d.jpeg"
import Header from '../../Header/header';
import And_reduce from '../../Assembly/And_reduce/and_reduce';

var on_buy_wt = require('./online_buy_water.css')
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
                        <h3>网上购水</h3>
                        <img src={online_img} alt="网上购水"/>
                    </div>

                    {/*快递图片：装饰*/}
                    <div className={on_buy_wt.online_img}>
                        <img src={online_slider_img} alt="购水图片"/>
                    </div>

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
                                </div>
                                <div className={on_buy_wt.onlinewater_number}>
                                    <And_reduce/>
                                </div>
                            </div>
                            
                            <button type="submit">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}