import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
 
const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};
 
export default Button;