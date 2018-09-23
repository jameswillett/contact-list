import React from 'react';
import EditContactForm from './EditContactForm';

const NewContact = ({ handleSubmit, discardChanges }) => {
  return (
    <div className="newcontact">
      <h1>NEW CONTACT</h1>
      <EditContactForm
        contact={{}}
        handleSubmit={handleSubmit}
        discardChanges={discardChanges}
        newContact
      />
    </div>
  )
}

export default NewContact;
