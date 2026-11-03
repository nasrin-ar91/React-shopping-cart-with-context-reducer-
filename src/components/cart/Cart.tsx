import { useContext, useMemo } from "react";
import { CartContex } from "../../contex/CartContex";
import { CartCard } from "./cartCard";

export default function Cart({
	setIsCartOpen,
}: {
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { cart } = useContext(CartContex);

	const totalPrice = useMemo(() => {
		return cart.reduce(
			(acc, current) => acc + current.product.price * current.count,
			0,
		);
	}, [cart]);

	return (
		<div
			onClick={() => setIsCartOpen(false)}
			className="fixed inset-0 z-50 bg-black/40"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="absolute right-0 top-0 flex h-screen w-full sm:w-5/6 md:w-[72%] lg:w-[42%]  flex-col justify-between bg-bg-cart"
			>
				<div className="shrink-0 relative flex h-fit w-full items-center justify-center py-4 bg-bg-light">
					<img
						src="/svgs/close-tab.svg"
						alt="close cart"
						className="absolute left-0 top-0 w-10 cursor-pointer text-text bg-bg-cart p-2"
						onClick={() => setIsCartOpen(false)}
					/>
					<h2 className="text-xl font-medium text-text">{`Cart (${cart.length})`}</h2>
				</div>
				<div className="flex flex-col flex-1 p-5 gap-5 overflow-y-auto min-h-0 scrollbar-none">
					{cart.map((item) => (
						<CartCard key={item.product.id} {...item} />
					))}
				</div>
				<div className="shrink-0 flex items-center justify-between p-5 bg-bg-light">
					<div className="text-text font-medium text-lg">
						{`Total: ${totalPrice.toLocaleString("en-US", {
							style: "currency",
							currency: "EUR",
							maximumFractionDigits: 0,
						})}`}
					</div>
					<button className="bg-text text-bg-light font-medium px-4 py-2">
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}
