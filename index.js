'use strict'

function query(selector) {
    return Array.from(document.querySelectorAll(selector));
}

var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        var img = entry.target;
        img.srcset = img.getAttribute('data-srcset');
        io.unobserve(entry);
    });
});

query('img.lazyload').forEach(function (item) {
    io.observe(item);
});