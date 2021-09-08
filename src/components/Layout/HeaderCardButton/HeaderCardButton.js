import { classes } from 'istanbul-lib-coverage';
import CartIcon from '../../Cart/CartIcon/CartIcon';

import styles from './HeaderCardButton.module.css';

export const HeaderCardButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}