import { useContext } from "react";
import type { ProductData } from "../../types/types";
import { CartActionType } from "../../reducers/cartReducer";
import { CartContex } from "../../contex/CartContex";

export default function ProductCard(product: ProductData) {
	const { dispatchCartAction } = useContext(CartContex);

	return (
		<div className="w-full h-fit flex flex-col gap-3 items-center justify-center border border-text-light bg-bg-cart">
			<img src={product.img} alt="product-photo" className="w-1/2" />

			<strong className="text-[#f4a460]">{product.commentRate}</strong>
			<h3 className="text-text">{product.title}</h3>
			<h4 className="font-bold text-text">
				{product.price.toLocaleString("en-US", {
					style: "currency",
					currency: "EUR",
					maximumFractionDigits: 0,
				})}
			</h4>
			<button
				onClick={() => {
					dispatchCartAction({
						type: CartActionType.ADD,
						payload: product,
					});
				}}
				className="w-full bg-bg-light py-3 text-center text-text cursor-pointer"
			>
				Add to cart
			</button>
		</div>
	);
}
