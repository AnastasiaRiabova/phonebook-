import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../ToRenderContact/toRenderContact.module.css';
import actions from '../../redux/phoneBook/actions';
import selectors from '../../redux/phoneBook/phonebook-selectors';

const FindContact = () => {
  const value = useSelector(selectors.getFilter);

  const dispatch = useDispatch();

  const filterChange = useCallback(
    e => {
      dispatch(actions.filterContacts(e.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <div className={s.formContainer}>
      <input
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={filterChange}
        className={s.inputValue}
      />
    </div>
  );
};

export default FindContact;
