import { renderers } from "./renderers.mjs";
import { c as createExports } from "./chunks/entrypoint_BlGFIywQ.mjs";
import { manifest } from "./manifest_CsxiA92g.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.8.0_@types+node@24._5e2eaf84e667aefbbcd0063660d8011b/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/index.astro", _page1]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "3ed4401b-7c7b-42ee-a462-822d7ff521d5",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
