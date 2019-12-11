import React from 'react';

import {Card} from 'antd';
import {Link} from 'react-router-dom';

const {Meta}=Card;

var UserLockedCss =require('./UserLocked.css')
export default class UserLocked extends React.Component{
    render(){
        return(
            <div className={UserLockedCss.set_color}>
               <div className={UserLockedCss.set_img} >
                   <div className={UserLockedCss.logo}><h3>校园帮safe</h3></div>
                   <div className={UserLockedCss.title}><p>校园帮账号安全问题</p></div>
                   <div className={UserLockedCss.UserLocked_center}>
                       <div className={UserLockedCss.card_one}>

                           {/* //第一个盒子 */}
                           <div className={UserLockedCss.xingxi_one}>
                               <Link to="/user_locked">
                               <Card 
                               className={UserLockedCss.card}
                                 hoverable
                               
                                 size="small"
                                 cover={
                                  <div className={UserLockedCss.thepirture}>
                                     
                                      
                                      <img 
                                      className={UserLockedCss.theimg}
                                    alt="pirture" 
                                    src={require('../images/usersuoding.png')}
                                    />
                                    </div>
                                 
                                }
                                
                               >
                                <h3 className={UserLockedCss.the_h3}>账户锁定</h3>
                                <p className={UserLockedCss.the_p}>账户存在异常&nbsp;&nbsp;紧急锁定账户</p>
                               
                               </Card>
                               </Link>
                           
                           </div>
                        
                       </div>
                        {/* //第二个盒子 */}
                       <div className={UserLockedCss.card_two}>
                           <div className={UserLockedCss.xingxi_two}>
                               <Link to="/user_notlocked">
                           <Card 
                               className={UserLockedCss.card}
                                 hoverable
                               
                                 size="small"
                                 cover={
                                  <div className={UserLockedCss.thepirture}>
                                     
                                      
                                      <img 
                                      className={UserLockedCss.theimg}
                                    alt="pirture" 
                                    src={require('../images/user.png')}
                                    />
                                    </div>
                                 
                                }
                                
                               >
                                <h3 className={UserLockedCss.the_h3}>账户解锁</h3>
                                <p className={UserLockedCss.the_p}>解锁已锁定的账户</p>
                               
                               </Card>
                               </Link>
                           </div>
                    

                       </div>

                       {/* //第三个盒子 */}

                       <div className={UserLockedCss.card_three}>
                            <div className={UserLockedCss.xingxi_three}>
                            <Link to="/user_safety">
                            <Card 
                               className={UserLockedCss.card}
                                 hoverable
                               
                                 size="small"
                                 cover={
                                  <div className={UserLockedCss.thepirture}>
                                     
                                      
                                      <img 
                                      className={UserLockedCss.theimg}
                                    alt="pirture" 
                                    src={require('../images/anquan.png')}
                                    />
                                    </div>
                                 
                                }
                                
                               >
                                <h3 className={UserLockedCss.the_h3}>账户安全检测</h3>
                                <p className={UserLockedCss.the_p}>检查你的账户安全系数</p>
                               
                               </Card>
                               </Link>
                            </div>

                       </div>
                       

                   </div>

                   <div className={UserLockedCss.bottom}><p>@2019校园帮&nbsp;&nbsp;&nbsp;localhost:3000&nbsp;&nbsp;拾荒小分队</p></div>
               </div>
            </div>
        )
    }
}
