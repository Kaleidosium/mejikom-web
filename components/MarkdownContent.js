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
				<link rel="stylesheet" href="styles/styles.css" />
				<link rel="stylesheet" href="styles/markdown.css" />
			</template>
		</zero-md>
	`;
}
