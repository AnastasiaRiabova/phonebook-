import React, { Component } from 'react';
import PhoneForm from './phoneForm/phoneForm.js';
import RenderContact from './phoneForm/toRenderContact.js';
import FindContact from './phoneForm/searchContact.js';
import { CSSTransition } from 'react-transition-group';
import s from './App.module.css';
import c from '../components/phoneForm/searchContact.module.css';
import { connect } from 'react-redux';
import operations from '../redux/phonebook-operations';
import selectors from '../redux/phonebook-selectors';

export class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.props.setContacts(this.props.fetchContacts());
  //   if (this.props.items !== prevProps.items) {
  //     localStorage.setItem('contacts', JSON.stringify(this.props.items));
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
          {this.props.loading && <h1>Loading...</h1>}
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
  items: selectors.getItems(state),
  loading: selectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: operations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
