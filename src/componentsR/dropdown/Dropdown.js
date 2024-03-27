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
