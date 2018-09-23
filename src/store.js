import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import contacts from './reducers/reducer';

const routesMap = {
  LIST: '/',
  EDIT: '/edit/:id',
  NEW: '/new',
}

const { reducer: location, middleware: reduxFirstMiddleware, enhancer } = connectRoutes(routesMap);

const rootReducer = combineReducers({
  contacts,
  form: formReducer,
  location,
});

const middlewares = [
  reduxFirstMiddleware,
  thunk,
  createLogger,
];

const store = createStore(rootReducer, {}, compose(enhancer, applyMiddleware(...middlewares)));

export default store;
