import { html } from "htm/preact";

import MarkdownContent from "../components/MarkdownContent.js";
import { galleryImages } from "../content/gallery-list.js";

export function Gallery() {
	return html`
		<section
			class="[ hero ] [ d-flex flex-column items-center relative ] [ z-20 ]"
		>
			<div class="[ hero__content ] [ flow ]">
				<${MarkdownContent} src="content/gallery.md" />

				<div class="[ image-grid-lanes ] [ stagger-children ]">
					${galleryImages.map(
						(image) => html`
							<a href="${image.src}" target="_blank" class="animate-pop-in">
								<img
									src="${image.src}"
									alt="${image.alt}"
									loading="lazy"
									class="[ gallery-item ] [ w-full h-full object-contain ]"
								/>
							</a>
						`,
					)}
				</div>
			</div>
		</section>
	`;
}
