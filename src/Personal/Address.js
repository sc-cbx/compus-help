import React from 'react';


var AddressCss=require('./Address.css')
export default class Address extends React.Component{
    render(){
        return(
            <div className={AddressCss.all}>
                <div className={AddressCss.center}>
                    <div className={AddressCss.title} >地址管理</div>
                    <div className={AddressCss.address}>
                        <p><span>默认地址(不能更改或添加)：</span>西南交通大学希望学院</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

