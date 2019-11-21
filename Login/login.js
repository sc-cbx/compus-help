import React from 'react';
import LoginPage from './Login/Login';

export default class LoginPage  extends React.Component{

   render(){

    return(
        <div>
            <BrowserBouter>
            <Route path="/login" Component={Location}></Route>
            </BrowserBouter>
         </div>
    )
   }
}