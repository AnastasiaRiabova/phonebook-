import React from 'react';
import s from './toRenderContact.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import operations from '../../redux/phonebook-operations';
import selectors from '../../redux/phonebook-selectors';

const RenderContact = ({ items, removeId }) => {
  // console.log(items);
  return (
    <TransitionGroup component="ul">
      {items.map(({ id, name, number }) => (
        <CSSTransition in key={id} timeout={250} classNames={s}>
          <li key={id} className={s.listItem}>
            <span role="img" aria-label="piggy" className="s.emoji">
              ☎️
            </span>
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({ items: selectors.getFilterdTasks(state) });

const mapDispachToProps = dispatch => ({
  removeId: id => dispatch(operations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(RenderContact);
