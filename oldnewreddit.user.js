// ==UserScript==
// @name         Reddit Redirector
// @version      1.0
// @description  Redirects reddit.com links to new.reddit.com
// @author       IanKatsy
// @match        *://reddit.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var currentURL = window.location.href;

    // Check if the URL already starts with "new.reddit.com"
    if (!currentURL.startsWith("https://new.reddit.com") && !currentURL.startsWith("http://new.reddit.com")) {
        // Replace "reddit.com" with "new.reddit.com" in the URL
        var newURL = currentURL.replace('reddit.com', 'new.reddit.com');

        // Redirect to the new URL
        window.location.replace(newURL);
    }
})();
