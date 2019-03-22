import React, { Component } from 'react';
import '../styles/index.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          Sample Application for Employee CRUD operations
          userName: {this.props.userName}
        </div>
    );
  }
}

export default Header;
