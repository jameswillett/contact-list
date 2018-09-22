import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { getContactList } from './actionCreators';

store.dispatch(getContactList())
  .then(() => 
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('root')));

registerServiceWorker();
