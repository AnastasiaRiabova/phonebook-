import React from 'react';
import s from './toRenderContact.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

// const RenderContact = ({ filtredContacts, removeId }) => {
//   console.log(filtredContacts());
//   return (
//     <TransitionGroup component="ul">
//       {filtredContacts().map(({ id, name, number }) => (
//         <CSSTransition in key={id} timeout={250} classNames={s}>
//           <li key={id} className={s.listItem}>
//             <span role="img" aria-label="piggy" className="s.emoji">
//               ☎️
//             </span>
//             <p className="contact-item">
//               {name}:{number}
//             </p>
//             <button
//               className="btn-contact"
//               type="button"
//               onClick={() => removeId(id)}
//             >
//               Delete
//             </button>
//           </li>
//         </CSSTransition>
//       ))}
//     </TransitionGroup>
//   );
// };

// const mapDispachToProps = dispatch => ({
//   removeId: actions.removeContact,
//   filtredContacts: actions.getContact,
// });

// export default connect(null, mapDispachToProps)(RenderContact);

const RenderContact = ({ items, removeId }) => {
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

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const getFilterdTasks = items.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    items: getFilterdTasks,
  };
};

const mapDispachToProps = dispatch => ({
  removeId: id => dispatch(actions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(RenderContact);
