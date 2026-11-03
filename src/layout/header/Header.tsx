import { useContext, useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import { CartContex } from "../../contex/CartContex";

export default function Header() {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { cart } = useContext(CartContex);

	useEffect(() => {
		document.body.style.overflow = isCartOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isCartOpen]);

	return (
		<div className="w-full h-fit px-3 py-4 lg:py-4 lg:px-10 sticky top-0 flex items-center justify-between bg-bg-light z-50 relative">
			<h1 className="text-text">React Shopping Cart</h1>
			<div className="flex items-center ">
				<img
					onClick={() => setIsCartOpen(true)}
					src="/svgs/shopping-bag.svg"
					alt=""
					className="w-6 cursor-pointer"
				/>
				{cart.length !== 0 ? (
					<div className="flex items-center justify-center bg-red-800 rounded-full size-6 text-sm font-medium p-1 text-white">
						{cart.length}
					</div>
				) : null}
			</div>
			{isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
		</div>
	);
}
