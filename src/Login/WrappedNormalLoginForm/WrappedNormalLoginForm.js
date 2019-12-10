import React from 'react';
// import './index.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';

var WrappedNormalLoginFormCss=require('./WrappedNormalLoginForm.css')
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
       
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名!' }],
          })(
            <Input
            className={WrappedNormalLoginFormCss.input}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码!' }],
          })(
            <Input
            className={WrappedNormalLoginFormCss.input}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox className={WrappedNormalLoginFormCss.checkbox}>记住我</Checkbox>)}
           <Link to="/forgetpassword/setpassword_one" className={WrappedNormalLoginFormCss.forget_password} >
              忘记密码？
          </Link>
          <Button className={WrappedNormalLoginFormCss.button}  htmlType="submit" >
            确认登录
          </Button>
          <Link to="/register" className={WrappedNormalLoginFormCss.come_register}>马上注册！</Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
export default WrappedNormalLoginForm;