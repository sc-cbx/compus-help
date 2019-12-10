import React from 'react';


var User_notlockedCss=require('./User_notlocked.css')
export default class User_notlocked extends React.Component{
    render(){
        return(
            
                <div className={User_notlockedCss.set_color}>
                     <div className={User_notlockedCss.set_img} >
                         <div className={User_notlockedCss.logo}><h3>校园帮safe</h3></div>
                         <div className={User_notlockedCss.center}>
                             <div className={User_notlockedCss.center_xingxi}>
                                 {/* //类容 */}
                                 <form>
                                 <div className={User_notlockedCss.title}>
                                     <p><span>|</span>账户解锁</p>
                                 </div>
                                 <div className={User_notlockedCss.center_leirong}>
                                     <div className={User_notlockedCss.leirong}>
                                         <div className={User_notlockedCss.leirong_top}>
                                             <p><span>*</span>解锁账户：</p>
                                             <input className={User_notlockedCss.setphone} type="text" placeholder="请输入账号手机号码"/>
                                         </div>
                                       
                                         <div className={User_notlockedCss.lrirong_buttom}>
                                               <input className={User_notlockedCss.submit} type="submit" name="确定" value="确定"/>
                                         </div>
                                     </div>
                                 </div>
                                 </form>
    
                             </div>
                             <div className={User_notlockedCss.bottom}><p>@2019校园帮&nbsp;&nbsp;&nbsp;localhost:3000&nbsp;&nbsp;拾荒小分队</p></div>
                         </div>
                     </div>
                </div>
               
        )
    }
}
