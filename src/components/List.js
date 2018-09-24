import React from 'react';
import { push as pushState } from 'redux-first-router';

const DisplayContact = (props) => {
  const { contact, deleteContact, editing } = props;
  return (
    <div style={{ background: contact.background, margin: '0 30%', padding: '15px 0px' }}>
      <div>{contact.name}</div>
    <div><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      <div>{contact.phone}</div>
      <div>
        <button onClick={() => pushState(`/edit/${contact.id}`)} disabled={editing}>Edit</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </div>
  );
}


const List = (props) => {
  const {
    //state
    contacts,
    error,
    sortBy,

    //actions
    deleteContact,
    setSortProp,
  } = props;
  
  const noContacts = !error && contacts.length === 0;
  const hasContacts = !error && !noContacts;

  return (
    <div className="list">
      <h1>CONTACTS</h1>
      <div>
        <span>Sort Contacts By...</span>
        <select onChange={(e) => setSortProp(e.target.value)} value={sortBy}>
          <option value='id'>id</option>
          <option value='name'>name</option>
        </select>
      </div>
      <button onClick={() => pushState('/new')}>Create New Contact</button>

      { hasContacts &&
          <div>
            { contacts.map(contact => (
              <div key={`contact-${contact.id}`} style={{ padding: "20px" }}>
                <DisplayContact
                  contact={contact}
                  deleteContact={deleteContact}
                />
              </div>
            ))}
          </div>
      }

      { noContacts &&
        <div style={{ padding: "20px" }}>
          you have no more contacts! add a contact or refresh to get contacts
        </div>
      }

      { error &&
          <div>
            Something went wrong! the internet told us this is the problem: <strong>{error}</strong>. You can still add contacts tho.
          </div>
      }
    </div>
  );
}

export default List;
