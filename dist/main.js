/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/burgermenu.js
/* harmony default export */ var burgermenu = ((function burgerMenu(){
  const btn = document.querySelector('button')
  const menu = document.querySelector('.primaryMenu')
  let isClicked = false
  btn.addEventListener('click', () => {
    if(isClicked) {
      menu.style.right = '-19em'
      isClicked = false
    } else {
      menu.style.right = '0'
      isClicked = true
    }
    
  })
})());
;// CONCATENATED MODULE: ./src/assets/wallhaven3.jpg
var wallhaven3_namespaceObject = "data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL3dhbGxoYXZlbjMuanBnIjs=";
;// CONCATENATED MODULE: ./src/assets/wallhaven3.png
var src_assets_wallhaven3_namespaceObject = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL3dhbGxoYXZlbjMucG5nIjs=";
;// CONCATENATED MODULE: ./src/index.js





const headline = "Wuf"
document.querySelector("h1").innerText = headline


/******/ })()
;
//# sourceMappingURL=main.js.map