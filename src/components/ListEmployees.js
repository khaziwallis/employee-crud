import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class ListEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees
    };
  }
  render() {
    let employeesJSX = this.props.employees.map((employee) => {
      return (
        <tr key={employee.id}> 
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.designation} </td>
        </tr>
      );
    });
    return (
        <div>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>
                      Employee ID
                    </th>
                    <th> Name</th>
                    <th> Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {employeesJSX}
                </tbody>
              </Table>
            </div>
        </div>
    );
  }
};

export default ListEmployees;
