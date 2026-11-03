import { getProduct } from "../../api/api";
import { useEffect, useState } from "react";
import ProductCard from "../product/ProductCard";
import type { ProductData } from "../../types/types";

export default function Home() {
	const [product, setProduct] = useState<ProductData[]>([]);

	useEffect(() => {
		getProduct().then((data) => setProduct(data));
	}, []);

	return (
		<div className="bg-body w-full min-h-screen px-3 py-8 lg:px-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{product.map((item) => (
				<ProductCard key={item.id} {...item} />
			))}
		</div>
	);
}
