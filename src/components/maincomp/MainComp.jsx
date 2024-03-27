import styles from "./MainComp.module.css";

import { useState } from "react";
import Button from "../button/Button";
import Content from "../content/Content";
import Header from "../header/Header";
import Table from "../table/Table";
import Modal from "../modal/Modal";
import FormComp from "../formComp/FormComp";
import DialogBox from "../../componentsR/dialogbox/DialogBox";

const data = [
  {
    "Asset Type Name": "Alfreds Futterkiste",
    "Product Name": "Maria Anders",
    "Created On": "Germany",
    "Created By": "John Doe",
    "Last Updated": "2024-03-22",
    "Updated By": "Jane Smith",
  },
  {
    "Asset Type Name": "Centro comercial Moctezuma",
    "Product Name": "Francisco Chang",
    "Created On": "Mexico",
    "Created By": "Alice",
    "Last Updated": "2024-03-21",
    "Updated By": "Bob",
  },
  {
    "Asset Type Name": "Laptop",
    "Product Name": "Lenovo",
    "Created On": "India",
    "Created By": "Dhirendra",
    "Last Updated": "2024-05-21",
    "Updated By": "John Smith",
  },
  {
    "Asset Type Name": "Berglunds snabbköp",
    "Product Name": "Christina Berglund",
    "Created On": "Sweden",
    "Created By": "James Johnson",
    "Last Updated": "2024-03-21",
    "Updated By": "Emily Brown",
  },
  {
    "Asset Type Name": "Centro comercial Moctezuma",
    "Product Name": "Francisco Chang",
    "Created On": "Mexico",
    "Created By": "Michael Williams",
    "Last Updated": "2024-03-20",
    "Updated By": "Sophia Martinez",
  },
];

export default function MainComp() {
  const [modalData, setModalData] = useState({
    isModalOpen: false,
    editIndex: null,
  });

  const handleNewAssetTypeClick = () => {
    setModalData((prevModalData) => ({
      ...prevModalData,
      isModalOpen: true,
    }));
  };

  const handleEdit = (index) => {
    console.log(index);
    setModalData((prevModalData) => ({
      ...prevModalData,
      editIndex: index,
      isModalOpen: true,
    }));
  };

  const handleCloseModal = () => {
    setModalData((prevModalData) => ({
      ...prevModalData,
      isModalOpen: false,
    }));
  };

  const handleFormSubmit = (data) => {
    setModalData((prevModalData) => ({
      ...prevModalData,
      isModalOpen: false,
      editIndex: null,
    }));
  };

  return (
    <>
      <Header />
      <Content />
      <div className={styles.table_head}>
        <div className={styles.table_head_left}>1 Asset Type</div>
        <div>
          <Button handleClick={handleNewAssetTypeClick}>
            + New Asset Type
          </Button>
        </div>
      </div>
      <Table data={data} edit={handleEdit} />
      <Modal open={modalData.isModalOpen} onClose={handleCloseModal}>
        {/* <FormComp onSubmit={handleFormSubmit} editData={modalData.editIndex !== null ? data[modalData.editIndex] : null}/> */}
        <DialogBox onClose={handleCloseModal} />
      </Modal>
    </>
  );
}
