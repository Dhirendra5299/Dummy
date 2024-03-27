// export default function Dropdown({ placeholder }) {
//   return (
//     <select style={{ width: "70%", height: "25px", borderRadius: "5px" }}>
//       <option value="">{placeholder}</option>
//       <option value=""></option>
//       <option value=""></option>
//     </select>
//   );
// }

import classess from './Dropdown.module.css';
export default function Dropdown({ placeholder }) {
  return (
    
    <select className={classess.select} >
      <option value="">{placeholder}</option>
      <option value=""></option>
      <option value=""></option>
    </select>
  );
}
