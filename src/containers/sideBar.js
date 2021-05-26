import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { connect } from "react-redux";

import Backdrop from "../components/UI/backdrop";
import * as actions from "../store/actions/index";

const SideBar = ({
  show,
  sidebarClose,
  list,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteItemFromCart,
}) => {
  // const [itemList,setItemList]=useState(list);
  // const [itemList,setItemList]=useState(()=>{
  //     return list;
  // });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = list.reduce((acc, val) => {
      return acc + (val.product_quantity * val.product_price);
    }, 0);
    setTotalPrice(price);
  }, [list]);

  const increaseQuantity = (id) => {
    onIncreaseQuantity(id);
  };

  const decreaseQuantity = (id) => {
    onDecreaseQuantity(id);
  };

  const deleteItem = (id) => {
    // let data= list.filter(item=>item.product_id!==id);
    // setItemList(data);
    onDeleteItemFromCart(id);
  };

  return (
    <>
      <Backdrop show={show} clicked={sidebarClose} />
      <div className={`sidebar ${show && "open"}`}>
        <div className="sidebar-header">
          <p>my cart</p>
          <AiOutlineClose className="close-icon" onClick={sidebarClose} />
        </div>
        <div className="sidebar-container">
          <h4>product</h4>
          <h4>price</h4>
          <h4>quantity</h4>
          <h4>total</h4>
          <div></div>
          {list.map((product) => {
            const {
              product_id,
              product_name,
              product_price,
              product_quantity,
            } = product;
            return (
              <>
                <p>{product_name}</p>
                <p>{product_price}</p>
                <div className="sidebar-quant-control">
                  <button
                    className="icon-minus"
                    onClick={() => onDecreaseQuantity(product_id)}
                    disabled={product_quantity <= 0}
                  >
                    <FaMinus />
                  </button>
                  <p>{product_quantity}</p>
                  <button
                    className="icon-plus"
                    onClick={() => onIncreaseQuantity(product_id)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <p>Rs.{product_price * product_quantity}</p>
                <IoIosRemoveCircle
                  className="icon-remove"
                  onClick={() => onDeleteItemFromCart(product_id)}
                />
              </>
            );
          })}
        </div>
        <div className="sidebar-footer">
          <h4>Rs. {totalPrice}/-</h4>
          <button className="footer-btn-back" onClick={sidebarClose}>
            back
          </button>
          <button
            className="footer-btn-proceed"
            onClick={() =>
              alert(
                `Thanks for shopping, Your Total bill is Rs. ${totalPrice}/-`
              )
            }
          >
            proceed
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.cart.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseQuantity: (id) => dispatch(actions.increaseQuantity(id)),
    onDecreaseQuantity: (id) => dispatch(actions.decreaseQuantity(id)),
    onDeleteItemFromCart: (id) => dispatch(actions.deleteItemFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
