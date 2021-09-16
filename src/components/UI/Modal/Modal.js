import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

export const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};

export const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

export const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
