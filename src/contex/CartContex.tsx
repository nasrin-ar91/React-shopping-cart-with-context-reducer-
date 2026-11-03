import { createContext, type ActionDispatch } from "react";
import { type CartAction } from "../reducers/cartReducer";
import type { Cart } from "../types/types";

export type CartDispatch = ActionDispatch<[action: CartAction]>;

export const CartContex = createContext<{
	cart: Cart[];
	dispatchCartAction: CartDispatch;
}>({
	cart: [],
	dispatchCartAction: () => {},
});
