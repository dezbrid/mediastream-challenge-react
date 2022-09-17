/**
 * Exercise 01: The Retro Movie Store
 * Implement a shopping cart with the next features for the Movie Store that is selling retro dvds:
 * 1. Add a movie to the cart
 * 2. Increment or decrement the quantity of movie copies. If quantity is equal to 0, the movie must be removed from the cart
 * 3. Calculate and show the total cost of your cart. Ex: Total: $150
 * 4. Apply discount rules. You have an array of offers with discounts depending of the combination of movie you have in your cart.
 * You have to apply all discounts in the rules array (discountRules).
 * Ex: If m: [1, 2, 3], it means the discount will be applied to the total when the cart has all that products in only.
 *
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */
import React from "react";
import "./assets/styles.css";

import { useAppSelector } from "../../../app/hooks";

import MovieCard from "./components/MovieCard";
import { selectList } from "./cartSlice";
import { MOVIES } from "./mocks";

export default function Exercise01() {
  const listCart = useAppSelector(selectList);

  const handleDisableAddtoCart = (id: number): boolean => {
    return listCart.some((item) => item.id === id);
  };
  const getTotal = () =>
    listCart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      0
    ); // TODO: Implement this

  return (
    <section className="exercise01">
      <div className="movies__container movies__container-space">
        <ul>
          {MOVIES.map((movieItem) => (
            <MovieCard
              {...movieItem}
              key={movieItem.id}
              disableAddtoCart={handleDisableAddtoCart(movieItem.id)}
            />
          ))}
        </ul>
      </div>
      <div className="movies__container">
        <ul className="movies__container-cart">
          {listCart.map((cartItem) => (
            <MovieCard {...cartItem} key={cartItem.id} />
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${getTotal()}</p>
        </div>
      </div>
    </section>
  );
}
