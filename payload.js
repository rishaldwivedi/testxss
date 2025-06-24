fetch("/app/superSecretData.html")
  .then(res => res.text())
  .then(data => {
    document.body.innerHTML += "<hr><h2>Super Secret Data</h2><pre>" + data + "</pre>";
  });
