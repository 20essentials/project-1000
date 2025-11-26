import { d as decodeKey } from "./chunks/astro/server_Bqlhq3Zt.mjs";
import "./chunks/astro-designed-error-pages_Bb6N5nBW.mjs";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/noop-middleware_DxzzPJ5u.mjs";
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}
const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/amoil/Desktop/1000/","cacheDir":"file:///C:/Users/amoil/Desktop/1000/node_modules/.astro/","outDir":"file:///C:/Users/amoil/Desktop/1000/dist/","srcDir":"file:///C:/Users/amoil/Desktop/1000/src/","publicDir":"file:///C:/Users/amoil/Desktop/1000/public/","buildClientDir":"file:///C:/Users/amoil/Desktop/1000/dist/client/","buildServerDir":"file:///C:/Users/amoil/Desktop/1000/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/static/page.D353hf0y.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.8.0_@types+node@24._5e2eaf84e667aefbbcd0063660d8011b/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/static/page.D353hf0y.js"}],"styles":[{"type":"external","src":"/static/index._ekzz866.css"},{"type":"external","src":"/static/Phone.C7S-cxkF.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://project-1000-t1k-tok-minimalist.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/amoil/Desktop/1000/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.8.0_@types+node@24._5e2eaf84e667aefbbcd0063660d8011b/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/amoil/Desktop/1000/node_modules/.pnpm/astro@5.8.0_@types+node@24._5e2eaf84e667aefbbcd0063660d8011b/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BkxmuW6W.mjs","\u0000@astrojs-manifest":"manifest_CsxiA92g.mjs","astro:scripts/before-hydration.js":"static/astro_scripts/before-hydration.js.C_R68L8J.js","@/components/Phone":"static/Phone.DxgO4eLI.js","@astrojs/react/client.js":"static/client.KJlOPP84.js","C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts":"static/SignedInCSR.astro_astro_type_script_index_0_lang.DUKBYtMH.js","C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts":"static/UserButtonMenuItems.astro_astro_type_script_index_0_lang.DjJJDhXb.js","C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts":"static/SignedOutCSR.astro_astro_type_script_index_0_lang.DIDtSRiO.js","C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/ProtectCSR.astro?astro&type=script&index=0&lang.ts":"static/ProtectCSR.astro_astro_type_script_index_0_lang.JbSyB4W5.js","astro:scripts/page.js":"static/page.D353hf0y.js","\u0000astro:transitions/client":"static/client.Djg46rLP.js"},"inlinedScripts":[["C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}}customElements.define(\"clerk-user-button-menu-items\",e);"]],"assets":["/static/index._ekzz866.css","/assets/cross.png","/assets/empty-ghost.lottie","/assets/favicon.webp","/assets/firework.gif","/assets/heart-3d.webp","/assets/info.svg","/assets/iphone-15.png","/assets/iphone-sprite.png","/assets/not-found-image.avif","/assets/plus.png","/assets/privateUser.webp","/assets/profileUserMock.avif","/assets/search-gif.gif","/assets/spritesheet.avif","/assets/tik-tok-animated-logo.gif","/assets/tiktok-logo-text.webp","/assets/tiktok-logo.avif","/assets/vinyl.avif","/static/BaseClerkControlElement.CHa7D9Ab.js","/static/chunk-K6S4O6NY.RSQ76uOP.js","/static/client.Djg46rLP.js","/static/client.KJlOPP84.js","/static/index.6otl1p8d.js","/static/index.BeFTpu1i.js","/static/page.D353hf0y.js","/static/Phone.C7S-cxkF.css","/static/Phone.DxgO4eLI.js","/static/ProtectCSR.astro_astro_type_script_index_0_lang.JbSyB4W5.js","/static/SignedInCSR.astro_astro_type_script_index_0_lang.DUKBYtMH.js","/static/SignedOutCSR.astro_astro_type_script_index_0_lang.DIDtSRiO.js","/assets/fonts/Monserrat-variable.woff2","/assets/fonts/TikTokDisplayFont-Bold.woff2","/assets/fonts/TikTokDisplayFont-Regular.woff2","/assets/fonts/TikTokDisplayFont-Semibold.woff2","/assets/fonts/TikTokFont-Bold.woff2","/assets/fonts/TikTokFont-Regular.woff2","/assets/fonts/TikTokFont-Semibold.woff2","/static/astro_scripts/before-hydration.js.C_R68L8J.js","/static/page.D353hf0y.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Mj51hkoDyfnbclpuVLLyMOBi8Y4YhHYDk70A9ss2Yw4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;
export {
  manifest
};
