import styles from "./TabNav.module.css";

export default function TabNav({
  increment,
  decrement,
  page,
  decrementDisable,
  incrementDisable,
}) {
  return (
    <div className={styles.container}>
      <button
        className={styles.con_btn}
        onClick={decrement}
        disabled={decrementDisable}
      >
        &#60;
      </button>
      <button className={styles.con_btn}>{page}</button>
      <button
        className={styles.con_btn}
        onClick={increment}
        disabled={incrementDisable}
      >
        &#62;
      </button>
    </div>
  );
}
