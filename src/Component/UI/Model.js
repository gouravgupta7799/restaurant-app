import React from 'react'
import ReactDOM from "react-dom";
import classes from './Model.module.css'

const Backdrop = (props) => {
  return (
    <div className={classes.blackdrop} />
  );
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function Model(props) {
  
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  )
}
