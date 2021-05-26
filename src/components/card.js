import React, { useState } from "react";
import { connect } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

import * as actions from "../store/actions";

const Card = ({ card, onAddItemsToCart }) => {
  const [itemCount, setItemCount] = useState(0);

  const addItemHandler=(card)=>{
    onAddItemsToCart({...card,product_quantity:Number(itemCount)});
    setItemCount(0);
  }
  return (
    <article className="card-item">
      <img src={card.product_image} alt={card.product_name} />
      <div className="card-info">
        <h4 className="name">{card.product_name}</h4>
        <p className="desc">{card.product_description}</p>
        <p className="price">Rs.{card.product_price}/-</p>
        <div className="btn-set">
          <input
            type="number"
            value={itemCount}
            onChange={(e) => {
              setItemCount(e.target.value);
            }}
          />
          <button onClick={() => addItemHandler(card)}>
          {/* <button onClick={() => onAddItemsToCart(card)}> */}
            <AiOutlineShoppingCart
              className="icon"            
            />
            add
          </button>
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItemsToCart: (card) => dispatch(actions.addItemToCart(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
