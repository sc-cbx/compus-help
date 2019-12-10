import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker, MonthPicker } = DatePicker;


var InformationCss=require('./Information.css')


export default class Information extends React.Component{
    render(){
        return(
            <form>
            <div className={InformationCss.information}>
                <div className={InformationCss.top}>
                    <div className={InformationCss.message_head}>基本资料</div>
                    <div className={InformationCss.message_center}>
                        <div className={InformationCss.leirongOne}>
                            
                                <table cellPadding="6px" className={InformationCss.table}>
                                    <tbody>
                                        <tr className={InformationCss.yonghuming}>
                                            <td>用户名：</td>
                                            <td>王粑粑200703</td>
                                        </tr>

                                        <tr className={InformationCss.xingbie} width="200px">
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;性别:</td>
                                            <td ><input type="radio" name="id" value="男"/>男</td>
                                            <td width="100px"><input type="radio" name="id" value="女"/>女</td>
                                        </tr>

                                        <tr className={InformationCss.suozaidi }>
                                            <td>所在地:</td>
                                            <td>西南交通大学希望学院</td>
                                        </tr>

                                        <tr className={InformationCss.shengri}>
                                            <td>&nbsp;&nbsp;&nbsp;&nbsp;生日:</td>
                                            <td>
                                            <DatePicker renderExtraFooter={() => 'extra footer'} placeholder="出生年月"/>
                                            </td>
                                        </tr>

                                        <tr className={InformationCss.zhiye}>
                                            <td><label for="zhiye" >&nbsp;&nbsp;&nbsp;&nbsp;职业：</label></td>
                                            <td>
                                                <select>
                                                    <option value="">学生</option>
                                                    <option value="">老师</option>
                                                    <option value="">其他</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                           
                        </div>
                    </div>
                </div>
                <div className={InformationCss.down}>
                     <div className={InformationCss.othermessage_head}>其他资料</div>
                     <div className={InformationCss.othermessage_center}>
                         <div className={InformationCss.leirongTwo}>
                     
                                        
                                             <div className={InformationCss.jieshao}>自我介绍：</div>
                                             <textarea id="my" cols="60" rows="5" className={InformationCss.text} placeholder="随便写点什么，让大家了解你吧。"></textarea>
                                         

                                             <td>
                                            <input type="submit" name="修改完成" value="修改完成"/>
                                            </td>
                         </div>
                     </div>
                </div>
            </div>
            </form>
        )
    }
}
