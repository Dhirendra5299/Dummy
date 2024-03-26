import React, { useState, useEffect } from 'react';
import styles from './FormComp.module.css';
 
function FormComp({ onSubmit, editData }) {
  const [formData, setFormData] = useState({
    'Asset Type Name': '',
    'Product Name': '',
    'Created On': '',
    'Created By': '',
    'Last Updated': '',
    'Updated By': ''
  });
 
  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
        'Asset Type Name': '',
        'Product Name': '',
        'Created On': '',
        'Created By': '',
        'Last Updated': '',
        'Updated By': ''
    });
  };
 
  return (
    <div>
      <h2>{editData ? 'Edit Configuaration Template' : 'Create New Configuration template'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="assetTypeName">Asset Type Name:</label><br />
        <input type="text" id="assetTypeName" name="assetTypeName" value={formData['Asset Type Name']} onChange={handleChange} required /><br />
       
        <label htmlFor="productName">Product Name:</label><br />
        <input type="text" id="productName" name="productName" value={formData['Product Name']} onChange={handleChange} required /><br />
       
        <label htmlFor="createdOn">Created On:</label><br />
        <input type="text" id="createdOn" name="createdOn" value={formData['Created On']} onChange={handleChange} required /><br />
       
        <label htmlFor="createdBy">Created By:</label><br />
        <input type="text" id="createdBy" name="createdBy" value={formData['Created By']} onChange={handleChange} required /><br />
       
        <label htmlFor="lastUpdated">Last Updated:</label><br />
        <input type="text" id="lastUpdated" name="lastUpdated" value={formData['Last Updated']} onChange={handleChange} required /><br />
       
        <label htmlFor="updatedBy">Updated By:</label><br />
        <input type="text" id="updatedBy" name="updatedBy" value={formData['Updated By']} onChange={handleChange} required /><br />
       
        <input type="submit" value="Submit" className={styles.button}/>
      </form>
    </div>
  );
}
 
export default FormComp;