import React from "react";
import styles from "./Header.module.css";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.logo}>
          Qualcomm Aware<sup>tm</sup> Operations
        </div>
        <div className={styles.tenant}>Tenant: ChandraTest1</div>
      </div>
      <div className={styles.header_right}>
        <ul>
          <li>Alert Summary</li>
          <li className={styles.dropdown}>
            Devices <span className={styles.rotate}>^</span>
            <ul>
              <li>Devices 1</li>
              <li>Devices 2</li>
              <li>Devices 3</li>
            </ul>
          </li>
          <li>Shipments</li>
          <li>Services</li>
          <li className={`${styles.dropdown} ${styles.manage}`}>
            Manage <span className={styles.rotate}>^</span>
            <ul>
              <li>Manage 1</li>
              <li>Manage 2</li>
              <li>Manage 3</li>
            </ul>
          </li>
        </ul>
        <div className={styles.separator}></div>
        <ul>
          <li className={styles.header_icon}>
            <HelpIcon />
          </li>
          <li className={styles.header_icon}>
            <PersonIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}
