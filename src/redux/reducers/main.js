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
      console.log('action-value', action.value);
      console.log('before', state.get('goalName'));
      return state.update('goalName', {}, value => action.value)
      .update('goals', list => list.push({name: action.value}));
//      state.update('goals', {}, list => list.push({name: action.value}));
      console.log('after', state.get('goalName'));
      console.log('goals', state.get('goals'));
//      return result;
    default:
      return state
  }
}