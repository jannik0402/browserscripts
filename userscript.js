// ==UserScript==
// @name         JaNö-Browsertools
// @namespace    https://jannoe-media.de
// @version      0.1
// @description  Ein Script, dass diverse Tools im Browser ergänzt
// @author       Jannik Nölke
// @match        *
// @grant        none
// @downloadURL  
// @updateURL
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
