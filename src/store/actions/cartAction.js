import * as actionTypes from './actionTypes';

export const addItemToCart=(data)=>{
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        payload: data,
    }
}

export const increaseQuantity=(id)=>{
    return {
        type:actionTypes.INCREASE_QUANTITY,
        payload:id,
    }
}

export const decreaseQuantity=(id)=>{
    return {
        type:actionTypes.DECREASE_QUANTITY,
        payload:id,
    }
}

export const deleteItemFromCart=(id)=>{
    return {
        type:actionTypes.DELETE_ITEM_FROM_CART,
        payload:id,
    }
}