import { showManagers } from '../actions/managerActions';
import { addManager } from '../actions/managerActions';
import axios from 'axios';
import { API_URL } from '../constants/constants';

export function getManagersService () {
    return (dispatch) => {
        axios.get(API_URL + '/listManagers')
        .then(response => {
            dispatch(showManagers(response.data.doc));
        })
        .catch(error => {
            console.error(error);
        });
    }
};

export function addManagerService (manager) {
    return (dispatch) => {
        axios.post(API_URL + '/createManager', manager)
        .then(response => {
            dispatch(addManager(manager));
        })
        .catch(error => {
            console.error(error);
        });
    }
};