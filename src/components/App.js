import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PhoneForm from './phoneForm/phoneForm.js';
import RenderContact from './phoneForm/toRenderContact.js';
import FindContact from './phoneForm/searchContact.js';
import { CSSTransition } from 'react-transition-group';
import s from './App.module.css';
import c from '../components/phoneForm/searchContact.module.css';
import { connect } from 'react-redux';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   alert: false,
  // };
  // пробрасываем функцию через пропс в форму(phoneForm) и в параметрах получаем обратно
  // данные инфута формы(в форме в вызове данные инпута были переданы аргументами)
  // из полцченных данных создаем новый объекти и записываем его в массив с уже распыденными
  // в нем старыми объектами

  // createNewPhoneNumber = data => {
  //   if (this.state.contacts.some(el => el.name === data.name)) {
  //     this.setState({ alert: true });
  //     setTimeout(() => this.setState({ alert: false }), 1000);
  //   } else {
  //     const newNumber = {
  //       id: uuidv4(),
  //       name: data.name,
  //       number: data.number,
  //     };
  //     this.setState(prev => ({ contacts: [newNumber, ...prev.contacts] }));
  //   }
  // };

  // связываем инпут фильтра со внесенными в него значениями и передаем в пропсах функцию
  // для отрисовки разметки
  // filterSearchInput = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // инпут фильтр с которого получаем данные в Стаей-фильтр и перебирая контакты отрисовываем
  // только те, которые совпали, так как инклуд по пустой строке возвращает
  // тру, а значит все подходтят

  // getFilterdContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // getFilterdContacts = () => {
  //   const { filter, items } = this.props.store.contacts;
  //   console.log(filter);
  //   console.log(items);
  //   const normalizedFilter = filter.toLowerCase();
  //   return items.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  // };

  // remove = id => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(contact => contact.id !== id),
  //     };
  //   });
  // };

  // componentDidMount() {
  //   // console.log('App componentDidMount');
  //   const AllContact = localStorage.getItem('contacts');
  //   const parsedContact = JSON.parse(AllContact);
  //   // console.log(parsedContact);

  //   if (parsedContact) {
  //     this.setState({ contacts: parsedContact });
  //   }
  // }

  // // не делать стрелочной фукнцией обычный метод объекта
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
            <FindContact
            // filterChange={this.filterSearchInput}
            // value={this.state.filter}
            />
          </CSSTransition>
          <RenderContact
          // filtredContacts={this.getFilterdContacts()}
          // removeId={this.remove}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.contacts.filter,
  items: state.contacts.items,
});

export default connect(mapStateToProps, null)(App);
// export default App;
