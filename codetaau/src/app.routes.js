import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Home from './components/home'

class AppRoute extends Component {
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={Home}/>
            </Router>
        );
    }
}

export default AppRoute;