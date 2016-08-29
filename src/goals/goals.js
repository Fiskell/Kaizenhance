import React from 'react';

export default React.createClass({
  getInitialState() {
    return {goalName: ''};
  },
  componentDidMount() {
  },
  handleAddGoal() {
    console.log(this.state.goalName);
  },
  onChangeValue: function(event) {
    this.setState(
    {
      goalName: event.target.value
    });
  },
  render() {
    return (
      <div>
        <input name='goal-name-input' value={this.state.goalName} onChange={this.onChangeValue}/>
        <input onClick={this.handleAddGoal} type='button' value="Add"/>
      </div>
    );
  }
})