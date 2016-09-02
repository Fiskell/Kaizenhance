import React from 'react';

export default React.createClass({
  handleRemoveGoal(index) {
    this.props.dispatch({
      type: 'REMOVE_GOAL',
      value: index
    });
  },
  render(){
    const { goals } = this.props;
    const goalItems = goals.map(function(goal, index) {
      return <li key={index}><span>{goal.name}</span><button onClick={() => this.handleRemoveGoal(index)}>x</button></li>;
    }, this);
    return (
      <ul>{goalItems}</ul>
    );
  }
})