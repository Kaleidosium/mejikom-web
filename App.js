import "preact/debug";

import { html } from "htm/preact";
import { render } from "preact";

import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";

function App() {
  return html`
    <div class="wrapper">
      <${Header} />
      <main class="flow" style="--flow-space: var(--space-2xl)">
        <${Hero} />
        <${Footer} />
      </main>
    </div>
  `;
}

render(
  html`
    <${App} />
  `,
  document.getElementById("app"),
);
