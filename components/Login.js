import { Button, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {LOGIN_ACTION} from "./Constants";
import connect from "react-redux/lib/connect/connect";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export function Login(props) {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorUserName, setErrorUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleLogin = (userName, password) => {
        setErrorUserName((userName === null) ? 'Nhập user name đi bạn ơi' : '');
        setErrorPassword((password === null) ? 'Nhập password đi bạn ơi' : '');

        if (errorPassword === '' && errorUserName === '') {
            props.login(userName, password);
        }
    }

    if(props.loginStatus) {
        return (
            <Route>
                <Redirect to="/home" />
            </Route>
        );
    } else {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="offset-3 col-6 offset-3">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email"
                                                  onChange={event => {
                                                      setUserName(event.target.value);
                                                  }} />
                                    <p className='error mt-2' style={{ color:'red' }}>{ errorUserName }</p>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password"
                                                  onChange={event => {
                                                      setPassword(event.target.value);
                                                  }}
                                    />
                                    <p className='error mt-2' style={{ color:'red' }}>{ errorPassword }</p>

                                </Form.Group>
                                <Button variant="primary" onClick={() => handleLogin(userName, password)}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: state.loginStatus
});

function mapDispatchToProps(dispatch) {
    return {
        login: (userName, password) => {
            dispatch({
                type: LOGIN_ACTION,
                userName,
                password,
            });
        },

        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);