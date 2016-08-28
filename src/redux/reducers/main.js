export default function main(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
        console.log('here', state);
      return state.concat([ action.text ])
    default:
      return state
  }
}