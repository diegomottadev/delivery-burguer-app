import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import Button from '../../UI/Button/Button';
import classes from './OrderConfirmation.css';

const orderConfirmation = (props) => (
    <Auxiliar>
        <h3 className={classes.Title}>Order confirmed!</h3>
        <p>Your burger is on its way. Enjoy it!</p>
        <p><strong>Total paid: ${props.price.toFixed(2)}</strong></p>
        <Button btnType="Success" clicked={props.newOrder}>
            BUILD ANOTHER BURGER
        </Button>
    </Auxiliar>
);

export default orderConfirmation;
