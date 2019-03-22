import React from "react";
import { connect } from 'react-redux';
import { addManagerService } from '../services/managerServices';

import PropTypes from 'prop-types';
import { RandomNumberGenerator } from '../utils/RandomNumberGenerator';
import AddManagerForm from "../components/AddManagerForm";

class AddManagerPage extends React.Component {
    handleSubmit = (manager) => {
      this.props.dispatch(addManagerService(manager));
    };

    render() {
        return (
          <AddManagerForm handleSubmit={this.handleSubmit}>
          </AddManagerForm>
        );
    }
}

AddManagerPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    manager: state.manager
  };
}
export default  connect(mapStateToProps)(AddManagerPage);