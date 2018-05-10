import React from'react';

export class SocialContact extends React.Component {

    render(){
        return(
            <section className='socialMedia'>
                <a href='#' target='_blank'>
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href='#' target='_blank'>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href='#' target='_blank'>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href='#' target='_blank'>
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href='#' target='_blank'>
                    <i className="fab fa-google-plus"></i>
                </a>
            </section>
        )
    }
}