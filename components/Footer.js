import { html } from "htm/preact";

export function Footer() {
  return html`
    <footer class="footer">
      <div class="footer__social">
        <a href="#telegram" class="social-link">
          <img
            class="social-icon"
            aria-label="Telegram"
            height="20"
            src="https://cdn.simpleicons.org/telegram?viewbox=auto"
          />
        </a>
        <a href="#twitter" class="social-link">
          <img
            class="social-icon"
            aria-label="Twitter"
            height="20"
            src="https://cdn.simpleicons.org/x?viewbox=auto"
          />
        </a>
        <a href="#instagram" class="social-link">
          <img
            class="social-icon"
            aria-label="Instagram"
            height="20"
            src="https://cdn.simpleicons.org/instagram?viewbox=auto"
          />
        </a>
        <a href="#discord" class="social-link">
          <img
            class="social-icon"
            aria-label="Discord"
            height="20"
            src="https://cdn.simpleicons.org/discord?viewbox=auto"
          />
        </a>
        <a href="#kofi" class="social-link">
          <img
            class="social-icon"
            aria-label="Ko-fi"
            height="20"
            src="https://cdn.simpleicons.org/kofi?viewbox=auto"
          />
        </a>
      </div>
    </footer>
  `;
}
