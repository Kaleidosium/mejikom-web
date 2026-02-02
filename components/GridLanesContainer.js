/*
  TODO(dania): This is a temporary component to scope the grid-lanes polyfill,
			   will be removed once native support is baseline.
*/

import "../vendor/grid-lanes-polyfill.js";

import { html } from "htm/preact";
import { useEffect, useRef } from "preact/hooks";

export function GridLanesContainer({ children, style, ...props }) {
	const containerRef = useRef(null);

	const polyfill =
		typeof window !== "undefined" ? window.GridLanesPolyfill : null;
	const supportsNative = polyfill ? polyfill.supportsGridLanes() : false;

	// Apply the grid-lanes polyfill after paint.
	// This ensures images have rendered dimensions before layout calculation.
	useEffect(() => {
		// No-op if native support exists or no polyfill available
		if (!containerRef.current || supportsNative || !polyfill) return;

		// Initialize polyfill - it handles image load events internally
		const layoutInstance = polyfill.apply(containerRef.current);

		// Staggered refreshes for cached images that may report complete=true
		// before their dimensions are fully available to the layout engine
		const timeoutId1 = setTimeout(() => layoutInstance.refresh(), 50);
		const timeoutId2 = setTimeout(() => layoutInstance.refresh(), 150);

		return () => {
			if (layoutInstance) layoutInstance.destroy();
			clearTimeout(timeoutId1);
			clearTimeout(timeoutId2);
		};
	}, [supportsNative, polyfill]);

	return html`
		<div
			ref=${containerRef}
			style=${{
				// If native support exists, use it.
				// If not, use 'grid' so the polyfill can read the columns/gap configs!
				display: supportsNative ? "grid-lanes" : "grid",

				"--grid-lanes-polyfill": 1,
				"grid-template-columns":
					"repeat(auto-fill, minmax(min(100%, 12rem), 1fr))",
				gap: "clamp(var(--space-xs), 2vw, var(--space-sm))",
				"margin-block": "clamp(var(--space-sm), 4vw, var(--space-md))",
				...style,
			}}
			...${props}
		>
			${children}
		</div>
	`;
}
