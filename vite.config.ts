// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

// The Lovable preset hard-enables @tanstack/devtools-vite source tagging
// (data-tsd-source). TanStack Start re-prints route files differently for the
// SSR and client pipelines, so tags in src/routes/* get different line numbers
// per side and every dev page load logs a hydration mismatch on <html>.
// Untag route files on both pipelines; other components keep their tags.
const untagRouteFiles: Plugin = {
  name: "skip-tsd-source-on-route-files",
  configResolved(config) {
    const tagger = config.plugins.find(
      (p) => p.name === "@tanstack/devtools:inject-source",
    );
    const transform = tagger?.transform;
    if (!transform || typeof transform !== "object") return;
    const original = transform.handler;
    transform.handler = function (code, id, ...rest) {
      if (id.includes("/src/routes/")) return;
      return (original as Function).call(this, code, id, ...rest);
    } as typeof transform.handler;
  },
};

export default defineConfig({
  plugins: [untagRouteFiles],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
