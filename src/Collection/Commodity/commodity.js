import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

import xiangji1 from '../../imgs/xq1.png'
import xiangji2 from '../../imgs/dg1.jpg'
import zufang from '../../imgs/ren1.jpg'
import phone from '../../imgs/ph1.png'
import beauty from '../../imgs/be1.jpg'
import clothes_img from '../../imgs/yi1.png'
import guazi from '../../imgs/TB2DmkPjwnH8KJjSspcXXb3QFXa_2194810505.jpg'
import latiao from '../../imgs/O1CN01wXiDJZ1GtwILME6a3_2200070681.jpg'
import paomian from '../../imgs/TB28FGbgYSYBuNjSspiXXXNzpXa_2451688260.jpg'
import binggan from '../../imgs/TB2lfK5spXXXXaaXXXXXXXXXXXX_925879943.jpg'

var commodity = require('./commodity.css')
export default class Commodity extends React.Component{
    render(){
        return(
            /*主要内容：内容*/

            <div className={commodity.container_content}>
                <ul>
                    <li>
                        <a href="/goods/details">
                            <img src={paomian} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">康师傅方便面单桶泡面 已泡好</a>
                                <p>￥5.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/details">
                            <img src={binggan} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</a>
                                <p>￥6.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                           <a href="/goods/details">
                                <img src={xiangji1} />
                                <div className={commodity.price}>
                                   <a href="/goods/details">富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</a>
                                    <p>￥200.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={beauty} />
                                <div className={commodity.price}>
                                   <a href="/goods/details">日本SK2/SK-II/skii前男友面膜10片青春护肤神仙水补水保湿修护女</a>
                                    <p>￥540.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={clothes_img} />
                                <div className={commodity.price}>
                                   <a href="/goods/details">汉尚华莲银兔汉服女真丝刺绣长袄手工钉真珍珠明制袄裙大气中国风</a>
                                    <p>￥666.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={xiangji2} />
                                <div className={commodity.price}>
                                   <a href="/goods/details">富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级</a>
                                    <p>￥200.00</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={zufang} />
                                <div className={commodity.price}>
                                   <a href="/goods/details">阿尔法温栖日租房</a>
                                    <p>￥70/天</p>
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="/goods/details">
                                <img src={phone} />
                                <div className={commodity.price}>
                                   <a href="/goods/details">华为honor/荣耀 畅玩7X 全网通高配版移动联通电信4G人脸解锁手机</a>
                                    <p>￥5400</p>
                                </div>
                            </a>
                        </li>
                    <li>
                        <a href="/goods/details">
                            <img src={guazi} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">【童年记_原味/五香味南瓜子500gx1袋】 小包新货南瓜籽坚果炒货</a>
                                <p>￥16.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/details">
                            <img src={latiao} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</a>
                                <p>￥10.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/details">
                            <img src={binggan} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</a>
                                <p>￥6.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/details">
                            <img src={paomian} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">康师傅方便面单桶泡面 已泡好</a>
                                <p>￥5.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/details">
                            <img src={latiao} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">大面筋112gx1童年儿时怀旧小零食90后小时候的辣条</a>
                                <p>￥10.00</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/goods/details">
                            <img src={binggan} alt="商品图片"/>
                            <div className={commodity.price}>
                                <a href="/goods/details">印尼进口丽芝士nabati纳宝帝奶酪威化饼干25g*4包零食</a>
                                <p>￥6.00</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}