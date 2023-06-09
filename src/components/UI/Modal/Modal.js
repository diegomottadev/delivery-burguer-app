import React from 'react';
import classes from './Modal.css'
import Auxiliar  from '../../../hoc/Auxiliar/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) =>(
    <Auxiliar>
        <Backdrop show={props.show} clicked={props.modalClose}></Backdrop>
   
        <div  className={classes.Modal} style={{ transform: props.show? 'translateY(0)': 'translateY(-100vh)', opacity: props.show ? '1':'0' }}>
            {props.children}
        </div>
    </Auxiliar>
)

export default modal;