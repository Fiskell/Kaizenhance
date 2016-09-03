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
      if(state.get('goals').count() == 3) {
        return state;
      }
      return state.update('goals', list => list.push({name: action.value}));
    case 'REMOVE_GOAL':
      return state.update('goals', list => list.delete(action.value));
    default:
      return state
  }
}