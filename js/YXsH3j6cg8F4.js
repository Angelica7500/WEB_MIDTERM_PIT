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
/*! For license information please see vendors-node_modules_preact_hooks_dist_hooks_module_js-node_modules_babel_runtime_helpers_asy-69207f-64cbcc9c417bf0bce588e44f8a4069d65a3f0597ef0195663af258a2ff0fb68d.js.LICENSE.txt */
(self.webpackChunk_GeoLocationRecommendations = self.webpackChunk_GeoLocationRecommendations || []).push([
   ["vendors-node_modules_preact_hooks_dist_hooks_module_js-node_modules_babel_runtime_helpers_asy-69207f"], {
      "./node_modules/preact/dist/preact.module.js": (e, t, n) => {
         "use strict";
         n.d(t, {
            HY: () => m,
            YM: () => o,
            h: () => v,
            sY: () => U
         });
         var r, o, _, i, u, l, c, a = {},
            s = [],
            f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            p = Array.isArray;

         function h(e, t) {
            for (var n in t) e[n] = t[n];
            return e
         }

         function d(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
         }

         function v(e, t, n) {
            var o, _, i, u = {};
            for (i in t) "key" == i ? o = t[i] : "ref" == i ? _ = t[i] : u[i] = t[i];
            if (arguments.length > 2 && (u.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
               for (i in e.defaultProps) void 0 === u[i] && (u[i] = e.defaultProps[i]);
            return y(e, u, o, _, null)
         }

         function y(e, t, n, r, i) {
            var u = {
               type: e,
               props: t,
               key: n,
               ref: r,
               __k: null,
               __: null,
               __b: 0,
               __e: null,
               __d: void 0,
               __c: null,
               __h: null,
               constructor: void 0,
               __v: null == i ? ++_ : i
            };
            return null == i && null != o.vnode && o.vnode(u), u
         }

         function m(e) {
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

         function x(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
               for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                  if (null != (n = e.__k[t]) && null != n.__e) {
                     e.__e = e.__c.base = n.__e;
                     break
                  } return x(e)
            }
         }

         function w(e) {
            (!e.__d && (e.__d = !0) && i.push(e) && !k.__r++ || u !== o.debounceRendering) && ((u = o.debounceRendering) || l)(k)
         }

         function k() {
            var e, t, n, r, o, _, u, l;
            for (i.sort(c); e = i.shift();) e.__d && (t = i.length, r = void 0, o = void 0, u = (_ = (n = e).__v).__e, (l = n.__P) && (r = [], (o = h({}, _)).__v = _.__v + 1, H(l, _, o, n.__n, void 0 !== l.ownerSVGElement, null != _.__h ? [u] : null, r, null == u ? g(_) : u, _.__h), Y(r, _), _.__e != u && x(_)), i.length > t && i.sort(c));
            k.__r = 0
         }

         function j(e, t, n, r, o, _, i, u, l, c) {
            var f, h, d, v, b, x, w, k = r && r.__k || s,
               j = k.length;
            for (n.__k = [], f = 0; f < t.length; f++)
               if (null != (v = n.__k[f] = null == (v = t[f]) || "boolean" == typeof v || "function" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? y(null, v, null, null, v) : p(v) ? y(m, {
                     children: v
                  }, null, null, null) : v.__b > 0 ? y(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v)) {
                  if (v.__ = n, v.__b = n.__b + 1, null === (d = k[f]) || d && v.key == d.key && v.type === d.type) k[f] = void 0;
                  else
                     for (h = 0; h < j; h++) {
                        if ((d = k[h]) && v.key == d.key && v.type === d.type) {
                           k[h] = void 0;
                           break
                        }
                        d = null
                     }
                  H(e, v, d = d || a, o, _, i, u, l, c), b = v.__e, (h = v.ref) && d.ref != h && (w || (w = []), d.ref && w.push(d.ref, null, v), w.push(h, v.__c || b, v)), null != b ? (null == x && (x = b), "function" == typeof v.type && v.__k === d.__k ? v.__d = l = E(v, l, e) : l = P(e, v, d, k, b, l), "function" == typeof n.type && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = g(d))
               } for (n.__e = x, f = j; f--;) null != k[f] && ("function" == typeof n.type && null != k[f].__e && k[f].__e == n.__d && (n.__d = S(r).nextSibling), D(k[f], k[f]));
            if (w)
               for (f = 0; f < w.length; f++) C(w[f], w[++f], w[++f])
         }

         function E(e, t, n) {
            for (var r, o = e.__k, _ = 0; o && _ < o.length; _++)(r = o[_]) && (r.__ = e, t = "function" == typeof r.type ? E(r, t, n) : P(n, r, r, o, r.__e, t));
            return t
         }

         function P(e, t, n, r, o, _) {
            var i, u, l;
            if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
            else if (null == n || o != _ || null == o.parentNode) e: if (null == _ || _.parentNode !== e) e.appendChild(o), i = null;
               else {
                  for (u = _, l = 0;
                     (u = u.nextSibling) && l < r.length; l += 1)
                     if (u == o) break e;
                  e.insertBefore(o, _), i = _
               } return void 0 !== i ? i : o.nextSibling
         }

         function S(e) {
            var t, n, r;
            if (null == e.type || "string" == typeof e.type) return e.__e;
            if (e.__k)
               for (t = e.__k.length - 1; t >= 0; t--)
                  if ((n = e.__k[t]) && (r = S(n))) return r;
            return null
         }

         function L(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || f.test(t) ? n : n + "px"
         }

         function M(e, t, n, r, o) {
            var _;
            e: if ("style" === t)
               if ("string" == typeof n) e.style.cssText = n;
               else {
                  if ("string" == typeof r && (e.style.cssText = r = ""), r)
                     for (t in r) n && t in n || L(e.style, t, "");
                  if (n)
                     for (t in n) r && n[t] === r[t] || L(e.style, t, n[t])
               }
            else if ("o" === t[0] && "n" === t[1]) _ = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + _] = n, n ? r || e.addEventListener(t, _ ? N : O, _) : e.removeEventListener(t, _ ? N : O, _);
            else if ("dangerouslySetInnerHTML" !== t) {
               if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
               else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && t in e) try {
                  e[t] = null == n ? "" : n;
                  break e
               } catch (e) {}
               "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
         }

         function O(e) {
            return this.l[e.type + !1](o.event ? o.event(e) : e)
         }

         function N(e) {
            return this.l[e.type + !0](o.event ? o.event(e) : e)
         }

         function H(e, t, n, r, _, i, u, l, c) {
            var a, s, f, d, v, y, g, x, w, k, E, P, S, L, M, O = t.type;
            if (void 0 !== t.constructor) return null;
            null != n.__h && (c = n.__h, l = t.__e = n.__e, t.__h = null, i = [l]), (a = o.__b) && a(t);
            try {
               e: if ("function" == typeof O) {
                  if (x = t.props, w = (a = O.contextType) && r[a.__c], k = a ? w ? w.props.value : a.__ : r, n.__c ? g = (s = t.__c = n.__c).__ = s.__E : ("prototype" in O && O.prototype.render ? t.__c = s = new O(x, k) : (t.__c = s = new b(x, k), s.constructor = O, s.render = F), w && w.sub(s), s.props = x, s.state || (s.state = {}), s.context = k, s.__n = r, f = s.__d = !0, s.__h = [], s._sb = []), null == s.__s && (s.__s = s.state), null != O.getDerivedStateFromProps && (s.__s == s.state && (s.__s = h({}, s.__s)), h(s.__s, O.getDerivedStateFromProps(x, s.__s))), d = s.props, v = s.state, s.__v = t, f) null == O.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount);
                  else {
                     if (null == O.getDerivedStateFromProps && x !== d && null != s.componentWillReceiveProps && s.componentWillReceiveProps(x, k), !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(x, s.__s, k) || t.__v === n.__v) {
                        for (t.__v !== n.__v && (s.props = x, s.state = s.__s, s.__d = !1), s.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function (e) {
                              e && (e.__ = t)
                           })), E = 0; E < s._sb.length; E++) s.__h.push(s._sb[E]);
                        s._sb = [], s.__h.length && u.push(s);
                        break e
                     }
                     null != s.componentWillUpdate && s.componentWillUpdate(x, s.__s, k), null != s.componentDidUpdate && s.__h.push((function () {
                        s.componentDidUpdate(d, v, y)
                     }))
                  }
                  if (s.context = k, s.props = x, s.__P = e, P = o.__r, S = 0, "prototype" in O && O.prototype.render) {
                     for (s.state = s.__s, s.__d = !1, P && P(t), a = s.render(s.props, s.state, s.context), L = 0; L < s._sb.length; L++) s.__h.push(s._sb[L]);
                     s._sb = []
                  } else
                     do {
                        s.__d = !1, P && P(t), a = s.render(s.props, s.state, s.context), s.state = s.__s
                     } while (s.__d && ++S < 25);
                  s.state = s.__s, null != s.getChildContext && (r = h(h({}, r), s.getChildContext())), f || null == s.getSnapshotBeforeUpdate || (y = s.getSnapshotBeforeUpdate(d, v)), j(e, p(M = null != a && a.type === m && null == a.key ? a.props.children : a) ? M : [M], t, n, r, _, i, u, l, c), s.base = t.__e, t.__h = null, s.__h.length && u.push(s), g && (s.__E = s.__ = null), s.__e = !1
               } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = T(n.__e, t, n, r, _, i, u, c);
               (a = o.diffed) && a(t)
            }
            catch (e) {
               t.__v = null, (c || null != i) && (t.__e = l, t.__h = !!c, i[i.indexOf(l)] = null), o.__e(e, t, n)
            }
         }

         function Y(e, t) {
            o.__c && o.__c(t, e), e.some((function (t) {
               try {
                  e = t.__h, t.__h = [], e.some((function (e) {
                     e.call(t)
                  }))
               } catch (e) {
                  o.__e(e, t.__v)
               }
            }))
         }

         function T(e, t, n, o, _, i, u, l) {
            var c, s, f, h = n.props,
               v = t.props,
               y = t.type,
               m = 0;
            if ("svg" === y && (_ = !0), null != i)
               for (; m < i.length; m++)
                  if ((c = i[m]) && "setAttribute" in c == !!y && (y ? c.localName === y : 3 === c.nodeType)) {
                     e = c, i[m] = null;
                     break
                  } if (null == e) {
               if (null === y) return document.createTextNode(v);
               e = _ ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, v.is && v), i = null, l = !1
            }
            if (null === y) h === v || l && e.data === v || (e.data = v);
            else {
               if (i = i && r.call(e.childNodes), s = (h = n.props || a).dangerouslySetInnerHTML, f = v.dangerouslySetInnerHTML, !l) {
                  if (null != i)
                     for (h = {}, m = 0; m < e.attributes.length; m++) h[e.attributes[m].name] = e.attributes[m].value;
                  (f || s) && (f && (s && f.__html == s.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
               }
               if (function (e, t, n, r, o) {
                     var _;
                     for (_ in n) "children" === _ || "key" === _ || _ in t || M(e, _, null, n[_], r);
                     for (_ in t) o && "function" != typeof t[_] || "children" === _ || "key" === _ || "value" === _ || "checked" === _ || n[_] === t[_] || M(e, _, t[_], n[_], r)
                  }(e, v, h, _, l), f) t.__k = [];
               else if (j(e, p(m = t.props.children) ? m : [m], t, n, o, _ && "foreignObject" !== y, i, u, i ? i[0] : n.__k && g(n, 0), l), null != i)
                  for (m = i.length; m--;) null != i[m] && d(i[m]);
               l || ("value" in v && void 0 !== (m = v.value) && (m !== e.value || "progress" === y && !m || "option" === y && m !== h.value) && M(e, "value", m, h.value, !1), "checked" in v && void 0 !== (m = v.checked) && m !== e.checked && M(e, "checked", m, h.checked, !1))
            }
            return e
         }

         function C(e, t, n) {
            try {
               "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
               o.__e(e, n)
            }
         }

         function D(e, t, n) {
            var r, _;
            if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || C(r, null, t)), null != (r = e.__c)) {
               if (r.componentWillUnmount) try {
                  r.componentWillUnmount()
               } catch (e) {
                  o.__e(e, t)
               }
               r.base = r.__P = null, e.__c = void 0
            }
            if (r = e.__k)
               for (_ = 0; _ < r.length; _++) r[_] && D(r[_], t, n || "function" != typeof e.type);
            n || null == e.__e || d(e.__e), e.__ = e.__e = e.__d = void 0
         }

         function F(e, t, n) {
            return this.constructor(e, n)
         }

         function U(e, t, n) {
            var _, i, u;
            o.__ && o.__(e, t), i = (_ = "function" == typeof n) ? null : n && n.__k || t.__k, u = [], H(t, e = (!_ && n || t).__k = v(m, null, [e]), i || a, a, void 0 !== t.ownerSVGElement, !_ && n ? [n] : i ? null : t.firstChild ? r.call(t.childNodes) : null, u, !_ && n ? n : i ? i.__e : t.firstChild, _), Y(u, e)
         }
         r = s.slice, o = {
            __e: function (e, t, n, r) {
               for (var o, _, i; t = t.__;)
                  if ((o = t.__c) && !o.__) try {
                     if ((_ = o.constructor) && null != _.getDerivedStateFromError && (o.setState(_.getDerivedStateFromError(e)), i = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), i = o.__d), i) return o.__E = o
                  } catch (t) {
                     e = t
                  }
               throw e
            }
         }, _ = 0, b.prototype.setState = function (e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this._sb.push(t), w(this))
         }, b.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), w(this))
         }, b.prototype.render = m, i = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, c = function (e, t) {
            return e.__v.__b - t.__v.__b
         }, k.__r = 0
      },
      "./node_modules/preact/hooks/dist/hooks.module.js": (e, t, n) => {
         "use strict";
         n.d(t, {
            I4: () => x,
            d4: () => m,
            eJ: () => y,
            sO: () => b
         });
         var r, o, _, i, u = n("./node_modules/preact/dist/preact.module.js"),
            l = 0,
            c = [],
            a = [],
            s = u.YM.__b,
            f = u.YM.__r,
            p = u.YM.diffed,
            h = u.YM.__c,
            d = u.YM.unmount;

         function v(e, t) {
            u.YM.__h && u.YM.__h(o, e, l || t), l = 0;
            var n = o.__H || (o.__H = {
               __: [],
               __h: []
            });
            return e >= n.__.length && n.__.push({
               __V: a
            }), n.__[e]
         }

         function y(e) {
            return l = 1,
               function (e, t, n) {
                  var _ = v(r++, 2);
                  if (_.t = e, !_.__c && (_.__ = [n ? n(t) : L(void 0, t), function (e) {
                        var t = _.__N ? _.__N[0] : _.__[0],
                           n = _.t(t, e);
                        t !== n && (_.__N = [n, _.__[1]], _.__c.setState({}))
                     }], _.__c = o, !o.u)) {
                     var i = function (e, t, n) {
                        if (!_.__c.__H) return !0;
                        var r = _.__c.__H.__.filter((function (e) {
                           return e.__c
                        }));
                        if (r.every((function (e) {
                              return !e.__N
                           }))) return !u || u.call(this, e, t, n);
                        var o = !1;
                        return r.forEach((function (e) {
                           if (e.__N) {
                              var t = e.__[0];
                              e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
                           }
                        })), !(!o && _.__c.props === e) && (!u || u.call(this, e, t, n))
                     };
                     o.u = !0;
                     var u = o.shouldComponentUpdate,
                        l = o.componentWillUpdate;
                     o.componentWillUpdate = function (e, t, n) {
                        if (this.__e) {
                           var r = u;
                           u = void 0, i(e, t, n), u = r
                        }
                        l && l.call(this, e, t, n)
                     }, o.shouldComponentUpdate = i
                  }
                  return _.__N || _.__
               }(L, e)
         }

         function m(e, t) {
            var n = v(r++, 3);
            !u.YM.__s && S(n.__H, t) && (n.__ = e, n.i = t, o.__H.__h.push(n))
         }

         function b(e) {
            return l = 5, g((function () {
               return {
                  current: e
               }
            }), [])
         }

         function g(e, t) {
            var n = v(r++, 7);
            return S(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
         }

         function x(e, t) {
            return l = 8, g((function () {
               return e
            }), t)
         }

         function w() {
            for (var e; e = c.shift();)
               if (e.__P && e.__H) try {
                  e.__H.__h.forEach(E), e.__H.__h.forEach(P), e.__H.__h = []
               } catch (o) {
                  e.__H.__h = [], u.YM.__e(o, e.__v)
               }
         }
         u.YM.__b = function (e) {
            o = null, s && s(e)
         }, u.YM.__r = function (e) {
            f && f(e), r = 0;
            var t = (o = e.__c).__H;
            t && (_ === o ? (t.__h = [], o.__h = [], t.__.forEach((function (e) {
               e.__N && (e.__ = e.__N), e.__V = a, e.__N = e.i = void 0
            }))) : (t.__h.forEach(E), t.__h.forEach(P), t.__h = [], r = 0)), _ = o
         }, u.YM.diffed = function (e) {
            p && p(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== c.push(t) && i === u.YM.requestAnimationFrame || ((i = u.YM.requestAnimationFrame) || j)(w)), t.__H.__.forEach((function (e) {
               e.i && (e.__H = e.i), e.__V !== a && (e.__ = e.__V), e.i = void 0, e.__V = a
            }))), _ = o = null
         }, u.YM.__c = function (e, t) {
            t.some((function (e) {
               try {
                  e.__h.forEach(E), e.__h = e.__h.filter((function (e) {
                     return !e.__ || P(e)
                  }))
               } catch (_) {
                  t.some((function (e) {
                     e.__h && (e.__h = [])
                  })), t = [], u.YM.__e(_, e.__v)
               }
            })), h && h(e, t)
         }, u.YM.unmount = function (e) {
            d && d(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach((function (e) {
               try {
                  E(e)
               } catch (e) {
                  t = e
               }
            })), n.__H = void 0, t && u.YM.__e(t, n.__v))
         };
         var k = "function" == typeof requestAnimationFrame;

         function j(e) {
            var t, n = function () {
                  clearTimeout(r), k && cancelAnimationFrame(t), setTimeout(e)
               },
               r = setTimeout(n, 100);
            k && (t = requestAnimationFrame(n))
         }

         function E(e) {
            var t = o,
               n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), o = t
         }

         function P(e) {
            var t = o;
            e.__c = e.__(), o = t
         }

         function S(e, t) {
            return !e || e.length !== t.length || t.some((function (t, n) {
               return t !== e[n]
            }))
         }

         function L(e, t) {
            return "function" == typeof t ? t(e) : t
         }
      },
      "./node_modules/@babel/runtime/helpers/asyncToGenerator.js": e => {
         function t(e, t, n, r, o, _, i) {
            try {
               var u = e[_](i),
                  l = u.value
            } catch (c) {
               return void n(c)
            }
            u.done ? t(l) : Promise.resolve(l).then(r, o)
         }
         e.exports = function (e) {
            return function () {
               var n = this,
                  r = arguments;
               return new Promise((function (o, _) {
                  var i = e.apply(n, r);

                  function u(e) {
                     t(i, o, _, u, l, "next", e)
                  }

                  function l(e) {
                     t(i, o, _, u, l, "throw", e)
                  }
                  u(void 0)
               }))
            }
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/defineProperty.js": (e, t, n) => {
         var r = n("./node_modules/@babel/runtime/helpers/toPropertyKey.js");
         e.exports = function (e, t, n) {
            return (t = r(t)) in e ? Object.defineProperty(e, t, {
               value: n,
               enumerable: !0,
               configurable: !0,
               writable: !0
            }) : e[t] = n, e
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/objectSpread2.js": (e, t, n) => {
         var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js");

         function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
               var r = Object.getOwnPropertySymbols(e);
               t && (r = r.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
               }))), n.push.apply(n, r)
            }
            return n
         }
         e.exports = function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = null != arguments[t] ? arguments[t] : {};
               t % 2 ? o(Object(n), !0).forEach((function (t) {
                  r(e, t, n[t])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
               }))
            }
            return e
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js": (e, t, n) => {
         var r = n("./node_modules/@babel/runtime/helpers/typeof.js").default;

         function o() {
            "use strict";
            e.exports = o = function () {
               return t
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
            var t = {},
               n = Object.prototype,
               _ = n.hasOwnProperty,
               i = Object.defineProperty || function (e, t, n) {
                  e[t] = n.value
               },
               u = "function" == typeof Symbol ? Symbol : {},
               l = u.iterator || "@@iterator",
               c = u.asyncIterator || "@@asyncIterator",
               a = u.toStringTag || "@@toStringTag";

            function s(e, t, n) {
               return Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
               }), e[t]
            }
            try {
               s({}, "")
            } catch (N) {
               s = function (e, t, n) {
                  return e[t] = n
               }
            }

            function f(e, t, n, r) {
               var o = t && t.prototype instanceof d ? t : d,
                  _ = Object.create(o.prototype),
                  u = new L(r || []);
               return i(_, "_invoke", {
                  value: j(e, n, u)
               }), _
            }

            function p(e, t, n) {
               try {
                  return {
                     type: "normal",
                     arg: e.call(t, n)
                  }
               } catch (N) {
                  return {
                     type: "throw",
                     arg: N
                  }
               }
            }
            t.wrap = f;
            var h = {};

            function d() {}

            function v() {}

            function y() {}
            var m = {};
            s(m, l, (function () {
               return this
            }));
            var b = Object.getPrototypeOf,
               g = b && b(b(M([])));
            g && g !== n && _.call(g, l) && (m = g);
            var x = y.prototype = d.prototype = Object.create(m);

            function w(e) {
               ["next", "throw", "return"].forEach((function (t) {
                  s(e, t, (function (e) {
                     return this._invoke(t, e)
                  }))
               }))
            }

            function k(e, t) {
               function n(o, i, u, l) {
                  var c = p(e[o], e, i);
                  if ("throw" !== c.type) {
                     var a = c.arg,
                        s = a.value;
                     return s && "object" == r(s) && _.call(s, "__await") ? t.resolve(s.__await).then((function (e) {
                        n("next", e, u, l)
                     }), (function (e) {
                        n("throw", e, u, l)
                     })) : t.resolve(s).then((function (e) {
                        a.value = e, u(a)
                     }), (function (e) {
                        return n("throw", e, u, l)
                     }))
                  }
                  l(c.arg)
               }
               var o;
               i(this, "_invoke", {
                  value: function (e, r) {
                     function _() {
                        return new t((function (t, o) {
                           n(e, r, t, o)
                        }))
                     }
                     return o = o ? o.then(_, _) : _()
                  }
               })
            }

            function j(e, t, n) {
               var r = "suspendedStart";
               return function (o, _) {
                  if ("executing" === r) throw new Error("Generator is already running");
                  if ("completed" === r) {
                     if ("throw" === o) throw _;
                     return O()
                  }
                  for (n.method = o, n.arg = _;;) {
                     var i = n.delegate;
                     if (i) {
                        var u = E(i, n);
                        if (u) {
                           if (u === h) continue;
                           return u
                        }
                     }
                     if ("next" === n.method) n.sent = n._sent = n.arg;
                     else if ("throw" === n.method) {
                        if ("suspendedStart" === r) throw r = "completed", n.arg;
                        n.dispatchException(n.arg)
                     } else "return" === n.method && n.abrupt("return", n.arg);
                     r = "executing";
                     var l = p(e, t, n);
                     if ("normal" === l.type) {
                        if (r = n.done ? "completed" : "suspendedYield", l.arg === h) continue;
                        return {
                           value: l.arg,
                           done: n.done
                        }
                     }
                     "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                  }
               }
            }

            function E(e, t) {
               var n = t.method,
                  r = e.iterator[n];
               if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
               var o = p(r, e.iterator, t.arg);
               if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, h;
               var _ = o.arg;
               return _ ? _.done ? (t[e.resultName] = _.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : _ : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
            }

            function P(e) {
               var t = {
                  tryLoc: e[0]
               };
               1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function S(e) {
               var t = e.completion || {};
               t.type = "normal", delete t.arg, e.completion = t
            }

            function L(e) {
               this.tryEntries = [{
                  tryLoc: "root"
               }], e.forEach(P, this), this.reset(!0)
            }

            function M(e) {
               if (e) {
                  var t = e[l];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                     var n = -1,
                        r = function t() {
                           for (; ++n < e.length;)
                              if (_.call(e, n)) return t.value = e[n], t.done = !1, t;
                           return t.value = void 0, t.done = !0, t
                        };
                     return r.next = r
                  }
               }
               return {
                  next: O
               }
            }

            function O() {
               return {
                  value: void 0,
                  done: !0
               }
            }
            return v.prototype = y, i(x, "constructor", {
               value: y,
               configurable: !0
            }), i(y, "constructor", {
               value: v,
               configurable: !0
            }), v.displayName = s(y, a, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
               var t = "function" == typeof e && e.constructor;
               return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function (e) {
               return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, s(e, a, "GeneratorFunction")), e.prototype = Object.create(x), e
            }, t.awrap = function (e) {
               return {
                  __await: e
               }
            }, w(k.prototype), s(k.prototype, c, (function () {
               return this
            })), t.AsyncIterator = k, t.async = function (e, n, r, o, _) {
               void 0 === _ && (_ = Promise);
               var i = new k(f(e, n, r, o), _);
               return t.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                  return e.done ? e.value : i.next()
               }))
            }, w(x), s(x, a, "Generator"), s(x, l, (function () {
               return this
            })), s(x, "toString", (function () {
               return "[object Generator]"
            })), t.keys = function (e) {
               var t = Object(e),
                  n = [];
               for (var r in t) n.push(r);
               return n.reverse(),
                  function e() {
                     for (; n.length;) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e
                     }
                     return e.done = !0, e
                  }
            }, t.values = M, L.prototype = {
               constructor: L,
               reset: function (e) {
                  if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                     for (var t in this) "t" === t.charAt(0) && _.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
               },
               stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval
               },
               dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;

                  function n(n, r) {
                     return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                  }
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                     var o = this.tryEntries[r],
                        i = o.completion;
                     if ("root" === o.tryLoc) return n("end");
                     if (o.tryLoc <= this.prev) {
                        var u = _.call(o, "catchLoc"),
                           l = _.call(o, "finallyLoc");
                        if (u && l) {
                           if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                           if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        } else if (u) {
                           if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                        } else {
                           if (!l) throw new Error("try statement without catch or finally");
                           if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        }
                     }
                  }
               },
               abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                     var r = this.tryEntries[n];
                     if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                     }
                  }
                  o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                  var i = o ? o.completion : {};
                  return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
               },
               complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
               },
               finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                     var n = this.tryEntries[t];
                     if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), h
                  }
               },
               catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                     var n = this.tryEntries[t];
                     if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                           var o = r.arg;
                           S(n)
                        }
                        return o
                     }
                  }
                  throw new Error("illegal catch attempt")
               },
               delegateYield: function (e, t, n) {
                  return this.delegate = {
                     iterator: M(e),
                     resultName: t,
                     nextLoc: n
                  }, "next" === this.method && (this.arg = void 0), h
               }
            }, t
         }
         e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/toPrimitive.js": (e, t, n) => {
         var r = n("./node_modules/@babel/runtime/helpers/typeof.js").default;
         e.exports = function (e, t) {
            if ("object" !== r(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
               var o = n.call(e, t || "default");
               if ("object" !== r(o)) return o;
               throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/toPropertyKey.js": (e, t, n) => {
         var r = n("./node_modules/@babel/runtime/helpers/typeof.js").default,
            o = n("./node_modules/@babel/runtime/helpers/toPrimitive.js");
         e.exports = function (e) {
            var t = o(e, "string");
            return "symbol" === r(t) ? t : String(t)
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
      }
   }
]);
(self.webpackChunk_GeoLocationRecommendations = self.webpackChunk_GeoLocationRecommendations || []).push([
   ["app_javascript_recommendations_globalSetup_ts-app_javascript_recommendations_modal_components-7d4893"], {
      "./app/javascript/recommendations/classNames.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            p: () => t
         });
         var t = {
            container: "recommendation-modal__container",
            content: "recommendation-modal__content",
            backdrop: "recommendation-modal__backdrop",
            closeButton: "recommendation-modal__close-button",
            callToAction: "recommendation-modal__call-to-action",
            message: "recommendation-modal__message",
            messageBold: "recommendation-modal__message--bold",
            form: "recommendation-modal__form",
            selector: "recommendation-modal__selector",
            button: "recommendation-modal__button",
            minimalButton: "recommendation-modal__button--minimal",
            closeButtonContainer: "recommendation-modal__close-button-container",
            flag: "recommendation-modal__flag",
            benefits: "recommendation-modal__benefits",
            messageAlignStart: "recommendation-modal__message--align-start",
            selectorWrapper: "recommendation-modal__selector-wrapper",
            selectorWrapperWithFlag: "recommendation-modal__selector-wrapper--flag",
            selectorWithFlag: "recommendation-modal__selector--flag"
         }
      },
      "./app/javascript/recommendations/experiment.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            qD: () => s,
            wm: () => a
         });
         var t = o("./node_modules/preact/hooks/dist/hooks.module.js"),
            r = o("./app/javascript/shared/cookies.ts");

         function a(e) {
            var n = e.versionId;
            window.LocaleBar.experimentVersion = "geolocation_recommendation/experiment__".concat(n)
         }

         function s(e) {
            var n = e.skip;
            (0, t.d4)((function () {
               if (!n) {
                  var e = window.LocaleBar.experimentVersion;
                  if (e) {
                     var o = document.querySelector('script[src*="geolocation-recommendations"][src*="script.js"]');
                     if ("src" in o) {
                        var t = new URL(o.src),
                           a = "".concat(t.origin, "/experiments/assignments"),
                           s = {
                              experiment_name: "geolocation_recommendation/experiment--intl-welcome-mat",
                              experiment_version: e,
                              shopify_domain: t.searchParams.get("shop"),
                              user_token: (0, r.ej)("_shopify_y"),
                              session_token: (0, r.ej)("_shopify_s")
                           },
                           i = new FormData;
                        Object.keys(s).forEach((function (e) {
                           return i.append(e, s[e])
                        })), fetch(a, {
                           method: "POST",
                           mode: "no-cors",
                           body: i
                        })
                     }
                  }
               }
            }), [n])
         }
      },
      "./app/javascript/recommendations/globalSetup.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            P: () => g,
            C: () => h
         });
         var t = o("./app/ui/utility/index.ts"),
            r = o("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js"),
            a = o.n(r),
            s = o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
            i = o.n(s),
            u = o("./app/javascript/shared/cookies.ts");

         function c() {
            return (c = i()(a()().mark((function e() {
               var n, o, t, r, s, i, c, l;
               return a()().wrap((function (e) {
                  for (;;) switch (e.prev = e.next) {
                     case 0:
                        if ((0, u.FL)()) {
                           e.next = 2;
                           break
                        }
                        return e.abrupt("return");
                     case 2:
                        if (a = void 0, void 0, d = void 0, /^(\/[a-z]{2,3}(-[a-zA-Z0-9]+)?)?(?=(\/|$))/, d = (null === (a = location.pathname.match(/^(\/[a-z]{2,3}(-[a-zA-Z0-9]+)?)?(?=(\/|$))/)) || void 0 === a ? void 0 : a[0]) || "", o = "".concat(d, "/browsing_context_suggestions"), t = window.Shopify.locale, r = window.Shopify.country, s = null === (n = window.Shopify.currency) || void 0 === n ? void 0 : n.active, o && t && r && s) {
                           e.next = 8;
                           break
                        }
                        return e.abrupt("return");
                     case 8:
                        return i = "".concat(o, ".json?source=geolocation_recommendation&") + "country[enabled]=true&country[exclude]=".concat(r, "&") + "currency[enabled]=true¤cy[exclude]=".concat(s, "&") + "language[enabled]=true&language[exclude]=".concat(t, "&"), e.next = 11, fetch(i);
                     case 11:
                        return c = e.sent, e.next = 14, c.json();
                     case 14:
                        if ("suggestions" in (l = e.sent) && "detected_values" in l) {
                           e.next = 17;
                           break
                        }
                        return e.abrupt("return");
                     case 17:
                        if (0 !== l.suggestions.length) {
                           e.next = 20;
                           break
                        }
                        return (0, u.s_)(), e.abrupt("return");
                     case 20:
                        return e.abrupt("return", l);
                     case 21:
                     case "end":
                        return e.stop()
                  }
                  var a, d
               }), e)
            })))).apply(this, arguments)
         }
         const l = function () {
            return c.apply(this, arguments)
         };
         var d;

         function p() {
            window.LocaleBar.root || (window.LocaleBar.root = document.createElement("div"), document.body.insertBefore(window.LocaleBar.root, document.body.firstChild)), window.LocaleBar.style || (window.LocaleBar.style = document.createElement("style"), document.head.appendChild(window.LocaleBar.style))
         }

         function m() {
            var e, n;
            null === (e = window.LocaleBar.root) || void 0 === e || e.remove(), delete window.LocaleBar.root, null === (n = window.LocaleBar.style) || void 0 === n || n.remove(), delete window.LocaleBar.style, p()
         }

         function g() {
            p(), window.LocaleBar.cleanup = m, window.LocaleBar.fetch = l
         }

         function h() {
            if (window.location.host === t.h_) {
               window.parent.postMessage({
                  action: "locale-recommendations:ready"
               }, "https://".concat(t.Id))
            }
         }
         window.LocaleBar = null !== (d = window.LocaleBar) && void 0 !== d ? d : {
            cleanup: m,
            fetch: l,
            data: {},
            render: function () {}
         }
      },
      "./app/javascript/recommendations/modal/components/Modal.tsx": (e, n, o) => {
         "use strict";
         o.d(n, {
            Z: () => C
         });
         var t = o("./node_modules/@babel/runtime/helpers/extends.js"),
            r = o.n(t),
            a = o("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
            s = o.n(a),
            i = o("./node_modules/preact/dist/preact.module.js"),
            u = o("./node_modules/preact/hooks/dist/hooks.module.js"),
            c = o("./app/javascript/recommendations/types.ts"),
            l = o("./app/javascript/recommendations/utils.ts"),
            d = o("./app/javascript/recommendations/experiment.ts"),
            p = o("./app/javascript/recommendations/classNames.ts"),
            m = o("./app/ui/utility/index.ts"),
            g = o("./app/javascript/shared/cookies.ts");
         const h = function (e) {
            var n = e.preview,
               o = e.suggestion,
               t = (0, u.I4)((function () {
                  var e, n, t, r = document.querySelector('script[src*="geolocation-recommendations"][src*="script.js"]');
                  if ("src" in r) {
                     var a = new URL(r.src),
                        s = "".concat(a.origin, "/locale_bar/dismissal.json"),
                        i = {
                           shopify_domain: a.searchParams.get("shop"),
                           user_token: (0, g.ej)("_shopify_y"),
                           session_token: (0, g.ej)("_shopify_s"),
                           suggested_country: null == o || null === (e = o.parts.country) || void 0 === e ? void 0 : e.handle,
                           suggested_currency: null == o || null === (n = o.parts.currency) || void 0 === n ? void 0 : n.handle,
                           suggested_language: null == o || null === (t = o.parts.language) || void 0 === t ? void 0 : t.handle
                        },
                        u = new FormData;
                     Object.keys(i).forEach((function (e) {
                        return u.append(e, i[e])
                     })), fetch(s, {
                        method: "POST",
                        mode: "no-cors",
                        body: u
                     })
                  }
               }), [o]),
               r = function (e) {
                  var n = {};
                  if (!(e instanceof HTMLFormElement)) return n;
                  var o = new FormData(e);
                  return o.forEach((function (e, o) {
                     return n[o] = e
                  })), n
               };
            return [(0, u.I4)((function (e) {
               if (n) {
                  e.preventDefault();
                  var o = {
                     action: "locale-recommendations:accept",
                     detail: {
                        formData: r(e.target)
                     }
                  };
                  window.parent.postMessage(o, "https://".concat(m.Id))
               } else(0, g.s_)()
            }), [n]), (0, u.I4)((function (e) {
               var o;
               "submit" !== e.type && (null === (o = window.LocaleBar) || void 0 === o || o.cleanup());
               if (n) {
                  e.preventDefault();
                  var a = {
                     action: "locale-recommendations:dismiss",
                     detail: {
                        formData: r(e.target)
                     }
                  };
                  window.parent.postMessage(a, "https://".concat(m.Id))
               } else(0, g.Xu)(), t()
            }), [n, t])]
         };

         function f(e) {
            var n = e.className,
               o = e.onSubmit,
               t = e.children,
               r = e.formRef;
            return (0, i.h)("form", {
               action: "/localization",
               method: "POST",
               className: n,
               onSubmit: o,
               ref: r
            }, (0, i.h)("input", {
               name: "_method",
               type: "hidden",
               value: "PUT"
            }), (0, i.h)("input", {
               name: "source",
               type: "hidden",
               value: "geolocation_recommendation"
            }), (0, i.h)("input", {
               name: "return_to",
               type: "hidden",
               value: (0, m.JN)(location)
            }), t)
         }
         var v = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"];

         function y(e) {
            var n = e.suggestionLocaleCode,
               o = e.suggestionCountryCode,
               t = e.suggestionType,
               r = e.colors,
               a = e.onSubmit,
               s = e.formRef,
               u = window.Shopify.country,
               l = function (e) {
                  return (0, i.h)("button", {
                     className: p.p.closeButton,
                     onClick: e,
                     type: "submit"
                  }, (0, i.h)("svg", {
                     "aria-label": "Dismiss",
                     viewBox: "0 0 20 20",
                     style: {
                        height: "1em",
                        width: "1em"
                     },
                     xmlns: "http://www.w3.org/2000/svg"
                  }, (0, i.h)("path", {
                     d: "M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z",
                     fill: r.foreground
                  })))
               };
            return t !== c.sW.Language && v.includes(u) && v.includes(o) ? (0, i.h)("div", {
               className: p.p.closeButtonContainer
            }, l(a)) : (0, i.h)("div", {
               className: p.p.closeButtonContainer
            }, (0, i.h)(f, {
               onSubmit: a,
               formRef: s
            }, function (e) {
               switch (e) {
                  case c.sW.Language:
                     return (0, i.h)("input", {
                        name: "locale_code",
                        value: n,
                        type: "hidden"
                     });
                  case c.sW.Country:
                     return (0, i.h)("input", {
                        name: "country_code",
                        value: o,
                        type: "hidden"
                     });
                  case c.sW.CountryAndLanguage:
                     return (0, i.h)(i.HY, null, (0, i.h)("input", {
                        name: "country_code",
                        value: o,
                        type: "hidden"
                     }), (0, i.h)("input", {
                        name: "locale_code",
                        value: n,
                        type: "hidden"
                     }))
               }
            }(t), l()))
         }
         var _ = o("./app/javascript/shared/i18n.tsx");

         function b(e) {
            var n, o, t, r, a, s, d, m, g, h, v = e.options.colors,
               y = e.suggestion,
               b = e.setModalStep,
               w = e.suggestionType,
               L = e.onAccept,
               x = e.dismissButton,
               C = "" === window.Shopify.locale ? void 0 : window.Shopify.locale,
               j = null !== (n = null !== (o = null === (t = y.parts.language) || void 0 === t ? void 0 : t.handle) && void 0 !== o ? o : C) && void 0 !== n ? n : "en",
               k = (0, _.T)(null !== (r = window.LocaleBar.data.experimentTranslations) && void 0 !== r ? r : {}, j),
               B = {
                  backgroundColor: v.buttonBackground,
                  color: v.buttonForeground
               },
               S = null !== (a = null === (s = y.parts.language) || void 0 === s ? void 0 : s.name) && void 0 !== a ? a : "",
               T = null !== (d = null === (m = y.parts.country) || void 0 === m ? void 0 : m.name) && void 0 !== d ? d : "",
               W = null !== (g = null === (h = y.parts.country) || void 0 === h ? void 0 : h.handle) && void 0 !== g ? g : "",
               A = (0, l.tZ)(W, window.LocaleBar.data.currenciesByCountryCode),
               N = (0, u.I4)((function () {
                  b(c.h8.ChangeCountry)
               }), [b]),
               E = function (e) {
                  return (0, i.h)("div", {
                     className: p.p.benefits
                  }, (0, i.h)("ul", null, (0, i.h)("li", {
                     style: {
                        color: v.foreground
                     }
                  }, k("benefits.local_currency", {
                     currency: A
                  })), (0, i.h)("li", {
                     style: {
                        color: v.foreground
                     }
                  }, k("benefits.shipping_options", {
                     country: T
                  })), e === c.sW.CountryAndLanguage && (0, i.h)("li", {
                     style: {
                        color: v.foreground
                     }
                  }, k("benefits.language", {
                     language: S
                  }))))
               };
            return (0, i.h)(i.HY, null, x, (0, i.h)("div", {
               className: p.p.content
            }, function (e) {
               switch (e) {
                  case c.sW.Language:
                     return null;
                  case c.sW.CountryAndLanguage:
                  case c.sW.Country:
                     return (0, i.h)("div", {
                        className: p.p.flag
                     }, (0, i.h)("img", {
                        src: (0, l.an)(W),
                        width: "75",
                        height: "48",
                        alt: ""
                     }))
               }
            }(w), function (e) {
               switch (e) {
                  case c.sW.Language:
                     return (0, i.h)("h2", {
                        className: p.p.message,
                        style: {
                           color: v.foreground,
                           marginBottom: "2px"
                        }
                     }, k("language_title", {
                        language: (0, i.h)("span", {
                           className: p.p.messageBold
                        }, S)
                     }));
                  case c.sW.CountryAndLanguage:
                  case c.sW.Country:
                     return (0, i.h)("h2", {
                        className: p.p.message,
                        style: {
                           color: v.foreground
                        }
                     }, k("title", {
                        country: (0, i.h)("span", {
                           className: p.p.messageBold
                        }, T)
                     }))
               }
            }(w), function (e) {
               switch (e) {
                  case c.sW.Language:
                     return null;
                  case c.sW.CountryAndLanguage:
                     return E(c.sW.CountryAndLanguage);
                  case c.sW.Country:
                     return E(c.sW.Country)
               }
            }(w), (0, i.h)(f, {
               onSubmit: L,
               className: p.p.form
            }, function (e) {
               switch (e) {
                  case c.sW.Language:
                     return (0, i.h)("input", {
                        name: "locale_code",
                        value: j,
                        type: "hidden"
                     });
                  case c.sW.Country:
                     return (0, i.h)("input", {
                        name: "country_code",
                        value: W,
                        type: "hidden"
                     });
                  case c.sW.CountryAndLanguage:
                     return (0, i.h)(i.HY, null, (0, i.h)("input", {
                        name: "country_code",
                        value: W,
                        type: "hidden"
                     }), (0, i.h)("input", {
                        name: "locale_code",
                        value: j,
                        type: "hidden"
                     }))
               }
            }(w), (0, i.h)("button", {
               className: p.p.button,
               style: B,
               type: "submit"
            }, k("submit"))), (0, i.h)("button", {
               className: p.p.minimalButton,
               type: "button",
               onClick: N,
               style: {
                  backgroundColor: "transparent",
                  color: v.foreground
               }
            }, function (e) {
               switch (e) {
                  case c.sW.Language:
                     return k("change_language");
                  case c.sW.Country:
                     return k("change_country");
                  case c.sW.CountryAndLanguage:
                     return k("change_country_and_language")
               }
            }(w))))
         }

         function w(e) {
            var n, o, t, r, a = e.options.colors,
               d = e.suggestion,
               m = e.setModalStep,
               g = e.suggestionType,
               h = e.onAccept,
               v = e.dismissButton,
               y = "" === window.Shopify.locale ? void 0 : window.Shopify.locale,
               b = null !== (n = null !== (o = null === (t = d.parts.language) || void 0 === t ? void 0 : t.handle) && void 0 !== o ? o : y) && void 0 !== n ? n : "en",
               w = (0, _.T)(null !== (r = window.LocaleBar.data.experimentTranslations) && void 0 !== r ? r : {}, b),
               x = {
                  backgroundColor: a.buttonBackground,
                  color: a.buttonForeground
               },
               C = (0, l.H7)(d.parts.country, window.LocaleBar.data.currenciesByCountryCode),
               j = (0, u.I4)((function () {
                  m(c.h8.ShipsTo)
               }), [m]),
               k = (0, l.rT)(window.LocaleBar.data.countries, d.parts.language, null == C ? void 0 : C.handle),
               B = g === c.sW.CountryAndLanguage && k ? k : d.parts.language,
               S = (0, u.eJ)(B),
               T = s()(S, 2),
               W = T[0],
               A = T[1],
               N = (0, u.I4)((function (e) {
                  var n = (0, l.rT)(window.LocaleBar.data.countries, d.parts.language, e);
                  n && A(n)
               }), [d.parts.language]);
            return (0, i.h)(i.HY, null, v, (0, i.h)("div", {
               className: p.p.content
            }, (0, i.h)("h2", {
               className: p.p.messageAlignStart,
               style: {
                  color: a.foreground
               }
            }, function (e) {
               switch (e) {
                  case c.sW.Language:
                     return w("change_language");
                  case c.sW.Country:
                     return w("change_country");
                  case c.sW.CountryAndLanguage:
                     return w("change_country_and_language")
               }
            }(g)), (0, i.h)(f, {
               onSubmit: h,
               className: p.p.form
            }, function (e) {
               switch (e) {
                  case c.sW.Language:
                     return (0, i.h)(L, {
                        part: d.parts.language,
                        name: "locale_code"
                     });
                  case c.sW.Country:
                     return (0, i.h)(L, {
                        part: C,
                        name: "country_code",
                        showFlag: !0
                     });
                  case c.sW.CountryAndLanguage:
                     return (0, i.h)(i.HY, null, (0, i.h)(L, {
                        part: C,
                        name: "country_code",
                        onChangeSelected: N,
                        showFlag: !0
                     }), (0, i.h)(L, {
                        part: W,
                        name: "locale_code"
                     }))
               }
            }(g), (0, i.h)("button", {
               className: p.p.button,
               style: x,
               type: "submit"
            }, w("submit"))), (0, i.h)("button", {
               className: p.p.minimalButton,
               type: "button",
               onClick: j,
               style: {
                  backgroundColor: "transparent",
                  color: a.foreground
               }
            }, w("cancel"))))
         }

         function L(e) {
            var n = e.name,
               o = e.onChangeSelected,
               t = e.part,
               r = e.showFlag,
               a = (0, u.eJ)(null == t ? void 0 : t.handle),
               c = s()(a, 2),
               d = c[0],
               g = c[1],
               h = r ? p.p.selectorWithFlag : p.p.selector,
               f = r ? p.p.selectorWrapperWithFlag : p.p.selectorWrapper,
               v = r ? "--bg-image: url('".concat((0, l.an)(d), "');") : "",
               y = (0, u.I4)((function (e) {
                  g(e.target.value), o && o(e.target.value)
               }), [o]);
            return t ? (0, i.h)("div", {
               className: f,
               style: v
            }, (0, i.h)("select", {
               className: h,
               name: n,
               value: d && t.options[d] ? d : Object.keys(t.options)[0],
               onChange: function (e) {
                  return y(e)
               }
            }, Object.keys(t.options).map((function (e) {
               return (0, i.h)("option", {
                  key: e,
                  value: e
               }, (0, m.fm)(t.options[e]))
            })))) : null
         }
         var x = 27;

         function C(e) {
            var n = (0, u.eJ)(c.h8.ShipsTo),
               o = s()(n, 2),
               t = o[0],
               a = o[1],
               m = e.options.colors,
               g = e.preview,
               f = !window.LocaleBar.data.isEligibleForExperiment;
            (0, d.qD)({
               skip: g || f
            });
            var v = (0, u.sO)(null),
               _ = (0, u.sO)(null);
            (0, u.d4)((function () {
               var e;
               g || null === (e = _.current) || void 0 === e || e.focus()
            }), [g]);
            var L = h({
                  preview: g,
                  suggestion: "suggestion" in e ? e.suggestion : void 0
               }),
               C = s()(L, 2),
               j = C[0],
               k = C[1],
               B = function (n, o, s, u, d) {
                  if ("children" in e && e.children) return e.children;
                  if ("features" in e && "suggestion" in e && e.features && e.suggestion) {
                     var p = (0, l.EP)(e.suggestion),
                        g = "" === window.Shopify.locale ? void 0 : window.Shopify.locale,
                        h = null !== (n = null !== (o = null === (s = e.suggestion.parts.language) || void 0 === s ? void 0 : s.handle) && void 0 !== o ? o : g) && void 0 !== n ? n : "en",
                        f = null !== (u = null === (d = e.suggestion.parts.country) || void 0 === d ? void 0 : d.handle) && void 0 !== u ? u : "",
                        _ = (0, i.h)(y, {
                           formRef: v,
                           suggestionLocaleCode: h,
                           suggestionCountryCode: f,
                           suggestionType: p,
                           colors: m,
                           onSubmit: k
                        });
                     return t === c.h8.ShipsTo ? (0, i.h)(b, r()({}, e, {
                        suggestionType: p,
                        setModalStep: a,
                        onAccept: j,
                        dismissButton: _
                     })) : (0, i.h)(w, r()({}, e, {
                        suggestionType: p,
                        setModalStep: a,
                        onAccept: j,
                        dismissButton: _
                     }))
                  }
               }(),
               S = function (e) {
                  var n;
                  "Escape" !== e.key && "Esc" !== e.key && e.keyCode !== x || (null === (n = v.current) || void 0 === n || n.requestSubmit())
               };
            return (0, u.d4)((function () {
               return document.addEventListener("keydown", S),
                  function () {
                     document.removeEventListener("keydown", S)
                  }
            }), []), B ? (0, i.h)(i.HY, null, (0, i.h)("div", {
               className: p.p.container,
               style: {
                  backgroundColor: m.background
               },
               ref: _,
               tabIndex: -1
            }, B), (0, i.h)("div", {
               className: p.p.backdrop,
               onClick: function () {
                  var e;
                  return null === (e = v.current) || void 0 === e ? void 0 : e.requestSubmit()
               }
            })) : null
         }
      },
      "./app/javascript/recommendations/render.tsx": (e, n, o) => {
         "use strict";
         o.d(n, {
            Z: () => r
         });
         var t = o("./node_modules/preact/dist/preact.module.js");

         function r(e) {
            window.LocaleBar.render = function (n, o) {
               var r, a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).preview,
                  s = void 0 !== a && a,
                  i = window.LocaleBar.root;
               if (i) {
                  i.innerHTML = "";
                  var u = null == n || null === (r = n.suggestions) || void 0 === r ? void 0 : r[0],
                     c = null == n ? void 0 : n.features;
                  if (u) {
                     var l = u.parts,
                        d = l.country,
                        p = l.language;
                     if (!d && !p) return
                  }(0, t.sY)((0, t.h)(e, {
                     suggestion: u,
                     options: o,
                     preview: s,
                     features: c
                  }), i)
               }
            }
         }
      },
      "./app/javascript/recommendations/types.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            CQ: () => t,
            h8: () => r,
            sW: () => a
         });
         var t = function (e) {
               return e.BarTop = "bar/top", e.BarTopFixed = "bar/top_fixed", e.BarBottomFixed = "bar/bottom_fixed", e.PopupBottomLeft = "popup/bottom_left", e.PopupBottomRight = "popup/bottom_right", e.Modal = "modal", e
            }({}),
            r = function (e) {
               return e[e.ShipsTo = 0] = "ShipsTo", e[e.ChangeCountry = 1] = "ChangeCountry", e
            }({}),
            a = function (e) {
               return e[e.Country = 0] = "Country", e[e.Language = 1] = "Language", e[e.CountryAndLanguage = 2] = "CountryAndLanguage", e
            }({})
      },
      "./app/javascript/recommendations/utils.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            EP: () => p,
            H7: () => u,
            an: () => d,
            rT: () => c,
            tZ: () => l
         });
         var t = o("./node_modules/@babel/runtime/helpers/defineProperty.js"),
            r = o.n(t),
            a = o("./node_modules/@babel/runtime/helpers/objectSpread2.js"),
            s = o.n(a),
            i = o("./app/javascript/recommendations/types.ts");

         function u(e, n) {
            if (e && n) {
               var o, t = Object.keys(e.options).sort((o = e.options, function (e, n) {
                  return o[e].localeCompare(o[n])
               })).reduce((function (o, t) {
                  var a = e.options[t],
                     i = n[t];
                  if (i) {
                     var u = i.symbol,
                        c = i.isoCode,
                        l = u ? "".concat(c, " ").concat(u) : "".concat(c);
                     return s()(s()({}, o), {}, r()({}, t, "".concat(a, " (").concat(l, ")")))
                  }
                  return o
               }), {});
               return s()(s()({}, e), {}, {
                  options: t
               })
            }
         }

         function c(e, n, o) {
            if (e && o && n) {
               var t = Object.keys(n.options).filter((function (n) {
                  var t;
                  return null === (t = e[o]) || void 0 === t ? void 0 : t.languages.includes(n)
               })).reduce((function (e, o) {
                  return s()(s()({}, e), {}, r()({}, o, n.options[o]))
               }), {});
               return s()(s()({}, n), {}, {
                  options: t
               })
            }
         }

         function l(e, n) {
            if (!n || !n[e]) return "";
            var o = n[e].isoCode,
               t = n[e].symbol;
            return t ? "".concat(o, " ").concat(t) : "".concat(o)
         }

         function d(e) {
            if (e) return "https://cdn.shopify.com/static/images/flags/".concat(e.toLowerCase(), ".svg")
         }

         function p(e) {
            var n = e.parts,
               o = n.country,
               t = n.language;
            if (o && t) return i.sW.CountryAndLanguage;
            if (o) return i.sW.Country;
            if (t) return i.sW.Language;
            throw new Error("Rendered modal component with no valid suggestion")
         }
      },
      "./app/javascript/shared/cookies.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            FL: () => p,
            Xd: () => l,
            Xu: () => d,
            Zt: () => m,
            _$: () => g,
            ej: () => f,
            qO: () => u,
            s_: () => c
         });
         var t = "locale_bar_dismissed",
            r = 86400,
            a = "locale_bar_accepted",
            s = "locale_bar_experiment_accepted",
            i = "locale_selectors_selected";

         function u() {
            document.cookie = "".concat(i, "=1;path=/")
         }

         function c() {
            document.cookie = "".concat(a, "=1;path=/")
         }

         function l() {
            document.cookie = "".concat(s, "=1;path=/")
         }

         function d() {
            document.cookie = "".concat(t, "=1;path=/;max-age=").concat(r)
         }

         function p() {
            var e;
            return (null === (e = window.Shopify) || void 0 === e || !e.designMode) && (window.location.search.match(/shpxid/) ? (c(), !1) : !(document.querySelector("[data-geolocation-app-storefront-preview]") || h(a) || h(t) || h(i)))
         }

         function m() {
            return "us" !== window.Shopify.country.toLowerCase()
         }

         function g() {
            return !h(s)
         }

         function h(e) {
            return v(e).length > 0
         }

         function f(e) {
            var n = v(e);
            if (0 !== n.length) return n[0].trim().split("=")[1]
         }

         function v(e) {
            return document.cookie.split(";").filter((function (n) {
               return 0 === n.trim().indexOf("".concat(e, "="))
            }))
         }
      },
      "./app/javascript/shared/i18n.tsx": (e, n, o) => {
         "use strict";
         o.d(n, {
            T: () => a
         });
         var t = o("./node_modules/preact/dist/preact.module.js"),
            r = o("./node_modules/preact/hooks/dist/hooks.module.js");

         function a(e, n) {
            var o = e[n],
               a = ["zh-CN", "zh-TW", "pt-PT", "pt-BR"].includes(n) ? n : n.slice(0, 2);
            if (!o && e[a] && (o = e[a]), !o) throw new Error("No translations for ".concat(n, " or ").concat(a));
            return (0, r.I4)((function (e, n) {
               var r = e.split(".").reduce((function (e, n) {
                  return s(e.value) ? {
                     value: e.value[n]
                  } : e
               }), {
                  value: o
               });
               if (s(r.value)) throw new Error("Translation key: ".concat(e, ", did not result in a translation string ").concat(JSON.stringify(r.value)));
               if (!n) return r.value;
               var a = r.value.split(/{{(.+?)}}/).map((function (e, o) {
                  return o % 2 ? n[e.trim()] : e
               })).filter((function (e) {
                  return e
               }));
               return (0, t.h)(t.HY, null, a)
            }), [o])
         }

         function s(e) {
            return !("string" == typeof e)
         }
      },
      "./app/ui/utility/index.ts": (e, n, o) => {
         "use strict";
         o.d(n, {
            Id: () => a,
            JN: () => i,
            fm: () => r,
            h_: () => s,
            sk: () => t
         });
         var t = "undefined" == typeof window;

         function r(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
         }
         var a = "geolocation-recommendations.shopifyapps.com",
            s = "shopify-geolocation-proxy.com";

         function i(e) {
            var n = new URLSearchParams(e.search);
            ["country", "currency"].forEach((function (e) {
               n.delete(e)
            }));
            var o = n.toString();
            return "" === o ? e.pathname : "".concat(e.pathname, "?").concat(o)
         }
      },
      "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": e => {
         e.exports = function (e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var o = 0, t = new Array(n); o < n; o++) t[o] = e[o];
            return t
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": e => {
         e.exports = function (e) {
            if (Array.isArray(e)) return e
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/extends.js": e => {
         function n() {
            return e.exports = n = Object.assign ? Object.assign.bind() : function (e) {
               for (var n = 1; n < arguments.length; n++) {
                  var o = arguments[n];
                  for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
               }
               return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, n.apply(this, arguments)
         }
         e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": e => {
         e.exports = function (e, n) {
            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
               var t, r, a, s, i = [],
                  u = !0,
                  c = !1;
               try {
                  if (a = (o = o.call(e)).next, 0 === n) {
                     if (Object(o) !== o) return;
                     u = !1
                  } else
                     for (; !(u = (t = a.call(o)).done) && (i.push(t.value), i.length !== n); u = !0);
               } catch (l) {
                  c = !0, r = l
               } finally {
                  try {
                     if (!u && null != o.return && (s = o.return(), Object(s) !== s)) return
                  } finally {
                     if (c) throw r
                  }
               }
               return i
            }
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/nonIterableRest.js": e => {
         e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/slicedToArray.js": (e, n, o) => {
         var t = o("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
            r = o("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
            a = o("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
            s = o("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
         e.exports = function (e, n) {
            return t(e) || r(e, n) || a(e, n) || s()
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": (e, n, o) => {
         var t = o("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
         e.exports = function (e, n) {
            if (e) {
               if ("string" == typeof e) return t(e, n);
               var o = Object.prototype.toString.call(e).slice(8, -1);
               return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(e, n) : void 0
            }
         }, e.exports.__esModule = !0, e.exports.default = e.exports
      }
   }
]);
(self.webpackChunk_GeoLocationRecommendations = self.webpackChunk_GeoLocationRecommendations || []).push([
   ["modal"], {
      "./app/javascript/recommendations/modal/index.ts": (a, o, e) => {
         "use strict";
         e.r(o);
         var s = e("./app/javascript/shared/cookies.ts"),
            t = e("./app/javascript/recommendations/experiment.ts"),
            n = e("./app/javascript/recommendations/globalSetup.ts"),
            p = e("./app/javascript/recommendations/render.tsx"),
            m = e("./app/javascript/recommendations/modal/components/Modal.tsx");
         (0, n.P)(), (0, s.Zt)() && (0, t.wm)({
            versionId: "control"
         }), (0, p.Z)(m.Z), (0, n.C)()
      }
   },
   a => {
      a.O(0, ["vendors-node_modules_preact_hooks_dist_hooks_module_js-node_modules_babel_runtime_helpers_asy-69207f", "app_javascript_recommendations_globalSetup_ts-app_javascript_recommendations_modal_components-7d4893"], (() => {
         return o = "./app/javascript/recommendations/modal/index.ts", a(a.s = o);
         var o
      }));
      var o = a.O();
      _GeoLocationRecommendations = o
   }
]);
LocaleBar.data.currenciesByCountryCode = JSON.parse("{\"AD\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"AG\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"AI\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"AL\":{\"symbol\":null,\"isoCode\":\"ALL\"},\"AM\":{\"symbol\":\"֏\",\"isoCode\":\"AMD\"},\"AR\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"AT\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"AW\":{\"symbol\":null,\"isoCode\":\"AWG\"},\"AX\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"BA\":{\"symbol\":\"KM\",\"isoCode\":\"BAM\"},\"BB\":{\"symbol\":\"\$\",\"isoCode\":\"BBD\"},\"BE\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"BG\":{\"symbol\":null,\"isoCode\":\"BGN\"},\"BL\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"BM\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"BO\":{\"symbol\":\"Bs\",\"isoCode\":\"BOB\"},\"BQ\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"BR\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"BS\":{\"symbol\":\"\$\",\"isoCode\":\"BSD\"},\"BY\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"BZ\":{\"symbol\":\"\$\",\"isoCode\":\"BZD\"},\"CA\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"CH\":{\"symbol\":null,\"isoCode\":\"CHF\"},\"CL\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"CO\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"CR\":{\"symbol\":\"₡\",\"isoCode\":\"CRC\"},\"CW\":{\"symbol\":null,\"isoCode\":\"ANG\"},\"CY\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"CZ\":{\"symbol\":\"Kč\",\"isoCode\":\"CZK\"},\"DE\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"DK\":{\"symbol\":\"kr\",\"isoCode\":\"DKK\"},\"DM\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"DO\":{\"symbol\":\"\$\",\"isoCode\":\"DOP\"},\"EC\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"EE\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"ES\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"FI\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"FK\":{\"symbol\":\"£\",\"isoCode\":\"FKP\"},\"FO\":{\"symbol\":\"kr\",\"isoCode\":\"DKK\"},\"FR\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"GB\":{\"symbol\":\"£\",\"isoCode\":\"GBP\"},\"GD\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"GE\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"GF\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"GG\":{\"symbol\":\"£\",\"isoCode\":\"GBP\"},\"GI\":{\"symbol\":\"£\",\"isoCode\":\"GBP\"},\"GL\":{\"symbol\":\"kr\",\"isoCode\":\"DKK\"},\"GP\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"GR\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"GT\":{\"symbol\":\"Q\",\"isoCode\":\"GTQ\"},\"GY\":{\"symbol\":\"\$\",\"isoCode\":\"GYD\"},\"HN\":{\"symbol\":\"L\",\"isoCode\":\"HNL\"},\"HR\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"HT\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"HU\":{\"symbol\":\"Ft\",\"isoCode\":\"HUF\"},\"IE\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"IM\":{\"symbol\":\"£\",\"isoCode\":\"GBP\"},\"IS\":{\"symbol\":\"kr\",\"isoCode\":\"ISK\"},\"IT\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"JE\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"JM\":{\"symbol\":\"\$\",\"isoCode\":\"JMD\"},\"KN\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"KY\":{\"symbol\":\"\$\",\"isoCode\":\"KYD\"},\"LC\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"LI\":{\"symbol\":null,\"isoCode\":\"CHF\"},\"LT\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"LU\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"LV\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"MC\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"MD\":{\"symbol\":null,\"isoCode\":\"MDL\"},\"ME\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"MF\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"MK\":{\"symbol\":null,\"isoCode\":\"MKD\"},\"MQ\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"MS\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"MT\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"MX\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"NI\":{\"symbol\":\"C\$\",\"isoCode\":\"NIO\"},\"NL\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"NO\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"PA\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"PE\":{\"symbol\":null,\"isoCode\":\"PEN\"},\"PL\":{\"symbol\":\"zł\",\"isoCode\":\"PLN\"},\"PM\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"PT\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"PY\":{\"symbol\":\"₲\",\"isoCode\":\"PYG\"},\"RE\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"RO\":{\"symbol\":\"lei\",\"isoCode\":\"RON\"},\"RS\":{\"symbol\":null,\"isoCode\":\"RSD\"},\"SE\":{\"symbol\":\"kr\",\"isoCode\":\"SEK\"},\"SI\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"SJ\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"SK\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"SM\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"SR\":{\"symbol\":\"\$\",\"isoCode\":\"CAD\"},\"SV\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"SX\":{\"symbol\":null,\"isoCode\":\"ANG\"},\"TC\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"TT\":{\"symbol\":\"\$\",\"isoCode\":\"TTD\"},\"UA\":{\"symbol\":\"₴\",\"isoCode\":\"UAH\"},\"UM\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"US\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"UY\":{\"symbol\":\"\$\",\"isoCode\":\"UYU\"},\"VA\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"VC\":{\"symbol\":\"\$\",\"isoCode\":\"XCD\"},\"VE\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"VG\":{\"symbol\":\"\$\",\"isoCode\":\"USD\"},\"XK\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"},\"YT\":{\"symbol\":\"€\",\"isoCode\":\"EUR\"}}");
LocaleBar.data.countries = JSON.parse("{\"AD\":{\"country_name\":{\"en\":\"Andorra\",\"fr\":\"Andorre\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"AG\":{\"country_name\":{\"en\":\"Antigua \\u0026 Barbuda\",\"fr\":\"Antigua-et-Barbuda\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"AI\":{\"country_name\":{\"en\":\"Anguilla\",\"fr\":\"Anguilla\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"AL\":{\"country_name\":{\"en\":\"Albania\",\"fr\":\"Albanie\"},\"currency_code\":\"ALL\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"AM\":{\"country_name\":{\"en\":\"Armenia\",\"fr\":\"Arménie\"},\"currency_code\":\"AMD\",\"currency_sign\":\"֏\",\"languages\":[\"en\",\"fr\"]},\"AR\":{\"country_name\":{\"en\":\"Argentina\",\"fr\":\"Argentine\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"AT\":{\"country_name\":{\"en\":\"Austria\",\"fr\":\"Autriche\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"AW\":{\"country_name\":{\"en\":\"Aruba\",\"fr\":\"Aruba\"},\"currency_code\":\"AWG\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"AX\":{\"country_name\":{\"en\":\"Åland Islands\",\"fr\":\"Îles Åland\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"BA\":{\"country_name\":{\"en\":\"Bosnia \\u0026 Herzegovina\",\"fr\":\"Bosnie-Herzégovine\"},\"currency_code\":\"BAM\",\"currency_sign\":\"KM\",\"languages\":[\"en\",\"fr\"]},\"BB\":{\"country_name\":{\"en\":\"Barbados\",\"fr\":\"Barbade\"},\"currency_code\":\"BBD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BE\":{\"country_name\":{\"en\":\"Belgium\",\"fr\":\"Belgique\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"BG\":{\"country_name\":{\"en\":\"Bulgaria\",\"fr\":\"Bulgarie\"},\"currency_code\":\"BGN\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"BL\":{\"country_name\":{\"en\":\"St. Barthélemy\",\"fr\":\"Saint-Barthélemy\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"BM\":{\"country_name\":{\"en\":\"Bermuda\",\"fr\":\"Bermudes\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BO\":{\"country_name\":{\"en\":\"Bolivia\",\"fr\":\"Bolivie\"},\"currency_code\":\"BOB\",\"currency_sign\":\"Bs\",\"languages\":[\"en\",\"fr\"]},\"BQ\":{\"country_name\":{\"en\":\"Caribbean Netherlands\",\"fr\":\"Pays-Bas caribéens\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BR\":{\"country_name\":{\"en\":\"Brazil\",\"fr\":\"Brésil\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BS\":{\"country_name\":{\"en\":\"Bahamas\",\"fr\":\"Bahamas\"},\"currency_code\":\"BSD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BY\":{\"country_name\":{\"en\":\"Belarus\",\"fr\":\"Biélorussie\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"BZ\":{\"country_name\":{\"en\":\"Belize\",\"fr\":\"Belize\"},\"currency_code\":\"BZD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CA\":{\"country_name\":{\"en\":\"Canada\",\"fr\":\"Canada\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CH\":{\"country_name\":{\"en\":\"Switzerland\",\"fr\":\"Suisse\"},\"currency_code\":\"CHF\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"CL\":{\"country_name\":{\"en\":\"Chile\",\"fr\":\"Chili\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CO\":{\"country_name\":{\"en\":\"Colombia\",\"fr\":\"Colombie\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"CR\":{\"country_name\":{\"en\":\"Costa Rica\",\"fr\":\"Costa Rica\"},\"currency_code\":\"CRC\",\"currency_sign\":\"₡\",\"languages\":[\"en\",\"fr\"]},\"CW\":{\"country_name\":{\"en\":\"Curaçao\",\"fr\":\"Curaçao\"},\"currency_code\":\"ANG\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"CY\":{\"country_name\":{\"en\":\"Cyprus\",\"fr\":\"Chypre\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"CZ\":{\"country_name\":{\"en\":\"Czechia\",\"fr\":\"Tchéquie\"},\"currency_code\":\"CZK\",\"currency_sign\":\"Kč\",\"languages\":[\"en\",\"fr\"]},\"DE\":{\"country_name\":{\"en\":\"Germany\",\"fr\":\"Allemagne\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"DK\":{\"country_name\":{\"en\":\"Denmark\",\"fr\":\"Danemark\"},\"currency_code\":\"DKK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"DM\":{\"country_name\":{\"en\":\"Dominica\",\"fr\":\"Dominique\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"DO\":{\"country_name\":{\"en\":\"Dominican Republic\",\"fr\":\"République dominicaine\"},\"currency_code\":\"DOP\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"EC\":{\"country_name\":{\"en\":\"Ecuador\",\"fr\":\"Équateur\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"EE\":{\"country_name\":{\"en\":\"Estonia\",\"fr\":\"Estonie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"ES\":{\"country_name\":{\"en\":\"Spain\",\"fr\":\"Espagne\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"FI\":{\"country_name\":{\"en\":\"Finland\",\"fr\":\"Finlande\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"FK\":{\"country_name\":{\"en\":\"Falkland Islands\",\"fr\":\"Îles Malouines\"},\"currency_code\":\"FKP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"FO\":{\"country_name\":{\"en\":\"Faroe Islands\",\"fr\":\"Îles Féroé\"},\"currency_code\":\"DKK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"FR\":{\"country_name\":{\"en\":\"France\",\"fr\":\"France\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GB\":{\"country_name\":{\"en\":\"United Kingdom\",\"fr\":\"Royaume-Uni\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"GD\":{\"country_name\":{\"en\":\"Grenada\",\"fr\":\"Grenade\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"GE\":{\"country_name\":{\"en\":\"Georgia\",\"fr\":\"Géorgie\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"GF\":{\"country_name\":{\"en\":\"French Guiana\",\"fr\":\"Guyane française\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GG\":{\"country_name\":{\"en\":\"Guernsey\",\"fr\":\"Guernesey\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"GI\":{\"country_name\":{\"en\":\"Gibraltar\",\"fr\":\"Gibraltar\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"GL\":{\"country_name\":{\"en\":\"Greenland\",\"fr\":\"Groenland\"},\"currency_code\":\"DKK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"GP\":{\"country_name\":{\"en\":\"Guadeloupe\",\"fr\":\"Guadeloupe\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GR\":{\"country_name\":{\"en\":\"Greece\",\"fr\":\"Grèce\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"GT\":{\"country_name\":{\"en\":\"Guatemala\",\"fr\":\"Guatemala\"},\"currency_code\":\"GTQ\",\"currency_sign\":\"Q\",\"languages\":[\"en\",\"fr\"]},\"GY\":{\"country_name\":{\"en\":\"Guyana\",\"fr\":\"Guyana\"},\"currency_code\":\"GYD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"HN\":{\"country_name\":{\"en\":\"Honduras\",\"fr\":\"Honduras\"},\"currency_code\":\"HNL\",\"currency_sign\":\"L\",\"languages\":[\"en\",\"fr\"]},\"HR\":{\"country_name\":{\"en\":\"Croatia\",\"fr\":\"Croatie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"HT\":{\"country_name\":{\"en\":\"Haiti\",\"fr\":\"Haïti\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"HU\":{\"country_name\":{\"en\":\"Hungary\",\"fr\":\"Hongrie\"},\"currency_code\":\"HUF\",\"currency_sign\":\"Ft\",\"languages\":[\"en\",\"fr\"]},\"IE\":{\"country_name\":{\"en\":\"Ireland\",\"fr\":\"Irlande\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"IM\":{\"country_name\":{\"en\":\"Isle of Man\",\"fr\":\"Île de Man\"},\"currency_code\":\"GBP\",\"currency_sign\":\"£\",\"languages\":[\"en\",\"fr\"]},\"IS\":{\"country_name\":{\"en\":\"Iceland\",\"fr\":\"Islande\"},\"currency_code\":\"ISK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"IT\":{\"country_name\":{\"en\":\"Italy\",\"fr\":\"Italie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"JE\":{\"country_name\":{\"en\":\"Jersey\",\"fr\":\"Jersey\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"JM\":{\"country_name\":{\"en\":\"Jamaica\",\"fr\":\"Jamaïque\"},\"currency_code\":\"JMD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"KN\":{\"country_name\":{\"en\":\"St. Kitts \\u0026 Nevis\",\"fr\":\"Saint-Christophe-et-Niévès\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"KY\":{\"country_name\":{\"en\":\"Cayman Islands\",\"fr\":\"Îles Caïmans\"},\"currency_code\":\"KYD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"LC\":{\"country_name\":{\"en\":\"St. Lucia\",\"fr\":\"Sainte-Lucie\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"LI\":{\"country_name\":{\"en\":\"Liechtenstein\",\"fr\":\"Liechtenstein\"},\"currency_code\":\"CHF\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"LT\":{\"country_name\":{\"en\":\"Lithuania\",\"fr\":\"Lituanie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"LU\":{\"country_name\":{\"en\":\"Luxembourg\",\"fr\":\"Luxembourg\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"LV\":{\"country_name\":{\"en\":\"Latvia\",\"fr\":\"Lettonie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MC\":{\"country_name\":{\"en\":\"Monaco\",\"fr\":\"Monaco\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MD\":{\"country_name\":{\"en\":\"Moldova\",\"fr\":\"Moldavie\"},\"currency_code\":\"MDL\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"ME\":{\"country_name\":{\"en\":\"Montenegro\",\"fr\":\"Monténégro\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MF\":{\"country_name\":{\"en\":\"St. Martin\",\"fr\":\"Saint-Martin\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MK\":{\"country_name\":{\"en\":\"North Macedonia\",\"fr\":\"Macédoine du Nord\"},\"currency_code\":\"MKD\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"MQ\":{\"country_name\":{\"en\":\"Martinique\",\"fr\":\"Martinique\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MS\":{\"country_name\":{\"en\":\"Montserrat\",\"fr\":\"Montserrat\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"MT\":{\"country_name\":{\"en\":\"Malta\",\"fr\":\"Malte\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"MX\":{\"country_name\":{\"en\":\"Mexico\",\"fr\":\"Mexique\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"NI\":{\"country_name\":{\"en\":\"Nicaragua\",\"fr\":\"Nicaragua\"},\"currency_code\":\"NIO\",\"currency_sign\":\"C\$\",\"languages\":[\"en\",\"fr\"]},\"NL\":{\"country_name\":{\"en\":\"Netherlands\",\"fr\":\"Pays-Bas\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"NO\":{\"country_name\":{\"en\":\"Norway\",\"fr\":\"Norvège\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"PA\":{\"country_name\":{\"en\":\"Panama\",\"fr\":\"Panama\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"PE\":{\"country_name\":{\"en\":\"Peru\",\"fr\":\"Pérou\"},\"currency_code\":\"PEN\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"PL\":{\"country_name\":{\"en\":\"Poland\",\"fr\":\"Pologne\"},\"currency_code\":\"PLN\",\"currency_sign\":\"zł\",\"languages\":[\"en\",\"fr\"]},\"PM\":{\"country_name\":{\"en\":\"St. Pierre \\u0026 Miquelon\",\"fr\":\"Saint-Pierre-et-Miquelon\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"PT\":{\"country_name\":{\"en\":\"Portugal\",\"fr\":\"Portugal\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"PY\":{\"country_name\":{\"en\":\"Paraguay\",\"fr\":\"Paraguay\"},\"currency_code\":\"PYG\",\"currency_sign\":\"₲\",\"languages\":[\"en\",\"fr\"]},\"RE\":{\"country_name\":{\"en\":\"Réunion\",\"fr\":\"La Réunion\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"RO\":{\"country_name\":{\"en\":\"Romania\",\"fr\":\"Roumanie\"},\"currency_code\":\"RON\",\"currency_sign\":\"lei\",\"languages\":[\"en\",\"fr\"]},\"RS\":{\"country_name\":{\"en\":\"Serbia\",\"fr\":\"Serbie\"},\"currency_code\":\"RSD\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"SE\":{\"country_name\":{\"en\":\"Sweden\",\"fr\":\"Suède\"},\"currency_code\":\"SEK\",\"currency_sign\":\"kr\",\"languages\":[\"en\",\"fr\"]},\"SI\":{\"country_name\":{\"en\":\"Slovenia\",\"fr\":\"Slovénie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"SJ\":{\"country_name\":{\"en\":\"Svalbard \\u0026 Jan Mayen\",\"fr\":\"Svalbard et Jan Mayen\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"SK\":{\"country_name\":{\"en\":\"Slovakia\",\"fr\":\"Slovaquie\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"SM\":{\"country_name\":{\"en\":\"San Marino\",\"fr\":\"Saint-Marin\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"SR\":{\"country_name\":{\"en\":\"Suriname\",\"fr\":\"Suriname\"},\"currency_code\":\"CAD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"SV\":{\"country_name\":{\"en\":\"El Salvador\",\"fr\":\"Salvador\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"SX\":{\"country_name\":{\"en\":\"Sint Maarten\",\"fr\":\"Saint-Martin (partie néerlandaise)\"},\"currency_code\":\"ANG\",\"currency_sign\":null,\"languages\":[\"en\",\"fr\"]},\"TC\":{\"country_name\":{\"en\":\"Turks \\u0026 Caicos Islands\",\"fr\":\"Îles Turques-et-Caïques\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"TT\":{\"country_name\":{\"en\":\"Trinidad \\u0026 Tobago\",\"fr\":\"Trinité-et-Tobago\"},\"currency_code\":\"TTD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"UA\":{\"country_name\":{\"en\":\"Ukraine\",\"fr\":\"Ukraine\"},\"currency_code\":\"UAH\",\"currency_sign\":\"₴\",\"languages\":[\"en\",\"fr\"]},\"UM\":{\"country_name\":{\"en\":\"U.S. Outlying Islands\",\"fr\":\"Îles mineures éloignées des États-Unis\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"US\":{\"country_name\":{\"en\":\"United States\",\"fr\":\"États-Unis\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"UY\":{\"country_name\":{\"en\":\"Uruguay\",\"fr\":\"Uruguay\"},\"currency_code\":\"UYU\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"VA\":{\"country_name\":{\"en\":\"Vatican City\",\"fr\":\"État de la Cité du Vatican\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"VC\":{\"country_name\":{\"en\":\"St. Vincent \\u0026 Grenadines\",\"fr\":\"Saint-Vincent-et-les Grenadines\"},\"currency_code\":\"XCD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"VE\":{\"country_name\":{\"en\":\"Venezuela\",\"fr\":\"Venezuela\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"VG\":{\"country_name\":{\"en\":\"British Virgin Islands\",\"fr\":\"Îles Vierges britanniques\"},\"currency_code\":\"USD\",\"currency_sign\":\"\$\",\"languages\":[\"en\",\"fr\"]},\"XK\":{\"country_name\":{\"en\":\"Kosovo\",\"fr\":\"Kosovo\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]},\"YT\":{\"country_name\":{\"en\":\"Mayotte\",\"fr\":\"Mayotte\"},\"currency_code\":\"EUR\",\"currency_sign\":\"€\",\"languages\":[\"en\",\"fr\"]}}");
LocaleBar.data.isEligibleForExperiment = false;
LocaleBar.data.experimentTranslations = JSON.parse("{\"en\":{\"title\":\"Your location is set to {{ country }}\",\"language_title\":\"Your language is set to {{ language }}\",\"submit\":\"Continue\",\"change_country\":\"Change country/region\",\"change_language\":\"Change language\",\"change_country_and_language\":\"Change country/region and language\",\"cancel\":\"Cancel\",\"benefits\":{\"shipping_options\":\"Get shipping options for {{ country }}\",\"local_currency\":\"Shop in {{ currency }}\",\"language\":\"Language set to {{ language }}\"}},\"fr\":{\"title\":\"Votre emplacement est défini sur {{ country }}\",\"language_title\":\"Votre langue est définie sur {{ language }}\",\"submit\":\"Continuer\",\"change_country\":\"Changer le pays/la région\",\"change_language\":\"Changer la langue\",\"change_country_and_language\":\"Changer le pays/la région et la langue\",\"cancel\":\"Annuler\",\"benefits\":{\"shipping_options\":\"Obtenir les options d’expédition pour le pays suivant : {{ country }}\",\"local_currency\":\"Faire des achats en {{ currency }}\",\"language\":\"La langue est définie sur {{ language }}\"}}}");
LocaleBar.fetch().then(function (suggestions) {
   if (!suggestions) return;

   LocaleBar.style.innerHTML = ".locale-bar__container{font-size:16px;outline:none;z-index:1000000}.locale-bar__content{align-items:flex-start;display:flex;justify-content:space-between;padding:1em}.locale-bar__message{margin:0;padding:0}.locale-bar__form{margin:0.5em 0 0 -0.3em;text-align:left}.locale-bar__selector{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:\'\' !important;vertical-align:baseline !important;width:auto !important}.locale-bar__button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;border:none;border-radius:2px;box-shadow:none;margin:0.3em;padding:0.3em 0.5em}.locale-bar__button:hover,.locale-bar__button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.locale-bar__button:focus{outline:auto !important}.locale-bar__button:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,0.15)}.locale-bar__button--minimal{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;text-decoration:underline}.locale-bar__button--minimal:hover,.locale-bar__button--minimal:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.locale-bar__button--minimal:focus{outline:auto !important}.locale-bar__button--minimal:hover,.locale-bar__button--minimal:focus{background:none !important}.locale-bar__close-button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;margin-left:1em;padding-top:2px}.locale-bar__close-button:hover,.locale-bar__close-button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.locale-bar__close-button:focus{outline:auto !important}.locale-bar__close-button:hover,.locale-bar__close-button:focus{background:none !important}.recommendation-modal__container{box-shadow:0px 0px 1px rgba(0,0,0,0.3),0px 4px 4px 1px rgba(0,0,0,0.1);max-width:30em;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);width:calc(100% - 2em);z-index:1000000;border-radius:5px}@media (max-width: 490px){.recommendation-modal__container{width:100%;left:50%;bottom:0;top:auto;transform:translateX(-50%);border-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}}.recommendation-modal__close-button-container{display:flex;justify-content:flex-end}.recommendation-modal__close-button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;margin-right:10px;margin-top:10px;cursor:pointer}.recommendation-modal__close-button:hover,.recommendation-modal__close-button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.recommendation-modal__close-button:focus{outline:auto !important}.recommendation-modal__close-button:hover,.recommendation-modal__close-button:focus{background:none !important}@media (max-width: 490px){.recommendation-modal__close-button{margin-right:16px;margin-top:16px}}.recommendation-modal__content{display:flex;flex-direction:column;align-items:center;padding:0 2.5em 2.5em;gap:1.2em}@media (max-width: 750px){.recommendation-modal__content{padding:0 2em 2em}}.recommendation-modal__flag{padding-top:12px}.recommendation-modal__flag img{width:75px !important;height:48px !important}@media (max-width: 490px){.recommendation-modal__flag img{width:50px !important;height:32px !important}}.recommendation-modal__message,.recommendation-modal__message--align-start{font-weight:normal !important;text-transform:none;margin:0 !important;text-align:center;letter-spacing:normal;font-size:22px !important;line-height:1.3 !important}.recommendation-modal__message--align-start{align-self:flex-start}.recommendation-modal__message--bold{font-weight:bold !important}.recommendation-modal__benefits{width:100%}.recommendation-modal__benefits ul{margin:0 !important;padding-left:16px;font-size:16px}.recommendation-modal__benefits ul li{font-size:16px !important;line-height:1.4 !important;list-style-type:disc}.recommendation-modal__button{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;border:none;border-radius:4px;box-shadow:none;margin:0 !important;width:100% !important;height:52px !important;font-size:18px !important;box-sizing:border-box !important;padding:0 !important}.recommendation-modal__button:hover,.recommendation-modal__button:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.recommendation-modal__button:focus{outline:auto !important}.recommendation-modal__button:hover,.recommendation-modal__button:focus{cursor:pointer;width:100% !important}@media (max-width: 490px){.recommendation-modal__button{height:40px !important}}.recommendation-modal__button--minimal{border:none !important;box-shadow:none !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;min-height:unset !important;min-width:unset !important;text-align:center !important;vertical-align:unset !important;width:auto !important;background:none !important;padding:0 !important;text-decoration-line:underline;font-size:14px !important}.recommendation-modal__button--minimal:hover,.recommendation-modal__button--minimal:focus{border:none !important;box-shadow:none !important;min-width:unset !important;width:auto !important}.recommendation-modal__button--minimal:focus{outline:auto !important}.recommendation-modal__button--minimal:hover,.recommendation-modal__button--minimal:focus{background:none !important}.recommendation-modal__button--minimal:hover{cursor:pointer}.recommendation-modal__backdrop{background-color:rgba(0,0,0,0.3);display:block !important;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999999}.recommendation-modal__selector--flag{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:\'\' !important;vertical-align:baseline !important;width:auto !important;background-color:transparent !important;border:1px solid #babfc3 !important;border-radius:4px !important;width:100% !important;height:38px !important;margin:0 !important;padding-left:40px !important}.recommendation-modal__selector{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:\'\' !important;vertical-align:baseline !important;width:auto !important;background-color:transparent !important;border:1px solid #babfc3 !important;border-radius:4px !important;width:100% !important;height:38px !important;margin:0 !important}.recommendation-modal__selector-wrapper--flag{background-image:var(--bg-image);background-repeat:no-repeat;background-position:11px center;background-size:25px;background-color:#f4f4f4 !important;border-radius:4px !important;margin:0 0 12px 0}.recommendation-modal__selector-wrapper{background-color:#f4f4f4 !important;border-radius:4px !important;margin:0 0 12px 0}.recommendation-modal__form{margin:0;width:100%}\n"
   LocaleBar.render(suggestions, JSON.parse("{\"colors\":{\"background\":\"#fafafa\",\"foreground\":\"#2e2e2e\",\"buttonBackground\":\"#111111\",\"buttonForeground\":\"#ffffff\",\"link\":\"#111111\"},\"layout\":{\"minimal\":false,\"variant\":\"modal\"},\"messages\":{\"en\":{\"currency_and_language_suggestion\":\"Looks like you’re in {{ country }}. Change language and currency?\",\"currency_suggestion\":\"Looks like you’re in {{ country }}. Change currency?\",\"country_and_language_suggestion\":\"Looks like you’re in {{ country }}. Change country and language?\",\"country_suggestion\":\"Looks like you’re in {{ country }}. Change country?\",\"language_suggestion\":\"Looks like your browser is set to {{ language }}. Change language?\",\"submit\":\"Change\"},\"fr\":{\"currency_and_language_suggestion\":\"Vous semblez vous trouver dans le pays suivant : {{ country }}. Changer de langue et de devise ?\",\"currency_suggestion\":\"Vous semblez vous trouver dans le pays suivant : {{ country }}. Changer de devise ?\",\"country_and_language_suggestion\":\"Vous semblez vous trouver dans le pays suivant : {{ country }}. Changer le pays et la langue ?\",\"country_suggestion\":\"Vous semblez vous trouver dans le pays suivant : {{ country }}. Changer le pays ?\",\"language_suggestion\":\"Votre navigateur semble être configuré dans la langue suivante : {{ language }}. Changer de langue ?\",\"submit\":\"Changer\"}}}"))
});