import "preact/debug";

import { html } from "htm/preact";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Gallery } from "./pages/Gallery.js";
import { Home } from "./pages/Home.js";
import { Prices } from "./pages/Prices.js";
import { Terms } from "./pages/Terms.js";

function App() {
	const [page, setPage] = useState("home");

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.substring(1);
			setPage(hash || "home");
		};

		// Initial check
		handleHashChange();

		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	// Update document title based on current page
	useEffect(() => {
		const defaultTitle = "Meji's Website!!";

		switch (page) {
			case "terms":
				document.title = "Terms of Service - " + defaultTitle;
				break;
			case "prices":
				document.title = "Commission Prices - " + defaultTitle;
				break;
			case "gallery":
				document.title = "Art Gallery - " + defaultTitle;
				break;
			case "home":
			default:
				document.title = defaultTitle;
				break;
		}
	}, [page]);

	let content;
	switch (page) {
		case "terms":
			content = html` <${Terms} /> `;
			break;
		case "prices":
			content = html` <${Prices} /> `;
			break;
		case "gallery":
			content = html` <${Gallery} /> `;
			break;
		case "home":
		default:
			content = html` <${Home} /> `;
			break;
	}

	return html`
		<div class="wrapper">
			<${Header} page="${page}" />
			<main class="flow" style="--flow-space: var(--space-2xl)">
				<div key="${page}" class="animate-slide-up">${content}</div>
				<${Footer} />
			</main>
		</div>
	`;
}

render(html` <${App} /> `, document.getElementById("app"));
