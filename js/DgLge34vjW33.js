! function () {
   var t = function (t) {
         var e = {
            exports: {}
         };
         return t.call(e.exports, e, e.exports), e.exports
      },
      e = function (t) {
         return function () {
            var e = t.apply(this, arguments);
            return new Promise((function (t, r) {
               function n(i, o) {
                  try {
                     var a = e[i](o),
                        s = a.value
                  } catch (t) {
                     return void r(t)
                  }
                  if (!a.done) return Promise.resolve(s).then((function (t) {
                     n("next", t)
                  }), (function (t) {
                     n("throw", t)
                  }));
                  t(s)
               }
               return n("next")
            }))
         }
      },
      r = function (t) {
         return t && t.__esModule ? t : {
            default: t
         }
      },
      n = t((function (t) {
         var e = {}.toString;
         t.exports = function (t) {
            return e.call(t).slice(8, -1)
         }
      })),
      i = t((function (t) {
         var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
         "number" == typeof __g && (__g = e)
      })),
      o = t((function (t) {
         var e = "__core-js_shared__",
            r = i[e] || (i[e] = {});
         t.exports = function (t) {
            return r[t] || (r[t] = {})
         }
      })),
      a = t((function (t) {
         var e = 0,
            r = Math.random();
         t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
         }
      })),
      s = t((function (t) {
         var e = o("wks"),
            r = i.Symbol,
            n = "function" == typeof r;
         (t.exports = function (t) {
            return e[t] || (e[t] = n && r[t] || (n ? r : a)("Symbol." + t))
         }).store = e
      })),
      u = t((function (t) {
         var e = s("toStringTag"),
            r = "Arguments" == n(function () {
               return arguments
            }()),
            i = function (t, e) {
               try {
                  return t[e]
               } catch (t) {}
            };
         t.exports = function (t) {
            var o, a, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (a = i(o = Object(t), e)) ? a : r ? n(o) : "Object" == (s = n(o)) && "function" == typeof o.callee ? "Arguments" : s
         }
      })),
      c = t((function (t) {
         t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
         }
      })),
      f = t((function (t) {
         t.exports = function (t) {
            if (!c(t)) throw TypeError(t + " is not an object!");
            return t
         }
      })),
      l = t((function (t) {
         t.exports = function (t) {
            try {
               return !!t()
            } catch (t) {
               return !0
            }
         }
      })),
      h = t((function (t) {
         t.exports = !l((function () {
            return 7 != Object.defineProperty({}, "a", {
               get: function () {
                  return 7
               }
            }).a
         }))
      })),
      p = t((function (t) {
         var e = i.document,
            r = c(e) && c(e.createElement);
         t.exports = function (t) {
            return r ? e.createElement(t) : {}
         }
      })),
      d = t((function (t) {
         t.exports = !h && !l((function () {
            return 7 != Object.defineProperty(p("div"), "a", {
               get: function () {
                  return 7
               }
            }).a
         }))
      })),
      b = t((function (t) {
         t.exports = function (t, e) {
            if (!c(t)) return t;
            var r, n;
            if (e && "function" == typeof (r = t.toString) && !c(n = r.call(t))) return n;
            if ("function" == typeof (r = t.valueOf) && !c(n = r.call(t))) return n;
            if (!e && "function" == typeof (r = t.toString) && !c(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
         }
      })),
      w = t((function (t, e) {
         var r = Object.defineProperty;
         e.f = h ? Object.defineProperty : function (t, e, n) {
            if (f(t), e = b(e, !0), f(n), d) try {
               return r(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
         }
      })),
      v = t((function (t) {
         t.exports = function (t, e) {
            return {
               enumerable: !(1 & t),
               configurable: !(2 & t),
               writable: !(4 & t),
               value: e
            }
         }
      })),
      y = t((function (t) {
         t.exports = h ? function (t, e, r) {
            return w.f(t, e, v(1, r))
         } : function (t, e, r) {
            return t[e] = r, t
         }
      })),
      m = t((function (t) {
         var e = {}.hasOwnProperty;
         t.exports = function (t, r) {
            return e.call(t, r)
         }
      })),
      g = t((function (t) {
         var e = t.exports = {
            version: "2.5.1"
         };
         "number" == typeof __e && (__e = e)
      })),
      x = t((function (t) {
         var e = a("src"),
            r = "toString",
            n = Function[r],
            o = ("" + n).split(r);
         g.inspectSource = function (t) {
            return n.call(t)
         }, (t.exports = function (t, r, n, a) {
            var s = "function" == typeof n;
            s && (m(n, "name") || y(n, "name", r)), t[r] !== n && (s && (m(n, e) || y(n, e, t[r] ? "" + t[r] : o.join(String(r)))), t === i ? t[r] = n : a ? t[r] ? t[r] = n : y(t, r, n) : (delete t[r], y(t, r, n)))
         })(Function.prototype, r, (function () {
            return "function" == typeof this && this[e] || n.call(this)
         }))
      })),
      _ = (t((function () {
         "use strict";
         var t = {};
         t[s("toStringTag")] = "z", t + "" != "[object z]" && x(Object.prototype, "toString", (function () {
            return "[object " + u(this) + "]"
         }), !0)
      })), t((function (t) {
         var e = Math.ceil,
            r = Math.floor;
         t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
         }
      }))),
      k = t((function (t) {
         t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
         }
      })),
      S = t((function (t) {
         t.exports = function (t) {
            return function (e, r) {
               var n, i, o = String(k(e)),
                  a = _(r),
                  s = o.length;
               return a < 0 || a >= s ? t ? "" : void 0 : (n = o.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? t ? o.charAt(a) : n : t ? o.slice(a, a + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
         }
      })),
      T = t((function (t) {
         t.exports = !1
      })),
      A = t((function (t) {
         t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
         }
      })),
      E = t((function (t) {
         t.exports = function (t, e, r) {
            if (A(t), void 0 === e) return t;
            switch (r) {
               case 1:
                  return function (r) {
                     return t.call(e, r)
                  };
               case 2:
                  return function (r, n) {
                     return t.call(e, r, n)
                  };
               case 3:
                  return function (r, n, i) {
                     return t.call(e, r, n, i)
                  }
            }
            return function () {
               return t.apply(e, arguments)
            }
         }
      })),
      O = t((function (t) {
         var e = "prototype",
            r = function (t, n, o) {
               var a, s, u, c, f = t & r.F,
                  l = t & r.G,
                  h = t & r.S,
                  p = t & r.P,
                  d = t & r.B,
                  b = l ? i : h ? i[n] || (i[n] = {}) : (i[n] || {})[e],
                  w = l ? g : g[n] || (g[n] = {}),
                  v = w[e] || (w[e] = {});
               for (a in l && (o = n), o) u = ((s = !f && b && void 0 !== b[a]) ? b : o)[a], c = d && s ? E(u, i) : p && "function" == typeof u ? E(Function.call, u) : u, b && x(b, a, u, t & r.U), w[a] != u && y(w, a, c), p && v[a] != u && (v[a] = u)
            };
         i.core = g, r.F = 1, r.G = 2, r.S = 4, r.P = 8, r.B = 16, r.W = 32, r.U = 64, r.R = 128, t.exports = r
      })),
      j = t((function (t) {
         t.exports = {}
      })),
      P = t((function (t) {
         t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == n(t) ? t.split("") : Object(t)
         }
      })),
      L = t((function (t) {
         t.exports = function (t) {
            return P(k(t))
         }
      })),
      B = t((function (t) {
         var e = Math.min;
         t.exports = function (t) {
            return t > 0 ? e(_(t), 9007199254740991) : 0
         }
      })),
      M = t((function (t) {
         var e = Math.max,
            r = Math.min;
         t.exports = function (t, n) {
            return (t = _(t)) < 0 ? e(t + n, 0) : r(t, n)
         }
      })),
      R = t((function (t) {
         t.exports = function (t) {
            return function (e, r, n) {
               var i, o = L(e),
                  a = B(o.length),
                  s = M(n, a);
               if (t && r != r) {
                  for (; a > s;)
                     if ((i = o[s++]) != i) return !0
               } else
                  for (; a > s; s++)
                     if ((t || s in o) && o[s] === r) return t || s || 0;
               return !t && -1
            }
         }
      })),
      N = t((function (t) {
         var e = o("keys");
         t.exports = function (t) {
            return e[t] || (e[t] = a(t))
         }
      })),
      U = t((function (t) {
         var e = R(!1),
            r = N("IE_PROTO");
         t.exports = function (t, n) {
            var i, o = L(t),
               a = 0,
               s = [];
            for (i in o) i != r && m(o, i) && s.push(i);
            for (; n.length > a;) m(o, i = n[a++]) && (~e(s, i) || s.push(i));
            return s
         }
      })),
      C = t((function (t) {
         t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
      })),
      I = t((function (t) {
         t.exports = Object.keys || function (t) {
            return U(t, C)
         }
      })),
      F = t((function (t) {
         t.exports = h ? Object.defineProperties : function (t, e) {
            f(t);
            for (var r, n = I(e), i = n.length, o = 0; i > o;) w.f(t, r = n[o++], e[r]);
            return t
         }
      })),
      D = t((function (t) {
         var e = i.document;
         t.exports = e && e.documentElement
      })),
      q = t((function (t) {
         var e = N("IE_PROTO"),
            r = function () {},
            n = "prototype",
            i = function () {
               var t, e = p("iframe"),
                  r = C.length,
                  o = "<",
                  a = ">";
               for (e.style.display = "none", D.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write(o + "script" + a + "document.F=Object" + o + "/script" + a), t.close(), i = t.F; r--;) delete i[n][C[r]];
               return i()
            };
         t.exports = Object.create || function (t, o) {
            var a;
            return null !== t ? (r[n] = f(t), a = new r, r[n] = null, a[e] = t) : a = i(), void 0 === o ? a : F(a, o)
         }
      })),
      z = t((function (t) {
         var e = w.f,
            r = s("toStringTag");
         t.exports = function (t, n, i) {
            t && !m(t = i ? t : t.prototype, r) && e(t, r, {
               configurable: !0,
               value: n
            })
         }
      })),
      G = t((function (t) {
         "use strict";
         var e = {};
         y(e, s("iterator"), (function () {
            return this
         })), t.exports = function (t, r, n) {
            t.prototype = q(e, {
               next: v(1, n)
            }), z(t, r + " Iterator")
         }
      })),
      V = t((function (t) {
         t.exports = function (t) {
            return Object(k(t))
         }
      })),
      H = t((function (t) {
         var e = N("IE_PROTO"),
            r = Object.prototype;
         t.exports = Object.getPrototypeOf || function (t) {
            return t = V(t), m(t, e) ? t[e] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
         }
      })),
      W = t((function (t) {
         "use strict";
         var e = s("iterator"),
            r = !([].keys && "next" in [].keys()),
            n = "@@iterator",
            i = "keys",
            o = "values",
            a = function () {
               return this
            };
         t.exports = function (t, s, u, c, f, l, h) {
            G(u, s, c);
            var p, d, b, w = function (t) {
                  if (!r && t in k) return k[t];
                  switch (t) {
                     case i:
                     case o:
                        return function () {
                           return new u(this, t)
                        }
                  }
                  return function () {
                     return new u(this, t)
                  }
               },
               v = s + " Iterator",
               g = f == o,
               _ = !1,
               k = t.prototype,
               S = k[e] || k[n] || f && k[f],
               A = S || w(f),
               E = f ? g ? w("entries") : A : void 0,
               P = "Array" == s && k.entries || S;
            if (P && (b = H(P.call(new t))) !== Object.prototype && b.next && (z(b, v, !0), T || m(b, e) || y(b, e, a)), g && S && S.name !== o && (_ = !0, A = function () {
                  return S.call(this)
               }), T && !h || !r && !_ && k[e] || y(k, e, A), j[s] = A, j[v] = a, f)
               if (p = {
                     values: g ? A : w(o),
                     keys: l ? A : w(i),
                     entries: E
                  }, h)
                  for (d in p) d in k || x(k, d, p[d]);
               else O(O.P + O.F * (r || _), s, p);
            return p
         }
      })),
      K = (t((function () {
         "use strict";
         var t = S(!0);
         W(String, "String", (function (t) {
            this._t = String(t), this._i = 0
         }), (function () {
            var e, r = this._t,
               n = this._i;
            return n >= r.length ? {
               value: void 0,
               done: !0
            } : (e = t(r, n), this._i += e.length, {
               value: e,
               done: !1
            })
         }))
      })), t((function (t) {
         var e = s("unscopables"),
            r = Array.prototype;
         null == r[e] && y(r, e, {}), t.exports = function (t) {
            r[e][t] = !0
         }
      }))),
      X = t((function (t) {
         t.exports = function (t, e) {
            return {
               value: e,
               done: !!t
            }
         }
      })),
      Z = t((function (t) {
         "use strict";
         t.exports = W(Array, "Array", (function (t, e) {
            this._t = L(t), this._i = 0, this._k = e
         }), (function () {
            var t = this._t,
               e = this._k,
               r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, X(1)) : X(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
         }), "values"), j.Arguments = j.Array, K("keys"), K("values"), K("entries")
      })),
      $ = (t((function () {
         for (var t = s("iterator"), e = s("toStringTag"), r = j.Array, n = {
               CSSRuleList: !0,
               CSSStyleDeclaration: !1,
               CSSValueList: !1,
               ClientRectList: !1,
               DOMRectList: !1,
               DOMStringList: !1,
               DOMTokenList: !0,
               DataTransferItemList: !1,
               FileList: !1,
               HTMLAllCollection: !1,
               HTMLCollection: !1,
               HTMLFormElement: !1,
               HTMLSelectElement: !1,
               MediaList: !0,
               MimeTypeArray: !1,
               NamedNodeMap: !1,
               NodeList: !0,
               PaintRequestList: !1,
               Plugin: !1,
               PluginArray: !1,
               SVGLengthList: !1,
               SVGNumberList: !1,
               SVGPathSegList: !1,
               SVGPointList: !1,
               SVGStringList: !1,
               SVGTransformList: !1,
               SourceBufferList: !1,
               StyleSheetList: !0,
               TextTrackCueList: !1,
               TextTrackList: !1,
               TouchList: !1
            }, o = I(n), a = 0; a < o.length; a++) {
            var u, c = o[a],
               f = n[c],
               l = i[c],
               h = l && l.prototype;
            if (h && (h[t] || y(h, t, r), h[e] || y(h, e, c), j[c] = r, f))
               for (u in Z) h[u] || x(h, u, Z[u], !0)
         }
      })), t((function (t) {
         t.exports = function (t, e, r, n) {
            if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
            return t
         }
      }))),
      Y = t((function (t) {
         t.exports = function (t, e, r, n) {
            try {
               return n ? e(f(r)[0], r[1]) : e(r)
            } catch (e) {
               var i = t.return;
               throw void 0 !== i && f(i.call(t)), e
            }
         }
      })),
      J = t((function (t) {
         var e = s("iterator"),
            r = Array.prototype;
         t.exports = function (t) {
            return void 0 !== t && (j.Array === t || r[e] === t)
         }
      })),
      Q = t((function (t) {
         var e = s("iterator");
         t.exports = g.getIteratorMethod = function (t) {
            if (null != t) return t[e] || t["@@iterator"] || j[u(t)]
         }
      })),
      tt = t((function (t, e) {
         var r = {},
            n = {};
         (e = t.exports = function (t, e, i, o, a) {
            var s, u, c, l, h = a ? function () {
                  return t
               } : Q(t),
               p = E(i, o, e ? 2 : 1),
               d = 0;
            if ("function" != typeof h) throw TypeError(t + " is not iterable!");
            if (J(h)) {
               for (s = B(t.length); s > d; d++)
                  if ((l = e ? p(f(u = t[d])[0], u[1]) : p(t[d])) === r || l === n) return l
            } else
               for (c = h.call(t); !(u = c.next()).done;)
                  if ((l = Y(c, p, u.value, e)) === r || l === n) return l
         }).BREAK = r, e.RETURN = n
      })),
      et = t((function (t) {
         var e = s("species");
         t.exports = function (t, r) {
            var n, i = f(t).constructor;
            return void 0 === i || null == (n = f(i)[e]) ? r : A(n)
         }
      })),
      rt = t((function (t) {
         t.exports = function (t, e, r) {
            var n = void 0 === r;
            switch (e.length) {
               case 0:
                  return n ? t() : t.call(r);
               case 1:
                  return n ? t(e[0]) : t.call(r, e[0]);
               case 2:
                  return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
               case 3:
                  return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
               case 4:
                  return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
            }
            return t.apply(r, e)
         }
      })),
      nt = t((function (t) {
         var e, r, o, a = i.process,
            s = i.setImmediate,
            u = i.clearImmediate,
            c = i.MessageChannel,
            f = i.Dispatch,
            l = 0,
            h = {},
            d = "onreadystatechange",
            b = function () {
               var t = +this;
               if (h.hasOwnProperty(t)) {
                  var e = h[t];
                  delete h[t], e()
               }
            },
            w = function (t) {
               b.call(t.data)
            };
         s && u || (s = function (t) {
            for (var r = [], n = 1; arguments.length > n;) r.push(arguments[n++]);
            return h[++l] = function () {
               rt("function" == typeof t ? t : Function(t), r)
            }, e(l), l
         }, u = function (t) {
            delete h[t]
         }, "process" == n(a) ? e = function (t) {
            a.nextTick(E(b, t, 1))
         } : f && f.now ? e = function (t) {
            f.now(E(b, t, 1))
         } : c ? (o = (r = new c).port2, r.port1.onmessage = w, e = E(o.postMessage, o, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts ? (e = function (t) {
            i.postMessage(t + "", "*")
         }, i.addEventListener("message", w, !1)) : e = d in p("script") ? function (t) {
            D.appendChild(p("script"))[d] = function () {
               D.removeChild(this), b.call(t)
            }
         } : function (t) {
            setTimeout(E(b, t, 1), 0)
         }), t.exports = {
            set: s,
            clear: u
         }
      })),
      it = t((function (t) {
         var e = nt.set,
            r = i.MutationObserver || i.WebKitMutationObserver,
            o = i.process,
            a = i.Promise,
            s = "process" == n(o);
         t.exports = function () {
            var t, n, u, c = function () {
               var e, r;
               for (s && (e = o.domain) && e.exit(); t;) {
                  r = t.fn, t = t.next;
                  try {
                     r()
                  } catch (e) {
                     throw t ? u() : n = void 0, e
                  }
               }
               n = void 0, e && e.enter()
            };
            if (s) u = function () {
               o.nextTick(c)
            };
            else if (r) {
               var f = !0,
                  l = document.createTextNode("");
               new r(c).observe(l, {
                  characterData: !0
               }), u = function () {
                  l.data = f = !f
               }
            } else if (a && a.resolve) {
               var h = a.resolve();
               u = function () {
                  h.then(c)
               }
            } else u = function () {
               e.call(i, c)
            };
            return function (e) {
               var r = {
                  fn: e,
                  next: void 0
               };
               n && (n.next = r), t || (t = r, u()), n = r
            }
         }
      })),
      ot = t((function (t) {
         "use strict";

         function e(t) {
            var e, r;
            this.promise = new t((function (t, n) {
               if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
               e = t, r = n
            })), this.resolve = A(e), this.reject = A(r)
         }
         t.exports.f = function (t) {
            return new e(t)
         }
      })),
      at = t((function (t) {
         t.exports = function (t) {
            try {
               return {
                  e: !1,
                  v: t()
               }
            } catch (t) {
               return {
                  e: !0,
                  v: t
               }
            }
         }
      })),
      st = t((function (t) {
         t.exports = function (t, e) {
            if (f(t), c(e) && e.constructor === t) return e;
            var r = ot.f(t);
            return (0, r.resolve)(e), r.promise
         }
      })),
      ut = t((function (t) {
         t.exports = function (t, e, r) {
            for (var n in e) x(t, n, e[n], r);
            return t
         }
      })),
      ct = t((function (t) {
         "use strict";
         var e = s("species");
         t.exports = function (t) {
            var r = i[t];
            h && r && !r[e] && w.f(r, e, {
               configurable: !0,
               get: function () {
                  return this
               }
            })
         }
      })),
      ft = t((function (t) {
         var e = s("iterator"),
            r = !1;
         try {
            var n = [7][e]();
            n.return = function () {
               r = !0
            }, Array.from(n, (function () {
               throw 2
            }))
         } catch (t) {}
         t.exports = function (t, n) {
            if (!n && !r) return !1;
            var i = !1;
            try {
               var o = [7],
                  a = o[e]();
               a.next = function () {
                  return {
                     done: i = !0
                  }
               }, o[e] = function () {
                  return a
               }, t(o)
            } catch (t) {}
            return i
         }
      }));
   t((function () {
      "use strict";
      var t, e, r, n, o = nt.set,
         a = it(),
         f = "Promise",
         l = i.TypeError,
         h = i.process,
         p = i[f],
         d = "process" == u(h),
         b = function () {},
         w = e = ot.f,
         v = !! function () {
            try {
               var t = p.resolve(1),
                  e = (t.constructor = {})[s("species")] = function (t) {
                     t(b, b)
                  };
               return (d || "function" == typeof PromiseRejectionEvent) && t.then(b) instanceof e
            } catch (t) {}
         }(),
         y = function (t) {
            var e;
            return !(!c(t) || "function" != typeof (e = t.then)) && e
         },
         m = function (t, e) {
            if (!t._n) {
               t._n = !0;
               var r = t._c;
               a((function () {
                  for (var n = t._v, i = 1 == t._s, o = 0, a = function (e) {
                        var r, o, a = i ? e.ok : e.fail,
                           s = e.resolve,
                           u = e.reject,
                           c = e.domain;
                        try {
                           a ? (i || (2 == t._h && k(t), t._h = 1), !0 === a ? r = n : (c && c.enter(), r = a(n), c && c.exit()), r === e.promise ? u(l("Promise-chain cycle")) : (o = y(r)) ? o.call(r, s, u) : s(r)) : u(n)
                        } catch (t) {
                           u(t)
                        }
                     }; r.length > o;) a(r[o++]);
                  t._c = [], t._n = !1, e && !t._h && x(t)
               }))
            }
         },
         x = function (t) {
            o.call(i, (function () {
               var e, r, n, o = t._v,
                  a = _(t);
               if (a && (e = at((function () {
                     d ? h.emit("unhandledRejection", o, t) : (r = i.onunhandledrejection) ? r({
                        promise: t,
                        reason: o
                     }) : (n = i.console) && n.error && n.error("Unhandled promise rejection", o)
                  })), t._h = d || _(t) ? 2 : 1), t._a = void 0, a && e.e) throw e.v
            }))
         },
         _ = function (t) {
            if (1 == t._h) return !1;
            for (var e, r = t._a || t._c, n = 0; r.length > n;)
               if ((e = r[n++]).fail || !_(e.promise)) return !1;
            return !0
         },
         k = function (t) {
            o.call(i, (function () {
               var e;
               d ? h.emit("rejectionHandled", t) : (e = i.onrejectionhandled) && e({
                  promise: t,
                  reason: t._v
               })
            }))
         },
         S = function (t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), m(e, !0))
         },
         j = function (t) {
            var e, r = this;
            if (!r._d) {
               r._d = !0, r = r._w || r;
               try {
                  if (r === t) throw l("Promise can't be resolved itself");
                  (e = y(t)) ? a((function () {
                     var n = {
                        _w: r,
                        _d: !1
                     };
                     try {
                        e.call(t, E(j, n, 1), E(S, n, 1))
                     } catch (t) {
                        S.call(n, t)
                     }
                  })): (r._v = t, r._s = 1, m(r, !1))
               } catch (t) {
                  S.call({
                     _w: r,
                     _d: !1
                  }, t)
               }
            }
         };
      v || (p = function (e) {
         $(this, p, f, "_h"), A(e), t.call(this);
         try {
            e(E(j, this, 1), E(S, this, 1))
         } catch (t) {
            S.call(this, t)
         }
      }, (t = function () {
         this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
      }).prototype = ut(p.prototype, {
         then: function (t, e) {
            var r = w(et(this, p));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = d ? h.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && m(this, !1), r.promise
         },
         catch: function (t) {
            return this.then(void 0, t)
         }
      }), r = function () {
         var e = new t;
         this.promise = e, this.resolve = E(j, e, 1), this.reject = E(S, e, 1)
      }, ot.f = w = function (t) {
         return t === p || t === n ? new r(t) : e(t)
      }), O(O.G + O.W + O.F * !v, {
         Promise: p
      }), z(p, f), ct(f), n = g[f], O(O.S + O.F * !v, f, {
         reject: function (t) {
            var e = w(this);
            return (0, e.reject)(t), e.promise
         }
      }), O(O.S + O.F * (T || !v), f, {
         resolve: function (t) {
            return st(T && this === n ? p : this, t)
         }
      }), O(O.S + O.F * !(v && ft((function (t) {
         p.all(t).catch(b)
      }))), f, {
         all: function (t) {
            var e = this,
               r = w(e),
               n = r.resolve,
               i = r.reject,
               o = at((function () {
                  var r = [],
                     o = 0,
                     a = 1;
                  tt(t, !1, (function (t) {
                     var s = o++,
                        u = !1;
                     r.push(void 0), a++, e.resolve(t).then((function (t) {
                        u || (u = !0, r[s] = t, --a || n(r))
                     }), i)
                  })), --a || n(r)
               }));
            return o.e && i(o.v), r.promise
         },
         race: function (t) {
            var e = this,
               r = w(e),
               n = r.reject,
               i = at((function () {
                  tt(t, !1, (function (t) {
                     e.resolve(t).then(r.resolve, n)
                  }))
               }));
            return i.e && n(i.v), r.promise
         }
      })
   })), t((function (t) {
      t.exports = g.Promise
   }));
   ! function (t) {
      "use strict";

      function e(t) {
         if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
         return t.toLowerCase()
      }

      function r(t) {
         return "string" != typeof t && (t = String(t)), t
      }

      function n(t) {
         var e = {
            next: function () {
               var e = t.shift();
               return {
                  done: void 0 === e,
                  value: e
               }
            }
         };
         return v.iterable && (e[Symbol.iterator] = function () {
            return e
         }), e
      }

      function i(t) {
         this.map = {}, t instanceof i ? t.forEach((function (t, e) {
            this.append(e, t)
         }), this) : Array.isArray(t) ? t.forEach((function (t) {
            this.append(t[0], t[1])
         }), this) : t && Object.getOwnPropertyNames(t).forEach((function (e) {
            this.append(e, t[e])
         }), this)
      }

      function o(t) {
         if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
         t.bodyUsed = !0
      }

      function a(t) {
         return new Promise((function (e, r) {
            t.onload = function () {
               e(t.result)
            }, t.onerror = function () {
               r(t.error)
            }
         }))
      }

      function s(t) {
         var e = new FileReader,
            r = a(e);
         return e.readAsArrayBuffer(t), r
      }

      function u(t) {
         var e = new FileReader,
            r = a(e);
         return e.readAsText(t), r
      }

      function c(t) {
         for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
         return r.join("")
      }

      function f(t) {
         if (t.slice) return t.slice(0);
         var e = new Uint8Array(t.byteLength);
         return e.set(new Uint8Array(t)), e.buffer
      }

      function l() {
         return this.bodyUsed = !1, this._initBody = function (t) {
            if (this._bodyInit = t, t)
               if ("string" == typeof t) this._bodyText = t;
               else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
            else if (v.arrayBuffer && v.blob && m(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
               if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !g(t)) throw new Error("unsupported BodyInit type");
               this._bodyArrayBuffer = f(t)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
         }, v.blob && (this.blob = function () {
            var t = o(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
         }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
         }), this.text = function () {
            var t = o(this);
            if (t) return t;
            if (this._bodyBlob) return u(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
         }, v.formData && (this.formData = function () {
            return this.text().then(d)
         }), this.json = function () {
            return this.text().then(JSON.parse)
         }, this
      }

      function h(t) {
         var e = t.toUpperCase();
         return x.indexOf(e) > -1 ? e : t
      }

      function p(t, e) {
         var r = (e = e || {}).body;
         if (t instanceof p) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
         } else this.url = String(t);
         if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = h(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
         this._initBody(r)
      }

      function d(t) {
         var e = new FormData;
         return t.trim().split("&").forEach((function (t) {
            if (t) {
               var r = t.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  i = r.join("=").replace(/\+/g, " ");
               e.append(decodeURIComponent(n), decodeURIComponent(i))
            }
         })), e
      }

      function b(t) {
         var e = new i;
         return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (t) {
            var r = t.split(":"),
               n = r.shift().trim();
            if (n) {
               var i = r.join(":").trim();
               e.append(n, i)
            }
         })), e
      }

      function w(t, e) {
         e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new i(e.headers), this.url = e.url || "", this._initBody(t)
      }
      if (!t.fetch) {
         var v = {
            searchParams: "URLSearchParams" in t,
            iterable: "Symbol" in t && "iterator" in Symbol,
            blob: "FileReader" in t && "Blob" in t && function () {
               try {
                  return new Blob, !0
               } catch (t) {
                  return !1
               }
            }(),
            formData: "FormData" in t,
            arrayBuffer: "ArrayBuffer" in t
         };
         if (v.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            m = function (t) {
               return t && DataView.prototype.isPrototypeOf(t)
            },
            g = ArrayBuffer.isView || function (t) {
               return t && y.indexOf(Object.prototype.toString.call(t)) > -1
            };
         i.prototype.append = function (t, n) {
            t = e(t), n = r(n);
            var i = this.map[t];
            this.map[t] = i ? i + "," + n : n
         }, i.prototype.delete = function (t) {
            delete this.map[e(t)]
         }, i.prototype.get = function (t) {
            return t = e(t), this.has(t) ? this.map[t] : null
         }, i.prototype.has = function (t) {
            return this.map.hasOwnProperty(e(t))
         }, i.prototype.set = function (t, n) {
            this.map[e(t)] = r(n)
         }, i.prototype.forEach = function (t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
         }, i.prototype.keys = function () {
            var t = [];
            return this.forEach((function (e, r) {
               t.push(r)
            })), n(t)
         }, i.prototype.values = function () {
            var t = [];
            return this.forEach((function (e) {
               t.push(e)
            })), n(t)
         }, i.prototype.entries = function () {
            var t = [];
            return this.forEach((function (e, r) {
               t.push([r, e])
            })), n(t)
         }, v.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
         var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
         p.prototype.clone = function () {
            return new p(this, {
               body: this._bodyInit
            })
         }, l.call(p.prototype), l.call(w.prototype), w.prototype.clone = function () {
            return new w(this._bodyInit, {
               status: this.status,
               statusText: this.statusText,
               headers: new i(this.headers),
               url: this.url
            })
         }, w.error = function () {
            var t = new w(null, {
               status: 0,
               statusText: ""
            });
            return t.type = "error", t
         };
         var _ = [301, 302, 303, 307, 308];
         w.redirect = function (t, e) {
            if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code");
            return new w(null, {
               status: e,
               headers: {
                  location: t
               }
            })
         }, t.Headers = i, t.Request = p, t.Response = w, t.fetch = function (t, e) {
            return new Promise((function (r, n) {
               var i = new p(t, e),
                  o = new XMLHttpRequest;
               o.onload = function () {
                  var t = {
                     status: o.status,
                     statusText: o.statusText,
                     headers: b(o.getAllResponseHeaders() || "")
                  };
                  t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                  var e = "response" in o ? o.response : o.responseText;
                  r(new w(e, t))
               }, o.onerror = function () {
                  n(new TypeError("Network request failed"))
               }, o.ontimeout = function () {
                  n(new TypeError("Network request failed"))
               }, o.open(i.method, i.url, !0), "include" === i.credentials ? o.withCredentials = !0 : "omit" === i.credentials && (o.withCredentials = !1), "responseType" in o && v.blob && (o.responseType = "blob"), i.headers.forEach((function (t, e) {
                  o.setRequestHeader(e, t)
               })), o.send(void 0 === i._bodyInit ? null : i._bodyInit)
            }))
         }, t.fetch.polyfill = !0
      }
   }("undefined" != typeof self ? self : this),
   function (t) {
      "use strict";

      function e(t, e, r, i) {
         var o = e && e.prototype instanceof n ? e : n,
            a = Object.create(o.prototype),
            s = new h(i || []);
         return a._invoke = u(t, r, s), a
      }

      function r(t, e, r) {
         try {
            return {
               type: "normal",
               arg: t.call(e, r)
            }
         } catch (t) {
            return {
               type: "throw",
               arg: t
            }
         }
      }

      function n() {}

      function i() {}

      function o() {}

      function a(t) {
         ["next", "throw", "return"].forEach((function (e) {
            t[e] = function (t) {
               return this._invoke(e, t)
            }
         }))
      }

      function s(t) {
         function e(n, i, o, a) {
            var s = r(t[n], t, i);
            if ("throw" !== s.type) {
               var u = s.arg,
                  c = u.value;
               return c && "object" == typeof c && v.call(c, "__await") ? Promise.resolve(c.__await).then((function (t) {
                  e("next", t, o, a)
               }), (function (t) {
                  e("throw", t, o, a)
               })) : Promise.resolve(c).then((function (t) {
                  u.value = t, o(u)
               }), (function (t) {
                  return e("throw", t, o, a)
               }))
            }
            a(s.arg)
         }

         function n(t, r) {
            function n() {
               return new Promise((function (n, i) {
                  e(t, r, n, i)
               }))
            }
            return i = i ? i.then(n, n) : n()
         }
         var i;
         this._invoke = n
      }

      function u(t, e, n) {
         var i = S;
         return function (o, a) {
            if (i === A) throw new Error("Generator is already running");
            if (i === E) {
               if ("throw" === o) throw a;
               return d()
            }
            for (n.method = o, n.arg = a;;) {
               var s = n.delegate;
               if (s) {
                  var u = c(s, n);
                  if (u) {
                     if (u === O) continue;
                     return u
                  }
               }
               if ("next" === n.method) n.sent = n._sent = n.arg;
               else if ("throw" === n.method) {
                  if (i === S) throw i = E, n.arg;
                  n.dispatchException(n.arg)
               } else "return" === n.method && n.abrupt("return", n.arg);
               i = A;
               var f = r(t, e, n);
               if ("normal" === f.type) {
                  if (i = n.done ? E : T, f.arg === O) continue;
                  return {
                     value: f.arg,
                     done: n.done
                  }
               }
               "throw" === f.type && (i = E, n.method = "throw", n.arg = f.arg)
            }
         }
      }

      function c(t, e) {
         var n = t.iterator[e.method];
         if (n === b) {
            if (e.delegate = null, "throw" === e.method) {
               if (t.iterator.return && (e.method = "return", e.arg = b, c(t, e), "throw" === e.method)) return O;
               e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return O
         }
         var i = r(n, t.iterator, e.arg);
         if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, O;
         var o = i.arg;
         return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = b), e.delegate = null, O) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, O)
      }

      function f(t) {
         var e = {
            tryLoc: t[0]
         };
         1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function l(t) {
         var e = t.completion || {};
         e.type = "normal", delete e.arg, t.completion = e
      }

      function h(t) {
         this.tryEntries = [{
            tryLoc: "root"
         }], t.forEach(f, this), this.reset(!0)
      }

      function p(t) {
         if (t) {
            var e = t[m];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
               var r = -1,
                  n = function e() {
                     for (; ++r < t.length;)
                        if (v.call(t, r)) return e.value = t[r], e.done = !1, e;
                     return e.value = b, e.done = !0, e
                  };
               return n.next = n
            }
         }
         return {
            next: d
         }
      }

      function d() {
         return {
            value: b,
            done: !0
         }
      }
      var b, w = Object.prototype,
         v = w.hasOwnProperty,
         y = "function" == typeof Symbol ? Symbol : {},
         m = y.iterator || "@@iterator",
         g = y.asyncIterator || "@@asyncIterator",
         x = y.toStringTag || "@@toStringTag",
         _ = "object" == typeof module,
         k = t.regeneratorRuntime;
      if (k) _ && (module.exports = k);
      else {
         (k = t.regeneratorRuntime = _ ? module.exports : {}).wrap = e;
         var S = "suspendedStart",
            T = "suspendedYield",
            A = "executing",
            E = "completed",
            O = {},
            j = {};
         j[m] = function () {
            return this
         };
         var P = Object.getPrototypeOf,
            L = P && P(P(p([])));
         L && L !== w && v.call(L, m) && (j = L);
         var B = o.prototype = n.prototype = Object.create(j);
         i.prototype = B.constructor = o, o.constructor = i, o[x] = i.displayName = "GeneratorFunction", k.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name))
         }, k.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : (t.__proto__ = o, x in t || (t[x] = "GeneratorFunction")), t.prototype = Object.create(B), t
         }, k.awrap = function (t) {
            return {
               __await: t
            }
         }, a(s.prototype), s.prototype[g] = function () {
            return this
         }, k.AsyncIterator = s, k.async = function (t, r, n, i) {
            var o = new s(e(t, r, n, i));
            return k.isGeneratorFunction(r) ? o : o.next().then((function (t) {
               return t.done ? t.value : o.next()
            }))
         }, a(B), B[x] = "Generator", B[m] = function () {
            return this
         }, B.toString = function () {
            return "[object Generator]"
         }, k.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
               function r() {
                  for (; e.length;) {
                     var n = e.pop();
                     if (n in t) return r.value = n, r.done = !1, r
                  }
                  return r.done = !0, r
               }
         }, k.values = p, h.prototype = {
            constructor: h,
            reset: function (t) {
               if (this.prev = 0, this.next = 0, this.sent = this._sent = b, this.done = !1, this.delegate = null, this.method = "next", this.arg = b, this.tryEntries.forEach(l), !t)
                  for (var e in this) "t" === e.charAt(0) && v.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = b)
            },
            stop: function () {
               this.done = !0;
               var t = this.tryEntries[0].completion;
               if ("throw" === t.type) throw t.arg;
               return this.rval
            },
            dispatchException: function (t) {
               function e(e, n) {
                  return o.type = "throw", o.arg = t, r.next = e, n && (r.method = "next", r.arg = b), !!n
               }
               if (this.done) throw t;
               for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                     o = i.completion;
                  if ("root" === i.tryLoc) return e("end");
                  if (i.tryLoc <= this.prev) {
                     var a = v.call(i, "catchLoc"),
                        s = v.call(i, "finallyLoc");
                     if (a && s) {
                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                     } else if (a) {
                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                     } else {
                        if (!s) throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                     }
                  }
               }
            },
            abrupt: function (t, e) {
               for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (n.tryLoc <= this.prev && v.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                     var i = n;
                     break
                  }
               }
               i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
               var o = i ? i.completion : {};
               return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, O) : this.complete(o)
            },
            complete: function (t, e) {
               if ("throw" === t.type) throw t.arg;
               return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), O
            },
            finish: function (t) {
               for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), l(r), O
               }
            },
            catch: function (t) {
               for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                     var n = r.completion;
                     if ("throw" === n.type) {
                        var i = n.arg;
                        l(r)
                     }
                     return i
                  }
               }
               throw new Error("illegal catch attempt")
            },
            delegateYield: function (t, e, r) {
               return this.delegate = {
                  iterator: p(t),
                  resultName: e,
                  nextLoc: r
               }, "next" === this.method && (this.arg = b), O
            }
         }
      }
   }(function () {
      return this || "object" == typeof self && self
   }() || Function("return this")());
   var lt = t((function (t, e) {
         ! function (r, n) {
            "use strict";
            var i = "0.7.37",
               o = "",
               a = "?",
               s = "function",
               u = "undefined",
               c = "object",
               f = "string",
               l = "major",
               h = "model",
               p = "name",
               d = "type",
               b = "vendor",
               w = "version",
               v = "architecture",
               y = "console",
               m = "mobile",
               g = "tablet",
               x = "smarttv",
               _ = "wearable",
               k = "embedded",
               S = 500,
               T = "Amazon",
               A = "Apple",
               E = "ASUS",
               O = "BlackBerry",
               j = "Browser",
               P = "Chrome",
               L = "Firefox",
               B = "Google",
               M = "Huawei",
               R = "LG",
               N = "Microsoft",
               U = "Motorola",
               C = "Opera",
               I = "Samsung",
               F = "Sharp",
               D = "Sony",
               q = "Xiaomi",
               z = "Zebra",
               G = "Facebook",
               V = "Chromium OS",
               H = "Mac OS",
               W = function (t, e) {
                  var r = {};
                  for (var n in t) e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];
                  return r
               },
               K = function (t) {
                  for (var e = {}, r = 0; r < t.length; r++) e[t[r].toUpperCase()] = t[r];
                  return e
               },
               X = function (t, e) {
                  return typeof t === f && -1 !== Z(e).indexOf(Z(t))
               },
               Z = function (t) {
                  return t.toLowerCase()
               },
               $ = function (t) {
                  return typeof t === f ? t.replace(/[^\d\.]/g, o).split(".")[0] : n
               },
               Y = function (t, e) {
                  if (typeof t === f) return t = t.replace(/^\s\s*/, o), typeof e === u ? t : t.substring(0, S)
               },
               J = function (t, e) {
                  for (var r, i, o, a, u, f, l = 0; l < e.length && !u;) {
                     var h = e[l],
                        p = e[l + 1];
                     for (r = i = 0; r < h.length && !u && h[r];)
                        if (u = h[r++].exec(t))
                           for (o = 0; o < p.length; o++) f = u[++i], typeof (a = p[o]) === c && a.length > 0 ? 2 === a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, f) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = f ? f.replace(a[1], a[2]) : n : this[a[0]] = f ? a[1].call(this, f, a[2]) : n : 4 === a.length && (this[a[0]] = f ? a[3].call(this, f.replace(a[1], a[2])) : n) : this[a] = f || n;
                     l += 2
                  }
               },
               Q = function (t, e) {
                  for (var r in e)
                     if (typeof e[r] === c && e[r].length > 0) {
                        for (var i = 0; i < e[r].length; i++)
                           if (X(e[r][i], t)) return r === a ? n : r
                     } else if (X(e[r], t)) return r === a ? n : r;
                  return t
               },
               tt = {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM"
               },
               et = {
                  browser: [
                     [/\b(?:crmo|crios)\/([\w\.]+)/i],
                     [w, [p, "Chrome"]],
                     [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                     [w, [p, "Edge"]],
                     [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                     [p, w],
                     [/opios[\/ ]+([\w\.]+)/i],
                     [w, [p, C + " Mini"]],
                     [/\bopr\/([\w\.]+)/i],
                     [w, [p, C]],
                     [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                     [w, [p, "Baidu"]],
                     [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                     [p, w],
                     [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                     [w, [p, "UC" + j]],
                     [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                     [w, [p, "WeChat"]],
                     [/konqueror\/([\w\.]+)/i],
                     [w, [p, "Konqueror"]],
                     [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                     [w, [p, "IE"]],
                     [/ya(?:search)?browser\/([\w\.]+)/i],
                     [w, [p, "Yandex"]],
                     [/slbrowser\/([\w\.]+)/i],
                     [w, [p, "Smart Lenovo " + j]],
                     [/(avast|avg)\/([\w\.]+)/i],
                     [
                        [p, /(.+)/, "$1 Secure " + j], w
                     ],
                     [/\bfocus\/([\w\.]+)/i],
                     [w, [p, L + " Focus"]],
                     [/\bopt\/([\w\.]+)/i],
                     [w, [p, C + " Touch"]],
                     [/coc_coc\w+\/([\w\.]+)/i],
                     [w, [p, "Coc Coc"]],
                     [/dolfin\/([\w\.]+)/i],
                     [w, [p, "Dolphin"]],
                     [/coast\/([\w\.]+)/i],
                     [w, [p, C + " Coast"]],
                     [/miuibrowser\/([\w\.]+)/i],
                     [w, [p, "MIUI " + j]],
                     [/fxios\/([-\w\.]+)/i],
                     [w, [p, L]],
                     [/\bqihu|(qi?ho?o?|360)browser/i],
                     [
                        [p, "360 " + j]
                     ],
                     [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                     [
                        [p, /(.+)/, "$1 " + j], w
                     ],
                     [/samsungbrowser\/([\w\.]+)/i],
                     [w, [p, I + " Internet"]],
                     [/(comodo_dragon)\/([\w\.]+)/i],
                     [
                        [p, /_/g, " "], w
                     ],
                     [/metasr[\/ ]?([\d\.]+)/i],
                     [w, [p, "Sogou Explorer"]],
                     [/(sogou)mo\w+\/([\d\.]+)/i],
                     [
                        [p, "Sogou Mobile"], w
                     ],
                     [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                     [p, w],
                     [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                     [p],
                     [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                     [
                        [p, G], w
                     ],
                     [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                     [p, w],
                     [/\bgsa\/([\w\.]+) .*safari\//i],
                     [w, [p, "GSA"]],
                     [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                     [w, [p, "TikTok"]],
                     [/headlesschrome(?:\/([\w\.]+)| )/i],
                     [w, [p, P + " Headless"]],
                     [/ wv\).+(chrome)\/([\w\.]+)/i],
                     [
                        [p, P + " WebView"], w
                     ],
                     [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                     [w, [p, "Android " + j]],
                     [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                     [p, w],
                     [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                     [w, [p, "Mobile Safari"]],
                     [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                     [w, p],
                     [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                     [p, [w, Q, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                     }]],
                     [/(webkit|khtml)\/([\w\.]+)/i],
                     [p, w],
                     [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                     [
                        [p, "Netscape"], w
                     ],
                     [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                     [w, [p, L + " Reality"]],
                     [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                     [p, w],
                     [/(cobalt)\/([\w\.]+)/i],
                     [p, [w, /master.|lts./, ""]]
                  ],
                  cpu: [
                     [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                     [
                        [v, "amd64"]
                     ],
                     [/(ia32(?=;))/i],
                     [
                        [v, Z]
                     ],
                     [/((?:i[346]|x)86)[;\)]/i],
                     [
                        [v, "ia32"]
                     ],
                     [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                     [
                        [v, "arm64"]
                     ],
                     [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                     [
                        [v, "armhf"]
                     ],
                     [/windows (ce|mobile); ppc;/i],
                     [
                        [v, "arm"]
                     ],
                     [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                     [
                        [v, /ower/, o, Z]
                     ],
                     [/(sun4\w)[;\)]/i],
                     [
                        [v, "sparc"]
                     ],
                     [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                     [
                        [v, Z]
                     ]
                  ],
                  device: [
                     [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                     [h, [b, I],
                        [d, g]
                     ],
                     [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                     [h, [b, I],
                        [d, m]
                     ],
                     [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                     [h, [b, A],
                        [d, m]
                     ],
                     [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                     [h, [b, A],
                        [d, g]
                     ],
                     [/(macintosh);/i],
                     [h, [b, A]],
                     [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                     [h, [b, F],
                        [d, m]
                     ],
                     [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                     [h, [b, M],
                        [d, g]
                     ],
                     [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                     [h, [b, M],
                        [d, m]
                     ],
                     [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                     [
                        [h, /_/g, " "],
                        [b, q],
                        [d, m]
                     ],
                     [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                     [
                        [h, /_/g, " "],
                        [b, q],
                        [d, g]
                     ],
                     [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                     [h, [b, "OPPO"],
                        [d, m]
                     ],
                     [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                     [h, [b, "Vivo"],
                        [d, m]
                     ],
                     [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                     [h, [b, "Realme"],
                        [d, m]
                     ],
                     [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                     [h, [b, U],
                        [d, m]
                     ],
                     [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                     [h, [b, U],
                        [d, g]
                     ],
                     [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                     [h, [b, R],
                        [d, g]
                     ],
                     [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                     [h, [b, R],
                        [d, m]
                     ],
                     [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                     [h, [b, "Lenovo"],
                        [d, g]
                     ],
                     [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                     [
                        [h, /_/g, " "],
                        [b, "Nokia"],
                        [d, m]
                     ],
                     [/(pixel c)\b/i],
                     [h, [b, B],
                        [d, g]
                     ],
                     [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                     [h, [b, B],
                        [d, m]
                     ],
                     [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                     [h, [b, D],
                        [d, m]
                     ],
                     [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                     [
                        [h, "Xperia Tablet"],
                        [b, D],
                        [d, g]
                     ],
                     [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                     [h, [b, "OnePlus"],
                        [d, m]
                     ],
                     [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                     [h, [b, T],
                        [d, g]
                     ],
                     [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                     [
                        [h, /(.+)/g, "Fire Phone $1"],
                        [b, T],
                        [d, m]
                     ],
                     [/(playbook);[-\w\),; ]+(rim)/i],
                     [h, b, [d, g]],
                     [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                     [h, [b, O],
                        [d, m]
                     ],
                     [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                     [h, [b, E],
                        [d, g]
                     ],
                     [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                     [h, [b, E],
                        [d, m]
                     ],
                     [/(nexus 9)/i],
                     [h, [b, "HTC"],
                        [d, g]
                     ],
                     [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                     [b, [h, /_/g, " "],
                        [d, m]
                     ],
                     [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                     [h, [b, "Acer"],
                        [d, g]
                     ],
                     [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                     [h, [b, "Meizu"],
                        [d, m]
                     ],
                     [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                     [h, [b, "Ulefone"],
                        [d, m]
                     ],
                     [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                     [b, h, [d, m]],
                     [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                     [b, h, [d, g]],
                     [/(surface duo)/i],
                     [h, [b, N],
                        [d, g]
                     ],
                     [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                     [h, [b, "Fairphone"],
                        [d, m]
                     ],
                     [/(u304aa)/i],
                     [h, [b, "AT&T"],
                        [d, m]
                     ],
                     [/\bsie-(\w*)/i],
                     [h, [b, "Siemens"],
                        [d, m]
                     ],
                     [/\b(rct\w+) b/i],
                     [h, [b, "RCA"],
                        [d, g]
                     ],
                     [/\b(venue[\d ]{2,7}) b/i],
                     [h, [b, "Dell"],
                        [d, g]
                     ],
                     [/\b(q(?:mv|ta)\w+) b/i],
                     [h, [b, "Verizon"],
                        [d, g]
                     ],
                     [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                     [h, [b, "Barnes & Noble"],
                        [d, g]
                     ],
                     [/\b(tm\d{3}\w+) b/i],
                     [h, [b, "NuVision"],
                        [d, g]
                     ],
                     [/\b(k88) b/i],
                     [h, [b, "ZTE"],
                        [d, g]
                     ],
                     [/\b(nx\d{3}j) b/i],
                     [h, [b, "ZTE"],
                        [d, m]
                     ],
                     [/\b(gen\d{3}) b.+49h/i],
                     [h, [b, "Swiss"],
                        [d, m]
                     ],
                     [/\b(zur\d{3}) b/i],
                     [h, [b, "Swiss"],
                        [d, g]
                     ],
                     [/\b((zeki)?tb.*\b) b/i],
                     [h, [b, "Zeki"],
                        [d, g]
                     ],
                     [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                     [
                        [b, "Dragon Touch"], h, [d, g]
                     ],
                     [/\b(ns-?\w{0,9}) b/i],
                     [h, [b, "Insignia"],
                        [d, g]
                     ],
                     [/\b((nxa|next)-?\w{0,9}) b/i],
                     [h, [b, "NextBook"],
                        [d, g]
                     ],
                     [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                     [
                        [b, "Voice"], h, [d, m]
                     ],
                     [/\b(lvtel\-)?(v1[12]) b/i],
                     [
                        [b, "LvTel"], h, [d, m]
                     ],
                     [/\b(ph-1) /i],
                     [h, [b, "Essential"],
                        [d, m]
                     ],
                     [/\b(v(100md|700na|7011|917g).*\b) b/i],
                     [h, [b, "Envizen"],
                        [d, g]
                     ],
                     [/\b(trio[-\w\. ]+) b/i],
                     [h, [b, "MachSpeed"],
                        [d, g]
                     ],
                     [/\btu_(1491) b/i],
                     [h, [b, "Rotor"],
                        [d, g]
                     ],
                     [/(shield[\w ]+) b/i],
                     [h, [b, "Nvidia"],
                        [d, g]
                     ],
                     [/(sprint) (\w+)/i],
                     [b, h, [d, m]],
                     [/(kin\.[onetw]{3})/i],
                     [
                        [h, /\./g, " "],
                        [b, N],
                        [d, m]
                     ],
                     [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                     [h, [b, z],
                        [d, g]
                     ],
                     [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                     [h, [b, z],
                        [d, m]
                     ],
                     [/smart-tv.+(samsung)/i],
                     [b, [d, x]],
                     [/hbbtv.+maple;(\d+)/i],
                     [
                        [h, /^/, "SmartTV"],
                        [b, I],
                        [d, x]
                     ],
                     [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                     [
                        [b, R],
                        [d, x]
                     ],
                     [/(apple) ?tv/i],
                     [b, [h, A + " TV"],
                        [d, x]
                     ],
                     [/crkey/i],
                     [
                        [h, P + "cast"],
                        [b, B],
                        [d, x]
                     ],
                     [/droid.+aft(\w+)( bui|\))/i],
                     [h, [b, T],
                        [d, x]
                     ],
                     [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                     [h, [b, F],
                        [d, x]
                     ],
                     [/(bravia[\w ]+)( bui|\))/i],
                     [h, [b, D],
                        [d, x]
                     ],
                     [/(mitv-\w{5}) bui/i],
                     [h, [b, q],
                        [d, x]
                     ],
                     [/Hbbtv.*(technisat) (.*);/i],
                     [b, h, [d, x]],
                     [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                     [
                        [b, Y],
                        [h, Y],
                        [d, x]
                     ],
                     [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                     [
                        [d, x]
                     ],
                     [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                     [b, h, [d, y]],
                     [/droid.+; (shield) bui/i],
                     [h, [b, "Nvidia"],
                        [d, y]
                     ],
                     [/(playstation [345portablevi]+)/i],
                     [h, [b, D],
                        [d, y]
                     ],
                     [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                     [h, [b, N],
                        [d, y]
                     ],
                     [/((pebble))app/i],
                     [b, h, [d, _]],
                     [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                     [h, [b, A],
                        [d, _]
                     ],
                     [/droid.+; (glass) \d/i],
                     [h, [b, B],
                        [d, _]
                     ],
                     [/droid.+; (wt63?0{2,3})\)/i],
                     [h, [b, z],
                        [d, _]
                     ],
                     [/(quest( 2| pro)?)/i],
                     [h, [b, G],
                        [d, _]
                     ],
                     [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                     [b, [d, k]],
                     [/(aeobc)\b/i],
                     [h, [b, T],
                        [d, k]
                     ],
                     [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                     [h, [d, m]],
                     [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                     [h, [d, g]],
                     [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                     [
                        [d, g]
                     ],
                     [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                     [
                        [d, m]
                     ],
                     [/(android[-\w\. ]{0,9});.+buil/i],
                     [h, [b, "Generic"]]
                  ],
                  engine: [
                     [/windows.+ edge\/([\w\.]+)/i],
                     [w, [p, "Edge" + "HTML"]],
                     [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                     [w, [p, "Blink"]],
                     [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                     [p, w],
                     [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                     [w, p]
                  ],
                  os: [
                     [/microsoft (windows) (vista|xp)/i],
                     [p, w],
                     [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                     [p, [w, Q, tt]],
                     [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                     [
                        [w, Q, tt],
                        [p, "Windows"]
                     ],
                     [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                     [
                        [w, /_/g, "."],
                        [p, "iOS"]
                     ],
                     [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                     [
                        [p, H],
                        [w, /_/g, "."]
                     ],
                     [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                     [w, p],
                     [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                     [p, w],
                     [/\(bb(10);/i],
                     [w, [p, O]],
                     [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                     [w, [p, "Symbian"]],
                     [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                     [w, [p, L + " OS"]],
                     [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                     [w, [p, "webOS"]],
                     [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                     [w, [p, "watchOS"]],
                     [/crkey\/([\d\.]+)/i],
                     [w, [p, P + "cast"]],
                     [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                     [
                        [p, V], w
                     ],
                     [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                     [p, w],
                     [/(sunos) ?([\w\.\d]*)/i],
                     [
                        [p, "Solaris"], w
                     ],
                     [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                     [p, w]
                  ]
               },
               rt = function (t, e) {
                  if (typeof t === c && (e = t, t = n), !(this instanceof rt)) return new rt(t, e).getResult();
                  var i = typeof r !== u && r.navigator ? r.navigator : n,
                     a = t || (i && i.userAgent ? i.userAgent : o),
                     y = i && i.userAgentData ? i.userAgentData : n,
                     x = e ? W(et, e) : et,
                     _ = i && i.userAgent == a;
                  return this.getBrowser = function () {
                     var t = {};
                     return t[p] = n, t[w] = n, J.call(t, a, x.browser), t[l] = $(t[w]), _ && i && i.brave && typeof i.brave.isBrave == s && (t[p] = "Brave"), t
                  }, this.getCPU = function () {
                     var t = {};
                     return t[v] = n, J.call(t, a, x.cpu), t
                  }, this.getDevice = function () {
                     var t = {};
                     return t[b] = n, t[h] = n, t[d] = n, J.call(t, a, x.device), _ && !t[d] && y && y.mobile && (t[d] = m), _ && "Macintosh" == t[h] && i && typeof i.standalone !== u && i.maxTouchPoints && i.maxTouchPoints > 2 && (t[h] = "iPad", t[d] = g), t
                  }, this.getEngine = function () {
                     var t = {};
                     return t[p] = n, t[w] = n, J.call(t, a, x.engine), t
                  }, this.getOS = function () {
                     var t = {};
                     return t[p] = n, t[w] = n, J.call(t, a, x.os), _ && !t[p] && y && "Unknown" != y.platform && (t[p] = y.platform.replace(/chrome os/i, V).replace(/macos/i, H)), t
                  }, this.getResult = function () {
                     return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                     }
                  }, this.getUA = function () {
                     return a
                  }, this.setUA = function (t) {
                     return a = typeof t === f && t.length > S ? Y(t, S) : t, this
                  }, this.setUA(a), this
               };
            rt.VERSION = i, rt.BROWSER = K([p, w, l]), rt.CPU = K([v]), rt.DEVICE = K([h, b, d, y, m, x, g, _, k]), rt.ENGINE = rt.OS = K([p, w]), "object" !== u ? ("object" !== u && t.exports && (e = t.exports = rt), e.UAParser = rt) : typeof define === s && define.amd ? define((function () {
               return rt
            })) : typeof r !== u && (r.UAParser = rt);
            var nt = typeof r !== u && (r.jQuery || r.Zepto);
            if (nt && !nt.ua) {
               var it = new rt;
               nt.ua = it.getResult(), nt.ua.get = function () {
                  return it.getUA()
               }, nt.ua.set = function (t) {
                  it.setUA(t);
                  var e = it.getResult();
                  for (var r in e) nt.ua[r] = e[r]
               }
            }
         }("object" == typeof window ? window : this)
      })),
      ht = t((function (t, e) {
         "use strict";

         function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
         }

         function n(t, e) {
            for (var r = 0; r < e.length; r++) {
               var n = e[r];
               n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
         }

         function i(t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t
         }

         function o(t) {
            return null == t ? {} : {
               name: t.name,
               version: t.version,
               isMobile: t.isMobile,
               isNativeApp: t.isNativeApp,
               isDesktop: t.isDesktop
            }
         }
         Object.defineProperty(e, "__esModule", {
            value: !0
         }), e.asPlainObject = o, e.Browser = void 0;
         var a = ["mobile", "tablet"],
            s = function () {
               function t(e) {
                  var n = e.userAgent,
                     i = e.supported,
                     o = void 0 === i || i;
                  r(this, t), this.userAgent = void 0, this.supported = void 0, this.ua = void 0, this.userAgent = n, this.supported = o, this.ua = new lt.UAParser(n)
               }
               return i(t, [{
                  key: "name",
                  get: function () {
                     return this.ua.getBrowser().name || ""
                  }
               }, {
                  key: "version",
                  get: function () {
                     return this.ua.getBrowser().version || ""
                  }
               }, {
                  key: "majorVersion",
                  get: function () {
                     var t = this.version;
                     if ("" !== t) {
                        var e = parseInt(t.split(".")[0], 10);
                        return Number.isNaN(e) ? void 0 : e
                     }
                  }
               }, {
                  key: "unknown",
                  get: function () {
                     return "" === this.name
                  }
               }, {
                  key: "isMobile",
                  get: function () {
                     return a.includes(this.ua.getDevice().type)
                  }
               }, {
                  key: "isDesktop",
                  get: function () {
                     return !this.isMobile
                  }
               }, {
                  key: "isNativeApp",
                  get: function () {
                     return this.ua.getUA().includes("Shopify Mobile/", 0)
                  }
               }, {
                  key: "os",
                  get: function () {
                     return this.ua.getOS().name || ""
                  }
               }, {
                  key: "isWindows",
                  get: function () {
                     return this.os.includes("Windows")
                  }
               }, {
                  key: "isMac",
                  get: function () {
                     return this.os.includes("Mac OS")
                  }
               }, {
                  key: "isSafari",
                  get: function () {
                     return this.name.includes("Safari")
                  }
               }, {
                  key: "isChrome",
                  get: function () {
                     return this.name.includes("Chrome")
                  }
               }, {
                  key: "isAndroidChrome",
                  get: function () {
                     return this.ua.getUA().includes("Android") && this.name.includes("Chrome")
                  }
               }, {
                  key: "isFirefox",
                  get: function () {
                     return "Firefox" === this.name
                  }
               }, {
                  key: "isIE",
                  get: function () {
                     return this.name.includes("IE")
                  }
               }, {
                  key: "isEdge",
                  get: function () {
                     return "Edge" === this.name
                  }
               }, {
                  key: "isIOS",
                  get: function () {
                     var t = this.ua.getOS(),
                        e = t.name && t.name.includes("iOS"),
                        r = /Shopify Mobile|Shopify POS|Shopify Ping/.test(this.userAgent) && this.userAgent.includes("iOS");
                     return e || r
                  }
               }]), t
            }();
         e.Browser = s
      })),
      pt = t((function (t, e) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
            value: !0
         }), Object.defineProperty(e, "Browser", {
            enumerable: !0,
            get: function () {
               return ht.Browser
            }
         }), Object.defineProperty(e, "asPlainObject", {
            enumerable: !0,
            get: function () {
               return ht.asPlainObject
            }
         })
      })),
      dt = t((function (t) {
         t.exports = pt
      })),
      bt = t((function (t, r) {
         "use strict";

         function n() {
            var t = new RegExp(l + "=([^;]+)").exec(document.cookie);
            return t ? decodeURIComponent(t[1]).toLowerCase() : null
         }

         function i() {
            var t = new RegExp(h + "=([^;]+)").exec(document.cookie);
            return t ? t[1] : null
         }

         function o() {
            return window.ShopifyAnalytics && window.ShopifyAnalytics.lib && window.ShopifyAnalytics.lib.config && window.ShopifyAnalytics.lib.config.Trekkie && window.ShopifyAnalytics.lib.config.Trekkie.defaultAttributes && window.ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId ? ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId : null
         }

         function a(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8760,
               r = (new Date).getTime(),
               n = new Date(r + 60 * e * 60 * 1e3);
            document.cookie = l + "=" + t + "; expires=" + n.toGMTString() + "; path=/"
         }
         Object.defineProperty(r, "__esModule", {
            value: !0
         });
         var s, u, c = (s = e(regeneratorRuntime.mark((function t() {
               return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                     case 0:
                        if (!0 !== new dt.Browser({
                              userAgent: navigator.userAgent
                           }).isSafari) {
                           t.next = 3;
                           break
                        }
                        return t.abrupt("return");
                     case 3:
                        if (null === n()) {
                           t.next = 6;
                           break
                        }
                        return t.abrupt("return");
                     case 6:
                        return t.next = 8, f();
                     case 8:
                        !0 === t.sent ? a("true") : a("pending", 1);
                     case 10:
                     case "end":
                        return t.stop()
                  }
               }), t, this)
            }))), function () {
               return s.apply(this, arguments)
            }),
            f = (u = e(regeneratorRuntime.mark((function t() {
               var e, r, n, a, s, u;
               return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                     case 0:
                        return t.prev = 0, e = "https://" + window.ShopifyPay.apiHost + "/session?v=1", r = i(), n = o(), null !== r && null !== n && (e += "&token=" + r + "&shop_id=" + n), t.next = 7, fetch(e, {
                           credentials: "include"
                        });
                     case 7:
                        return a = t.sent, t.next = 10, a.json();
                     case 10:
                        return s = t.sent, u = s.eligible, t.abrupt("return", u);
                     case 15:
                        return t.prev = 15, t.t0 = t.catch(0), t.abrupt("return", !1);
                     case 18:
                     case "end":
                        return t.stop()
                  }
               }), t, this, [
                  [0, 15]
               ])
            }))), function () {
               return u.apply(this, arguments)
            });
         r.setRedirectState = a;
         var l = "shopify_pay_redirect",
            h = "_shopify_y";
         r.default = c
      }));
   t((function () {
      "use strict";
      (0, r(bt).default)()
   }))
}("undefined" != typeof global ? global : "undefined" != typeof window && window);