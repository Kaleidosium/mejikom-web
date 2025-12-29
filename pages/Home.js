import { html } from "htm/preact";

import MarkdownContent from "../components/MarkdownContent.js";

export function Home() {
	return html`
		<section
			class="[ hero ] [ d-flex flex-column items-center relative ] [ z-20 ]"
		>
			<div class="[ hero__content ] [ flow ]">
				<${MarkdownContent} src="content/home.md" />
			</div>
		</section>
	`;
}
