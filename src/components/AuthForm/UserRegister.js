import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import authOpr from '../../redux/AuthPhonebook/authOperations';
import styles from './auth.module.css';
import selectors from '../../redux/phoneBook/phonebook-selectors';
import { CircularProgress } from '@material-ui/core';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

function UserRegister() {
  const dispatch = useDispatch();
  const onRegistation = useCallback(
    data => {
      dispatch(authOpr.Registation(data));
    },
    [dispatch],
  );
  const loading = useSelector(selectors.getLoading);
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          await onRegistation(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Name *"
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
                  placeholder="Email *"
                  name="email"
                  className={styles.input}
                  autoComplete="off"
                />
                {errors.email && touched.email ? (
                  <div className={styles.validation}>{errors.email}</div>
                ) : null}
              </div>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Password *"
                  name="password"
                  type="password"
                  className={styles.input}
                  autoComplete="off"
                />
                {errors.password && touched.password ? (
                  <div className={styles.validation}>{errors.password}</div>
                ) : null}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <button className={styles.button} type="submit">
                    Sing Up
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

export default UserRegister;
