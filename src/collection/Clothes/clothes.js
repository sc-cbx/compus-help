import React from 'react'
import { Button, Input,Pagination } from 'antd'
import { Link } from 'react-router-dom'

import clothes_img from '../../imgs/yi1.png'

var clothes = require('./clothes.css')

export default class Clothes extends React.Component {
    render() {
        return (
            <div className={clothes.container}>

                {/* 收藏夹 衣服 */}
                <div className={clothes.container_content}>
                    <ul>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={clothes.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                    </ul>                     
                </div>         
            </div>
        );
    }
}