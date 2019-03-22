import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListEmployeesAndManagers from "../containers/ListEmployeesAndManagers";
import ListEmployeesPage from "../containers/ListEmployeesPage";
import ListManagersPage from '../containers/ListManagersPage';
import AddEmployeePage from '../containers/AddEmployeePage';
import AddManagerPage from '../containers/AddManagerPage';

class AppRoutes extends Component {
  render() {
    return (
      <div className="appContainer">
        <Router>
          <div className="navPanel">
            <ul>
              <li>
                <Link to="/listEmployeesAndManagers"> Employees and Managers</Link>
              </li>
              <li>
                <Link to="/listEmployees"> List Employees</Link>
              </li>
              <li>
                <Link to="/listManagers"> List Managers</Link>
              </li>
              <li>
                <Link to="/addEmployee"> Add Employee</Link>
              </li>
              <li>
                <Link to="/addManager"> Add Manager</Link>
              </li>
            </ul>
          </div>
          <div className="navContents">
            <Route path="/listEmployeesAndManagers" component={ListEmployeesAndManagers}></Route>
            <Route path="/listEmployees" component={ListEmployeesPage}></Route>
            <Route path="/listManagers" component={ListManagersPage}></Route>
            <Route path="/addEmployee" component={AddEmployeePage}></Route>
            <Route path="/addManager" component={AddManagerPage}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;
