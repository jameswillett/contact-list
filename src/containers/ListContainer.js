import { connect } from 'react-redux';
import { sortBy, prop, pipe, equals, ifElse, toLower, identity } from 'ramda';
import List from '../components/List';
import { deleteContact, setSortProp } from '../actions/actionCreators';

const sortFn = (p, list) => 
  sortBy(pipe(
    prop(p), 
    ifElse(equals('name'), toLower, identity),
  ), list);

const mapStateToProps = ({ contacts }) => ({
  error: contacts.error,
  sortBy: contacts.sortBy,
  newContact: contacts.newContact,
  contacts: sortFn(contacts.sortBy, contacts.contactList).filter(c => c.active),
});

const mapDispatchToProps = {
  deleteContact,
  setSortProp,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
