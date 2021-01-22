import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import s from './toRenderContact.module.css';
import operations from '../../redux/phoneBook/phonebook-operations';
import selectors from '../../redux/phoneBook/phonebook-selectors';

const RenderContact = () => {
  const items = useSelector(selectors.getFilterdTasks);
  const dispatch = useDispatch();

  return (
    <TransitionGroup component="ul">
      {items.map(({ id, name, number }) => (
        <CSSTransition in key={id} timeout={250} classNames={s}>
          <li key={id} className={s.listItem}>
            <span role="img" aria-label="piggy" className={s.emoji}>
              ☎️
            </span>
            <p className="contact-item">
              {name}:&nbsp;{number}
            </p>
            <button
              className="btn-contact"
              type="button"
              onClick={() => dispatch(operations.removeContact(id))}
            >
              🗑
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default RenderContact;
