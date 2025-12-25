import { html } from "htm/preact";

import MarkdownContent from "./MarkdownContent.js";

export function Terms() {
  return html`
    <section class="hero">
      <div class="hero__content flow">
        <${MarkdownContent} src="content/terms.md" />
      </div>
    </section>
  `;
}
