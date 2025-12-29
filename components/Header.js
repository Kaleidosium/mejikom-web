import { html } from "htm/preact";

export function Header({ page }) {
	return html`
		<header class="[ header ]">
			<nav class="[ header__nav ] [ d-flex flex-wrap items-end ]">
				<a
					href="#home"
					class="[ nav__item ] [ flex-1 ] [ text-center bg-primary ff-heading fs-base hover-lift ]"
					aria-current="${page === "home" ? "page" : false}"
					>Home</a
				>
				<a
					href="#terms"
					class="[ nav__item ] [ flex-1 ] [ text-center bg-primary ff-heading fs-base hover-lift ]"
					aria-current="${page === "terms" ? "page" : false}"
					>Terms of Service</a
				>
				<a
					href="#prices"
					class="[ nav__item ] [ flex-1 ] [ text-center bg-primary ff-heading fs-base hover-lift ]"
					aria-current="${page === "prices" ? "page" : false}"
					>Prices</a
				>
				<a
					href="#gallery"
					class="[ nav__item ] [ flex-1 ] [ text-center bg-primary ff-heading fs-base hover-lift ]"
					aria-current="${page === "gallery" ? "page" : false}"
					>Gallery</a
				>
			</nav>
		</header>
	`;
}
