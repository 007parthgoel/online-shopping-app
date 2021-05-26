import * as actionTypes from './actionTypes';

export const addItemToCart=(data)=>{
    console.log(data);
    return {
        type: actionTypes.ADD_ITEM,
        payload: data,
    }
}