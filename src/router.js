import React from 'react';
import { NOT_FOUND } from 'redux-first-router';
import ListContacts from './ListContainer';
import EditContact from './Edit';
import NewContact from './New';

export default function (location) {
  const routes = {
    LIST: <ListContacts />,
    EDIT: <EditContact />,
    NEW: <NewContact />,
    [NOT_FOUND]: <div>uh oh</div>,
  };

  const { type } = location;
  return routes[type];

}