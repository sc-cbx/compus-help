import React from 'react';
import {Link,BrowserRouter,Route} from 'react-router-dom';
import {Comment, Icon, Tooltip, Avatar,Input} from 'antd';
import moment from 'moment';
var CommentonCss=require('./commenton.css');
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
          <span key="comment-basic-reply-to" style={{fontSize:15}}>回复</span>,
        ];
    
        return (
            // 跳蚤市场的商品评论
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
        );
    }
}