import { connect } from 'react-redux';
import { sortBy, prop } from 'ramda';
import List from '../components/List';
import {
  getContactList,
  deleteContact,
  discardChanges,
  handleSubmit,
  setSortProp,
} from '../actions/actionCreators';

const mapStateToProps = ({ contacts }) => ({
  loading: contacts.loading,
  loaded: contacts.loaded,
  error: contacts.error,
  sortBy: contacts.sortBy,
  newContact: contacts.newContact,
  contacts: sortBy(prop(contacts.sortBy), contacts.contactList).filter(c => c.active),
});

const mapDispatchToProps = {
  getContactList,
  deleteContact,
  discardChanges,
  handleSubmit,
  setSortProp,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
