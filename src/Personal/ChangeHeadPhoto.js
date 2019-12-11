import React from 'react';
import { Button } from 'antd';
import Avatar from './HeadPhone/avatar';




var ChangeHeadPhotoCss=require('./ChangeHeadPhoto.css')
export default class ChangeHeadPhoto extends React.Component{
    render(){
        return(
            <div className={ChangeHeadPhotoCss.avater}>
                 <div className={ChangeHeadPhotoCss.change_head}>更改头像</div>
                 <div className={ChangeHeadPhotoCss.upload_head}>
                     <div className={ChangeHeadPhotoCss.headphoto}>
                           <Avatar></Avatar>
                     </div>

                     <Button className={ChangeHeadPhotoCss.button}>确认更改</Button>
                 </div>
            </div>
        )
    }
}
