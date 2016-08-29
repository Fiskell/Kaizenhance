import React from 'react';
import { connect } from 'react-redux';
import { Goals } from './goals';
import './App.css';

export const App = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.props.things}
        </div>
        <div className="App-container">
          <Goals {...this.props} />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
    return {
        things: state.main.get('stuff'),
    };
}

export const AppContainer = connect(mapStateToProps)(App);
