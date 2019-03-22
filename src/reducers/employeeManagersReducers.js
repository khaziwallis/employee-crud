import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function employeeManagersReducers(state = initialState.managers, action) {
    switch (action.type) {
        case types.SHOW_EMPLOYEE_MANAGERS:
            return action.managers;
        case types.ADD_EMPLOYEE_MANAGER:
            return [ ...state, { ...action.manager}];
        default:
            return state;
    }
}