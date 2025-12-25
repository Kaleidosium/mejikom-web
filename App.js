import "preact/debug";

import { html } from "htm/preact";
import { render } from "preact";
import {
	useEffect,
	useState,
} from "preact/hooks";

import { Footer } from "./components/Footer.js";
import { Gallery } from "./components/Gallery.js";
import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";
import { Prices } from "./components/Prices.js";
import { Terms } from "./components/Terms.js";

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

  let content;
  switch (page) {
    case "terms":
      content = html`<${Terms} />`;
      break;
    case "prices":
      content = html`<${Prices} />`;
      break;
    case "gallery":
      content = html`<${Gallery} />`;
      break;
    case "home":
    default:
      content = html`<${Home} />`;
      break;
  }

  return html`
    <div class="wrapper">
      <${Header} page=${page} />
      <main class="flow" style="--flow-space: var(--space-2xl)">
        ${content}
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
