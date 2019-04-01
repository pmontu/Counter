import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  counter1: 0,
  counter2: 0
}

function rootReducer(state = initialState, action) {
  if(action.type === "INCREMENT") {
    return {
      ...state,
      ["counter" + action.id]: state["counter" + action.id] + 1
    }
  }
  return state
}

let store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
