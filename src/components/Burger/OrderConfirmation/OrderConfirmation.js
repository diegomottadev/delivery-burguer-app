import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './OrderConfirmation.css';

const orderConfirmation = (props) => (
    <div className={classes.OrderConfirmation}>
        <div className={classes.Check} aria-hidden="true">✓</div>
        <h3 className={classes.Title}>Order confirmed!</h3>
        <p className={classes.Message}>Your burger is on its way. Enjoy it!</p>
        <p className={classes.Paid}>Total paid: <strong>${props.price.toFixed(2)}</strong></p>
        <Button btnType="Success" clicked={props.newOrder}>
            BUILD ANOTHER BURGER
        </Button>
    </div>
);

export default orderConfirmation;
