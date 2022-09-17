import React from "react";
import "./assets/styles.css";
import { useAppDispatch } from "../../../../../app/hooks";

import { MovieCardInterfaces } from "../../interface";
import { addCart,incrementItemByID,decrementItemByID } from "../../cartSlice";

export default function MovieCard(props: MovieCardInterfaces) {
  const dispatch = useAppDispatch();

  return (
    <li className={"movies__card"}>
      <ul>
        <li>ID:{props.id}</li>
        <li>Name: {props.name}</li>
        <li>Price: ${props.price}</li>
      </ul>
      {props.quantity ? (
        <div className="movies__card-quantity">
          <button onClick={() => dispatch(decrementItemByID(props.id))}>-</button>
          <span>{props.quantity}</span>
          <button onClick={() => dispatch(incrementItemByID(props.id))}>+</button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addCart(props))}
          className="movies__card-add-cart"
          disabled={props.disableAddtoCart}
        >
          Add to cart
        </button>
      )}
    </li>
  );
}
