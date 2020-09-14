import React from 'react';

const FindContact = ({ filterChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={filterChange} />
    </label>
  );
};

export default FindContact;
