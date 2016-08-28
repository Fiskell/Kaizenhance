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
    default:
      return state
  }
}