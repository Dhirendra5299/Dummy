import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";
import TabNav from "../tabNav/TabNav";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MAX_ENTRIES = 3;

export default function Table({ data, edit, clone, onDelete }) {
  const size = data.length;
  const [pageCount, setPageCount] = useState(1);
  const [decrementIsDisable, setDecrementIsDisable] = useState(false);
  const [incrementIsDisable, setIncrementIsDisable] = useState(false);
  const [deletedRow, setDeletedRow] = useState(null);

  const ul = pageCount * MAX_ENTRIES - 1;
  const ll = (pageCount - 1) * MAX_ENTRIES;

  useEffect(() => {
    if (ul + 1 >= size) {
      setIncrementIsDisable(true);
    } else {
      setIncrementIsDisable(false);
    }

    if (ll === 0) {
      setDecrementIsDisable(true);
    } else {
      setDecrementIsDisable(false);
    }
  }, [ll, ul, size]);

  const objects = data.slice(ll, ul + 1);

  const onIncrement = () => {
    setPageCount(pageCount + 1);
  };

  const onDecrement = () => {
    setPageCount(pageCount - 1);
  };

  const onDeleteRow = (objectToDelete) => {
    setDeletedRow(objectToDelete);
    setTimeout(() => {
      onDelete(objectToDelete);
      setDeletedRow(null);
    }, 400);
  };

  return (
    <>
      {size !== 0 && (
        <>
          {" "}
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>
                    <div className={styles.thcontainer}>
                      <div className={styles.theading}>{key}</div>
                      <div className={styles.thArrow}>
                        <ArrowDropUpIcon className={styles.arrow1} />
                        <ArrowDropDownIcon className={styles.arrow2} />
                        <div className={styles.separator}></div>
                      </div>
                    </div>
                  </th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {objects.map((object, index) => (
                <tr
                  key={index}
                  className={deletedRow === object ? styles.slideRight : ""}
                >
                  {Object.values(object).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                  <td>
                    <FileCopyIcon
                      className={`${styles.icon} ${styles.icon_style}`}
                      onClick={(event) => {
                        event.item = object;
                        clone(event);
                      }}
                    />
                    <EditIcon
                      className={`${styles.icon} ${styles.icon_style}`}
                      onClick={() => edit(index + ll)}
                    />
                    <MoreVertIcon
                      className={styles.icon_style}
                      onClick={() => onDeleteRow(object)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TabNav
            increment={onIncrement}
            decrement={onDecrement}
            page={pageCount}
            decrementDisable={decrementIsDisable}
            incrementDisable={incrementIsDisable}
          />
        </>
      )}

      {size === 0 && <div className={styles.noDataDiv}>No Data to show...</div>}
    </>
  );
}
