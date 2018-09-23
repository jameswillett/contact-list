import { pipe, merge, set, lensProp } from 'ramda';
import { makeTheContactPretty } from '../utils';

import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  DELETE_CONTACT,
  SUBMIT_UPDATED_CONTACT,
  SET_SORT_PROP,
} from '../actions/actionTypes';

const initialState = {
  contactList: [],
  loaded: false,
  loading: false,
  error: null,
  sortBy: 'id',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        contactList: action.contacts.map(pipe(makeTheContactPretty, merge({ 'active': true }))),
      };
    case CONTACT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error.message,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contactList: state.contactList.map((c) => c.id !== action.id ? c : set(lensProp('active'), false, c)),
      };
    case SUBMIT_UPDATED_CONTACT:
      return {
        ...state,
        error: null,
        contactList: [
          ...state.contactList.filter(({ id }) => id !== action.contact.id),
          action.contact,
        ]
      };
    case SET_SORT_PROP:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default: 
      return state;
  }
}
