import CloseIcon from "@mui/icons-material/Close";

import styles from "./CloneBox.module.css";
import { useState } from "react";

export default function CloneBox({ onClose, data }) {
  const [assetTypeName, setAssetTypeName] = useState(
    data && data["Asset Type Name"] ? data["Asset Type Name"] : ""
  );
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAssetTypeName(e.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!assetTypeName.trim()) {
      setError("Please Enter Asset Type Name");
    } else {
      //code for submission
    }
  };

  return (
    <form className={styles.cloneBox}>
      <div className={styles.innerBox}>
        <div className={styles.closeDiv}>
          <CloseIcon className={styles.crossBtn} onClick={onClose} />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="assetInput">Asset Type Name</label>
          <input
            id="assetInput"
            value={assetTypeName}
            onChange={handleChange}
          />
          <div className={styles.error}>{error}</div>
        </div>
        <div className={styles.btncontainer}>
          <button
            type="submit"
            className={styles.subbtn}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button type="button" onClick={onClose} className={styles.cancelbtn}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
