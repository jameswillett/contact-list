import { connect } from 'react-redux';
import Edit from './Edit';
import { discardChanges, handleSubmit } from './actionCreators';

const mapStateToProps = state => ({
  id: state.location.payload.id,
  contact: state.contacts.contactList.find(c => c.id === state.location.payload.id),
});

const mapDispatchToProps = {
  discardChanges,
  handleSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
