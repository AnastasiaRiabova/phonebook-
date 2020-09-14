import React, { Component } from 'react';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // связь события на инпуте и получемыми новыми данными в инпут, запись данных в сетСтейт
  // console.log(e.currentTarget.name); - получаем доступ к ключу/ключам объекта Стейт
  // console.log(e.currentTarget.value);-получаем значение инпута и сзвязываем их,
  //   [] - обращение к ключу объекта
  inputSearchNewState = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  // на событие формы вызываем функцию(submitForm) и передаем в нее
  // текущее значение Стейт, которое записываем выше
  onSubmitForm = e => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.reset();
  };

  // затираем Стейт после субмита данных
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          <label className="search-Items">
            Name
            <input
              className="input-item"
              type="text"
              name="name"
              // value-записывает новое значение Стейта,
              // как бы инпут видит стейт,а не только стейт инпут
              value={this.state.name}
              onChange={this.inputSearchNewState}
            />
          </label>
          <label className="search-Items">
            Phone
            <input
              className="input-item-second"
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.inputSearchNewState}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default PhoneForm;
