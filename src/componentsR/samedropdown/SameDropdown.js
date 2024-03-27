// export default function SameDropdown({ placeholder }) {
//   return (
//     <div>
//       <label>words</label>
//       <br />
//       <select
//         style={{ width: "267.486px", height: "25px", borderRadius: "5px" }}
//       >
//         <option value="">{placeholder}</option>
//         <option value=""></option>
//         <option value=""></option>
//       </select>
//       <p>Note:This section will impact battery life.</p>
//     </div>
//   );
// }

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

