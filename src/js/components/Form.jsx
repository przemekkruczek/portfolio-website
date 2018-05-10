import React from'react';

export class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Your name',
            email: 'Your e-mail',
            message: 'Message',
            textValue: ' ',
            options: [
                {value: 'have a technical question', text: 'have a technical question'},
                {value: 'want to connect', text: 'want to connect'},
                {value: 'have an upcoming project', text: 'have an upcoming project'},
            ],
        }
    }
    handleChangeOption = event => {
        this.setState({
            textValue: event.target.value,
        })
    };
    handleChangeName = event => {
        this.setState({
            name: event.target.value,
        })
    };
    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        })
    };
    handleChangeMessage = event => {
        this.setState({
            message: event.target.value,
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
    };
    render(){
        return(
            <section className='formContact'>
                <div className="topForm">
                    <p className="titleForm">Contact form</p>
                </div>
                <div className="midForm">
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.name} onChange={this.handleChangeName}/>
                        <input type='text' value={this.state.email} onChange={this.handleChangeEmail}/>
                        <select value={this.state.textValue} onChange={this.handleChangeOption} >
                            {this.state.options.map(op => <option value={op.value}> {op.text}</option> )}
                        </select>
                        <textarea value={this.state.message} onChange={this.handleChangeMessage}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        )
    }
}
