import React from 'react';
import { HeaderCartButton } from '../../Layout/HeaderCartButton/HeaderCartButton';

import mealsImage from '../../../assets/meals.jpg';
import styles from './Header.module.css';

export const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton onClick={props.onShowCart}/>
      </header>

      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
