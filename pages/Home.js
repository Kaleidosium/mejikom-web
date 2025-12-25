import { html } from "htm/preact";

import MarkdownContent from "../components/MarkdownContent.js";

export function Home() {
  return html`
    <section class="hero">
      <div class="hero__content flow">
        <${MarkdownContent} src="content/home.md" />
      </div>
    </section>
  `;
}
