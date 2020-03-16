'use strict'

function query(selector) {
    return Array.from(document.querySelectorAll(selector));
}

var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        var img = entry.target;
        if (img.srcset == 'https://cdn.jsdelivr.net/npm/skx@0.0.9/img/lazy.gif') {
            img.srcset = img.data-srcset;
        }
        io.unobserve(entry);
    });
});

query('img.lazyload').forEach(function (item) {
    io.observe(item);
});