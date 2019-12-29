import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import beauty from '../../imgs/be1.jpg'

var beautymakeup = require('./beautymakeup.css')

export default class Beautymakeup extends React.Component {
    render() {
        return (
            <div className={beautymakeup.container}>

                {/* 收藏夹 美妆 */}
                <div className={beautymakeup.container_content}>
                    <ul>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ordersec/details">
                                <img src={beauty} />
                                <div className={beautymakeup.price}>
                                    <Link to="/ordersec/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</Link>
                                    <p>￥540.00</p>
                                </div>
                            </Link>
                        </li>
                        
                    </ul>                     
                </div>         
            </div>
        );
    }
}