import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Movie } from "./interface";
import { RootState } from "../../../app/store";

export interface CartState {
  listCart: Cart[];
}

const initialState: CartState = {
  listCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Movie>) => {
      state.listCart = [...state.listCart, { ...action.payload, quantity: 1 }];
    },
    incrementItemByID: (state, action: PayloadAction<number>) => {
      state.listCart = editCart(state.listCart, action.payload, true);
    },
    decrementItemByID: (state, action: PayloadAction<number>) => {
      state.listCart = editCart(state.listCart, action.payload, false);
    },
  },
});

const editCart = (list: Cart[], id: number, plus: boolean): Cart[] => {
  const index = list.findIndex((item) => item.id === id);
  const currentQuantity = list[index].quantity;
  if (currentQuantity === 1 && !plus) {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  }
  return [
    ...list.slice(0, index),
    {
      ...list[index],
      quantity: plus ? currentQuantity + 1 : currentQuantity - 1,
    },
    ...list.slice(index + 1),
  ];
};
export const selectList = (state: RootState) => state.cart.listCart;
export const { addCart, incrementItemByID, decrementItemByID } =
  cartSlice.actions;

export default cartSlice.reducer;
