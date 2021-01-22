import React from 'react';
import phone from '../images/ringing-phone.png';
import styles from './homeView.module.css';

function HomeView() {
  return (
    <>
      <h1 className={styles.title}>Hello, it's your PhoneBook</h1>
      <div className={[styles.container, styles.box].join(' ')}>
        <img width="200px" src={phone} alt="phone" />
      </div>
    </>
  );
}

export default HomeView;
