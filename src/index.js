import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
//import initialState from './store/initialState';

//import { getEmployeesService } from './services/employeeServices';
import { getManagersService } from './services/managerServices';

// can pass inital state here, if you want state to be rendered from server of localStorage
let store = configureStore();

//if u want data to be there before application initiate, tou can dispatch here.
//store.dispatch(getEmployeesService());
store.dispatch(getManagersService());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
