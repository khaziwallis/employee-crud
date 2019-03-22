import React from "react";
import { connect } from 'react-redux';
//import { addEmployee } from '../actions/employeeActions';
import {addEmployeeService} from '../services/employeeServices';

import PropTypes from 'prop-types';
import { RandomNumberGenerator } from '../utils/RandomNumberGenerator';
import AddEmployeeForm from "../components/AddEmployeeForm";

class AddEmployeePage extends React.Component {
    handleSubmit = (employee) => {
      this.props.dispatch(addEmployeeService(employee));
    };

    render() {
        return (
          <AddEmployeeForm handleSubmit={this.handleSubmit} />
        );
    }
}

AddEmployeePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

//export default AddEmployeePage;
// be specific while setting redux state to component props, if you expose enite store it will render on all store change
function mapStateToProps (state) {
  return {
    employee: state.employee
  };
}
// what action we want to expose to component
/*function mapDispatchToProps (dispatch) {

}*/
export default  connect(mapStateToProps)(AddEmployeePage);