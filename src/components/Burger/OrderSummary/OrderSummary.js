import React from 'react';
import Auxiliar from "../../../hoc/Auxiliar/Auxiliar";
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

const orderSummary = (props) =>{
    // Only list what is actually on the burger, with its subtotal
    const ingredientLines = Object.keys(props.ingredients)
    .filter(igKey => props.ingredients[igKey] > 0)
    .map(igKey => {
        const count = props.ingredients[igKey];
        return (
            <li key={igKey}>
                <span className={classes.Name}>{igKey} <span className={classes.Count}>× {count}</span></span>
                <span>${(count * props.ingredientPrices[igKey]).toFixed(2)}</span>
            </li>
            );
    })

    return(
        <Auxiliar>
            <h3 className={classes.Title}>Your order</h3>
            <p className={classes.Subtitle}>Review your burger before checkout.</p>
            <ul className={classes.Lines}>
                <li>
                    <span className={classes.Name}>Burger base</span>
                    <span>${props.basePrice.toFixed(2)}</span>
                </li>
                {ingredientLines}
            </ul>
            <div className={classes.Total}>
                <span>Total</span>
                <strong>${props.price.toFixed(2)}</strong>
            </div>
            <div className={classes.Actions}>
                <Button btnType="Danger" clicked={props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>
                    CONTINUE
                </Button>
            </div>
        </Auxiliar>
    )
};

export default orderSummary;
