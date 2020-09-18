import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PhoneForm from './phoneForm/phoneForm.js';
import RenderContact from './phoneForm/toRenderContact.js';
import FindContact from './phoneForm/searchContact.js';
import { CSSTransition } from 'react-transition-group';
import s from './App.module.css';
import c from '../components/phoneForm/searchContact.module.css';
import { connect } from 'react-redux';
import actions from '../redux/actions';

export class App extends Component {
  componentDidMount() {
    console.log('App componentDidMount');
    const AllContact = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(AllContact);
    console.log(parsedContact);

    if (parsedContact) {
      this.props.setContacts();
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('didUpdate');

  //   if (this.state.contacts !== prevState.contacts) {
  //     // console.log('not same');

  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <>
        <div>
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
          <h2 className={s.text}>Contacts</h2>
          <CSSTransition
            in={this.props.items.length > 0}
            timeout={250}
            classNames={c}
            unmountOnExit
          >
            <FindContact />
          </CSSTransition>
          <RenderContact />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.contacts.filter,
  items: state.contacts.items,
});

const mapDispatchToProps = {
  setContacts: actions.setContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
