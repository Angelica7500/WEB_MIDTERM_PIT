var instafeedApp = (function instafeedLoad() {
   const appDomain = "instafeed.nfcube.com",
      appCdn = "cdn.nfcube.com",
      cssVer = "6.5.1";
   var Instafeed = function () {
      function a(a) {
         var b, c;
         for (b in this.options = {
               target: "insta-feed",
               forceUpdate: !1,
               picturesLoaded: 0,
               picturesNeeded: 0,
               sliderPage: 1,
               admin: window.location.hostname === appDomain
            }, a) c = a[b], this.options[b] = c
      }
      return a.prototype.run = function () {
         var a = document.getElementById(this.options.target);
         if (0 === a.clientWidth && 0 < parseInt(this.options.autoLayout)) return checkClientWidth(this, a), !1;
         if (0 < parseInt(this.options.autoLayout) ? (this.options.picturesNeeded = this.options.rows * getAutoColumns(a.clientWidth), isMobileDevice() && validateCharge(this.options.charge) && (this.options.picturesNeeded = this.options.rowsMobile * getAutoColumns(a.clientWidth))) : isMobileDevice() && validateCharge(this.options.charge) ? this.options.picturesNeeded = this.options.rowsMobile * this.options.columnsMobile : this.options.picturesNeeded = this.options.rows * this.options.columns, "" === this.options.accessToken && 4 === this.options.apiVersion && this.options.admin) return a.innerHTML = "<div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/placeholder.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/placeholder.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/placeholder.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/placeholder.gif' /></div></div>", a.innerHTML += "<div><em><b>Connect your Instagram account to see your feed</b></em></div>", this.options.error.call(this, "No connection"), !1;
         var b = "";
         this.options.admin && (b = "<br/><em>Hang on we are processing your feed \u2615</em>"), a.innerHTML = "<img src='//instafeed.nfcube.com/assets/img/loader.gif' style='position:relative;height:11px;width:16px;' alt='loading bar' />" + b;
         var c = this;
         const d = new XMLHttpRequest;
         return d.open("GET", this._buildUrl(), !0), d.onload = function () {
            c.parse(JSON.parse(d.responseText))
         }, d.onerror = function () {
            console.log("Network error")
         }, d.send(), !0
      }, a.prototype.parse = function (a) {
         var b, c, d, e, f, g, h, k, l, m, n, o, p, q, r, s, t, u, v, w;
         if (v = document.getElementById(this.options.target), "object" != typeof a) throw new Error("Invalid JSON response");
         if (v.innerHTML = "", 204 === parseInt(a.meta.code)) throw this.options.admin && (v.innerHTML = "\u26A0\uFE0F " + a.meta.error_message), new Error("Error from API: " + a.meta.error_message);
         if (200 !== a.meta.code) throw this.options.admin && (v.innerHTML = " \u26A0\uFE0F Your Instagram account is not properly connected: " + a.meta.error_message + "<br><br><b>Reconnect your Instagram account and confirm you provide permissions</b>"), new Error("Error from API: " + a.meta.error_message);
         if (null !== this.options.success && "function" == typeof this.options.success && this.options.success.call(this, a), "undefined" != typeof document && null !== document) {
            q = a.data, f = document.createDocumentFragment(), g = "", h = "", o = "", w = document.createElement("div");
            var x = parseInt(100 - this.options.space),
               y = 0;
            y = 0 < parseInt(this.options.autoLayout) ? parseFloat(100 / getAutoColumns(v.clientWidth)).toFixed(6) : isMobileDevice() && validateCharge(this.options.charge) ? parseFloat(100 / this.options.columnsMobile).toFixed(6) : parseFloat(100 / this.options.columns).toFixed(6);
            var z = "",
               A = "";
            validateCharge(this.options.charge) && 0 < parseInt(this.options.likes) && 4 !== parseInt(this.options.apiVersion) && (z = "<div class='likes'><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='white'></path></svg></span>{{likes}}<!--<span style='width: 10px;padding-right: 5px;padding-left: 5px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z' fill='white'></path></svg></span> {{comments}}--></div>", A = "<span><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='grey'></path></svg> {{likes}}</span> <!--<span>❞ {{comments}}</span>-->");
            var B = "<div style='width:" + x + "%;height:" + x + "%;' class='instafeed-overlay {{video}}'>" + z + "</div>",
               C = "<div class='instafeed-container' style='width:" + y + "%;padding-top:" + y + "%;'><img class='js-lazy-image' style='width:" + x + "%;height:" + x + "%;' src='//" + appDomain + "/assets/img/placeholder.gif' data-src='{{image}}' alt='{{captionAlt}} on Instagram' />" + B + "</div>",
               D = "",
               E = "";
            for (1 === parseInt(this.options.openIg) ? C = "<a href='{{link}}' target='_blank' rel='noopener'>" + C + "</a>" : 2 === parseInt(this.options.openIg) ? this.options.admin ? C = "<a href='" + this.options.shopOrigin + "/collections/all' target='_blank' rel='noopener'>" + C + "</a>" : C = "<a href='//" + window.location.hostname + "/collections/all'>" + C + "</a>" : 3 === parseInt(this.options.openIg) && (this.options.admin && (E = "<div class='products-tagging'><object><a href='#{{id}}-" + this.options.target + "' id='search' data-picture-id='{{fullId}}'><b><button class='btn primary'>Tag products</button></b></a></object></div><div class='tagging-message' id='tagging-{{fullId}}'></div>"), C = "<a href='#{{id}}-" + this.options.target + "'>" + C + "</a>", D = "<div class='instafeed-lightbox' id='{{id}}-" + this.options.target + "'><div class='lightbox-instagram' role='dialog' aria-labelledby='{{id}}-" + this.options.target + "' aria-modal='true'><div class='instafeed-post-image'>{{imageFullHtml}}</div><div class='description'><div class='instafeed-header'><div class='close-button'><a style='height:25px;width:25px;display:block!important;position:relative;background: transparent;' aria-label='close button' href='#_' id='close-button-url'></a></div><img src='//" + appDomain + "/assets/img/placeholder.gif' data-feed-id='" + this.options.target + "' class='profile-picture js-lazy-image' data-src='{{userPicture}}' alt='instagram profile picture' /><object class='name-section'><a class='fullname' href='https://www.instagram.com/{{username}}/' target='_blank' rel='noopener'><div class='fullname instafeed-text' data-feed-id='" + this.options.target + "'>@{{username}}</div></a></object></div><hr><div class='box-content'><div class='sub-header'><div class='post-engagement'>" + A + "</div><div class='arrows'><object><a href='#{{minusId}}-" + this.options.target + "'><img src='//" + appDomain + "/assets/img/placeholder.gif' alt='previous image' /></a></object><object><a href='#{{plusId}}-" + this.options.target + "'><img src='//" + appDomain + "/assets/img/placeholder.gif' alt='next image' /></a></object></div></div>" + E + " {{taggedProduct}}<div class='instafeed-caption'>{{caption}}</div></div><div class='post-date'><span style='padding-left:8px;'>{{date}}</span> \u2022 <object><a href='{{link}}' target='_blank' rel='noopener' class='follow'>View on Instagram</a></object></div></div></div></div>"), k = 0, s = q.length; k < s; k++) {
               l = q[k];
               var F = "",
                  G = l.user.followers;
               if (m = l.images.standard_resolution, "object" != typeof m) throw e = "No image found for resolution: standard_resolution.", new Error(e);
               if (l.hasOwnProperty("tagged_products") && 0 < l.tagged_products.length && validateCharge(this.options.charge)) {
                  var H = this.options.admin,
                     I = this.options.shopOrigin,
                     J = this.options.target;
                  l.tagged_products.forEach(function (a) {
                     H ? (taggedProductUrl = "<object class='product-title'><a href='https://" + I + "/products/" + a.handle + "' target='_blank' rel='noopener'>" + a.title + "</a><a href='#{{id}}-" + J + "' id='delete-product' data-picture-id='{{fullId}}' data-tagging-id='" + a.id + "'><div class='tagged-buy-button'>Delete</div></a></object>", productImageUrl = "<object><a href='https://" + I + "/products/" + a.handle + "' target='_blank' rel='noopener'><img class='js-lazy-image' src='https://" + appDomain + "/assets/img/placeholder.gif' data-src='" + a.image + "' alt='product image' /></a></object>") : !H && (taggedProductUrl = "<object class='product-title'><a href='//" + window.location.hostname + "/products/" + a.handle + "'>" + a.title + "</a><a href='//" + window.location.hostname + "/products/" + a.handle + "'><button class='tagged-buy-button' tabindex='-1'>Shop Now</button></a></object>", productImageUrl = "<object><a href='//" + window.location.hostname + "/products/" + a.handle + "'><img class='js-lazy-image' src='https://" + appDomain + "/assets/img/placeholder.gif' data-src='" + a.image + "' alt='product image' /></a></object>"), F += "<div class='tagged-products' id='{{fullId}}-" + a.id + "'><div class='tagged-products-image'>" + productImageUrl + "</div><div class='tagged-products-buttons'>" + taggedProductUrl + "</div></div>"
                  })
               }
               var K = "";
               "video" === l.type && l.hasOwnProperty("videos") ? (K = "instafeed-video", imageFullHtml = "<video controls playsinline autoplay muted id=\"video-{{id}}-instafeed\" preload=\"none\" src=\"" + l.videos.standard_resolution.url + "\"</video>") : imageFullHtml = "<a href='#_' tabindex='-1'><img class='js-lazy-image' src='//instafeed.nfcube.com/assets/img/placeholder.gif' data-src='" + l.images.standard_resolution.url + "' alt='{{captionAlt}}'></a>", p = m.url, this.options.picturesLoaded++;
               var L = 1 === this.options.picturesLoaded ? this.options.picturesNeeded : this.options.picturesLoaded - 1,
                  M = this.options.picturesLoaded === this.options.picturesNeeded ? 1 : this.options.picturesLoaded + 1;
               if (n = this._makeTemplate(C, {
                     model: l,
                     id: this.options.picturesLoaded,
                     fullId: l.id,
                     minusId: L,
                     plusId: M,
                     link: l.link,
                     image: p,
                     video: K,
                     slider: this.options.slider ? "display:none;" : "",
                     username: l.user.username,
                     fullName: l.user.full_name,
                     userPicture: 5 === this.options.apiVersion ? l.user.profile_picture : "https://instafeed.nfcube.com/assets/img/logo-instagram-transparent.png",
                     imageFullHtml: imageFullHtml,
                     taggedProduct: F,
                     date: timeConverter(l.created_time),
                     caption: escapeHtml(this._getObjectProperty(l, "caption.text")),
                     captionAlt: escapeHtml(this._getObjectProperty(l, "caption.text").substring(0, 100)),
                     likes: shortenLargeNumber(l.likes.count, 1),
                     comments: shortenLargeNumber(l.comments.count, 1),
                     location: this._getObjectProperty(l, "location.name")
                  }), o = this._makeTemplate(D, {
                     model: l,
                     id: this.options.picturesLoaded,
                     fullId: l.id,
                     minusId: L,
                     plusId: M,
                     link: l.link,
                     image: p,
                     video: K,
                     slider: this.options.slider ? "display:none;" : "",
                     username: l.user.username,
                     fullName: l.user.full_name,
                     userPicture: 5 === this.options.apiVersion ? l.user.profile_picture : "https://instafeed.nfcube.com/assets/img/logo-instagram-transparent.png",
                     imageFullHtml: imageFullHtml,
                     taggedProduct: F,
                     date: timeConverter(l.created_time),
                     caption: escapeHtml(this._getObjectProperty(l, "caption.text")),
                     captionAlt: escapeHtml(this._getObjectProperty(l, "caption.text").substring(0, 100)),
                     likes: shortenLargeNumber(l.likes.count, 1),
                     comments: shortenLargeNumber(l.comments.count, 1),
                     location: this._getObjectProperty(l, "location.name")
                  }), 0 < this.options.slider) {
                  var N = 0;
                  N = 0 < parseInt(this.options.autoLayout) ? getAutoColumns(v.clientWidth) : isMobileDevice() && validateCharge(this.options.charge) ? this.options.columnsMobile : this.options.columns;
                  var O = Math.ceil(this.options.picturesLoaded / N);
                  let a = "";
                  1 === this.options.picturesLoaded && (a = "<div style='position:relative;'>"), n = a + "<span class=\"slide-page\" data-slide-page=\"" + O + "\" >" + n + "</span>"
               }
               if (g += n, h += o, this.options.picturesLoaded >= this.options.picturesNeeded || a.data.length === this.options.picturesLoaded) {
                  0 < this.options.slider && a.data.length > N && (g += "<a href=\"#\" aria-label=\"Scroll Instagram feed to the left\" role=\"link\" class=\"slider-arrow\" onclick=\"instafeedSlide(-1);return false;\" style=\"left:5px;\">❮</a>", g += "<a href=\"#\" aria-label=\"Scroll Instagram feed to the right\" role=\"link\" alt=\"instafeed right arrow\" class=\"slider-arrow\" onclick=\"instafeedSlide(1);return false;\" style=\"right:5px;\">❯</a>", g += "</div>"), g += h;
                  break
               }
               v.addEventListener("swiped-left", function () {
                  instafeedSlide(1)
               }), v.addEventListener("swiped-right", function () {
                  instafeedSlide(-1)
               })
            }
            for (w.innerHTML = g, d = [], c = 0, b = w.childNodes.length; c < b;) d.push(w.childNodes[c]), c += 1;
            for (r = 0, t = d.length; r < t; r++) u = d[r], f.appendChild(u);
            v.innerHTML = "";
            var P = "";
            if (validateCharge(this.options.charge) && 5 === this.options.apiVersion && 0 < parseInt(this.options.showFollowers) && (P = "<h3>" + shortenLargeNumber(G) + " followers"), 0 < this.options.title.length) {
               var Q = document.createElement("h2");
               Q.innerHTML = this.options.title + P, v.insertBefore(Q, v.firstChild)
            }
            v.appendChild(f)
         }
         return lazyLoading(), 0 < this.options.slider && instafeedSlide(0), !0
      }, a.prototype._buildUrl = function () {
         var a, b;
         return b = this.options.forceUpdate ? 1 : 0, 4 === this.options.apiVersion ? a = "https://instafeed.nfcube.com/feed/v4?charge=" + this.options.charge + "&fu=" + b + "&limit=" + this.options.picturesNeeded + "&account=" + this.options.shopOrigin + "&fid=" + this.options.feedId + "&hash=" + this.options.hash : 5 === this.options.apiVersion && (a = "https://instafeed.nfcube.com/feed/v5?charge=" + this.options.charge + "&fu=" + b + "&limit=" + this.options.picturesNeeded + "&account=" + this.options.shopOrigin + "&fid=" + this.options.feedId + "&hash=" + this.options.hash), a
      }, a.prototype._makeTemplate = function (a, b) {
         var c, d, e, f, g;
         for (d = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, c = a; d.test(c);) f = c.match(d)[1], g = null === (e = this._getObjectProperty(b, f)) ? "" : e, c = c.replace(d, function () {
            return "" + g
         });
         return c
      }, a.prototype._getObjectProperty = function (a, b) {
         var c, d;
         for (b = b.replace(/\[(\w+)\]/g, ".$1"), d = b.split("."); d.length;)
            if (c = d.shift(), null !== a && c in a) a = a[c];
            else return null;
         return a
      }, a
   }();

   function validateCharge(a) {
      return !!(0 < parseInt(a))
   }

   function getAutoColumns(a) {
      if (480 > a) return 2;
      return 768 > a ? 3 : 1024 > a ? 4 : 1200 >= a ? 5 : 1200 < a ? 6 : void 0
   }

   function escapeHtml(a) {
      return a && (a = a.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, """).replace(/'/g, "'")), a
   }

   function shortenLargeNumber(a, b) {
      for (var c, d = ["k", "M", "G", "T", "P", "E", "Z", "Y"], e = d.length - 1; 0 <= e; e--)
         if (c = Math.pow(1e3, e + 1), a <= -c || a >= c) return +(a / c).toFixed(b) + d[e];
      return a
   }

   function timeConverter(b) {
      var c = new Date(1e3 * b),
         a = c.toLocaleDateString(navigator.language, {
            month: "long",
            day: "numeric"
         });
      return a
   }

   function isMobileDevice() {
      return window.matchMedia("only screen and (max-width: 760px)").matches
   }

   function checkClientWidth(a, b) {
      0 === b.clientWidth ? setTimeout(function () {
         checkClientWidth(a, b)
      }, 100) : a.run()
   }

   function lazyLoading() {
      function a(a) {
         return new Promise((b, c) => {
            const d = new Image;
            d.src = a, d.onload = b, d.onerror = c
         })
      }

      function b(b) {
         const c = b.dataset.src;
         return c.includes("https://") ? a(c).then(() => {
            d(b, c)
         }).catch(a => {
            console.log(a)
         }) : void 0
      }

      function c(a) {
         0 === g && f.disconnect();
         for (let c, d = 0; d < a.length; d++) c = a[d], 0 < c.intersectionRatio && (g--, f.unobserve(c.target), b(c.target))
      }

      function d(a, b) {
         a.classList.add("js-lazy-image--handled"), a.src = b
      }
      const e = document.querySelectorAll(".js-lazy-image");
      let f, g = e.length;
      if (!("IntersectionObserver" in window))(function (a) {
         for (let c, d = 0; d < a.length; d++) c = a[d], b(c)
      })(e);
      else {
         f = new IntersectionObserver(c, {
            rootMargin: "100px 0px",
            threshold: .01
         });
         for (let a, b = 0; b < e.length; b++)(a = e[b], !a.classList.contains("js-lazy-image--handled")) && f.observe(a)
      }
   }(function (a, b) {
      return "function" == typeof define && define.amd ? define([], b) : "object" == typeof module && module.exports ? (module.exports = b(), module.exports) : (a.Instafeed = b(), a.Instafeed)
   })(this, function () {
      return Instafeed
   }),
   function () {
      if (null !== document.currentScript && !document.currentScript.src.includes(appCdn) && !document.currentScript.src.includes(appDomain)) return !1;
      var a = document.createElement("link");
      a.href = "https://instafeed.nfcube.com/cdn/instafeed-" + cssVer + ".css", a.type = "text/css", a.rel = "stylesheet", a.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(a)
   }(),
   function () {
      function a() {
         var a = location.hash.split("!").pop().replace("/", "");
         if (b = document.getElementById("video-" + d.substring(d.lastIndexOf("#") + 1, d.lastIndexOf("-insta-feed")) + "-instafeed"), c = document.getElementById("video-" + a.substring(a.lastIndexOf("#") + 1, a.lastIndexOf("-insta-feed")) + "-instafeed"), b && (b.pause(), b.onplay = function () {
               "#_" === a && b.pause()
            }), d = a, "#_" === a || 0 === a.length) document.body.style.overflowY = "visible", f && (!0 === e && (f.style.webkitTransform = "translate3d(0, 0, 0)"), f.style.overflowY = "visible");
         else if (a.includes("-feed")) {
            function b(a) {
               let b = "Tab" === a.key || 9 === a.keyCode;
               b && (a.shiftKey ? document.activeElement === g && (i.focus(), a.preventDefault()) : document.activeElement === i && (g.focus(), a.preventDefault()))
            }
            const d = document.querySelector("[id='" + a.substring(1) + "']"),
               g = d.querySelectorAll("#close-button-url, .follow")[0],
               h = d.querySelectorAll("#close-button-url, .follow"),
               i = h[h.length - 1];
            if (document.removeEventListener("keydown", b, !1), document.addEventListener("keydown", b, !1), c && c.play(), f) {
               const a = getComputedStyle(f);
               "none" !== a.webkitTransform && (f.style.webkitTransform = "initial", e = !0, document.getElementById("insta-feed").scrollIntoView()), f.style.overflowY = "hidden"
            }
            document.body.style.overflowY = "hidden"
         }
      }
      var b, c, d = "",
         e = !1,
         f = document.getElementById("PageContainer");
      window.instafeedSlidePage = 1, window.instafeedSlide = function (a = 0) {
         instafeedSlidePage = parseInt(instafeedSlidePage) + parseInt(a);
         let b = document.body.querySelectorAll("#insta-feed");
         0 === parseInt(b.length) && (b = document.body.querySelectorAll(".instafeed-shopify")), b[0].style.padding = "0 20px 0 20px";
         var c = document.body.querySelectorAll(".slide-page"),
            d = 0;
         for (let b = 0; b < c.length; b++) {
            var e = parseInt(c[b].getAttribute("data-slide-page"));
            d < e && (d = e)
         }
         0 >= instafeedSlidePage && (instafeedSlidePage = d), instafeedSlidePage > d && (instafeedSlidePage = 1);
         let f = document.body.querySelectorAll("[data-slide-page=\"" + instafeedSlidePage + "\"]");
         c.forEach(a => {
            a.style.display = "none"
         }), f.forEach(a => {
            a.style.display = "initial"
         })
      }, window.addEventListener("hashchange", a, !1), window.addEventListener("keydown", function (a) {
         const b = a.key;
         "Escape" === b && location.hash.includes("-feed") && (window.location.hash = "#_")
      }), ! function (b, c) {
         "use strict";

         function f(b, d, e) {
            for (; b && b !== c.documentElement;) {
               var a = b.getAttribute(d);
               if (a) return a;
               b = b.parentNode
            }
            return e
         }
         "function" != typeof b.CustomEvent && (b.CustomEvent = function (b, d) {
            d = d || {
               bubbles: !1,
               cancelable: !1,
               detail: void 0
            };
            var e = c.createEvent("CustomEvent");
            return e.initCustomEvent(b, d.bubbles, d.cancelable, d.detail), e
         }, b.CustomEvent.prototype = b.Event.prototype), c.addEventListener("touchstart", function (a) {
            "true" === a.target.getAttribute("data-swipe-ignore") || (m = a.target, l = Date.now(), g = a.touches[0].clientX, h = a.touches[0].clientY, j = 0, k = 0)
         }, !1), c.addEventListener("touchmove", function (a) {
            if (g && h) {
               var b = a.touches[0].clientX,
                  c = a.touches[0].clientY;
               j = g - b, k = h - c
            }
         }, !1), c.addEventListener("touchend", function (a) {
            if (m === a.target) {
               var i = parseInt(f(m, "data-swipe-threshold", "20"), 10),
                  e = parseInt(f(m, "data-swipe-timeout", "500"), 10),
                  n = Date.now() - l,
                  c = "",
                  o = a.changedTouches || a.touches || [];
               if (Math.abs(j) > Math.abs(k) ? Math.abs(j) > i && n < e && (c = 0 < j ? "swiped-left" : "swiped-right") : Math.abs(k) > i && n < e && (c = 0 < k ? "swiped-up" : "swiped-down"), "" != c) {
                  var p = {
                     dir: c.replace(/swiped-/, ""),
                     xStart: parseInt(g, 10),
                     xEnd: parseInt((o[0] || {}).clientX || -1, 10),
                     yStart: parseInt(h, 10),
                     yEnd: parseInt((o[0] || {}).clientY || -1, 10)
                  };
                  m.dispatchEvent(new CustomEvent("swiped", {
                     bubbles: !0,
                     cancelable: !0,
                     detail: p
                  })), m.dispatchEvent(new CustomEvent(c, {
                     bubbles: !0,
                     cancelable: !0,
                     detail: p
                  }))
               }
               g = null, h = null, l = null
            }
         }, !1);
         var g = null,
            h = null,
            j = null,
            k = null,
            l = null,
            m = null
      }(window, document)
   }();
   if (document.getElementById('insta-feed') !== null) {
      var feed = new Instafeed({
         account: '',
         hash: 'c6e6de117e1e3cc582927f1f340ff066',
         apiVersion: 4,
         shopOrigin: 'nanor-collection-cad.myshopify.com',
         title: 'Follow us @nanorcollection',
         openIg: 3,
         space: 5,
         likes: 1,
         showFollowers: 0,
         slider: 0,
         filter: '',
         public: 0,
         columns: 5,
         columnsMobile: 5,
         rows: 2,
         rowsMobile: 2,
         autoLayout: 0,
         feedId: 0,
         charge: '0'
      });
      feed.run();
   }
   return instafeedLoad;
})();
document.addEventListener('shopify:section:load', () => {
   instafeedApp()
});