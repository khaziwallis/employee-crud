import React, { Component } from 'react';
import Header from './components/Header';
import AppRoutes from "./routes/AppRoutes";

class App extends Component {
  render() {
    return [
        <Header key="header" userName="khazi"/>,
        <AppRoutes key="content" />
    ];
  }
}

export default App;
