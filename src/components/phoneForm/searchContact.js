import React from 'react';
import s from './toRenderContact.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const FindContact = ({ filterChange, value }) => {
  return (
    <label className={s.inputText}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={filterChange}
        className={s.inputValue}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterChange: e => dispatch(actions.filterContacts(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindContact);
