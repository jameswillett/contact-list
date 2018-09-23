import { connect } from 'react-redux';
import { handleSubmit, discardChanges } from './actionCreators';
import NewContact from './New';

const mapStateToProps = state => state;
const mapDispatchToProps = { handleSubmit, discardChanges };

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
