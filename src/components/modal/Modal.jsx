import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css';

export default function Modal({children, open, onClose}){
    const dialog= useRef();

    useEffect(() => {
        if(open){
            dialog.current.showModal();
        }
        return () => dialog.current.close();
    }, [open]);

    return createPortal(<dialog ref={dialog} className={styles.modal}>
        {children}
            <button onClick={onClose}>close</button>
    </dialog>, document.getElementById('modal'));
}