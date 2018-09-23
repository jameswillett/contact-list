import React from 'react';
import { NOT_FOUND } from 'redux-first-router';
import ListContacts from './containers/ListContainer';
import EditContact from './containers/EditContainer';
import NewContact from './containers/NewContainer';

// it almost makes sense to consolidate the New and Edit views to use the
// same component AND the same container, and then just differentiate them
// with state.location, but it felt a little icky doing that, so theyre separate

export default function ({ type }) {
  const routes = {
    LIST: <ListContacts />,
    EDIT: <EditContact />,
    NEW: <NewContact />,
    [NOT_FOUND]: <div>uh oh</div>,
  };

  return routes[type];
}
