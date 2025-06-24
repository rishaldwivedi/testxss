fetch("/app/superSecretData.html", {
  method: "POST"
})
  .then(res => res.text())
  .then(data => {
    document.body.innerHTML += "<pre>" + data + "</pre>";
  });
