import * as types from './actionTypes';

export function showManagers(managers) {
    return { type: types.SHOW_EMPLOYEE_MANAGERS, managers};
}

export function addManager(manager) {
    return { type: types.ADD_EMPLOYEE_MANAGER, manager};
}