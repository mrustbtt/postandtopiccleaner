// ==UserScript==
// @name         Obliterator
// @namespace    http://tampermonkey.net/
// @version      2024-08-22
// @description  try to take over the world!
// @author       mindrust
// @match        https://bitcointalk.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bitcointalk.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Edit rats below...

const rats = [
    "rat1",
    "rat2",
    "rat3"
]

const pURL = document.location.href
const URL1 = 'a[title="View the profile of '
const URL2 = '"]'

for (let i = 0; i < rats.length; i++){
    const ele = document.querySelectorAll(URL1 + rats[i] + URL2);
    for (let k = 0; k < ele.length; k++) {
        if(pURL.includes("topic")){
            ele[k].parentElement.parentElement.parentElement.parentElement.innerHTML = "";
        }else{
            ele[k].parentElement.parentElement.innerHTML = "";
        }
    }

}
})();
