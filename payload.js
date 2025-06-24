fetch("/app/superSecretData.html")
  .then(r => r.text())
  .then(d => {
    document.body.innerHTML += "<pre>" + d + "</pre>";
  });
