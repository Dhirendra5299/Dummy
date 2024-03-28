import CloseIcon from "@mui/icons-material/Close";
import Button from "../button/Button";

import styles from "./CloneBox.module.css";

export default function CloneBox({ onClose, data }) {
  return (
    <div className={styles.cloneBox}>

      <div className={styles.innerBox}>
        <div className={styles.closeDiv}>
          <CloseIcon onClick={onClose}/>
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="assetInput">Asset Type Name</label>
          <input id="assetInput" />
        </div>
        <div>
          <Button handleClick={() => null}>Submit</Button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>

    </div>
  );
}
