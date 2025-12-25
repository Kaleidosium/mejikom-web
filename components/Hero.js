import { html } from "htm/preact";

import MarkdownContent from "./MarkdownContent.js";

export function Hero() {
  return html`
    <section class="hero">
      <div class="hero__content">
        <${MarkdownContent} src="content/intro.md" />
      </div>
    </section>
  `;
}
