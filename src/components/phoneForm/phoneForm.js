import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import operations from '../../redux/phoneBook/phonebook-operations';
import selectors from '../../redux/phoneBook/phonebook-selectors';
import styles from '../AuthForm/auth.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const phoneRegExp = /^[^_]+$/;
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    // .min(1, 'Too Short!')
    .max(14, 'Too Long!')
    .matches(phoneRegExp, 'Invalid')
    .required('Required'),
});

const phoneNumberMask = [
  '(',
  /[0-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

function PhoneForm() {
  const items = useSelector(selectors.getItems);
  const loading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  const [alert, setAlert] = useState(false);

  const submitForm = useCallback(
    data => {
      dispatch(operations.createNewPhoneNumber(data));
    },
    [dispatch],
  );

  return (
    <div>
      {alert && <h1>Already exist</h1>}
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          if (items.some(el => el.name === values.name)) {
            setAlert(true);
            setTimeout(() => setAlert(false), 2000);
          } else {
            await submitForm(values);
            resetForm();
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Enter name *"
                  name="name"
                  className={styles.input}
                  autoComplete="off"
                />
                {errors.name && touched.name ? (
                  <div className={styles.validation}>{errors.name}</div>
                ) : null}
              </div>
              <div className={styles.fieldContainer}>
                <Field
                  name="number"
                  className={styles.input}
                  autoComplete="off"
                >
                  {({ field }) => (
                    <MaskedInput
                      {...field}
                      mask={phoneNumberMask}
                      id="phone"
                      placeholder="Enter phone number *"
                      type="text"
                      className={styles.input}
                      autoComplete="off"
                    />
                  )}
                </Field>
                {errors.number && touched.number ? (
                  <div className={styles.validation}>{errors.number}</div>
                ) : null}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <button
                    className={[styles.button, styles.white].join(' ')}
                    type="submit"
                  >
                    Add new contact
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PhoneForm;
