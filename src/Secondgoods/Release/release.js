import React from 'react';
import { Form, Upload, Icon, Modal, Input, Button } from 'antd';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
var ReleaseCss=require('./release.css');
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
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        return(
            <div className={ReleaseCss.all}>
                <Header/>
                <div className={ReleaseCss.di}>
                    <Form className={ReleaseCss.form}>
                        <Form.Item className={ReleaseCss.item}>
                                <h1 className={ReleaseCss.h1}>宝贝名称：</h1>
                                <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                                 <h1 className={ReleaseCss.h1}>简述：</h1>
                                <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h2 className={ReleaseCss.h1}>原价：</h2>
                            <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h2 className={ReleaseCss.h1}>转价：</h2>
                            <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h3 className={ReleaseCss.h1}>成色：</h3>
                            <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h4 className={ReleaseCss.h1}>联系方式：</h4>
                            <Input className={ReleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={ReleaseCss.item}>
                            <h5 className={ReleaseCss.h1}>宝贝介绍：</h5>
                            <Input className={ReleaseCss.in1}/>
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
                            <Button onClick={success} className={ReleaseCss.suc}>发布</Button>
                        </Form.Item>
                    </Form>
                </div>
               <Footer/>
            </div>
        )
    }
}
