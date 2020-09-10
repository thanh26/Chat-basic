import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddlewareLogin from "./MiddlewareLogin";
import connect from "react-redux/lib/connect/connect";
import {LOGIN_ACTION, LOGOUT_ACTION} from "./Constants";

function Header(props) {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {
                            props.loginStatus ? (
                                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { props.logout() }}>logout</button>
                            ) : (
                                <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Login</Link>
                            )
                        }
                    </form>
                </div>
            </nav>
            <Switch>
                <MiddlewareLogin exact path="/home">
                    <Home/>
                </MiddlewareLogin>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

const mapStateToProps = state => ({
    loginStatus: state.loginStatus
});

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch({
                type: LOGOUT_ACTION,
            });
        },

        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
