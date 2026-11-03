import type { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export type AppLayoutProp = {
	children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProp) {
	return (
		<>
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</>
	);
}
