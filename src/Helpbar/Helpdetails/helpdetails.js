import React from 'react'
import {Comment,Anchor,Modal, Tooltip, List, Button, Input,BackTop,Avatar } from 'antd'

import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import moment from 'moment';
var HelpdetailsCSS = require('./helpdetails.css');
const { TextArea } = Input;
const { Link } = Anchor;
function success() {
    Modal.success({
      content: '发表成功！',
    });
  }
const data = [
    {
      actions: [<Anchor affix={false}><Link href="#replay" title="回复" /></Anchor>],
      author: (<h1 className={HelpdetailsCSS.auh}>sc</h1>),
      avatar: (<img src={require("../../imgs/tou1.jpg")}></img>),
      content: (
        <p className={HelpdetailsCSS.re1}>
         同求，我也想要
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(0, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(0, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      ),
    },
    {
      actions: [<Anchor affix={false}><Link href="#replay" title="回复" /></Anchor>],
      author: (<h1 className={HelpdetailsCSS.auh}>cbx</h1>),
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p className={HelpdetailsCSS.re1}>
          我有完整版的，要吗？
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(0, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(0, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      ),
    },
  ];
// 互助贴吧 求助的详细页面
export default class Helpdetails extends React.Component {
    state = {
        value: '',
      };
    
      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
    render() {
        const { value } = this.state;
        return (
            <div>
                <Header/>
                <div className={HelpdetailsCSS.all}>
                    <div className={HelpdetailsCSS.d1}>
                        <Avatar className={HelpdetailsCSS.dav} src={require("./../../imgs/tou1.jpg")}/>
                        <h1 className={HelpdetailsCSS.dh}>sc-cbx</h1>
                    </div>
                    <div className={HelpdetailsCSS.d2}>
                        <div className={HelpdetailsCSS.di1}>
                            <h1 className={HelpdetailsCSS.dih}>求助事情：</h1>
                            <p className={HelpdetailsCSS.dip}>求资源</p>
                        </div>
                        <div className={HelpdetailsCSS.di2}>
                            <h1 className={HelpdetailsCSS.dih}>描述：</h1>
                            <p className={HelpdetailsCSS.dip}>求十月的奇迹的简谱资源</p>
                        </div>
                        <div className={HelpdetailsCSS.di3}>
                            <h1 className={HelpdetailsCSS.dih}>要求：</h1>
                            <p className={HelpdetailsCSS.dip}>想要完整版的简谱，只有前奏也是可以的，价格方面可以私聊我！</p>
                        </div>
                        <div className={HelpdetailsCSS.di4}>
                            <h1 className={HelpdetailsCSS.dih}>详情联系：</h1>
                            <p className={HelpdetailsCSS.dip}>QQ:223****051</p>
                        </div>
                        <div className={HelpdetailsCSS.di5}>
                             <List className="comment-list" header={`${data.length} replies`} itemLayout="horizontal" dataSource={data}
                                renderItem={item => (
                                <li>
                                    <Comment  actions={item.actions} author={item.author} avatar={item.avatar} content={item.content} datetime={item.datetime}/> 
                                </li>)}/>
                        </div>
                        <div className={HelpdetailsCSS.d3}>
                            <h1 id="replay" className={HelpdetailsCSS.replay}>回复</h1>
                            <TextArea className={HelpdetailsCSS.text} rows={4} autoSize />
                            <Button onClick={success} className={HelpdetailsCSS.send}>发表</Button>
                        </div>
                    </div>           
                </div>
                <Footer/>
                <BackTop />

    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> </strong>
            </div>
            
        );
    }
}