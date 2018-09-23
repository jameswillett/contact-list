import { connect } from 'react-redux';
import Edit from '../components/Edit';
import { discardChanges, handleSubmit } from '../actions/actionCreators';

const mapStateToProps = ({ location, contacts }) => ({
  id: location.payload.id,
  contact: contacts.contactList.find(c => c.id === location.payload.id),
});

const mapDispatchToProps = {
  discardChanges,
  handleSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
