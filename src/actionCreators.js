import axios from 'axios';
import { merge } from 'ramda';
import { makeTheContactPretty } from './utils';

import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  DELETE_CONTACT,
  SUBMIT_UPDATED_CONTACT,
  SET_SORT_PROP,
} from './actionTypes';

export function getContactList() {
  return (dispatch) => {
    dispatch({ type: CONTACT_LIST_REQUEST });
    // i just have cors disabled in my browser
    // in production this request would make more sense on the server before first rende
    return axios.get('http://localhost:4000/contacts') 
      .then(res => res.data)
      .then(({ contacts }) =>
        dispatch({ type: CONTACT_LIST_SUCCESS, contacts }))
      .catch(error => 
        dispatch({ type: CONTACT_LIST_FAIL, error }));
  }
}

export function deleteContact(id) {
  return dispatch => 
    dispatch({ type: DELETE_CONTACT, id });
}

const goHome = { type: 'LIST' };

export function discardChanges() {
  return dispatch =>
    dispatch(goHome);
}

export function handleSubmit(contact) {
  return (dispatch, getState) => {
    const { 
      contacts: { 
        contactList,
      },
    } = getState();

    const id = contact.id || contactList.length + 1;  
    
    dispatch({ 
      type: SUBMIT_UPDATED_CONTACT, 
      contact: makeTheContactPretty(merge({ active: true, id }, contact)),
    });

    dispatch(goHome); 
  }
}

export function setSortProp(sortBy) {
  return (dispatch, getState) => {
    dispatch({ type: SET_SORT_PROP, sortBy });
  }
}
