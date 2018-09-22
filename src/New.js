import React from 'react';
import { connect } from 'react-redux';
import EditContactForm from './EditContactForm';
import { handleSubmit, discardChanges } from './actionCreators';

const NewContact = (props) => {
  return (
    <div className="newcontact">
      <h1>NEW CONTACT</h1>
      <EditContactForm
        contact={{}}
        handleSubmit={props.handleSubmit}
        discardChanges={props.discardChanges}
        newContact
      />
    </div>
  )
}

export default connect(state => state, { handleSubmit, discardChanges })(NewContact)
