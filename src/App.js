import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import router from './router';

const App = ({ location }) => (
  <div className="App">
    {router(location)}
  </div>
)

const mapStateToProps = state => ({ 
  location: state.location,
});

export default connect(mapStateToProps)(App);
