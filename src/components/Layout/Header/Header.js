import React from 'react';
import { HeaderCardButton } from '../../Layout/HeaderCardButton/HeaderCardButton';

import mealsImage from '../../../assets/meals.jpg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>

        <HeaderCardButton />
      </header>

      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
