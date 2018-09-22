import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import router from './router';

const App = ({ location }) => (
  <div className="App">
    {router(location)}
  </div>
)

export default connect(state => state)(App);
