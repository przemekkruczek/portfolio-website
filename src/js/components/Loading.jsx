import React from 'react';

export  class  Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
        }
    }
    componentDidMount() {
        this.timer = setTimeout( () => {
            this.setState({
            show: false
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
            <section className={this.state.show ? 'loading' : null}>
                <div className={this.state.show ? 'scroll' : null}> </div>
            </section>
        )
    }
}






