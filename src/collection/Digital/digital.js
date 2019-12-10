import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import xiangji1 from '../../imgs/xq1.png'
import xiangji2 from '../../imgs/dg1.jpg'
import zufang from '../../imgs/ren1.jpg'
import phone from '../../imgs/ph1.png'

var digital = require('./digital.css')

export default class Digital extends React.Component {
    render() {
        return (
            <div className={digital.container}>

                {/* 收藏夹 其他 */}
                <div className={digital.container_content}>
                    <ul>
                        <li>
                           <a href="/goods/details">
                                <img src={xiangji1} />
                                <div className={digital.price}>
                                   <a href="/goods/details">富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</a>
                                    <p>￥200.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={xiangji2} />
                                <div className={digital.price}>
                                   <a href="/goods/details">富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</a>
                                    <p>￥200.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={zufang} />
                                <div className={digital.price}>
                                   <a href="/goods/details">阿尔法温栖日租房</a>
                                    <p>￥70/天</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={phone} />
                                <div className={digital.price}>
                                   <a href="/goods/details">华为honor/荣耀 畅玩7X 全网通高配版移动联通电信4G人脸解锁手机</a>
                                    <p>￥5400</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={zufang} />
                                <div className={digital.price}>
                                   <a href="/goods/details">阿尔法温栖日租房</a>
                                    <p>￥70/天</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={phone} />
                                <div className={digital.price}>
                                   <a href="/goods/details">华为honor/荣耀 畅玩7X 全网通高配版移动联通电信4G人脸解锁手机</a>
                                    <p>￥5400</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={zufang} />
                                <div className={digital.price}>
                                   <a href="/goods/details">阿尔法温栖日租房</a>
                                    <p>￥70/天</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={zufang} />
                                <div className={digital.price}>
                                   <a href="/goods/details">阿尔法温栖日租房</a>
                                    <p>￥70/天</p>
                                </div>
                            </a>
                        </li>
                    </ul>                     
                </div>         
            </div>
        );
    }
}