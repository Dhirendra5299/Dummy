import classes from './SameDropdown.module.css';
export default function SameDropdown({ placeholder }) {
  return (
    <div className={classes.select}>
      <select >
        <option value="">{placeholder}</option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
}

