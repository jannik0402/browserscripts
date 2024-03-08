// ==UserScript==
// @name         JaNö-Browsertools
// @namespace    https://janoe-media.de
// @version      0.4
// @description  Ein Script, dass diverse Tools im Browser ergänzt
// @author       Jannik Nölke
// @match        *://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/jannik0402/browserscripts/main/tools.user.js
// @updateURL    https://raw.githubusercontent.com/jannik0402/browserscripts/main/tools.user.js
// ==/UserScript==
 var i = 1;
var adSenseBlocks = document.querySelectorAll('ins[data-ad-slot^="ca-"]');

// Entferne jeden gefundenen Anzeigenblock
adSenseBlocks.forEach(function(adBlock) {
    adBlock.remove();
    console.log("Anzeige entfernt");
    i++;
});

adSenseBlocks = document.querySelectorAll('.google-auto-placed');

// Entferne jeden gefundenen Anzeigenblock
adSenseBlocks.forEach(function(adBlock) {
    adBlock.remove();
    console.log("Anzeige entfernt");
    i++;
});

adSenseBlocks = document.querySelectorAll('ins.adsbygoogle');

// Entferne jeden gefundenen Anzeigenblock
adSenseBlocks.forEach(function(adBlock) {
    adBlock.remove();
    console.log("Anzeige entfernt");
    i++;
});
