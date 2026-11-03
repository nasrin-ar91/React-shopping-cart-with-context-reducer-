import { useEffect, useReducer, type ReactNode } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { CartContex } from "./CartContex";

type CartProviderProps = {
	children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
	const [cart, dispatch] = useReducer(cartReducer, []);

	// useEffect(() => {
	// 	console.log("Current Cart:", cart);
	// }, [cart]);

	return (
		<CartContex.Provider
			value={{
				cart,
				dispatchCartAction: dispatch,
			}}
		>
			{children}
		</CartContex.Provider>
	);
}
