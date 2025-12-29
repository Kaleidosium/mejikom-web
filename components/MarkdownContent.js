import { html } from "htm/preact";

/**
 * MarkdownContent component wraps zero-md for rendering markdown files.
 * @param {Object} props
 * @param {string} props.src - Path to the markdown file to render
 */
export default function MarkdownContent({ src }) {
  return html`
    <zero-md src="${src}">
      <template>
        <link rel="stylesheet" href="../styles/styles.css" />
        <style>
        h1, h2, h3, h4, h5, h6 {
        	text-align: center;
        }

        p {
        	text-align: justify;
        }

        hr {
        	margin: 1rem 0;
        	border: none;
        	border-top: 1px solid var(--color-text);
        	overflow: visible;
        	text-align: center;
        	height: 5px;
        }

        hr::after {
        	font-family: "Times New Roman",Times,serif;
        	color: var(--color-text);
        	background: var(--color-bg);
        	content: "§";
        	padding: 0 5px;
        	position: relative;
        	top: -14px;
        }

        blockquote {
        	word-break: break-word;
        	margin: 1rem 0 1.5rem;
        	margin-left: 0;
        	margin-trim: block;
        	padding: 1rem 1.25rem;
        	background-color: var(--color-bg-dark);
        	border-left: .25rem solid var(--color-secondary);
        }

        a {
        	color: var(--color-accent);
        	text-decoration: underline;
        	text-underline-offset: 2px;
        	transition: color var(--transition-fast);
        }

        a:hover {
        	color: var(--color-accent-light);
        }

        a:visited {
        	color: var(--color-accent);
        }

        h1, h2, h3, h4, h5, h6 {
          animation: fadeInDown 0.8s ease-out;
        }

        p, li, blockquote, hr, pre, code, table{
          animation: fadeInUp 0.5s ease-out both;
        }

        /* Stagger paragraphs a bit */
        p:nth-of-type(1) { animation-delay: 0.1s; }
        p:nth-of-type(2) { animation-delay: 0.2s; }
        p:nth-of-type(3) { animation-delay: 0.3s; }
        p:nth-of-type(4) { animation-delay: 0.4s; }
				p:nth-of-type(5) { animation-delay: 0.5s; }
        </style>
      </template>
    </zero-md>
  `;
}
