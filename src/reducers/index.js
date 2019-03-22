
import { combineReducers } from 'redux';
import employees from './employeesReducers';
import managers from './employeeManagersReducers';

const rootReducer = combineReducers({
    employees,
    managers
});

export default rootReducer;