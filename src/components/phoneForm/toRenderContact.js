import React from 'react';

const RenderContact = ({ filtredContacts, removeId }) => {
  return (
    <ul>
      {filtredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className="contact-item">
            {name}:{number}
          </p>
          <button
            className="btn-contact"
            type="button"
            onClick={() => removeId(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RenderContact;
