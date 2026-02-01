/*
	TODO(dania): This is a temporary component to scope the grid-lanes polyfill,
							 will be removed once native support is baseline.
*/

import "../vendor/grid-lanes-polyfill.js";

import { html } from "htm/preact";
import {
	useLayoutEffect,
	useRef,
} from "preact/hooks";

export function GridLanesContainer({ children, style, ...props }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const GridLanesPolyfill = window.GridLanesPolyfill;

    // 1. Check for native support first to avoid unnecessary work
    if (!GridLanesPolyfill || GridLanesPolyfill.supportsGridLanes()) return;

    // 2. Apply the polyfill ONLY to this specific element
    // This creates a scoped observer just for this container's children
    const layoutInstance = GridLanesPolyfill.apply(containerRef.current);

    // 3. Cleanup: destroy the instance when the component unmounts
    return () => {
      if (layoutInstance) {
        layoutInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return html`
    <div
      ref=${containerRef}
      style=${{
				// The polyfill requires this hook for some CSS parsing logic
        '--grid-lanes-polyfill': 1,
        display: 'grid-lanes',
				'grid-template-columns': 'repeat(auto-fill, minmax(200px, 1fr))',
    		'gap': '1rem',
        ...style
      }}
      ...${props}
    >
      ${children}
    </div>
  `;
}
