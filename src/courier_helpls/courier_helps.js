import React from 'react';
import { Link } from "react-router-dom";
import { Card } from 'antd';

import more from '../imgs/more.png';
import courier_help_img from '../imgs/u339599109203568703626gp0.png';
import courier_help_imgs from '../imgs/19.png';

import Header from '../Header/header';
import Footer from '../Footer/footer';


var cou_helps = require('./courier_helps.css')
export default class Courier_helps extends React.Component {
    render() {
        const { Meta } = Card;

        return(
            <div>
                <Header/>

                {/* 快递帮拿入口 */}
                <form action="" className={cou_helps.box}>
                    <div className={cou_helps.item_name}>
                        <img src={courier_help_imgs}/>
                        <h3>快递帮拿</h3>
                    </div>
                    
                    <div className={cou_helps.frame}>

                        {/*入口一*/}
                        <Link to="/courier_help">
                            <Card 
                                hoverable 
                                style={{ width: '24%', height: '35%' }}
                                cover={
                                    <img alt="example" src={courier_help_img}  
                                        className={cou_helps.enter_imgs} />}
                                className={cou_helps.enter}
                            >
                                <h2 style={{fontSize: '25px',letterSpacing: '3px',marginTop: '15%',marginLeft: '10%'}}>
                                    重量：
                                    <Link to="/courier_help">1千克</Link>
                                </h2>
                                
                            </Card>
                        </Link>
                    


                        {/*入口二*/}
                        <Link to="/courier_help">
                            <Card 
                                hoverable 
                                style={{ width: '24%', height: '35%'}}
                                cover={
                                    <img alt="example" src={courier_help_img}  
                                        className={cou_helps.enter_imgs} />}
                                className={cou_helps.enter}
                            >
                                <h2 style={{fontSize: '25px',letterSpacing: '3px',marginTop: '15%',marginLeft: '10%'}}>
                                    重量：
                                    <Link to="/courier_help">2千克</Link>
                                </h2>
                                
                            </Card>
                        </Link>


                        {/*更多入口*/}
                        <Link to="/courier_help">
                            <Card 
                                hoverable 
                                style={{ width: '24%', height: '35%' }}
                                cover={
                                    <img alt="more" src={more}  
                                        className={cou_helps.enter_imgs} />}
                                className={cou_helps.enter}
                            >
                                <h2 style={{fontSize: '25px',letterSpacing: '3px',marginTop: '15%',marginLeft: '10%'}}>
                                    重量：
                                    <Link to="/courier_help">更多</Link>
                                </h2>
                                
                            </Card>
                        </Link>
                    </div>

                </form>
                <Footer/>
            </div>
        )
    }
}