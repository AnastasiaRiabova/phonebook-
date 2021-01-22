import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PhoneForm from '../PhoneForm/PhoneForm';
import RenderContact from '../ToRenderContact/ToRenderContact';
import FindContact from '../SearchContacts/SearchContact';
import s from './ContactsView.module.css';
import c from '../SearchContacts/searchContact.module.css';
import operations from '../../redux/phoneBook/phonebook-operations';
import selectors from '../../redux/phoneBook/phonebook-selectors';

function ContactsView() {
  const items = useSelector(selectors.getItems);
  const loading = useSelector(selectors.getLoading);

  const dispatch = useDispatch();

  const fetchContacts = useCallback(
    () => dispatch(operations.fetchContacts()),
    [dispatch],
  );
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <h1 className={s.titleItem}>Phonebook</h1>
      </CSSTransition>
      <PhoneForm />
      {loading && <h1>Loading...</h1>}
      {items.length > 0 ? (
        <h2 className={s.text}>Your contacts</h2>
      ) : (
        <p className={s.text}>You don't have any contacts yet</p>
      )}
      <CSSTransition
        in={items.length > 0}
        timeout={250}
        classNames={c}
        unmountOnExit
      >
        <FindContact />
      </CSSTransition>

      <RenderContact />
    </>
  );
}

export default ContactsView;
