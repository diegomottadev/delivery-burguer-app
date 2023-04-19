import React from 'react';
import Auxiliar from "../../../hoc/Auxiliar/Auxiliar";
import Button from '../../UI/Button/Button';
const orderSummary = (props) =>{
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> :{props.ingredients[igKey]}</li>
            );
    })

    return(
        <Auxiliar>
            <h3>Your order</h3>
            <p>A delicius burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p> Continue with checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Auxiliar>
    )
};

export default orderSummary;