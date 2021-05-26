import * as actionTypes from "../actions/actionTypes";

const initialState = {
    // count:0,
  list: [],
};

const addItemToCart = (state, action) => {
  const item = action.payload;
  let newArray=[...state.list,action.payload];
  if (item.product_quantity > 0) {
    return { ...state, list: newArray };
  }
  else return state;
};

const increaseQuantity=(state,action)=>{
    const newArray=state.list.map(item=>{
        if(item.product_id===action.payload){
            return {...item,product_quantity:Math.floor(item.product_quantity+1)}
        }else{
            return item;
        }
    });
    return {...state,list:newArray};
}
const decreaseQuantity = (state, action) => {
    const newArray=state.list.map(item=>{
        if(item.product_id===action.payload){
            return {...item,product_quantity:item.product_quantity-1}
        }else{
            return item;
        }
    });
    return {...state,list:newArray};
};
const deleteItemFromCart = (state, action) => {
    const newArray=state.list.filter(item=>item.product_id!==action.payload)
    return {...state,list:newArray};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: return addItemToCart(state, action);
    case actionTypes.INCREASE_QUANTITY: return increaseQuantity(state, action);
    case actionTypes.DECREASE_QUANTITY: return decreaseQuantity(state, action);
    case actionTypes.DELETE_ITEM_FROM_CART: return deleteItemFromCart(state, action);
    default:
      return state;
  }
};

export default reducer;
