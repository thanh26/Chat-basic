import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {API_GET_USERS, LOGGED, LOGIN_ACTION} from "./Constants";

function* fetchUser(action) {
    const users = yield call(getAllUser);
    const { userName } = action;
    const { password } = action;

    yield all(
        users.map(user => {
            if (user.email === userName && user.password === password) {
                return put({
                    type: LOGGED,
                });
            }
        }),
    );
}

function* Saga() {
    yield takeEvery(LOGIN_ACTION, fetchUser);
}

function getAllUser() {
    return axios.get(API_GET_USERS).then(response => response.data);
}

export default Saga;
