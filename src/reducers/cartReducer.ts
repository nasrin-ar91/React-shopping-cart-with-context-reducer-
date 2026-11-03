import type { Cart, ProductData } from "../types/types";

export enum CartActionType {
	ADD,
	Remove,
	DECRESE,
	CLEAR,
}
export type CartAction =
	| {
			type: CartActionType.CLEAR;
			payload?: undefined;
	  }
	| {
			type: CartActionType.ADD | CartActionType.Remove | CartActionType.DECRESE;
			payload: ProductData;
	  };

export function cartReducer(state: Cart[], action: CartAction) {
	const { type, payload } = action;
	if (type !== CartActionType.CLEAR && payload === undefined) {
		throw new Error(`cart reducer need payload on action ${type}`);
	}
	switch (type) {
		case CartActionType.CLEAR:
			return [];

		case CartActionType.ADD: {
			const index = state.findIndex((item) => item.product.id === payload.id);
			if (index === -1) {
				return [...state, { product: payload, count: 1 }];
			} else {
				return state.map((item) =>
					item.product.id === payload.id
						? { ...item, count: item.count + 1 }
						: item,
				);
			}
		}

		case CartActionType.DECRESE: {
			const findItem = state.find((item) => item.product.id === payload.id);
			if (findItem === undefined) {
				throw new Error("Can not find product!");
			}
			if (findItem.count > 1) {
				return state.map((item) =>
					item.product.id === payload.id
						? { ...item, count: item.count - 1 }
						: item,
				);
			}
			return state.filter((item) => item.product.id !== payload.id);
		}

		case CartActionType.Remove:
			return state.filter((item) => item.product.id !== payload.id);

		default:
			throw new Error(`you call a wrong action=${action} on cartReducer`);
	}
}
