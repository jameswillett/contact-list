import React from 'react';
import EditContactForm from './EditContactForm';

const Edit = ({ discardChanges, handleSubmit, contact, id }) => {
  return (
    <div>
      <h1>EDIT CONTACT</h1>
      { contact &&
          <EditContactForm
            contact={contact}
            discardChanges={discardChanges}
            handleSubmit={handleSubmit}
          />
      }

      { !contact &&
        <div>No contact found with id of { id } ¯\_(ツ)_/¯</div>
      }
    </div>
  )
}

export default Edit;
