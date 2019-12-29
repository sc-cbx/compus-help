import React from 'react';
import { Form, Upload,Radio, Icon, Modal, Input, Button,BackTop } from 'antd';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
var ReleaseCss=require('./release.css');
const { TextArea } = Input;
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  function success() {
    Modal.success({
      content: '发布成功！',
    });
  }
// 跳蚤市场的发布闲置
export default class Release extends React.Component{
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
          
        ],
      };
    
      handleCancel = () => this.setState({ previewVisible: false });
    
      handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
        });
      };
    
      handleChange = ({ fileList }) => this.setState({ fileList });
    render(){
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">上传图片</div>
          </div>
        );
        return(
            <div className={ReleaseCss.all}>
                <Header/>
                <div className={ReleaseCss.di}>
                    <Form className={ReleaseCss.form}>
                        <Form.Item className={ReleaseCss.item}>
                            <Radio.Group className={ReleaseCss.radioall} onChange={this.onChange} value={this.state.value}>
                                <h3 className={ReleaseCss.h1}>宝贝类型：</h3>
                                <Radio className={ReleaseCss.radio} value={1}><span className={ReleaseCss.rspan}>手机数码</span></Radio>
                                <Radio className={ReleaseCss.radio} value={2}><span className={ReleaseCss.rspan}>租房</span></Radio>
                                <Radio className={ReleaseCss.radio} value={3}><span className={ReleaseCss.rspan}>美妆</span></Radio>
                                <Radio className={ReleaseCss.radio} value={4}><span className={ReleaseCss.rspan}>衣服</span></Radio>
                                <Radio className={ReleaseCss.radio} value={5}><span className={ReleaseCss.rspan}>其他</span></Radio>
                            </Radio.Group> 
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>宝贝名称：</h3>
                            <Input className={ReleaseCss.in1} placeholder="请仔细填写，不宜更改"/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>简述：</h3>
                            <Input className={ReleaseCss.in1} placeholder="请如实填写，宝贝交易才顺利哦！"/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>原价：</h3>
                            <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>转价：</h3>
                            <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>成色：</h3>
                            <Input className={ReleaseCss.in1} placeholder="参照：全新/半新/有点儿旧"/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>联系方式：</h3>
                            <Input className={ReleaseCss.in1} placeholder="请写QQ，方便系统操作哦，亲！"/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item1}>
                            <h3 className={ReleaseCss.h1}>宝贝介绍：</h3>
                            <TextArea rows={4} className={ReleaseCss.in1} placeholder="请详细填写，这样买家才更容易了解商品并购买哦！"/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item1}>
                            <div className="clearfix">
                                <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList}
                                onPreview={this.handlePreview} onChange={this.handleChange}> {fileList.length >= 4 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={success} className={ReleaseCss.suc}><span className={ReleaseCss.buspan}>发布</span></Button>
                        </Form.Item>
                    </Form>
                </div>
                <div>
                <BackTop />
            
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
             
                </div>     
               <Footer/>
            </div>
        )
    }
}
