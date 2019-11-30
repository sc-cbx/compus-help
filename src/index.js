import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage'
import LoginPage from './Login/login'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Main from './main/main';
import Tiaozhuan from './tiaozhuan';

// import Picture1 from './HomePage/First/Picture1/picture1';


class IndexPage extends React.Component{
    render(){

        return(
            <div>
               <BrowserRouter>
               <Switch>
                   {/* <Route path="/homepage" component={HomePage}></Route>
                   <Route path="/login" component={LoginPage}></Route> */}

                   
                   <Route component={Main}/>{/* 默认路由 */}
                   <Route path="/tiaozhuan" component={Tiaozhuan}></Route>
                   

                   {/* <Route path="/picture1" component={Picture1}></Route> */}
                   {/* <Redirect to="/login"></Redirect> */}
               </Switch>
               </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
