import React from 'react'
import { Button, Input,BackTop,Avatar } from 'antd'
import { Link } from 'react-router-dom'
var ThreedayCSS = require('./threeday.css')
// 互助贴吧 3天内
export default class Threeday extends React.Component {
    render() {
        return (
            <div>
                <div className={ThreedayCSS.all}>
                    <ul className={ThreedayCSS.ul1}>
                        <div className={ThreedayCSS.dl}>
                            <div className={ThreedayCSS.dl1}>
                                <Avatar className={ThreedayCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={ThreedayCSS.name}>sc-cbx</div>
                            </div>
                            <div className={ThreedayCSS.dl2}>
                                <a href="/helpdetails" className={ThreedayCSS.a}>求资源</a>
                            </div>
                            <div className={ThreedayCSS.dl3}>
                                <p className={ThreedayCSS.p}>求十二月的奇迹的简谱资源</p>
                            </div>
                            <div className={ThreedayCSS.dl4}>
                                <img className={ThreedayCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={ThreedayCSS.dr}>
                            <div className={ThreedayCSS.dl1}>
                                    <Avatar className={ThreedayCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={ThreedayCSS.name}>sc-cbx</div>
                                </div>
                                <div className={ThreedayCSS.dl2}>
                                    <a href="/helpdetails" className={ThreedayCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={ThreedayCSS.dl3}>
                                    <p className={ThreedayCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={ThreedayCSS.dl4}>
                                    <img className={ThreedayCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    <ul className={ThreedayCSS.ul1}>
                        <div className={ThreedayCSS.dl}>
                            <div className={ThreedayCSS.dl1}>
                                <Avatar className={ThreedayCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={ThreedayCSS.name}>sc-cbx</div>
                            </div>
                            <div className={ThreedayCSS.dl2}>
                                <a href="/helpdetails" className={ThreedayCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={ThreedayCSS.dl3}>
                                <p className={ThreedayCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={ThreedayCSS.dl4}>
                                <img className={ThreedayCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={ThreedayCSS.dr}>
                            <div className={ThreedayCSS.dl1}>
                                    <Avatar className={ThreedayCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={ThreedayCSS.name}>sc-cbx</div>
                                </div>
                                <div className={ThreedayCSS.dl2}>
                                    <a href="/helpdetails" className={ThreedayCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={ThreedayCSS.dl3}>
                                    <p className={ThreedayCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={ThreedayCSS.dl4}>
                                    <img className={ThreedayCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    <ul className={ThreedayCSS.ul1}>
                        <div className={ThreedayCSS.dl}>
                            <div className={ThreedayCSS.dl1}>
                                <Avatar className={ThreedayCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={ThreedayCSS.name}>sc-cbx</div>
                            </div>
                            <div className={ThreedayCSS.dl2}>
                                <a href="/helpdetails" className={ThreedayCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={ThreedayCSS.dl3}>
                                <p className={ThreedayCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={ThreedayCSS.dl4}>
                                <img className={ThreedayCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={ThreedayCSS.dr}>
                            <div className={ThreedayCSS.dl1}>
                                    <Avatar className={ThreedayCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={ThreedayCSS.name}>sc-cbx</div>
                                </div>
                                <div className={ThreedayCSS.dl2}>
                                    <a href="/helpdetails" className={ThreedayCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={ThreedayCSS.dl3}>
                                    <p className={ThreedayCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={ThreedayCSS.dl4}>
                                    <img className={ThreedayCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                </div>
            </div>
            
        );
    }
}