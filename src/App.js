import React from 'react';
import { connect } from 'react-redux';
import './App.css';

export const App = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
        hey
        </div>
        <div className="App-container">
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
    return {
        things: state.stuff,

    };
}

export const AppContainer = connect(mapStateToProps)(App);
