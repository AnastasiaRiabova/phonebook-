import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Alert from './AlertForm';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
    alert: false,
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

    if (this.props.items.some(el => el.name === this.state.name)) {
      console.log('hi');
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 3000);
    } else {
      this.props.submitForm(this.state);
      this.reset();
    }
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
        {this.state.alert && <Alert />}
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
          <button className="btn" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  submitForm: actions.createNewPhoneNumber,
};

// const mapDispachToProps = dispatch => {
//   if()
//   return {
//     submitForm: data => dispatch(actions.createNewPhoneNumber(data)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);

//     setTimeout(() => this.setState({ alert: false }), 1000);
//   } else
