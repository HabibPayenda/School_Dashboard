import React from 'react'
import styles from './modal.module.css';

function Modal({showModal, children, setShowModal}) {

    if (!showModal) return null;
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Modal