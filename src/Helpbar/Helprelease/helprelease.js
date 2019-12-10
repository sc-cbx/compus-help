import React from 'react';
import { Form, Upload, Icon, Modal, Input, Button } from 'antd';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
var HelpreleaseCss=require('./helprelease.css');
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
// 互助贴吧的发布求助
export default class Helprelease extends React.Component{
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
            <div className={HelpreleaseCss.all}>
                <Header/>
                <div className={HelpreleaseCss.di}>
                    <Form className={HelpreleaseCss.form}>
                        <Form.Item className={HelpreleaseCss.item}>
                                <h1 className={HelpreleaseCss.h1}>求助事情：</h1>
                                <Input className={HelpreleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpreleaseCss.item}>
                                 <h1 className={HelpreleaseCss.h1}>描述：</h1>
                                <Input className={HelpreleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpreleaseCss.item}>
                            <h2 className={HelpreleaseCss.h1}>要求：</h2>
                            <Input className={HelpreleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpreleaseCss.item}>
                            <h2 className={HelpreleaseCss.h1}>详情联系：</h2>
                            <Input className={HelpreleaseCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpreleaseCss.item1}>
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
                            <Button onClick={success} className={HelpreleaseCss.suc}>发布</Button>
                        </Form.Item>
                    </Form>
                </div>
               <Footer/>
            </div>
        )
    }
}
