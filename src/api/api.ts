import type { ProductData } from "../types/types";

export async function getProduct(): Promise<ProductData[]> {
	try {
		const res = await fetch("http://localhost:3000/productList");

		if (!res.ok) {
			throw new Error(`HTTP Error: ${res.status}`);
		}

		const data: ProductData[] = await res.json();
		return data;
	} catch (error) {
		console.error("Fetch Error:", error);
		throw error;
	}
}
