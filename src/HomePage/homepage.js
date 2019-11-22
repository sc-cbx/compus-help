import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import {BrowserRouter,Route,Link} from 'react-router-dom';

var HomePageCss=require('./homepage.css');
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.div}>
                <Header/>
                <div>
                    首页
                        
                    
                </div>

                               
                <Footer/>
            </div>
        )
    }
}