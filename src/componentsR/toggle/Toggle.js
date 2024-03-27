// import classes from "./Toggle.module.css";

// export default function Toggle({ label, onSelect }) {
//   function handleCheck(event) {
//     const check = event.target.checked;
//     onSelect(check);
//   }
//   return (
//     <div>
//       <div className={classes.toggleswitch}>
//         <input
//           type="checkbox"
//           className={classes.checkbox}
//           name={label}
//           id={label}
//           onClick={handleCheck}
//         />
//         <label className={classes.label} htmlFor={label}>
//           <span className={classes.inner} />
//           <span className={classes.switch} />
//         </label>
//       </div>{" "}
//       {label}
//     </div>
//   );
// }


import classes from "./Toggle.module.css";

export default function Toggle({ label, onSelect }) {
  function handleCheck(event) {
    const check = event.target.checked;
    const id = event.target.id;
    onSelect(!check,id);
  }
  return (
    <div>
      <div className={classes.toggleswitch}>
        <input
          type="checkbox"
          className={classes.checkbox}
          name={label}
          id={label}
          onClick={handleCheck}
        />
        <label className={classes.label} htmlFor={label}>
          <span className={classes.inner} />
          <span className={classes.switch} />
        </label>
      </div>{" "}
      {label}
    </div>
  );
}

