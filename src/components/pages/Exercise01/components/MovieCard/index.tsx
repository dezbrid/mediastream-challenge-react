import React from "react";
import "./assets/styles.css";

import { MovieCardInterfaces } from "../../interface";

export default function MovieCard(props: MovieCardInterfaces) {
  return (
    <li className={"movies__card" }>
      <ul>
        <li>ID:{props.id}</li>
        <li>Name: {props.name}</li>
        <li>Price: ${props.price}</li>
      </ul>
      {props.quantity? (
        <div className="movies__card-quantity">
          <button onClick={() => console.log("Decrement quantity")}>
            -
          </button>
          <span>{props.quantity}</span>
          <button onClick={() => console.log("Increment quantity")}>
            +
          </button>
        </div>
      ):(
        <button onClick={() => console.log("Add to cart")} className ="movies__card-add-cart">Add to cart</button>
      )}
    </li>
  );
}
