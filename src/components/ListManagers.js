import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class ListManagers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managers: this.props.managers
    };
  }
  render() {
    let managersJSX = this.props.managers.map((manager) => {
      return (
        <tr key={manager.id}> 
          <td>{manager.id}</td>
          <td>{manager.name}</td>
          <td>{manager.designation} </td>
        </tr>
      );
    });
    return (
        <div>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th> Manager ID</th>
                    <th> Name</th>
                    <th> Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {managersJSX }
                </tbody>
              </Table>
            </div>
        </div>
    );
  }
};

export default ListManagers;
