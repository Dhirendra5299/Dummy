import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Modal from './components/modal/Modal';
 
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
    "Asset Type Name": "Alfreds Futterkiste",
    "Product Name": "Maria Anders",
    "Created On": "Germany",
    "Created By": "John Doe",
    "Last Updated": "2024-03-22",
    "Updated By": "Jane Smith"
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

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleNewAssetTypeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Content />
      <div className='table-head'>
        <div className='table-head-left'>1 Asset Type</div>
        <div><Button handleClick= {handleNewAssetTypeClick}>+ New Asset Type</Button></div>
      </div>
      <Table data={data}/>
      <Modal open={isModalOpen} onClose= {handleCloseModal}>
        <h2>New Asset Type Modal</h2>
        <p>This is the modal content.</p>
      </Modal>
    </div>
  );
}
 
export default App;
