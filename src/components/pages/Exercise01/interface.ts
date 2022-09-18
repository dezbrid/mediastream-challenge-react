export interface Movie {
  id: number;
  name: string;
  price: number;
}
export interface DiscountRules {
  m: number[];
  discount: number;
}
export interface Cart extends Movie {
  quantity: number;
}

type PartialProperty<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface MovieCardInterfaces extends PartialProperty<Cart, "quantity"> {
  disableAddtoCart?: boolean;
}
