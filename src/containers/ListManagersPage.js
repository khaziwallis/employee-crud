import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ListManagers from '../components/ListManagers';
import * as employeeActions from '../actions/employeeActions';

class ListManagersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managers: this.props.managers
    };
  }

  render() {
    return (
      <ListManagers
        managers={this.state.managers}/>
    );
  }
};

function mapStateToProps(state) {
  return {
    managers: state.managers
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListManagersPage);
