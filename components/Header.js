import { html } from "htm/preact";

export function Header() {
  return html`
    <header class="header">
      <nav class="header__nav center" style="--center-padding: 0">
        <a href="#home" class="nav__item" aria-current="page">Home</a>
        <a href="#terms" class="nav__item">Terms</a>
        <a href="#prices" class="nav__item">Prices</a>
        <a href="#gallery" class="nav__item">Gallery</a>
      </nav>
    </header>
  `;
}
