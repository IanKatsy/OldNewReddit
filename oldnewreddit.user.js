// ==UserScript==
// @name         Reddit Redirector
// @version      1.0
// @description  Redirects reddit.com links to new.reddit.com
// @author       IanKatsy
// @match        *://reddit.com/*
// ==/UserScript==

(function() {
    'use strict';

    var currentURL = window.location.href;

    // Check if the URL already starts with "new.reddit.com"
    if (!currentURL.startsWith("https://new.reddit.com") && !currentURL.startsWith("http://new.reddit.com")) {
        var newURL = currentURL.replace('reddit.com', 'new.reddit.com');

        // Redirect
        window.location.replace(newURL);
    }
})();
