import React,{ Component } from "react";
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal  from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.7
}
class BurgerBuilder extends Component{
    // constructor (props){
    //     super(props);
    //     this.state = {}
    // }
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable:false,
        purchasing:  false
    }

    updatePurchaseState(ingredients){
         const sum =  Object.keys(ingredients)
         .map(igKey =>{
             return ingredients[igKey]
         }).reduce((sum,el)=>{
             return sum+ el;
         }, 0)
         this.setState({purchasable: sum > 0})
    }

    purchaseHandler =()=>{
        this.setState({purchasing:true});
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients ={
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAdditon = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditon;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        
        if(oldCount <= 0){
            return;
        }

        const updateCount = oldCount -1 ;
        const updateIngredients ={
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }
    
    purchaseCancelHandler= ()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHander=()=>{
        alert('You continue')
    }

    render (){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
                <Auxiliar>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary ingredients={this.state.ingredients}
                         purchaseCancelled={this.purchaseCancelHandler}
                         purchaseContinued={this.purchaseContinueHander}
                         />
                    </Modal>
                    <Burger  ingredients={this.state.ingredients}></Burger>
                     <BuildControls
                     ingredientRemoved={this.removeIngredientHandler} 
                     ingredientAdded={this.addIngredientHandler}
                     disabled= {disabledInfo}
                     price={this.state.totalPrice}
                     purchasable={this.state.purchasable}
                     ordered={this.purchaseHandler}
                     />
                  
                </Auxiliar>
        );
    }
}

export default BurgerBuilder;