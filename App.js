import 'preact/debug';

import { html } from 'htm/preact';
import { render } from 'preact';

import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';

function App() {
  return html`
    <div class="layout-wrapper">
      <${Header} />
      <${Hero} />
    </div>
  `;
}

render(
  html`
    <${App} />
  `,
  document.getElementById("app"),
);
