import React from 'react';

export default React.createClass({
  handleRemoveGoal(index) {
    this.props.dispatch({
      type: 'REMOVE_GOAL',
      value: index
    });
  },
  render(){
    const goalItems = this.props.goals.map(function(goal, index) {
      return <li key={index}>
          <span>{goal.name}</span>
          <button onClick={() => this.handleRemoveGoal(index)}>x</button>
        </li>;
    }, this);

    return (<ul>{goalItems}</ul>);
  }
})