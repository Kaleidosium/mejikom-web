import { html } from "htm/preact";

import { SOCIALS } from "../config.js";

export function Footer() {
  const tooltip = `Discord (@${SOCIALS.discord})`;

  const handleDiscordClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(SOCIALS.discord).then(() => {
      alert(`Discord username @${SOCIALS.discord} copied to clipboard!`);
    });
  };

  return html`
    <footer class="footer text-center">
      <div class="footer__social cluster" style="--gutter: var(--space-lg)">
        <a href="${SOCIALS.telegram}" class="social-link">
          <img
            class="social-icon"
            aria-label="Telegram"
            title="Telegram"
            height="20"
            src="https://cdn.simpleicons.org/telegram?viewbox=auto"
          />
        </a>
        <a href="${SOCIALS.twitter}" class="social-link">
          <img
            class="social-icon"
            aria-label="X (Twitter)"
            title="X (Twitter)"
            height="20"
            src="https://cdn.simpleicons.org/x?viewbox=auto"
          />
        </a>
        <a href="${SOCIALS.instagram}" class="social-link">
          <img
            class="social-icon"
            aria-label="Instagram"
            title="Instagram"
            height="20"
            src="https://cdn.simpleicons.org/instagram?viewbox=auto"
          />
        </a>
        <a
          href="#"
          class="social-link"
          onClick="${handleDiscordClick}"
          title="${tooltip}"
        >
          <img
            class="social-icon"
            aria-label="Discord"
            height="20"
            src="https://cdn.simpleicons.org/discord?viewbox=auto"
          />
        </a>
        <a href="${SOCIALS.kofi}" class="social-link">
          <img
            class="social-icon"
            aria-label="Ko-fi"
            title="Ko-fi"
            height="20"
            src="https://cdn.simpleicons.org/kofi?viewbox=auto"
          />
        </a>
      </div>
    </footer>
  `;
}
