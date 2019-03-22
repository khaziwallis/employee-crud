import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import initialState from './initialState';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
//reduxImmutableStateInvariant is not mandatory but help to warn us if we are mutating state accidently

const configureStore = () => {
    // composeEnhancer will provide support for redux debuging
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

    return createStore(
        reducers,
        initialState,
        composeEnhancer(applyMiddleware(reduxImmutableStateInvariant(),
            thunk))
    );
};

export default configureStore;