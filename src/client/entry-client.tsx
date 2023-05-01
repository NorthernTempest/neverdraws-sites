import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";

const container = document.getElementById("app");

const FullApp = () => (
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);

if (import.meta.hot || !container?.innerText) {
	const root = createRoot(container!);
	root.render(<FullApp />);
} else {
	hydrateRoot(container!, <FullApp />);
}
