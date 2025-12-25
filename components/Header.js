import { html } from "htm/preact";

export function Header() {
  return html`
    <header class="header">
      <nav class="header__nav">
        <a href="#home" class="nav__item nav__item--active">Home</a>
        <a href="#terms" class="nav__item">Terms</a>
        <a href="#prices" class="nav__item">Prices</a>
        <a href="#gallery" class="nav__item">Gallery</a>
      </nav>
    </header>
  `;
}
