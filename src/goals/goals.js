import React from 'react';
import { GoalList } from './goal-list';

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
  render() {
    return (
      <div>
        <input name='goal-name-input' value={this.state.goalName} onChange={this.handleInputChange}/>
        <input onClick={this.handleAddGoal} type='button' value="Add"/>
        <GoalList {...this.props}/>
      </div>
    );
  }
})