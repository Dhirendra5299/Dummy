import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Modal from './components/modal/Modal';
import FormComp from './components/formComp/FormComp';
 
const data = [
  {
    "Asset Type Name": "Alfreds Futterkiste",
    "Product Name": "Maria Anders",
    "Created On": "Germany",
    "Created By": "John Doe",
    "Last Updated": "2024-03-22",
    "Updated By": "Jane Smith"
  },
  {
    "Asset Type Name": "Centro comercial Moctezuma",
    "Product Name": "Francisco Chang",
    "Created On": "Mexico",
    "Created By": "Alice",
    "Last Updated": "2024-03-21",
    "Updated By": "Bob"
  },
  {
    "Asset Type Name": "Laptop",
    "Product Name": "Lenovo",
    "Created On": "India",
    "Created By": "Dhirendra",
    "Last Updated": "2024-05-21",
    "Updated By": "John Smith"
  },
  {
    "Asset Type Name": "Berglunds snabbköp",
    "Product Name": "Christina Berglund",
    "Created On": "Sweden",
    "Created By": "James Johnson",
    "Last Updated": "2024-03-21",
    "Updated By": "Emily Brown"
  },
  {
    "Asset Type Name": "Centro comercial Moctezuma",
    "Product Name": "Francisco Chang",
    "Created On": "Mexico",
    "Created By": "Michael Williams",
    "Last Updated": "2024-03-20",
    "Updated By": "Sophia Martinez"
  },
];
 
function App() {
  const [modalData, setModalData]= useState({
    isModalOpen: false,
    editIndex: null
  });
 
 
  const handleNewAssetTypeClick = () => {
    setModalData((prevModalData) => ({
      ...prevModalData,
      isModalOpen: true
    }));
  };
 
  const handleEdit = (index) => {
    console.log(index);
    setModalData((prevModalData) => ({
      ...prevModalData,
      editIndex: index,
      isModalOpen: true
    }));
  }
 
  const handleCloseModal = () => {
    setModalData((prevModalData) => ({
      ...prevModalData,
      isModalOpen: false
    }));
  };
 
  const handleFormSubmit = (data) => {
    setModalData((prevModalData) => ({
      ...prevModalData,
      isModalOpen: false,
      editIndex: null
    }));
  };
 
  return (
    <div className="App">
      <Header />
      <Content />
      <div className='table-head'>
        <div className='table-head-left'>1 Asset Type</div>
        <div><Button handleClick= {handleNewAssetTypeClick}>+ New Asset Type</Button></div>
      </div>
      <Table data={data} edit= {handleEdit}/>
      <Modal open={modalData.isModalOpen} onClose= {handleCloseModal}>
        <FormComp onSubmit={handleFormSubmit} editData={modalData.editIndex !== null ? data[modalData.editIndex] : null}/>
      </Modal>
    </div>
  );
}
 
export default App;