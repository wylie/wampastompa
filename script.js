document.addEventListener('DOMContentLoaded', () => {
  const txt = document.getElementById('txt');
  console.log(txt);
  const loc = window.location.hash;
  console.log(loc);
  const [_, nam] = loc.split('#');

  if (txt && nam) {
    txt.innerHTML = nam.replace(/[-_\s]/g, " ");
  }
});
