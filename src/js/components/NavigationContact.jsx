import React from "react";

export  class  NavigationContact extends React.Component{

    playsound = (e) => {
        this.audio.play();
    };

    render(){
        return(
            <nav className='mainMenu'>
                <audio src="sounds/3.wav" ref={el => this.audio = el}/>
                <a className='button' onMouseEnter={this.playsound} href='http://localhost:3000/#/'>Sample works</a>
                <a className='midBtn' onMouseEnter={this.playsound} href='https://github.com/przemekkruczek' target='_blank'>Github</a>
                <a className='button' onMouseEnter={this.playsound} href ='http://localhost:3000/#/contact'>Contact</a>
            </nav>
        )
    }
}
