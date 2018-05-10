import React from 'react';

import {HeaderContact} from './HeaderContact.jsx';
import {NavigationContact} from './NavigationContact.jsx';
import {FooterContact} from './FooterContact.jsx';
import {Form} from './Form.jsx';
import {SocialContact} from './SocialContact.jsx';


export  class  Contact extends React.Component{

    render(){
        return(
            <div>
                <div className="social-banner">
                    <SocialContact/>
                </div>
                <div className="main-banner">
                    <HeaderContact/>
                </div>
                <div className="nav-banner">
                    <NavigationContact/>
                </div>
                <div className="footer-banner">
                    <FooterContact/>
                </div>
                <div className="contact-banner">
                    <Form/>
                </div>
            </div>
        )
    }
}