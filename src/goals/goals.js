import React from 'react';

export default React.createClass({
  getInitialState() {
    return {goalName: ''};
  },
  componentDidMount() {
    this.props.dispatch({
      type: 'INIT',
      state: {
        goalName: '',
        goals: []
    }});
  },
  handleAddGoal(event) {
    console.log(this.state.goalName);
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
    const goals = this.props.goals;
    const goalItems = goals.map(function(goal) {
      return <li>{goal.name}</li>;
    });
    return (
      <div>
        <input name='goal-name-input' value={this.state.goalName} onChange={this.handleInputChange}/>
        <input onClick={this.handleAddGoal} type='button' value="Add"/>
        <ul>{ goalItems }</ul>
      </div>
    );
  }
})