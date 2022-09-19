import cartReducer, {
  addCart,
  incrementItemByID,
  decrementItemByID,
  CartState,
} from "./cartSlice";
import { MOVIES } from "./mocks";

describe("Cart reducer", () => {
  const initialState: CartState = {
    listCart: [],
  };
  const itemInCart: CartState = {
    listCart: [{ ...MOVIES[0], quantity: 2 }],
  };

  const oneItemInCart: CartState = {
    listCart: [{ ...MOVIES[0], quantity: 1 }],
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      listCart: [],
    });
  });

  it("should handle addCart", () => {
    const actual = cartReducer(initialState, addCart(MOVIES[0]));
    expect(actual.listCart).toHaveLength(1);
  });
  it("should new cart", () => {
    const actual = cartReducer(initialState, addCart(MOVIES[0]));
    expect(actual.listCart[0]).toEqual({ ...MOVIES[0], quantity: 1 });
  });

  it("should handle incrementItemByID", () => {
    const actual = cartReducer(itemInCart, incrementItemByID(1));
    expect(actual.listCart[0]).toEqual({ ...MOVIES[0], quantity: 3 });
  });

  it("should handle decrementItemByID", () => {
    const actual = cartReducer(itemInCart, decrementItemByID(1));
    expect(actual.listCart[0]).toEqual({ ...MOVIES[0], quantity: 1 });
  });
  it("should handle remove item", () => {
    const actual = cartReducer(oneItemInCart, decrementItemByID(1));
    expect(actual.listCart).toEqual([]);
  });
});
