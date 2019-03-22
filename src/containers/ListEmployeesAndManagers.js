import React, { Component } from 'react';
import {connect} from 'react-redux';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/Container";
import ListEmployees from '../components/ListEmployees';
import ListManagers from '../components/ListManagers';
import { getEmployeesService } from '../services/employeeServices';

class ListEmployeesAndManagers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1,
      employees: [],
      managers: props.managers
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getEmployeesService());
  }
  componentWillReceiveProps (props) {
    this.setState({
      employees: props.employees
    });
  }
  handleSelect(key) {
    this.setState({ key: key });
  }
  render() {
    return (
      <Container>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
          <Tab eventKey={1} title="Employees">
            <ListEmployees employees={this.state.employees}>
            </ListEmployees>
          </Tab>
          <Tab eventKey={2} title="Managers">
            <ListManagers managers={this.state.managers}>
            </ListManagers>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
      employees: state.employees,
      managers: state.managers
  };
}

export default connect(mapStateToProps)(ListEmployeesAndManagers);
