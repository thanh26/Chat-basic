import React from 'react';
import {Redirect, Route} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import {Login} from "./Login";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function MiddlewareLogin({ children, loginStatus, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginStatus ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = state => ({
    loginStatus: state.loginStatus
});

export default connect(mapStateToProps, null)(MiddlewareLogin);
