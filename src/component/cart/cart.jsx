import React from "react";

import {allapi,removeFromCart, addToCart } from "../../Redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

function Cart() {
  // const { count, apistate } = useSelector((store) => store.data);
  const  addcart  = useSelector((store) => store.data.addcart);
 
  
  const dispatch = useDispatch();


  const handleIncrement = (id) => {
    dispatch(addToCart({ id }));  // Increment item count
  };

  const handleDecrement = (id) => {
    dispatch(removeFromCart(id));  // Decrement item count
  };

  const totalPrice = addcart.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);


  return (
    <div className=" container mx-auto px-5 ">
      <h1 className="font-Opensans font-semibold text-2xl">
        Start where you stoped
      </h1>

      <div className="flex">
        <ul className="flex flex-wrap my-10 gap-5">
          {addcart&&addcart?.map((item, id) => (
            <li key={id} className="flex C_Container gap-5">
              <div>
                <div className="CImage_conatiner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover overflow-hidden"
                  />
                </div>
              </div>
              <div className="flex flex-col ms-4">
                <h3 className=" font-Opensans font-semibold text-gray-700">
                  {item.title}
                </h3>

                <div>
                  <div onClick={() => handleDecrement(item.id)}
                     disabled={item.count <= 1}>-</div>
                  <div>
                    {item.count}
                  </div>
                  <div onClick={() => handleIncrement(item.id)}>+</div>
                </div>

                <p>{item.price} INR</p>
              </div>
            </li>

            
          ))}
        </ul>

      </div>
        <div className="my-11 ">
          <h2 className="font-Opensans text-2xl">Total</h2>
          <h3 className="font-Opensans font-semibold text-2xl">
            {totalPrice} INR
          </h3>
        </div>
    </div>
  );
}

export default Cart;
