import React from 'react';
import {Link} from 'react-router-dom';
import {Input,Radio,Modal,Button} from 'antd';
var FeedbackCss=require('./feedback.css');
const { TextArea } = Input;
// 成功的提示语句
function success() {
    Modal.success({
      content: '提交成功！感谢亲的反馈哦。',
    });
  }
// 意见反馈
export default class Feedback extends React.Component{
    // 单选框语句
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    //   文本框语句
      state = {
        value: '',
      };
    
      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
    
    render(){
        return(
            <div className={FeedbackCss.header}>
                <div className={FeedbackCss.dr}>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio  className={FeedbackCss.r} value={1}>建议(系统、流程、规则等等，您觉得有什么不合理的地方就告诉我们吧！)</Radio>
                        <Radio className={FeedbackCss.ra} value={2}>需求(功能上没有满足你的需求？那就告诉我们吧！)</Radio>
                        <Radio className={FeedbackCss.ra} value={3}>异常(页面出现异常，无法正常使用)</Radio>
                    </Radio.Group>
                </div>
                <div  className={FeedbackCss.di}>
                    <div className={FeedbackCss.d1}>
                    <h1 className={FeedbackCss.h}>手机号码：</h1>
                    <Input className={FeedbackCss.in}/>
                    </div>
                    <div className={FeedbackCss.d2}>
                        <h1 className={FeedbackCss.h1}>详细内容：</h1>
                        <TextArea className={FeedbackCss.text} rows={8} placeholder="如果你有什么建议，想法，请告诉我们" autoSize />
                    </div>
                </div>
                <div>
                    <Button onClick={success} className={FeedbackCss.bu}>提交</Button>
                </div>
            </div>
        )
    }
}