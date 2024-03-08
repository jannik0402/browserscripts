// ==UserScript==
// @name         JaNö-Browsertools
// @namespace    https://janoe-media.de
// @version      0.3
// @description  Ein Script, dass diverse Tools im Browser ergänzt
// @author       Jannik Nölke
// @match        *://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/jannik0402/browserscripts/main/tools.user.js
// @updateURL    https://raw.githubusercontent.com/jannik0402/browserscripts/main/tools.user.js
// ==/UserScript==

var adSenseBlocks = document.querySelectorAll('ins[data-ad-slot^="ca-"]');

// Entferne jeden gefundenen Anzeigenblock
adSenseBlocks.forEach(function(adBlock) {
    adBlock.remove();
});

adSenseBlocks = document.querySelectorAll('.google-auto-placed');

// Entferne jeden gefundenen Anzeigenblock
adSenseBlocks.forEach(function(adBlock) {
    adBlock.remove();
});

adSenseBlocks = document.querySelectorAll('.adsbygoogle');

// Entferne jeden gefundenen Anzeigenblock
adSenseBlocks.forEach(function(adBlock) {
    adBlock.remove();
});
