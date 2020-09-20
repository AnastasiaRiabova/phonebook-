import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/phonebook-operations';
import selectors from '../../redux/phonebook-selectors';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
    alert: false,
  };

  inputSearchNewState = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (this.props.items.some(el => el.name === this.state.name)) {
      // console.log('hi');s
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 3000);
    } else {
      this.props.submitForm(this.state);
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    // console.log(this.props.items);
    return (
      <>
        {this.state.alert && <h1>Already exist</h1>}
        <form onSubmit={this.onSubmitForm}>
          <label className="search-Items">
            Name
            <input
              className="input-item"
              type="text"
              name="name"
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
  items: selectors.getItems(state),
});

const mapDispatchToProps = {
  submitForm: operations.createNewPhoneNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);
