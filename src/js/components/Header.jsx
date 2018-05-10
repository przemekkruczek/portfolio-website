import React from 'react';

export  class  Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            headerText:'',
        }
    }
    componentDidMount() {
        this.timer = setTimeout( () => {
            this.setState({
                show: true,
                headerText:'Coding',
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render(){
        // setTimeout( () =>{
        //     document.querySelector('.scroll').remove();
        // }, 1000); (w normalnym JS 1,5 linijki :P)
        return(
            <section className={this.state.show ? 'header' : null}>
                <h1>{this.state.headerText}</h1>
            </section>
        )
    }
}