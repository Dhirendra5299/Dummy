import { useState, useEffect } from 'react';
import styles from './TabNav.module.css';

// const MAX_ENTRIES= 3;

export default function TabNav({ increment, decrement, page, decrementDisable, incrementDisable}) {
  // const [decrementIsDisable, setDecrementIsDisable]= useState(false);
  // const [incrementIsDisable, setIncrementIsDisable]= useState(false);
  
  // useEffect(() => {
  //   const ul = (page * MAX_ENTRIES) - 1;
  //   const ll = (page - 1) * MAX_ENTRIES;

  //   if (ul >= size) {
  //     setIncrementIsDisable(true);
  //   } else {
  //     setIncrementIsDisable(false);
  //   }

  //   if (ll === 0) {
  //     setDecrementIsDisable(true);
  //   } else {
  //     setDecrementIsDisable(false);
  //   }
  // }, [page, size]);


  return (
    <div className={styles.container}> {/* Use styles.container */}
      <button className={styles.con_btn} onClick={decrement} disabled= {decrementDisable}>&#60;</button>
      <button className={styles.con_btn}>{page}</button>
      <button className={styles.con_btn} onClick={increment} disabled= {incrementDisable}>&#62;</button>
    </div>
  );
}
