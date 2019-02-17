import React, { Component } from "react";
import HomeRouter from "./home.route";
import {NavLink} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h4>React Router - Report App</h4>
        <nav>
          <NavLink className="main-anchor" to="/login">
            Login
          </NavLink>
        </nav>
        <div>
          <HomeRouter />
        </div>
      </div>
    );
  }
}

export default Home;
