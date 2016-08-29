import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      goalName: '',
      goals: []
    };
  },
  componentDidMount() {
  },
  handleAddGoal() {
    console.log(this.state.goalName);
    this.setState();
  },
  onChangeValue: function(event) {
    this.setState(
    {
      goalName: event.target.value
    });
  },
  render() {
    const goals = this.state.goals;
    const goalItems = goals.map(function(goal) {
      return <li>{goal.name}</li>;
    });
    return (
      <div>
        <input name='goal-name-input' value={this.state.goalName} onChange={this.onChangeValue}/>
        <input onClick={this.handleAddGoal} type='button' value="Add"/>
        <ul>{ goalItems }</ul>
      </div>
    );
  }
})