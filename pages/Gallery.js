import { html } from "htm/preact";

import MarkdownContent from "../components/MarkdownContent.js";
import { galleryImages } from "../content/gallery-list.js";

export function Gallery() {
  return html`
    <section class="hero">
      <div class="hero__content flow">
        <${MarkdownContent} src="content/gallery.md" />

        <div class="image-grid stagger-children" data-variant="portrait">
          ${galleryImages.map((image) =>
            html`
              <a href="${image.src}" target="_blank" class="animate-pop-in">
                <img
                  src="${image.src}"
                  alt="${image.alt}"
                  title="${image.alt}"
                  loading="lazy"
                  class="gallery-item"
                />
              </a>
            `
          )}
        </div>
      </div>
    </section>
  `;
}
