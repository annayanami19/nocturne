import{o as m,g as l,d as u,i as d}from"./storage-2wM7zYB7.js";import{a as f}from"./types-D8aBjTj5.js";const s="nocturne-styles";function h(e){const t=i(e.brightness,.3,1.3),n=i(e.contrast,.7,1.3),c=i(e.warmth,0,1)*f;return`
html {
  filter: invert(1) hue-rotate(180deg) brightness(${t}) contrast(${n}) sepia(${c}) !important;
  background-color: initial !important;
}
img, video, picture, canvas, svg, iframe,
[class*="emoji"], [src*=".png"], [src*=".jpg"], [src*=".jpeg"], [src*=".gif"], [src*=".webp"] {
  filter: invert(1) hue-rotate(180deg);
}
`.trim()}function i(e,t,n){return Number.isNaN(e)?t:Math.min(n,Math.max(t,e))}function a(){return document.getElementById(s)}function p(){var e;(e=a())==null||e.remove()}function g(e){const t=document.documentElement;if(!t)return;let n=a();n||(n=document.createElement("style"),n.id=s,t.appendChild(n)),n.textContent=e}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches}async function o(){const[e,t]=await Promise.all([l(),Promise.resolve(u(location.href))]);k(e.autoMode),d(e,t,v())?g(h(e)):p()}let r=null;function y(){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>void o();return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function k(e){e&&!r?r=y():!e&&r&&(r(),r=null)}o();m(()=>void o());
