import { useContext } from "react";
import { CartActionType } from "../../reducers/cartReducer";
import type { Cart } from "../../types/types";
import { CartContex } from "../../contex/CartContex";

export function CartCard(item: Cart) {
	const { dispatchCartAction } = useContext(CartContex);

	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center gap-8">
				<img src={item.product.img} alt="product-photo" className="w-[40%]" />
				<div className="flex flex-col items-start items-center gap-3">
					<h3 className="text-text">{item.product.title}</h3>
					<h4 className="font-bold text-text">
						{item.product.price.toLocaleString("en-US", {
							style: "currency",
							currency: "EUR",
							maximumFractionDigits: 0,
						})}
					</h4>
				</div>
			</div>
			<div className="flex items-center gap-7">
				<div className="bg-bg-light flex flex-col justify-center gap-1 py-1 px-5 text-text self-center h-fit">
					<button
						onClick={() => {
							dispatchCartAction({
								type: CartActionType.DECRESE,
								payload: item.product,
							});
						}}
						className="text-xl bg-bg-cart px-1 cursor-pointer"
					>
						-
					</button>
					<p className="font-medium text-center w-8 py-1">{item.count}</p>
					<button
						onClick={() => {
							dispatchCartAction({
								type: CartActionType.ADD,
								payload: item.product,
							});
						}}
						className="text-xl bg-bg-cart px-1 cursor-pointer"
					>
						+
					</button>
				</div>
				<img
					src="/svgs/close-tab.svg"
					alt="Remove"
					className="w-9 cursor-pointer bg-bg-cart p-2"
					onClick={() => {
						dispatchCartAction({
							type: CartActionType.Remove,
							payload: item.product,
						});
					}}
				/>
			</div>
		</div>
	);
}
