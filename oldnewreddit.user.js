// ==UserScript==
// @name         Redirect Reddit Links
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects Reddit links to new.reddit.com
// @author       IanKatsy
// @match        *://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function needsRedirection(url) {
        return url.includes("www.reddit.com") && !url.includes("new.reddit.com");
    }

    function redirectLink() {
        var currentURL = window.location.href;

        var newURL = currentURL.replace("www.reddit.com", "new.reddit.com");

        if (currentURL !== newURL) {
            window.location.href = newURL;
        }
    }

    if (needsRedirection(window.location.href)) {
        redirectLink();
    }
})();
