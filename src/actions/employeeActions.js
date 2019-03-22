import * as types from './actionTypes';

export function showEmployees(employees) {
    return { type: types.SHOW_EMPLOYEES, employees};
}

export function addEmployee(employee) {
    return { type: types.ADD_EMPLOYEE, employee};
}
