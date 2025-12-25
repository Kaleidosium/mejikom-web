import { html } from "htm/preact";

import MarkdownContent from "../components/MarkdownContent.js";

export function Prices() {
  return html`
    <section class="hero">
      <div class="hero__content flow">
        <${MarkdownContent} src="content/prices.md" />
      </div>
    </section>
  `;
}
