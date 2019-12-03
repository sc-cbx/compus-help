import React from 'react';

import courier_help_imgs from '../../imgs/19.png';
import './courier_help.css'
import Header from '../../Header/header';
import Footer from '../../Footer/footer';


var cou_help = require('./courier_help.css')
export default class Courier_help extends React.Component {
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

                {/* 快递帮拿：内容 */}
                <form action="" className={cou_help.box}>
                    <div className={cou_help.item_name}>
                        <img src={courier_help_imgs}/>
                        <h3>快递帮拿</h3>
                    </div>

                    {/*快递图片：装饰*/}
                    {/* <div className={cou_help.courier_img}>
                        <img src={cour_img} alt="快递图片"/>
                    </div> */}

                    {/*主要内容*/}
                    <div className={cou_help.container}>
                        <div className={cou_help.courierCon_name}>
                            <label>姓名：</label>
                            <input type="name" placeholder="姓名"/>
                        </div>
                        <div className={cou_help.courierCon}>
                            <label>电话号码：</label>
                            <input type="telephone" placeholder="电话号码" />
                        </div>



                        {/*下拉菜单*/}
                        <div className={cou_help.courierCon}>
                            <label>送达地点：</label>
                            <input type="site" placeholder="送达地点" />
                        </div>




                        <div className={cou_help.courierCon}>
                            <label>快递名称：</label>
                            <input type="courier_name" placeholder="快递名称" />
                        </div>
                        <div className={cou_help.courierCon_num}>
                            <label>取件码：</label>
                            <input type="take_num" placeholder="取件码"/>
                        </div>
                        <div className={cou_help.courierCon}>
                            <label>取件地点：</label>
                            <input type="take_site" placeholder="取件地点" />
                        </div>
                        <button type="submit">提交</button>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}