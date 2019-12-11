import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';

var UserDeleteCss=require('./UserDelete.css')
export default class UserDelete extends React.Component{
    render(){
        return(
            <div className={UserDeleteCss.userdelete}>
                <div className={UserDeleteCss.center}>
                <h5>校园帮账户注销须知</h5>
                <p className={UserDeleteCss.p_one}>
                   【特别提示】当您按照注销页面提示填写信息、阅读并同意本《注销须知》及相关相关页面提示，并点击相关确认按钮（具体名称以注销页面展示为准），即表示您已充分阅读、理解并接受本《注销须知》的全部内容。如您不同意本《注销须知》中任何条款，请您立即停止账户注销程序。
                </p>
                
                <p className={UserDeleteCss.p_two}>亲爱的校园帮个人消费者用户：</p>
                <p className={UserDeleteCss.p_three}>1. 校园帮账户一旦被注销将不可恢复，请您在操作之前自行备份校园帮账户相关的所有信息和数据。请您保存好订单商品和服务的交易凭证、票据等资料，否则您有可能须支付额外的账户和订单查询费用，或无法享受售后服务。</p>
                <p className={UserDeleteCss.p_four}>2. 注销校园帮账户，您将无法再使用本校园帮账户，也将无法找回您校园帮账户中及与账户相关的任何内容或信息</p>
                <p className={UserDeleteCss.p_five}>3.您通过校园帮账户使用、授权登录或绑定校园帮账户后使用的校园帮相关或第三方的其他服务的所有记录将无法找回。您将无法再登录、使用前述服务，您曾获得的余额、资格、订单、及其它等视为您自行放弃，将无法继续使用。您理解并同意，校园帮无法协助您重新恢复前述服务。请您在提交注销申请前，务必先了解您须解绑的其他相关账户信息，慎重考虑。</p>
                <div className={UserDeleteCss.deleteOK}>
                    <Button className={UserDeleteCss.button}>我要注销</Button>
                    <Link to="/userlocked" className={UserDeleteCss.link}>只是暂时不用去锁定账户</Link>
                </div>
                </div>
            </div>
        )
    }
}
