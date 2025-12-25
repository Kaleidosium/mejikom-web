import { html } from 'htm/preact';

export function Footer() {
  return html`
    <footer class="footer">
      <div class="footer__social">
        <a href="#twitter" class="social-link">
          <svg class="social-icon" viewBox="0 0 24 24" aria-label="Twitter">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
          </svg>
        </a>
        <a href="#instagram" class="social-link">
          <svg class="social-icon" viewBox="0 0 24 24" aria-label="Instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
          </svg>
        </a>
        <a href="#bluesky" class="social-link">
          <svg class="social-icon" viewBox="0 0 24 24" aria-label="Bluesky">
            <path d="M12 2c-1.5 3-5 5-9 6 2 2 3 4 3 7-3 0-5 2-6 4 1 1 3 2 6 2-1 2-1 4 0 5 2-1 4-3 5-5 1 2 3 4 5 5 1-1 1-3 0-5 3 0 5-1 6-2-1-2-3-4-6-4 0-3 1-5 3-7-4-1-7.5-3-9-6zm0 0"/>
          </svg>
        </a>
        <a href="#kofi" class="social-link">
          <svg class="social-icon" viewBox="0 0 24 24" aria-label="Ko-Fi">
            <path d="M7 12a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zm8 0a3 3 0 110-6 3 3 0 010 6z"/>
          </svg>
        </a>
      </div>
      
      <p class="footer__text">© 2024 Mejikom • Art Commissions</p>
    </footer>
  `;
}
