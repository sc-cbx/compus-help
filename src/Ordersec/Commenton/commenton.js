import React from 'react';
import {Comment, Icon, Tooltip, Avatar,Input,Button,Modal,Anchor} from 'antd';
import moment from 'moment';
var CommentonCss=require('./commenton.css');
const { TextArea } = Input;
const { Link } = Anchor;
function success() {
  Modal.success({
    content: '发表成功！',
  });
}
export default class Commenton extends React.Component {
        state = {
          likes: 0,
          dislikes: 0,
          action: null,
        };
      
        like = () => {
          this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
          });
        };
      
        dislike = () => {
          this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
          });
        };
    render() {
        const { likes, dislikes, action } = this.state;

        const actions = [
          <span key="comment-basic-like">
            <Tooltip title="Like">
              <Icon className={CommentonCss.icon}
                type="like"
                theme={action === 'liked' ? 'filled' : 'outlined'}
                onClick={this.like}
              />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
          </span>,
          <span key=' key="comment-basic-dislike"'>
            <Tooltip title="Dislike">
              <Icon className={CommentonCss.icon}
                type="dislike"
                theme={action === 'disliked' ? 'filled' : 'outlined'}
                onClick={this.dislike}
              />
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
          </span>,
          <Anchor affix={false}><Link href="#replay" key="comment-basic-reply-to" style={{fontSize:15}} title="回复" className={CommentonCss.rep}  /></Anchor>
        ];
    
        return (
            // 跳蚤市场的商品评论
            <div>
              <div  className={CommentonCss.comd}>
                  <Comment actions={actions} className={CommentonCss.com} author={<a style={{fontSize:20}}>sc-cbx</a>} avatar={<Avatar  src={require("../../imgs/tou1.jpg")} alt="sc-cbx"/>}
                    content={
                      <p className={CommentonCss.p}>
                        这个挺好看的，想买
                      </p>
                    }
                    datetime={
                      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                  />
              </div>
              <div className={CommentonCss.d3}>
                    <h1 id="replay" className={CommentonCss.replay}>回复</h1>
                    <TextArea className={CommentonCss.text} rows={4} autoSize />
                   <Button onClick={success} className={CommentonCss.send}>发表</Button>
                </div>   
            </div>
            

        );
    }
}