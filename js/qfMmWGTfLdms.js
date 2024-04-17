! function () {
   var e = {
         3177: function (e, t) {
            "use strict";

            function n(e, t) {
               var n = Object.keys(e);
               if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t && (o = o.filter((function (t) {
                     return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), n.push.apply(n, o)
               }
               return n
            }

            function o(e, t, n) {
               return t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
               }) : e[t] = n, e
            }
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.defineProperty = o, t.objectSpread2 = function (e) {
               for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? n(Object(r), !0).forEach((function (t) {
                     o(e, t, r[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (t) {
                     Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                  }))
               }
               return e
            }
         },
         354: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            const n = "95ba910bcec4542ef2a0b64cd7ca666c";

            function o(e, t, n) {
               try {
                  var o;
                  i({
                     error: e,
                     context: t,
                     shopId: r() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                     notes: n
                  })
               } catch (e) {}
            }

            function r() {
               try {
                  const e = document.getElementById("shopify-features").textContent;
                  return JSON.parse(e).shopId
               } catch (e) {
                  return null
               }
            }

            function i(e) {
               const t = new XMLHttpRequest;
               t.open("POST", "https://notify.bugsnag.com/", !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Bugsnag-Api-Key", n), t.setRequestHeader("Bugsnag-Payload-Version", "5");
               const o = function (e) {
                  const t = (n = e.error).stackTrace || n.stack || n.description || n.name;
                  var n;
                  const [o, r] = (t || "unknown error").split("\n")[0].split(":");
                  return JSON.stringify({
                     payloadVersion: 5,
                     notifier: {
                        name: "ConsentTrackingAPI",
                        version: "latest",
                        url: "-"
                     },
                     events: [{
                        exceptions: [{
                           errorClass: (o || "").trim(),
                           message: (r || "").trim(),
                           stacktrace: [{
                              file: "consent-tracking-api.js",
                              lineNumber: "1",
                              method: t
                           }],
                           type: "browserjs"
                        }],
                        context: e.context || "general",
                        app: {
                           id: "ConsentTrackingAPI",
                           version: "latest"
                        },
                        metaData: {
                           request: {
                              shopId: e.shopId,
                              shopUrl: window.location.href
                           },
                           device: {
                              userAgent: window.navigator.userAgent
                           },
                           "Additional Notes": e.notes
                        },
                        unhandled: !1
                     }]
                  })
               }(e);
               t.send(o)
            }
            t.reportError = o, t.sendBugsnagXhr = i, t.withBugsnag = function (e) {
               return (...t) => {
                  try {
                     return e(...t)
                  } catch (e) {
                     throw o(e), e
                  }
               }
            }
         },
         3249: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(5814);
            t.updateTrackingConsent = function (e, t) {
               const n = new XMLHttpRequest,
                  r = JSON.stringify(e);
               n.open("POST", "/set_tracking_consent.json", !0), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function () {
                  if (4 !== n.readyState) return;
                  const r = function (e) {
                     try {
                        return JSON.parse(e)
                     } catch (e) {
                        return {
                           error: "Unknown error"
                        }
                     }
                  }(n.responseText);
                  var i;
                  0 === (i = n.status) || 200 >= i && i < 400 ? (o.dispatchEvents(e), t(null, r)) : t(r)
               }, n.send(r)
            }
         },
         7560: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(6304),
               r = n(1449);
            const i = "_cmp_a",
               a = "shopify-cmp-metadata";

            function s() {
               return r.readCookie(i, a)
            }

            function c(e) {
               const t = s();
               if (!t) return !0;
               const n = t.purposes[e];
               return "boolean" != typeof n || n
            }
            t.CMP_ANSWERS_COOKIE_NAME = i, t.CMP_ANSWERS_TAG_NAME = a, t.analyticsProcessingAllowed = function () {
               return c(o.DataProcessingPurpose.ANALYTICS)
            }, t.marketingProcessingAllowed = function () {
               return c(o.DataProcessingPurpose.MARKETING)
            }, t.preferencesProcessingAllowed = function () {
               return c(o.DataProcessingPurpose.PREFERENCES)
            }, t.saleOfDataAllowed = function () {
               return c(o.DataProcessingPurpose.SALE_OF_DATA)
            }, t.saleOfDataRegion = function () {
               const e = s();
               return e && e.sale_of_data_region || !1
            }, t.shouldShowBanner = function () {
               const e = s();
               return !!e && "boolean" == typeof e.display_banner && e.display_banner
            }
         },
         3142: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(8920),
               r = n(7560),
               i = n(6304),
               a = n(5841),
               s = n(354);

            function c() {
               return o.haveMarketingConsent()
            }

            function u() {
               return o.haveSaleOfDataConsent()
            }

            function d() {
               const e = {},
                  t = a.getCMPConsentValues();
               for (const n of Object.keys(t)) e[a.transformKeyToDisplayName(n)] = a.transformConsentToDisplaySchema(t[n]);
               return e
            }

            function p(e, t) {
               return "object" == typeof e && e.headlessStorefront && !e.storefrontAccessToken ? a.setHeadlessTrackingConsent(e, t) : o.setTrackingConsent(e, t)
            }
            t.analyticsProcessingAllowed = function () {
               return o.haveAnalyticsConsent()
            }, t.currentVisitorConsent = d, t.marketingAllowed = c, t.preferencesProcessingAllowed = function () {
               return o.havePreferencesConsent()
            }, t.saleOfDataAllowed = u, t.setTrackingConsent = p, t.shopifyConsentAPI = function (e = {
               useBugsnagReporting: !1
            }) {
               return (({
                  useBugsnagReporting: e
               }) => {
                  a.getCCPAConsentValue() != i.ConsentValues.DECLINED && !1 === o.GPCSignal() && o.setCCPAConsent(!1, (() => !1));
                  const t = {
                     getTrackingConsent: o.getTrackingConsent,
                     setTrackingConsent: p,
                     userCanBeTracked: o.userCanBeTracked,
                     getRegulation: o.getRegulation,
                     isRegulationEnforced: o.isRegulationEnforced,
                     getShopPrefs: o.getShopPrefs,
                     shouldShowGDPRBanner: o.shouldShowGDPRBanner,
                     userDataCanBeSold: o.userDataCanBeSold,
                     setCCPAConsent: o.setCCPAConsent,
                     getCCPAConsent: o.getCCPAConsent,
                     shouldShowCCPABanner: o.shouldShowCCPABanner,
                     doesMerchantSupportGranularConsent: o.doesMerchantSupportGranularConsent,
                     analyticsProcessingAllowed: r.analyticsProcessingAllowed,
                     preferencesProcessingAllowed: r.preferencesProcessingAllowed,
                     marketingAllowed: c,
                     firstPartyMarketingAllowed: c,
                     saleOfDataAllowed: u,
                     thirdPartyMarketingAllowed: u,
                     currentVisitorConsent: d,
                     shouldShowBanner: r.shouldShowBanner,
                     saleOfDataRegion: r.saleOfDataRegion,
                     getRegion: o.getRegion,
                     unstable: {
                        analyticsProcessingAllowed: r.analyticsProcessingAllowed,
                        preferencesProcessingAllowed: r.preferencesProcessingAllowed,
                        marketingAllowed: c,
                        saleOfDataAllowed: u,
                        currentVisitorConsent: d,
                        shouldShowBanner: r.shouldShowBanner,
                        saleOfDataRegion: r.saleOfDataRegion
                     }
                  };
                  if (!e) return t;
                  const n = ["unstable"];
                  for (const e in t) t.hasOwnProperty(e) && (t[e] = n.includes(e) ? t[e] : s.withBugsnag(t[e]));
                  return t
               })(e)
            }
         },
         5841: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(6304),
               r = n(2488),
               i = n(1449);
            const a = "_tracking_consent";

            function s() {
               const e = i.readCookie(a);
               if (void 0 !== e && ! function (e) {
                     if (e.v !== o.CookieVersion) return !0;
                     const t = Object.keys(e).filter((e => "region" !== e && "lim" !== e));
                     return !r.areArraysEqual(t, o.CookieKeys)
                  }(e)) return e
            }

            function c() {
               try {
                  let e = s();
                  if (!e) return;
                  return e
               } catch (e) {
                  return
               }
            }

            function u() {
               return {
                  m: p(o.ConsentKeys.MARKETING),
                  a: p(o.ConsentKeys.ANALYTICS),
                  p: p(o.ConsentKeys.PREFERENCES),
                  s: p(o.ConsentKeys.SALE_OF_DATA)
               }
            }

            function d(e = null) {
               return null === e && (e = c()), void 0 === e
            }

            function p(e) {
               const t = c();
               if (!t) return o.ConsentValues.NO_VALUE;
               const n = t.con.CMP;
               return n ? n[e] : o.ConsentValues.NO_VALUE
            }
            t.CONSENT_COOKIE_NAME = a, t.getCCPAConsentValue = function () {
               return u()[o.ConsentKeys.SALE_OF_DATA]
            }, t.getCMPConsentValues = u, t.getRegionValue = function () {
               const e = c();
               return d(e) ? "" : e.region || ""
            }, t.getRegulationValue = function () {
               const e = c();
               return d(e) ? o.TrackingRegulations.NO_VALUE : e.reg
            }, t.getSignal = p, t.readCookieAndTransform = c, t.setHeadlessTrackingConsent = function (e, t) {
               function n(e, t = o.ConsentValues.NO_VALUE) {
                  return !0 === e ? o.ConsentValues.ACCEPTED : !1 === e ? o.ConsentValues.DECLINED : t
               }
               const r = {
                     [o.ConsentKeys.ANALYTICS]: n(e[o.ConsentDisplayKeys.ANALYTICS], o.ConsentValues.DECLINED),
                     [o.ConsentKeys.MARKETING]: n(e[o.ConsentDisplayKeys.MARKETING], o.ConsentValues.DECLINED),
                     [o.ConsentKeys.PREFERENCES]: n(e[o.ConsentDisplayKeys.PREFERENCES], o.ConsentValues.DECLINED),
                     [o.ConsentKeys.SALE_OF_DATA]: n(e[o.ConsentDisplayKeys.SALE_OF_DATA])
                  },
                  s = {
                     v: o.CookieVersion,
                     reg: o.TrackingRegulations.NO_VALUE,
                     con: {
                        CMP: r
                     }
                  },
                  c = encodeURIComponent(JSON.stringify(s));
               i.writeCookie(a, e.rootDomain, 31536e6, c), t(null)
            }, t.transformConsentToDisplaySchema = function (e) {
               switch (e) {
                  case o.ConsentValues.ACCEPTED:
                     return o.DisplayConsentValues.ACCEPTED;
                  case o.ConsentValues.DECLINED:
                     return o.DisplayConsentValues.DECLINED;
                  default:
                     return o.DisplayConsentValues.NO_VALUE
               }
            }, t.transformKeyToDisplayName = function (e) {
               switch (e) {
                  case o.ConsentKeys.ANALYTICS:
                     return o.ConsentDisplayKeys.ANALYTICS;
                  case o.ConsentKeys.MARKETING:
                     return o.ConsentDisplayKeys.MARKETING;
                  case o.ConsentKeys.PREFERENCES:
                     return o.ConsentDisplayKeys.PREFERENCES;
                  case o.ConsentKeys.SALE_OF_DATA:
                     return o.ConsentDisplayKeys.SALE_OF_DATA
               }
            }, t.validCookieDoesNotExist = d
         },
         8920: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(3177),
               r = n(6304),
               i = n(5841),
               a = n(7560),
               s = n(3249),
               c = n(1998);

            function u() {
               if (i.validCookieDoesNotExist()) return r.DisplayConsentValues.NO_VALUE;
               const e = i.getCMPConsentValues();
               return e[r.ConsentKeys.MARKETING] === r.ConsentValues.ACCEPTED && e[r.ConsentKeys.ANALYTICS] === r.ConsentValues.ACCEPTED ? r.DisplayConsentValues.ACCEPTED : e[r.ConsentKeys.MARKETING] === r.ConsentValues.DECLINED || e[r.ConsentKeys.ANALYTICS] === r.ConsentValues.DECLINED ? r.DisplayConsentValues.DECLINED : r.DisplayConsentValues.NO_INTERACTION
            }

            function d(e) {
               return e ? l() ? document.referrer : "" : null
            }

            function p(e) {
               return e ? l() ? window.location.pathname + window.location.search : "/" : null
            }

            function l() {
               if ("" === document.referrer) return !0;
               const e = document.createElement("a");
               return e.href = document.referrer, window.location.hostname != e.hostname
            }

            function f() {
               return a.marketingProcessingAllowed() && a.analyticsProcessingAllowed()
            }

            function g() {
               return a.saleOfDataRegion() ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
            }

            function h() {
               return !1 === g() ? r.DisplayConsentValues.DECLINED : (e = i.getCCPAConsentValue(), i.validCookieDoesNotExist() ? r.DisplayConsentValues.NO_VALUE : e === r.ConsentValues.NO_VALUE ? r.DisplayConsentValues.NO_INTERACTION : i.transformConsentToDisplaySchema(e));
               var e
            }
            t.saleOfDataRegion = a.saleOfDataRegion, t.GPCSignal = g, t.doesMerchantSupportGranularConsent = function () {
               return !0
            }, t.getCCPAConsent = h, t.getLandingPageData = p, t.getRegion = function () {
               return i.getRegionValue()
            }, t.getRegulation = function () {
               const e = i.getRegulationValue();
               return e in r.TrackingRegulations ? e : r.TrackingRegulations.NO_VALUE
            }, t.getShopPrefs = function () {
               return console.warn("getShopPrefs is deprecated and will be removed."), {
                  limit: []
               }
            }, t.getTrackingConsent = u, t.hasConsentForGDPR = f, t.haveAnalyticsConsent = function () {
               return a.analyticsProcessingAllowed()
            }, t.haveMarketingConsent = function () {
               return a.marketingProcessingAllowed()
            }, t.havePreferencesConsent = function () {
               return a.preferencesProcessingAllowed()
            }, t.haveSaleOfDataConsent = function () {
               return a.saleOfDataAllowed()
            }, t.isBuyerOnFirstPageOfVisit = l, t.isRegulationEnforced = function () {
               return console.warn("isRegulationEnforced is deprecated and will be removed."), !0
            }, t.setCCPAConsent = function (e, t) {
               if ("boolean" != typeof e) throw TypeError("setCCPAConsent must be called with a boolean consent value");
               if ("function" != typeof t) throw TypeError("setCCPAConsent must be called with a callback function");
               return s.updateTrackingConsent({
                  ccpa_consent: e
               }, t)
            }, t.setTrackingConsent = function (e, t) {
               if (i.validCookieDoesNotExist() && console.warn("Shop is not configured to block privacy regulation in online store settings."), function (e) {
                     if ("boolean" != typeof e && "object" != typeof e) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                     if ("object" == typeof e) {
                        const t = Object.keys(e);
                        if (0 === t.length) throw TypeError("The submitted consent object is empty.");
                        const n = [r.ConsentDisplayKeys.MARKETING, r.ConsentDisplayKeys.ANALYTICS, r.ConsentDisplayKeys.PREFERENCES, r.ConsentDisplayKeys.SALE_OF_DATA, r.ConsentDisplayKeys.EMAIL, r.HeadlessConsentMetadata.ROOT_DOMAIN, r.HeadlessConsentMetadata.CHECKOUT_ROOT_DOMAIN, r.HeadlessConsentMetadata.STOREFRONT_ROOT_DOMAIN, r.HeadlessConsentMetadata.STOREFRONT_ACCESS_TOKEN, r.HeadlessConsentMetadata.HEADLESS_STOREFRONT];
                        for (const e of t)
                           if (!n.includes(e)) throw TypeError(`The submitted consent object should only contain the following keys: ${n.join(", ")}. Extraneous key: ${e}.`)
                     }
                  }(e), "function" != typeof t) throw TypeError("setTrackingConsent must be called with a callback function");
               if ("object" == typeof e) {
                  const n = d(e.analytics),
                     r = p(e.analytics);
                  return (e.storefrontAccessToken ? c.headlessUpdateTrackingConsent : s.updateTrackingConsent)(o.objectSpread2(o.objectSpread2({
                     granular_consent: e
                  }, null !== n && {
                     referrer: n
                  }), null !== r && {
                     landing_page: r
                  }), t)
               } {
                  const n = d(e),
                     r = p(e);
                  return s.updateTrackingConsent(o.objectSpread2(o.objectSpread2({
                     consent: e
                  }, null !== n && {
                     referrer: n
                  }), null !== r && {
                     landing_page: r
                  }), t)
               }
            }, t.shouldShowCCPABanner = function () {
               return console.warn("shouldShowCCPABanner is deprecated and will be removed."), a.saleOfDataRegion() && h() === r.DisplayConsentValues.NO_INTERACTION
            }, t.shouldShowGDPRBanner = function () {
               return a.shouldShowBanner() && u() === r.DisplayConsentValues.NO_INTERACTION
            }, t.userCanBeTracked = function () {
               return !!i.validCookieDoesNotExist() || f()
            }, t.userDataCanBeSold = function () {
               return console.warn("userDataCanBeSold is deprecated and will be replaced with saleOfDataAllowed."), a.saleOfDataAllowed()
            }
         },
         1449: function (e, t) {
            "use strict";

            function n(e) {
               return e === encodeURIComponent(decodeURIComponent(e))
            }
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.readCookie = function (e, t = null) {
               return function (e) {
                  const t = document.cookie ? document.cookie.split("; ") : [];
                  for (let n = 0; n < t.length; n++) {
                     const [o, r] = t[n].split("=");
                     if (e === decodeURIComponent(o)) return JSON.parse(decodeURIComponent(r))
                  }
               }(e) || function (e, t) {
                  if (null === t) return;
                  let n, o, r = document.head.querySelector(`meta[name=${t}]`);
                  if (r instanceof HTMLMetaElement) {
                     n = r.content;
                     try {
                        const e = n.replace(/1/g, "true").replace(/0/g, "false").split(";").map((e => e.trim())).map((e => e.split("=").map((e => e.trim()))));
                        if (o = Object.fromEntries(e), o.purposes) {
                           const e = o.purposes.split(/(true|false)/).filter(Boolean),
                              t = {};
                           for (let n = 0; n < e.length; n += 2) t[e[n]] = JSON.parse(e[n + 1]);
                           o.purposes = t
                        }
                        for (let [e, t] of Object.entries(o)) "true" === t && (o[e] = !0), "false" === t && (o[e] = !1)
                     } catch (e) {
                        return
                     }
                     return o
                  }
               }(0, t)
            }, t.resetCookieCache = function () {}, t.writeCookie = function (e, t, o, r) {
               if (!n(r)) throw new TypeError("Cookie value is not correctly URI encoded.");
               if (!n(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
               let i = `${e}=${r}`;
               i += "; path=/", i += `; domain=${t}`, i += `; expires=${new Date((new Date).getTime()+o).toUTCString()}`, i += "; secure", document.cookie = i
            }
         },
         5814: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(6304),
               r = n(7560);

            function i(e, t) {
               document.dispatchEvent(new CustomEvent(e, {
                  detail: t || {}
               }))
            }

            function a(e) {
               const t = e[o.DataProcessingPurpose.MARKETING],
                  n = e[o.DataProcessingPurpose.SALE_OF_DATA],
                  r = e[o.DataProcessingPurpose.ANALYTICS],
                  a = e[o.DataProcessingPurpose.PREFERENCES];
               !0 === t ? i(o.TrackingEvents.MARKETING_ACCEPTED) : !1 === t && i(o.TrackingEvents.MARKETING_DECLINED), !0 === n ? i(o.TrackingEvents.SALE_OF_DATA_ACCEPTED) : !1 === n && i(o.TrackingEvents.SALE_OF_DATA_DECLINED), !0 === r ? i(o.TrackingEvents.ANALYTICS_ACCEPTED) : !1 === r && i(o.TrackingEvents.ANALYTICS_DECLINED), !0 === a ? i(o.TrackingEvents.PREFERENCES_ACCEPTED) : !1 === a && i(o.TrackingEvents.PREFERENCES_DECLINED);
               const s = function (e) {
                  return {
                     marketingAllowed: e[o.DataProcessingPurpose.MARKETING],
                     saleOfDataAllowed: e[o.DataProcessingPurpose.SALE_OF_DATA],
                     analyticsAllowed: e[o.DataProcessingPurpose.ANALYTICS],
                     preferencesAllowed: e[o.DataProcessingPurpose.PREFERENCES],
                     firstPartyMarketingAllowed: e[o.DataProcessingPurpose.MARKETING],
                     thirdPartyMarketingAllowed: e[o.DataProcessingPurpose.SALE_OF_DATA]
                  }
               }(e);
               i(o.TrackingEvents.CONSENT_COLLECTED, s);
               const c = [r, a, t, n];
               c.every((e => !0 === e)) && i(o.TrackingEvents.TRACKING_ACCEPTED), c.every((e => !1 === e)) && i(o.TrackingEvents.TRACKING_DECLINED)
            }
            t.dispatchEvents = function (e) {
               void 0 !== e.consent ? a({
                  [o.DataProcessingPurpose.PREFERENCES]: e.consent,
                  [o.DataProcessingPurpose.ANALYTICS]: e.consent,
                  [o.DataProcessingPurpose.MARKETING]: e.consent,
                  [o.DataProcessingPurpose.SALE_OF_DATA]: e.consent
               }) : void 0 !== e.granular_consent && a({
                  [o.DataProcessingPurpose.PREFERENCES]: r.preferencesProcessingAllowed(),
                  [o.DataProcessingPurpose.ANALYTICS]: r.analyticsProcessingAllowed(),
                  [o.DataProcessingPurpose.MARKETING]: r.marketingProcessingAllowed(),
                  [o.DataProcessingPurpose.SALE_OF_DATA]: r.saleOfDataAllowed()
               })
            }, t.dispatchLoadedEvent = function () {
               i(o.TrackingEvents.CONSENT_TRACKING_API_LOADED)
            }
         },
         1998: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(5814),
               r = n(1449),
               i = n(5841),
               a = n(7560);

            function s(e) {
               return {
                  query: `query { consentManagement { cookies(visitorConsent: ${JSON.stringify({marketing:e.marketing,analytics:e.analytics,preferences:e.preferences,saleOfData:e.sale_of_data}).replace(/"/g,"")}) { answersCookie trackingConsentCookie } } }`,
                  variables: {}
               }
            }
            t.headlessUpdateTrackingConsent = function (e, t) {
               const n = e.granular_consent,
                  c = {
                     headers: {
                        "content-type": "application/json",
                        "x-shopify-storefront-access-token": n.storefrontAccessToken
                     },
                     body: JSON.stringify(s(n)),
                     method: "POST"
                  };
               fetch(`https://${n.checkoutRootDomain}/api/unstable/graphql.json`, c).then((e => {
                  if (e.ok) return e.json();
                  throw new Error("Server error")
               })).then((s => {
                  const c = 31536e6,
                     u = "." + (n.checkoutRootDomain || window.location.hostname),
                     d = "." + (n.storefrontRootDomain || window.location.hostname),
                     p = s.data.consentManagement.cookies.trackingConsentCookie,
                     l = s.data.consentManagement.cookies.answersCookie;
                  r.writeCookie(i.CONSENT_COOKIE_NAME, u, c, p), r.writeCookie(a.CMP_ANSWERS_COOKIE_NAME, u, c, l), d !== u && (r.writeCookie(i.CONSENT_COOKIE_NAME, d, c, p), r.writeCookie(a.CMP_ANSWERS_COOKIE_NAME, d, c, l)), o.dispatchEvents(e), t(null, s)
               })).catch((e => {
                  t({
                     error: "Error while setting headless consent: " + e.message
                  })
               }))
            }
         },
         5461: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = n(6304),
               r = n(8920),
               i = n(5841),
               a = n(7560),
               s = n(1449),
               c = n(5814),
               u = n(3142);
            Object.defineProperty(t, "ConsentKeys", {
               enumerable: !0,
               get: function () {
                  return o.ConsentKeys
               }
            }), Object.defineProperty(t, "ConsentValues", {
               enumerable: !0,
               get: function () {
                  return o.ConsentValues
               }
            }), Object.defineProperty(t, "DisplayConsentValues", {
               enumerable: !0,
               get: function () {
                  return o.DisplayConsentValues
               }
            }), Object.defineProperty(t, "TrackingEvents", {
               enumerable: !0,
               get: function () {
                  return o.TrackingEvents
               }
            }), Object.defineProperty(t, "TrackingRegulations", {
               enumerable: !0,
               get: function () {
                  return o.TrackingRegulations
               }
            }), t.getRegion = r.getRegion, t.getRegulation = r.getRegulation, t.getShopPrefs = r.getShopPrefs, t.getTrackingConsent = r.getTrackingConsent, t.userCanBeTracked = r.userCanBeTracked, t.userDataCanBeSold = r.userDataCanBeSold, t.getSignal = i.getSignal, t.shouldShowBanner = a.shouldShowBanner, t.resetCookieCache = s.resetCookieCache, t.dispatchLoadedEvent = c.dispatchLoadedEvent, t.analyticsProcessingAllowed = u.analyticsProcessingAllowed, t.currentVisitorConsent = u.currentVisitorConsent, t.marketingAllowed = u.marketingAllowed, t.preferencesProcessingAllowed = u.preferencesProcessingAllowed, t.saleOfDataAllowed = u.saleOfDataAllowed, t.setTrackingConsent = u.setTrackingConsent, t.shopifyConsentAPI = u.shopifyConsentAPI
         },
         6304: function (e, t) {
            "use strict";
            var n, o, r, i, a, s, c, u;
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.TrackingEvents = void 0, (n = t.TrackingEvents || (t.TrackingEvents = {})).TRACKING_ACCEPTED = "trackingConsentAccepted", n.TRACKING_DECLINED = "trackingConsentDeclined", n.MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", n.SALE_OF_DATA_ACCEPTED = "thirdPartyMarketingConsentAccepted", n.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", n.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", n.MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", n.SALE_OF_DATA_DECLINED = "thirdPartyMarketingConsentDeclined", n.ANALYTICS_DECLINED = "analyticsConsentDeclined", n.PREFERENCES_DECLINED = "preferencesConsentDeclined", n.CONSENT_COLLECTED = "visitorConsentCollected", n.CONSENT_TRACKING_API_LOADED = "consentTrackingApiLoaded", t.DisplayConsentValues = void 0, (o = t.DisplayConsentValues || (t.DisplayConsentValues = {})).ACCEPTED = "yes", o.DECLINED = "no", o.NO_INTERACTION = "no_interaction", o.NO_VALUE = "", t.ConsentValues = void 0, (r = t.ConsentValues || (t.ConsentValues = {})).NO_VALUE = "", r.ACCEPTED = "1", r.DECLINED = "0", t.TrackingRegulations = void 0, (i = t.TrackingRegulations || (t.TrackingRegulations = {})).GDPR = "GDPR", i.CCPA = "CCPA", i.NO_VALUE = "", t.DataProcessingPurpose = void 0, (a = t.DataProcessingPurpose || (t.DataProcessingPurpose = {})).PREFERENCES = "p", a.ANALYTICS = "a", a.MARKETING = "m", a.SALE_OF_DATA = "t", t.ConsentKeys = void 0, (s = t.ConsentKeys || (t.ConsentKeys = {})).MARKETING = "m", s.ANALYTICS = "a", s.PREFERENCES = "p", s.SALE_OF_DATA = "s", t.ConsentDisplayKeys = void 0, (c = t.ConsentDisplayKeys || (t.ConsentDisplayKeys = {})).MARKETING = "marketing", c.ANALYTICS = "analytics", c.PREFERENCES = "preferences", c.SALE_OF_DATA = "sale_of_data", c.EMAIL = "email", t.HeadlessConsentMetadata = void 0, (u = t.HeadlessConsentMetadata || (t.HeadlessConsentMetadata = {})).HEADLESS_STOREFRONT = "headlessStorefront", u.ROOT_DOMAIN = "rootDomain", u.CHECKOUT_ROOT_DOMAIN = "checkoutRootDomain", u.STOREFRONT_ROOT_DOMAIN = "storefrontRootDomain", u.STOREFRONT_ACCESS_TOKEN = "storefrontAccessToken", t.CookieKeys = ["v", "con", "reg"], t.CookieVersion = "2.1"
         },
         2488: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.areArraysEqual = function (e, t) {
               const n = t.slice().sort();
               return e.length === t.length && e.slice().sort().every(((e, t) => e === n[t]))
            }
         },
         1863: function (e, t, n) {
            e.exports = n(5461)
         },
         7385: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
               return o = Object.setPrototypeOf || {
                  __proto__: []
               }
               instanceof Array && function (e, t) {
                  e.__proto__ = t
               } || function (e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
               }, o(e, t)
            }, function (e, t) {
               function n() {
                  this.constructor = e
               }
               o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.EcommerceIntegration = t.PSEUDO_PAGE_EVENTS = t.CHECKOUT_ONE_PAGE_VIEW = t.CHECKOUT_PAYMENT_STEP_STARTED = t.CHECKOUT_SHIPPING_INFO_SUBMITTED = t.CHECKOUT_SHIPPING_STEP_STARTED = t.CHECKOUT_ADDRESS_INFO_SUBMITTED = t.CHECKOUT_CONTACT_INFO_SUBMITTED = t.CHECKOUT_CONTACT_STEP_STARTED = t.ANALYTICS_ADDED_PAYMENT = t.ANALYTICS_PERFORMED_SEARCH = t.ANALYTICS_STARTED_ORDER_ONCE_PER_CHECKOUT = t.ANALYTICS_STARTED_ORDER = t.ANALYTICS_COMPLETED_ORDER = t.ANALYTICS_ADDED_PRODUCT = t.ANALYTICS_VIEWED_PRODUCT_CATEGORY = t.ANALYTICS_VIEWED_PRODUCT = t.ANALYTICS_PAGE_VIEW = t.ANALYTICS_GENERIC_EVENT = t.analyticsEvents = void 0;
            var i = n(997),
               a = n(1102),
               s = n(6851),
               c = n(372),
               u = n(1930);
            t.analyticsEvents = {
               viewedProduct: /^[ _]?viewed[ _]?product[ _]?$/i,
               viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,
               viewedProductVariant: /^[ _]?viewed[ _]?product[ _]?variant[ _]?$/i,
               addedProduct: /^[ _]?added[ _]?product[ _]?$/i,
               completedOrder: /^[ _]?completed[ _]?order[ _]?$/i,
               startedOrder: /^[ _]?started[ _]?order[ _]?$/i,
               startedOrderOncePerCheckout: /^[ _]?started[ _]?order[ _]?once[ _]?per[ _]?checkout[ _]?$/i,
               performedSearch: /^[ _]?performed[ _]?search[ _]?$/i,
               addedPayment: /^[ _]?added[ _]?payment[ _]?$/i,
               checkoutContactStepStarted: /^[ _]?checkout[ _]?[ _]?contact[ _]?step[ _]?started[ _]?$/i,
               checkoutContactInfoSubmitted: /^[ _]?checkout[ _]?[ _]?contact[ _]?info[ _]?submitted[ _]?$/i,
               checkoutAddressInfoSubmitted: /^[ _]?checkout[ _]?[ _]?address[ _]?info[ _]?submitted[ _]?$/i,
               checkoutShippingStepStarted: /^[ _]?checkout[ _]?[ _]?shipping[ _]?step[ _]?started[ _]?$/i,
               checkoutShippingInfoSubmitted: /^[ _]?checkout[ _]?[ _]?shipping[ _]?info[ _]?submitted[ _]?$/i,
               checkoutPaymentStepStarted: /^[ _]?checkout[ _]?[ _]?payment[ _]?step[ _]?started[ _]?$/i,
               checkoutOnePageView: /^[ _]?checkout[ _]?[ _]?one[ _]?page[ _]?view[ _]?$/i
            }, t.ANALYTICS_GENERIC_EVENT = "genericEvent", t.ANALYTICS_PAGE_VIEW = "pageView", t.ANALYTICS_VIEWED_PRODUCT = "viewedProduct", t.ANALYTICS_VIEWED_PRODUCT_CATEGORY = "viewedProductCategory", t.ANALYTICS_ADDED_PRODUCT = "addedProduct", t.ANALYTICS_COMPLETED_ORDER = "completedOrder", t.ANALYTICS_STARTED_ORDER = "startedOrder", t.ANALYTICS_STARTED_ORDER_ONCE_PER_CHECKOUT = "startedOrderOncePerCheckout", t.ANALYTICS_PERFORMED_SEARCH = "performedSearch", t.ANALYTICS_ADDED_PAYMENT = "addedPayment", t.CHECKOUT_CONTACT_STEP_STARTED = "checkoutContactStepStarted", t.CHECKOUT_CONTACT_INFO_SUBMITTED = "checkoutContactInfoSubmitted", t.CHECKOUT_ADDRESS_INFO_SUBMITTED = "checkoutAddressInfoSubmitted", t.CHECKOUT_SHIPPING_STEP_STARTED = "checkoutShippingStepStarted", t.CHECKOUT_SHIPPING_INFO_SUBMITTED = "checkoutShippingInfoSubmitted", t.CHECKOUT_PAYMENT_STEP_STARTED = "checkoutPaymentStepStarted", t.CHECKOUT_ONE_PAGE_VIEW = "checkoutOnePageView", t.PSEUDO_PAGE_EVENTS = [t.CHECKOUT_CONTACT_STEP_STARTED, t.CHECKOUT_SHIPPING_STEP_STARTED, t.CHECKOUT_PAYMENT_STEP_STARTED, t.CHECKOUT_ONE_PAGE_VIEW];
            var d = function (e) {
               function n(t, n, o) {
                  var r = e.call(this, t, n, o) || this;
                  return r.wrapTrack(), r.setPixelStub(), r
               }
               return r(n, e), n.prototype.wrapTrack = function () {
                  var e = this.track;
                  this.track = function (n) {
                     var o = n.event,
                        r = !1;
                     for (var i in t.analyticsEvents) {
                        var a = t.analyticsEvents[i];
                        if (this[i] && a.test(o)) {
                           this[i].apply(this, [n]), r = !0;
                           break
                        }
                     }
                     r || e.apply(this, Array.prototype.slice.call(arguments))
                  }
               }, n.prototype.addMonorailBatchEvent = function (e) {
                  if (s.default.appName && s.default.appName in u.appNameToEcommerceEventSchemaId) {
                     var t = this.getEcommercePixelIds();
                     i.addBatchEvent({
                        schemaId: e.schemaId ? e.schemaId : u.appNameToEcommerceEventSchemaId[s.default.appName],
                        payload: a.objectAssignFilterUndefined({
                           shop_id: s.default.shopId,
                           partner_name: this.getEcommerceMetricsTag(),
                           event_name: e.eventName,
                           unique_token: s.default.uniqToken,
                           visit_token: s.default.visitToken,
                           integration_id: this.getIntegrationId()
                        }, {
                           pixel_id: t && t.length > 0 ? t[0] : void 0,
                           event_properties: e.eventProperties,
                           checkout_token: s.default.checkoutToken,
                           event_id: e.eventId
                        })
                     })
                  }
               }, n
            }(c.Integration);
            t.EcommerceIntegration = d
         },
         372: function (e, t) {
            "use strict";
            var n = this && this.__assign || function () {
               return n = Object.assign || function (e) {
                  for (var t, n = 1, o = arguments.length; n < o; n++)
                     for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e
               }, n.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.Integration = void 0;
            var o = function () {
               function e(e, t, o) {
                  this.state = null, this.deferedEvents = new Set, this.options = {}, this.options = n(n({}, e), t), this.ready = o
               }
               return e.prototype.initializeOrAwaitConsent = function () {
                  null === this.state && (this.hasConsent() ? this.initialize(this.options) : this.awaitConsent())
               }, e.prototype.awaitConsent = function () {
                  this.state = "awaiting-consent", this.ready()
               }, e.prototype.initialize = function (e) {
                  this.state = "initialized", this.ready()
               }, e.prototype.onConsentCollected = function (e) {
                  var t = this;
                  this.hasConsent(e) && ("awaiting-consent" === this.state && this.initialize(), "initialized" === this.state && this.deferedEvents.size > 0 && this.deferedEvents.forEach((function (e, n, o) {
                     var r = e[0],
                        i = e[1];
                     o.delete(n), t.callEvent(r, i)
                  })))
               }, e.prototype.emitEventOrAwaitConsent = function (e, t) {
                  this.hasConsent() ? this.callEvent(e, t) : this.deferedEvents.add([e, t])
               }, e.prototype.callEvent = function (e, t) {
                  switch (e) {
                     case "page":
                        this.page(t);
                        break;
                     case "track":
                        this.track(t)
                  }
               }, e.prototype.checkoutOnePageView = function (e) {
                  if (e.properties.hasOwnProperty("page")) {
                     var t = e.properties;
                     this.page(t.page)
                  }
               }, e.flatten = function (e) {
                  var t = n({}, e);
                  return t.properties = {}, n(n({}, t), e.properties)
               }, e.isEqual = function (e, t) {
                  for (var n in e)
                     if (e[n] !== t[n]) return !1;
                  for (var n in t)
                     if (t[n] !== e[n]) return !1;
                  return !0
               }, e
            }();
            t.Integration = o
         },
         1930: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.extractSchemaIdFromEventName = t.buyWithPrimePresenceSchemaId = t.trekkieAssetContextSchemaId = t.customStorefrontAnalyticsSchemaId = t.storefrontAnalyticsSchemaIdValidation = t.storefrontAnalyticsSchemaId = t.appNameToEcommerceEventSchemaId = t.appNameToPageViewSchemaId = void 0, t.appNameToPageViewSchemaId = {
               admin: "trekkie_admin_page_view/1.0",
               appstore: "trekkie_appstore_page_view/1.2",
               blog: "trekkie_blog_page_view/1.2",
               brochure: "trekkie_brochure_page_view/1.3",
               checkout: "trekkie_checkout_page_view/1.2",
               "collabs-merchants": "trekkie_collabs_merchants_page_view/1.0",
               "compass-web": "trekkie_compass_web_page_view/1.2",
               creators: "trekkie_creators_page_view/2.0",
               delivery_app: "trekkie_delivery_app_page_view/1.0",
               docs: "trekkie_docs_page_view/1.2",
               development: "edge_test/1.0",
               exchange: "trekkie_exchange_page_view/1.2",
               experts: "trekkie_experts_page_view/1.0",
               handshake: "trekkie_handshake_page_view/1.0",
               fakestore: "trekkie_fakestore_page_view/1.0",
               identity: "trekkie_identity_page_view/1.2",
               linkpop: "trekkie_linkpop_page_view/2.0",
               "marketing-misc": "trekkie_marketing_misc_page_view/1.2",
               "oberlo-home": "trekkie_oberlo_home_page_view/1.3",
               opinions: "trekkie_opinions_page_view/1.2",
               partners: "trekkie_partners_page_view/1.2",
               "shopify-ping-web": "trekkie_shopify_ping_web_page_view/1.0",
               portal: "trekkie_portal_page_view/1.0",
               storefront: "trekkie_storefront_page_view/1.2",
               testing: "edge_test/1.0",
               themestore: "trekkie_themestore_page_view/1.2",
               "services-db": "trekkie_services_db_page_view/1.0"
            }, t.appNameToEcommerceEventSchemaId = {
               storefront: "trekkie_storefront_ecommerce_event_emit/4.0",
               checkout: "trekkie_checkout_ecommerce_event_emit/4.0",
               test: "edge_test_ecommerce_event_emit/1.0"
            }, t.storefrontAnalyticsSchemaId = "storefront_customer_tracking/4.12", t.storefrontAnalyticsSchemaIdValidation = "storefront_customer_tracking_validation/1.0", t.customStorefrontAnalyticsSchemaId = "custom_storefront_customer_tracking/1.1", t.trekkieAssetContextSchemaId = "trekkie_asset_context/1.1", t.buyWithPrimePresenceSchemaId = "storefront_buy_with_prime_presence/1.0", t.extractSchemaIdFromEventName = function (e) {
               var t = e.toLowerCase();
               if (0 === t.lastIndexOf("monorail://") && t.length > 11) return t.substr(11)
            }
         },
         542: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.ConsentValuesV2 = t.IntegrationTypes = t.ConsentPurposes = void 0;
            var o = n(1863);
            Object.defineProperty(t, "ConsentPurposes", {
               enumerable: !0,
               get: function () {
                  return o.ConsentKeys
               }
            });
            var r, i = n(6222);
            Object.defineProperty(t, "IntegrationTypes", {
               enumerable: !0,
               get: function () {
                  return i.IntegrationTypes
               }
            }), (r = t.ConsentValuesV2 || (t.ConsentValuesV2 = {})).NO_VALUE = "", r.ACCEPTED = "1", r.DECLINED = "0"
         },
         6222: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.IntegrationTypes = void 0, (n = t.IntegrationTypes || (t.IntegrationTypes = {})).ECOMMERCE = "EcommerceIntegration", n.INTEGRATION = "Integration"
         },
         8878: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
                  return o = Object.setPrototypeOf || {
                     __proto__: []
                  }
                  instanceof Array && function (e, t) {
                     e.__proto__ = t
                  } || function (e, t) {
                     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                  }, o(e, t)
               }, function (e, t) {
                  function n() {
                     this.constructor = e
                  }
                  o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
               }),
               i = this && this.__assign || function () {
                  return i = Object.assign || function (e) {
                     for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                     return e
                  }, i.apply(this, arguments)
               };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.FacebookPixel = void 0;
            var a = n(7385),
               s = n(1503),
               c = n(7662),
               u = n(1102),
               d = n(542),
               p = n(7662),
               l = n(2724),
               f = function (e) {
                  function t(n, o, r) {
                     var a = e.call(this, t.defaultOptions, i(i({}, o), {
                        agent: "shopify"
                     }), r) || this;
                     return a.campaignManager = new l.CampaignManager, a
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     this.setPixelStub(), this.loadFacebookScript();
                     for (var t = this.options, n = 0, o = this.getFacebookPixelIds(t); n < o.length; n++) {
                        var r = o[n];
                        c.saleOfDataNotAllowed() && this.setLimitedDataUseMode(), window.fbq("init", r), "" !== t.agent && window.fbq("set", "agent", t.agent, r)
                     }
                     e.prototype.initialize.call(this)
                  }, t.prototype.name = function () {
                     return "Facebook Pixel"
                  }, t.prototype.type = function () {
                     return d.IntegrationTypes.ECOMMERCE
                  }, t.prototype.hasConsent = function (e) {
                     return p.marketingAllowed(e)
                  }, t.prototype.identify = function (e) {
                     throw new Error("identify is not supported")
                  }, t.prototype.page = function (e) {
                     this.emitEvent("PageView", e.eventId, a.ANALYTICS_PAGE_VIEW)
                  }, t.prototype.track = function (e) {
                     var t = {};
                     for (var n in e.properties) "revenue" === n ? t.value = this.formatRevenue(e.properties.revenue) : t[n] = e.properties[n]
                  }, t.prototype.viewedProductCategory = function (e) {}, t.prototype.viewedProductVariant = function (e) {}, t.prototype.viewedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           content_ids: this.getProductContentIds(t),
                           content_type: this.getProductContentType(t),
                           content_name: t.name || "",
                           content_category: t.category || "",
                           currency: this.getCurrency(t.currency),
                           value: this.formatRevenue(t.price)
                        };
                     this.emitEvent("ViewContent", e.eventId, a.ANALYTICS_VIEWED_PRODUCT, n)
                  }, t.prototype.addedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           content_ids: this.getProductContentIds(t),
                           content_type: this.getProductContentType(t),
                           content_name: t.name || "",
                           content_category: t.category || "",
                           currency: this.getCurrency(t.currency),
                           value: this.formatRevenue(t.price),
                           num_items: this.getProductNumItems(t)
                        };
                     this.emitEvent("AddToCart", e.eventId, a.ANALYTICS_ADDED_PRODUCT, n)
                  }, t.prototype.addedPayment = function (e) {
                     var t = e.properties,
                        n = {
                           currency: this.getCurrency(t.currency),
                           value: this.formatRevenue(t.total)
                        };
                     this.emitEvent("AddPaymentInfo", e.eventId, a.ANALYTICS_ADDED_PAYMENT, n)
                  }, t.prototype.performedSearch = function (e) {
                     var t = {
                        search_string: e.properties.query || ""
                     };
                     this.emitEvent("Search", e.eventId, a.ANALYTICS_PERFORMED_SEARCH, t)
                  }, t.prototype.startedOrder = function (e) {
                     var t = e.properties,
                        n = {
                           content_ids: this.getOrderContentIds(t),
                           content_type: this.getOrderContentType(t),
                           currency: this.getCurrency(t.currency),
                           value: this.formatRevenue(t.revenue),
                           num_items: this.getOrderNumItems(t)
                        };
                     this.emitEvent("InitiateCheckout", e.eventId, a.ANALYTICS_STARTED_ORDER, n)
                  }, t.prototype.completedOrder = function (e) {
                     var t = e.properties,
                        n = {
                           content_ids: this.getOrderContentIds(t),
                           content_type: this.getOrderContentType(t),
                           currency: this.getCurrency(t.currency),
                           value: this.formatRevenue(t.revenue),
                           num_items: this.getOrderNumItems(t)
                        };
                     this.emitEvent("Purchase", e.eventId, a.ANALYTICS_COMPLETED_ORDER, n)
                  }, t.prototype.emitEvent = function (e, t, n, o) {
                     void 0 === o && (o = {}), window.fbq("track", e, o, {
                        eventID: t
                     }), this.addMonorailBatchEvent(u.objectAssignFilterUndefined({
                        eventName: n
                     }, {
                        eventId: t,
                        eventProperties: JSON.stringify(o)
                     }))
                  }, t.prototype.setLimitedDataUseMode = function () {
                     window.fbq("dataProcessingOptions", ["LDU"], 1, 1e3)
                  }, t.prototype.setPixelStub = function () {
                     window.fbq && "function" == typeof window.fbq || (window.fbq = function () {
                        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments)
                     }, window._fbq || (window._fbq = window.fbq), window.fbq.push = window.fbq, window.fbq.loaded = !0, window.fbq.version = "2.0", window.fbq.queue = [])
                  }, t.prototype.generateScriptTag = function () {
                     var e = s.virtualDocument().createElement("script");
                     return e.async = !0, e.src = "https://connect.facebook.net/en_US/fbevents.js", e
                  }, t.prototype.getFacebookPixelIds = function (e) {
                     for (var t = [], n = 0, o = e.pixelIds.concat([e.pixelId]); n < o.length; n++) {
                        var r = o[n];
                        null !== r && "" !== r && t.push(r)
                     }
                     return t
                  }, t.prototype.loadFacebookScript = function () {
                     var e = s.virtualDocument().getElementsByTagName("script")[0];
                     void 0 === e ? document.head.appendChild(this.generateScriptTag()) : e.parentNode.insertBefore(this.generateScriptTag(), e)
                  }, t.prototype.formatRevenue = function (e) {
                     return Number(e || 0).toFixed(2)
                  }, t.prototype.getCurrency = function (e) {
                     return e || "USD"
                  }, t.prototype.getProductContentIds = function (e) {
                     var t = e.productId || e.variantId || e.sku;
                     return t ? [t] : []
                  }, t.prototype.getProductContentType = function (e) {
                     return e.productId ? "product_group" : "product"
                  }, t.prototype.getProductNumItems = function (e) {
                     return e.quantity || this.getProductContentIds(e).length
                  }, t.prototype.getProductKey = function (e) {
                     return e.productId || e.variantId || e.sku
                  }, t.prototype.getOrderContentIds = function (e) {
                     for (var t = [], n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n],
                           i = this.getProductKey(r);
                        i && -1 === t.indexOf(i) && t.push(i)
                     }
                     return t
                  }, t.prototype.getOrderContentType = function (e) {
                     for (var t = 0, n = e.products || []; t < n.length; t++)
                        if (n[t].productId) return "product_group";
                     return "product"
                  }, t.prototype.getOrderNumItems = function (e) {
                     for (var t = 0, n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n];
                        this.getProductKey(r) && (t += r.quantity || 1)
                     }
                     return t
                  }, t.prototype.getEcommerceMetricsTag = function () {
                     return "facebook"
                  }, t.prototype.getIntegrationId = function () {
                     return "FacebookPixel"
                  }, t.prototype.getEcommercePixelIds = function () {
                     var e = this.options;
                     return this.getFacebookPixelIds(e)
                  }, t.defaultOptions = {
                     pixelId: "",
                     pixelIds: [],
                     agent: "shopify"
                  }, t
               }(a.EcommerceIntegration);
            t.FacebookPixel = f
         },
         7575: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
                  return o = Object.setPrototypeOf || {
                     __proto__: []
                  }
                  instanceof Array && function (e, t) {
                     e.__proto__ = t
                  } || function (e, t) {
                     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                  }, o(e, t)
               }, function (e, t) {
                  function n() {
                     this.constructor = e
                  }
                  o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
               }),
               i = this && this.__assign || function () {
                  return i = Object.assign || function (e) {
                     for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                     return e
                  }, i.apply(this, arguments)
               };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.GoogleAnalytics = void 0;
            var a = n(7385),
               s = n(725),
               c = n(1503),
               u = n(542),
               d = n(7662),
               p = n(3552),
               l = function (e) {
                  function t(n, o, r) {
                     var i = e.call(this, t.defaultOptions, o, r) || this;
                     return i.pageCalled = !1, i.ecommerce = !1, i.enhancedEcommerceLoaded = !1, i
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     this.pageCalled = !1, this.setPixelStub(), this.loadGAScript();
                     var n = this.options;
                     "localhost" === s.hostname() && (n.domain = "none"), n.enhancedEcommerce && this.enhancedEcommerce(), p.shouldSetGoogleConsentMode() && window.gtag("consent", "default", p.generateGoogleConsentModeObject()), window.ga("create", n.trackingId, {
                        cookieDomain: n.domain || t.defaultOptions.domain,
                        siteSpeedSampleRate: n.siteSpeedSampleRate,
                        sampleRate: n.sampleRate,
                        allowLinker: !0
                     }), n.doubleClick && window.ga("require", "displayfeatures"), n.enhancedLinkAttribution && window.ga("require", "linkid"), n.anonymizeIp && window.ga("set", "anonymizeIp", !0), e.prototype.initialize.call(this)
                  }, t.prototype.name = function () {
                     return "Google Analytics"
                  }, t.prototype.type = function () {
                     return u.IntegrationTypes.ECOMMERCE
                  }, t.prototype.onConsentCollected = function (t) {
                     p.shouldSetGoogleConsentMode() && window.gtag("consent", "update", p.generateGoogleConsentModeObject()), d.analyticsProcessingAllowed() ? delete window["ga-disable-" + this.options.trackingId] : window["ga-disable-" + this.options.trackingId] = !0, e.prototype.onConsentCollected.call(this, t)
                  }, t.prototype.hasConsent = function (e) {
                     return d.analyticsProcessingAllowed(e)
                  }, t.prototype.identify = function (e) {
                     throw new Error("identify is not supported")
                  }, t.prototype.pseudoPageFromTrack = function (e) {
                     if (e.properties.hasOwnProperty("page")) {
                        var t = e.properties.page;
                        this.pageCalled && (t.search = ""), this.page(t)
                     }
                  }, t.prototype.checkoutContactStepStarted = function (e) {
                     this.pseudoPageFromTrack(e)
                  }, t.prototype.checkoutShippingStepStarted = function (e) {
                     this.pseudoPageFromTrack(e)
                  }, t.prototype.checkoutPaymentStepStarted = function (e) {
                     this.pseudoPageFromTrack(e)
                  }, t.prototype.checkoutOnePageView = function (e) {}, t.prototype.page = function (e) {
                     this.overrideDefaultPageProperties(e);
                     var t = this.options,
                        n = this.path(e),
                        o = e.name || e.title,
                        r = {
                           page: n,
                           title: o
                        };
                     window.ga("set", r);
                     var i = {
                        page: n,
                        title: o,
                        location: e.url
                     };
                     if (this.pageCalled && delete i.location, window.ga("send", "pageview", i), this.addMonorailBatchEvent({
                           eventName: a.ANALYTICS_PAGE_VIEW,
                           eventProperties: JSON.stringify(i)
                        }), e.name && t.trackNamedPages) {
                        var s = this.convertPageToTrack(e);
                        s.properties.nonInteraction = !0, this.trackInternal(s)
                     }
                     this.pageCalled = !0
                  }, t.prototype.track = function (e) {}, t.prototype.trackInternal = function (e) {
                     var t = this.options,
                        n = e.properties,
                        o = {
                           eventAction: e.event,
                           eventCategory: n.category || "All",
                           eventLabel: n.label,
                           eventValue: this.formatValue(n.value || n.revenue),
                           nonInteraction: Boolean(n.hasOwnProperty("nonInteraction") ? n.nonInteraction : t.nonInteraction)
                        };
                     window.ga("send", "event", o), this.addMonorailBatchEvent({
                        eventName: a.ANALYTICS_GENERIC_EVENT,
                        eventProperties: JSON.stringify(o)
                     })
                  }, t.prototype.completedOrder = function (e) {
                     var t = e.properties,
                        n = t.total || t.revenue || 0,
                        o = this.getTransactionId(t),
                        r = t.products || [];
                     if (o) {
                        this.ecommerce || (window.ga("require", "ecommerce"), this.ecommerce = !0);
                        var i = {
                           shipping: t.shipping,
                           revenue: n,
                           tax: t.tax,
                           id: o,
                           currency: this.getCurrency(t.currency)
                        };
                        window.ga("ecommerce:addTransaction", i);
                        for (var s = [], c = 0, u = r; c < u.length; c++) {
                           var d = u[c],
                              p = this.createProductTrack(t, d),
                              l = {
                                 category: p.category,
                                 quantity: this.getProductQuantity(p),
                                 price: p.price,
                                 name: p.name,
                                 sku: p.sku || p.variantId,
                                 id: o,
                                 currency: this.getCurrency(p.currency)
                              };
                           window.ga("ecommerce:addItem", l), s.push(l)
                        }
                        window.ga("ecommerce:send"), this.addMonorailBatchEvent({
                           eventName: a.ANALYTICS_COMPLETED_ORDER,
                           eventProperties: JSON.stringify({
                              orderInfo: i,
                              items: s
                           })
                        })
                     }
                  }, t.prototype.viewedProductVariant = function (e) {}, t.prototype.viewedProductEnhanced = function (e) {
                     var t = e.properties;
                     this.loadEnhancedEcommerce(e);
                     var n = this.enhancedEcommerceTrackProduct(t);
                     window.ga("ec:setAction", "detail");
                     var o = this.pushEnhancedEcommerce(e);
                     this.addMonorailBatchEvent({
                        eventName: a.ANALYTICS_VIEWED_PRODUCT,
                        eventProperties: JSON.stringify({
                           item: n,
                           event: o
                        })
                     })
                  }, t.prototype.addedProductEnhanced = function (e) {
                     var t = e.properties;
                     this.loadEnhancedEcommerce(e);
                     var n = this.enhancedEcommerceTrackProduct(t);
                     window.ga("ec:setAction", "add");
                     var o = this.pushEnhancedEcommerce(e);
                     this.addMonorailBatchEvent({
                        eventName: a.ANALYTICS_ADDED_PRODUCT,
                        eventProperties: JSON.stringify({
                           item: n,
                           event: o
                        })
                     })
                  }, t.prototype.startedOrderEnhanced = function (e) {
                     var t = e.properties,
                        n = t.products || [];
                     this.loadEnhancedEcommerce(e);
                     for (var o = [], r = 0, i = n; r < i.length; r++) {
                        var s = i[r],
                           c = this.createProductTrack(t, s),
                           u = this.enhancedEcommerceTrackProduct(c);
                        o.push(u)
                     }
                     var d = t.step || 1;
                     window.ga("ec:setAction", "checkout", {
                        step: d
                     });
                     var p = this.pushEnhancedEcommerce(e);
                     this.addMonorailBatchEvent({
                        eventName: a.ANALYTICS_STARTED_ORDER,
                        eventProperties: JSON.stringify({
                           items: o,
                           checkoutStep: d,
                           event: p
                        })
                     })
                  }, t.prototype.completedOrderEnhanced = function (e) {
                     var t = e.properties,
                        n = t.total || t.revenue || 0,
                        o = this.getTransactionId(t),
                        r = t.products || [];
                     if (o) {
                        this.loadEnhancedEcommerce(e);
                        for (var i = [], s = 0, c = r; s < c.length; s++) {
                           var u = c[s],
                              d = this.createProductTrack(t, u),
                              p = this.enhancedEcommerceTrackProduct(d);
                           i.push(p)
                        }
                        var l = {
                           id: o,
                           revenue: n,
                           tax: t.tax,
                           shipping: t.shipping,
                           coupon: t.coupon
                        };
                        window.ga("ec:setAction", "purchase", l);
                        var f = this.pushEnhancedEcommerce(e);
                        this.addMonorailBatchEvent({
                           eventName: a.ANALYTICS_COMPLETED_ORDER,
                           eventProperties: JSON.stringify({
                              orderInfo: l,
                              items: i,
                              event: f
                           })
                        })
                     }
                  }, t.prototype.setPixelStub = function () {
                     (!window.ga || window.ga && "function" != typeof window.ga) && (window.ga = function () {
                        (window.ga.q = window.ga.q || []).push(arguments)
                     }), (!window.gtag || window.gtag && "function" != typeof window.gtag) && (window.dataLayer = window.dataLayer || [], window.gtag = function () {
                        window.dataLayer.push(arguments)
                     })
                  }, t.prototype.loadGAScript = function () {
                     window.GoogleAnalyticsObject = "ga", window.ga.l = (new Date).getTime();
                     var e = c.virtualDocument().createElement("script");
                     e.async = !0, e.src = "https://www.google-analytics.com/analytics.js";
                     var t = c.virtualDocument().getElementsByTagName("script")[0];
                     void 0 === t ? document.head.appendChild(e) : t.parentNode.insertBefore(e, t)
                  }, t.prototype.enhancedEcommerce = function () {
                     this.viewedProduct = this.viewedProductEnhanced, this.addedProduct = this.addedProductEnhanced, this.startedOrder = this.startedOrderEnhanced, this.completedOrder = this.completedOrderEnhanced
                  }, t.prototype.path = function (e) {
                     var t = e.path;
                     return this.options.includeSearch && e.search && (t += e.search), t
                  }, t.prototype.formatValue = function (e) {
                     return !e || e < 0 ? 0 : Math.round(e)
                  }, t.prototype.getProductQuantity = function (e) {
                     return e.quantity || 1
                  }, t.prototype.getCurrency = function (e) {
                     return e || "USD"
                  }, t.prototype.createProductTrack = function (e, t) {
                     var n = i({}, t);
                     return n.currency = t.currency || this.getCurrency(e.currency), n
                  }, t.prototype.loadEnhancedEcommerce = function (e) {
                     this.enhancedEcommerceLoaded || (window.ga("require", "ec"), this.enhancedEcommerceLoaded = !0);
                     var t = e.properties;
                     window.ga("set", "&cu", this.getCurrency(t.currency))
                  }, t.prototype.enhancedEcommerceTrackProduct = function (e) {
                     var t = {
                        id: e.sku || e.variantId,
                        name: e.name,
                        category: e.category,
                        quantity: this.getProductQuantity(e),
                        price: e.price,
                        brand: e.brand,
                        variant: e.variant,
                        currency: this.getCurrency(e.currency)
                     };
                     return e.coupon && (t.coupon = e.coupon), window.ga("ec:addProduct", t), t
                  }, t.prototype.pushEnhancedEcommerce = function (e) {
                     var t = e.properties,
                        n = {
                           eventCategory: t.category || "EnhancedEcommerce",
                           eventAction: e.event || "Action not defined",
                           eventLabel: t.label,
                           nonInteraction: !0
                        };
                     return window.ga("send", "event", n), n
                  }, t.prototype.convertPageToTrack = function (e) {
                     return {
                        event: e.name ? "Viewed " + e.name + " Page" : "Loaded a Page",
                        properties: e.properties,
                        eventId: e.eventId
                     }
                  }, t.prototype.overrideDefaultPageProperties = function (e) {
                     for (var t in e.properties) "properties" !== t && "name" !== t && t in e && (e[t] = e.properties[t])
                  }, t.prototype.getEcommerceMetricsTag = function () {
                     return "google_analytics"
                  }, t.prototype.getIntegrationId = function () {
                     return "GoogleAnalytics"
                  }, t.prototype.getEcommercePixelIds = function () {
                     return [this.options.trackingId]
                  }, t.prototype.getTransactionId = function (e) {
                     return e.orderId || e.checkoutId
                  }, t.defaultOptions = {
                     anonymizeIp: !1,
                     domain: "auto",
                     doubleClick: !1,
                     enhancedEcommerce: !1,
                     enhancedLinkAttribution: !1,
                     includeSearch: !1,
                     nonInteraction: !1,
                     siteSpeedSampleRate: 1,
                     sampleRate: 100,
                     trackNamedPages: !0,
                     trackingId: ""
                  }, t
               }(a.EcommerceIntegration);
            t.GoogleAnalytics = l
         },
         5087: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
               return o = Object.setPrototypeOf || {
                  __proto__: []
               }
               instanceof Array && function (e, t) {
                  e.__proto__ = t
               } || function (e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
               }, o(e, t)
            }, function (e, t) {
               function n() {
                  this.constructor = e
               }
               o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.GoogleGtag = void 0;
            var i = n(7385),
               a = n(5522),
               s = n(7662),
               c = n(542),
               u = n(7662),
               d = n(3552),
               p = function (e) {
                  function t(t, n, o) {
                     return e.call(this, t, n, o) || this
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     var t = this.options,
                        n = {
                           send_page_view: !1
                        };
                     this.setPixelStub(), this.loadGtagScript(), s.saleOfDataNotAllowed() && (n.restricted_data_processing = !0), d.shouldSetGoogleConsentMode() && window.gtag("consent", "default", d.generateGoogleConsentModeObject()), t.ignoreReferrer && (window.gtag("set", {
                        ignore_referrer: "true"
                     }), n.ignore_referrer = "true"), window.gtag("config", t.conversionId, n), e.prototype.initialize.call(this)
                  }, t.prototype.name = function () {
                     return "Google Gtag Pixel"
                  }, t.prototype.type = function () {
                     return c.IntegrationTypes.ECOMMERCE
                  }, t.prototype.onConsentCollected = function (t) {
                     d.shouldSetGoogleConsentMode() && window.gtag("consent", "update", d.generateGoogleConsentModeObject()), e.prototype.onConsentCollected.call(this, t)
                  }, t.prototype.hasConsent = function (e) {
                     return u.analyticsProcessingAllowed(e) || u.marketingAllowed(e)
                  }, t.prototype.identify = function (e) {
                     throw new Error("identify is not supported")
                  }, t.prototype.track = function (e) {}, t.prototype.setPixelStub = function () {
                     (!window.dataLayer || window.dataLayer && !Array.isArray(window.dataLayer)) && (window.dataLayer = []), (!window.gtag || window.gtag && "function" != typeof window.gtag) && (window.gtag = function () {
                        window.dataLayer.push(arguments)
                     })
                  }, t.prototype.loadGtagScript = function () {
                     var e = this.options;
                     window.gtag("js", new Date), a.script({
                        src: "https://www.googletagmanager.com/gtag/js?id=" + e.conversionId
                     })
                  }, t.prototype.page = function (e) {
                     var t = "page_view",
                        n = {
                           send_to: this.gtagEventLabelFor(t),
                           page_path: e.path || "",
                           page_title: e.name || e.title,
                           page_location: e.url
                        };
                     this.options.ignoreReferrer && (n.ignore_referrer = "true"), window.gtag("event", t, n), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_PAGE_VIEW,
                        eventProperties: JSON.stringify(n)
                     })
                  }, t.prototype.viewedProduct = function (e) {
                     var t = "view_item",
                        n = e.properties,
                        o = {
                           send_to: this.gtagEventLabelFor(t),
                           ecomm_prodid: [this.computeEcommProductId(n)],
                           ecomm_totalvalue: n.price * n.quantity,
                           ecomm_pagetype: "product",
                           items: [{
                              id: this.computeEcommProductId(n),
                              name: n.name,
                              brand: n.brand,
                              category: n.category,
                              coupon: n.coupon,
                              price: n.price.toString(),
                              quantity: n.quantity,
                              variant: n.variant
                           }]
                        };
                     window.gtag("event", t, o), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_VIEWED_PRODUCT,
                        eventProperties: JSON.stringify(o)
                     })
                  }, t.prototype.addedProduct = function (e) {
                     var t = "add_to_cart",
                        n = e.properties,
                        o = {
                           send_to: this.gtagEventLabelFor(t),
                           ecomm_prodid: [this.computeEcommProductId(n)],
                           ecomm_totalvalue: n.price * n.quantity,
                           ecomm_pagetype: "cart",
                           value: n.price * n.quantity,
                           currency: n.currency || "USD",
                           items: [{
                              id: this.computeEcommProductId(n),
                              name: n.name,
                              brand: n.brand,
                              category: n.category,
                              coupon: n.coupon,
                              price: n.price.toString(),
                              quantity: n.quantity,
                              variant: n.variant
                           }]
                        };
                     window.gtag("event", t, o), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_ADDED_PRODUCT,
                        eventProperties: JSON.stringify(o)
                     })
                  }, t.prototype.completedOrder = function (e) {
                     var t = this,
                        n = "purchase",
                        o = e.properties,
                        r = {
                           send_to: this.gtagEventLabelFor(n),
                           transaction_id: this.getTransactionId(o),
                           value: o.revenue,
                           currency: o.currency || "USD",
                           tax: o.tax.toString(),
                           shipping: o.shipping.toString(),
                           items: o.products.map((function (e) {
                              return {
                                 id: t.computeEcommProductId(e),
                                 name: e.name,
                                 brand: e.brand,
                                 category: e.category,
                                 coupon: e.coupon,
                                 price: e.price.toString(),
                                 quantity: e.quantity,
                                 variant: e.variant
                              }
                           }))
                        };
                     this.options.ignoreReferrer && (r.ignore_referrer = "true"), window.gtag("event", n, r), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_COMPLETED_ORDER,
                        eventProperties: JSON.stringify(r)
                     })
                  }, t.prototype.startedOrder = function (e) {
                     var t = this,
                        n = "begin_checkout",
                        o = e.properties,
                        r = {
                           send_to: this.gtagEventLabelFor(n),
                           ecomm_prodid: o.products.map((function (e) {
                              return t.computeEcommProductId(e)
                           })),
                           ecomm_totalvalue: this.cartTotalValue(o.products),
                           ecomm_pagetype: "cart",
                           value: o.revenue,
                           currency: o.currency || "USD",
                           items: o.products.map((function (e) {
                              return {
                                 id: t.computeEcommProductId(e),
                                 name: e.name,
                                 brand: e.brand,
                                 category: e.category,
                                 coupon: e.coupon,
                                 price: e.price.toString(),
                                 quantity: e.quantity,
                                 variant: e.variant
                              }
                           })),
                           coupon: o.coupon
                        };
                     this.options.ignoreReferrer && (r.ignore_referrer = "true"), window.gtag("event", n, r), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_STARTED_ORDER,
                        eventProperties: JSON.stringify(r)
                     })
                  }, t.prototype.performedSearch = function (e) {
                     var t = "search",
                        n = e.properties,
                        o = {
                           send_to: this.gtagEventLabelFor(t),
                           search_term: n.query
                        };
                     window.gtag("event", t, o), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_PERFORMED_SEARCH,
                        eventProperties: JSON.stringify(o)
                     })
                  }, t.prototype.addedPayment = function (e) {
                     var t = "add_payment_info",
                        n = e.properties,
                        o = {
                           send_to: this.gtagEventLabelFor(t),
                           currency: n.currency,
                           total: n.total
                        };
                     this.options.ignoreReferrer && (o.ignore_referrer = "true"), window.gtag("event", t, o), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_ADDED_PAYMENT,
                        eventProperties: JSON.stringify(o)
                     })
                  }, t.prototype.computeEcommProductId = function (e) {
                     return "shopify_" + this.targetCountry() + "_" + e.productId + "_" + e.variantId
                  }, t.prototype.cartTotalValue = function (e) {
                     for (var t = 0, n = 0, o = e; n < o.length; n++) {
                        var r = o[n];
                        t += r.price * r.quantity
                     }
                     return t
                  }, t.prototype.targetCountry = function () {
                     return this.options.targetCountry || "US"
                  }, t.prototype.gtagEventLabelFor = function (e) {
                     for (var t = 0, n = this.options.eventLabels; t < n.length; t++) {
                        var o = n[t];
                        if (o.type === e) return o.action_label
                     }
                  }, t.prototype.getEcommerceMetricsTag = function () {
                     return "google_gtag"
                  }, t.prototype.getEcommercePixelIds = function () {
                     return [this.options.conversionId]
                  }, t.prototype.getIntegrationId = function () {
                     return "GoogleGtag"
                  }, t.prototype.getTransactionId = function (e) {
                     return e.orderId || e.checkoutId
                  }, t
               }(i.EcommerceIntegration);
            t.GoogleGtag = p
         },
         8142: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
                  return o = Object.setPrototypeOf || {
                     __proto__: []
                  }
                  instanceof Array && function (e, t) {
                     e.__proto__ = t
                  } || function (e, t) {
                     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                  }, o(e, t)
               }, function (e, t) {
                  function n() {
                     this.constructor = e
                  }
                  o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
               }),
               i = this && this.__assign || function () {
                  return i = Object.assign || function (e) {
                     for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                     return e
                  }, i.apply(this, arguments)
               };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.Pinterest = void 0;
            var a = n(7385),
               s = n(1102),
               c = n(542),
               u = n(7662),
               d = function (e) {
                  function t(n, o, r) {
                     return e.call(this, t.defaultOptions, o, r) || this
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     var t = this.options;
                     this.setPixelStub(), this.loadPinterestScript(), window.pintrk("load", t.pixelId, {
                        np: "shopify"
                     }), window.pintrk("page"), e.prototype.initialize.call(this)
                  }, t.prototype.hasConsent = function (e) {
                     return u.marketingAllowed(e) && u.saleOfDataAllowed(e)
                  }, t.prototype.identify = function (e) {}, t.prototype.track = function (e) {}, t.prototype.page = function (e) {
                     var t = e.properties;
                     t && "product" === t.pageType || this.emitEvent("PageVisit", e.eventId, a.ANALYTICS_PAGE_VIEW)
                  }, t.prototype.name = function () {
                     return "Pinterest Pixel"
                  }, t.prototype.type = function () {
                     return c.IntegrationTypes.ECOMMERCE
                  }, t.prototype.viewedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           currency: t.currency,
                           line_items: [{
                              product_id: t.productId,
                              product_variant_id: t.variantId,
                              product_name: t.name,
                              product_price: t.price,
                              product_quantity: t.quantity
                           }]
                        };
                     this.emitEvent("PageVisit", e.eventId, a.ANALYTICS_VIEWED_PRODUCT, n)
                  }, t.prototype.viewedProductCategory = function (e) {
                     this.emitEvent("ViewCategory", e.eventId, a.ANALYTICS_VIEWED_PRODUCT_CATEGORY)
                  }, t.prototype.addedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           currency: t.currency,
                           line_items: [{
                              product_id: t.productId,
                              product_variant_id: t.variantId,
                              product_name: t.name,
                              product_price: t.price,
                              product_quantity: Number(e.properties.quantity)
                           }]
                        };
                     this.emitEvent("AddToCart", e.eventId, a.ANALYTICS_ADDED_PRODUCT, n)
                  }, t.prototype.completedOrder = function (e) {
                     var t = e.properties,
                        n = {
                           value: t.revenue,
                           currency: t.currency,
                           order_quantity: this.getOrderNumItems(t),
                           line_items: t.products.map((function (e, t) {
                              return {
                                 product_id: e.productId,
                                 product_variant_id: e.variantId,
                                 product_name: e.name,
                                 product_price: e.price,
                                 product_quantity: e.quantity
                              }
                           }))
                        };
                     this.emitEvent("Checkout", e.eventId, a.ANALYTICS_COMPLETED_ORDER, n)
                  }, t.prototype.performedSearch = function (e) {
                     var t = {
                        search_query: e.properties.query
                     };
                     this.emitEvent("Search", e.eventId, a.ANALYTICS_PERFORMED_SEARCH, t)
                  }, t.prototype.emitEvent = function (e, t, n, o) {
                     window.pintrk("track", e, i(i({
                        np: "shopify"
                     }, {
                        eventID: t
                     }), o)), this.addMonorailBatchEvent(s.objectAssignFilterUndefined({
                        eventName: n
                     }, {
                        eventId: t,
                        eventProperties: o ? JSON.stringify(o) : void 0
                     }))
                  }, t.prototype.getOrderNumItems = function (e) {
                     for (var t = 0, n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n];
                        this.getProductKey(r) && (t += r.quantity || 1)
                     }
                     return t
                  }, t.prototype.getProductKey = function (e) {
                     return e.productId || e.variantId || e.sku
                  }, t.prototype.setPixelStub = function () {
                     window.pintrk && "function" == typeof window.pintrk || (window.pintrk = function () {
                        window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                     }, window.pintrk.queue = [], window.pintrk.version = "3.0")
                  }, t.prototype.loadPinterestScript = function () {
                     var e = document.createElement("script");
                     e.async = !0, e.src = "https://s.pinimg.com/ct/core.js";
                     var t = document.getElementsByTagName("script")[0];
                     void 0 === t ? document.head.appendChild(e) : t.parentNode.insertBefore(e, t)
                  }, t.prototype.getEcommerceMetricsTag = function () {
                     return "pinterest"
                  }, t.prototype.getIntegrationId = function () {
                     return "Pinterest"
                  }, t.prototype.getEcommercePixelIds = function () {
                     return [this.options.pixelId]
                  }, t.defaultOptions = {
                     pixelId: ""
                  }, t
               }(a.EcommerceIntegration);
            t.Pinterest = d
         },
         3653: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
                  return o = Object.setPrototypeOf || {
                     __proto__: []
                  }
                  instanceof Array && function (e, t) {
                     e.__proto__ = t
                  } || function (e, t) {
                     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                  }, o(e, t)
               }, function (e, t) {
                  function n() {
                     this.constructor = e
                  }
                  o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
               }),
               i = this && this.__assign || function () {
                  return i = Object.assign || function (e) {
                     for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                     return e
                  }, i.apply(this, arguments)
               };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.S2S = t.SHOP_ANALYTICS_TOKEN_NAME = t.HEADLESS_API_CLIENT_ID = t.HYDROGEN_API_CLIENT_ID = t.CHECKOUT_SHIPPING_INFO_SUBMITTED_EVENT_NAME = t.CHECKOUT_ADDRESS_INFO_SUBMITTED_EVENT_NAME = t.CHECKOUT_CONTACT_INFO_SUBMITTED_EVENT_NAME = t.COLLECTION_PAGE_RENDERED_EVENT_NAME = t.CHECKOUT_STARTED_ONCE_PER_CHECKOUT_EVENT_NAME = t.CHECKOUT_COMPLETED_EVENT_NAME = t.CHECKOUT_STARTED_EVENT_NAME = t.SEARCH_SUBMITTED_EVENT_NAME = t.PAYMENT_INFO_SUBMITTED_EVENT_NAME = t.PRODUCT_ADDED_TO_CART_EVENT_NAME = t.PRODUCT_PAGE_RENDERED_EVENT_NAME = t.PAGE_RENDERED_EVENT_NAME = void 0;
            var a = n(7385),
               s = n(6997),
               c = n(7662),
               u = n(725),
               d = n(997),
               p = n(1930),
               l = n(1102),
               f = n(542),
               g = n(6851),
               h = n(9124),
               v = n(7662);
            t.PAGE_RENDERED_EVENT_NAME = "page_rendered", t.PRODUCT_PAGE_RENDERED_EVENT_NAME = "product_page_rendered", t.PRODUCT_ADDED_TO_CART_EVENT_NAME = "product_added_to_cart", t.PAYMENT_INFO_SUBMITTED_EVENT_NAME = "payment_info_submitted", t.SEARCH_SUBMITTED_EVENT_NAME = "search_submitted", t.CHECKOUT_STARTED_EVENT_NAME = "checkout_started", t.CHECKOUT_COMPLETED_EVENT_NAME = "checkout_completed", t.CHECKOUT_STARTED_ONCE_PER_CHECKOUT_EVENT_NAME = "checkout_started_once_per_checkout", t.COLLECTION_PAGE_RENDERED_EVENT_NAME = "collection_page_rendered", t.CHECKOUT_CONTACT_INFO_SUBMITTED_EVENT_NAME = "checkout_contact_info_submitted", t.CHECKOUT_ADDRESS_INFO_SUBMITTED_EVENT_NAME = "checkout_address_info_submitted", t.CHECKOUT_SHIPPING_INFO_SUBMITTED_EVENT_NAME = "checkout_shipping_info_submitted", t.HYDROGEN_API_CLIENT_ID = 6167201, t.HEADLESS_API_CLIENT_ID = 12875497473, t.SHOP_ANALYTICS_TOKEN_NAME = "shop_analytics";
            var _ = function (e) {
               function n(t, o, r) {
                  var a = e.call(this, n.defaultOptions, i({}, o), r) || this;
                  return a.pageID = g.default.microSessionId, a
               }
               return r(n, e), n.prototype.name = function () {
                  return "S2S"
               }, n.prototype.type = function () {
                  return f.IntegrationTypes.ECOMMERCE
               }, n.prototype.hasConsent = function (e) {
                  return v.analyticsProcessingAllowed(e) && v.marketingAllowed(e)
               }, n.prototype.identify = function (e) {
                  throw new Error("identify is not supported")
               }, n.prototype.page = function (e) {
                  var n = {
                     event_id: e.eventId,
                     referrer: e.referrer,
                     canonical_url: l.canonical()
                  };
                  this.produceToMonorail({
                     eventName: t.PAGE_RENDERED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: n
                  })
               }, n.prototype.track = function (e) {}, n.prototype.viewedProduct = function (e) {
                  var n = i(i({}, e.properties), {
                        quantity: 1
                     }),
                     o = {
                        event_id: e.eventId,
                        products: this.formatProductJSON([n]),
                        total_value: this.formatRevenue(n.price),
                        currency: this.getCurrency(n.currency)
                     };
                  this.produceToMonorail({
                     eventName: t.PRODUCT_PAGE_RENDERED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.addedProduct = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        products: this.formatProductJSON([n]),
                        total_value: this.formatRevenue(n.price),
                        currency: this.getCurrency(n.currency),
                        cart_token: n.cartToken
                     };
                  this.produceToMonorail({
                     eventName: t.PRODUCT_ADDED_TO_CART_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.addedPayment = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        total_value: this.formatRevenue(n.total),
                        currency: this.getCurrency(n.currency)
                     };
                  this.produceToMonorail({
                     eventName: t.PAYMENT_INFO_SUBMITTED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.checkoutContactInfoSubmitted = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        email: n.email,
                        phone: n.phone
                     };
                  this.produceToMonorail({
                     eventName: t.CHECKOUT_CONTACT_INFO_SUBMITTED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.checkoutAddressInfoSubmitted = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        billing_address_city: n.city,
                        billing_address_country: n.country,
                        phone: n.phone,
                        billing_address_region: n.province
                     };
                  this.produceToMonorail({
                     eventName: t.CHECKOUT_ADDRESS_INFO_SUBMITTED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.checkoutShippingInfoSubmitted = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        total_value: n.total,
                        currency: n.currency
                     };
                  this.produceToMonorail({
                     eventName: t.CHECKOUT_SHIPPING_INFO_SUBMITTED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.performedSearch = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        search_string: this.getSearchString(n.query)
                     };
                  this.produceToMonorail({
                     eventName: t.SEARCH_SUBMITTED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.startedOrder = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        products: this.formatProductJSON(n.products),
                        total_value: this.formatRevenue(n.total),
                        currency: this.getCurrency(n.currency)
                     };
                  this.produceToMonorail({
                     eventName: t.CHECKOUT_STARTED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.startedOrderOncePerCheckout = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        products: this.formatProductJSON(n.products),
                        total_value: this.formatRevenue(n.total),
                        currency: this.getCurrency(n.currency)
                     };
                  this.produceToMonorail({
                     eventName: t.CHECKOUT_STARTED_ONCE_PER_CHECKOUT_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o,
                     eventSchemaId: p.storefrontAnalyticsSchemaIdValidation
                  })
               }, n.prototype.completedOrder = function (e) {
                  var n, o = e.properties,
                     r = {
                        event_id: e.eventId,
                        first_name: o.customerEventData.customer.firstName,
                        last_name: o.customerEventData.customer.lastName,
                        email: o.customerEventData.customer.emailAddress,
                        phone: o.customerEventData.customer.phoneNumber,
                        products: this.formatProductJSON(o.products),
                        total_value: this.formatRevenue(o.total),
                        currency: this.getCurrency(o.currency),
                        billing_address_city: o.customerEventData.address.city,
                        billing_address_region: o.customerEventData.address.province,
                        billing_address_country: o.customerEventData.address.country,
                        billing_address_zipcode: o.customerEventData.address.zip
                     };
                  o.orderId && (r.order_id = o.orderId.toString()), (null === (n = e.s2sMetadata) || void 0 === n ? void 0 : n.serverEventId) && (r.server_event_id = e.s2sMetadata.serverEventId), this.produceToMonorail({
                     eventName: t.CHECKOUT_COMPLETED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: r
                  })
               }, n.prototype.viewedProductCategory = function (e) {
                  var n = e.properties,
                     o = {
                        event_id: e.eventId,
                        collection_id: n.collectionId,
                        collection_name: n.collectionName,
                        currency: n.currency
                     };
                  this.produceToMonorail({
                     eventName: t.COLLECTION_PAGE_RENDERED_EVENT_NAME,
                     eventObject: e,
                     eventPayload: o
                  })
               }, n.prototype.formatProductJSON = function (e) {
                  var t = this,
                     n = [];
                  return e.forEach((function (e) {
                     n.push(JSON.stringify({
                        variant_id: t.formatNumericID(e.variantId),
                        product_id: t.formatNumericID(e.productId),
                        product_gid: e.productGid,
                        name: e.name,
                        price: t.formatRevenue(e.price),
                        sku: e.sku,
                        brand: e.brand,
                        variant: e.variant,
                        category: e.category,
                        quantity: Number(e.quantity || 0)
                     }))
                  })), n
               }, n.prototype.produceToMonorail = function (e) {
                  var t = e.eventName,
                     n = e.eventObject,
                     o = e.eventPayload,
                     r = e.eventSchemaId,
                     i = this.isCustomStorefront(t),
                     a = i ? p.customStorefrontAnalyticsSchemaId : p.storefrontAnalyticsSchemaId,
                     s = {
                        schemaId: r || a,
                        payload: this.eventWithMetadata(t, i ? this.payloadWithCustomStorefrontMetadata(o) : o, n.s2sMetadata)
                     };
                  d.produce([s])
               }, n.prototype.eventWithMetadata = function (e, t, n) {
                  var o;
                  return i(i({}, t), {
                     event_name: e,
                     shop_id: g.default.shopId,
                     facebook_pixel_id: this.getFacebookPixelId(),
                     facebook_capi_enabled: this.isCapiEnabled(),
                     event_time: (new Date).getTime(),
                     event_source_url: u.href(),
                     unique_token: g.default.uniqToken,
                     page_id: this.pageID,
                     source: this.getSource(),
                     ccpa_enforced: c.saleOfDataNotAllowed(),
                     gdpr_enforced: c.notMarketingOrAnalyticsAllowed(),
                     gdpr_enforced_as_string: c.notMarketingOrAnalyticsAllowed().toString(),
                     navigation_type: null == n ? void 0 : n.navigationType,
                     navigation_api: null == n ? void 0 : n.navigationApi,
                     user_agent: null === (o = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === o ? void 0 : o.userAgent,
                     is_persistent_cookie: s.isPersistentCookie(),
                     customer_id: this.getCustomerId(),
                     checkout_token: g.default.checkoutToken,
                     deprecated_visit_token: g.default.visitToken,
                     session_id: h.getSessionId(),
                     asset_version_id: "88baf04046928b6edf6574afd22dbd026cc7d568",
                     shop_analytics_token: this.getShopAnalyticsToken()
                  })
               }, n.prototype.payloadWithCustomStorefrontMetadata = function (e) {
                  var t, n = this.options;
                  return i(i({}, e), {
                     hydrogenSubchannelId: String(null !== (t = n.cartSubchannelId) && void 0 !== t ? t : ""),
                     api_client_id: n.cartApiClientId
                  })
               }, n.prototype.getFacebookPixelId = function () {
                  return this.options.facebookAppPixelId
               }, n.prototype.isCapiEnabled = function () {
                  return this.options.facebookCapiEnabled
               }, n.prototype.getSource = function () {
                  return this.options.source
               }, n.prototype.getCustomerId = function () {
                  return this.options.customerId
               }, n.prototype.getSearchString = function (e) {
                  return e || ""
               }, n.prototype.formatRevenue = function (e) {
                  return Number(e || 0)
               }, n.prototype.formatNumericID = function (e) {
                  return null == e || "" === e ? null : Number(e)
               }, n.prototype.getCurrency = function (e) {
                  return e || "USD"
               }, n.prototype.getIntegrationId = function () {
                  return "S2S"
               }, n.prototype.getEcommerceMetricsTag = function () {
                  return "S2S"
               }, n.prototype.getEcommercePixelIds = function () {
                  var e = this.getFacebookPixelId();
                  return e ? [e] : []
               }, n.prototype.setPixelStub = function () {}, n.prototype.isCustomStorefront = function (e) {
                  var n = this.options,
                     o = [t.PAGE_RENDERED_EVENT_NAME, t.PAYMENT_INFO_SUBMITTED_EVENT_NAME, t.CHECKOUT_CONTACT_INFO_SUBMITTED_EVENT_NAME, t.CHECKOUT_ADDRESS_INFO_SUBMITTED_EVENT_NAME, t.CHECKOUT_SHIPPING_INFO_SUBMITTED_EVENT_NAME, t.CHECKOUT_STARTED_EVENT_NAME, t.CHECKOUT_STARTED_ONCE_PER_CHECKOUT_EVENT_NAME, t.CHECKOUT_COMPLETED_EVENT_NAME],
                     r = [t.HYDROGEN_API_CLIENT_ID, t.HEADLESS_API_CLIENT_ID];
                  return o.includes(e) && r.includes(n.cartApiClientId)
               }, n.prototype.getShopAnalyticsToken = function () {
                  return s.read(t.SHOP_ANALYTICS_TOKEN_NAME)
               }, n.defaultOptions = {
                  facebookAppPixelId: "",
                  facebookCapiEnabled: !1,
                  agent: "shopify",
                  source: "trekkie-unknown"
               }, n
            }(a.EcommerceIntegration);
            t.S2S = _
         },
         2724: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
               return o = Object.setPrototypeOf || {
                  __proto__: []
               }
               instanceof Array && function (e, t) {
                  e.__proto__ = t
               } || function (e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
               }, o(e, t)
            }, function (e, t) {
               function n() {
                  this.constructor = e
               }
               o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.CampaignManager = t.TimestampManager = t.SessionAttribution = t.orderCompletionEventKey = t.sessionAttributionTimestampKey = t.sessionAttributionParamsKey = void 0;
            var i = n(6997),
               a = n(372),
               s = n(725),
               c = n(542),
               u = n(7385),
               d = n(7662);
            t.sessionAttributionParamsKey = "_shopify_sa_p", t.sessionAttributionTimestampKey = "_shopify_sa_t", t.orderCompletionEventKey = "Completed Order";
            var p = function (e) {
               function n(t, n, o) {
                  return e.call(this, t, n, o) || this
               }
               return r(n, e), n.prototype.initialize = function () {
                  this.timestampManager = new l, this.campaignManager = new f, e.prototype.initialize.call(this)
               }, n.prototype.name = function () {
                  return "Session Attribution"
               }, n.prototype.type = function () {
                  return c.IntegrationTypes.INTEGRATION
               }, n.prototype.hasConsent = function (e) {
                  return d.analyticsProcessingAllowed(e)
               }, n.prototype.identify = function (e) {}, n.prototype.page = function (e) {
                  this.attributeSession()
               }, n.prototype.track = function (e) {
                  if (u.analyticsEvents.checkoutOnePageView.test(e.event)) {
                     var n = e.properties;
                     this.page(n.page)
                  } else e.event === t.orderCompletionEventKey && (i.clear(t.sessionAttributionTimestampKey), i.clear(t.sessionAttributionParamsKey))
               }, n.prototype.attributeSession = function () {
                  var e = new Date,
                     t = s.search(),
                     n = this.campaignManager.constructCanonicalUtmString(t);
                  this.timestampManager.extend(e.toJSON()), this.campaignManager.extend(n)
               }, n
            }(a.Integration);
            t.SessionAttribution = p;
            var l = function () {
               function e() {}
               return e.prototype.fetch = function () {
                  return i.read(t.sessionAttributionTimestampKey)
               }, e.prototype.extend = function (e) {
                  i.cleanupMyShopifyDotComCookie(t.sessionAttributionTimestampKey), i.write(t.sessionAttributionTimestampKey, e, !1)
               }, e.prototype.isValid = function (e) {
                  return this.isWithin30MinuteCutOff(e) && this.isSameDayAs(e)
               }, e.prototype.isWithin30MinuteCutOff = function (e) {
                  return this.testStoredTimestamp((function (e, t) {
                     return t.getTime() - e.getTime() <= 18e5
                  }), e)
               }, e.prototype.isSameDayAs = function (e) {
                  return this.testStoredTimestamp((function (e, t) {
                     return e.getUTCDate() === t.getUTCDate()
                  }), e)
               }, e.prototype.testStoredTimestamp = function (e, t) {
                  var n = this.fetch();
                  if (!n) return !1;
                  try {
                     return e(new Date(n), t)
                  } catch (e) {
                     return !1
                  }
               }, e
            }();
            t.TimestampManager = l;
            var f = function () {
               function e() {}
               return e.prototype.fetch = function () {
                  return i.read(t.sessionAttributionParamsKey)
               }, e.prototype.extend = function (e) {
                  "" === e && (e = this.fetch() || ""), i.cleanupMyShopifyDotComCookie(t.sessionAttributionParamsKey), i.write(t.sessionAttributionParamsKey, e, !1)
               }, e.prototype.isValid = function (e) {
                  return "" === e || this.fetch() === e
               }, e.prototype.constructCanonicalUtmString = function (t) {
                  if ("" === t || null == t || "?" === t) return "";
                  t = "?" === t[0] ? t.slice(1) : t;
                  for (var n = {}, o = 0, r = t.split("&"); o < r.length; o++) {
                     var i = r[o].split("=");
                     if (!(i.length < 2)) {
                        var a = this.decodeReplacingPlus(i[0]),
                           s = this.decodeReplacingPlus(i[1]);
                        s && a && (n[a] = s)
                     }
                  }
                  return e.acceptedQueryStringParams.filter((function (e) {
                     return n[e]
                  })).map((function (e) {
                     return encodeURIComponent(e) + "=" + encodeURIComponent(n[e])
                  })).join("&")
               }, e.prototype.decodeReplacingPlus = function (e) {
                  return decodeURIComponent(e.replace(/\+/g, " "))
               }, e.acceptedQueryStringParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref", "gclid", "fbclid", "shpxid"], e
            }();
            t.CampaignManager = f
         },
         6971: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
                  return o = Object.setPrototypeOf || {
                     __proto__: []
                  }
                  instanceof Array && function (e, t) {
                     e.__proto__ = t
                  } || function (e, t) {
                     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                  }, o(e, t)
               }, function (e, t) {
                  function n() {
                     this.constructor = e
                  }
                  o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
               }),
               i = this && this.__assign || function () {
                  return i = Object.assign || function (e) {
                     for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                     return e
                  }, i.apply(this, arguments)
               };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.Snap = void 0;
            var a = n(7385),
               s = n(1503),
               c = n(1102),
               u = n(542),
               d = n(7662),
               p = function (e) {
                  function t(n, o, r) {
                     return e.call(this, t.defaultOptions, o, r) || this
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     this.setPixelStub(), this.loadSnapScript();
                     var t = this.options;
                     window.snaptr("init", t.pixelId), e.prototype.initialize.call(this)
                  }, t.prototype.name = function () {
                     return "Snap Pixel"
                  }, t.prototype.type = function () {
                     return u.IntegrationTypes.ECOMMERCE
                  }, t.prototype.hasConsent = function (e) {
                     return d.marketingAllowed(e) && d.saleOfDataAllowed(e)
                  }, t.prototype.identify = function (e) {
                     throw new Error("identify is not supported")
                  }, t.prototype.page = function (e) {
                     this.emitEvent("PAGE_VIEW", null == e ? void 0 : e.eventId, a.ANALYTICS_PAGE_VIEW, {
                        integration: "shopify-native"
                     })
                  }, t.prototype.track = function (e) {
                     var t = {};
                     for (var n in e.properties) "revenue" === n ? t.price = this.formatRevenue(e.properties.revenue) : t[n] = e.properties[n]
                  }, t.prototype.viewedProductCategory = function (e) {}, t.prototype.viewedProductVariant = function (e) {}, t.prototype.viewedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           item_ids: this.getProductVariantId(t),
                           item_type: this.getProductContentType(t),
                           description: t.name || "",
                           item_category: this.getProductContentIds(t),
                           currency: this.getCurrency(t.currency),
                           price: this.formatRevenue(t.price),
                           integration: "shopify-native"
                        };
                     this.emitEvent("VIEW_CONTENT", e.eventId, a.ANALYTICS_VIEWED_PRODUCT, n)
                  }, t.prototype.addedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           item_ids: this.getProductVariantId(t),
                           item_type: this.getProductContentType(t),
                           description: t.name || "",
                           item_category: this.getProductContentIds(t),
                           currency: this.getCurrency(t.currency),
                           price: this.formatRevenue(t.price),
                           number_items: this.getProductNumItems(t),
                           integration: "shopify-native"
                        };
                     this.emitEvent("ADD_CART", e.eventId, a.ANALYTICS_ADDED_PRODUCT, n)
                  }, t.prototype.addedPayment = function (e) {
                     var t = e.properties,
                        n = {
                           currency: this.getCurrency(t.currency),
                           price: this.formatRevenue(t.total),
                           integration: "shopify-native"
                        };
                     this.emitEvent("ADD_BILLING", e.eventId, a.ANALYTICS_ADDED_PAYMENT, n)
                  }, t.prototype.performedSearch = function (e) {
                     var t = {
                        search_string: e.properties.query || "",
                        integration: "shopify-native"
                     };
                     this.emitEvent("SEARCH", e.eventId, a.ANALYTICS_PERFORMED_SEARCH, t)
                  }, t.prototype.startedOrder = function (e) {
                     var t = e.properties,
                        n = {
                           item_ids: this.getOrderContentIds(t),
                           item_type: this.getOrderContentType(t),
                           currency: this.getCurrency(t.currency),
                           price: this.formatRevenue(t.revenue),
                           number_items: this.getOrderNumItems(t),
                           integration: "shopify-native"
                        };
                     this.emitEvent("START_CHECKOUT", e.eventId, a.ANALYTICS_STARTED_ORDER, n)
                  }, t.prototype.completedOrder = function (e) {
                     var t, n = e.properties,
                        o = c.objectAssignFilterUndefined({
                           item_ids: this.getOrderContentIds(n),
                           item_type: this.getOrderContentType(n),
                           currency: this.getCurrency(n.currency),
                           description: n.orderName || (null === (t = n.orderId) || void 0 === t ? void 0 : t.toString()) || "",
                           price: this.formatRevenue(n.revenue),
                           number_items: this.getOrderNumItems(n),
                           integration: "shopify-native"
                        }, {
                           transaction_id: n.orderId
                        });
                     this.emitEvent("PURCHASE", e.eventId, a.ANALYTICS_COMPLETED_ORDER, o)
                  }, t.prototype.setPixelStub = function () {
                     window.snaptr && "function" == typeof window.snaptr || (window.snaptr = function () {
                        window.snaptr.handleRequest ? window.snaptr.handleRequest.apply(window.snaptr, arguments) : window.snaptr.queue.push(arguments)
                     }, window.snaptr.queue = [], window.snaptr.push = window.snaptr, window.snaptr.loaded = !0)
                  }, t.prototype.loadSnapScript = function () {
                     var e = s.virtualDocument().createElement("script");
                     e.async = !0, e.src = "https://sc-static.net/scevent.min.js";
                     var t = s.virtualDocument().getElementsByTagName("script")[0];
                     void 0 === t ? document.head.appendChild(e) : t.parentNode.insertBefore(e, t)
                  }, t.prototype.emitEvent = function (e, t, n, o) {
                     window.snaptr("track", e, i({
                        integration: "shopify-native"
                     }, o)), this.addMonorailBatchEvent(c.objectAssignFilterUndefined({
                        eventName: n
                     }, {
                        eventId: t,
                        eventProperties: o ? JSON.stringify(o) : void 0
                     }))
                  }, t.prototype.formatRevenue = function (e) {
                     return Number(e || 0).toFixed(2)
                  }, t.prototype.getCurrency = function (e) {
                     return e || "USD"
                  }, t.prototype.getProductContentIds = function (e) {
                     var t = e.productId || e.variantId || e.sku;
                     return t ? [t] : []
                  }, t.prototype.getProductVariantId = function (e) {
                     return e.variantId || e.sku || ""
                  }, t.prototype.getProductContentType = function (e) {
                     return e.productId ? "product_group" : "product"
                  }, t.prototype.getProductNumItems = function (e) {
                     return e.quantity || this.getProductContentIds(e).length
                  }, t.prototype.getProductKey = function (e) {
                     return e.productId || e.variantId || e.sku
                  }, t.prototype.getOrderContentIds = function (e) {
                     for (var t = [], n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n],
                           i = this.getProductVariantId(r);
                        i && -1 === t.indexOf(i) && t.push(i)
                     }
                     return t
                  }, t.prototype.getOrderContentType = function (e) {
                     for (var t = 0, n = e.products || []; t < n.length; t++)
                        if (n[t].productId) return "product_group";
                     return "product"
                  }, t.prototype.getOrderNumItems = function (e) {
                     for (var t = 0, n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n];
                        this.getProductKey(r) && (t += r.quantity || 1)
                     }
                     return t
                  }, t.prototype.getEcommerceMetricsTag = function () {
                     return "snap"
                  }, t.prototype.getIntegrationId = function () {
                     return "Snap"
                  }, t.prototype.getEcommercePixelIds = function () {
                     return [this.options.pixelId]
                  }, t.defaultOptions = {
                     pixelId: ""
                  }, t
               }(a.EcommerceIntegration);
            t.Snap = p
         },
         342: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
               return o = Object.setPrototypeOf || {
                  __proto__: []
               }
               instanceof Array && function (e, t) {
                  e.__proto__ = t
               } || function (e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
               }, o(e, t)
            }, function (e, t) {
               function n() {
                  this.constructor = e
               }
               o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.TikTok = void 0;
            var i = n(7385),
               a = n(1503),
               s = n(542),
               c = n(1102),
               u = n(7662),
               d = function (e) {
                  function t(n, o, r) {
                     return e.call(this, t.defaultOptions, o, r) || this
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     var t = this.options;
                     this.setPixelStub(), this.loadTikTokScript(t.pixelId), e.prototype.initialize.call(this)
                  }, t.prototype.name = function () {
                     return "TikTok Pixel"
                  }, t.prototype.type = function () {
                     return s.IntegrationTypes.ECOMMERCE
                  }, t.prototype.hasConsent = function (e) {
                     return u.marketingAllowed(e) && u.saleOfDataAllowed(e)
                  }, t.prototype.identify = function (e) {
                     throw new Error("identify is not supported")
                  }, t.prototype.page = function (e) {
                     window.ttq.page({
                        event_id: e.eventId
                     }), this.addMonorailBatchEvent({
                        eventName: i.ANALYTICS_PAGE_VIEW,
                        eventId: e.eventId
                     })
                  }, t.prototype.track = function (e) {}, t.prototype.viewedProductCategory = function (e) {}, t.prototype.viewedProductVariant = function (e) {}, t.prototype.viewedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           content_id: this.getProductKey(t),
                           content_type: this.getProductContentType(t),
                           content_name: t.name || "",
                           content_category: t.category || "",
                           currency: this.getCurrency(t.currency),
                           price: this.formatRevenue(t.price)
                        },
                        o = this.options;
                     this.emitEvent(o.pixelId, "ViewContent", e.eventId, i.ANALYTICS_VIEWED_PRODUCT, n)
                  }, t.prototype.addedProduct = function (e) {
                     var t = e.properties,
                        n = {
                           content_id: this.getProductKey(t),
                           content_type: this.getProductContentType(t),
                           content_name: t.name || "",
                           content_category: t.category || "",
                           currency: this.getCurrency(t.currency),
                           price: this.formatRevenue(t.price),
                           quantity: this.getProductNumItems(t)
                        },
                        o = this.options;
                     this.emitEvent(o.pixelId, "AddToCart", e.eventId, i.ANALYTICS_ADDED_PRODUCT, n)
                  }, t.prototype.addedPayment = function (e) {
                     var t = e.properties,
                        n = {
                           currency: this.getCurrency(t.currency),
                           value: this.formatRevenue(t.total)
                        },
                        o = this.options;
                     this.emitEvent(o.pixelId, "AddBilling", e.eventId, i.ANALYTICS_ADDED_PAYMENT, n)
                  }, t.prototype.performedSearch = function (e) {
                     var t = {
                           query: e.properties.query || ""
                        },
                        n = this.options;
                     this.emitEvent(n.pixelId, "Search", e.eventId, i.ANALYTICS_PERFORMED_SEARCH, t)
                  }, t.prototype.startedOrder = function (e) {
                     var t = e.properties,
                        n = {
                           contents: this.getOrderContents(t),
                           value: this.formatRevenue(t.revenue),
                           quantity: this.getOrderNumItems(t),
                           currency: this.getCurrency(t.currency)
                        },
                        o = this.options;
                     this.emitEvent(o.pixelId, "StartCheckout", e.eventId, i.ANALYTICS_STARTED_ORDER, n)
                  }, t.prototype.completedOrder = function (e) {
                     var t = e.properties,
                        n = {
                           contents: this.getOrderContents(t),
                           value: this.formatRevenue(t.revenue),
                           quantity: this.getOrderNumItems(t),
                           currency: this.getCurrency(t.currency)
                        },
                        o = this.options;
                     this.emitEvent(o.pixelId, "Purchase", e.eventId, i.ANALYTICS_COMPLETED_ORDER, n)
                  }, t.prototype.setPixelStub = function () {
                     if (!window.ttq || !window.ttq.loaded) {
                        window.TiktokAnalyticsObject = "ttq";
                        var e = window.ttq = window.ttq || [];
                        e.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group"], e.setAndDefer = function (e, t) {
                           e[t] = function () {
                              e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                           }
                        };
                        for (var t = 0; t < e.methods.length; t++) e.setAndDefer(e, e.methods[t]);
                        e.instance = function (t) {
                           for (var n = e._i[t] || [], o = 0; o < e.methods.length; o++) e.setAndDefer(n, e.methods[o]);
                           return n
                        }
                     }
                  }, t.prototype.loadTikTokScript = function (e) {
                     var t = window.ttq;
                     t.load = function (e) {
                        var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
                        t._i = t._i || {}, t._i[e] = [], t._i[e]._u = n, t._t = t._t || {}, t._t[e] = Number(new Date), t._o = t._o || {}, t._partner = t._partner || "Shopify";
                        var o = a.virtualDocument().createElement("script");
                        o.type = "text/javascript", o.async = !0, o.src = n + "?sdkid=" + e + "&lib=ttq";
                        var r = a.virtualDocument().getElementsByTagName("script")[0];
                        void 0 === r ? document.head.appendChild(o) : r.parentNode.insertBefore(o, r), window.ttq.loaded = !0
                     }, t.load(e)
                  }, t.prototype.formatRevenue = function (e) {
                     return Number(e || 0).toFixed(2)
                  }, t.prototype.getCurrency = function (e) {
                     return e || "USD"
                  }, t.prototype.getProductContentType = function (e) {
                     return e.productId ? "product_group" : "product"
                  }, t.prototype.getProductNumItems = function (e) {
                     return e.quantity || 1
                  }, t.prototype.getProductKey = function (e) {
                     return e.productId || e.variantId || e.sku || ""
                  }, t.prototype.getOrderContents = function (e) {
                     for (var t = [], n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n];
                        t.push({
                           content_id: this.getProductKey(r),
                           content_type: this.getProductContentType(r),
                           content_name: r.name || "",
                           content_category: r.category || "",
                           currency: this.getCurrency(r.currency),
                           price: this.formatRevenue(r.price),
                           quantity: this.getProductNumItems(r)
                        })
                     }
                     return t
                  }, t.prototype.getOrderNumItems = function (e) {
                     for (var t = 0, n = 0, o = e.products || []; n < o.length; n++) {
                        var r = o[n];
                        this.getProductKey(r) && (t += r.quantity || 1)
                     }
                     return t
                  }, t.prototype.emitEvent = function (e, t, n, o, r) {
                     void 0 === r && (r = {}), window.ttq.instance(e).track(t, r, {
                        event_id: n
                     }), this.addMonorailBatchEvent(c.objectAssignFilterUndefined({
                        eventName: o
                     }, {
                        eventId: n,
                        eventProperties: JSON.stringify(r)
                     }))
                  }, t.prototype.getEcommerceMetricsTag = function () {
                     return "tiktok"
                  }, t.prototype.getEcommercePixelIds = function () {
                     return [this.options.pixelId]
                  }, t.prototype.getIntegrationId = function () {
                     return "TikTok"
                  }, t.defaultOptions = {
                     pixelId: ""
                  }, t
               }(i.EcommerceIntegration);
            t.TikTok = d
         },
         8831: function (e, t, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (e, t) {
                  return o = Object.setPrototypeOf || {
                     __proto__: []
                  }
                  instanceof Array && function (e, t) {
                     e.__proto__ = t
                  } || function (e, t) {
                     for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                  }, o(e, t)
               }, function (e, t) {
                  function n() {
                     this.constructor = e
                  }
                  o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
               }),
               i = this && this.__assign || function () {
                  return i = Object.assign || function (e) {
                     for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                     return e
                  }, i.apply(this, arguments)
               };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.Trekkie = void 0;
            var a = n(372),
               s = n(1930),
               c = n(997),
               u = n(6997),
               d = n(542),
               p = n(6851),
               l = n(7385),
               f = n(7662),
               g = function (e) {
                  function t(t, n, o) {
                     var r = e.call(this, {}, {}, o) || this;
                     return r.defaultAttributes = p.default.attributes, r
                  }
                  return r(t, e), t.prototype.initialize = function () {
                     u.cleanupOverScopedCookies(), e.prototype.initialize.call(this)
                  }, t.prototype.name = function () {
                     return "Trekkie"
                  }, t.prototype.type = function () {
                     return d.IntegrationTypes.INTEGRATION
                  }, t.prototype.hasConsent = function (e) {
                     return f.analyticsProcessingAllowed(e)
                  }, t.prototype.identify = function (e) {}, t.prototype.page = function (e) {
                     var t = s.appNameToPageViewSchemaId[p.default.appName];
                     this.emit("page", e, t)
                  }, t.prototype.track = function (e) {
                     if (l.analyticsEvents.checkoutOnePageView.test(e.event)) {
                        var t = e.properties;
                        this.page(t.page)
                     } else {
                        var n = s.extractSchemaIdFromEventName(e.event);
                        this.emit("track", e, n)
                     }
                  }, t.prototype.emit = function (e, t, n) {
                     p.default.incrementMicroSessionCount(), t = a.Integration.flatten(t);
                     var o = i(i({}, t), p.default.attributes);
                     o.eventType = e, n && c.produce([{
                        schemaId: n,
                        payload: o
                     }])
                  }, t
               }(a.Integration);
            t.Trekkie = g
         },
         9115: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.TREKKIE_GOOGLE_CONSENT_MODE_WITH_CONSENT_SIGNALS = void 0;
            var n = new(function () {
               function e() {
                  this.betaFlagsProps = []
               }
               return e.prototype.initialize = function (e) {
                  void 0 === e && (e = []), this.betaFlagsProps = e
               }, e.prototype.resetState = function () {
                  this.betaFlagsProps = []
               }, Object.defineProperty(e.prototype, "betaFlags", {
                  get: function () {
                     return this.betaFlagsProps
                  },
                  enumerable: !1,
                  configurable: !0
               }), e.prototype.isEnabled = function (e) {
                  return !!this.betaFlagsProps && this.betaFlagsProps.includes(e)
               }, e
            }());
            t.TREKKIE_GOOGLE_CONSENT_MODE_WITH_CONSENT_SIGNALS = "6ebf83d2", t.default = n
         },
         6997: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.resetCookieDomain = t.determineCookieDomain = t.cleanupOverScopedCookies = t.clear = t.write = t.isPersistentCookie = t.read = t.allowed = t.disable = t.enabled = t.cleanupMyShopifyDotComCookie = t.cookieImpl = t.parseDocumentCookie = void 0;
            var o, r, i = n(1503),
               a = n(542),
               s = n(2724),
               c = n(7662),
               u = n(7668),
               d = n(725),
               p = n(1102),
               l = "myshopify.com",
               f = [l, "spin.dev"],
               g = new Date(0);

            function h(e) {
               for (var t = {}, n = 0, o = e.split(/ *; */); n < o.length; n++) {
                  var r = o[n].split("=");
                  try {
                     t[decodeURIComponent(r[0])] = decodeURIComponent(r[1] || "")
                  } catch (e) {}
               }
               return t
            }

            function v(e) {
               if (void 0 === o)
                  if (function () {
                        for (var e = 0, t = f; e < t.length; e++)
                           if (E(t[e])) return !0;
                        return !1
                     }()) o = d.hostname();
                  else {
                     for (var t = "", n = 0, r = d.hostname().split(".").reverse(); n < r.length; n++) {
                        var i = r[n];
                        t = "" === t ? "." + i : "." + i + t;
                        var a = p.generateShopifyDValue();
                        if (y(e, a, 0, t), _(e, a)) return void(o = t)
                     }
                     o = ""
                  }
            }

            function _(e, n) {
               var o = t.cookieImpl.read(e);
               return !!o && o === n
            }

            function y(e, n, o, r, i) {
               void 0 === i && (i = "Lax");
               var a = {
                  domain: r,
                  path: "/",
                  maxage: o,
                  samesite: i
               };
               t.cookieImpl.write(e, n, a)
            }

            function E(e) {
               var t = d.hostname().split(".").reverse(),
                  n = e.split(".").reverse();
               return t[0] === n[0] && t[1] === n[1]
            }

            function m() {
               return E(l)
            }
            t.parseDocumentCookie = h, t.cookieImpl = {
               parse: h,
               read: function (e) {
                  if (t.cookieImpl.enabled()) return t.cookieImpl.parse(i.virtualDocument().cookie())[e]
               },
               write: function (e, n, o) {
                  if (void 0 === o && (o = {}), t.cookieImpl.enabled() && t.cookieImpl.allowed(e)) {
                     var r = encodeURIComponent(e) + "=" + encodeURIComponent(n);
                     o.maxage && (o.maxage < 0 ? o.expires = g : o.expires = new Date((new Date).getTime() + o.maxage)), o.path && (r += "; path=" + o.path), o.domain && (r += "; domain=" + o.domain), (o.maxage < 0 || o.expires) && (r += "; expires=" + o.expires.toUTCString()), o.samesite ? r += "; SameSite=" + o.samesite : r += "; SameSite=Lax", o.secure && (r += "; secure");
                     try {
                        i.virtualDocument().setCookie(r)
                     } catch (e) {
                        t.cookieImpl.disable()
                     }
                  }
               },
               enabled: function (e) {
                  if (void 0 === e && (e = !1), !e && void 0 !== r) return r;
                  try {
                     r = i.virtualDocument().cookieEnabled() && void 0 !== i.virtualDocument().cookie()
                  } catch (e) {
                     r = !1
                  }
                  return r
               },
               disable: function () {
                  r = !1
               },
               allowed: function (e) {
                  if ([u.shortTermKey, u.longTermKey].includes(e)) return c.haveConsentForMarketingOrAnalytics();
                  var t = function (e) {
                     var t;
                     return ((t = {})[s.sessionAttributionParamsKey] = a.ConsentPurposes.ANALYTICS, t[s.sessionAttributionTimestampKey] = a.ConsentPurposes.ANALYTICS, t)[e]
                  }(e);
                  return void 0 === t || c.haveConsentForPurpose(t)
               },
               isPersistentCookie: function () {
                  var e = t.cookieImpl.read("_shopify_m");
                  return void 0 === e || "persistent" === e
               }
            }, t.cleanupMyShopifyDotComCookie = function (e) {
               if (m()) {
                  var t = e + "=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax";
                  i.virtualDocument().setCookie(t)
               }
            }, t.enabled = function () {
               return t.cookieImpl.enabled()
            }, t.disable = function () {
               t.cookieImpl.disable()
            }, t.allowed = function (e) {
               return t.cookieImpl.allowed(e)
            }, t.read = function (e) {
               return t.cookieImpl.read(e)
            }, t.isPersistentCookie = function () {
               return t.cookieImpl.isPersistentCookie()
            }, t.write = function (e, t, n, r) {
               void 0 === r && (r = "Lax"), v(e), y(e, t, n ? 31104e6 : 18e5, o, r)
            }, t.clear = function (e) {
               v(e), y(e, "", -1, o), y(e, "", -1, "")
            }, t.cleanupOverScopedCookies = function () {
               if (m())
                  for (var e = 0, t = ["_shopify_s", "_shopify_sa_p", "_shopify_sa_t", "_shopify_y"]; e < t.length; e++) {
                     var n = t[e] + "=; domain=." + l + "; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax";
                     i.virtualDocument().setCookie(n)
                  }
            }, t.determineCookieDomain = v, t.resetCookieDomain = function () {
               o = void 0
            }
         },
         7662: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.anyRelevantConsentSignals = t.shouldShowBanner = t.saleOfDataAllowed = t.preferencesProcessingAllowed = t.marketingAllowed = t.analyticsProcessingAllowed = t.resetConsentCookieCache = t.haveConsentForMarketingOrAnalytics = t.haveConsentForPurpose = t.notMarketingOrAnalyticsAllowed = t.saleOfDataNotAllowed = t.TrackingEvents = void 0;
            var o = n(1863),
               r = n(542);

            function i(e) {
               return e && e.detail ? e.detail.analyticsAllowed : o.analyticsProcessingAllowed()
            }

            function a(e) {
               return e && e.detail ? e.detail.marketingAllowed : o.marketingAllowed()
            }

            function s(e) {
               return e && e.detail ? e.detail.preferencesAllowed : o.preferencesProcessingAllowed()
            }

            function c(e) {
               return e && e.detail ? e.detail.saleOfDataAllowed : o.saleOfDataAllowed()
            }
            t.TrackingEvents = o.TrackingEvents, t.saleOfDataNotAllowed = function () {
               return !c()
            }, t.notMarketingOrAnalyticsAllowed = function () {
               return !(a() && i())
            }, t.haveConsentForPurpose = function (e) {
               switch (e) {
                  case r.ConsentPurposes.ANALYTICS:
                     return i();
                  case r.ConsentPurposes.MARKETING:
                     return a();
                  case r.ConsentPurposes.SALE_OF_DATA:
                     return c();
                  case r.ConsentPurposes.PREFERENCES:
                     return s();
                  default:
                     return !0
               }
            }, t.haveConsentForMarketingOrAnalytics = function (e) {
               return e ? Boolean(e.analyticsAllowed || e.marketingAllowed) : this.haveConsentForPurpose(r.ConsentPurposes.ANALYTICS) || this.haveConsentForPurpose(r.ConsentPurposes.MARKETING)
            }, t.resetConsentCookieCache = function () {
               o.resetCookieCache()
            }, t.analyticsProcessingAllowed = i, t.marketingAllowed = a, t.preferencesProcessingAllowed = s, t.saleOfDataAllowed = c, t.shouldShowBanner = function () {
               return o.shouldShowBanner()
            }, t.anyRelevantConsentSignals = function () {
               var e = o.currentVisitorConsent();
               return Boolean((null == e ? void 0 : e.marketing) || (null == e ? void 0 : e.analytics))
            }
         },
         6851: function (e, t, n) {
            "use strict";
            var o = this && this.__assign || function () {
               return o = Object.assign || function (e) {
                  for (var t, n = 1, o = arguments.length; n < o; n++)
                     for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e
               }, o.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var r = n(7668),
               i = n(6997),
               a = n(2971),
               s = new(function () {
                  function e() {
                     this.defaultAttributes = {}
                  }
                  return e.prototype.initialize = function (e) {
                     var t = !1;
                     e.isServerSideCookieWritingEnabled && (t = !0), this.uniqueIdManager = new r.UniqueIdManager(t), this.defaultAttributes.appName = e.appName, this.defaultAttributes.uniqToken = this.uniqueIdManager.longTerm(), this.defaultAttributes.visitToken = this.uniqueIdManager.shortTerm(), this.defaultAttributes.microSessionId = r.buildToken(), this.defaultAttributes.microSessionCount = 0, this.defaultAttributes.isPersistentCookie = i.isPersistentCookie(), e.defaultAttributes && (this.defaultAttributes = o(o({}, e.defaultAttributes), this.defaultAttributes), a.setMetricsOptions(e.defaultAttributes.shopId))
                  }, e.prototype.incrementMicroSessionCount = function () {
                     this.defaultAttributes.microSessionCount++
                  }, e.prototype.refreshVisitorTokens = function () {
                     this.defaultAttributes.uniqToken = this.uniqueIdManager.longTerm(), this.defaultAttributes.visitToken = this.uniqueIdManager.shortTerm()
                  }, e.prototype.resetState = function () {
                     this.defaultAttributes = {}
                  }, Object.defineProperty(e.prototype, "attributes", {
                     get: function () {
                        return this.defaultAttributes
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "appName", {
                     get: function () {
                        return this.defaultAttributes.appName
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "checkoutToken", {
                     get: function () {
                        return this.defaultAttributes.checkoutToken
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "uniqToken", {
                     get: function () {
                        return this.defaultAttributes.uniqToken
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "visitToken", {
                     get: function () {
                        return this.defaultAttributes.visitToken
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "shopId", {
                     get: function () {
                        return this.defaultAttributes.shopId
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "microSessionId", {
                     get: function () {
                        return this.defaultAttributes.microSessionId
                     },
                     enumerable: !1,
                     configurable: !0
                  }), Object.defineProperty(e.prototype, "microSessionCount", {
                     get: function () {
                        return this.defaultAttributes.microSessionCount
                     },
                     enumerable: !1,
                     configurable: !0
                  }), e
               }());
            t.default = s
         },
         2449: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.setupEventIdService = void 0;
            var o = n(803);
            t.setupEventIdService = function () {
               return o.setupEventIdService()
            }
         },
         3552: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.generateGoogleConsentModeObject = t.shouldSetGoogleConsentMode = void 0;
            var o = n(9115),
               r = n(7662);
            t.shouldSetGoogleConsentMode = function () {
               return !o.default.isEnabled(o.TREKKIE_GOOGLE_CONSENT_MODE_WITH_CONSENT_SIGNALS) || r.shouldShowBanner() || r.anyRelevantConsentSignals()
            }, t.generateGoogleConsentModeObject = function () {
               return {
                  ad_storage: r.marketingAllowed() ? "granted" : "denied",
                  ad_user_data: r.marketingAllowed() ? "granted" : "denied",
                  ad_personalization: r.marketingAllowed() ? "granted" : "denied",
                  analytics_storage: r.analyticsProcessingAllowed() ? "granted" : "denied"
               }
            }
         },
         725: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.isShopifyDotCom = t.search = t.protocol = t.port = t.pathname = t.origin = t.setHref = t.href = t.hostname = t.host = t.hash = void 0;
            var o = n(7e3);

            function r() {
               return o.virtualWindow().location().hostname
            }
            t.hash = function () {
               return o.virtualWindow().location().hash
            }, t.host = function () {
               return o.virtualWindow().location().host
            }, t.hostname = r, t.href = function () {
               return o.virtualWindow().location().href
            }, t.setHref = function (e) {
               o.virtualWindow().location().href = e
            }, t.origin = function () {
               var e = o.virtualWindow().location();
               return e.origin ? e.origin : e.protocol + "//" + e.hostname + (e.port ? ":" + e.port : "")
            }, t.pathname = function () {
               return o.virtualWindow().location().pathname
            }, t.port = function () {
               return o.virtualWindow().location().port
            }, t.protocol = function () {
               return o.virtualWindow().location().protocol
            }, t.search = function () {
               return o.virtualWindow().location().search
            }, t.isShopifyDotCom = function (e) {
               return null !== (e = e || r()).match(/(^|\.)shopify\.com$/)
            }
         },
         2971: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.sendToBugsnag = t.sendBugsnagXhr = t.shouldSendToBugsnag = t.reportError = t.logMetricToMonorail = t.setMetricsOptions = t.setGlobalSerializedAppConfig = t.errorsSchemaId = t.metricsSchemaId = void 0;
            var o, r, i = n(997),
               a = n(725),
               s = n(1102);
            t.metricsSchemaId = "trekkie_metrics/2.0", t.errorsSchemaId = "trekkie_errors/2.0", t.setGlobalSerializedAppConfig = function (e) {
               o = e
            }, t.setMetricsOptions = function (e) {
               r = e
            }, t.logMetricToMonorail = function (e, n) {
               var o = {
                  metric_name: e
               };
               r && (o.shop_id = r), n && (o.metadata = n), i.produce([{
                  schemaId: t.metricsSchemaId,
                  payload: o
               }])
            }, t.reportError = function (e, n, c) {
               var u = {
                  name: n.name,
                  line: n.lineNumber || n.line,
                  script: n.fileName || n.sourceURL || n.script,
                  stack: n.stackTrace || n.stack || n.description,
                  message: n.message,
                  url: a.href(),
                  context: void 0 !== e ? e : null,
                  appConfig: o || null,
                  notes: c
               };
               if (this.sendToBugsnag(u), !s.isUnstableBrowserVersion()) {
                  var d = {
                     error_name: "reportError_" + e
                  };
                  r && (d.shop_id = r), i.produce([{
                     schemaId: t.errorsSchemaId,
                     payload: d
                  }])
               }
            }, t.shouldSendToBugsnag = function () {
               return 100 * Math.random() < 2.5
            }, t.sendBugsnagXhr = function (e, t, n, o, r, i, a, s) {
               try {
                  var c = new XMLHttpRequest;
                  c.open("POST", "https://notify.bugsnag.com/", !0), c.setRequestHeader("Content-Type", "application/json"), c.setRequestHeader("Bugsnag-Api-Key", "acd98d4f5c3b14bef3d8703f0ae1d8e8"), c.setRequestHeader("Bugsnag-Payload-Version", "5"), c.send(JSON.stringify({
                     payloadVersion: 5,
                     notifier: {
                        name: "Trekkie",
                        version: e,
                        url: "-"
                     },
                     events: [{
                        exceptions: [{
                           errorClass: t,
                           stacktrace: [n],
                           type: "browserjs"
                        }],
                        context: o,
                        app: {
                           releaseStage: "production",
                           version: e,
                           id: "trekkie"
                        },
                        metaData: {
                           app: {
                              s2sSource: r
                           },
                           request: {
                              shopId: i,
                              shopUrl: window.location.href
                           },
                           device: {
                              userAgent: window.navigator.userAgent
                           },
                           "Additional Notes": {
                              appConfig: a,
                              notes: s
                           }
                        },
                        unhandled: !1
                     }]
                  }))
               } catch (e) {}
            }, t.sendToBugsnag = function (e) {
               var t;
               if (this.shouldSendToBugsnag()) {
                  var n = "88baf04046928b6edf6574afd22dbd026cc7d568",
                     o = null,
                     r = null,
                     i = null;
                  if (e.appConfig) try {
                     var a = JSON.parse(e.appConfig);
                     a && (o = a.Trekkie.appName, r = null === (t = a.S2S) || void 0 === t ? void 0 : t.source, i = a.Trekkie.defaultAttributes.shopId)
                  } catch (e) {}
                  var s = e.context ? e.context : r,
                     c = {
                        file: o ? "checkout" === o ? "trekkie.storefront." + n + ".min.js" : "trekkie." + o + "." + n + ".min.js" : "trekkie." + n + ".min.js",
                        lineNumber: "1",
                        columnNumber: "1",
                        method: e.context
                     },
                     u = e.context;
                  if (e.stack) {
                     u = e.stack.split("\n")[0];
                     var d = e.stack.match(/([0-9]+):([0-9]+)/);
                     if (d && d.length > 2 && (c.lineNumber = d[1], c.columnNumber = d[2], parseInt(c.lineNumber, 10) > 1e5)) return
                  }
                  this.sendBugsnagXhr(n, u, c, s, r, i, e.appConfig, e.notes)
               }
            }
         },
         997: function (e, t) {
            "use strict";
            var n = this && this.__spreadArrays || function () {
               for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
               var o = Array(e),
                  r = 0;
               for (t = 0; t < n; t++)
                  for (var i = arguments[t], a = 0, s = i.length; a < s; a++, r++) o[r] = i[a];
               return o
            };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.isSendBeaconSupported = t.produce = t.flushBatchEvents = t.getBatchEvents = t.addBatchEvent = t.setMonorailRegion = t.batchEndpoints = void 0, t.batchEndpoints = {
               global: {
                  url: "https://monorail-edge.shopifysvc.com/unstable/produce_batch"
               },
               staging: {
                  url: "https://monorail-edge-staging.shopifycloud.com/unstable/produce_batch"
               },
               canada: {
                  url: "https://monorail-edge-ca.shopifycloud.com/unstable/produce_batch"
               }
            };
            var o = t.batchEndpoints.global,
               r = new Array;

            function i(e, t) {
               if (a()) try {
                  if (window.navigator.sendBeacon.bind(window.navigator)(e, t)) return !0
               } catch (e) {}
               var n = new XMLHttpRequest;
               try {
                  n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(t)
               } catch (e) {
                  console.log(e)
               }
               return !1
            }

            function a() {
               return window && window.navigator && "function" == typeof window.navigator.sendBeacon && !(-1 !== window.navigator.userAgent.lastIndexOf("iPhone; CPU iPhone OS 12_") || -1 !== window.navigator.userAgent.lastIndexOf("iPad; CPU OS 12_"))
            }
            t.setMonorailRegion = function (e) {
               "shop_domain" === e ? o = {
                  url: window.location.origin + "/.well-known/shopify/monorail/unstable/produce_batch"
               } : t.batchEndpoints.hasOwnProperty(e) && (o = t.batchEndpoints[e])
            }, t.addBatchEvent = function (e) {
               var t = (new Date).getTime(),
                  n = {
                     schema_id: e.schemaId,
                     payload: e.payload,
                     metadata: {
                        event_created_at_ms: t
                     }
                  };
               r.push(n)
            }, t.getBatchEvents = function () {
               return r
            }, t.flushBatchEvents = function () {
               var e = n(r);
               r.length = 0,
                  function (e) {
                     if (0 !== e.length) {
                        var t = {
                              event_sent_at_ms: (new Date).getTime()
                           },
                           n = {};
                        n.metadata = t, n.events = e, i(o.url, JSON.stringify(n))
                     }
                  }(e)
            }, t.produce = function (e) {
               if (0 !== e.length) {
                  var t = (new Date).getTime(),
                     n = {
                        event_sent_at_ms: t
                     },
                     r = {};
                  r.metadata = n, r.events = [];
                  for (var a = 0, s = e; a < s.length; a++) {
                     var c = s[a];
                     r.events.push({
                        schema_id: c.schemaId,
                        payload: c.payload,
                        metadata: {
                           event_created_at_ms: t
                        }
                     })
                  }
                  return i(o.url, JSON.stringify(r))
               }
            }, t.isSendBeaconSupported = a
         },
         8336: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.getNavigationTypeLegacy = t.getNavigationTypeExperimental = void 0;
            var o = n(2971);
            t.getNavigationTypeExperimental = function () {
               try {
                  var e = (null === performance || void 0 === performance ? void 0 : performance.getEntriesByType) && (null === performance || void 0 === performance ? void 0 : performance.getEntriesByType("navigation"));
                  if (e && e[0]) {
                     var t = performance.getEntriesByType("navigation")[0].type;
                     return t && t.toString()
                  }
               } catch (e) {
                  o.reportError("PerformanceNavigationTiming_Error", e)
               }
            }, t.getNavigationTypeLegacy = function () {
               var e, t;
               try {
                  if (PerformanceNavigation && null !== (null === (e = null === performance || void 0 === performance ? void 0 : performance.navigation) || void 0 === e ? void 0 : e.type) && void 0 !== (null === (t = null === performance || void 0 === performance ? void 0 : performance.navigation) || void 0 === t ? void 0 : t.type)) {
                     var n = performance.navigation.type;
                     switch (n) {
                        case PerformanceNavigation.TYPE_NAVIGATE:
                           return "navigate";
                        case PerformanceNavigation.TYPE_RELOAD:
                           return "reload";
                        case PerformanceNavigation.TYPE_BACK_FORWARD:
                           return "back_forward";
                        default:
                           return "unknown: " + n
                     }
                  }
               } catch (e) {
                  o.reportError("Performance.Navigation_Error", e)
               }
            }
         },
         9124: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.getSessionId = void 0;
            var o, r = n(7668);
            t.getSessionId = function () {
               return o || (o = function () {
                  var e, t, n;
                  try {
                     n = (null === (e = window.Shopify) || void 0 === e ? void 0 : e.evids) ? null === (t = window.Shopify) || void 0 === t ? void 0 : t.evids("session_started", {
                        analyticsFramework: "trekkie"
                     }) : r.buildToken()
                  } catch (e) {
                     n = r.buildToken()
                  }
                  return n
               }()), o
            }
         },
         5522: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.iframe = t.script = void 0;
            var o = n(1503);

            function r(e, t) {
               if (t.onLoad && e.addEventListener("load", t.onLoad, !1), t.className) {
                  if (/^\d/.test(t.className)) throw new Error("Invalid className: " + t.className + " starts with a digit");
                  e.className = t.className
               }
            }
            t.script = function (e) {
               var t = o.virtualDocument().createElement("script");
               return t.src = e.src, t.async = !0, r(t, e), o.virtualDocument().body().appendChild(t), t
            }, t.iframe = function (e) {
               var t = o.virtualDocument().createElement("iframe");
               return t.src = e.src, t.style.display = "none", r(t, e), o.virtualDocument().body().appendChild(t), t
            }
         },
         7668: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.hexTime = t.buildToken = t.UniqueIdManager = t.longTermKey = t.shortTermKey = void 0;
            var o = n(7e3),
               r = n(6997),
               i = n(2971);
            t.shortTermKey = "_shopify_s", t.longTermKey = "_shopify_y";
            var a = "xxxx-4xxx-xxxx-xxxxxxxxxxxx",
               s = function () {
                  function e(e) {
                     this.isCookieSetServerSideEventFired = !1, this.isServerSideCookieWritingEnabled = e
                  }
                  return e.prototype.fetchOrSet = function (e, t, n) {
                     if (!r.enabled()) return "00000000-0000-0000-4000-000000000000";
                     var o = r.read(t),
                        a = !n;
                     o || (o = c(), a = !0, n && !this.isCookieSetServerSideEventFired && (i.logMetricToMonorail("serverSideCookieNotSet_" + t), this.isCookieSetServerSideEventFired = !0)), a && r.write(t, o, e);
                     var s = r.read(t);
                     return void 0 === s ? "00000000-0000-0000-5000-000000000000" : s
                  }, e.prototype.shortTerm = function () {
                     var e, n;
                     return null !== (n = null === (e = window.ShopPay) || void 0 === e ? void 0 : e.trackingVisit) && void 0 !== n ? n : this.fetchOrSet(!1, t.shortTermKey, !1)
                  }, e.prototype.longTerm = function () {
                     var e, n;
                     return null !== (n = null === (e = window.ShopPay) || void 0 === e ? void 0 : e.trackingUnique) && void 0 !== n ? n : this.fetchOrSet(!0, t.longTermKey, this.isServerSideCookieWritingEnabled)
                  }, e.prototype.resetIsCookieSetServerSideEventFired = function () {
                     this.isCookieSetServerSideEventFired = !1
                  }, e
               }();

            function c() {
               var e = "";
               try {
                  var t = o.virtualWindow().crypto(),
                     n = new Uint16Array(31);
                  t.getRandomValues(n);
                  var r = 0;
                  e = a.replace(/[x]/g, (function (e) {
                     for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                     var i = n[r] % 16;
                     return r++, ("x" === e ? i : 3 & i | 8).toString(16)
                  })).toUpperCase()
               } catch (t) {
                  e = a.replace(/[x]/g, (function (e) {
                     for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                     var o = 16 * Math.random() | 0;
                     return ("x" === e ? o : 3 & o | 8).toString(16)
                  })).toUpperCase()
               }
               return u() + "-" + e
            }

            function u() {
               var e, t = 0;
               e = (new Date).getTime() >>> 0;
               try {
                  t = performance.now() >>> 0
               } catch (e) {
                  t = 0
               }
               return Math.abs(e + t).toString(16).toLowerCase().padStart(8, "0")
            }
            t.UniqueIdManager = s, t.buildToken = c, t.hexTime = u
         },
         1102: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.isPseudoPageEvent = t.canonical = t.generateShopifyDValue = t.isUnstableBrowserVersion = t.UNSTABLE_BROWSER_VERSION_SET = t.objectAssignFilterUndefined = void 0;
            var o = n(7e3),
               r = n(7385),
               i = n(1503),
               a = /^https?:\/\//;
            t.objectAssignFilterUndefined = function (e, t) {
               for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
               return e
            }, t.UNSTABLE_BROWSER_VERSION_SET = new Set(["Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"]), t.isUnstableBrowserVersion = function () {
               return t.UNSTABLE_BROWSER_VERSION_SET.has(o.virtualWindow().userAgent())
            }, t.generateShopifyDValue = function () {
               return (new Date).toJSON()
            }, t.canonical = function () {
               for (var e = i.virtualDocument().getElementsByTagName("link"), t = 0; t < e.length; t++) {
                  var n = e[t];
                  if ("canonical" === n.getAttribute("rel")) {
                     var o = n.getAttribute("href");
                     if (!a.test(o)) continue;
                     if (o.replace(a, "").length <= 5) continue;
                     return o
                  }
               }
               return ""
            }, t.isPseudoPageEvent = function (e) {
               for (var t = 0, n = r.PSEUDO_PAGE_EVENTS; t < n.length; t++) {
                  var o = n[t],
                     i = r.analyticsEvents[o];
                  if (i && i.test(e)) return !0
               }
               return !1
            }
         },
         1270: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.WebPixelEventNameMap = void 0, t.WebPixelEventNameMap = {
               "Page View": "page_viewed",
               "Performed Search": "search_submitted",
               "Viewed Product": "product_viewed",
               "Started Order": "checkout_started",
               "Viewed Product Category": "collection_viewed",
               "Viewed Product Variant": "product_variant_viewed",
               "Added Product": "product_added_to_cart",
               "Added Payment": "payment_info_submitted",
               "Completed Order": "checkout_completed",
               "Checkout Contact Step Started": "checkout_contact_step_started",
               "Checkout Contact Info Submitted": "checkout_contact_info_submitted",
               "Checkout Address Info Submitted": "checkout_address_info_submitted",
               "Checkout Shipping Step Started": "checkout_shipping_step_started",
               "Checkout Shipping Info Submitted": "checkout_shipping_info_submitted",
               "Checkout Payment Step Started": "checkout_payment_step_started"
            }
         },
         9426: function (e, t, n) {
            "use strict";
            var o = this && this.__assign || function () {
               return o = Object.assign || function (e) {
                  for (var t, n = 1, o = arguments.length; n < o; n++)
                     for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e
               }, o.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.replayAnalyticsQueue = t.Tricorder = void 0;
            var r = n(1503),
               i = n(725),
               a = n(997),
               s = n(2971),
               c = n(2449),
               u = n(7662),
               d = n(7668),
               p = n(1930),
               l = n(8336),
               f = n(1102),
               g = n(2971),
               h = n(6851),
               v = n(1270),
               _ = n(9115),
               y = function () {
                  function e(e, t, n) {
                     var o, r;
                     this.integrations = [], this.allIntegrationsHaveLoaded = !1, this.handleConsentCollectedBinded = this.handleConsentCollected.bind(this), this.config = t, this.navigationInfo = this.getNavigationType(), this.configureMonorailRegion(this.config.Trekkie), c.setupEventIdService(), h.default.initialize(t.Trekkie), _.default.initialize(t.Trekkie.enabledBetaFlags), s.logMetricToMonorail("navigation-" + (null === (o = this.navigationInfo) || void 0 === o ? void 0 : o.navigationApi) + "-" + (null === (r = this.navigationInfo) || void 0 === r ? void 0 : r.navigationType)), this.logAssetContext(t), this.addBuyWithPrimePresenceListener(t), this.initialize(e, t, n)
                  }
                  return e.prototype.configureMonorailRegion = function (e) {
                     var t = "global";
                     (null == e ? void 0 : e.monorailRegion) && (t = null == e ? void 0 : e.monorailRegion), (null == e ? void 0 : e.development) && (t = "staging"), a.setMonorailRegion(t)
                  }, e.prototype.logAssetContext = function (e) {
                     var t, n, o, r, i;
                     a.addBatchEvent({
                        schemaId: p.trekkieAssetContextSchemaId,
                        payload: {
                           build_id: "88baf04046928b6edf6574afd22dbd026cc7d568",
                           page_url: window.location.href,
                           app_name: null === (t = e.Trekkie) || void 0 === t ? void 0 : t.appName,
                           shop_id: null === (o = null === (n = e.Trekkie) || void 0 === n ? void 0 : n.defaultAttributes) || void 0 === o ? void 0 : o.shopId,
                           monorail_region: (null === (r = e.Trekkie) || void 0 === r ? void 0 : r.monorailRegion) || "not_set",
                           source: null === (i = e.S2S) || void 0 === i ? void 0 : i.source
                        }
                     })
                  }, e.prototype.addBuyWithPrimePresenceListener = function (e) {
                     var t, n, r = null === (n = null === (t = e.Trekkie) || void 0 === t ? void 0 : t.defaultAttributes) || void 0 === n ? void 0 : n.shopId;
                     r && window.addEventListener("message", (function (e) {
                        var t, n, i, s, c, u;
                        try {
                           if ("https://order.buywithprime.amazon.com/" === e.origin) {
                              var d = null === (n = null === (t = window.ShopifyAnalytics) || void 0 === t ? void 0 : t.meta) || void 0 === n ? void 0 : n.product,
                                 l = (null === (i = null == d ? void 0 : d.variants) || void 0 === i ? void 0 : i.length) > 0 ? null === (s = null == d ? void 0 : d.variants[0]) || void 0 === s ? void 0 : s.id : void 0,
                                 f = (null === (u = null === (c = window.ShopifyAnalytics) || void 0 === c ? void 0 : c.meta) || void 0 === u ? void 0 : u.selectedVariantId) || l,
                                 h = {
                                    schemaId: p.buyWithPrimePresenceSchemaId,
                                    payload: o(o(o({
                                       shop_id: r
                                    }, e.data && {
                                       event_message: e.data
                                    }), d && {
                                       product_id: d.id
                                    }), f && {
                                       product_variant_id: Number(f)
                                    })
                                 };
                              a.produce([h])
                           }
                        } catch (e) {
                           g.reportError("buyWithPrimeError", e)
                        }
                     }))
                  }, e.prototype.getNavigationType = function () {
                     try {
                        var e = "PerformanceNavigationTiming",
                           t = l.getNavigationTypeExperimental();
                        return t || (t = l.getNavigationTypeLegacy(), e = "performance.navigation"), t ? {
                           navigationType: t,
                           navigationApi: e
                        } : {
                           navigationType: "unknown",
                           navigationApi: "unknown"
                        }
                     } catch (e) {
                        s.reportError("navigation_api_error", e)
                     }
                     return {
                        navigationType: "error",
                        navigationApi: "error"
                     }
                  }, e.prototype.initialize = function (e, t, n) {
                     this.loadIntegrations(e, t, n)
                  }, e.prototype.getS2SEventId = function (e, t, n) {
                     var o, r, i;
                     void 0 === e && (e = void 0), void 0 === t && (t = {});
                     var a = {
                        navigationApi: this.navigationInfo.navigationApi,
                        navigationType: this.navigationInfo.navigationType
                     };
                     n && (a.serverEventId = n);
                     var s = v.WebPixelEventNameMap[e];
                     try {
                        if ("product_added_to_cart" === s && (null === (o = window.Shopify) || void 0 === o ? void 0 : o.evids)) {
                           var c = function (e) {
                              if (e.productId && e.variantId) return e.productId.toString() + "-" + e.variantId.toString()
                           }(t);
                           i = window.Shopify.evids(s, {
                              analyticsFramework: "trekkie",
                              cacheKey: c
                           })
                        } else i = (null === (r = window.Shopify) || void 0 === r ? void 0 : r.evids) && s ? window.Shopify.evids(s, {
                           analyticsFramework: "trekkie"
                        }) : d.buildToken()
                     } catch (e) {
                        i = d.buildToken()
                     }
                     return {
                        s2sMetadata: a,
                        eventId: "string" == typeof i && i.length > 0 ? i : d.buildToken()
                     }
                  }, e.prototype.loadIntegrations = function (e, t, n) {
                     var o = this,
                        r = this.waitFor(e.length, (function () {
                           try {
                              n()
                           } catch (e) {
                              s.reportError("readyCallback", e)
                           }
                           o.allIntegrationsHaveLoaded = !0, o.flushMonorailEventsIfLoaded()
                        }));
                     e.forEach((function (e) {
                        var n = e[0],
                           i = e[1];
                        try {
                           if (t[n] && "object" == typeof t[n]) {
                              var a = new i({}, t[n], r);
                              a.initializeOrAwaitConsent(), o.integrations.push(a), "Trekkie" === a.name() && (o.trekkie = a)
                           } else r()
                        } catch (e) {
                           r(), s.reportError("loadIntegration", e)
                        }
                     })), this.addConsentCollectedListener()
                  }, e.prototype.handleConsentCollected = function (e) {
                     u.resetConsentCookieCache(), h.default.refreshVisitorTokens(), this.integrations.forEach((function (t) {
                        t.onConsentCollected(e)
                     })), a.flushBatchEvents()
                  }, e.prototype.addConsentCollectedListener = function () {
                     document.addEventListener(u.TrackingEvents.CONSENT_COLLECTED, this.handleConsentCollectedBinded)
                  }, e.prototype.removeConsentCollectedListener = function () {
                     document.removeEventListener(u.TrackingEvents.CONSENT_COLLECTED, this.handleConsentCollectedBinded)
                  }, e.prototype.identify = function (e, t, n) {
                     void 0 === e && (e = ""), void 0 === t && (t = {});
                     var o = this.getS2SEventId();
                     e instanceof Object && (t = e, e = "");
                     for (var r = 0, i = this.integrations; r < i.length; r++) {
                        var a = i[r];
                        try {
                           var c = {
                              id: e,
                              properties: t,
                              eventId: o.eventId,
                              s2sMetadata: o.s2sMetadata
                           };
                           a.identify(c)
                        } catch (e) {
                           s.reportError("identify", e)
                        }
                     }
                     this.flushMonorailEventsIfLoaded()
                  }, e.prototype.page = function (e, t, n) {
                     void 0 === e && (e = ""), void 0 === t && (t = {});
                     var o = this.getS2SEventId("Page View");
                     e instanceof Object && (t = e, e = "");
                     for (var r = this.generatePageObject(e, t, o.eventId, o.s2sMetadata), i = 0, a = this.integrations; i < a.length; i++) {
                        var c = a[i];
                        try {
                           c.emitEventOrAwaitConsent("page", r)
                        } catch (e) {
                           s.reportError("page", e)
                        }
                     }
                     return this.flushMonorailEventsIfLoaded(), o.eventId
                  }, e.prototype.track = function (e, t, n) {
                     void 0 === e && (e = ""), void 0 === t && (t = {});
                     var o = "Checkout One Page View" === e ? "Page View" : e,
                        r = this.getS2SEventId(o, t, n);
                     e instanceof Object && (t = e, e = "");
                     for (var i = {
                           event: e,
                           properties: this.constructTrackArgs(e, t, r),
                           eventId: r.eventId,
                           s2sMetadata: r.s2sMetadata
                        }, a = 0, c = this.integrations; a < c.length; a++) {
                        var u = c[a];
                        try {
                           u.emitEventOrAwaitConsent("track", i)
                        } catch (e) {
                           s.reportError("track", e)
                        }
                     }
                     return this.flushMonorailEventsIfLoaded(), r.eventId
                  }, e.prototype.flushMonorailEventsIfLoaded = function () {
                     this.allIntegrationsHaveLoaded && a.flushBatchEvents()
                  }, e.prototype.ready = function (e) {
                     try {
                        e()
                     } catch (e) {
                        s.reportError("ready", e)
                     }
                  }, e.prototype.waitFor = function (e, t) {
                     return 0 === e ? (setTimeout(t, 0), function () {}) : function () {
                        0 == --e && setTimeout(t, 0)
                     }
                  }, e.prototype.generatePageObject = function (e, t, n, o) {
                     var a = i.href(),
                        s = a.indexOf("?");
                     return s = (a = -1 === s ? "" : a.slice(s)).indexOf("#"), a = "?" === (a = -1 === s ? a : a.slice(0, s)) ? "" : a, {
                        name: e,
                        referrer: r.virtualDocument().referrer(),
                        path: i.pathname(),
                        search: a,
                        title: r.virtualDocument().title(),
                        url: this.url(),
                        properties: t,
                        eventId: n,
                        s2sMetadata: o
                     }
                  }, e.prototype.url = function () {
                     var e = f.canonical();
                     if (e) return e.indexOf("?") > 0 ? e : e + i.search();
                     var t = i.href(),
                        n = t.indexOf("#");
                     return -1 === n ? t : t.slice(0, n)
                  }, e.prototype.constructTrackArgs = function (e, t, n) {
                     if (void 0 === t && (t = {}), f.isPseudoPageEvent(e)) {
                        var r = t,
                           i = r.name,
                           a = r.path;
                        if (i && a) {
                           var s = this.generatePageObject(i, {
                              path: a
                           }, n.eventId, n.s2sMetadata);
                           return o(o({}, t), {
                              page: s
                           })
                        }
                     }
                     return t
                  }, e.prototype.destroy = function () {
                     this.removeConsentCollectedListener()
                  }, e
               }();
            t.Tricorder = y, t.replayAnalyticsQueue = function (e, t) {
               for (var n = 0, o = t; n < o.length; n++) e[s = (a = o[n])[0]] === e.ready && e[s].apply(e, a.slice(1));
               for (var r = 0, i = t; r < i.length; r++) {
                  var a, s;
                  e[s = (a = i[r])[0]] && e[s] !== e.ready && e[s].apply(e, a.slice(1))
               }
            }
         },
         1503: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.virtualDocument = void 0;
            var n = new(function () {
               function e() {}
               return e.prototype.cookieEnabled = function () {
                  return window.navigator.cookieEnabled
               }, e.prototype.cookie = function () {
                  return document.cookie
               }, e.prototype.setCookie = function (e) {
                  document.cookie = e
               }, e.prototype.body = function () {
                  return document.body
               }, e.prototype.referrer = function () {
                  return document.referrer
               }, e.prototype.title = function () {
                  return document.title
               }, e.prototype.createElement = function (e) {
                  return document.createElement(e)
               }, e.prototype.dispatchEvent = function (e) {
                  return document.dispatchEvent(e)
               }, e.prototype.querySelector = function (e) {
                  return document.querySelector(e)
               }, e.prototype.querySelectorAll = function (e) {
                  return document.querySelectorAll(e)
               }, e.prototype.documentElement = function () {
                  return document.documentElement
               }, e.prototype.getElementsByTagName = function (e) {
                  return document.getElementsByTagName(e)
               }, e.prototype.createCustomEvent = function (e, t) {
                  try {
                     return new CustomEvent(e, t)
                  } catch (o) {
                     var n = document.createEvent("CustomEvent");
                     return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                  }
               }, e
            }());
            t.virtualDocument = function () {
               return n
            }
         },
         7e3: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            }), t.virtualWindow = void 0;
            var n = new(function () {
               function e(e) {
                  this.nativeWindow = e
               }
               return e.prototype.location = function () {
                  return this.nativeWindow.location
               }, e.prototype.userAgent = function () {
                  return this.nativeWindow.navigator.userAgent
               }, e.prototype.crypto = function () {
                  return this.nativeWindow.crypto || this.nativeWindow.msCrypto
               }, e.prototype.top = function () {
                  return this.nativeWindow.top ? new e(this.nativeWindow.top) : void 0
               }, e.prototype.parent = function () {
                  return this.nativeWindow.parent ? new e(this.nativeWindow.parent) : void 0
               }, e.prototype.postMessage = function (e, t, n) {
                  this.nativeWindow.postMessage(e, t, n)
               }, e.prototype.addEventListener = function (e, t, n) {
                  this.nativeWindow.addEventListener(e, t, n)
               }, e.prototype.onload = function () {
                  throw new Error("Do not use window.onload due to compatibility reasons. Use addEventListener instead of window.onload")
               }, e
            }())(window);
            t.virtualWindow = function () {
               return n
            }
         },
         803: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
               setupEventIdService: function () {
                  return S
               }
            });
            const o = "sh",
               r = "shu",
               i = "page_viewed",
               a = "collection_viewed",
               s = "product_viewed",
               c = "product_variant_viewed",
               u = "search_submitted",
               d = "product_added_to_cart",
               p = "checkout_started",
               l = "checkout_completed",
               f = "payment_info_submitted",
               g = "checkout_contact_step_started",
               h = "checkout_contact_info_submitted",
               v = "checkout_address_info_submitted",
               _ = "checkout_shipping_step_started",
               y = "checkout_shipping_info_submitted",
               E = "checkout_payment_step_started",
               m = "session_started",
               C = "wpm",
               T = "trekkie";
            let A, P;

            function w(e) {
               return `${e||o}-${function(){const e="xxxx-4xxx-xxxx-xxxxxxxxxxxx";let t="";try{const n=window.crypto,o=new Uint16Array(31);n.getRandomValues(o);let r=0;t=e.replace(/[x]/g,(e=>{const t=o[r]%16;return r++,("x"===e?t:3&t|8).toString(16)})).toUpperCase()}catch(n){t=e.replace(/[x]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})).toUpperCase()}return`
               $ {
                  function () {
                     let e = 0,
                        t = 0;
                     e = (new Date).getTime() >>> 0;
                     try {
                        t = performance.now() >>> 0
                     } catch (e) {
                        t = 0
                     }
                     const n = Math.abs(e + t).toString(16).toLowerCase();
                     return "00000000".substr(0, 8 - n.length) + n
                  }()
               } - $ {
                  t
               }
               `}()}`
            }

            function S() {
               const e = window;
               e.Shopify = e.Shopify || {}, e.Shopify.evids || (A = {
                  [i]: {},
                  [a]: {},
                  [s]: {},
                  [c]: {},
                  [u]: {},
                  [d]: {},
                  [p]: {},
                  [l]: {},
                  [f]: {},
                  [m]: {},
                  [g]: {},
                  [h]: {},
                  [v]: {},
                  [_]: {},
                  [y]: {},
                  [E]: {}
               }, P = {
                  wpm: {},
                  trekkie: {}
               }, e.Shopify.evids = (e, t) => function (e, t) {
                  if (!A[e] || (null == t ? void 0 : t.analyticsFramework) !== T && (null == t ? void 0 : t.analyticsFramework) !== C) return w(r);
                  const n = "string" == typeof (o = t.cacheKey) && o ? o : "default";
                  var o;
                  const i = function (e, t, n) {
                     const o = P[t];
                     return void 0 === o[e] && (o[e] = {}), void 0 === o[e][n] ? o[e][n] = 0 : o[e][n] += 1, o[e][n]
                  }(e, t.analyticsFramework, n);
                  return function (e, t, n) {
                     const o = A[e];
                     if (void 0 === o[n]) {
                        const e = w();
                        o[n] = [e]
                     } else if (void 0 === o[n][t]) {
                        const e = w();
                        o[n].push(e)
                     }
                     return o[n][t]
                  }(e, i, n)
               }(e, t))
            }
         }
      },
      t = {};

   function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var i = t[o] = {
         exports: {}
      };
      return e[o].call(i.exports, i, i.exports, n), i.exports
   }
   n.d = function (e, t) {
         for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
         })
      }, n.o = function (e, t) {
         return Object.prototype.hasOwnProperty.call(e, t)
      }, n.r = function (e) {
         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
         }), Object.defineProperty(e, "__esModule", {
            value: !0
         })
      },
      function () {
         "use strict";
         var e = n(9426),
            t = n(2971),
            o = n(6851),
            r = "trekkie",
            i = [],
            a = n(8831);
         i.push(["Trekkie", a.Trekkie]);
         var s = n(8878);
         i.push(["Facebook Pixel", s.FacebookPixel]);
         var c = n(7575);
         i.push(["Google Analytics", c.GoogleAnalytics]);
         var u = n(8142);
         i.push(["Pinterest Pixel", u.Pinterest]);
         var d = n(6971);
         i.push(["Snap Pixel", d.Snap]);
         var p = n(342);
         i.push(["TikTok Pixel", p.TikTok]);
         var l = n(2724);
         i.push(["Session Attribution", l.SessionAttribution]);
         var f = n(5087);
         i.push(["Google Gtag Pixel", f.GoogleGtag]);
         var g = n(3653);
         i.push(["S2S", g.S2S]);
         try {
            var h = window[r].config;
            if (h) {
               t.setGlobalSerializedAppConfig(JSON.stringify(h));
               var v = window[r],
                  _ = window.trekkie = new e.Tricorder(i, h, (function () {
                     window[r] = _, window._visit = {
                        tag: function () {},
                        multitrackToken: function () {
                           o.default.uniqToken
                        }
                     }, _.user = function () {
                        return {
                           traits: function () {
                              return {
                                 uniqToken: o.default.uniqToken
                              }
                           }
                        }
                     }, e.replayAnalyticsQueue(_, v)
                  }))
            }
         } catch (e) {
            t.reportError("index_storefront", e)
         }
      }()
}();