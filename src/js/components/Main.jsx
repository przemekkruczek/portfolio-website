import React from 'react';

import {Loading} from './Loading.jsx';
import {Header} from './Header.jsx';
import {Navigation} from './Navigation.jsx';
import {Social} from './Social.jsx';
import {Footer} from './Footer.jsx';

export  class  Main extends React.Component{

    render(){
        return(
            <div>
                <div className="loading-banner">
                    <Loading/>
                </div>
                <div className="social-banner">
                    <Social/>
                </div>
                <div className="main-banner">
                    <Header/>
                </div>
                <div className="nav-banner">
                    <Navigation/>
                </div>
                <div className="footer-banner">
                    <Footer/>
                </div>
            </div>
        )
    }
}