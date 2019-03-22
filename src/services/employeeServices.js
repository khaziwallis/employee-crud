import { showEmployees } from '../actions/employeeActions';
import { addEmployee } from '../actions/employeeActions';
import axios from 'axios';
//import { RandomNumberGenerator } from '../utils/RandomNumberGenerator';

import { API_URL } from '../constants/constants';

export function getEmployeesService () {
    return (dispatch) => {
        axios.get(API_URL + '/listEmployees')
        .then(response => {
            dispatch(showEmployees(response.data.doc));
        })
        .catch(error => {
            console.error(error);
        });
    }
};

export function addEmployeeService (employee) {
    return (dispatch) => {
        axios.post(API_URL + '/createEmployee', employee)
        .then(response => {
            dispatch(addEmployee(employee));
        })
        .catch(error => {
            console.error(error);
        });
    }
};