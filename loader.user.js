// ==UserScript==
// @name Cats BC
// @namespace https://www.bondageprojects.com/
// @version 1.0.1
// @description Chat Auto Translator System!
// @author  dDeepLb
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match https://bondageprojects.com/*
// @match https://www.bondageprojects.com/*
// @match https://bondage-asia.com/*
// @match https://www.bondage-asia.com/*
// @match https://*.bondage-asia.com/*
// @match http://localhost:*/*
// @match http://localhost/BondageClub/*
// @icon data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48dGV4dCB5PSIxZW0iIGZvbnQtc2l6ZT0iMTAwIj7wn5CxPC90ZXh0Pjwvc3ZnPg==
// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  'use strict';
  const ending = 'index.js';
  const prodPath = 'https://protokink.github.io/CATS/';
  const devPath = `${prodPath}dev/`;
  const localPath = 'http://localhost:45009/';

  const isDev = window.location.search.toLowerCase().includes('cats=dev');
  const isLocal = window.location.search.toLowerCase().includes('cats=local');
  const isPublic = isDev || !isLocal;

  let modLink = prodPath;
  if (isDev) modLink = devPath;
  else if (isLocal) modLink = localPath;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('crossorigin', 'anonymous');
  script.src = `${modLink}${ending}${isPublic ? '?' + Date.now() : ''}`;
  document.head.appendChild(script);
})();
