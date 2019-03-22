import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as employeeActions from '../actions/employeeActions';
import ListEmployees from '../components/ListEmployees';
import { PropTypes } from 'prop-types';

//import { getEmployees } from '../services/employeeServices';
//import { showEmployees } from '../actions/employeeActions';
import { getEmployeesService } from '../services/employeeServices';

class ListEmployeesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: props.dispatch(getEmployeesService())
    };
  }
  componentDidMount() {
    // we can eliminate this to constructor, but keep condition in render
    //this.props.dispatch(getEmployeesService()); 
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.employees!==prevState.employees){
      return { employees: nextProps.employees};
    }
    else return null;
  }

  render() {
    const employees = this.state.employees || [];
    return (
      <ListEmployees
        employees={employees}/>
    );
  }
};

ListEmployeesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
      employees: state.employees
  };
}
/*
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(employeeActions, dispatch)
  };
};*/


export default connect(mapStateToProps)(ListEmployeesPage);

/* 4 ways to do mapDispatchToProps
  1. ignore it
  2. wrap manually
  3. bindActionCreators
  4. return object
*/
/*
1. ignore it
    export default connect(mapStateToProps)(ListEmployeesPage);
*/
/*
2. manually
    import { getEmployees, createEmployees } from './services/employeeServices';
    function mapDispatchToProps(dispatch) {
      loadEmployees: () => {
        dispatch(getEmployees());
      },
      createEmployee: () => {
        dispatch(createEmployees());
      }
    };
*/

/*
3. use bindActionCreators
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(employeeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListEmployeesPage);
*/
/*
4. return object
    const mapDispatchToProps = {loadEmployees, createEmployee};
    export default connect(mapStateToProps, mapDispatchToProps)(ListEmployeesPage);
*/
