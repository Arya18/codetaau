import React,{Component} from 'react';
import {Route} from 'react-router';
import Login from "./login/login";

class HomeRouter extends Component {
    render(){
        return (
            <div>
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}

export default HomeRouter;