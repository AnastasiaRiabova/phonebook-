import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import authOpr from '../../redux/AuthPhonebook/authOperations';
import styles from './auth.module.css';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

function UserLogin() {
  const dispatch = useDispatch();
  const onLogin = useCallback(
    data => {
      dispatch(authOpr.Login(data));
    },
    [dispatch],
  );

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          await onLogin(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.formContainer}>
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
              <button className={styles.button} type="submit">
                LogIn
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserLogin;
