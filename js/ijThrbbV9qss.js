function hextom_fsb() {
   var C, M, L, P, t, B, o, i, n, s, R, N, e, a, F = "//fsb.hextom.com/",
      O = "https://cdn.hextom.com/",
      E = !1,
      H = !1,
      d = !0,
      K = !1,
      c = !1,
      I = ["CLP", "HRK", "SEK", "ISK", "NOK", "CZK", "DKK", "EUR", "RON", "TRY"],
      Z = {
         DZD: "DA",
         NAD: "N$",
         GHS: "GH¢",
         EGP: "E£",
         BGN: "лв",
         PAB: "B/.",
         PHP: "₱",
         BOB: "$b",
         DKK: "kr",
         BWP: "P",
         LBP: "£",
         TZS: "TZS",
         VND: "₫",
         AOA: "Kz",
         KHR: "៛",
         QAR: "﷼",
         KYD: "$",
         LYD: "LYD",
         UAH: "₴",
         JOD: "JOD",
         AWG: "ƒ",
         SAR: "﷼",
         HKD: "HK$",
         CHF: "CHF",
         GIP: "£",
         CDF: "CDF",
         BYN: "Br",
         MRO: "MRO",
         HRK: "kn",
         DJF: "DJF",
         THB: "฿",
         XAF: "XAF",
         BND: "$",
         VUV: "VUV",
         UYU: "$U",
         NIO: "C$",
         LAK: "₭",
         SYP: "£",
         MAD: "Dh",
         MZN: "MT",
         SCR: "₨",
         ZAR: "R",
         NPR: "₨",
         NGN: "₦",
         CRC: "₡",
         AED: "Dhs.",
         GBP: "£",
         MWK: "MWK",
         LKR: "₨",
         PKR: "₨",
         HUF: "Ft",
         BMD: "$",
         LSL: "LSL",
         MNT: "₮",
         AMD: "AMD",
         UGX: "Ush",
         JMD: "J$",
         GEL: "GEL",
         SHP: "£",
         AFN: "BS؋",
         SBD: "$",
         KPW: "₩",
         TRY: "TRY",
         BDT: "Tk",
         YER: "﷼",
         CNY: "¥",
         HTG: "G",
         SLL: "Le",
         MGA: "Ar",
         ANG: "ƒ",
         LRD: "$",
         XCD: "EC$",
         NOK: "kr",
         MOP: "MOP",
         INR: "Rs.",
         MXN: "$",
         CZK: "Kč",
         TJS: "TJS",
         TWD: "NT$",
         BTN: "Nu",
         COP: "$",
         MYR: "RM",
         TMT: "TMT",
         MUR: "₨",
         IDR: "Rp",
         HNL: "L",
         ETB: "Br",
         FJD: "FJ$",
         ISK: "kr",
         PEN: "S/.",
         BZD: "BZ$",
         ILS: "₪",
         DOP: "RD$",
         GGP: "GGP",
         MDL: "MDL",
         BSD: "$",
         SEK: "kr",
         MVR: "Rf",
         AUD: "$",
         SRD: "$",
         CUP: "₱",
         BBD: "$",
         KMF: "KMF",
         KRW: "₩",
         GMD: "D",
         VEF: "Bs",
         IMP: "IMP",
         CUC: "$",
         CLP: "$",
         ZMW: "ZK",
         EUR: "€",
         ALL: "Lek",
         RWF: "RWF",
         KZT: "лв",
         RUB: "руб",
         TTD: "TT$",
         RON: "lei",
         OMR: "﷼",
         BRL: "R$",
         MMK: "K",
         PLN: "zł",
         PYG: "Gs",
         KES: "Khs",
         SVC: "$",
         MKD: "ден",
         AZN: "ман",
         TOP: "T$",
         JEP: "JEP",
         GNF: "GNF",
         WST: "WS$",
         IQD: "IQD",
         ERN: "£",
         BAM: "KM",
         CAD: "$",
         CVE: "CVE",
         KWD: "KWD",
         BIF: "BIF",
         PGK: "K",
         SOS: "S",
         SGD: "$",
         UZS: "лв",
         STD: "Db",
         IRR: "﷼",
         XPF: "XPF",
         XOF: "XOF",
         TND: "TND",
         GYD: "$",
         NZD: "$",
         FKP: "£",
         USD: "$",
         KGS: "лв",
         ARS: "$",
         SZL: "SZL",
         GTQ: "Q",
         RSD: "Дин.",
         BHD: "BHD",
         JPY: "¥",
         SDG: "SDG"
      };

   function r() {
      var e, a;
      q().includes("myshopify.com") && (window.fsb_already_run = "yes", L = -1, B = !(P = []), i = "", n = !(o = "Helvetica,Verdana,Courier,Times New Roman,Georgia,Brush Script MT,Serif"), s = M = C = 0, function () {
         var e = window.location.hostname,
            a = window.location.pathname; {
            if (-1 !== e.indexOf("checkout.shopify.com")) return 1;
            if (-1 !== a.indexOf("checkout") && -1 !== a.indexOf("thank_you")) return 1
         }
      }() || (jQuery("head").append("<style>@keyframes ht_image_fit_slider{from {background-position: center top;}to {background-position: center bottom;}}</style>"), e = window.location.pathname, a = z("fsb_previous_pathname"), G("fsb_previous_pathname", window.location.pathname), e == a ? (-1 === a.indexOf("/cart") && $("fsb_close_clicked"), p()) : (e = function (e) {
         try {
            return sessionStorage.getItem(e)
         } catch (e) {
            return null
         }
      }("fsb_payload"), a = {}, e && (a = JSON.parse(e)) && "yes" === a.shop_active ? h(a) : !(a = window.hextom_fsb_config) || a.bars.some(function (e) {
         return "" !== e.countries || "" !== e.exclude_countries
      }) || a.bars.some(function (e) {
         return e.auto_currency
      }) ? p() : "yes" === a.shop_active && h(a))))
   }

   function p() {
      jQuery.ajax({
         url: F + "fsb_get_bars?shop=" + q(),
         method: "GET",
         dataType: "json",
         success: function (e) {
            g("fsb_payload", JSON.stringify(e)), "yes" == e.shop_active && (P = e.bars, t = e.theme, B = e.record, _(), l(), v())
         }
      })
   }

   function h(e) {
      P = e.bars, t = e.theme, B = e.record, _(), l(), v()
   }

   function l() {
      {
         const a = XMLHttpRequest.prototype.open;
         XMLHttpRequest.prototype.open = function () {
            this.addEventListener("load", e => {
               var a, e = e["currentTarget"],
                  {
                     _url: e,
                     _method: r
                  } = e;
               "POST" === r && function (a, r) {
                  if (0 === r.length) return;
                  for (let e = 0; e < r.length; e += 1)
                     if (a.includes(r[e])) return 1;
                  return
               }(e, ["/cart/change.js", "/cart/update.js", "/cart/add.js"]) && (_(), Shopify && Shopify.theme && (t && t.is_xhr || (t.is_xhr = !0, null != (r = q()) && ("number" == typeof (e = Shopify.theme.id) && (e = e.toString()), a = F + "fsb_save_theme", r = "domain=" + r + "&theme_id=" + e + "&is_xhr=true", jQuery.ajax({
                  method: "GET",
                  url: a + "?" + r,
                  dataType: "json",
                  success: function (e) {},
                  error: function (e) {
                     throw new Error(e)
                  }
               })))))
            }), a.apply(this, arguments)
         }
      } ["product:added", "booster:cart:b*add"].forEach(function (e) {
         document.addEventListener(e, function (e) {
            _()
         })
      });
      var e = Array.from(document.getElementsByTagName("form")).filter(function (e) {
         return !!e.action.includes && (e.action.includes("cart") || e.action.includes("checkout"))
      });
      e && e.length && e.forEach(function (e) {
         e.addEventListener("submit", function () {
            setTimeout(function () {
               _()
            }, 300), setTimeout(function () {
               _()
            }, 900), setTimeout(function () {
               _()
            }, 1200)
         }), e.addEventListener("change", function () {
            setTimeout(function () {
               _()
            }, 800), setTimeout(function () {
               _()
            }, 1200)
         })
      });
      ["#CartDrawer", "#CartPageForm", ".payment-buttons", "#CartPopup", ".Product__InfoWrapper .ProductMeta + .ProductForm", "#sidebar-cart", "body.prestige--v4.template-cart .PageContent", "product-form.product-form", "cart-items #main-cart-items .js-contents", ".hc-cart-contoiner .hc-cart-items", ".grid-product__actions .hc-quick-add", 'div[id^="QuickShopModal"] div[id^="QuickShopHolder"]', "#QuickAddModal #QuickAddHolder", "#HeaderCart", ".grid-product__actions .text-link.quick-add-btn.js-quick-add-btn[data-id]", ".grid-item.grid-product .grid-item__content .text-link.quick-add-btn.js-quick-add-btn[data-id]", ".quick-add-btn", '[data-popup="product-modal"] .product-modal__content[data-product-modal-content]', ".right-drawer-vue", "#content .product-grid-product-template .product-details", "#quick-modal.modal", '#collection #collection-products .product .product-details .button-common form[id^="add-item-form-"]', '.recently-viewed .collection-products .product .product-details .button-common form[id^="add-item-form-"]', "#cart-table .form form#cart .container .twelve.clearfix", 'body[class^="warehouse--"] #shopify-section-cart-template section[data-section-id="cart-template"][data-section-type="cart"]', 'body[class^="warehouse--"] form#mini-cart', 'body[class^="warehouse--"] section[data-section-type="cart"]', 'modal-popup[cart-target="[data-main-cart]"]', ".cart-drawer[data-cart-drawer]", ".modal__window[data-modal-window]", 'button[type="submit"][data-aid="product-form-submit-button"]', 'div[data-armada-selector="cart-main-inner"] cart-line-items', 'armada-modal[data-modal-id^="quick-view--"] [data-armada-selector="modal-content-wrapper"]', 'div[data-name="payment-buttons"] div[data-name="product-submit-wrapper"] button[data-name="button-add"]', ".product__form-buttons.js-prod-form-submit #addToCart", ".ajax-cart__form-wrapper", "#quickview-form", "button.single_add_to_cart_button", "#nt_cart_canvas .mini_cart_wrap .mini_cart_content", ".product-inner .product-image div.hover_button", '.t4s-product-form__buttons button[type="submit"][name="add"][data-atc-form].t4s-product-form__submit.t4s-btn', "#drawer-modal .flyout", ".product-form .product-single__cart-submit-wrapper", ".product__info .product__form div[data-product-form-container] form[data-product-form] .product__form-block .product__form-buttons", ".page-wrap #shopify-section-header .cart-drawer .cart-wrapper.container[data-cart-container]", ".upsell-cart", 'off-canvas-root.off-canvas--viewport > transition-root.off-canvas--right-sidebar > .off-canvas--container[data-view="cart"] > cart-root.cart--root[data-section-id]', 'product-grid-root.featured-collection--products > .product--root a > .product--image-wrapper > .product--quick-add[data-off-canvas--view="cart"]', ".rebuy-cart", "#cartSlideoutWrapper", ".shopify-product-form .form-actions", ".product__submit__buttons", ".cart__drawer .drawer__body", ".shopify-product-form", ".template__cart__body", "#Cart-Drawer.side-panel.cart-drawer", "#Product-Drawer.side-panel.product-drawer", ".thb-cart-form", 'form.md\\:px-0[method="post"]', "#shopify-section-cart-menu > div[x-data] > .cart__mini-wrapper > .cart__main", "#quickbuy__modal", ".minicart__button .minicart__holder.minicart--sidebar > div[data-product-list]", "#cart", '.main-product__block.main-product__block-buy_buttons button.add-to-cart[type="submit"]', "#cart-drawer-container", "cart-drawer", ".product__add-button.add.AddtoCart.js-ajax-submit", "add_to_cart.global-button.global-button--secondary.ajax-submit", "ss-icon.product-minus.js-change-quantity", "ss-icon.product-plus.js-change-quantity", ".cart-list", ".cart-form.flexible-layout.flexible-layout--main-cart.fully-spaced-row--medium", ".quick-add__submit.button.button--full-width.button--secondary", ".quick-add-modal__content-info", "#cart-drawer", "quick-add-product"].forEach(function (e) {
         e = document.querySelectorAll(e);
         0 < e.length && e.forEach(function (e) {
            e.addEventListener("click", function () {
               setTimeout(function () {
                  _()
               }, 1200)
            })
         })
      })
   }

   function _() {
      jQuery.ajax({
         dataType: "json",
         url: "/cart.json",
         success: function (e, a) {
            var r = (N = e).total_price,
               e = u(e);
            if ((d || C !== r || M !== e) && (d = !1, C = r, M = e, "yes" !== z("fsb_close_clicked") && !H)) {
               if (!n)
                  for (var t = 0; t < P.length; t++) P[t].score = b(P[t]), P[t].score > s && (s = P[t].score);
               if (0 != s) {
                  for (t = 0; t < P.length; t++)
                     if (!(b(P[t]) < s)) {
                        L = t;
                        break
                     } c = !0, G(P[L].bar_id + "fsb_incurred_fee_products", P[L].incurred_fee_products), G(P[L].bar_id + "fsb_excluded_products", P[L].excluded_products), G(P[L].bar_id + "fsb_target_products_type", P[L].target_products_type), M = u(N), ! function () {
                     {
                        var e, a;
                        "inherit" == P[L].font || -1 < o.indexOf(P[L].font) || -1 < i.indexOf(P[L].font) ? y() : (i += "," + P[L].font, e = document.createElement("link"), a = document.getElementsByTagName("head")[0], e.setAttribute("href", "https://fonts.googleapis.com/css?family=" + P[L].font.replace(/ /g, "+")), e.setAttribute("type", "text/css"), e.setAttribute("rel", "stylesheet"), e.onload = y, a.insertBefore(e, a.firstChild))
                     }
                  }()
               }
            }
         }
      })
   }

   function u(a) {
      let r = a.total_price,
         t = (K = !1, ""),
         o = "",
         i = "";
      if (c && (null != z(P[L].bar_id + "fsb_incurred_fee_products") && (t = z(P[L].bar_id + "fsb_incurred_fee_products").split(",")), null != z(P[L].bar_id + "fsb_excluded_products") && (o = z(P[L].bar_id + "fsb_excluded_products").split(",")), null != z(P[L].bar_id + "fsb_target_products_type") && (i = z(P[L].bar_id + "fsb_target_products_type")), 0 < a.items.length))
         for (let e = 0; e < a.items.length; e++) "" != t && t.includes(String(a.items[e].product_id)) ? K = !0 : ("" != o && o.includes(String(a.items[e].product_id)) || "require_shipping" === i && !1 === a.items[e].requires_shipping) && (r = r - a.items[e].original_line_price + a.items[e].total_discount);
      return r
   }

   function b(a) {
      var r = 1;
      if ("all" != a.target_device) {
         if ("desktop" == a.target_device && W()) return 0;
         if ("mobile" == a.target_device && !W()) return 0
      }
      if (a.schedule_enabled) {
         var e = Date.parse(a.start_on),
            t = Date.parse(a.end_on),
            o = Date.now();
         if (t < o) return 0;
         if (o < e) return 0;
         r += 1e3
      }
      if ("" != a.countries && (r += 100), "" != a.targeted_markets_region_codes && null != a.targeted_markets_region_codes && null != a.targeted_markets_region_codes) {
         let e = a.targeted_markets_region_codes.split(",");
         if (!e.includes(window.Shopify.country)) return 0;
         r += 20
      }
      if ("all" != a.display_page) {
         var i = window.location.pathname,
            n = window.location.href.toLowerCase();
         if ("home" == a.display_page) {
            if (void 0 === meta.page.pageType || "home" != meta.page.pageType) return 0;
            r += 20
         } else if ("product" == a.display_page) {
            if (void 0 === meta.page.pageType || "product" != meta.page.pageType) return 0;
            r += 20
         } else if ("/" == a.display_page.charAt(0)) {
            if (a.display_page != i) return 0;
            r += 20
         } else if (":" == a.display_page.charAt(0)) {
            for (var s = a.display_page.substring(1, a.display_page.length).split(","), d = !1, c = 0; c < s.length;) {
               if (-1 < n.indexOf(s[c].trim())) {
                  d = !0;
                  break
               }
               c += 1
            }
            if (!0 !== d) return 0;
            r += 20
         } else r += 10
      }
      if (a.exclude_page) {
         i = window.location.pathname, n = window.location.href.toLowerCase();
         if ("home" === a.exclude_page && void 0 !== meta.page.pageType && "home" === meta.page.pageType) return 0;
         if ("product" === a.exclude_page && void 0 !== meta.page.pageType && "product" === meta.page.pageType) return 0;
         if ("/" === a.exclude_page.charAt(0) && a.exclude_page === i) return 0;
         if (":" == a.exclude_page.charAt(0)) {
            for (s = a.exclude_page.substring(1, a.exclude_page.length).split(","), d = !1, c = 0; c < s.length;) {
               if (-1 < n.indexOf(s[c].trim())) {
                  d = !0;
                  break
               }
               c += 1
            }
            if (!0 === d) return 0
         }
      }
      if ("require_shipping" === a.target_products_type && "undefined" != typeof meta && "product" === meta.page.pageType) {
         if ("true" !== function () {
               var e = window.hextom_fsb_meta || {};
               if (!e.hasOwnProperty("p3")) return !1;
               e = e.p3 || [];
               return !(!e || 0 === e.length) && e[0].v1
            }()) return 0;
         r += 10
      }
      if ("tag" === a.selected_customers_type) {
         if (!(-1 < f().indexOf(a.selected_customers_tag))) return 0;
         r += 10
      }
      if ("spent" === a.selected_customers_type) {
         if (null == meta.page.customerId) return 0;
         var p = m();
         if (!(parseFloat(p) >= Math.round(100 * a.selected_customers_spent))) return 0;
         r += 10
      }
      if ("tag" === a.excluded_customers_type && -1 < f().indexOf(a.excluded_customers_tag)) return 0;
      if ("spent" === a.excluded_customers_type) {
         p = m();
         if (parseFloat(p) <= Math.round(100 * a.excluded_customers_spent)) return 0
      }
      return r
   }

   function f() {
      var e = window.hextom_fsb_meta || {};
      if (!e.hasOwnProperty("p2")) return [];
      e = e.p2.v2;
      if (!e) return [];
      var r = [];
      return e.forEach(function (e, a) {
         r[a] = e.split("").reverse().join("")
      }, r), r
   }

   function m() {
      var e = 0,
         a = window.hextom_fsb_meta || {};
      if (!a.hasOwnProperty("p2")) return e;
      a = a.p2.v3 || "0,0";
      return e = 7 * parseFloat(a.split(",")[0]) + parseFloat(a.split(",")[1])
   }

   function y() {
      var a, e = window.Shopify.currency ? window.Shopify.currency.rate : "1.0",
         r = window.Shopify.currency ? window.Shopify.currency.active : "USD",
         t = P[L].goal,
         o = P[L].goal_2,
         i = window.location.search,
         n = "currency=",
         s = i.toLocaleLowerCase().indexOf(n),
         n = s + n.length,
         d = void 0 === window.Shopify.locale ? null : window.Shopify.locale.toLowerCase(),
         s = (d = null !== d && -1 < P[L].locales.indexOf(d) ? (v = (null != P[L].translation[d].message_one && 0 < P[L].translation[d].message_one.trim().length && null != P[L].translation[d].message_one ? P[L].translation[d] : P[L]).message_one, w = (null != P[L].translation[d].message_two && 0 < P[L].translation[d].message_two.trim().length && null != P[L].translation[d].message_two ? P[L].translation[d] : P[L]).message_two, S = (null != P[L].translation[d].message_two_2 && 0 < P[L].translation[d].message_two_2.trim().length && null != P[L].translation[d].message_two_2 ? P[L].translation[d] : P[L]).message_two_2, x = (null != P[L].translation[d].message_three && 0 < P[L].translation[d].message_three.trim().length && null != P[L].translation[d].message_three ? P[L].translation[d] : P[L]).message_three, j = (null != P[L].translation[d].message_four && 0 < P[L].translation[d].message_four.trim().length && null != P[L].translation[d].message_four ? P[L].translation[d] : P[L]).message_four, Q = (null != P[L].translation[d].message_five && 0 < P[L].translation[d].message_five.trim().length && null != P[L].translation[d].message_five ? P[L].translation[d] : P[L]).message_five, (null != P[L].translation[d].message_six && 0 < P[L].translation[d].message_six.trim().length && null != P[L].translation[d].message_six ? P[L].translation[d] : P[L]).message_six) : (v = P[L].message_one, w = P[L].message_two, S = P[L].message_two_2, x = P[L].message_three, j = P[L].message_four, Q = P[L].message_five, P[L].message_six), -1 < s && (c = (c = i.substr(n, n + 3)).toUpperCase()), function () {
            for (var e = ["form#currency_form", "form.shopify-currency-form", 'form[action*="/localization"]', "input#CurrencySelector", "form.currency-selector__form", "li.account.currencies", ".nav__sub-wrap--currency", "form.currency-selector", ".switcher.switcher--native", ".ht-tms-dropdown"], a = 1; a < e.length; a++)
               if (document.querySelector(e[a])) return !0;
            return !1
         }()),
         i = P[L].auto_currency ? "1.0" !== e || s || c ? (k = C / 100, g = M / 100, t *= e, o *= e, Z[r]) : (k = C * P[L].currency_exchange_rate / 100, g = M * P[L].currency_exchange_rate / 100, t *= P[L].currency_exchange_rate, o *= P[L].currency_exchange_rate, P[L].currency_symbol) : (g = P[L].currency_code === r ? (k = C / 100, M / 100) : (k = C / e * P[L].currency_exchange_rate / 100, M / e * P[L].currency_exchange_rate / 100), P[L].currency_symbol),
         s = (n = "require_shipping" === P[L].target_products_type || P[L].excluded_products && 0 < P[L].excluded_products.length || P[L].incurred_fee_products && 0 < P[L].incurred_fee_products.length ? (a = t - g, o - g) : (a = t - k, o - k), t = t == parseInt(t, 10) ? parseInt(t, 10) : parseFloat(t).toFixed(2), o = o == parseInt(o, 10) ? parseInt(o, 10) : parseFloat(o).toFixed(2), a = a == parseInt(a, 10) ? parseInt(a, 10) : parseFloat(a).toFixed(2), n = n == parseInt(n, 10) ? parseInt(n, 10) : parseFloat(n).toFixed(2), "<span id='fsb_symbol' style='color:" + P[L].text_color_two + "'>" + i + "</span>"),
         c = "<span id='fsb_amount' style='color:" + P[L].text_color_two + "'>" + t + "</span>",
         r = "<span id='fsb_amount' style='color:" + P[L].text_color_two + "'>" + a + "</span>",
         e = "<span id='fsb_amount' style='color:" + P[L].text_color_two + "'>" + n + "</span>",
         i = (z("fsb_total_price_requires_shipping_" + P[L].bar_id) != g && ("require_shipping" === P[L].target_products_type || P[L].excluded_products && 0 < P[L].excluded_products.length || P[L].incurred_fee_products && 0 < P[L].incurred_fee_products.length) ? (G("fsb_total_price_requires_shipping_" + P[L].bar_id, g), $("fsb_message_one_" + P[L].bar_id), $("fsb_message_two_" + P[L].bar_id), $("fsb_message_two2_" + P[L].bar_id), $("fsb_message_three_" + P[L].bar_id)) : z("fsb_total_price_" + P[L].bar_id) != k && (G("fsb_total_price_" + P[L].bar_id, k), $("fsb_message_one_" + P[L].bar_id), $("fsb_message_two_" + P[L].bar_id), $("fsb_message_two2_" + P[L].bar_id), $("fsb_message_three_" + P[L].bar_id)), ""),
         n = !1,
         p = !1,
         h = !1;
      if (!K && "undefined" != typeof meta && "product" == meta.page.pageType) {
         let e = P[L].excluded_products.split(",");
         e.includes(String(meta.product.id)) ? h = !0 : (e = P[L].incurred_fee_products.split(",")).includes(String(meta.product.id)) && (p = !0)
      }
      if (1 == K)
         if (n = !0, P[L].incurred_fee_products_list_in_message) {
            let r = [];
            var l = P[L].incurred_fee_products.split(",");
            for (let a = 0; a < N.items.length; a++)
               for (let e = 0; e < l.length; e++) l[e] == N.items[a].product_id && r.push(N.items[a].title);
            i = d + " " + r.join(", ")
         } else i = d;
      else if (!p || "special" != P[L].incurred_message_type && "hidden" != P[L].incurred_message_type) {
         if (!h || "special" != P[L].excluded_message_type && "hidden" != P[L].excluded_message_type)
            if ("require_shipping" === P[L].target_products_type || P[L].excluded_products && 0 < P[L].excluded_products.length || P[L].incurred_fee_products && 0 < P[L].incurred_fee_products.length)
               if (0 === g) {
                  if ("yes" === z("fsb_message_one_" + P[L].bar_id)) return;
                  G("fsb_message_one_" + P[L].bar_id, "yes", P[L].interval_time + .1), i = v
               } else if (g < t) {
            if ("yes" === z("fsb_message_two_" + P[L].bar_id)) return;
            G("fsb_message_two_" + P[L].bar_id, "yes", P[L].interval_time + .1), i = w
         } else if (0 < o && t <= g && g < o) {
            if ("yes" === z("fsb_message_two2_" + P[L].bar_id)) return;
            G("fsb_message_two2_" + P[L].bar_id, "yes", P[L].interval_time + .1), i = S
         } else {
            if ("yes" === z("fsb_message_three_" + P[L].bar_id)) return;
            G("fsb_message_three_" + P[L].bar_id, "yes", P[L].interval_time + .1), B && 0 < t && "yes" != z("fsb_achieved_" + P[L].bar_id) && jQuery.ajax({
               url: F + "fsb_record_bar?shop=" + q() + "&bar_id=" + P[L].bar_id + "&event=achieve",
               method: "GET",
               dataType: "json",
               success: function (e) {
                  G("fsb_achieved_" + P[L].bar_id, "yes")
               }
            }), i = x
         } else if (0 === k) {
            if ("yes" === z("fsb_message_one_" + P[L].bar_id)) return;
            G("fsb_message_one_" + P[L].bar_id, "yes", P[L].interval_time + .1), i = v
         } else if (k < t) {
            if ("yes" === z("fsb_message_two_" + P[L].bar_id)) return;
            G("fsb_message_two_" + P[L].bar_id, "yes", P[L].interval_time + .1), i = w
         } else if (0 < o && t <= k && k < o) {
            if ("yes" === z("fsb_message_two2_" + P[L].bar_id)) return;
            G("fsb_message_two2_" + P[L].bar_id, "yes", P[L].interval_time + .1), i = S
         } else {
            if ("yes" === z("fsb_message_three_" + P[L].bar_id)) return;
            G("fsb_message_three_" + P[L].bar_id, "yes", P[L].interval_time + .1), B && 0 < t && "yes" != z("fsb_achieved_" + P[L].bar_id) && jQuery.ajax({
               url: F + "fsb_record_bar?shop=" + q() + "&bar_id=" + P[L].bar_id + "&event=achieve",
               method: "GET",
               dataType: "json",
               success: function (e) {
                  G("fsb_achieved_" + P[L].bar_id, "yes")
               }
            }), i = x
         } else if ("special" == P[L].excluded_message_type) i = j;
         else if ("hidden" == P[L].excluded_message_type) return
      } else if ("special" == P[L].incurred_message_type) i = Q;
      else if ("hidden" == P[L].incurred_message_type) return;
      "after" === P[L].currency_symbol_position && !1 === P[L].auto_currency ? -1 < i.indexOf("{{goal}}") ? i = i.replace(/({{currency_symbol}}|{{goal}})/g, function (e) {
         return "{{currency_symbol}}" === e ? "{{goal}}" : " {{currency_symbol}}"
      }) : -1 < i.indexOf("{{remainder}}") ? i = i.replace(/({{currency_symbol}}|{{remainder}})/g, function (e) {
         return "{{currency_symbol}}" === e ? "{{remainder}}" : " {{currency_symbol}}"
      }) : -1 < i.indexOf("{{remainder_2}}") && (i = i.replace(/({{currency_symbol}}|{{remainder_2}})/g, function (e) {
         return "{{currency_symbol}}" === e ? "{{remainder_2}}" : " {{currency_symbol}}"
      })) : "" != P[L].currency_symbol_position && !0 !== P[L].auto_currency || (-1 < I.indexOf(P[L].visitor_currency_code) && -1 < i.indexOf("{{goal}}") ? i = i.replace(/({{currency_symbol}}|{{goal}})/g, function (e) {
         return "{{currency_symbol}}" === e ? "{{goal}}" : " {{currency_symbol}}"
      }) : -1 < I.indexOf(P[L].visitor_currency_code) && -1 < i.indexOf("{{remainder}}") ? i = i.replace(/({{currency_symbol}}|{{remainder}})/g, function (e) {
         return "{{currency_symbol}}" === e ? "{{remainder}}" : " {{currency_symbol}}"
      }) : -1 < I.indexOf(P[L].visitor_currency_code) && -1 < i.indexOf("{{remainder_2}}") && (i = i.replace(/({{currency_symbol}}|{{remainder_2}})/g, function (e) {
         return "{{currency_symbol}}" === e ? "{{remainder_2}}" : " {{currency_symbol}}"
      })));
      i = (i = (i = (i = (i = (i = i.replace("{{currency_symbol}}", s)).replace("{{goal}}", c)).replace("{{remainder}}", r)).replace("{{remainder_2}}", e)).replace(/{{/g, "<span style='color:" + P[L].text_color_two + "'>")).replace(/}}/g, "</span>"), d = window.innerWidth || document.body.clientWidth;
      if (0 == jQuery("#fsb_container").length) {
         p = '<div id="fsb_container"></div>';
         if ("top_push_v1" === P[L].position) {
            var _ = ['.header-container.drawer__header-container .header-wrapper:not([data-section-id="header"]):not(.wrapper-fluid)', ".fadeout-overlay + #shopify-section-header", "#shopify-section-header.header-wrapper", ".site-header.is-moved-by-drawer", "#shopify-section-pxs-announcement-bar", "body[data-money-format][data-active-currency][data-predictive-search] #shopify-section-header.shopify-section.site-header__outer-wrapper.site-header__outer-wrapper--loaded", ".site-header__wrapper:not(.site-header__wrapper--with-menu):not([data-site-header-wrapper])", ".site-header.full--w", ".PageContainer #shopify-section-announcement", "nav.cbp-spmenu + .wrapper-container", "#header > #headerWrapper", "#PageContainer:not(.page-container)", ".header-wrapper.header-wrapper--sticky", 'div[data-section-type="header-section"] .header-wrapper.header-wrapper--overlay', ".page__container.page__container--secondary", "#shopify-section-static-header .header", ".off-canvas--viewport .off-canvas--main-content", "#shopify-section-announcement .announcement--root", ".header.sticky .relative", 'body[class^="kagami--"] .page__container', "body > #page", "#page-wrap-content .container + #content", "#shopify-section-side-nav + .page-container", "#pageheader.pageheader.nav-shift", ".bodywrap.cf #shopify-section-header + #content", ".header.mm-fixed-top", "#content_wrapper #header.mm-fixed-top ~ .header", ".has-vertical-header .is-beside-vertical-header", "#header-sticky-wrapper #header", '#shopify-section-header-classic div[data-enable_sticky="false"] #header', "#mobile-header-sticky-wrapper #mobile-header", "#shopify-section-header__top-bar", 'a[href="#main"] + #shopify-section-announcement-bar + #shopify-section-header.mount-header > main-header.header-holder', "#shopify-section-announcement-bar", "body > #shopify-section-announcement", ".header-container.drawer__header-container", "body > .dbtfy ~ #PageContainer.page-container > #shopify-section-announcement", ".body-cont #shopify-section-header > .cont-header.header-fixed-true", "#shopify-section-header", "#shopify-section-side-nav + .page-container", "body.boxed", 'body[class*="maxmin_"]', ".page-wrapper", "#content-holder #content", "#shopify-section-static-header + .page-body-content", ".header_wrap_icon_cart header.main_header.locked", "#header-ontop.header-ontop + #header.header", "body", '[data-section-id="header"]'];
            d < 500 && _.unshift(".page__container #header.header.header--absolute + #main.main"), d < 650 && _.unshift("#SiteContainer #MainContent.main-content"), d < 740 && _.unshift("body.shifter-enabled .shifter-page.is-moved-by-drawer > #content"), d < 798 && _.unshift("body.mobile_nav-fixed--true #header.mobile_nav-fixed--true", 'div[data-enable_sticky="false"] #mobile-header'), d < 1e3 && _.unshift(".bodywrap.cf #shopify-section-header"), 767 < d && _.unshift("#page-wrap #page-wrap-content");
            for (var u = 0; u < _.length; u++) {
               var b = jQuery(_[u]);
               if (b.length) break
            }
            b.prepend(p)
         } else if ("top_push_sticky_v1" === P[L].position) {
            var f = ['.header-container.drawer__header-container .header-wrapper:not([data-section-id="header"]):not(.wrapper):not(.wrapper-fluid)', ".fadeout-overlay + #shopify-section-header", "#shopify-section-header.header-wrapper", ".site-header.is-moved-by-drawer", ".site-header.full--w", 'div[data-section-type="header-section"] .header-wrapper.header-wrapper--sticky', 'div[data-section-type="header-section"] .header-wrapper.header-wrapper--overlay', "nav.cbp-spmenu + .wrapper-container", "#header-ontop.header-ontop + #header.header", ".header.container-fluid.perma-sticky", ".header-section.sticky-header .header-section--wrapper.overlay-header-wrapper", "body[data-new-gr-c-s-check-loaded][data-gr-ext-installed]", "#PageContainer div:not(.header-sticky-wrapper) > #HeaderWrapper", "#PageContainer:not(.drawer-page-content)", 'body[class^="trademark--"]', "header#top.header.header--fluid", "#shopify-section-static-header .header", ".off-canvas--viewport .off-canvas--main-content", "#shopify-section-announcement .announcement--root", ".header.sticky .relative", 'body[class^="kagami--"] .page__container', "body > #page", "#page-wrap", "#shopify-section-side-nav + .page-container", "#pageheader.pageheader.nav-shift", ".header.default-header.mm-fixed-top", "#main-body.slideout-panel", "#PageContainer.drawer-page-content:not(.page-container)", "body.fixed-header.fixed-header--all", "body.has-vertical-header.announcement-bar--hidden", "#header-sticky-wrapper #header", "#mobile-header-sticky-wrapper #mobile-header", ".shopify-section.shopify-section-group-header-group-classic.jsHeader.header-section > .is-relative > #header-sticky-wrapper.header-sticky-wrapper > header#header.sticky--enabled", "#shopify-section-sidebar + #content-holder", "store-header.header[sticky]", 'a[href="#main"] + #shopify-section-announcement-bar + #shopify-section-header.mount-header > main-header.header-holder', "#shopify-section-announcement-bar", "body > #shopify-section-announcement", "#shopify-section-header-top header-top-section.block", "#shopify-section-header:not(.d-none)", ".header_wrap_icon_cart header.main_header.locked", '.shopify-section.shopify-section-group-header-group.section-site-header > header.site-header[role="banner"][data-sticky-header]', "body"];
            d < 800 && f.unshift("#content_wrapper.mm-page.mm-slideout #shopify-section-header", ".mm-page.mm-slideout #content_wrapper #shopify-section-header"), d <= 740 && f.unshift("body.gridlock.shifter.shifter-enabled"), d < 798 && f.unshift('div[data-enable_sticky="false"] #mobile-header'), d < 992 && f.unshift("#site-content #shopify-section-header-mobile.header-mobile__placeholder");
            for (var m = 0; m < f.length; m++) {
               var y = jQuery(f[m]);
               if (y.length) break
            }
            y.prepend(p)
         } else jQuery("body").append(p)
      }
      var h = "",
         h = "top_push_v1" === P[L].position || "top_push_sticky_v1" === P[L].position ? !0 === P[L].entire_bar_clickable ? !0 === P[L].close_option ? '<div id="fsb_background" onclick="fsb_button_on_click_v1(event)" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative; cursor: pointer;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + i + '</div><div><a id="fsb_close" aria-label="Close" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); text-decoration: none; line-height:0px;" href="#" onclick="fsb_close_on_click_v1(event)"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg></a></div></div>' : '<div id="fsb_background" onclick="fsb_button_on_click_v1(event)" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative; cursor: pointer;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + i + "</div></div>" : !0 === P[L].close_option ? '<div id="fsb_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + i + '</div><div><a id="fsb_close" aria-label="Close" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); text-decoration: none; line-height:0px;" href="#" onclick="fsb_close_on_click_v1(event)"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg></a></div></div>' : '<div id="fsb_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + i + "</div></div>" : !0 === P[L].entire_bar_clickable ? !0 === P[L].close_option ? '<a href="javascript:fsb_button_on_click()"><div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + i + '</div><div><a id="fsb_close" aria-label="Close" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); text-decoration: none; line-height:0px;" href="javascript:fsb_close_on_click()"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg></a></div></div></a>' : '<a href="javascript:fsb_button_on_click()"><div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + i + "</div></div></a>" : !0 === P[L].close_option ? '<div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + i + '</div><div><a id="fsb_close" aria-label="Close" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); text-decoration: none; line-height:0px;" href="javascript:fsb_close_on_click()"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg></a></div></div>' : '<div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + i + "</div></div>",
         g = (0 < jQuery("#fsb_placeholder").length && jQuery("#fsb_placeholder").html(""), jQuery("#fsb_container").html(""), jQuery("#fsb_container").css("display", "block"), jQuery("#fsb_container").css("color", "inherit"), (0 < jQuery("#fsb_placeholder").length && ("inserted" === P[L].position || "inserted_sticky" === P[L].position) ? jQuery("#fsb_placeholder") : jQuery("#fsb_container")).html(h), 0 < window.innerWidth ? window.innerWidth : screen.width),
         v = parseFloat(P[L].font_size),
         w = parseFloat(P[L].bar_padding),
         k = ("all" == P[L].target_device && (g <= 736 && 14 < v ? (w = 14 * w / v, v = 14, 8 < w && (w = 8)) : 736 < g && g <= 770 && 16 < v && (w = 16 * w / v, v = 16, 10 < w && (w = 10))), P[L].background_color),
         o = "rgba(" + parseInt(k.slice(-6, -4), 16) + "," + parseInt(k.slice(-4, -2), 16) + "," + parseInt(k.slice(-2), 16) + "," + P[L].opacity + ")";
      if (jQuery("#fsb_bar").css("backgroundColor", o), jQuery("#fsb_bar").css("color", P[L].text_color_one), jQuery("#fsb_bar").css("fontSize", v + "px"), jQuery("#fsb_bar").css("lineHeight", 1.25 * v + "px"), jQuery("#fsb_bar").css("paddingTop", w + "px"), jQuery("#fsb_bar").css("paddingBottom", w + "px"), jQuery("#fsb_bar").css("fontFamily", P[L].font), jQuery("#fsb_close svg").css("fill", P[L].text_color_one), jQuery("#fsb_close svg").css("width", 1.5 * v), jQuery("#fsb_close svg").css("height", 1.5 * v), P[L].background_type ? "color" == P[L].background_type ? jQuery("#fsb_background").css("backgroundImage", "") : "gradient" == P[L].background_type ? P[L].gradient_color_3 && 0 < P[L].gradient_color_3.trim().length ? jQuery("#fsb_background").css("backgroundImage", "linear-gradient(" + P[L].gradient_degree + "deg, " + P[L].gradient_color_1 + ", " + P[L].gradient_color_2 + ", " + P[L].gradient_color_3 + ")") : jQuery("#fsb_background").css("backgroundImage", "linear-gradient(" + P[L].gradient_degree + "deg, " + P[L].gradient_color_1 + ", " + P[L].gradient_color_2 + ")") : "image_pattern" == P[L].background_type ? (jQuery("#fsb_background").css("backgroundImage", "url(" + O + P[L].background_pic + ")"), jQuery("#fsb_background").css("backgroundRepeat", "repeat")) : "image_fit" == P[L].background_type && (jQuery("#fsb_background").css("backgroundImage", "url(" + O + P[L].background_pic + ")"), jQuery("#fsb_background").css("backgroundRepeat", "no-repeat"), jQuery("#fsb_background").css("backgroundSize", "cover"), jQuery("#fsb_background").css("animationName", "ht_image_fit_slider"), jQuery("#fsb_background").css("animationDuration", P[L].background_moving_speed + "s"), jQuery("#fsb_background").css("animationIterationCount", "infinite"), jQuery("#fsb_background").css("animationDirection", "alternate"), jQuery("#fsb_background").css("animation-timing-function", "ease-in-out")) : P[L].background_pic && jQuery("#fsb_background").css("backgroundImage", "url(" + O + P[L].background_pic + ")"), jQuery("#fsb_symbol").css("fontFamily", P[L].font), jQuery("#fsb_amount").css("fontFamily", P[L].font), jQuery("#fsb_symbol").css("fontSize", v + "px"), jQuery("#fsb_amount").css("fontSize", v + "px"), 0 == jQuery("#fsb_custom_code").length && jQuery("body").append('<div id="fsb_custom_code"></div>'), jQuery("#fsb_custom_code").html(P[L].custom_code.replace("</script>", "<\/script>")), !0 === P[L].progress_bar_display) {
         let e;
         e = W() ? 100 == P[L].progress_bar_width_percentage ? (jQuery("#fsb_bar").css("padding-right", "0px"), jQuery("#fsb_bar").css("padding-left", "0px"), 0) : "mobile" == P[L].target_device ? Math.trunc((100 - P[L].progress_bar_width_percentage) / 2) - 1 : 0 : 100 == P[L].progress_bar_width_percentage ? (jQuery("#fsb_bar").css("padding-right", "0px"), jQuery("#fsb_bar").css("padding-left", "0px"), 0) : Math.trunc((100 - P[L].progress_bar_width_percentage) / 2) - 1, jQuery("#fsb_bar").css("padding-bottom", "1px");
         var x, j, Q, S = P[L].progress_bar_margin_bottom - 1;
         jQuery("#fsb_bar").append('<div id="fsb_progress_bar"> <span id="fsb_progress_bg_span"><span id="fsb_progress_color_span"></span></span> </div>'), jQuery("#fsb_custom_code").append("<style id='progstyle'></style>"), jQuery("#fsb_progress_bar").css("margin-top", P[L].progress_bar_margin_top + "px"), jQuery("#fsb_progress_bar").css("margin-left", e + "%"), jQuery("#fsb_progress_bar").css("margin-right", e + "%"), jQuery("#fsb_progress_bar").css("margin-bottom", S + "px"), jQuery("#fsb_progress_bar").css("height", P[L].progress_bar_height + "px"), jQuery("#fsb_progress_bar").css("border-radius", P[L].progress_bar_border_radius + "px"), jQuery("#fsb_progress_bar").css("overflow", "hidden"), jQuery("#fsb_progress_bar").css("position", "relative"), jQuery("#fsb_progress_bg_span").css("background", P[L].progress_bar_color_bg), jQuery("#fsb_progress_bg_span").css("height", "inherit"), jQuery("#fsb_progress_bg_span").css("width", "100%"), jQuery("#fsb_progress_bg_span").css("position", "absolute"), jQuery("#fsb_progress_bg_span").css("left", "0"), jQuery("#fsb_progress_color_span").css("position", "inherit"), jQuery("#fsb_progress_color_span").css("height", "inherit"), jQuery("#fsb_progress_color_span").css("width", "0%"), jQuery("#fsb_progress_color_span").css("left", "inherit"), jQuery("#fsb_progress_color_span").css("animation", "ht_progress_bar_fill 1500ms ease-in-out 200ms 1 forwards"), P[L].progress_bar_gradient ? jQuery("#fsb_progress_color_span").css("background", "linear-gradient(to right, " + P[L].progress_bar_color_1 + "  0%, " + P[L].progress_bar_color_2 + " 100%)") : jQuery("#fsb_progress_color_span").css("background", P[L].progress_bar_color_1), Y(), n ? jQuery("#fsb_progress_bar").css("visibility", "hidden") : (x = Math.trunc((t - (a <= 0 ? 0 : a)) / t * 100), Q = "@keyframes ht_progress_bar_fill { 0%{ width: " + (j = "" == (j = z("fsb_previous_percent")) ? 0 : j) + "%;} 100%{ width: " + x + "%;}}", document.getElementById("progstyle").insertAdjacentHTML("beforeend", Q), G("fsb_previous_percent", x))
      }
      if (setTimeout(function () {
            Y(), setTimeout(function () {
               E ? jQuery("#fsb_background").css("opacity", 1) : (E = !0, jQuery("#fsb_background").animate({
                  opacity: 1
               }, 1e3 * P[L].animation_time, "linear"))
            }, 0)
         }, 200), 0 < P[L].show_time && (H = !0, clearTimeout(R), R = setTimeout(function () {
            jQuery("#fsb_background").animate({
               opacity: 0
            }, 1e3 * P[L].animation_time, "linear"), jQuery("#fsb_background").animate({
               height: "0px"
            }, 1e3 * P[L].animation_time, "linear"), jQuery("#fsb_background").css("opacity", 0), 0 < jQuery("#fsb_placeholder").length && "inserted" === P[L].position || 0 < jQuery("#fsb_placeholder").length && "inserted_sticky" === P[L].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : "top_push" === P[L].position || "top_push_sticky" === P[L].position ? (jQuery("body").css("paddingTop", 0), jQuery("#fsb_container").css("display", "none")) : "top_push_v1" === P[L].position || "top_push_sticky_v1" === P[L].position || "top_cover" === P[L].position || "top_cover_nonsticky" === P[L].position ? jQuery("#fsb_container").css("display", "none") : "bottom_cover" === P[L].position && jQuery("body").css("paddingBottom", 0), jQuery("#fsb_placeholder").trigger("fsb_fully_unloaded", [P[L].position]), jQuery("#fsb_container").trigger("fsb_fully_unloaded", [P[L].position]), U()
         }, 1e3 * P[L].show_time)), "top_push_v1" === P[L].position || "top_push_sticky_v1" === P[L].position) {
         var T = ["#announcement-bar.table[data-parallax]", "#PageContainer > .shopify-section.header-section.sticky-header", 'body > article.header__section-wrapper[role="banner"] #shopify-section-header.section-header', "#NavDrawer", ".drawer + .drawer__close", "div[data-product-add-popdown-wrapper].product-add-popdown", "#header-menu.drawer.header__drawer .drawer__content", "#shopify-section-header.shopify-section.header--sticky", '.drawer:not(".search-bar")', "body > .js-slideout-overlay.site-overlay", "#slideout-search-sidebar", "#navBar", ".header-toolbar.open-container", ".navigation__container", ".mobileMenu__overlay", ".SidebarMenu.Drawer", "#pushy-menu", ".nav-container.nav-main", "#site-overlay", ".mobilenav-overlay", ".mobile-menu-overlay", ".site-header-wrapper", ".ajaxcart-draw", ".overnav-overlay", ".mobilemenu.dblclick", "header.sticky", ".nav.side-nav", 'body[class^="kagami--"] .page__overlay', 'body[class^="focal--"] .page__overlay', "#sidebar #menu", "#nav .dropdown-menu", "#mobile-nav-return.mobile-nav-toggle", ".main-header-wrap .main-header .mobile-dropdown", ".page-header.cf + #navbar.nav-style-out", ".header-cart.slide", ".moTab-navigation", ".cart-popup-wrapper", ".mobile-nav-close", "body[data-new-gr-c-s-check-loaded][data-gr-ext-installed] > #searchPopup", ".mobile-nav-wrapper", "#velaMenuMobile", 'a[href="/cart"].dropdown_link + .cart_content', ".basel-close-side", ".mobile-nav-overlay", ".panel-menu.mobile-main-menu", "body > .page > #shopify-section-header.header__outer-wrapper", "#shopify-section-popup .popup", "#shopify-section-footer + .popup.js-popup", ".wrap-all>.overlay", "#shopify-section-header-vertical #mobile-header .mobile-header__content .mobile-menu", 'aside[data-section-id="header-mobile"] .mobile-menu-container', ".unero-off-canvas-layer", ".site-header .mobile-navigation", ".menu-mobile.navbar", "#slide-side-menu", ".translate-header #dropdown-cart", "header .wrapper-navigation > .main-menu.jas-mb-style", ".wrapper-header #shopify-section-navigation .wrapper-navigation", ".mask-overlay", ".box_contentmenu_background", "#search-overlay.search-overlay", "nav.main-nav-bar", ".header-slim__content .nav-mobile-overlay", ".page__header.page__header--mobile.hide-desktop .overlay--nav", ".page-wrap nav.nav-hamburger.nav-main[data-nav-main]", ".\\#modal-popup", "#MenuDrawer .modal__background", ".predictive-search__overlay", ".sf-menu-wrapper.sf-menu-wrapper-mobile", 'body > a.page-shade[aria-label="Toggle menu"]', "#Cart-Drawer.side-panel.cart-drawer", "body > .page-overlay", "#top-search-wrapper"];
         d < 650 && T.unshift("#SiteContainer #header.header__wrapper"), d < 768 && T.unshift(".cbp-spmenu.cbp-spmenu-vertical"), d < 992 && T.unshift(".mobile__widget.mobile-header__nav .mobile__menu-wrapper"), d < 1024 && T.unshift('.mono-produit-true [class^="mobile-type-header"]');
         for (var D = 0; D < T.length; D++) {
            var A = jQuery(T[D]);
            if (A.length) {
               A = "auto" === A.css("z-index") || A.css("z-index") <= 1 ? 99999 : A.css("z-index"), A = parseFloat(A) - 1;
               jQuery("#fsb_background").css("z-index", A);
               break
            }
         }
      }
      jQuery("#fsb_placeholder").trigger("fsb_fully_loaded", [P[L].position]), jQuery("#fsb_container").trigger("fsb_fully_loaded", [P[L].position])
   }

   function q() {
      if ("object" == typeof Shopify && Shopify.hasOwnProperty("shop")) return Shopify.shop;
      for (var e = document.getElementsByTagName("script"), a = 0; a < e.length; a++)
         if (e[a].hasAttribute("src") && e[a].src.includes("freeshippingbar") && e[a].src.includes("shop=")) return e[a].src.substring(e[a].src.indexOf("shop=") + 5, e[a].src.length);
      return document.domain
   }

   function z(e) {
      e = ("; " + document.cookie).split("; " + e + "=");
      if (2 == e.length) return e.pop().split(";").shift()
   }

   function G(e, a, r) {
      var t;
      r = r ? ((t = new Date).setTime(t.getTime() + 1e3 * r), "; expires=" + t.toGMTString()) : "", document.cookie = e + "=" + a + r + "; path=/"
   }

   function $(e) {
      document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
   }

   function g(e, a) {
      try {
         sessionStorage.setItem(e, a)
      } catch (e) {
         return
      }
   }

   function W() {
      var e = !1;
      return e = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? !0 : e
   }

   function U() {
      var e = document.getElementById("fsb_theme_integration_styles");
      e && e.parentNode.removeChild(e)
   }

   function v() {
      var e, a, r;
      Shopify && Shopify.theme && P && (null != (e = q()) && (a = Shopify.theme.id, r = t ? t.theme_id : "", (a = "number" == typeof a ? a.toString() : a) !== r && (t.theme_id = a, t.is_xhr = !1, jQuery.ajax({
         method: "GET",
         url: F + "fsb_save_theme" + "?" + ("domain=" + e + "&theme_id=" + a + "&is_xhr=false"),
         dataType: "json",
         success: function (e) {
            g("fsb_payload", "")
         },
         error: function (e) {
            throw new Error(e)
         }
      }))))
   }

   function Y() {
      var e = jQuery("#fsb_bar").outerHeight(!0),
         a = (0 < jQuery("#fsb_placeholder").length && "inserted" === P[L].position ? (jQuery("#fsb_background").css("position", "relative"), jQuery("#fsb_background").css("height", e)) : 0 < jQuery("#fsb_placeholder").length && "inserted_sticky" === P[L].position ? (jQuery("#fsb_background").css("position", "fixed"), jQuery("#fsb_placeholder").css("paddingBottom", e), jQuery("#fsb_background").css("height", e)) : "top_push" === P[L].position ? (jQuery("#fsb_background").css("top", 0), jQuery("#fsb_background").css("position", "absolute"), jQuery("#fsb_background").css("height", e), jQuery("body").css("paddingTop", e)) : "top_push_sticky" === P[L].position ? (jQuery("#fsb_background").css("top", 0), jQuery("#fsb_background").css("position", "fixed"), jQuery("#fsb_background").css("height", e), jQuery("body").css("paddingTop", e)) : "top_push_v1" !== P[L].position && ("top_push_sticky_v1" === P[L].position ? (jQuery("#fsb_background").css("top", 0), jQuery("#fsb_background").css("position", "fixed"), jQuery("#fsb_container").css("height", e)) : "top_cover" === P[L].position ? (jQuery("#fsb_background").css("top", 0), jQuery("#fsb_background").css("position", "fixed"), jQuery("#fsb_background").css("height", e)) : "top_cover_nonsticky" === P[L].position ? (jQuery("#fsb_background").css("top", 0), jQuery("#fsb_background").css("position", "absolute"), jQuery("#fsb_background").css("height", e)) : "bottom_cover" === P[L].position && (jQuery("#fsb_background").css("bottom", 0), jQuery("#fsb_background").css("position", "fixed"), jQuery("#fsb_background").css("height", e), jQuery("body").css("paddingBottom", e))), window.innerWidth || document.body.clientWidth),
         r = [],
         t = [],
         o = [];
      "top_push_v1" === P[L].position ? (t = [".site-header.page-element:not(.is-moved-by-drawer)", ".nav-mobile", ".ajaxify-drawer", "#MobileNav:not(.site-header__drawer)", ".header__close.fixed", ".site-header.headroom.headroom--top", "header.hero-active .hero-image-header-wrap", "#nav .wsmenu", "body:not(.scrolled-down) #site-control.site-control", ".nav-shift #page-banner.banner-under-header", ".nav-shift .container #main", "#shopify-section-general-header .main-header-wrapper:not(.sticky-header-scrolled) + .header-drawer", ".mobile_nav-fixed--true .page-banner", ".mobile_nav-fixed--true .page_banner", ".mobile_nav-fixed--false .page_banner", ".tt-desctop-parent-search .tt-dropdown-menu", ".header__search-bar-wrapper.is-fixed", "header#top.scroll-to-fixed-fixed:not(.js-header-sticky--fixed)", ".site-header.has-scrolled", ".site-header#header.header--has-scrolled", ".site-header#header.header--is-standard.header--standard", ".site-header#header.is-standard.header--standard", ".site-header#header.header--is-hamburger.header--standard", ".pageWrap #shopify-section-header nav.nav-hamburger.nav-main", "nav#header-menu.header__drawer.caps.drawer--visible .drawer__content", '#PageContainer .transition-body #shopify-section-header div[data-section-id="header"][data-section-type="header"] #HeaderWrapper.header-wrapper:not(.header-wrapper--sticky)'], o = ["body:not(.mobile-drawer--open) .page-wrapper.page-element", ".site-header.is-standard.shift--alert", ".large--hide.medium-down--show.sticky-header:not(.ui)", "#shopify-section-static-header.site-header-sticky--open:not(.visible)", "body:not(.site-header-sticky--scrolled) .site-navigation-wrapper + .site-mobile-nav .mobile-nav-panel", "body:not(.js-drawer-open) .sticky-header.offset-by-announcement-bar", "#announcement-bar.table", 'a#pagecontent[name="pagecontent"]', ".header.header-fixed--true.is-absolute", ".mobile_nav-fixed--false.is-active #header", ".site-header-main-content .live-search--takeover .live-search-form", "#shopify-section-header + .index-sections .slideshow-section", "#shopify-section-header + .main_content_area .index-sections .slideshow-section", "#shopify-section-header + .index-sections .banner-section"], a <= 1080 && t.push(".navigation.navigation-has-mega-nav"), 720 < a && t.push("#shopify-section-general-header .main-header-wrapper:not(.sticky-header-scrolled)"), 800 <= a && o.push("#site-wrap #header #shopify-section-header > .row.clearfix", "#site-wrap #header #shopify-section-header + .curr-switcher.js")) : "top_push_sticky_v1" === P[L].position && (r = ["#page header.util + #shopify-section-header.header", ".sticky-header #PageContainer #shopify-section-header.header-section", "div[data-scroll-to] > .collection-grid__wrapper > .collection-filter"], t = [".site-header.site-header--homepage.site-header--transparent", "#mobileNavBar", "#StickyBar.sticky--active", ".js-sticky-action-bar .action-area", ".site-header.page-element:not(.is-moved-by-drawer)", ".nav-mobile", ".ajaxify-drawer", ".sticky-navigation-container.sticky.stuck", "#MobileNav:not(.site-header__drawer)", ".header__close.fixed", "#shopify-section-toolbar.toolbar-section", ".site-header-sticky .site-header--stuck", ".nav-container.nav-sticky", "#navbarStickyDesktop.nav-sticky", ".site-header.has-scrolled", ".site-header#header.header--has-scrolled", ".site-header#header.header--is-standard.header--standard", ".site-header#header.is-standard.header--standard", ".site-header#header.header--is-hamburger.header--standard", ".pageWrap #shopify-section-header nav.nav-hamburger.nav-main", ".site-header.headroom", 'body > article.header__section-wrapper[role="banner"] #shopify-section-header.section-header', "#site-header.site-header", 'body[class^="trademark--"] .shopify-section__header', '[data-header-sidebar="true"] .main-sidebar', ".ui.sticky.top", "header.hero-active .hero-image-header-wrap", ".header.sticky .bar.fixed", 'body[class^="kagami--"] #shopify-section-header', "#page header.util", "body:not(.show-mobile-nav) #toolbar.docked", "body.show-mobile-nav #mobile-nav .inner", 'body.show-mobile-nav #mobile-nav #sub-nav-menu-2.sub-nav[data-is-subnav-for="menu-2"]', "#page-wrap-inner > #page-overlay + #page-wrap-content > .section-header", "body.sticky-header .header .header-main-content[data-header-content]", "#nav .wsmenu", ".header_bot.enabled-sticky-menu.sticky", ".\\#header.\\@sticky", ".transition-body #shopify-section-header #NavDrawer.drawer.drawer--is-open", ".transition-body #shopify-section-header #CartDrawer.drawer.drawer--is-open", "#StickyHeaderWrap #SiteHeader.site-header--stuck", ".header__mobile-nav", ".searching .search-bar-wrapper", "#shopify-section-header .coverheader", '#shopify-section-header header.header-section.scrolling[data-sticky="true"]', "#header.mobile-sticky-header--true", "#header.mm-fixed-top.mobile-header.mm-slideout", "#mm-0.mm-page.mm-slideout #header.mobile-header.mobile-sticky-header--false", "#site-control.site-control", ".nav-shift #page-banner.banner-under-header", ".nav-shift .container #main", "body.scrolled-down #pageheader.pageheader.cc-animate-init.cc-animate-complete", "body.scrolled-down #pageheader.pageheader[data-cc-animate]", "body.scrolled-down #pageheader.pageheader.cc-animate-init.cc-animate-complete + .header-search", "body.scrolled-down #pageheader.pageheader[data-cc-animate] + .header-search", "#shopify-section-general-header .main-header-wrapper + .header-drawer", "#shopify-section-general-header.main-header-section", "#shopify-section-general-header nav.drawer-nav.allow-scroll-while-locked[data-drawer-nav]", ".header-section .stuckMenu.isStuck", "header.header__wrapper.js-theme-header.stickynav.sticky--active", "#shopify-section-mobile-navigation .shifter-navigation", ".header-wrapper .sticky-header-wrapper.sticky", "#mobile-header #mobile-nav.mobile-nav", "header.is-sticky.st-visible", 'header#top.header:not([role="banner"])', "header#velaHeader.velaHeader", "body.fixed-header.fixed-header--all > header", ".have-fixed .nav-bar", ".header-bottom.on .header-panel", ".have-fixed .nav-search", ".mb-fixed .hd_mobile", ".open-mn .hd_mobile .icon-menu, .open-user .close_user", "html.open-mn .mn_mobile nav, html.open-user .mobile_customer nav", "#sticky-wrapper.sticky-wrapper.is-sticky .wrapper-header-bt", "#sticky-wrapper.sticky-wrapper.is-sticky .header-bottom[data-sticky-mb]", "body > .body-content-wrapper > .shopify-section-group-header-group.section-header-navigation.shopify-section-header-sticky", "body > .body-content-wrapper > .shopify-section-group-header-group.section-header-mobile.shopify-section-header-sticky", "body > #navigation-mobile.halo-sidebar.halo-sidebar_menu", ".header__search-bar-wrapper.is-fixed", ".sticky-header.header-clone.act-scroll", ".sticky-header-prepared.basel-top-bar-on .header-shop.act-scroll", ".mobile_nav-fixed--false .page_banner", ".header-container.sticky-header", ".tt-stuck-nav.stuck", ".tt-mobile-header-inline-stuck.stuck", "header#top.scroll-to-fixed-fixed", "header#header .header__content--sticky", ".header--sticky.is-sticky .header__content", ".stickyNav", "#header-phantom.sticky-header.fixed-header", "#sticky-info-product-template", ".sticky-wrapper.is-sticky .header-sticky", ".header__mobile.is-fixed", "#shopify-section-header-sticky.header-sticky__placeholder", "header#header-header.site-header", "#shopify-section-pxs-announcement-bar + #shopify-section-header .main-header-wrapper", ".sticky-header #PageContainer #shopify-section-header.header-section", ".header-content .header-container.header-fixed .header-main", ".header-content .header-container.header-mobile-fixed .header-main", "body.site-header-sticky .site-header.site-header-sticky--scrolled", "body.site-header-sticky .site-header.site-header-nav--open", "body.site-header-sticky .site-header", "#app-header.sticky-on.sticky", ".mm-page.mm-slideout #content_wrapper + .mobile-search", ".docked-navigation-container .docked-navigation-container__inner", ".docked-mobile-navigation-container .docked-mobile-navigation-container__inner", 'nav.navigation--sticky.navigation[aria-label="Primary Navigation"]', ".site-header .header-bottom .header-mb.fixed", ".kalles_2-0 #ntheader.live_stuck .ntheader_wrapper", "#header.jsheader_sticky.menu_scroll_v1", ".contentbody .menu_moblie.menu_mobilescroll", ".site-header-wrapper.site-header--sticky", ".body-cont #shopify-section-header > .cont-header.header-fixed-true", "body.cc-animate-enabled[data-cc-animate-timeout] > #shopify-section-header.section-header", "body.cc-animate-enabled[data-cc-animate-timeout].reveal-mobile-nav > .mobile-navigation-drawer", "body.cc-animate-enabled[data-cc-animate-timeout].show-search #main-search.main-search", 'body.has-sticky-header .header__wrapper.js__header__stuck[data-header-sticky="sticky"]', ".header__drawer.drawer--visible[data-drawer] .drawer__content .drawer__inner[data-drawer-inner]", 'div.navbar.w-nav[data-w-id][role="banner"]', '.w-nav-overlay nav.nav-menu.w-nav-menu[data-nav-menu-open][role="navigation"]', "body > .page > #shopify-section-header.header__outer-wrapper", 'body > .page > #shopify-section-header.header__outer-wrapper > header.header[data-is-sticky="true"][data-enable-sticky-header="true"] > .drawer-menu.active.visible', "body > .page > #shopify-section-header.header__outer-wrapper > header.header.is-sticky > .drawer-menu.animation.animation--drawer-menu.active.visible.animation--drawer-menu-revealed", "body.body-with-sticky-header .header-wrapper.header-wrapper--fixed", ".featured-collections__header.sticky__element.featured-collections__header", ".container > .container__top-part .page__header.page__header--sticky", '.pageWrap > #shopify-section-announcement + #shopify-section-header.shopify-section.shopify-section-header header.site-header[data-section-id="header"][data-section-type="header"][data-header-height][data-scroll-lock-fill-gap]', '.page-wrap > #shopify-section-announcement + #shopify-section-header.shopify-section.shopify-section-header header.site-header[data-section-id="header"][data-section-type="header"][data-header][data-header-height][data-scroll-lock-fill-gap]', '#MainContent header.header-sticky .header[data-header-settings*="true"]', ".\\#main-header.\\@sticky .\\#main-nav-container", ".\\#main-header.\\@sticky .\\#main-header-inner", ".js__header__stuck.js__header__stuck__backdrop[data-underline-current] .theme__header", 'section.sf-header.stuck[data-section-id="header"][data-section-type="header"] .header__wrapper.absolute', "body.site-header-sticky #shopify-section-static-header.shopify-section.site-header-wrapper > section.site-header.site-navigation-layout-expanded[data-header-main]", "body.site-header-sticky #shopify-section-static-header.shopify-section.site-header-wrapper > section.site-header.site-navigation-layout-drawer[data-header-main]", "body > #shopify-section-header.shopify-section.shopify-section-header-sticky.animate:not(.shopify-section-header-hidden)", 'body > #header[data-section-id="header"][data-section-type="header-section"].stickyHeader', "body > .shopify-section.shopify-section-group-header-group.section-header.shopify-section-header-sticky:not(.shopify-section-header-hidden)", 'html[style*="--header-offset: 0px;"] body > #wrapper > .header-section > header#header.header-sticky--active', "body.has-scrolled .site-header--fixed", ".container > .header-group > .shopify-section.shopify-section-group-header-group.page-header > .header__wrapper.js__header__stuck"], o = ["body:not(.page-move--cart.mobile-drawer--open) #ajaxifyDrawer.is-visible", "header.site-header.sticky:not(.ui)", ".header.sticky-header--true", ".header.sticky-header--false.is-absolute", "#shopify-section-header.header header.sticky:not(.ui)", "body:not(.mobile-drawer--open) .page-wrapper.page-element", ".site-header.is-standard.shift--alert", ".large--hide.medium-down--show.sticky-header:not(.ui)", "#shopify-section-static-header.site-header-sticky--open", "#shopify-section-static-header.visible", ".site-navigation-wrapper + .site-mobile-nav .mobile-nav-panel", ".site-header-main-content .live-search--takeover .live-search-form", "body.colors--body-n-button-match .off-canvas--viewport .off-canvas--main-content", "body:not(.js-drawer-open) .sticky-header.squished-header", "#announcement-bar.table", "body.meta-fixed #meta", "header.main-header-wrap.main-header--minimal-sticky", "#site-wrap #header #shopify-section-header + .curr-switcher.js", ".main_nav_wrapper.sticky_nav.sticky_nav--stick", ".main-nav__wrapper.sticky_nav.sticky_nav--stick", ".header.header-fixed--true.is-absolute", "#header.mobile_nav-fixed--true", 'body.mobile_nav-fixed--false a#pagecontent[name="pagecontent"]', ".mobile_nav-fixed--false.is-active #header", "body.mobile_nav-fixed--true .shopify-section--slideshow.under-menu", "body.mobile_nav-fixed--true .shopify-section--image-with-text-overlay.under-menu", '.mono-produit-true [class^="mobile-type-header"] nav.nav-bar', ".wrap-all #headerApp", ".group-header.sticky-menu.active", "nav#page-menu.theme-modal > .inner", ".body-cont #shopify-section-header > .cont-header.header-fixed-true nav.nav-bar", ".halo-collection-content .toolbar.toolbar-fix", "#shopify-section-header-custom .header-slim__content.is-fixed", '.drawer.drawer--right[role="dialog"][data-mobile-navigation-drawer]', '#main-menu .main-menu-inner > .main-menu-panel-wrapper > #main-menu-panel.main-menu-panel > ul.main-menu-links[role="navigation"]', "#main-menu .main-menu-panel.main-menu-panel--child > ul.main-menu-links", ".header__wrapper.inline-layout-true #header-wrapper.header__main-wrapper.stickynav.sticky--active", "#mobile-header.header__mobile-container.stickynav.sticky--active", 'body[data-theme-name="Beyond"] header-root.header--root[data-section-id="header"]', "#shopify-section-header.shopify-section header.site-header.site-header--fixed[data-site-header][data-section-id]", "body.index header.is-absolute[data-desktop-header] > .header.header-fixed--true[data-header-is-absolute]"], a <= 480 && t.push("#ajaxifyModal"), a < 650 && t.push("#shopify-section-header #header.header__wrapper .header__content"), a <= 720 && t.push("body.is-mobile header.main-header.no-border[data-header]"), a <= 768 && o.push("#navBar.nav-bar:not(.opened)"), a <= 840 && o.push("body:not(.js-drawer-open) .medium-down--fixed"), a <= 948 && (t.push("#shopify-section-sidebar main-sidebar.sidebar"), o.push("#content-holder #content")), a <= 1080 && t.push(".navigation.navigation-has-mega-nav"), 720 < a && o.push("body:not(.js-drawer-open) .sticky-header.main-header-wrapper"), 748 < a && o.push("#sidebar-holder #sidebar", "#content-holder #content", "#shopify-section-sidebar .sidebar__container-holder", "#shopify-section-sidebar .sidebar__cart-handle"), 800 <= a && (t.push("#nav + #content_wrapper.mm-page .content.container"), o.push(".mm-page.mm-slideout #content_wrapper #shopify-section-header + .index-sections .slideshow-section", ".mm-page.mm-slideout #content_wrapper #shopify-section-header + .main_content_area .index-sections .slideshow-section", ".mm-page.mm-slideout #content_wrapper #shopify-section-header + .index-sections .banner-section")), 1e3 < a && (t.push(".bodywrap.cf .page-header.cf"), o.push(".bodywrap.cf .page-header.cf + #navbar.nav-style-out")), null != (a = document.querySelector('body[class^="warehouse"] #shopify-section-header')) && "sticky" === getComputedStyle(a).position && t.push('body[class^="warehouse"] #shopify-section-header'));
      for (var i = 0, n = 0; n < r.length; n++) {
         var s = document.querySelector(r[n]);
         if (s) {
            i = parseFloat(s.style.top);
            break
         }
      }
      a = "", r.length && (a = r.join() + "{top:" + (e + i) + "px !important;}");
      var d = "";
      t.length && (d = t.join() + "{top:" + e + "px !important;}"), t = "", o.length && (t = o.join() + "{margin-top:" + e + "px;}"), U(), jQuery("body").append('<div id="fsb_theme_integration_styles"><style>' + a + d + t + "</style></div>")
   }
   return "undefined" == typeof jQuery ? (e = document.getElementsByTagName("head")[0], (a = document.createElement("script")).type = "text/javascript", a.src = "https://code.jquery.com/jquery-2.2.4.min.js", a.onload = r, e.appendChild(a)) : setTimeout(r, 0), {
      fsb_button_on_click: function () {
         let a = "";
         try {
            a = new URL(P[L].bar_link)
         } catch (e) {}
         var r = new URL(window.location.href);
         if (!0 === P[L].button_link_insert_language_code && "object" == typeof a && r.origin === a.origin && "/" != window.Shopify.routes.root) {
            r = a.origin + a.pathname;
            let e = "";
            P[L].bar_link.length > r.length && (e = P[L].bar_link.substring(r.length, P[L].bar_link.length));
            r = a.origin + window.Shopify.routes.root.slice(0, -1) + a.pathname + e;
            P[L].new_tab ? window.open(r, "_blank") : window.location = r
         } else P[L].new_tab ? window.open(P[L].bar_link, "_blank") : window.location = P[L].bar_link
      },
      fsb_close_on_click: function () {
         jQuery("#fsb_placeholder").trigger("fsb_fully_unloaded", [P[L].position]), jQuery("#fsb_container").trigger("fsb_fully_unloaded", [P[L].position]), 0 < jQuery("#fsb_placeholder").length && setTimeout(function () {
            jQuery("#fsb_placeholder").html("")
         }, 100), setTimeout(function () {
            jQuery("#fsb_container").html("")
         }, 100), 0 < jQuery("#fsb_placeholder").length && "inserted" === P[L].position || 0 < jQuery("#fsb_placeholder").length && "inserted_sticky" === P[L].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : "top_push" === P[L].position || "top_push_sticky" === P[L].position ? jQuery("body").css("paddingTop", 0) : "top_cover" === P[L].position || "top_cover_nonsticky" === P[L].position ? jQuery("#fsb_container").css("display", "none") : "bottom_cover" === P[L].position && jQuery("body").css("paddingBottom", 0), G("fsb_close_clicked", "yes")
      },
      fsb_button_on_click_v1: function (a) {
         a.preventDefault(), a.stopPropagation();
         let r = "";
         try {
            r = new URL(P[L].bar_link)
         } catch (e) {}
         if (a = new URL(window.location.href), !0 === P[L].button_link_insert_language_code && "object" == typeof r && a.origin === r.origin && "/" != window.Shopify.routes.root) {
            a = r.origin + r.pathname;
            let e = "";
            P[L].bar_link.length > a.length && (e = P[L].bar_link.substring(a.length, P[L].bar_link.length));
            a = r.origin + window.Shopify.routes.root.slice(0, -1) + r.pathname + e;
            P[L].new_tab ? window.open(a, "_blank") : window.location = a
         } else P[L].new_tab ? window.open(P[L].bar_link, "_blank") : window.location = P[L].bar_link
      },
      fsb_close_on_click_v1: function (e) {
         e.preventDefault(), e.stopPropagation(), jQuery("#fsb_placeholder").trigger("fsb_fully_unloaded", [P[L].position]), jQuery("#fsb_container").trigger("fsb_fully_unloaded", [P[L].position]), 0 < jQuery("#fsb_placeholder").length && setTimeout(function () {
            jQuery("#fsb_placeholder").html("")
         }, 100), setTimeout(function () {
            jQuery("#fsb_container").html("")
         }, 100), 0 < jQuery("#fsb_placeholder").length && "inserted" === P[L].position || 0 < jQuery("#fsb_placeholder").length && "inserted_sticky" === P[L].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : "top_push" === P[L].position || "top_push_sticky" === P[L].position ? jQuery("body").css("paddingTop", 0) : "top_cover" === P[L].position || "top_cover_nonsticky" === P[L].position ? jQuery("#fsb_container").css("display", "none") : "bottom_cover" === P[L].position && jQuery("body").css("paddingBottom", 0), U(), (e = document.getElementById("fsb_container")) && 0 < parseFloat(e.style.height) && (e.style.height = "0"), G("fsb_close_clicked", "yes")
      }
   }
}
var hextom_fsb_instance;

function fsb_button_on_click() {
   hextom_fsb_instance.fsb_button_on_click()
}

function fsb_close_on_click() {
   hextom_fsb_instance.fsb_close_on_click()
}

function fsb_button_on_click_v1(e) {
   hextom_fsb_instance.fsb_button_on_click_v1(e)
}

function fsb_close_on_click_v1(e) {
   hextom_fsb_instance.fsb_close_on_click_v1(e)
}
window.fsb_already_run && "yes" == window.fsb_already_run || (hextom_fsb_instance = hextom_fsb());