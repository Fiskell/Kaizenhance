import React from 'react';

export default React.createClass({
  getInitialState() {
    return {goalName: ''};
  },
  handleAddGoal(event) {
    this.props.dispatch({
      type: 'ADD_GOAL',
      value: this.state.goalName
    });
    this.setState({goalName: ''});
  },
  handleInputChange(event) {
    this.setState({goalName: event.target.value});
  },
  handleRemoveGoal(index) {
    console.log('asdf', index);
    this.props.dispatch({
      type: 'REMOVE_GOAL',
      value: index
    });
  },
  render() {
    const goals = this.props.goals;
    const goalItems = goals.map(function(goal, index) {
      return <li key={index}><span>{goal.name}</span><button onClick={() => this.handleRemoveGoal(index)}>x</button></li>;
    }, this);
    return (
      <div>
        <input name='goal-name-input' value={this.state.goalName} onChange={this.handleInputChange}/>
        <input onClick={this.handleAddGoal} type='button' value="Add"/>
        <ul>{ goalItems }</ul>
      </div>
    );
  }
})