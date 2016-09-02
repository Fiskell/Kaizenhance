import React                      from 'react';
import { render }                 from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider }               from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './redux/reducers/index';
import routes                     from './routes';
import './index.css';

const store = createStore(reducer);

const init_state = {
  goals: [],
};

store.dispatch({
  type: 'INIT',
  state: init_state
});

store.dispatch({
  type: 'PRINT'
});

render((
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
), document.getElementById('root'));