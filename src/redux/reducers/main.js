import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function main(state = Map(), action) {
  switch (action.type) {
    case 'INIT':
      console.log('here', action.state);
      return setState(state, action.state);
    case 'PRINT':
      console.log('state', state);
      return state;
    case 'ADD_GOAL':
      console.log('hey', state.get('goalName'));
      state.update('goalName', {}, value => 'yay')
      .update('goals', list => list.push(action.value));
//      state.update('goals', {}, list => list.push({name: action.value}));
      console.log('hey', state.get('goalName'));
      console.log('goals', state.get('goals'));
      return state;
    default:
      return state
  }
}