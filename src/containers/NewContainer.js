import { connect } from 'react-redux';
import { handleSubmit, discardChanges } from '../actions/actionCreators';
import NewContact from '../components/New';

const mapStateToProps = state => state;
const mapDispatchToProps = { handleSubmit, discardChanges };

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
