import{o as c,g as m,d as l,i as u}from"./storage-DNZLZt1W.js";import{a as d}from"./types-D8aBjTj5.js";const o="nocturne-styles";function g(t){const e=r(t.brightness,.3,1.3),n=r(t.contrast,.7,1.3),a=r(t.warmth,0,1)*d;return`
html {
  filter: invert(1) hue-rotate(180deg) brightness(${e}) contrast(${n}) sepia(${a}) !important;
  background-color: initial !important;
}
img, video, picture, canvas, svg, iframe,
[class*="emoji"], [src*=".png"], [src*=".jpg"], [src*=".jpeg"], [src*=".gif"], [src*=".webp"] {
  filter: invert(1) hue-rotate(180deg);
}
`.trim()}function r(t,e,n){return Number.isNaN(t)?e:Math.min(n,Math.max(e,t))}function i(){return document.getElementById(o)}function f(){var t;(t=i())==null||t.remove()}function p(t){const e=document.documentElement;if(!e)return;let n=i();n||(n=document.createElement("style"),n.id=o,e.appendChild(n)),n.textContent=t}async function s(){const[t,e]=await Promise.all([m(),Promise.resolve(l(location.href))]);u(t,e)?p(g(t)):f()}s();c(()=>void s());
