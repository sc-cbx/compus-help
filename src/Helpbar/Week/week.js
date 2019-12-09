import React from 'react'
import { Button, Input,BackTop,Avatar } from 'antd'
import { Link } from 'react-router-dom'
var WeekCSS = require('./week.css')
// 互助贴吧 一周内
export default class Week extends React.Component {
    render() {
        return (
            <div>
                <div className={WeekCSS.all}>
                    <ul className={WeekCSS.ul1}>
                        <div className={WeekCSS.dl}>
                            <div className={WeekCSS.dl1}>
                                <Avatar className={WeekCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={WeekCSS.name}>sc-cbx</div>
                            </div>
                            <div className={WeekCSS.dl2}>
                                <a href="/helpdetails" className={WeekCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={WeekCSS.dl3}>
                                <p className={WeekCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={WeekCSS.dl4}>
                                <img className={WeekCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={WeekCSS.dr}>
                            <div className={WeekCSS.dl1}>
                                    <Avatar className={WeekCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={WeekCSS.name}>sc-cbx</div>
                                </div>
                                <div className={WeekCSS.dl2}>
                                    <a href="/helpdetails" className={WeekCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={WeekCSS.dl3}>
                                    <p className={WeekCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={WeekCSS.dl4}>
                                    <img className={WeekCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    <ul className={WeekCSS.ul1}>
                        <div className={WeekCSS.dl}>
                            <div className={WeekCSS.dl1}>
                                <Avatar className={WeekCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={WeekCSS.name}>sc-cbx</div>
                            </div>
                            <div className={WeekCSS.dl2}>
                                <a href="/helpdetails" className={WeekCSS.a}>求资源</a>
                            </div>
                            <div className={WeekCSS.dl3}>
                                <p className={WeekCSS.p}>求十二月的奇迹简谱的资源</p>
                            </div>
                            <div className={WeekCSS.dl4}>
                                <img className={WeekCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={WeekCSS.dr}>
                            <div className={WeekCSS.dl1}>
                                    <Avatar className={WeekCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={WeekCSS.name}>sc-cbx</div>
                                </div>
                                <div className={WeekCSS.dl2}>
                                    <a href="/helpdetails" className={WeekCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={WeekCSS.dl3}>
                                    <p className={WeekCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={WeekCSS.dl4}>
                                    <img className={WeekCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                    <ul className={WeekCSS.ul1}>
                        <div className={WeekCSS.dl}>
                            <div className={WeekCSS.dl1}>
                                <Avatar className={WeekCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                <div className={WeekCSS.name}>sc-cbx</div>
                            </div>
                            <div className={WeekCSS.dl2}>
                                <a href="/helpdetails" className={WeekCSS.a}>求助，帮忙做海报</a>
                            </div>
                            <div className={WeekCSS.dl3}>
                                <p className={WeekCSS.p}>求助，帮忙做海报</p>
                            </div>
                            <div className={WeekCSS.dl4}>
                                <img className={WeekCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                            </div>
                        </div>
                        <div className={WeekCSS.dr}>
                            <div className={WeekCSS.dl1}>
                                    <Avatar className={WeekCSS.tou} src={require("../../imgs/tou1.jpg")}/>
                                    <div className={WeekCSS.name}>sc-cbx</div>
                                </div>
                                <div className={WeekCSS.dl2}>
                                    <a href="/helpdetails" className={WeekCSS.a}>求助，帮忙做海报</a>
                                </div>
                                <div className={WeekCSS.dl3}>
                                    <p className={WeekCSS.p}>求助，帮忙做海报</p>
                                </div>
                                <div className={WeekCSS.dl4}>
                                    <img className={WeekCSS.img} src={require("../../imgs/hp1.jpg")}></img>
                                </div>
                        </div>
                    </ul>
                </div>
            </div>
            
        );
    }
}