import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOps from '../../redux/AuthPhonebook/authOperations';
import select from '../../redux/AuthPhonebook/authSelectors';
import style from './auth.module.css';

const UserMenu = () => {
  const name = useSelector(select.getNamebyLogIn);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOps.LogOut());
  }, [dispatch]);
  let newName = '';

  if (name !== null) {
    newName = name.split('');
  }

  return (
    <>
      <div className={style.userMenu}>
        <p className={style.user}>Welcome,</p>
        <p className={style.user}>{name}</p>
        {name && (
          <div className={style.userN}>
            <p className={style.userName}>
              <span className={style.userNew}>{newName[0]}</span>
            </p>
          </div>
        )}
      </div>
      <button type="Button" onClick={onLogout} className={style.buttonLogout}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
