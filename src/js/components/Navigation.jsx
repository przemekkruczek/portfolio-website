import React from "react";

export  class  Navigation extends React.Component{
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
    playsound = (e) => {
        this.audio.play();
    };

    render(){
        return(
            <nav className={this.state.show ? 'mainMenu' : 'mainMenu_invisible'}>
                <audio src="sounds/3.wav" ref={el => this.audio = el}/>
                <a className='button' onMouseEnter={this.playsound} href='http://localhost:3000/#/'>Sample works</a>
                <a className='midBtn' onMouseEnter={this.playsound} href='https://github.com/przemekkruczek' target='_blank'>Github</a>
                <a className='button' onMouseEnter={this.playsound} href ='http://localhost:3000/#/contact'>Contact</a>
            </nav>
        )
    }
}
