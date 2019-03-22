import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function employeesReducers(state = initialState.employees, action) {
    switch (action.type) {
        case types.SHOW_EMPLOYEES:
            return action.employees;
        case types.ADD_EMPLOYEE:
            return [...state, { ...action.employee}];
        default:
            return state;
    }
}