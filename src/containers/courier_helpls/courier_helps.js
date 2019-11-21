import React from 'react';
import { Link } from "react-router-dom";

import Courier_help from './courier_help/courier_help'
import more from '../../images/more.png'

var cou_helps = require('./courier_helps.css')
export default class Courier_helps extends React.Component {
    render() {
        return(
            // 快递帮拿入口
            <form action="" className={cou_helps.box}>
                <div className={cou_helps.item_name}>
                    <h3>快递帮拿</h3>
                </div>
                    {/*入口一*/}
                    <div className={cou_helps.frame}>
                        <Link to="/courier_help" >
                            <div className={cou_helps.courier_entrance1}>
                                <Link to="/courier_help">1kg</Link>
                            </div>
                        </Link>
                    </div>



                    {/*入口二*/}
                    <div className={cou_helps.frame}>
                        <Link to="/courier_help" >
                            <div className={cou_helps.courier_entrance2}>
                                <Link to="/courier_help">2kg</Link>
                            </div>
                        </Link>
                    </div>


                    {/*入口三*/}
                    <div className={cou_helps.frame}>
                        <Link to="/courier_help" >
                            <div className={cou_helps.courier_entrance3}>
                                <Link to="/courier_help">4kg</Link>
                            </div>
                        </Link>
                    </div>

                    {/*更多入口*/}

                    <div className={cou_helps.frame}>
                        <Link to="/courier_help" >
                            <div className={cou_helps.courier_entrance_more}>
                                <Link to="/courier_help">
                                    <img src={more} alt="更多"/>
                                </Link>
                            </div>
                        </Link>
                    </div>

            </form>
        )
    }
}