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
						border-top: 1px solid #16161d;
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
        </style>
      </template>
    </zero-md>
  `;
}
