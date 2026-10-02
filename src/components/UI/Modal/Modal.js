import React from 'react';
import classes from './Modal.css'
import Auxiliar  from '../../../hoc/Auxiliar/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) =>(
    <Auxiliar>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>

        <div
            className={[classes.Modal, props.show ? classes.Open : null].join(' ')}
            role="dialog"
            aria-modal="true"
            aria-hidden={!props.show}>
            <button className={classes.CloseButton} onClick={props.modalClosed} aria-label="Close">×</button>
            {props.children}
        </div>
    </Auxiliar>
)

export default modal;
