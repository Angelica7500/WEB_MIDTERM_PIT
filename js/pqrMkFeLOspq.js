(() => {
   "use strict";
   var e, a, t, r, o, c = {},
      n = {};

   function i(e) {
      var a = n[e];
      if (void 0 !== a) return a.exports;
      var t = n[e] = {
         id: e,
         loaded: !1,
         exports: {}
      };
      return c[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
   }
   i.m = c, e = [], i.O = (a, t, r, o) => {
      if (!t) {
         var c = 1 / 0;
         for (b = 0; b < e.length; b++) {
            for (var [t, r, o] = e[b], n = !0, f = 0; f < t.length; f++)(!1 & o || c >= o) && Object.keys(i.O).every((e => i.O[e](t[f]))) ? t.splice(f--, 1) : (n = !1, o < c && (c = o));
            if (n) {
               e.splice(b--, 1);
               var d = r();
               void 0 !== d && (a = d)
            }
         }
         return a
      }
      o = o || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > o; b--) e[b] = e[b - 1];
      e[b] = [t, r, o]
   }, i.n = e => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, {
         a
      }), a
   }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function (e, r) {
      if (1 & r && (e = this(e)), 8 & r) return e;
      if ("object" == typeof e && e) {
         if (4 & r && e.__esModule) return e;
         if (16 & r && "function" == typeof e.then) return e
      }
      var o = Object.create(null);
      i.r(o);
      var c = {};
      a = a || [null, t({}), t([]), t(t)];
      for (var n = 2 & r && e;
         "object" == typeof n && !~a.indexOf(n); n = t(n)) Object.getOwnPropertyNames(n).forEach((a => c[a] = () => e[a]));
      return c.default = () => e, i.d(o, c), o
   }, i.d = (e, a) => {
      for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
         enumerable: !0,
         get: a[t]
      })
   }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "baseline/" + e + "-" + {
      "LocaleBarEditor_2whdi-i18n": "a8cc6f247dd5983fe1eb77c58a294451f8920f1d0639b44b5c9929e4482a4504",
      "PreviewSelectors_831nu-i18n": "55d7a489fe58ecd125d1f82d2133817aa196ebde1caca50d08c50bfc3a46efbd",
      "SideBarPanel_ulmko-i18n": "27c44fe99d50b35a3c36309bfae38d8c45065dfc372751462de56197a34cc9d1",
      "MainPanel_mhk7x-i18n": "02f4e7520bcc0592db5f745641bb40a50fb19950dd807fcf9c412ce00f88c4b1",
      "EmptyState_8dgj1-i18n": "a817edd77b6388f0eb4ed95ae75750836e341f886aaa8717933fb09f1fe0c955",
      "LocaleBarBlock_bq3tj-i18n": "c81b12bdb2091b3c26d25318cfa8521bce10a06f04eff68f27e1a591dab4171b",
      "SelectorsBlock_baki2-i18n": "6027e9a4220614da83b4982d307f548ae27d1c03074067324220f2f4fe9893cc",
      "Credits_13ohs-i18n": "b0092546e4dbc1aaec7db1038f5388b5c2423fa98c99166ee1b5195b84da3ff9",
      "CustomizeSelectorsPanel_1cr5f-i18n": "95be5e00a0b6b36226efce2e61b95002b27163cb54a209d9bd675b5eb6ead17c",
      "ConfirmationModal_5zgrx-i18n": "997a5681cb53b821673bcf02ff83ae69332ad263abde34b83cab8b47e393becb",
      "CustomizeBarPanel_17067-i18n": "7084ec4d191aea181ce3335245fd4709b8c7e929cbd4be6d15fcb471e9898271",
      "ColorBlock_1y67i-i18n": "388a857d38e6cb8fa271125afe9482ca10813dcb76852a12a8f38c867d3951fe",
      "ColorPicker_o4xsa-i18n": "b63eae188902163fb66a434cf59511ca2addc887dca32c1594008dcac5ffeae7",
      "MobileBottomPreviewBar_cwz2g-i18n": "92bf739e8eb58c0d9f06311a62103c9bee1f89e38dd1ed8fdec27fe002bcc58f",
      "FirstSaveModal_128zn-i18n": "17fd024571e32a8b696e30133804a18192be41ef4b91d9f4cc7afa461fac1d78"
   } [e] + ".js", i.miniCssF = e => {}, i.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
         return this || new Function("return this")()
      } catch (e) {
         if ("object" == typeof window) return window
      }
   }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, o = "_GeoLocationRecommendations:", i.l = (e, a, t, c) => {
      if (r[e]) r[e].push(a);
      else {
         var n, f;
         if (void 0 !== t)
            for (var d = document.getElementsByTagName("script"), b = 0; b < d.length; b++) {
               var l = d[b];
               if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + t) {
                  n = l;
                  break
               }
            }
         n || (f = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", o + t), n.src = e), r[e] = [a];
         var u = (a, t) => {
               n.onerror = n.onload = null, clearTimeout(s);
               var o = r[e];
               if (delete r[e], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(t))), a) return a(t)
            },
            s = setTimeout(u.bind(null, void 0, {
               type: "timeout",
               target: n
            }), 12e4);
         n.onerror = u.bind(null, n.onerror), n.onload = u.bind(null, n.onload), f && document.head.appendChild(n)
      }
   }, i.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(e, "__esModule", {
         value: !0
      })
   }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), i.p = "https://cdn.shopify.com/shopifycloud/geolocation-production/bundles/", (() => {
      var e = {
         runtime: 0
      };
      i.f.j = (a, t) => {
         var r = i.o(e, a) ? e[a] : void 0;
         if (0 !== r)
            if (r) t.push(r[2]);
            else if ("runtime" != a) {
            var o = new Promise(((t, o) => r = e[a] = [t, o]));
            t.push(r[2] = o);
            var c = i.p + i.u(a),
               n = new Error;
            i.l(c, (t => {
               if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                     c = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + o + ": " + c + ")", n.name = "ChunkLoadError", n.type = o, n.request = c, r[1](n)
               }
            }), "chunk-" + a, a)
         } else e[a] = 0
      }, i.O.j = a => 0 === e[a];
      var a = (a, t) => {
            var r, o, [c, n, f] = t,
               d = 0;
            if (c.some((a => 0 !== e[a]))) {
               for (r in n) i.o(n, r) && (i.m[r] = n[r]);
               if (f) var b = f(i)
            }
            for (a && a(t); d < c.length; d++) o = c[d], i.o(e, o) && e[o] && e[o][0](), e[o] = 0;
            return i.O(b)
         },
         t = self.webpackChunk_GeoLocationRecommendations = self.webpackChunk_GeoLocationRecommendations || [];
      t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
   })()
})();
(self.webpackChunk_GeoLocationRecommendations = self.webpackChunk_GeoLocationRecommendations || []).push([
   ["selectors"], {
      "./app/javascript/selectors/index.ts": (e, t, n) => {
         "use strict";
         n.r(t);
         var o = n("./app/ui/utility/index.ts"),
            r = n("./node_modules/@babel/runtime/helpers/extends.js"),
            l = n.n(r),
            i = n("./node_modules/preact/dist/preact.module.js"),
            _ = n("./node_modules/@babel/runtime/helpers/defineProperty.js"),
            u = n.n(_),
            s = n("./node_modules/@babel/runtime/helpers/objectSpread2.js"),
            c = n.n(s),
            a = n("./node_modules/preact/hooks/dist/hooks.module.js"),
            d = n("./app/javascript/shared/cookies.ts"),
            p = n("./app/javascript/shared/i18n.tsx");
         const f = {
            container: "locale-selectors__container",
            content: "locale-selectors__content",
            form: "locale-selectors__form",
            selector: "locale-selectors__selector",
            label: "locale-selectors__label"
         };
         var h = n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
            m = n.n(h);

         function v() {
            var e = (0, a.eJ)(),
               t = m()(e, 2),
               n = t[0],
               o = t[1],
               r = function (e, t) {
                  var n = (0, a.sO)(null),
                     o = (0, a.sO)(e);
                  o.current = e;
                  var r = (0, a.I4)((function () {
                     for (var e = arguments.length, r = new Array(e), l = 0; l < e; l++) r[l] = arguments[l];
                     n.current && clearTimeout(n.current), n.current = setTimeout((function () {
                        return o.current.apply(o, r)
                     }), t)
                  }), [t]);
                  return (0, a.d4)((function () {
                     return function () {
                        n.current && clearTimeout(n.current)
                     }
                  }), []), r
               }((function () {
                  var e = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
                  e.lastChild();
                  for (var t = 0, n = [], r = "", l = "", i = "", _ = ""; !(++t > 100);) {
                     var u = e.currentNode;
                     if (n[0] !== u)
                        if (u instanceof HTMLElement) {
                           var s = window.getComputedStyle(u);
                           if (u === window.LocaleSelectors.root || u.hidden || "fixed" === s.position || "absolute" === s.position || "none" === s.display || "hidden" === s.visibility) e.previousSibling() || e.previousNode();
                           else {
                              if (r = s.maxWidth, l = s.marginLeft, i = s.paddingLeft, "rgba(0, 0, 0, 0)" !== s.backgroundColor && (_ = s.backgroundColor), "center" !== s.textAlign && ("none" !== r || parseInt(l, 10) > 0 || parseInt(i, 10) > 0)) break;
                              n.unshift(u), e.lastChild()
                           }
                        } else e.previousSibling() || e.previousNode();
                     else n.shift(), e.previousSibling() || e.previousNode()
                  }
                  o({
                     outerContainerStyles: {
                        backgroundColor: _
                     },
                     innerContainerStyles: {
                        maxWidth: r,
                        marginLeft: l,
                        marginRight: l,
                        paddingLeft: i,
                        paddingRight: i
                     }
                  })
               }), 100);
            return (0, a.d4)((function () {
               return window.addEventListener("resize", r), n || r(),
                  function () {
                     return window.removeEventListener("resize", r)
                  }
            }), []), n
         }

         function y(e) {
            var t, n = e.languages,
               r = e.countries,
               l = e.preview,
               _ = (0, a.sO)(null),
               s = (0, a.I4)((function () {
                  var e = _.current;
                  e && (l ? "function" == typeof e.requestSubmit ? e.requestSubmit() : e.dispatchEvent(new Event("submit", {
                     cancelable: !0
                  })) : ((0, d.qO)(), e.submit()))
               }), [_, l]),
               h = (0, a.I4)((function (e) {
                  if (l) {
                     e.preventDefault();
                     var t = new FormData(e.target),
                        n = {};
                     t.forEach((function (e, t) {
                        return n[t] = e
                     }));
                     var r = {
                        action: "locale-selectors:submit",
                        detail: {
                           formData: n
                        }
                     };
                     window.parent.postMessage(r, "https://".concat(o.Id))
                  }
               }), [l]),
               m = v(),
               y = window.Shopify.country,
               g = Object.keys(n).filter((function (e) {
                  var t;
                  return null === (t = r[y]) || void 0 === t ? void 0 : t.languages.includes(e)
               })).reduce((function (e, t) {
                  return c()(c()({}, e), {}, u()({}, t, n[t]))
               }), {}),
               w = Object.keys(g),
               x = w.length >= 1 ? w[0] : "",
               k = window.Shopify.locale ? window.Shopify.locale : x,
               S = k.slice(0, 2),
               j = Object.keys(r).reduce((function (e, t) {
                  var n = r[t];
                  return c()(c()({}, e), {}, u()({}, t, n.country_name[k] || n.country_name[S]))
               }), {}),
               M = Object.keys(r).sort((function (e, t) {
                  return j[e].localeCompare(j[t])
               })).reduce((function (e, t) {
                  var n = r[t],
                     o = n.currency_sign ? "".concat(n.currency_code, " ").concat(n.currency_sign) : "".concat(n.currency_code);
                  return c()(c()({}, e), {}, u()({}, t, "".concat(j[t], " (").concat(o, ")")))
               }), {}),
               L = (0, p.T)(null !== (t = window.LocaleSelectors.translations) && void 0 !== t ? t : {}, k),
               O = L("country_selector.label"),
               C = L("language_selector.label");
            return (0, i.h)("div", {
               className: f.container,
               style: null == m ? void 0 : m.outerContainerStyles
            }, (0, i.h)("div", {
               className: f.content,
               style: null == m ? void 0 : m.innerContainerStyles
            }, (0, i.h)("form", {
               action: "/localization",
               method: "POST",
               onSubmit: h,
               ref: _
            }, (0, i.h)("input", {
               name: "_method",
               type: "hidden",
               value: "PUT"
            }), (0, i.h)("input", {
               name: "source",
               type: "hidden",
               value: "geolocation_selector"
            }), (0, i.h)("input", {
               name: "return_to",
               type: "hidden",
               value: (0, o.JN)(location)
            }), (0, i.h)(b, {
               name: "country_code",
               options: M,
               selected: y,
               onChange: s,
               label: O
            }), (0, i.h)(b, {
               name: "locale_code",
               options: g,
               selected: k,
               onChange: s,
               label: C
            }))))
         }

         function b(e) {
            var t = e.name,
               n = e.onChange,
               o = e.options,
               r = e.selected,
               l = e.label,
               _ = Object.keys(o);
            return _.length <= 1 ? null : (0, i.h)("label", {
               className: f.label,
               id: "".concat(t, "_label"),
               htmlFor: t
            }, (0, i.h)("span", null, l), (0, i.h)("select", {
               id: t,
               className: f.selector,
               name: t,
               value: r,
               onChange: n
            }, _.map((function (e) {
               return (0, i.h)("option", {
                  key: e,
                  value: e
               }, o[e])
            }))))
         }
         var g = /^\/([a-z]{2,3}(-[a-zA-Z0-9-]+)?\/)?password/,
            w = /^\/([a-z]{2,3}(-[a-zA-Z0-9-]+)?\/)?gift_cards/;

         function x() {
            window.LocaleSelectors = window.LocaleSelectors || {}, window.LocaleSelectors.root || (window.LocaleSelectors.root = document.createElement("div"), document.body.appendChild(window.LocaleSelectors.root)), window.LocaleSelectors.style || (window.LocaleSelectors.style = document.createElement("style"), document.head.appendChild(window.LocaleSelectors.style))
         }
         if (x(), window.LocaleSelectors.cleanup = function () {
               var e, t;
               null === (e = window.LocaleSelectors.root) || void 0 === e || e.remove(), delete window.LocaleSelectors.root, null === (t = window.LocaleSelectors.style) || void 0 === t || t.remove(), delete window.LocaleSelectors.style, x()
            }, window.LocaleSelectors.render = function (e) {
               var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).preview,
                  n = void 0 !== t && t,
                  o = window.LocaleSelectors.root;
               o && (o.innerHTML = "", window.location.pathname.match(g) || window.location.pathname.match(w) || (0, i.sY)((0, i.h)(y, l()({}, e, {
                  preview: n
               })), o))
            }, window.location.host === o.h_) {
            window.parent.postMessage({
               action: "locale-selectors:ready"
            }, "https://".concat(o.Id))
         }
      },
      "./app/javascript/shared/cookies.ts": (e, t, n) => {
         "use strict";
         n.d(t, {
            FL: () => d,
            Xd: () => c,
            Xu: () => a,
            Zt: () => p,
            _$: () => f,
            ej: () => m,
            qO: () => u,
            s_: () => s
         });
         var o = "locale_bar_dismissed",
            r = 86400,
            l = "locale_bar_accepted",
            i = "locale_bar_experiment_accepted",
            _ = "locale_selectors_selected";

         function u() {
            document.cookie = "".concat(_, "=1;path=/")
         }

         function s() {
            document.cookie = "".concat(l, "=1;path=/")
         }

         function c() {
            document.cookie = "".concat(i, "=1;path=/")
         }

         function a() {
            document.cookie = "".concat(o, "=1;path=/;max-age=").concat(r)
         }

         function d() {
            var e;
            return (null === (e = window.Shopify) || void 0 === e || !e.designMode) && (window.location.search.match(/shpxid/) ? (s(), !1) : !(document.querySelector("[data-geolocation-app-storefront-preview]") || h(l) || h(o) || h(_)))
         }

         function p() {
            return "us" !== window.Shopify.country.toLowerCase()
         }

         function f() {
            return !h(i)
         }

         function h(e) {
            return v(e).length > 0
         }

         function m(e) {
            var t = v(e);
            if (0 !== t.length) return t[0].trim().split("=")[1]
         }

         function v(e) {
            return document.cookie.split(";").filter((function (t) {
               return 0 === t.trim().indexOf("".concat(e, "="))
            }))
         }
      },
      "./app/javascript/shared/i18n.tsx": (e, t, n) => {
         "use strict";
         n.d(t, {
            T: () => l
         });
         var o = n("./node_modules/preact/dist/preact.module.js"),
            r = n("./node_modules/preact/hooks/dist/hooks.module.js");

         function l(e, t) {
            var n = e[t],
               l = ["zh-CN", "zh-TW", "pt-PT", "pt-BR"].includes(t) ? t : t.slice(0, 2);
            if (!n && e[l] && (n = e[l]), !n) throw new Error("No translations for ".concat(t, " or ").concat(l));
            return (0, r.I4)((function (e, t) {
               var r = e.split(".").reduce((function (e, t) {
                  return i(e.value) ? {
                     value: e.value[t]
                  } : e
               }), {
                  value: n
               });
               if (i(r.value)) throw new Error("Translation key: ".concat(e, ", did not result in a translation string ").concat(JSON.stringify(r.value)));
               if (!t) return r.value;
               var l = r.value.split(/{{(.+?)}}/).map((function (e, n) {
                  return n % 2 ? t[e.trim()] : e
               })).filter((function (e) {
                  return e
               }));
               return (0, o.h)(o.HY, null, l)
            }), [n])
         }

         function i(e) {
            return !("string" == typeof e)
         }
      },
      "./app/ui/utility/index.ts": (e, t, n) => {
         "use strict";
         n.d(t, {
            Id: () => l,
            JN: () => _,
            fm: () => r,
            h_: () => i,
            sk: () => o
         });
         var o = "undefined" == typeof window;

         function r(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
         }
         var l = "geolocation-recommendations.shopifyapps.com",
            i = "shopify-geolocation-proxy.com";

         function _(e) {
            var t = new URLSearchParams(e.search);
            ["country", "currency"].forEach((function (e) {
               t.delete(e)
            }));
            var n = t.toString();
            return "" === n ? e.pathname : "".concat(e.pathname, "?").concat(n)
         }
      },
      "./node_modules/preact/dist/preact.module.js": (e, t, n) => {
         "use strict";
         n.d(t, {
            HY: () => y,
            YM: () => r,
            h: () => m,
            sY: () => D
         });
         var o, r, l, i, _, u, s, c = {},
            a = [],
            d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            p = Array.isArray;

         function f(e, t) {
            for (var n in t) e[n] = t[n];
            return e
         }

         function h(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
         }

         function m(e, t, n) {
            var r, l, i, _ = {};
            for (i in t) "key" == i ? r = t[i] : "ref" == i ? l = t[i] : _[i] = t[i];
            if (arguments.length > 2 && (_.children = arguments.length > 3 ? o.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
               for (i in e.defaultProps) void 0 === _[i] && (_[i] = e.defaultProps[i]);
            return v(e, _, r, l, null)
         }

         function v(e, t, n, o, i) {
            var _ = {
               type: e,
               props: t,
               key: n,
               ref: o,
               __k: null,
               __: null,
               __b: 0,
               __e: null,
               __d: void 0,
               __c: null,
               __h: null,
               constructor: void 0,
               __v: null == i ? ++l : i
            };
            return null == i && null != r.vnode && r.vnode(_), _
         }

         function y(e) {
            return e.children
         }

         function b(e, t) {
            this.props = e, this.context = t
         }

         function g(e, t) {
            if (null == t) return e.__ ? g(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
               if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? g(e) : null
         }

         function w(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
               for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                  if (null != (n = e.__k[t]) && null != n.__e) {
                     e.__e = e.__c.base = n.__e;
                     break
                  } return w(e)
            }
         }

         function x(e) {
            (!e.__d && (e.__d = !0) && i.push(e) && !k.__r++ || _ !== r.debounceRendering) && ((_ = r.debounceRendering) || u)(k)
         }

         function k() {
            var e, t, n, o, r, l, _, u;
            for (i.sort(s); e = i.shift();) e.__d && (t = i.length, o = void 0, r = void 0, _ = (l = (n = e).__v).__e, (u = n.__P) && (o = [], (r = f({}, l)).__v = l.__v + 1, T(u, l, r, n.__n, void 0 !== u.ownerSVGElement, null != l.__h ? [_] : null, o, null == _ ? g(l) : _, l.__h), N(o, l), l.__e != _ && w(l)), i.length > t && i.sort(s));
            k.__r = 0
         }

         function S(e, t, n, o, r, l, i, _, u, s) {
            var d, f, h, m, b, w, x, k = o && o.__k || a,
               S = k.length;
            for (n.__k = [], d = 0; d < t.length; d++)
               if (null != (m = n.__k[d] = null == (m = t[d]) || "boolean" == typeof m || "function" == typeof m ? null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? v(null, m, null, null, m) : p(m) ? v(y, {
                     children: m
                  }, null, null, null) : m.__b > 0 ? v(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m)) {
                  if (m.__ = n, m.__b = n.__b + 1, null === (h = k[d]) || h && m.key == h.key && m.type === h.type) k[d] = void 0;
                  else
                     for (f = 0; f < S; f++) {
                        if ((h = k[f]) && m.key == h.key && m.type === h.type) {
                           k[f] = void 0;
                           break
                        }
                        h = null
                     }
                  T(e, m, h = h || c, r, l, i, _, u, s), b = m.__e, (f = m.ref) && h.ref != f && (x || (x = []), h.ref && x.push(h.ref, null, m), x.push(f, m.__c || b, m)), null != b ? (null == w && (w = b), "function" == typeof m.type && m.__k === h.__k ? m.__d = u = j(m, u, e) : u = M(e, m, h, k, b, u), "function" == typeof n.type && (n.__d = u)) : u && h.__e == u && u.parentNode != e && (u = g(h))
               } for (n.__e = w, d = S; d--;) null != k[d] && ("function" == typeof n.type && null != k[d].__e && k[d].__e == n.__d && (n.__d = L(o).nextSibling), Y(k[d], k[d]));
            if (x)
               for (d = 0; d < x.length; d++) A(x[d], x[++d], x[++d])
         }

         function j(e, t, n) {
            for (var o, r = e.__k, l = 0; r && l < r.length; l++)(o = r[l]) && (o.__ = e, t = "function" == typeof o.type ? j(o, t, n) : M(n, o, o, r, o.__e, t));
            return t
         }

         function M(e, t, n, o, r, l) {
            var i, _, u;
            if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
            else if (null == n || r != l || null == r.parentNode) e: if (null == l || l.parentNode !== e) e.appendChild(r), i = null;
               else {
                  for (_ = l, u = 0;
                     (_ = _.nextSibling) && u < o.length; u += 1)
                     if (_ == r) break e;
                  e.insertBefore(r, l), i = l
               } return void 0 !== i ? i : r.nextSibling
         }

         function L(e) {
            var t, n, o;
            if (null == e.type || "string" == typeof e.type) return e.__e;
            if (e.__k)
               for (t = e.__k.length - 1; t >= 0; t--)
                  if ((n = e.__k[t]) && (o = L(n))) return o;
            return null
         }

         function O(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || d.test(t) ? n : n + "px"
         }

         function C(e, t, n, o, r) {
            var l;
            e: if ("style" === t)
               if ("string" == typeof n) e.style.cssText = n;
               else {
                  if ("string" == typeof o && (e.style.cssText = o = ""), o)
                     for (t in o) n && t in n || O(e.style, t, "");
                  if (n)
                     for (t in n) o && n[t] === o[t] || O(e.style, t, n[t])
               }
            else if ("o" === t[0] && "n" === t[1]) l = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + l] = n, n ? o || e.addEventListener(t, l ? E : P, l) : e.removeEventListener(t, l ? E : P, l);
            else if ("dangerouslySetInnerHTML" !== t) {
               if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
               else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && t in e) try {
                  e[t] = null == n ? "" : n;
                  break e
               } catch (e) {}
               "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
         }

         function P(e) {
            return this.l[e.type + !1](r.event ? r.event(e) : e)
         }

         function E(e) {
            return this.l[e.type + !0](r.event ? r.event(e) : e)
         }

         function T(e, t, n, o, l, i, _, u, s) {
            var c, a, d, h, m, v, g, w, x, k, j, M, L, O, C, P = t.type;
            if (void 0 !== t.constructor) return null;
            null != n.__h && (s = n.__h, u = t.__e = n.__e, t.__h = null, i = [u]), (c = r.__b) && c(t);
            try {
               e: if ("function" == typeof P) {
                  if (w = t.props, x = (c = P.contextType) && o[c.__c], k = c ? x ? x.props.value : c.__ : o, n.__c ? g = (a = t.__c = n.__c).__ = a.__E : ("prototype" in P && P.prototype.render ? t.__c = a = new P(w, k) : (t.__c = a = new b(w, k), a.constructor = P, a.render = I), x && x.sub(a), a.props = w, a.state || (a.state = {}), a.context = k, a.__n = o, d = a.__d = !0, a.__h = [], a._sb = []), null == a.__s && (a.__s = a.state), null != P.getDerivedStateFromProps && (a.__s == a.state && (a.__s = f({}, a.__s)), f(a.__s, P.getDerivedStateFromProps(w, a.__s))), h = a.props, m = a.state, a.__v = t, d) null == P.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);
                  else {
                     if (null == P.getDerivedStateFromProps && w !== h && null != a.componentWillReceiveProps && a.componentWillReceiveProps(w, k), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(w, a.__s, k) || t.__v === n.__v) {
                        for (t.__v !== n.__v && (a.props = w, a.state = a.__s, a.__d = !1), a.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function (e) {
                              e && (e.__ = t)
                           })), j = 0; j < a._sb.length; j++) a.__h.push(a._sb[j]);
                        a._sb = [], a.__h.length && _.push(a);
                        break e
                     }
                     null != a.componentWillUpdate && a.componentWillUpdate(w, a.__s, k), null != a.componentDidUpdate && a.__h.push((function () {
                        a.componentDidUpdate(h, m, v)
                     }))
                  }
                  if (a.context = k, a.props = w, a.__P = e, M = r.__r, L = 0, "prototype" in P && P.prototype.render) {
                     for (a.state = a.__s, a.__d = !1, M && M(t), c = a.render(a.props, a.state, a.context), O = 0; O < a._sb.length; O++) a.__h.push(a._sb[O]);
                     a._sb = []
                  } else
                     do {
                        a.__d = !1, M && M(t), c = a.render(a.props, a.state, a.context), a.state = a.__s
                     } while (a.__d && ++L < 25);
                  a.state = a.__s, null != a.getChildContext && (o = f(f({}, o), a.getChildContext())), d || null == a.getSnapshotBeforeUpdate || (v = a.getSnapshotBeforeUpdate(h, m)), S(e, p(C = null != c && c.type === y && null == c.key ? c.props.children : c) ? C : [C], t, n, o, l, i, _, u, s), a.base = t.__e, t.__h = null, a.__h.length && _.push(a), g && (a.__E = a.__ = null), a.__e = !1
               } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = H(n.__e, t, n, o, l, i, _, s);
               (c = r.diffed) && c(t)
            }
            catch (e) {
               t.__v = null, (s || null != i) && (t.__e = u, t.__h = !!s, i[i.indexOf(u)] = null), r.__e(e, t, n)
            }
         }

         function N(e, t) {
            r.__c && r.__c(t, e), e.some((function (t) {
               try {
                  e = t.__h, t.__h = [], e.some((function (e) {
                     e.call(t)
                  }))
               } catch (e) {
                  r.__e(e, t.__v)
               }
            }))
         }

         function H(e, t, n, r, l, i, _, u) {
            var s, a, d, f = n.props,
               m = t.props,
               v = t.type,
               y = 0;
            if ("svg" === v && (l = !0), null != i)
               for (; y < i.length; y++)
                  if ((s = i[y]) && "setAttribute" in s == !!v && (v ? s.localName === v : 3 === s.nodeType)) {
                     e = s, i[y] = null;
                     break
                  } if (null == e) {
               if (null === v) return document.createTextNode(m);
               e = l ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, m.is && m), i = null, u = !1
            }
            if (null === v) f === m || u && e.data === m || (e.data = m);
            else {
               if (i = i && o.call(e.childNodes), a = (f = n.props || c).dangerouslySetInnerHTML, d = m.dangerouslySetInnerHTML, !u) {
                  if (null != i)
                     for (f = {}, y = 0; y < e.attributes.length; y++) f[e.attributes[y].name] = e.attributes[y].value;
                  (d || a) && (d && (a && d.__html == a.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""))
               }
               if (function (e, t, n, o, r) {
                     var l;
                     for (l in n) "children" === l || "key" === l || l in t || C(e, l, null, n[l], o);
                     for (l in t) r && "function" != typeof t[l] || "children" === l || "key" === l || "value" === l || "checked" === l || n[l] === t[l] || C(e, l, t[l], n[l], o)
                  }(e, m, f, l, u), d) t.__k = [];
               else if (S(e, p(y = t.props.children) ? y : [y], t, n, r, l && "foreignObject" !== v, i, _, i ? i[0] : n.__k && g(n, 0), u), null != i)
                  for (y = i.length; y--;) null != i[y] && h(i[y]);
               u || ("value" in m && void 0 !== (y = m.value) && (y !== e.value || "progress" === v && !y || "option" === v && y !== f.value) && C(e, "value", y, f.value, !1), "checked" in m && void 0 !== (y = m.checked) && y !== e.checked && C(e, "checked", y, f.checked, !1))
            }
            return e
         }

         function A(e, t, n) {
            try {
               "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
               r.__e(e, n)
            }
         }

         function Y(e, t, n) {
            var o, l;
            if (r.unmount && r.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || A(o, null, t)), null != (o = e.__c)) {
               if (o.componentWillUnmount) try {
                  o.componentWillUnmount()
               } catch (e) {
                  r.__e(e, t)
               }
               o.base = o.__P = null, e.__c = void 0
            }
            if (o = e.__k)
               for (l = 0; l < o.length; l++) o[l] && Y(o[l], t, n || "function" != typeof e.type);
            n || null == e.__e || h(e.__e), e.__ = e.__e = e.__d = void 0
         }

         function I(e, t, n) {
            return this.constructor(e, n)
         }

         function D(e, t, n) {
            var l, i, _;
            r.__ && r.__(e, t), i = (l = "function" == typeof n) ? null : n && n.__k || t.__k, _ = [], T(t, e = (!l && n || t).__k = m(y, null, [e]), i || c, c, void 0 !== t.ownerSVGElement, !l && n ? [n] : i ? null : t.firstChild ? o.call(t.childNodes) : null, _, !l && n ? n : i ? i.__e : t.firstChild, l), N(_, e)
         }
         o = a.slice, r = {
            __e: function (e, t, n, o) {
               for (var r, l, i; t = t.__;)
                  if ((r = t.__c) && !r.__) try {
                     if ((l = r.constructor) && null != l.getDerivedStateFromError && (r.setState(l.getDerivedStateFromError(e)), i = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), i = r.__d), i) return r.__E = r
                  } catch (t) {
                     e = t
                  }
               throw e
            }
         }, l = 0, b.prototype.setState = function (e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof e && (e = e(f({}, n), this.props)), e && f(n, e), null != e && this.__v && (t && this._sb.push(t), x(this))
         }, b.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), x(this))
         }, b.prototype.render = y, i = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, s = function (e, t) {
            return e.__v.__b - t.__v.__b
         }, k.__r = 0
      },
      "./node_modules/preact/hooks/dist/hooks.module.js": (e, t, n) => {
         "use strict";
         n.d(t, {
            I4: () => w,
            d4: () => y,
            eJ: () => v,
            sO: () => b
         });
         var o, r, l, i, _ = n("./node_modules/preact/dist/preact.module.js"),
            u = 0,
            s = [],
            c = [],
            a = _.YM.__b,
            d = _.YM.__r,
            p = _.YM.diffed,
            f = _.YM.__c,
            h = _.YM.unmount;

         function m(e, t) {
            _.YM.__h && _.YM.__h(r, e, u || t), u = 0;
            var n = r.__H || (r.__H = {
               __: [],
               __h: []
            });
            return e >= n.__.length && n.__.push({
               __V: c
            }), n.__[e]
         }

         function v(e) {
            return u = 1,
               function (e, t, n) {
                  var l = m(o++, 2);
                  if (l.t = e, !l.__c && (l.__ = [n ? n(t) : O(void 0, t), function (e) {
                        var t = l.__N ? l.__N[0] : l.__[0],
                           n = l.t(t, e);
                        t !== n && (l.__N = [n, l.__[1]], l.__c.setState({}))
                     }], l.__c = r, !r.u)) {
                     var i = function (e, t, n) {
                        if (!l.__c.__H) return !0;
                        var o = l.__c.__H.__.filter((function (e) {
                           return e.__c
                        }));
                        if (o.every((function (e) {
                              return !e.__N
                           }))) return !_ || _.call(this, e, t, n);
                        var r = !1;
                        return o.forEach((function (e) {
                           if (e.__N) {
                              var t = e.__[0];
                              e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (r = !0)
                           }
                        })), !(!r && l.__c.props === e) && (!_ || _.call(this, e, t, n))
                     };
                     r.u = !0;
                     var _ = r.shouldComponentUpdate,
                        u = r.componentWillUpdate;
                     r.componentWillUpdate = function (e, t, n) {
                        if (this.__e) {
                           var o = _;
                           _ = void 0, i(e, t, n), _ = o
                        }
                        u && u.call(this, e, t, n)
                     }, r.shouldComponentUpdate = i
                  }
                  return l.__N || l.__
               }(O, e)
         }

         function y(e, t) {
            var n = m(o++, 3);
            !_.YM.__s && L(n.__H, t) && (n.__ = e, n.i = t, r.__H.__h.push(n))
         }

         function b(e) {
            return u = 5, g((function () {
               return {
                  current: e
               }
            }), [])
         }

         function g(e, t) {
            var n = m(o++, 7);
            return L(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
         }

         function w(e, t) {
            return u = 8, g((function () {
               return e
            }), t)
         }

         function x() {
            for (var e; e = s.shift();)
               if (e.__P && e.__H) try {
                  e.__H.__h.forEach(j), e.__H.__h.forEach(M), e.__H.__h = []
               } catch (r) {
                  e.__H.__h = [], _.YM.__e(r, e.__v)
               }
         }
         _.YM.__b = function (e) {
            r = null, a && a(e)
         }, _.YM.__r = function (e) {
            d && d(e), o = 0;
            var t = (r = e.__c).__H;
            t && (l === r ? (t.__h = [], r.__h = [], t.__.forEach((function (e) {
               e.__N && (e.__ = e.__N), e.__V = c, e.__N = e.i = void 0
            }))) : (t.__h.forEach(j), t.__h.forEach(M), t.__h = [], o = 0)), l = r
         }, _.YM.diffed = function (e) {
            p && p(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== s.push(t) && i === _.YM.requestAnimationFrame || ((i = _.YM.requestAnimationFrame) || S)(x)), t.__H.__.forEach((function (e) {
               e.i && (e.__H = e.i), e.__V !== c && (e.__ = e.__V), e.i = void 0, e.__V = c
            }))), l = r = null
         }, _.YM.__c = function (e, t) {
            t.some((function (e) {
               try {
                  e.__h.forEach(j), e.__h = e.__h.filter((function (e) {
                     return !e.__ || M(e)
                  }))
               } catch (l) {
                  t.some((function (e) {
                     e.__h && (e.__h = [])
                  })), t = [], _.YM.__e(l, e.__v)
               }
            })), f && f(e, t)
         }, _.YM.unmount = function (e) {
            h && h(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach((function (e) {
               try {
                  j(e)
               } catch (e) {
                  t = e
               }
            })), n.__H = void 0, t && _.YM.__e(t, n.__v))
         };
         var k = "function" == typeof requestAnimationFrame;

         function S(e) {
            var t, n = function () {
                  clearTimeout(o), k && cancelAnimationFrame(t), setTimeout(e)
               },
               o = setTimeout(n, 100);
            k && (t = requestAnimationFrame(n))
         }

         function j(e) {
            var t = r,
               n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), r = t
         }

         function M(e) {
            var t = r;
            e.__c = e.__(), r = t
         }

         function L(e, t) {
            return !e || e.length !== t.length || t.some((function (t, n) {
               return t !== e[n]
            }))
         }

         function O(e, t) {
            return "function" == typeof t ? t(e) : t
         }
      },
      "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": e => {
         e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": e => {
         e.exports = function (e) {
            if (Array.isArray(e)) return e
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/defineProperty.js": (e, t, n) => {
         var o = n("./node_modules/@babel/runtime/helpers/toPropertyKey.js");
         e.exports = function (e, t, n) {
            return (t = o(t)) in e ? Object.defineProperty(e, t, {
               value: n,
               enumerable: !0,
               configurable: !0,
               writable: !0
            }) : e[t] = n, e
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/extends.js": e => {
         function t() {
            return e.exports = t = Object.assign ? Object.assign.bind() : function (e) {
               for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
               }
               return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments)
         }
         e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": e => {
         e.exports = function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
               var o, r, l, i, _ = [],
                  u = !0,
                  s = !1;
               try {
                  if (l = (n = n.call(e)).next, 0 === t) {
                     if (Object(n) !== n) return;
                     u = !1
                  } else
                     for (; !(u = (o = l.call(n)).done) && (_.push(o.value), _.length !== t); u = !0);
               } catch (c) {
                  s = !0, r = c
               } finally {
                  try {
                     if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
                  } finally {
                     if (s) throw r
                  }
               }
               return _
            }
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/nonIterableRest.js": e => {
         e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/objectSpread2.js": (e, t, n) => {
         var o = n("./node_modules/@babel/runtime/helpers/defineProperty.js");

         function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
               var o = Object.getOwnPropertySymbols(e);
               t && (o = o.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
               }))), n.push.apply(n, o)
            }
            return n
         }
         e.exports = function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = null != arguments[t] ? arguments[t] : {};
               t % 2 ? r(Object(n), !0).forEach((function (t) {
                  o(e, t, n[t])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
               }))
            }
            return e
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/slicedToArray.js": (e, t, n) => {
         var o = n("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
            r = n("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
            l = n("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
            i = n("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
         e.exports = function (e, t) {
            return o(e) || r(e, t) || l(e, t) || i()
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/toPrimitive.js": (e, t, n) => {
         var o = n("./node_modules/@babel/runtime/helpers/typeof.js").default;
         e.exports = function (e, t) {
            if ("object" !== o(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
               var r = n.call(e, t || "default");
               if ("object" !== o(r)) return r;
               throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/toPropertyKey.js": (e, t, n) => {
         var o = n("./node_modules/@babel/runtime/helpers/typeof.js").default,
            r = n("./node_modules/@babel/runtime/helpers/toPrimitive.js");
         e.exports = function (e) {
            var t = r(e, "string");
            return "symbol" === o(t) ? t : String(t)
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/typeof.js": e => {
         function t(n) {
            return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
               return typeof e
            } : function (e) {
               return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
         }
         e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": (e, t, n) => {
         var o = n("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
         e.exports = function (e, t) {
            if (e) {
               if ("string" == typeof e) return o(e, t);
               var n = Object.prototype.toString.call(e).slice(8, -1);
               return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
            }
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      }
   },
   e => {
      var t, n = (t = "./app/javascript/selectors/index.ts", e(e.s = t));
      _GeoLocationRecommendations = n
   }
]);
LocaleSelectors.style.innerHTML = ".locale-selectors__container{padding-bottom:2em}.locale-selectors__content{display:flex}@media (max-width: 750px){.locale-selectors__content{justify-content:center !important}}@media (max-width: 500px){.locale-selectors__content form{display:flex;flex-direction:column;align-items:center;justify-content:center}}.locale-selectors__selector{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:\'\' !important;vertical-align:baseline !important;width:auto !important;margin:0 !important}.locale-selectors__label span{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.locale-selectors__label+.locale-selectors__label{margin:0.5em 0 0 0.5em !important}.locale-selectors__content{justify-content:center}\n"
LocaleSelectors.translations = JSON.parse("{\"en\":{\"country_selector\":{\"label\":\"Country/region\"},\"language_selector\":{\"label\":\"Language\"}},\"fr\":{\"country_selector\":{\"label\":\"Pays/région\"},\"language_selector\":{\"label\":\"Langue\"}}}")
LocaleSelectors.render(JSON.parse("{\"position\":\"center\",\"currencies\":{\"ALL\":\"ALL \",\"AMD\":\"AMD ֏\",\"ANG\":\"ANG \",\"AWG\":\"AWG \",\"BAM\":\"BAM KM\",\"BBD\":\"BBD \$\",\"BGN\":\"BGN \",\"BOB\":\"BOB Bs\",\"BSD\":\"BSD \$\",\"BZD\":\"BZD \$\",\"CAD\":\"CAD \$\",\"CHF\":\"CHF \",\"CRC\":\"CRC ₡\",\"CZK\":\"CZK Kč\",\"DKK\":\"DKK kr\",\"DOP\":\"DOP \$\",\"EUR\":\"EUR €\",\"FKP\":\"FKP £\",\"GBP\":\"GBP £\",\"GTQ\":\"GTQ Q\",\"GYD\":\"GYD \$\",\"HNL\":\"HNL L\",\"HUF\":\"HUF Ft\",\"ISK\":\"ISK kr\",\"JMD\":\"JMD \$\",\"KYD\":\"KYD \$\",\"MDL\":\"MDL \",\"MKD\":\"MKD \",\"NIO\":\"NIO C\$\",\"PEN\":\"PEN \",\"PLN\":\"PLN zł\",\"PYG\":\"PYG ₲\",\"RON\":\"RON lei\",\"RSD\":\"RSD \",\"SEK\":\"SEK kr\",\"TTD\":\"TTD \$\",\"UAH\":\"UAH ₴\",\"USD\":\"USD \$\",\"UYU\":\"UYU \$\",\"XCD\":\"XCD \$\"},\"languages\":{\"en\":\"English\",\"fr\":\"Français\"},\"countries\":{\"AD\":{\"country_name\":{\"en\":\"Andorra\",\"fr\":\"Andorre\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"AG\":{\"country_name\":{\"en\":\"Antigua \\u0026 Barbuda\",\"fr\":\"Antigua-et-Barbuda\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"AI\":{\"country_name\":{\"en\":\"Anguilla\",\"fr\":\"Anguilla\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"AL\":{\"country_name\":{\"en\":\"Albania\",\"fr\":\"Albanie\"},\"currency_code\":\"ALL\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"AM\":{\"country_name\":{\"en\":\"Armenia\",\"fr\":\"Arménie\"},\"currency_code\":\"AMD\",\"currency_sign\":\"֏\",\"languages\":[\"en\",\"fr\"]},\"AR\":{\"country_name\":{\"en\":\"Argentina\",\"fr\":\"Argentine\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"AT\":{\"country_name\":{\"en\":\"Austria\",\"fr\":\"Autriche\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"AW\":{\"country_name\":{\"en\":\"Aruba\",\"fr\":\"Aruba\"},\"currency_code\":\"AWG\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"AX\":{\"country_name\":{\"en\":\"Åland Islands\",\"fr\":\"Îles Åland\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"BA\":{\"country_name\":{\"en\":\"Bosnia \\u0026 Herzegovina\",\"fr\":\"Bosnie-Herzégovine\"},\"currency_code\":\"BAM\",\"currency_sign\":\"KM\",\"languages\":[\"en\",\"fr\"]},\"BB\":{\"country_name\":{\"en\":\"Barbados\",\"fr\":\"Barbade\"},\"currency_code\":\"BBD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BE\":{\"country_name\":{\"en\":\"Belgium\",\"fr\":\"Belgique\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"BG\":{\"country_name\":{\"en\":\"Bulgaria\",\"fr\":\"Bulgarie\"},\"currency_code\":\"BGN\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"BL\":{\"country_name\":{\"en\":\"St. Barthélemy\",\"fr\":\"Saint-Barthélemy\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"BM\":{\"country_name\":{\"en\":\"Bermuda\",\"fr\":\"Bermudes\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BO\":{\"country_name\":{\"en\":\"Bolivia\",\"fr\":\"Bolivie\"},\"currency_code\":\"BOB\",\"currency_sign\":\"Bs\",\"languages\":[\"en\",\"fr\"]},\"BQ\":{\"country_name\":{\"en\":\"Caribbean Netherlands\",\"fr\":\"Pays-Bas caribéens\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BR\":{\"country_name\":{\"en\":\"Brazil\",\"fr\":\"Brésil\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BS\":{\"country_name\":{\"en\":\"Bahamas\",\"fr\":\"Bahamas\"},\"currency_code\":\"BSD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BY\":{\"country_name\":{\"en\":\"Belarus\",\"fr\":\"Biélorussie\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BZ\":{\"country_name\":{\"en\":\"Belize\",\"fr\":\"Belize\"},\"currency_code\":\"BZD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CA\":{\"country_name\":{\"en\":\"Canada\",\"fr\":\"Canada\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CH\":{\"country_name\":{\"en\":\"Switzerland\",\"fr\":\"Suisse\"},\"currency_code\":\"CHF\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"CL\":{\"country_name\":{\"en\":\"Chile\",\"fr\":\"Chili\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CO\":{\"country_name\":{\"en\":\"Colombia\",\"fr\":\"Colombie\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CR\":{\"country_name\":{\"en\":\"Costa Rica\",\"fr\":\"Costa Rica\"},\"currency_code\":\"CRC\",\"currency_sign\":\"₡\",\"languages\":[\"en\",\"fr\"]},\"CW\":{\"country_name\":{\"en\":\"Curaçao\",\"fr\":\"Curaçao\"},\"currency_code\":\"ANG\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"CY\":{\"country_name\":{\"en\":\"Cyprus\",\"fr\":\"Chypre\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"CZ\":{\"country_name\":{\"en\":\"Czechia\",\"fr\":\"Tchéquie\"},\"currency_code\":\"CZK\",\"currency_sign\":\"Kč\",\"languages\":[\"en\",\"fr\"]},\"DE\":{\"country_name\":{\"en\":\"Germany\",\"fr\":\"Allemagne\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"DK\":{\"country_name\":{\"en\":\"Denmark\",\"fr\":\"Danemark\"},\"currency_code\":\"DKK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"DM\":{\"country_name\":{\"en\":\"Dominica\",\"fr\":\"Dominique\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"DO\":{\"country_name\":{\"en\":\"Dominican Republic\",\"fr\":\"République dominicaine\"},\"currency_code\":\"DOP\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"EC\":{\"country_name\":{\"en\":\"Ecuador\",\"fr\":\"Équateur\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"EE\":{\"country_name\":{\"en\":\"Estonia\",\"fr\":\"Estonie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"ES\":{\"country_name\":{\"en\":\"Spain\",\"fr\":\"Espagne\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"FI\":{\"country_name\":{\"en\":\"Finland\",\"fr\":\"Finlande\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"FK\":{\"country_name\":{\"en\":\"Falkland Islands\",\"fr\":\"Îles Malouines\"},\"currency_code\":\"FKP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"FO\":{\"country_name\":{\"en\":\"Faroe Islands\",\"fr\":\"Îles Féroé\"},\"currency_code\":\"DKK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"FR\":{\"country_name\":{\"en\":\"France\",\"fr\":\"France\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GB\":{\"country_name\":{\"en\":\"United Kingdom\",\"fr\":\"Royaume-Uni\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"GD\":{\"country_name\":{\"en\":\"Grenada\",\"fr\":\"Grenade\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"GE\":{\"country_name\":{\"en\":\"Georgia\",\"fr\":\"Géorgie\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"GF\":{\"country_name\":{\"en\":\"French Guiana\",\"fr\":\"Guyane française\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GG\":{\"country_name\":{\"en\":\"Guernsey\",\"fr\":\"Guernesey\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"GI\":{\"country_name\":{\"en\":\"Gibraltar\",\"fr\":\"Gibraltar\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"GL\":{\"country_name\":{\"en\":\"Greenland\",\"fr\":\"Groenland\"},\"currency_code\":\"DKK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"GP\":{\"country_name\":{\"en\":\"Guadeloupe\",\"fr\":\"Guadeloupe\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GR\":{\"country_name\":{\"en\":\"Greece\",\"fr\":\"Grèce\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GT\":{\"country_name\":{\"en\":\"Guatemala\",\"fr\":\"Guatemala\"},\"currency_code\":\"GTQ\",\"currency_sign\":\"Q\",\"languages\":[\"en\",\"fr\"]},\"GY\":{\"country_name\":{\"en\":\"Guyana\",\"fr\":\"Guyana\"},\"currency_code\":\"GYD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"HN\":{\"country_name\":{\"en\":\"Honduras\",\"fr\":\"Honduras\"},\"currency_code\":\"HNL\",\"currency_sign\":\"L\",\"languages\":[\"en\",\"fr\"]},\"HR\":{\"country_name\":{\"en\":\"Croatia\",\"fr\":\"Croatie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"HT\":{\"country_name\":{\"en\":\"Haiti\",\"fr\":\"Haïti\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"HU\":{\"country_name\":{\"en\":\"Hungary\",\"fr\":\"Hongrie\"},\"currency_code\":\"HUF\",\"currency_sign\":\"Ft\",\"languages\":[\"en\",\"fr\"]},\"IE\":{\"country_name\":{\"en\":\"Ireland\",\"fr\":\"Irlande\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"IM\":{\"country_name\":{\"en\":\"Isle of Man\",\"fr\":\"Île de Man\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"IS\":{\"country_name\":{\"en\":\"Iceland\",\"fr\":\"Islande\"},\"currency_code\":\"ISK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"IT\":{\"country_name\":{\"en\":\"Italy\",\"fr\":\"Italie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"JE\":{\"country_name\":{\"en\":\"Jersey\",\"fr\":\"Jersey\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"JM\":{\"country_name\":{\"en\":\"Jamaica\",\"fr\":\"Jamaïque\"},\"currency_code\":\"JMD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"KN\":{\"country_name\":{\"en\":\"St. Kitts \\u0026 Nevis\",\"fr\":\"Saint-Christophe-et-Niévès\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"KY\":{\"country_name\":{\"en\":\"Cayman Islands\",\"fr\":\"Îles Caïmans\"},\"currency_code\":\"KYD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"LC\":{\"country_name\":{\"en\":\"St. Lucia\",\"fr\":\"Sainte-Lucie\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"LI\":{\"country_name\":{\"en\":\"Liechtenstein\",\"fr\":\"Liechtenstein\"},\"currency_code\":\"CHF\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"LT\":{\"country_name\":{\"en\":\"Lithuania\",\"fr\":\"Lituanie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"LU\":{\"country_name\":{\"en\":\"Luxembourg\",\"fr\":\"Luxembourg\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"LV\":{\"country_name\":{\"en\":\"Latvia\",\"fr\":\"Lettonie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MC\":{\"country_name\":{\"en\":\"Monaco\",\"fr\":\"Monaco\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MD\":{\"country_name\":{\"en\":\"Moldova\",\"fr\":\"Moldavie\"},\"currency_code\":\"MDL\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"ME\":{\"country_name\":{\"en\":\"Montenegro\",\"fr\":\"Monténégro\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MF\":{\"country_name\":{\"en\":\"St. Martin\",\"fr\":\"Saint-Martin\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MK\":{\"country_name\":{\"en\":\"North Macedonia\",\"fr\":\"Macédoine du Nord\"},\"currency_code\":\"MKD\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"MQ\":{\"country_name\":{\"en\":\"Martinique\",\"fr\":\"Martinique\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MS\":{\"country_name\":{\"en\":\"Montserrat\",\"fr\":\"Montserrat\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"MT\":{\"country_name\":{\"en\":\"Malta\",\"fr\":\"Malte\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MX\":{\"country_name\":{\"en\":\"Mexico\",\"fr\":\"Mexique\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"NI\":{\"country_name\":{\"en\":\"Nicaragua\",\"fr\":\"Nicaragua\"},\"currency_code\":\"NIO\",\"currency_sign\":\"C\$\",\"languages\":[\"en\",\"fr\"]},\"NL\":{\"country_name\":{\"en\":\"Netherlands\",\"fr\":\"Pays-Bas\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"NO\":{\"country_name\":{\"en\":\"Norway\",\"fr\":\"Norvège\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"PA\":{\"country_name\":{\"en\":\"Panama\",\"fr\":\"Panama\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"PE\":{\"country_name\":{\"en\":\"Peru\",\"fr\":\"Pérou\"},\"currency_code\":\"PEN\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"PL\":{\"country_name\":{\"en\":\"Poland\",\"fr\":\"Pologne\"},\"currency_code\":\"PLN\",\"currency_sign\":\"zł\",\"languages\":[\"en\",\"fr\"]},\"PM\":{\"country_name\":{\"en\":\"St. Pierre \\u0026 Miquelon\",\"fr\":\"Saint-Pierre-et-Miquelon\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"PT\":{\"country_name\":{\"en\":\"Portugal\",\"fr\":\"Portugal\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"PY\":{\"country_name\":{\"en\":\"Paraguay\",\"fr\":\"Paraguay\"},\"currency_code\":\"PYG\",\"currency_sign\":\"₲\",\"languages\":[\"en\",\"fr\"]},\"RE\":{\"country_name\":{\"en\":\"Réunion\",\"fr\":\"La Réunion\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"RO\":{\"country_name\":{\"en\":\"Romania\",\"fr\":\"Roumanie\"},\"currency_code\":\"RON\",\"currency_sign\":\"lei\",\"languages\":[\"en\",\"fr\"]},\"RS\":{\"country_name\":{\"en\":\"Serbia\",\"fr\":\"Serbie\"},\"currency_code\":\"RSD\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"SE\":{\"country_name\":{\"en\":\"Sweden\",\"fr\":\"Suède\"},\"currency_code\":\"SEK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"SI\":{\"country_name\":{\"en\":\"Slovenia\",\"fr\":\"Slovénie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"SJ\":{\"country_name\":{\"en\":\"Svalbard \\u0026 Jan Mayen\",\"fr\":\"Svalbard et Jan Mayen\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"SK\":{\"country_name\":{\"en\":\"Slovakia\",\"fr\":\"Slovaquie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"SM\":{\"country_name\":{\"en\":\"San Marino\",\"fr\":\"Saint-Marin\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"SR\":{\"country_name\":{\"en\":\"Suriname\",\"fr\":\"Suriname\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"SV\":{\"country_name\":{\"en\":\"El Salvador\",\"fr\":\"Salvador\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"SX\":{\"country_name\":{\"en\":\"Sint Maarten\",\"fr\":\"Saint-Martin (partie néerlandaise)\"},\"currency_code\":\"ANG\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"TC\":{\"country_name\":{\"en\":\"Turks \\u0026 Caicos Islands\",\"fr\":\"Îles Turques-et-Caïques\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"TT\":{\"country_name\":{\"en\":\"Trinidad \\u0026 Tobago\",\"fr\":\"Trinité-et-Tobago\"},\"currency_code\":\"TTD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"UA\":{\"country_name\":{\"en\":\"Ukraine\",\"fr\":\"Ukraine\"},\"currency_code\":\"UAH\",\"currency_sign\":\"₴\",\"languages\":[\"en\",\"fr\"]},\"UM\":{\"country_name\":{\"en\":\"U.S. Outlying Islands\",\"fr\":\"Îles mineures éloignées des États-Unis\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"US\":{\"country_name\":{\"en\":\"United States\",\"fr\":\"États-Unis\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"UY\":{\"country_name\":{\"en\":\"Uruguay\",\"fr\":\"Uruguay\"},\"currency_code\":\"UYU\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"VA\":{\"country_name\":{\"en\":\"Vatican City\",\"fr\":\"État de la Cité du Vatican\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"VC\":{\"country_name\":{\"en\":\"St. Vincent \\u0026 Grenadines\",\"fr\":\"Saint-Vincent-et-les Grenadines\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"VE\":{\"country_name\":{\"en\":\"Venezuela\",\"fr\":\"Venezuela\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"VG\":{\"country_name\":{\"en\":\"British Virgin Islands\",\"fr\":\"Îles Vierges britanniques\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"XK\":{\"country_name\":{\"en\":\"Kosovo\",\"fr\":\"Kosovo\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"YT\":{\"country_name\":{\"en\":\"Mayotte\",\"fr\":\"Mayotte\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]}}}"))