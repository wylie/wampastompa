const txt = document.getElementById('txt');
const loc = window.location.hash;
const hash = loc.split('#');
console.log( hash );
const nam = hash[1].replace(/[-_\s]/g, " ");
txt.innerHTML = nam;
