import React from 'react'
import { Button, Input,BackTop,Avatar } from 'antd'
import { Link } from 'react-router-dom'
var MonthCSS = require('./month.css')
// 互助贴吧 sc-cbx
export default class Month extends React.Component {
    render() {
        return (
            <div>
                <div className={MonthCSS.all}>
                    <ul className={MonthCSS.ul1}>
                        <div className={MonthCSS.dl}>
                            <div className={MonthCSS.dl1}>
                                <Avatar className={MonthCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={MonthCSS.name}>sc-cbx</div>
                            </div>
                            <div className={MonthCSS.dl2}>
                                <a href="/helpdetails" className={MonthCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={MonthCSS.dl3}>
                                <p className={MonthCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={MonthCSS.dl4}>
                                <img className={MonthCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={MonthCSS.dr}>
                            <div className={MonthCSS.dl1}>
                                    <Avatar className={MonthCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={MonthCSS.name}>sc-cbx</div>
                                </div>
                                <div className={MonthCSS.dl2}>
                                    <a href="/helpdetails" className={MonthCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={MonthCSS.dl3}>
                                    <p className={MonthCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={MonthCSS.dl4}>
                                    <img className={MonthCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    <ul className={MonthCSS.ul1}>
                        <div className={MonthCSS.dl}>
                            <div className={MonthCSS.dl1}>
                                <Avatar className={MonthCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={MonthCSS.name}>sc-cbx</div>
                            </div>
                            <div className={MonthCSS.dl2}>
                                <a href="/helpdetails" className={MonthCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={MonthCSS.dl3}>
                                <p className={MonthCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={MonthCSS.dl4}>
                                <img className={MonthCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={MonthCSS.dr}>
                            <div className={MonthCSS.dl1}>
                                    <Avatar className={MonthCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={MonthCSS.name}>sc-cbx</div>
                                </div>
                                <div className={MonthCSS.dl2}>
                                    <a href="/helpdetails" className={MonthCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={MonthCSS.dl3}>
                                    <p className={MonthCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={MonthCSS.dl4}>
                                    <img className={MonthCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    <ul className={MonthCSS.ul1}>
                        <div className={MonthCSS.dl}>
                            <div className={MonthCSS.dl1}>
                                <Avatar className={MonthCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={MonthCSS.name}>sc-cbx</div>
                            </div>
                            <div className={MonthCSS.dl2}>
                                <a href="/helpdetails" className={MonthCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={MonthCSS.dl3}>
                                <p className={MonthCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={MonthCSS.dl4}>
                                <img className={MonthCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={MonthCSS.dr}>
                            <div className={MonthCSS.dl1}>
                                    <Avatar className={MonthCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={MonthCSS.name}>sc-cbx</div>
                                </div>
                                <div className={MonthCSS.dl2}>
                                    <a href="/helpdetails" className={MonthCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={MonthCSS.dl3}>
                                    <p className={MonthCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={MonthCSS.dl4}>
                                    <img className={MonthCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    
                </div>
            </div>
            
        );
    }
}