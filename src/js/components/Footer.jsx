import React from "react";

export  class  Footer extends React.Component{
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
            <section className={this.state.show ? 'mainFooter' : 'mainFooter_invisible'}>
                <p>2018 / by Przemysław Kruczek</p>
            </section>
        )
    }
}