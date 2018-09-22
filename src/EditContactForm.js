import React from 'react';
import ContactForm from './ContactForm';

const EditContactForm = ({ contact, discardChanges, handleSubmit, newContact }) => {
  return (
    <div style={{ backgroundColor: '#ddd', margin: '0% 30%' }}>
      <ContactForm
        initialValues={contact}
        onSubmit={handleSubmit} 
      />
      <button onClick={discardChanges}>{ newContact ? 'Go Back' : 'Discard' }</button>
    </div>
  );
}

export default EditContactForm;
