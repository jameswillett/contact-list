import { connect } from 'react-redux';
import { sortBy, prop } from 'ramda';
import List from './List';
import {
  getContactList,
  deleteContact,
  discardChanges,
  handleSubmit,
  setSortProp,
} from './actionCreators';

const mapStateToProps = (state) => ({
  loading: state.contacts.loading,
  loaded: state.contacts.loaded,
  error: state.contacts.error,
  sortBy: state.contacts.sortBy,
  newContact: state.contacts.newContact,
  contacts: sortBy(prop(state.contacts.sortBy), state.contacts.contactList).filter(c => c.active),
});

const mapDispatchToProps = {
  getContactList,
  deleteContact,
  discardChanges,
  handleSubmit,
  setSortProp,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
