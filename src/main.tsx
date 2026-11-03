import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppLayout from "./layout/AppLayout.tsx";
import { CartProvider } from "./contex/CartProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartProvider>
			<AppLayout>
				<App />
			</AppLayout>
		</CartProvider>
	</StrictMode>,
);
