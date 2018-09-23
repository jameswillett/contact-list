import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { getContactList } from './actions/actionCreators';

// i just have cors disabled in my browser
// in production this request would make more sense on the server before first rende
store.dispatch(getContactList())
  .then(() => 
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('root')));

registerServiceWorker();
