import React from'react';

export class Social extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }
    componentDidMount() {
        this.timer = setTimeout( () => {
            this.setState({
                show: true,
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render(){
        return(
            <section className={this.state.show ? 'socialMedia' : 'socialMedia_invisible'}>
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