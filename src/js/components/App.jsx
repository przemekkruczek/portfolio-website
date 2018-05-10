import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './Main.jsx';
import {Contact} from './Contact.jsx';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        </HashRouter>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});