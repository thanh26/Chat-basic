import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mReducers from "./Reducers";
import Saga from './Saga'

const sagaMiddleware = createSagaMiddleware();

const mStore = createStore(
    mReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(Saga);

export default mStore;
