function loadFrequentlyBoughtTogetherMainScript() {
   var e = document.createElement("script");
   e.type = "text/javascript";
   var t = window.Shopify && window.Shopify.shop ? window.Shopify.shop : "",
      o = t.indexOf("cbb-staging") >= 0 ? "https://stagingcdn.codeblackbelt.com" : "https://cdn.codeblackbelt.com",
      r = (new Date).toISOString().slice(0, 13).replace(/[-T]/g, "") + "+0000";
   e.src = o + "/scripts/frequently-bought-together/main.min.js?version=" + r, e.async = !0, document.getElementsByTagName("head")[0].appendChild(e)
}

function frequentlyBoughtTogetherDiscountExists() {
   var e = localStorage.getItem("cbb-fbt-discount-parameters");
   return e && void 0 !== e && null !== e
}

function thereAreFrequentlyBoughtTogetherAddedStatsToProcess() {
   for (var e = 0; e < localStorage.length; e++) {
      var t = localStorage.key(e);
      if (t.startsWith("frequently-bought-together-") && t.endsWith("-for-added-check")) return !0
   }
   return !1
}

function isExpressTheme() {
   return window.Shopify && window.Shopify.theme && window.Shopify.theme.name && window.Shopify.theme.name.toLowerCase().startsWith("express") && !window.Shopify.theme.name.toLowerCase().startsWith("expression")
}(frequentlyBoughtTogetherDiscountExists() || thereAreFrequentlyBoughtTogetherAddedStatsToProcess() || isExpressTheme()) && loadFrequentlyBoughtTogetherMainScript();