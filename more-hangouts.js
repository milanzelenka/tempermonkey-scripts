// ==UserScript==
// @id             more-hangouts
// @name           More Hangouts
// @description    Make hangouts.google.com more compact for display more conversations
// @namespace      https://github.com/milanzelenka/
// @updateURL      https://raw.githubusercontent.com/milanzelenka/tempermonkey-scripts/master/more-hangouts.js
// @downloadURL    https://raw.githubusercontent.com/milanzelenka/tempermonkey-scripts/master/more-hangouts.js
// @category       Info
// @version        1.0.0
// @include        https://hangouts.google.com/*
// @match          https://hangouts.google.com/*
// @match          https://talkgadget.google.com/*
// @grant          none
// ==/UserScript==


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.g-Ue-kc-Sc1lPb { left: -400px !important; top: 10px; }');
addGlobalStyle('.g-Ue-kc { width: 250px; }');
addGlobalStyle('.g-Ue-T-J { display: none; }');

// conversation images (avatars)
addGlobalStyle('.Bb>.Xk { margin: 8px; margin-left: 8px; }');

// hide disable-notification icon and last message time
//addGlobalStyle('.Bb.BN .tD, .Bb.Bm .Vx { display:none; }');

// compact contact/conversation list
addGlobalStyle('.Bb>.ik, .Bb>.ng, .Bb.ko>.ng, .Bb.Bm>.ng { left: 55px; right: 0; }');
addGlobalStyle('.Bb { font-size: 12px; }');
