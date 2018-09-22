import React from 'react';
import { connect } from 'react-redux';
import EditContactForm from './EditContactForm';
import { discardChanges, handleSubmit } from './actionCreators';


const Edit = ({ ...props, contact, id }) => {
  return (
    <div>
      <h1>EDIT CONTACT</h1>
      { contact &&
          <EditContactForm
            contact={contact}
            discardChanges={props.discardChanges}
            handleSubmit={props.handleSubmit}
          />
      }

      {!contact &&
        <div>No contact found with id of { id } ¯\_(ツ)_/¯</div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  id: state.location.payload.id,
  contact: state.contacts.contactList.find(c => c.id === state.location.payload.id),
});

const mapDispatchToProps = {
  discardChanges,
  handleSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
