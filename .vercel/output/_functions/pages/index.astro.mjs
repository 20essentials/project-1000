import { j as createAstro, k as createComponent, r as renderTemplate, q as renderSlot, v as renderHead, n as addAttribute, w as renderComponent, x as renderScript, y as defineScriptVars, m as maybeRenderHead } from "../chunks/astro/server_Bqlhq3Zt.mjs";
/* empty css                                 */
import { webcrypto } from "node:crypto";
import { renderers } from "../renderers.mjs";
function baseURL(path) {
  return new URL(path.replace(/^\/+/, ""), "https://project-1000-t1k-tok-minimalist.vercel.app/").toString();
}
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$e = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const favicon = baseURL("/assets/favicon.webp");
  const previewImg = baseURL("/preview/preview-og.avif");
  const title = "Tik Tok Minimalist";
  const description = "(>‿◠)✌";
  const url = Astro2.site;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="google" content="notranslate"><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="description"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:url"', '><meta property="og:description"', '><meta property="twitter:title"', '><meta property="twitter:url"', '><meta property="twitter:image"', '><meta property="twitter:description"', "><title>", "</title>", "</head> <body> ", "  <!-- <script>\n  window.addEventListener('resize', e => {\n    document.title = `${window.innerWidth}`;\n  });\n<\/script>\n --></body></html>"], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="google" content="notranslate"><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="description"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:url"', '><meta property="og:description"', '><meta property="twitter:title"', '><meta property="twitter:url"', '><meta property="twitter:image"', '><meta property="twitter:description"', "><title>", "</title>", "</head> <body> ", "  <!-- <script>\n  window.addEventListener('resize', e => {\n    document.title = \\`\\${window.innerWidth}\\`;\n  });\n<\/script>\n --></body></html>"])), addAttribute(favicon, "href"), addAttribute(previewImg, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(url, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(url, "content"), addAttribute(previewImg, "content"), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/amoil/Desktop/1000/src/layouts/Layout.astro", void 0);
const $$Astro$d = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignedInCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SignedInCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-in", "clerk-signed-in", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedInCSR.astro", void 0);
const $$Astro$c = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignedInSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SignedInSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedInSSR.astro", void 0);
const configOutput = "server";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Astro$b = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { isStatic, class: className } = Astro2.props;
  const SignedInComponent = isStaticOutput(isStatic) ? $$SignedInCSR : $$SignedInSSR;
  return renderTemplate`${renderComponent($$result, "SignedInComponent", SignedInComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$a = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignedOutCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SignedOutCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-out", "clerk-signed-out", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedOutCSR.astro", void 0);
const $$Astro$9 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignedOutSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SignedOutSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedOutSSR.astro", void 0);
const $$Astro$8 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { isStatic, class: className } = Astro2.props;
  const SignedOutComponent = isStaticOutput(isStatic) ? $$SignedOutCSR : $$SignedOutSSR;
  return renderTemplate`${renderComponent($$result, "SignedOutComponent", SignedOutComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
function fillPool(bytes) {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    webcrypto.getRandomValues(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    webcrypto.getRandomValues(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
}
function random(bytes) {
  fillPool(bytes |= 0);
  return pool.subarray(poolOffset - bytes, poolOffset);
}
function customRandom(alphabet, defaultSize, getRandom) {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
  let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    while (true) {
      let bytes = getRandom(step);
      let i = step;
      while (i--) {
        id += alphabet[bytes[i] & mask] || "";
        if (id.length >= size) return id;
      }
    }
  };
}
function customAlphabet(alphabet, size = 21) {
  return customRandom(alphabet, size, random);
}
var generateSafeId = (defaultSize = 10) => customAlphabet(urlAlphabet, defaultSize)();
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$InternalUIComponentRenderer;
  const { component, id, ...props } = Astro2.props;
  const safeId = id || generateSafeId();
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by `mountAllClerkAstroJSComponents`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: `clerk-${component}-${safeId}`,\n    props,\n  });\n})();<\/script>"], ["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by \\`mountAllClerkAstroJSComponents\\`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: \\`clerk-\\${component}-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id"), defineScriptVars({ props, component, safeId }));
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
const $$Astro$6 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-in" })}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/SignIn.astro", void 0);
const $$Astro$5 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the `<UserButton.MenuItems>` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"], ["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the \\`<UserButton.MenuItems>\\` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$Astro$3 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$Astro$2 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"], ["<script>(function(){", "\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "C:/Users/amoil/Desktop/1000/node_modules/.pnpm/@clerk+astro@2.10.2_astro@5_cfa90090c899854822022127a60f8596/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
const $$Astro = createAstro("https://project-1000-t1k-tok-minimalist.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await Astro2.locals.currentUser();
  const testingUser = {
    username: "PrivateUser",
    id: "user-31QErNpqrwYbwKoFlEAOduNfQhtup4pi",
    imageUrl: "/assets/profileUserMock.avif"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Phone", null, { "client:only": "react", "user": testingUser, "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "@/components/Phone", "client:component-export": "Phone" })}  ${maybeRenderHead()}<aside class="signin-modal" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SignedOut", $$SignedOut, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SignIn", $$SignIn, { "data-astro-cid-j7pv25f6": true })}  ` })} </aside> <aside class="logout-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SignedIn", $$SignedIn, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "UserButton", UserButton, { "data-astro-cid-j7pv25f6": true })} ` })} </aside> ` })} `;
}, "C:/Users/amoil/Desktop/1000/src/pages/index.astro", void 0);
const $$file = "C:/Users/amoil/Desktop/1000/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
