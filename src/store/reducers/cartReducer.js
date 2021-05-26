import * as actionTypes from '../actions/actionTypes';

const initialState={
    cart:[],
};


const addItem=(state,action)=>{
    console.log(action);
    console.log(state);
    return {...state,cart:[...state.cart,action.payload]};
}
const removeItem=(state,action)=>{
    console.log(action);
    console.log(state);
    return state;       
}
const deleteItem=(state,action)=>{
    console.log(action);
    console.log(state);
    return state;
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_ITEM: return addItem(state,action);
        case actionTypes.REMOVE_ITEM: return removeItem(state,action);
        case actionTypes.DELETE_ITEM: return deleteItem(state,action);
        default: return state;
    }
}

export default reducer;