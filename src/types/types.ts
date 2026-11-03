export interface ProductData {
	id: number;
	title: string;
	img: string;
	commentRate: string;
	price: number;
}

export type Cart = {
	product: ProductData;
	count: number;
};
