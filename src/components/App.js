import React, { useEffect, Suspense, lazy, useCallback } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOpr from '../redux/AuthPhonebook/authOperations';
import routes from '../routes';
import st from './App-header.module.css';
import UserMenu from './AuthForm/UserMenu';
import selectors from '../redux/AuthPhonebook/authSelectors';
import PrivatRoute from './AuthForm/privatRoute';
import PublickRoute from './AuthForm/publickRoute';
import { CircularProgress } from '@material-ui/core';

const Register = lazy(() => import('./AuthForm/UserRegister'));
const Login = lazy(() => import('./AuthForm/UserLogin'));
const Contacts = lazy(() => import('./ContactsView/ContactsView'));
const Home = lazy(() => import('./HomeView/HomeView'));

function App() {
  const isAuth = useSelector(selectors.isAuthenticated);
  const dispatch = useDispatch();
  const onGetUser = useCallback(() => dispatch(authOpr.getCurrentUser()), [
    dispatch,
  ]);

  useEffect(() => {
    if (isAuth) {
      onGetUser();
    }
  }, [isAuth, onGetUser]);

  return (
    <div>
      <div className={st.headerList}>
        <p className={st.headerItems}>
          <NavLink
            to={routes.home}
            exact={true}
            activeStyle={{ color: 'white' }}
          >
            Home
          </NavLink>
        </p>
        {
          <p className={st.headerItems}>
            <NavLink to={routes.contacts} activeStyle={{ color: 'white' }}>
              Contacts
            </NavLink>
          </p>
        }
        {isAuth && <UserMenu />}
        {!isAuth && (
          <>
            <p className={st.headerItems}>
              <NavLink to={routes.register} activeStyle={{ color: 'white' }}>
                Sing Up
              </NavLink>
            </p>
            <p className={st.headerItems}>
              <NavLink to={routes.login} activeStyle={{ color: 'white' }}>
                LogIn
              </NavLink>
            </p>
          </>
        )}
      </div>
      <div className={st.container}>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <PublickRoute
              path={routes.register}
              restricted
              component={Register}
            />
            <PublickRoute path={routes.login} restricted component={Login} />
            <PrivatRoute path={routes.contacts} component={Contacts} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
