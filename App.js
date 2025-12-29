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

	// Update meta tags based on current page
	useEffect(() => {
		// Remove existing og tags
		const existingOgTags = document.querySelectorAll(
			'meta[property^="og:"], meta[name^="twitter:"]',
		);
		existingOgTags.forEach((tag) => tag.remove());

		// Set default meta tags
		const defaultTitle = "Meji's Website!!";
		const defaultDescription = "Welcome to Meji's Website";
		const defaultImage = window.location.origin + "/assets/eb4883cd.png";
		const defaultUrl = window.location.href;

		// Page-specific meta tags
		let title = defaultTitle;
		let description = defaultDescription;
		let image = defaultImage;

		switch (page) {
			case "terms":
				title = "Terms of Service - Meji's Website!!";
				description = "Terms of Service for Meji's Commissions";
				break;
			case "prices":
				title = "Commission Prices - Meji's Website!!";
				description = "Pricing information for Meji's Commissions";
				break;
			case "gallery":
				title = "Art Gallery - Meji's Website!!";
				description = "A sample of artwork from Meji's portfolio";
				break;
			case "home":
			default:
				title = "Meji's Website!!";
				description = "Welcome to Meji's Website";
				break;
		}

		// Add/update Open Graph meta tags
		const ogTags = [
			{ property: "og:type", content: "website" },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:image", content: image },
			{ property: "og:image:alt", content: title },
			{ property: "og:url", content: defaultUrl },
			{ property: "og:site_name", content: "Meji's Website" },
		];

		ogTags.forEach((tag) => {
			const meta = document.createElement("meta");
			meta.setAttribute(
				tag.property.includes("og:") ? "property" : "name",
				tag.property,
			);
			meta.content = tag.content;
			document.head.appendChild(meta);
		});

		// Add Twitter card meta tags
		const twitterTags = [
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: image },
			{ name: "twitter:image:alt", content: title },
		];

		twitterTags.forEach((tag) => {
			const meta = document.createElement("meta");
			meta.name = tag.name;
			meta.content = tag.content;
			document.head.appendChild(meta);
		});
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
