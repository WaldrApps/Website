import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Future from "./Future";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import Contact from "./Contact";

{/*
    Routing tutorial: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
*/}
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <nav className="navbar navbar-expand-md navbar-light sticky-top">
                    <NavLink exact to="/" replace className="navbar-brand">WaldrApps</NavLink>
                    <button className="navbar-toggler navbar-toggle" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/about" replace className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ongoing" replace className="nav-link">Ongoing Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/completed" replace className="nav-link">Completed Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/future" replace className="nav-link">Future Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" replace className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/ongoing" component={Ongoing}/>
                    <Route path="/about" component={About}/>
                    <Route path="/completed" component={Completed}/>
                    <Route path="/future" component={Future}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default Main;
