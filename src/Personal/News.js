import React from 'react';


var NewsCss=require('./News.css')
export default class News extends React.Component{
    render(){
        return(
            <div className={NewsCss.all}>
                <div className={NewsCss.title}>消息中心</div>
            </div>
        )
    }
}
