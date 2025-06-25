setTimeout(() => {
  const domDump = btoa(document.documentElement.outerHTML);
  location.href = "https://codepen.io/rishaldwivedi/full/myJajjG#dump=" + domDump;
}, 2000);
