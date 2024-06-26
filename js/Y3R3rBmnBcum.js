var StampedFn = StampedFn || function (n, t) {
   function ki() {
      var t = !1;
      return function (n) {
         (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))) && (t = !0)
      }(navigator.userAgent || navigator.vendor || n.opera), t
   }

   function a(n) {
      if (n.type === "click") return !0;
      if (n.type === "keypress") {
         var t = n.charCode || n.keyCode;
         if (t === 32 || t === 13) return !0
      } else return !1
   }

   function dr(i) {
      var r = t.createElement("span"),
         u;
      r.appendChild(t.createTextNode(i));
      r.id = "tempCopyToClipboard";
      t.body.append(r);
      u = t.createRange();
      u.selectNode(r);
      n.getSelection().removeAllRanges();
      n.getSelection().addRange(u);
      t.execCommand("copy");
      n.getSelection().removeAllRanges();
      r.remove()
   }

   function gr() {
      return (gr = Object.assign || function (n) {
         for (var i, r, t = 1; t < arguments.length; t++) {
            i = arguments[t];
            for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
         }
         return n
      }).apply(this, arguments)
   }

   function nu(i, u) {
      var f, e;
      u ? (s("Using included jQ"), r = u, n.jQueryStamped = r, s(r)) : (s("Loaded jQ"), n.jQueryStamped = r);
      /msie/.test(n.navigator.userAgent.toLowerCase()) && (r.support.cors = !0);
      o.exclude_font != !0 && r("head").append(r("<link/>", {
         rel: "stylesheet",
         href: "//fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap",
         type: "text/css"
      }));
      f = k("stamped_referral_code") || k("stamped_ref");
      f && (ff("stamped_referral_code", {
         code: f
      }), o.referral_code = f);
      e = ef("stamped_referral_code");
      e && e.code && (o.referral_code = e.code);
      s("Library Starting...");
      r.isReady ? di() : r(t).ready(function () {
         di()
      });
      setTimeout(function () {
         bi || (s("Library not started, fallback"), di())
      }, 3e3)
   }

   function di() {
      bi || (s("Started library"), h("stamped:init:starting"), tu(), iu());
      bi = !0
   }

   function tu() {
      if (s("Starting UGC..."), u = r(v), u.length) {
         if (r.trim(u.html())) {
            vu();
            gu();
            ku();
            bu();
            lu();
            du();
            try {
               n.LazyLoadStamped && LazyLoadStamped.update && LazyLoadStamped.update()
            } catch (f) {}
         } else au();
         ae();
         ve();
         we();
         pe();
         le();
         ce();
         r(t).one("stamped:reviews:loaded", function () {
            var n;
            s("Main Widget event triggered reload once");
            vu();
            gu();
            ku();
            du();
            n = k("write_review");
            n && ri("review");
            n = k("write_question");
            n && ri("question")
         });
         r(t).on("stamped:reviews:loaded", function () {
            s("Main Widget event triggered reload");
            it = [];
            bu();
            lu();
            try {
               n.LazyLoadStamped && LazyLoadStamped.update && LazyLoadStamped.update()
            } catch (t) {}
            os()
         })
      }
      r(t).one("stamped:launcher:loaded", function () {
         var t = k("rewards-launcher");
         r(n).on("hashchange", function () {
            var n = location.hash;
            n.indexOf("stamped-rewards") >= 0 && ct()
         });
         t && (t == "open" && ct(), t.indexOf("view-") > -1 && (ct(!0), y(t)))
      });
      yu();
      pu();
      var i = k("stamped_r_id");
      i && o.disable_single_review != !0 && ye(i)
   }

   function iu(t) {
      s("Starting Rewards...");
      var i = r("#stamped-rewards-init");
      if (t && t.customer) {
         s("Started Rewards with direct data");
         e = t;
         ru();
         return
      }
      t ? (s("Started Rewards with JS data"), e.customer = t, gi()) : i.length > 0 ? (s("Started Rewards with div data"), e.customer = {
         customerId: i.data("customer-id"),
         customerEmail: i.data("customer-email"),
         customerFirstName: i.data("customer-first-name"),
         customerLastName: i.data("customer-last-name"),
         customerTags: i.data("customer-tags"),
         customerLocale: i.data("customer-locale"),
         totalOrders: 0,
         totalSpent: i.data("customer-total-spent"),
         isAcceptMarketing: i.data("customer-accepts-marketing"),
         authToken: i.data("key-auth")
      }, gi()) : s("Started Rewards no init customer data");
      e && Object.keys(e.customer || {}).length === 0 && (e.customer = {
         customerId: i.data("customer-id") || n.__st && n.__st.cid || n.meta && n.page && n.meta.page.customerId
      })
   }

   function gi() {
      var t, u, f;
      s("Loading Rewards API init...");
      t = o.metafields || "";
      e && e.customer && t && (e.customer.metafields = t);
      u = JSON.stringify(e.customer);
      f = o.is_test;
      let i = o.SECURE_ENDPOINT + "/v2/rewards/init?",
         c = n.StampedGlobalOptions.storeUrl ? encodeURIComponent(n.StampedGlobalOptions.storeUrl) : n.StampedGlobalOptions.sId;
      r.ajax({
         type: "GET",
         dataType: "json",
         url: `${o.SERVICE_HOST.svc_identity}/shop/${c}/check-feature/loyalty2023`,
         success: function (n) {
            n.hasFeature || p ? (console.log("Enabling Loyalty 2.0..."), l = !0, i = `${o.SERVICE_HOST.svc_loyalty_widget}/launcher?`) : (l = !1, console.log("Enabling Loyalty 1.0..."))
         },
         error: function () {
            l = !1;
            console.log("Error, default to Loyalty 1.0...")
         }
      }).then(() => {
         const t = {
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            debug: null,
            isTest: f,
            isPreview: o.is_preview,
            referralCode: o.referral_code
         };
         p && (t.testLoyalty2023 = p, d && (t.testLoyaltyAccount = d));
         console.log("Loading", i);
         r.ajax({
            type: "POST",
            url: i + r.param(t),
            xhrFields: {
               withCredentials: !0
            },
            data: u,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (n) {
               h("stamped:rewards:init");
               e = n;
               ru()
            }
         })
      })
   }

   function lf() {
      var u = r("#stamped-rewards-init"),
         i;
      u.length || (i = t.createElement("div"), i.setAttribute("id", "stamped-rewards-init"), t.body.appendChild(i));
      let f = n.StampedGlobalOptions.storeUrl ? encodeURIComponent(n.StampedGlobalOptions.storeUrl) : n.StampedGlobalOptions.sId;
      r.ajax({
         type: "GET",
         dataType: "json",
         url: `${o.SERVICE_HOST.svc_identity}/shop/${f}/check-feature/loyalty2023`,
         success: function (n) {
            l = n.hasFeature || p ? !0 : !1
         },
         error: function () {
            l = !1;
            console.log("Error, default to Loyalty 1.0...")
         }
      })
   }

   function ru() {
      lf();
      e && e.html && (g = r("#stamped-rewards-init"), g.html(e.html.main), kf(), df(), wu())
   }

   function af() {
      return e.customer
   }

   function vf() {
      return e
   }

   function ct(n) {
      var t = rt.hasClass("opened");
      r("body", f).addClass("opened");
      t ? n != !0 && (s("Func _toggleRewardsModal: var launcherWidth:" + kt, 1), rt.removeClass("opened"), rt.fadeOut(), vt.removeClass("opened"), si.removeClass("rotateIn"), yt.removeClass("fadeOut"), yt.addClass("fadeIn"), nt.animate({
         width: kt + "px"
      }, 0), setTimeout(function () {
         y("main")
      }, 1e3), h("stamped:launcher:closed")) : (setTimeout(function () {
         rt.addClass("opened")
      }, 100), vt.addClass("opened"), rt.fadeIn(), si.addClass("rotateIn"), si.removeClass("rotateOut"), yt.addClass("fadeOut"), yt.removeClass("fadeIn"), nt.animate({
         width: "40px"
      }, 0), r(".stamped-rewards-content-container", f).scrollTop(0), r(".stamped-rewards-header", f).css("height", "auto"), h("stamped:launcher:opened"), yf("open"))
   }

   function yf() {
      vr("stamped-launcher-opened") != "true" && (r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/tracking/event?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            source: "launcher",
            event: "open"
         }),
         dataType: "json",
         success: function () {}
      }), ai("stamped-launcher-opened", !0, 1))
   }

   function nr(t, i, u) {
      var h = t.search,
         e = t.customOptionTitle ? t.customOptionTitle + "||" + t.customOptionValue : "",
         s = t.topic,
         c = h || s || e,
         f = 1;
      e && (f = 2);
      s && (f = 3);
      r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/tracking/event?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            event: "search",
            source: "m"
         }),
         data: JSON.stringify({
            source: "m",
            sourceId: i,
            type: f,
            text: c,
            results: u
         }),
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function () {}
      })
   }

   function uu(t) {
      const i = {
         apiKey: n.StampedGlobalOptions.apiKey,
         sId: n.StampedGlobalOptions.sId,
         storeUrl: n.StampedGlobalOptions.storeUrl
      };
      p && (i.testLoyalty2023 = p, d && (i.testLoyaltyAccount = d));
      r.ajax({
         type: "POST",
         url: `${o.SERVICE_HOST.svc_loyalty_widget}/launcher/points?` + r.param(i),
         data: e.customer,
         dataType: "json",
         success: function (n) {
            setTimeout(function () {
               r(".stamped-rewards-header-main-points, .stamped-rewards-header-small-points", f).html(n.points_current_with_name);
               r("#label-balance-points", f).html(n.points_current_with_name);
               let t = r("#stamped-rewards-widget");
               r(".stamped-rewards-widget-points", t).html(n.points_current_with_name)
            }, 100);
            t && t(n)
         }
      })
   }

   function hi(t) {
      r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/v2/rewards/points?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl
         }),
         data: e.customer,
         dataType: "json",
         success: function (n) {
            setTimeout(function () {
               r(".stamped-rewards-header-main-points, .stamped-rewards-header-small-points", f).html(n.points_current_with_name)
            }, 5e3);
            t && t(n)
         }
      })
   }

   function fu(t) {
      return t = t || {}, e || e.customer || console.log("Customer not logged in to create reward activity"), r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/v2/rewards/add?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            campaignId: t.campaignId
         }),
         data: e.customer,
         dataType: "json",
         success: function (n, i, r) {
            t.callback && t.callback(n, i, r);
            hi();
            h("stamped:rewards:earned", {
               detail: n
            })
         }
      })
   }

   function pf(t) {
      t = t || {};
      r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/v2/rewards/redeem?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            campaignId: t.campaignId,
            points: t.points
         }),
         data: e.customer,
         dataType: "json",
         success: function (n) {
            t.callback && t.callback(n);
            hi();
            h("stamped:rewards:redeemed", {
               detail: n
            })
         }
      })
   }

   function wf(t, i, u) {
      c(t, "loading", !0);
      i = i || {};
      r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/v2/rewards/redeem?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            campaignId: i.campaignId,
            points: i.points
         }),
         data: e.customer,
         dataType: "json",
         success: function (n) {
            i.campaignId && c(t, "active", !0, 1);
            hi();
            u && u(n)
         }
      })
   }

   function bf(t) {
      t = t || {};
      r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/v2/rewards/addBirthday?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            dateBirthday: t.birthday
         }),
         data: e.customer,
         success: function () {
            t.callback && t.callback()
         }
      })
   }

   function eu(n) {
      var i, t, u;
      for ($wrapperCards.html(""), r("body", f).attr("data-view", n), i = 0; i < e.html.cards.length; i++) t = e.html.cards[i], t && t.html && n == t.type && (u = r(t.html), u.attr("data-key", t.key), $wrapperCards.append(u))
   }

   function kf() {
      vt = r(".stamped-rewards-launcher", g);
      nt = r(".stamped-launcher-button", g);
      pt = r("<iframe>");
      var n = nt.html();
      s("Func _buildIframeLauncher: width:" + nt.width(), 1);
      s("Func _buildIframeLauncher: outerWidth:" + nt.outerWidth(), 1);
      kt = nt.width() + 40;
      s("Func _buildIframeLauncher: var launcherWidth:" + kt, 1);
      nt.width(kt);
      nt.html(pt);
      vt.hide();
      setTimeout(function () {
         var t, u, i;
         wt = pt[0].contentWindow.document;
         pt[0].contentWindow.StampedFn = StampedFn;
         pt[0].contentWindow.jQuery = jQuery;
         t = r("body", wt);
         u = r("head", wt);
         t.html(n);
         t.append(r("#stamped-rewards-main-css", g).clone());
         u.append(r("<link/>", {
            rel: "stylesheet",
            href: "//cdn1.stamped.io/files/rewards-launcher.min.css",
            type: "text/css"
         }));
         o.includes_options.rewards_button_js != !1 && (i = wt.createElement("script"), i.type = "text/javascript", i.src = "https://kit.fontawesome.com/c66d4e7704.js", i.setAttribute("data-observe-mutations", "true"), wt.body.appendChild(i));
         u.append("<style>" + kr + ' body { overflow:hidden; } .stamped-launcher-icon-opened { font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; display:inline-block; width: 100%; margin-top: -2px; text-align:center;}<\/style>');
         ki() && t.attr("data-mobile", !0);
         si = r(".stamped-launcher-icon-closed", t);
         yt = r(".stamped-launcher-icon-opened", t);
         vt.fadeIn()
      }, 0)
   }

   function df() {
      rt = r(".stamped-rewards-base", g);
      $launcherCss = r("#stamped-rewards-main-css", g).clone();
      bt = r("<iframe>");
      var n = rt.html();
      rt.html(bt);
      setTimeout(function () {
         var t, u, c, s, i;
         f = bt[0].contentWindow.document;
         bt[0].contentWindow.StampedFn = StampedFn;
         bt[0].contentWindow.jQuery = jQuery;
         t = r("body", f);
         u = r("head", f);
         t.html(n);
         t.append(r("#stamped-rewards-main-css", g).clone());
         u.append(r("<link/>", {
            rel: "stylesheet",
            href: "//cdn1.stamped.io/files/rewards-main.min.css",
            type: "text/css"
         }));
         o.exclude_font != !0 && u.append(r("<link/>", {
            rel: "stylesheet",
            href: "//fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap",
            type: "text/css"
         }));
         l ? (console.log("Loading new FA css..."), c = "//s3-us-west-2.amazonaws.com/stamped.io/cdn/fontawesome/css/all-6.4.min.css", s = f.createElement("link"), s.rel = "stylesheet", s.href = c, f.getElementsByTagName("head")[0].appendChild(s)) : (u.append("<script>window.FontAwesomeConfig = { searchPseudoElements: true };<\/script>"), i = f.createElement("script"), i.type = "text/javascript", i.src = "https://kit.fontawesome.com/c66d4e7704.js", i.setAttribute("data-observe-mutations", "true"), i.setAttribute("data-search-pseudo-elements", "true"), f.body.appendChild(i));
         t.append("<style>" + kr + ' .stamped-rewards-window { font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; }<\/style>');
         ki() && t.attr("data-mobile", !0);
         e.customer && e.customer.customerEmail ? t.attr("data-logged-in", !0) : t.attr("data-logged-in", !1);
         e.branding == !0 && t.attr("data-branding", !0);
         $wrapperCards = r("#stamped-rewards-cards", f);
         $wrapperViews = r("#stamped-rewards-views", f);
         gf();
         eu("rewards");
         h("stamped:launcher:loaded")
      }, 1e3)
   }

   function gf() {
      function u() {
         let t = n.StampedGlobalOptions.storeUrl ? encodeURIComponent(n.StampedGlobalOptions.storeUrl) : n.StampedGlobalOptions.sId;
         return r.ajax({
            type: "GET",
            dataType: "json",
            url: `${o.SERVICE_HOST.svc_identity}/shop/${t}/check-feature/loyalty2023`,
            success: function (n) {
               l = n.hasFeature || p ? !0 : !1
            },
            error: function () {
               l = !1;
               console.log("Error, default to Loyalty 1.0...")
            }
         }), l
      }
      r(f).on("click", ".stamped-rewards-header-close", function () {
         ct()
      });
      r(f).on("click", "#launcherSendAffiliateInvite", function () {
         let n = r("#launcherSendAffiliateInvite", f);
         n[0].innerHTML == "Send more" ? cu() : hu()
      });
      var i;
      r(t).on("touchstart", function () {
         i = !0
      });
      r(t).on("touchmove", function () {
         i = !1
      });
      r(t).on("click touchend", function (n) {
         if (n.type === "click" && (i = !0), i && n.target.id !== "stamped-rewards-init" && !r(n.target).parents("#stamped-rewards-init").length && !r(n.target).parents(".stamped-rewards-base").length && !r(n.target).parents(".stamped-rewards-launcher").length && !r(n.target).parents("#stamped-rewards-widget").length) {
            var t = r(".stamped-rewards-base", g),
               u = t.hasClass("opened");
            setTimeout(function () {
               u && StampedFn.toggleLauncher()
            }, 300)
         }
      });
      r(f).on("click", '[data-campaign-completed="false"] .stamped-reward-card-button-earn', function () {
         var s = r(this).parent(".stamped-rewards-card-earn"),
            t = r(this),
            a, b;
         let l = s.data("campaign-id"),
            i = s.data("event-type");
         if (u()) {
            if (i === "celebrateBirthday") {
               let u = r(".stamped-rewards-birthday-input-holder", f);
               u.show();
               let c = r(".stamped-rewards-birthday-input-holder select.DOBDay option:checked", f).val(),
                  a = r(".stamped-rewards-birthday-input-holder select.DOBMonth option:checked", f).val(),
                  v = r(".stamped-rewards-birthday-input-holder select.DOBYear option:checked", f).val();
               if (c && a && v) {
                  let f = v + "-" + a + "-" + c;
                  t.addClass("btn-loading");
                  t.html('<span class="stamped-button-icon stamped-button-loading"><\/span>');
                  let y = n.StampedGlobalOptions.storeUrl,
                     p = n.StampedGlobalOptions.sId,
                     w = n.StampedGlobalOptions.apiKey;
                  r.ajax({
                     type: "POST",
                     url: `${o.SERVICE_HOST.svc_loyalty_widget}/customer/update/date-of-birth?storeUrl=${y}&sId=${p}&apiKey=${w}`,
                     data: {
                        email: e.customer.customerEmail,
                        authToken: e.customer.authToken,
                        dateOfBirth: f
                     },
                     dataType: "json",
                     success: function (n) {
                        t.html('<span class="stamped-button-icon stamped-button-completed"><i class="fa-solid fa-check"><\/i><\/span>');
                        t.attr("disabled", !0);
                        u.hide();
                        s.attr("data-campaign-completed", "true");
                        s.attr("data-birthday", "true");
                        e.customer.dateBirthday = !0;
                        rr(l, i);
                        h("stamped:rewards:redeemed", {
                           detail: n
                        })
                     },
                     error: function (n) {
                        console.log("Birthday update failed");
                        console.log(n)
                     }
                  })
               }
               return
            }
            t.addClass("btn-loading");
            t.html('<span class="stamped-button-icon stamped-button-loading"><\/span>');
            const u = function () {
                  setTimeout(function () {
                     t.removeClass("btn-loading");
                     t.addClass("stamped-button-disabled");
                     t.hide()
                  }, 200)
               },
               c = function () {
                  t.removeClass("btn-loading");
                  t.addClass("stamped-button-disabled");
                  t.hide()
               };
            rr(l, i, u, c);
            return
         }
         if (i == "AccountBirthday") {
            a = r(".stamped-rewards-birthday-input-holder", f);
            a.show();
            var v = r(".stamped-rewards-birthday-input-holder select.DOBDay option:checked", f).val(),
               p = r(".stamped-rewards-birthday-input-holder select.DOBMonth option:checked", f).val(),
               w = r(".stamped-rewards-birthday-input-holder select.DOBYear option:checked", f).val();
            v && p && w && (c(t, "loading", !0), b = w + "-" + p + "-" + v, ur({
               campaignId: l,
               campaignEventType: i,
               birthday: b,
               callback: function () {
                  c(t, "active", !0, null, function () {
                     s.attr("data-campaign-completed", "true");
                     s.attr("data-birthday", "true");
                     gi()
                  });
                  a.hide()
               }
            }))
         } else i == "Review" || i == "ReviewPhoto" || i == "ReviewVideo" ? (ou("reviews"), y("main")) : (c(t, "loading", !0), ur({
            campaignId: l,
            campaignEventType: i,
            callback: function () {
               c(t, "active", !0, null, function () {
                  s.attr("data-campaign-completed", "true")
               })
            }
         }))
      });
      r(f).on("click", '[data-campaign-redeemable="true"] .stamped-reward-card-button-spend', function () {
         var n = r(this),
            i = n.parent(".stamped-rewards-card-spend"),
            t = i.data("campaign-id"),
            f = i.data("coupon-type");
         if (u()) {
            c(n, "loading", !0);
            let i = function (t) {
               let i = {};
               i.couponCode = t.code;
               i.title = t.title;
               y("view-coupon", null, i);
               c(n, "active", !0, 1)
            };
            fr(t, f, i);
            return
         }
         f == "Variable" ? y("view-redeem-variable", null, {
            entityId: t
         }) : (c(n, "loading", !0), su({
            campaignId: t,
            callback: function (t) {
               y("view-coupon", null, t.rewardCampaignCoupon);
               c(n, "active", !0, 1)
            }
         }))
      });
      r(f).on("click", ".stamped-reward-referral-platforms button", function () {
         var n = r(this).attr("href");
         n && re(n)
      });
      r(f).on("click", ".stamped-rewards-header-menu span", function () {
         var n = r(this).attr("data-target"),
            t = $wrapperCards.attr("data-target");
         n != t && ($wrapperCards.attr("data-target", n), eu(n), r(".stamped-rewards-content-container", f).scrollTop(0), r(".stamped-rewards-header-menu .active", f).removeClass("active"), r(this, f).addClass("active"))
      });
      r(".stamped-rewards-content-container", f).on("scroll", function () {
         var i = r(".stamped-rewards-content-container", f).scrollTop(),
            u, n, t;
         if (i <= 1) {
            r(".stamped-rewards-background", f).height("200px");
            r(".stamped-rewards-header", f).height("auto");
            return
         }
         u = r(".stamped-rewards-header-content", f).outerHeight() + 15;
         r(".stamped-rewards-header", f).css("min-height", "70px");
         n = 200;
         n = n - i;
         r(".stamped-rewards-background", f).height(n);
         t = u;
         t = t - i;
         r(".stamped-rewards-header", f).height(t)
      })
   }

   function ne(n) {
      StampedFn.toggleLauncher(!0);
      setTimeout(function () {
         var t = r(n, f).offset();
         r(".stamped-rewards-content-container", f).scrollTop(t.top - 155);
         s(r(".stamped-rewards-content-container", f));
         s(t);
         s(n)
      }, 500)
   }

   function ou(n) {
      n == "reviews" && r('.stamped-rewards-header-menu span[data-target="reviews"]', f).trigger("click")
   }

   function y(t, i, u, s = null) {
      var h, k, c, v, a, w, g, b;
      if (ht = r(".stamped-rewards-window", f), r(".stamped-rewards-content-container", f).scrollTop(0), r(".stamped-rewards-header-nav", f).attr("onclick", "StampedFn.loadLauncherView('main');"), r("body", f).attr("data-view", t), h = r(i).attr("data-title"), ht)
         if (t == "main") ht.removeClass("stamped-rewards-nav-small"), ht.addClass("stamped-rewards-nav-big"), r(".stamped-rewards-header-main, .stamped-rewards-header-menu", f).fadeIn(), r(".stamped-rewards-header-small", f).hide(), k = r(".stamped-rewards-header-content", f).outerHeight() + 15, r(".stamped-rewards-header", f).height(k), r(".stamped-rewards-background", f).height("200"), $wrapperViews.hide(), $wrapperCards.fadeIn();
         else {
            if (c = !1, u && u.reload == !0) c = !1;
            else if (t == "view-redeem-variable") c = !1;
            else
               for (v = 0; v < e.html.views.length; v++) a = e.html.views[v], a.key == t && (a.title && (h = a.title), c = !0, tr(a.html), ir(t, h, u));
            if (!c) {
               tr();
               ir(t, h, u);
               w = null;
               u && u.entityId && (w = u.entityId);
               g = o.is_test;
               let f = n.StampedGlobalOptions.storeUrl ? encodeURIComponent(n.StampedGlobalOptions.storeUrl) : n.StampedGlobalOptions.sId;
               r.ajax({
                  type: "GET",
                  dataType: "json",
                  url: `${o.SERVICE_HOST.svc_identity}/shop/${f}/check-feature/loyalty2023`,
                  success: function (n) {
                     l = n.hasFeature || p ? !0 : !1
                  },
                  error: function () {
                     l = !1;
                     console.log("Error, default to Loyalty 1.0...")
                  }
               });
               b = o.SECURE_ENDPOINT + "/v2/rewards/cardview";
               l && (b = `${o.SERVICE_HOST.svc_loyalty_widget}/templates/cardview`);
               const i = {
                  apiKey: n.StampedGlobalOptions.apiKey,
                  sId: n.StampedGlobalOptions.sId,
                  storeUrl: n.StampedGlobalOptions.storeUrl,
                  viewKey: t,
                  entityId: w,
                  referralCode: o.referral_code,
                  isTest: g
               };
               p && (i.testLoyalty2023 = p, d && (i.testLoyaltyAccount = d));
               r.ajax({
                  type: "POST",
                  url: b + "?" + r.param(i),
                  data: e.customer,
                  dataType: "json",
                  success: function (n) {
                     n && n.html ? (e.html.views.push(n), setTimeout(function () {
                        var i = !1;
                        n.key === "view-redeem-variable" && (i = !0, s && s());
                        tr(n.html, !1, i);
                        ir(t, n.title || h, u)
                     }, 1e3)) : y("main")
                  },
                  error: function () {
                     y("main")
                  }
               })
            }
         }
   }

   function tr(n, t, i) {
      if (n) {
         var u = r(n);
         $wrapperViews.html(u);
         $wrapperViews.removeClass("loading")
      } else $wrapperViews.html(""), r(".stamped-view-loader", $wrapperViews).length || $wrapperViews.append(r('<div class="stamped-view-loader"><\/div>')), $wrapperViews.addClass("loading");
      t != !1 && (ht.addClass("stamped-rewards-nav-small"), ht.removeClass("stamped-rewards-nav-big"), r(".stamped-rewards-header-main, .stamped-rewards-header-menu", f).hide(), r(".stamped-rewards-header-small", f).fadeIn(), $wrapperCards.hide(), $wrapperViews.fadeIn());
      i && StampedFn.toggleLauncher(!0)
   }

   function te(n) {
      r(".stamped-rewards-header-small-title", f).text(n)
   }

   function ie(n, t) {
      r(".stamped-rewards-header-nav", f).attr("onclick", "StampedFn.loadLauncherView('" + n + "', null, { reload: " + (t || !1) + "});")
   }

   function ir(n, t, i) {
      var o = (i ? i.viewTitle : t) || t,
         u, s, h;
      if (n == "view-coupon" && (r(".stamped-reward-coupon-code", $wrapperViews).text(i.couponCode), r(".stamped-reward-card-title", $wrapperViews).html(i.title), ie("view-your-rewards", !0)), n == "view-earnings" && e && e.customer && (u = r('[data-event-type="AccountBirthday"]', f), l && (u = r('[data-event-type="celebrateBirthday"]', f)), u.length && (s = e.customer.dateBirthday, s ? u.attr("data-birthday", "true") : (u.attr("data-birthday", "false"), u.prepend(r(".stamped-rewards-birthday-input-holder", f))))), n == "view-referrals-claim", n == "view-redeem-variable" && (h = ".range-slider__range", $selectorInput = r(h, $wrapperViews), $selectorInput.length)) {
         var a = $selectorInput.data("format-points"),
            v = $selectorInput.data("format-points-name"),
            p = $selectorInput.data("currency"),
            w = $selectorInput.attr("step"),
            b = $selectorInput.data("discount-value");
         $selectorInput.on("input", function () {
            n()
         });
         r(".stamped-rewards-content-action-button ", $wrapperViews).on("click", function () {
            t(this)
         });

         function n() {
            var n = $selectorInput.val(),
               t = n / w * b,
               i = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: p
               });
            r("#redeem-points", $wrapperViews).text(a.formatStringStamped(n, v));
            r("#redeem-amount", $wrapperViews).text(i.format(t))
         }

         function t(n) {
            var t = r(n),
               u = $selectorInput.val(),
               f = {
                  campaignId: i.entityId,
                  points: u
               };
            if (l) {
               c(t, "loading", !0);
               fr(i.entityId, "variableDiscount", function (n) {
                  let r = n.code,
                     i = n.title;
                  c(t, "active", !0, 1);
                  y("view-coupon", null, {
                     couponCode: r,
                     title: i,
                     viewTitle: i
                  })
               }, null, u);
               return
            }
            StampedFn.rewardsRedeem(r(n), f, function (n) {
               var i = n.rewardCampaignCoupon.couponCode,
                  t = n.rewardCampaignCoupon.title;
               y("view-coupon", null, {
                  couponCode: i,
                  title: t,
                  viewTitle: t
               })
            })
         }
         n()
      }
      o && te(o)
   }

   function rr(t, i, u = null, f = null) {
      const v = e.shopId,
         l = e.customer.customerId;
      var a = e.links;
      if (!l) {
         n.location.href = a.signup;
         return
      }
      n.StampedGlobalOptions.sId = e.shopId;
      let c = e.campaigns.earnings.filter(n => n.id === t)[0] || e.campaigns.tierEarnings.filter(n => n.id === t)[0],
         s = "";
      switch (i) {
         case "facebookLike":
            s = "socials/facebook_like";
            n.open(c.socialLink, "_blank");
            break;
         case "facebookShare":
            s = "socials/facebook_share";
            n.open(c.socialLink, "_blank");
            break;
         case "instagramFollow":
            s = "socials/instagram_follow";
            n.open(c.socialLink, "_blank");
            break;
         case "twitterFollow":
            s = "socials/twitter_follow";
            n.open(c.socialLink, "_blank");
            break;
         case "twitterShare":
            s = "socials/twitter_share";
            n.open(c.socialLink, "_blank");
            break;
         case "youTubeSubscribe":
            s = "socials/youtube_subscribe";
            n.open(c.socialLink, "_blank");
            break;
         case "tikTokFollow":
            s = "socials/tiktok_follow";
            n.open(c.socialLink, "_blank");
            break;
         case "pinterestFollow":
            s = "socials/pinterest_follow";
            n.open(c.socialLink, "_blank");
            break;
         case "celebrateBirthday":
            s = "milestones/birthday";
            break;
         case "subscribeNewsletter":
            s = "subscriptions/newsletter";
            break;
         case "writeReview":
         case "uploadVideo":
         case "uploadPhoto":
            ou("reviews");
            y("main");
            return
      }
      if (!s) {
         console.log(`Error: Earn Activity event ${s} not matched.`);
         return
      }
      r.ajax({
         type: "POST",
         url: `${o.SERVICE_HOST.svc_loyalty_widget}/customer/transactions`,
         data: {
            event: s,
            ruleCorrelationId: t,
            customerId: l,
            authToken: e.customer.authToken,
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: e.shopId || n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl
         },
         dataType: "json",
         success: function (n) {
            u && u(n);
            uu();
            h("stamped:rewards:redeemed", {
               detail: n
            })
         },
         error: function () {
            console.log("Error submitting earn event transaction.");
            f && f()
         }
      })
   }

   function ur(t) {
      var i, r, u;
      t = t || {};
      i = t.campaignEventType;
      i == "AccountBirthday" ? bf(t) : (i == "SocialFollowInstagram" || i == "SocialFollowFacebook" || i == "SocialShareFacebook" || i == "SocialFollowTwitter" || i == "SocialShareTwitter" || i == "SocialYouTube" || i == "SocialFollowTiktok" || i == "SocialShareTiktok" || i == "SocialFollowPinterest") && (fu({
         campaignId: t.campaignId,
         callback: t.callback
      }), r = e.links, i == "SocialFollowInstagram" ? (u = n.open(r.instagram, "_blank"), u.focus()) : i == "SocialFollowFacebook" ? n.open("https://www.facebook.com/plugins/page.php?href=" + r.facebook, "_blank", "location=yes,height=250,width=340,top=50,left=50,scrollbars=yes,status=yes") : i == "SocialShareFacebook" ? n.open("https://www.facebook.com/sharer/sharer.php?u=" + r.shop, "_blank", "location=yes,height=500,width=500,top=50,left=50,scrollbars=yes,status=yes") : i == "SocialFollowTwitter" ? (u = n.open(r.twitter, "_blank"), u.focus()) : i == "SocialShareTwitter" ? n.open("https://twitter.com/intent/tweet?url=" + r.shop, "_blank", "location=yes,height=500,width=500,top=50,left=50,scrollbars=yes,status=yes") : i == "SocialYouTube" ? n.open(r.youtube, "_blank") : i == "SocialFollowTiktok" || i == "SocialShareTiktok" ? n.open(r.tiktok, "_blank") : i == "SocialFollowPinterest" && n.open(r.pinterest, "_blank"))
   }

   function su(n) {
      n = n || {};
      pf({
         campaignId: n.campaignId,
         callback: n.callback
      })
   }

   function fr(t, i, u = null, f = null, s = null, c = null) {
      const p = e.shopId,
         a = e.customer.customerId;
      if (!a) {
         n.location.href = shopLinks.signup;
         return
      }
      n.StampedGlobalOptions.sId = e.shopId;
      let v = e.campaigns.spendings.filter(n => n.id === t)[0] || e.campaigns.tierSpendings.filter(n => n.id === t)[0],
         l = "";
      switch (i) {
         case "freeShipping":
            l = "redeem/shipping";
            break;
         case "giftCard":
            l = "redeem/gift_card";
            break;
         case "posPercentageOff":
            l = "redeem/percentage_pos";
            break;
         case "percentageOffDiscount":
            l = "redeem/percentage";
            break;
         case "posFixedAmountDiscount":
            l = "redeem/fixed_pos";
            break;
         case "fixedAmountDiscount":
            l = "redeem/fixed";
            break;
         case "variableDiscount":
            l = "redeem/variable";
            break;
         case "freeProduct":
            l = "redeem/product";
            break;
         case "storeCredit":
            l = "redeem/store_credit"
      }
      if (!l) {
         console.log(`Error: Spend Activity event ${l} not matched.`);
         return
      }
      if (l === "redeem/variable" && !s) {
         y("view-redeem-variable", null, {
            entityId: t
         }, c);
         return
      }
      r.ajax({
         type: "POST",
         url: `${o.SERVICE_HOST.svc_loyalty_widget}/customer/transactions`,
         data: {
            event: l,
            ruleCorrelationId: v.ruleCorrelationId,
            points: s,
            customerId: a,
            authToken: e.customer.authToken,
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: e.shopId || n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl
         },
         dataType: "json",
         success: function (n) {
            uu(function (t) {
               u && u(n, t)
            });
            h("stamped:rewards:redeemed", {
               detail: {
                  customerId: n.customerId,
                  event: n.event,
                  code: n.code,
                  title: n.title,
                  rewardCampaignCoupon: {
                     couponCode: n.code
                  }
               }
            })
         },
         error: function () {
            console.log("Error submitting spend event transaction.");
            f && f()
         }
      })
   }

   function re(t) {
      n.open(t, "_blank", "location=yes,height=500,width=500,top=50,left=50,scrollbars=yes,status=yes")
   }

   function ci(n) {
      var t = r("#stamped-rewards-apply-code", f);
      n == "active" && r(".stamped-rewards-coupons-view", f).attr("data-applied", "true");
      c(t, n)
   }

   function ue() {
      var n = r(".stamped-reward-referral-wrapper .stamped-reward-copy-icon", f),
         i = e.customer.urlReferral,
         t;
      dr(i);
      t = n.html();
      n.html('<i class="far fa-check"><\/i>');
      setTimeout(function () {
         n.html(t)
      }, 3e3)
   }

   function fe(n) {
      var u, s, c, l;
      $btn = r("#stamped-rewards-apply-code", f);
      var t = r(".stamped-reward-coupon-code", f).text(),
         a = $btn.text(),
         v = $btn.data("type"),
         i = e.links;
      if (ci("loading"), u = o.is_rewards_code_copy || a.indexOf("Copy") > -1 || v == "copy", h("stamped:rewards:coupon:applied", {
            detail: t
         }), u == !0) s = t, dr(s), ci("active");
      else {
         t = encodeURIComponent(t);
         let u;
         u = e.shopId === 67527 ? `${i.shop}/discount/${t}?redirect=/checkout` : i.shop + "/checkout?discount=" + t;
         c = "GET";
         l = {};
         o.rewards_apply_discount_url_format && (u = rewards_apply_discount_url_format.replace("{0}", t));
         n && n.skip || r.ajax({
            type: c,
            url: u,
            data: l,
            success: function () {
               ci("active")
            }
         })
      }
      return {
         code: t,
         setState: ci
      }
   }

   function hu() {
      let u = r("#email-to", f),
         s = r("#email-message", f),
         t = r("#launcherSendAffiliateInvite", f),
         i = u.val(),
         h = s.val(),
         w = StampedFn.getOptions();
      if (i) {
         c(t, "loading", !0);
         let l = i.split(",").map(function (n) {
               return n.trim()
            }),
            a = e.shopId || n.StampedGlobalOptions.sId,
            v = n.StampedGlobalOptions.apiKey,
            y = `${o.SERVICE_HOST.svc_loyalty_widget}/customer/affiliate/send-invite?sId=${a}&apiKey=${v}`,
            p = l.map(n => new Promise((t, i) => {
               r.ajax({
                  type: "POST",
                  url: y,
                  data: {
                     to: n,
                     from: e.customer.customerEmail,
                     customMessage: h
                  },
                  success: function (n) {
                     t(n)
                  },
                  error: function (n) {
                     var t = n.responseJSON ? n.responseJSON.message : n.responseText ? JSON.parse(n.responseText).message : "Error: Cannot send email.";
                     i(t)
                  }
               })
            }));
         Promise.all(p).then(() => {
            r(".stamped-reward-card-success", f).show()
         }).catch(n => {
            r("#email-to", f).css("border-color", "#FF5656"), r(".stamped-reward-card-error", f).text(n)
         });
         setTimeout(function () {
            t.css("width", "fit-content");
            t.html("Send more");
            t.removeClass("stamped-button-disabled")
         }, 1e3)
      }
   }

   function cu() {
      let n = r("#email-to", f),
         i = r(".stamped-reward-card-error", f),
         u = r("#email-message", f),
         e = r(".stamped-reward-card-success", f),
         t = r("#launcherSendAffiliateInvite", f),
         o = t.attr("data-original-text");
      n.val("");
      n.css("border-color", "#E8E8EB");
      i.text("");
      u.val("");
      e.hide();
      t.html(o)
   }

   function ee(t) {
      var o = r("#email-to", f),
         s = r("#email-message", f),
         i = r(t),
         u = o.val(),
         h = s.val(),
         l = StampedFn.getOptions();
      u && (c(i, "loading", !0), r.ajax({
         type: "POST",
         url: l.SECURE_ENDPOINT + "/v2/rewards/referral/send?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            fromEmail: e.customer.customerEmail,
            toEmail: u,
            message: h,
            debug: null
         }),
         data: {},
         success: function () {},
         error: function () {},
         complete: function () {
            c(i, "active", !1, 3e4)
         }
      }))
   }

   function oe() {
      let h = r("#referral_claim_email", f),
         t = r("#stamped-rewards-claim-code", f),
         i = h.val(),
         u = {};
      n.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, t, i) {
         u[t] = i
      });
      const s = u.stamped_referral_code;
      if (i && s) {
         c(t, "loading", !0);
         let l = e.shopId || n.StampedGlobalOptions.sId,
            a = n.StampedGlobalOptions.apiKey,
            v = `${o.SERVICE_HOST.svc_loyalty_widget}/customer/affiliate/claim-reward?sId=${l}&apiKey=${a}`;
         r.ajax({
            type: "POST",
            url: v,
            data: {
               claimedBy: i,
               referralCode: s
            },
            dataType: "json",
            success: function (n) {
               y("view-coupon", null, {
                  couponCode: n.couponCode,
                  title: "Your Rewards",
                  viewTitle: "Your Reward"
               })
            },
            error: function (n) {
               let t = n.responseJSON ? n.responseJSON.message : n.responseText ? JSON.parse(n.responseText).message : "You are not eligible for the reward.";
               r(".stamped-reward-card-error", f).text(t)
            },
            complete: function () {
               c(t, "active", !0, 1e3)
            }
         })
      }
   }

   function se() {
      var e = r("#referral_claim_email", f),
         t = r("#stamped-rewards-claim-code", f),
         i = e.val(),
         u = StampedFn.getOptions();
      i && (c(t, "loading", !0), r.ajax({
         type: "POST",
         url: u.SECURE_ENDPOINT + "/v2/rewards/referral/claim?" + r.param({
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            email: i,
            referralCode: u.referral_code,
            debug: null
         }),
         dataType: "json",
         success: function (n) {
            y("view-coupon", null, {
               couponCode: n.couponCode,
               title: n.title,
               viewTitle: n.title
            })
         },
         error: function (n) {
            var t = n.responseJSON ? n.responseJSON.message : n.responseText ? JSON.parse(n.responseText).message : "You are not eligible for the reward.";
            r(".stamped-reward-card-error", f).text(t)
         },
         complete: function () {
            c(t, "active", !0, 1e3)
         }
      }))
   }

   function he(n) {
      var t = e.links;
      n == "login" ? top.location.href = t.login : n == "signup" && (top.location.href = t.signup)
   }

   function c(n, t, i, r, u) {
      if (t == "loading") {
         var f = n.width();
         n.attr("data-original-text", n.text());
         n.addClass("stamped-button-disabled");
         f >= 10 && n.width(f);
         n.html('<span class="stamped-button-icon stamped-button-loading"><\/span>')
      } else i || n.html('<span class="stamped-button-icon stamped-button-completed"><i class="far fa-check"><\/i><\/span>'), setTimeout(function () {
         var t = n.attr("data-original-text");
         n.html(t);
         n.removeClass("stamped-button-disabled");
         n.width("auto");
         u && u()
      }, r || 7878)
   }

   function lu() {
      var f, e, l, a, t, i, c;
      s("Func initWidgetType");
      f = r(".stamped-container", u).attr("data-widget-style");
      f == "slider" ? (et = r(".stamped-reviews", u), s(et, 1), e = et && et.hasClass("slick-initialized"), s("Func initWidgetType: var initialized:" + e, 1), e ? (et.slick("slickAdd", r(".stamped-reviews > .stamped-review")), l = r('.stamped-reviews [class*="stamped-review"]', u).length, l <= 0 ? r("button.slick-arrow").hide() : r("button.slick-arrow").show()) : yi("//cdn.stamped.io/cdn/js/slick.min.js", function () {
         et.slick(o.slick_options);
         et.on("afterChange", function (n, t, i) {
            var f = r(".slick-next.slick-arrow").hasClass("slick-disabled"),
               u;
            f && (_lastSlide = i, u = r(".stamped-pagination .next a"), u.length && u.click())
         })
      })) : f == "masonry" && (a = {
         1500: 4,
         1200: 3,
         700: 2,
         500: 2
      }, t = {
         container: ".stamped-reviews",
         margin: {
            x: 15,
            y: 15
         },
         breakAt: a,
         columns: 4
      }, n.macyInstanceConfig && (n.macyInstanceConfig.breakAt && (t.breakAt = n.macyInstanceConfig.breakAt), n.macyInstanceConfig.columns && (t.columns = n.macyInstanceConfig.columns)), yi("//cdn.stamped.io/cdn/js/macy2.js", function () {
         n.macyInstanceStamped = Macy(t);
         h("stamped:macy:loaded")
      }));
      r(".stamped-sort-select").length && (i = u.attr("data-sort") || r(".stamped-container", u).attr("data-widget-sort"), i && (c = r('.stamped-sort-select option[value="' + i + '"]'), c.css("display") && c.css("display") !== "none" && r(".stamped-sort-select").val(i)))
   }

   function au(n) {
      u && u.length && !n || (u = r(v));
      dt()
   }

   function vu() {
      s("Creating Q&A");
      or()
   }

   function yu() {
      ge()
   }

   function pu() {
      var i = r("#stamped-reviews-widget").length,
         n, t;
      s("Creating display widgets " + i + " found");
      h("stamped:widget:reloading");
      i > 0 && (n = [], t = 1, r("[id=stamped-reviews-widget]").each(function () {
         var i = r(this),
            u;
         i.attr("data-element-id", t);
         u = cr(i);
         n.push(u);
         t++
      }), lr("ugc", n))
   }

   function wu() {
      var t = e,
         i, u, s, c, a, v, f, h;
      if (t.points && (i = t.points.points, r("[id=stamped-rewards-points-placeholder]").attr("onclick", "StampedFn.toggleRewardsModal();"), r("[id=stamped-rewards-points-placeholder]").html(t.points.points_current_with_name), r('[id=stamped-rewards-points-placeholder][data-type="points-only"]').html(i), t.customer && r("[id=stamped-rewards-viptier-placeholder]").html(t.customer.vipTierTitle), u = r('[id=stamped-rewards-points-placeholder][data-type="points-price"]'), u.length && i >= 0 && (s = u.attr("data-ratio"), c = u.attr("data-symbol"), s && (a = parseInt(s), a && (v = i > 0 ? (i / s).toFixed(2) : 0, u.html(c + v))))), t.customer && r("[id=stamped-rewards-referral-placeholder]").html(t.customer.urlReferral), r("#stamped-rewards-widget").length > 0) {
         f = [];
         h = 1;
         r("[id=stamped-rewards-widget]").each(function () {
            var n = r(this),
               t;
            n.attr("data-element-id", h);
            t = cr(n);
            f.push(t);
            h++
         });
         let t = n.StampedGlobalOptions.storeUrl ? encodeURIComponent(n.StampedGlobalOptions.storeUrl) : n.StampedGlobalOptions.sId;
         r.ajax({
            type: "GET",
            dataType: "json",
            url: `${o.SERVICE_HOST.svc_identity}/shop/${t}/check-feature/loyalty2023`,
            success: function (n) {
               n.hasFeature || p ? (l = !0, uo(f)) : lr("rewards", f)
            },
            error: function () {
               console.log("Error, default to Loyalty 1.0...");
               lr("rewards", f)
            }
         })
      }
   }

   function bu() {
      var n = r(u).attr("data-limit-words") || r(".stamped-container", u).attr("data-widget-limit-words"),
         t = r(u).attr("data-keyword"),
         i = r(u).attr("data-search");
      (n && n > 0 || t || i) && r(".stamped-review", u).each(function () {
         var u = r(".stamped-review-content-body:first", this),
            f, e, o;
         u.length && (f = r(u).html(), f.indexOf("stamped-review-read-more") <= -1 && (t || i ? (t && (e = nf(f, t)), i && (e = nf(f, i)), r(u).html(e)) : (o = f.split(" "), o.length > n && (txtTrimmed = o.slice(0, n).join(" ") + "...", r(u).html(txtTrimmed), r(u).append('<a class="stamped-review-read-more" style="margin-left:10px; cursor:pointer;">read more<\/span>'), r(u).append('<span class="original-review" style="display:none !important;">' + f + "<\/span>")))))
      });
      r(".stamped-review-reply .stamped-review-reply-body, .stamped-review-reply .stamped-review-content-body").each(function () {
         if (!r(this).attr("data-link-processed")) {
            r(this).attr("data-link-processed", !0);
            var n = r(this).html();
            r(this).html(n.linkify())
         }
      })
   }

   function ku() {
      var f = r(u).attr("data-keywords"),
         n, t;
      if (f) {
         for (r(".stamped-reviews-filter-label").show(), r(".stamped-summary-keywords").show(), r(u).removeAttr("data-keywords"), r(".stamped-summary-keywords-list", u).html(""), n = "", t = f.split(","), i = 0; i < t.length; i++) n += "<li>" + t[i] + "<\/li>";
         r(n).appendTo(r(".stamped-summary-keywords-list", u))
      }
   }

   function ce() {
      r(t).on("click keypress", ".stamped-summary-actions-mobile-filter", function (n) {
         if (a(n) === !0) {
            var t = r(".stamped-filters-wrapper");
            t.hasClass("stamped-mobile-visible") ? (t.slideUp(), t.removeClass("stamped-mobile-visible")) : (t.slideDown(), t.addClass("stamped-mobile-visible"))
         }
      });
      r(t).on("click keypress", ".stamped-summary-keywords-list li", function (n) {
         if (a(n) === !0) {
            var t = r(this);
            t.hasClass("selected") ? (r(".stamped-summary-keywords-list li").removeClass("selected"), r(u).removeAttr("data-keyword")) : (r(".stamped-summary-keywords-list li").removeClass("selected"), t.addClass("selected"), r(u).attr("data-keyword", t.text().trim()));
            r(".stamped-summary-actions-clear").show();
            ot(1)
         }
      });
      r(t).on("change keyup", ".stamped-reviews-search-input", function (n) {
         var t = r(this).val();
         t ? (r(".stamped-reviews-search-clear").show(), r(".stamped-reviews", u).attr("data-filtered", "true")) : (r(".stamped-reviews-search-clear").hide(), r(".stamped-reviews", u).removeAttr("data-filtered"));
         n.keyCode == 13 && (t = r(this).val(), t && (r(u).attr("data-search", t.trim()), r(".stamped-summary-actions-clear").show(), er(), ot(1)))
      });
      r(t).on("click keypress", ".stamped-reviews-search-button", function () {
         if (a(event) === !0) {
            var n = r(".stamped-reviews-search-input").val();
            n && (r(u).attr("data-search", n.trim()), r(".stamped-summary-actions-clear").show(), er(), ot(1))
         }
      });
      r(t).on("click keypress", ".stamped-reviews-search-clear", function (n) {
         a(n) === !0 && (r(".stamped-reviews-search-clear").hide(), r(".stamped-reviews-search-input").val(""), r(u).removeAttr("data-search"), ot(1))
      });
      r(t).on("click keypress", ".stamped-summary-actions-clear", function (n) {
         if (a(n) === !0) {
            var t = r(this).data("type");
            uf(t)
         }
      });
      r(t).on("change keyup", ".stamped-questions-search-input", function (n) {
         var t = r(this).val();
         t ? (r(".stamped-questions-search-clear").show(), r(".stamped-questions", u).attr("data-filtered", "true")) : (r(".stamped-questions-search-clear").hide(), r(".stamped-questions", u).removeAttr("data-filtered"));
         n.keyCode == 13 && (t = r(this).val(), t && (r(u).attr("data-search-qna", t.trim()), r(".stamped-summary-actions-clear").show(), ui()))
      });
      r(t).on("click keypress", ".stamped-questions-search-button", function () {
         if (a(event) === !0) {
            var n = r(".stamped-questions-questions-input").val();
            n && (r(u).attr("data-search-qna", n.trim()), r(".stamped-summary-actions-clear").show(), ui())
         }
      });
      r(t).on("click keypress", ".stamped-questions-search-clear", function (n) {
         a(n) === !0 && (r(".stamped-questions-search-clear").hide(), r(".stamped-questions-search-input").val(""), r(u).removeAttr("data-search-qna"), ui())
      })
   }

   function du() {
      r(t).on("click keypress", ".stamped-review-read-more", function (t) {
         if (a(t) === !0) {
            r(this).closest(".stamped-review-content-body").find(".stamped-review-read-more").hide();
            var i = r(this).closest(".stamped-review-content-body").find(".original-review").html();
            r(this).closest(".stamped-review-content-body").html(i);
            n.macyInstanceStamped && n.macyInstanceStamped.reInit()
         }
      })
   }

   function le() {
      var n = ".stamped-share-button, .stamped-share-icon";
      r(t).off("click keypress", n).on("click keypress", n, function (n) {
         if (a(n) === !0) {
            var t = r(this).parent().find(".stamped-share-links");
            t.fadeToggle()
         }
      })
   }

   function ae() {
      r(t).on("click keypress", ".stamped-summary-ratings .summary-rating", function (n) {
         if (a(n) === !0) {
            var t = r(this).find(".summary-rating-bar"),
               i = t.attr("data-rating"),
               u = t.hasClass("selected");
            r(".stamped-summary-ratings .summary-rating").each(function () {
               r(this).removeClass("selected")
            });
            r(".summary-rating-bar").each(function () {
               r(this).removeClass("selected")
            });
            i && (u ? (ot(1), r(".stamped-summary-ratings").removeClass("selected")) : (t.addClass("selected"), r(this).addClass("selected"), r(".stamped-summary-ratings").addClass("selected"), ot(1, i)))
         }
      })
   }

   function er() {
      r(".stamped-summary-ratings").removeClass("selected");
      r(".stamped-summary-ratings .summary-rating").each(function () {
         r(this).removeClass("selected")
      });
      r(".summary-rating-bar").each(function () {
         r(this).removeClass("selected")
      })
   }

   function ve() {
      r(t).on("mouseover mouseout", ".stamped-form-review-rating a.fa", function (n) {
         var i, t, u;
         i = n.currentTarget;
         u = r(i).attr("data-value");
         t = r(i).parent();
         "mouseover" === n.type ? (t.find("a.fa:lt(" + u + ")").removeClass("fa-star-o").addClass("fa-star"), t.find("a.fa:gt(" + (u - 1) + ")").removeClass("spr-icon-star-hover").addClass("fa-star-o")) : t.find("a.fa").removeClass("fa-star").addClass("fa-star-o")
      })
   }

   function ye(i) {
      r.ajax({
         type: "GET",
         url: o.SECURE_ENDPOINT + "/widget/reviews",
         data: {
            reviewId: i,
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            type: "single",
            showAvatar: "True",
            minRating: 1
         },
         success: function (n) {
            n.data && StampedFn.openUGCModal([n.data], 0, t, 1, !1, 0)
         },
         error: function () {}
      })
   }

   function gu() {
      function e(n, t) {
         var i = new FileReader;
         i.onload = function (n) {
            var r = new DataView(n.target.result),
               o, i, e, u, s, f;
            if (r.getUint16(0, !1) != 65496) return t(-2);
            for (o = r.byteLength, i = 2; i < o;)
               if (e = r.getUint16(i, !1), i += 2, e == 65505) {
                  if (r.getUint32(i += 2, !1) != 1165519206) return t(-1);
                  for (u = r.getUint16(i += 6, !1) == 18761, i += r.getUint32(i + 4, u), s = r.getUint16(i, u), i += 2, f = 0; f < s; f++)
                     if (r.getUint16(i + f * 12, u) == 274) return t(r.getUint16(i + f * 12 + 8, u))
               } else if ((e & 65280) != 65280) break;
            else i += r.getUint16(i, !1);
            return t(-1)
         };
         i.readAsArrayBuffer(n.slice(0, 65536))
      }

      function o(n, i, r) {
         var u = new Image;
         u.onload = function () {
            var f = u.width,
               e = u.height,
               o = t.createElement("canvas"),
               n = o.getContext("2d");
            4 < i && i < 9 ? (o.width = e, o.height = f) : (o.width = f, o.height = e);
            switch (i) {
               case 2:
                  n.transform(-1, 0, 0, 1, f, 0);
                  break;
               case 3:
                  n.transform(-1, 0, 0, -1, f, e);
                  break;
               case 4:
                  n.transform(1, 0, 0, -1, 0, e);
                  break;
               case 5:
                  n.transform(0, 1, 1, 0, 0, 0);
                  break;
               case 6:
                  n.transform(0, 1, -1, 0, e, 0);
                  break;
               case 7:
                  n.transform(0, -1, -1, 0, e, f);
                  break;
               case 8:
                  n.transform(0, -1, 1, 0, 0, f)
            }
            n.drawImage(u, 0, 0);
            r(o.toDataURL())
         };
         u.src = n
      }

      function c(n, t) {
         e(n, function (n) {
            i = n
         });
         var r = new FileReader;
         r.onloadend = function () {
            a(r.result, n.type, n.name, t)
         };
         r.onerror = function () {
            console.log("There was an error reading the file!")
         };
         r.readAsDataURL(n)
      }

      function l(n, t) {
         for (var r = n.split(","), e = r[0].match(/:(.*?);/)[1], u = atob(r[1]), i = u.length, f = new Uint8Array(i); i--;) f[i] = u.charCodeAt(i);
         return new File([f], t, {
            type: e
         })
      }

      function a(n, u, e, s) {
         var c = 1500,
            l = 1500,
            h = new Image;
         h.src = n;
         h.onload = function (e, s, a) {
            setTimeout(function () {
               var w = h.width,
                  b = h.height,
                  y, p, v, k;
               r(".stamped-file-holder").append('<div class="stamped-file-photo" data-index="' + e + '"><img src="' + n + '" width="70" /><span style="display:none;">' + a + '<\/span><div class="stamped-file-photo-remove" data-index="' + e + '">x<\/div><\/div>');
               f(n, e, a)
            }, 100)
         }(s, h, e);
         h.onerror = function () {
            console.log("There was an error processing your file!")
         }
      }

      function f(n, t, i) {
         var r = l(n, i);
         ft.push(r);
         return
      }
      var u, i, v;
      if (n.File && n.FileReader && n.FormData) {
         u = r("#stamped-file-uploader-input");
         u.on("change", function (n) {
            for (var i, f, s, o = n.target.files, e = 0; e < o.length; e++) {
               if (i = o[e], f = new FileReader, h("stamped:photo:selected"), tt >= 5) {
                  h("stamped:photo:maxed");
                  return
               }
               if (tt++, i.type.match("image")) c(i, tt);
               else {
                  if (s = i.size / 1048576, s > 50) {
                     h("stamped:photo:sizeError");
                     alert("Sorry, you cannot add this video to your review. Up to 50mb is allowed.");
                     return
                  }
                  f.onload = function () {
                     var s = new Blob([f.result], {
                           type: i.type
                        }),
                        o = URL.createObjectURL(s),
                        n = t.createElement("video"),
                        h = '<div class="stamped-file-photo" data-index="' + tt + '"><img src="https://s3-us-west-2.amazonaws.com/stamped.io/cdn/images/icons/icon-video-placeholder.png" width="70" /><span style="display:none;">' + i.name + '<\/span><div class="stamped-file-photo-remove" data-index="' + tt + '">x<\/div><\/div>',
                        u = function () {
                           e() && (n.removeEventListener("timeupdate", u), n.pause())
                        },
                        e;
                     n.addEventListener("loadeddata", function () {
                        e() ? n.removeEventListener("timeupdate", u) : r(".stamped-file-holder").append(h);
                        ft.push(i)
                     });
                     e = function () {
                        var u = t.createElement("canvas"),
                           f, e;
                        return u.width = n.videoWidth, u.height = n.videoHeight, u.getContext("2d").drawImage(n, 0, 0, u.width, u.height), f = u.toDataURL(), e = f.length > 1e5, e && (r(".stamped-file-holder").append('<div class="stamped-file-photo" data-index="' + tt + '"><img src="' + f + '" width="70" /><span style="display:none;">' + i.name + '<\/span><div class="stamped-file-photo-remove" data-index="' + tt + '">x<\/div><\/div>'), URL.revokeObjectURL(o)), e
                     };
                     n.addEventListener("timeupdate", u);
                     n.preload = "metadata";
                     n.src = o;
                     n.muted = !0;
                     n.playsInline = !0;
                     n.play()
                  };
                  f.readAsArrayBuffer(i)
               }
               i && (/^image\//i.test(i.type) || /^video\//i.test(i.type) ? console.log("is image, begin upload") : (h("stamped:photo:invalid"), console.log("Not a valid image!")))
            }
            u.val("")
         });
         r(t).on("click", ".stamped-file-photo-remove", function () {
            var n = r(this).parent(".stamped-file-photo"),
               t = n.index();
            ft.splice(t, 1);
            tt = ft.length;
            n.remove()
         })
      } else console.log("File upload is not supported!");
      v = function (n, t) {
         s("Photo upload complete idx" + t);
         r(".stamped-file-photo[data-index=" + t + "] .fa").remove()
      }
   }

   function pe() {
      var i = "#shopry-rating-wrapper a.shopry-thumbs-up, #shopry-rating-wrapper a.shopry-thumbs-down, #shopry-rating-holder a.shopry-thumbs-up, #shopry-rating-holder a.shopry-thumbs-down, #stamped-rating-holder a.stamped-thumbs-up, #stamped-rating-holder a.stamped-thumbs-down, .stamped-rating-holder a.stamped-thumbs-up, .stamped-rating-holder a.stamped-thumbs-down";
      r(t).off("click keypress", i).on("click keypress", i, function (t) {
         var s;
         if (a(t) === !0) {
            var e = r(this).attr("data-review-id"),
               h = r(this).attr("data-question-id"),
               c = r(this).attr("data-rating"),
               l = u.attr("data-product-id"),
               f = r(this),
               i = f.parent();
            i.fadeTo("slow", .3);
            f.addClass("disable-link");
            s = e ? "reviews" : "questions";
            r.ajax({
               type: "POST",
               url: o.SECURE_ENDPOINT + "/" + s + "/vote",
               data: {
                  productId: l,
                  reviewId: e,
                  questionId: h,
                  vote: c,
                  apiKey: n.StampedGlobalOptions.apiKey,
                  sId: n.StampedGlobalOptions.sId,
                  storeUrl: n.StampedGlobalOptions.storeUrl
               },
               success: function (n) {
                  r(".stamped-thumbs-up i", i).html("  " + n.voteUp);
                  r(".stamped-thumbs-down i", i).html("  " + n.voteDown);
                  i.fadeTo("slow", 1);
                  f.removeClass("disable-link")
               }
            })
         }
      })
   }

   function we() {
      r(t).on("click keypress", ".stamped-tabs li", function (n) {
         a(n) === !0 && gt(this)
      });
      r(t).on("keypress", ".stamped-summary-actions-newreview", function (n) {
         a(n) === !0 && ri("review")
      });
      r(t).on("keypress", ".stamped-summary-actions-newquestion", function (n) {
         a(n) === !0 && ri("question")
      });
      r(t).on("keypress", ".stamped-form-input a", function (n) {
         a(n) === !0 && tf(this)
      })
   }

   function be(n, t, i) {
      var r, e, f, u, o;
      if (vr("stamped-user-reviews") != null) {
         for (r = JSON.parse(vr("stamped-user-reviews")), f = !1, u = 0; u < r.length; u++)
            if (r[u].pid == n) {
               f = !0;
               e = r[u];
               break
            }! f && n && t && i == !0 && (r.length >= 10 && r.splice(0, 1), r.push({
            pid: n,
            v: t
         }), ai("stamped-user-reviews", JSON.stringify(r), 1));
         f && !i && e
      } else n && t && i == !0 && (o = [{
         pid: n,
         v: t
      }], ai("stamped-user-reviews", JSON.stringify(o), 1))
   }

   function dt(t, i, f, e) {
      var g, k, a, d;
      if (u.length && !wi) {
         s("Loading Main Widget...");
         var c = u.attr("data-product-id"),
            nt = u.attr("data-product-ids"),
            l = u.attr("data-name"),
            tt = u.attr("data-product-type"),
            it = u.attr("data-product-sku") || u.attr("data-product-sku2"),
            rt = u.attr("data-user-reference"),
            ut = u.attr("data-take-reviews"),
            v = u.attr("data-keyword"),
            ft = u.attr("data-widget-language"),
            et = u.attr("data-widget-country-iso"),
            ot = u.attr("data-widget-type"),
            y = u.attr("data-load-type") || r(".stamped-container", u).attr("data-widget-load-type"),
            p = u.attr("data-search"),
            ht = u.attr("data-cache") || o.is_disable_cache || null,
            ct = r(".stamped-container", u).attr("data-widget-style"),
            lt = u.attr("data-tags-exclude"),
            at = u.attr("data-tags-include"),
            w = o.metafields;
         ct == "slider" && (y = "continue");
         l && (l = l.replace("!", ""));
         i || (i = u.attr("data-sort") || r(".stamped-container", u).attr("data-widget-sort"));
         y === "continue" && (e = !0);
         r("#stamped-main-widget-placeholder").length && r("#stamped-main-widget-placeholder").append(u);
         wi = !0;
         t && !e && b(".stamped-reviews");
         u.addClass("stamped-main-widget-loading");
         g = r("<span>Loading more...<\/span>").prependTo(r("#stamped-reviews-tab"));
         k = r.param(ni({
            productId: c,
            productIds: nt,
            productName: l,
            productType: tt,
            productSKU: it,
            userReference: rt,
            page: t || 1,
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl,
            take: ut || 5,
            sort: i,
            rating: f,
            keyword: v,
            widgetLanguage: ft,
            widgetCountryIso: et,
            widgetType: ot,
            search: p,
            isUseCache: ht,
            tagsExclude: lt,
            tagsInclude: at
         }));
         r.isEmptyObject(st) || (k += "&" + r.param(st));
         a = w.length;
         d = {
            type: a ? "POST" : "GET",
            data: a ? JSON.stringify({
               metafields: w
            }) : null,
            dataType: "json",
            url: o.SECURE_ENDPOINT + "/widget" + (a ? "/preview" : "") + "?" + k,
            success: function (n) {
               var e, v, p, l, o, f, w;
               s("Loaded Main Widget...");
               wi = !1;
               u.removeClass("stamped-main-widget-loading");
               g.remove();
               var b = n.product,
                  a = n.widget,
                  k = r("#stamped-main-widget .stamped-container").length,
                  d = r(".question-form-wrapper").clone(),
                  nt = r(".stamped-questions").clone();
               k || u.empty().html(b);
               e = typeof r.parseHTML == "function" ? r.parseHTML(a) : r(a);
               v = r(".stamped-content", u).children().length == 0;
               v ? r(".stamped-content", u).append(r(e)) : (p = r(".stamped-reviews", u), l = r('[class="stamped-review"]', e), (y !== "continue" || t === null && typeof t == "undefined" || t === 1 && t) && r('.stamped-reviews [class*="stamped-review"]', u).remove(), o = r(".stamped-pagination", e).attr("data-page", t), f = r(".stamped-reviews .stamped-pagination", u), f.length ? r(l).insertBefore(f) : r(l).appendTo(".stamped-reviews", u), w = r(".stamped-tabs", e), r(".stamped-tabs", u).replaceWith(w), o.length ? f.length ? f.replaceWith(o) : p.append(o) : f.remove());
               i && r(".stamped-sort-select", u).length && r('.stamped-sort-select option[value="' + i + '"]', u).css("display") !== "none" && (r(".stamped-sort-select", u).val(i), r(".stamped-container", u).attr("data-widget-sort", i), r(u).attr("data-sort", i));
               r(".new-review-form").hide();
               r(".new-question-form").hide();
               h("stamped:reviews:loaded");
               r(".stamped-summary-actions-newreview").attr("aria-controls", "new-review-form_" + (c != null ? c : ""));
               ss()
            },
            error: function () {}
         };
         w.length && (d.contentType = "application/json");
         li != null && li.abort();
         li = r.ajax(d)
      }
      v && nr({
         topic: v
      }, c);
      p && nr({
         search: p
      }, c)
   }

   function nf(n, t) {
      return n.replace(new RegExp(t + "(?!([^<]+)?<)", "gi"), '<span class="stamped-keyword-highlight">$&<\/span>')
   }

   function or(t, i) {
      var c;
      if (u = r(v), u.length) {
         var f = u.attr("data-product-id"),
            l = u.attr("data-product-sku"),
            a = u.attr("data-product-type"),
            y = u.attr("data-name"),
            e = u.attr("data-take-questions") || 5,
            p = u.attr("data-search-qna");
         if (i || (i = u.attr("data-sort-qna") || r(".stamped-container", u).attr("data-widget-sort-qna")), c = u.data("linkify") || !1, !f) return;
         s("Loading Q&A");
         r.ajax({
            type: "GET",
            url: o.SECURE_ENDPOINT + "/widget/questions",
            data: {
               productId: f,
               productSKU: l,
               productType: a,
               productTitle: y,
               page: t || 1,
               apiKey: n.StampedGlobalOptions.apiKey,
               sId: n.StampedGlobalOptions.sId,
               storeUrl: n.StampedGlobalOptions.storeUrl,
               take: e || 5,
               search: p,
               sort: i
            },
            success: function (n) {
               var l, o, a, w, s, k, f, y, p, u;
               n.a == !0 && r(".stamped-questions").length && (l = n.result, o = n.t, a = n.form, w = n.p, s = n.avatar, k = r("#tab-questions").text(), r("#tab-questions").attr("data-count", o), ke(a), f = r('<div id="stamped-questions-tab" class="stamped-questions" role="tabpanel" aria-labelledby="tab-questions" tabindex="-1">'), r(".stamped-questions").html(""), f.append(l), s && (y = r(".stamped-review #stamped-review-avatar", f), p = r('<img src="' + s + '" width="100">'), y.html(p)), u = r(".stamped-questions-placeholder"), u.length ? (r(".stamped-questions", u).html(""), r(".stamped-questions", u).replaceWith(f), r(".stamped-questions", u).length || (r(".stamped-questions").appendTo(u), r(".stamped-questions").replaceWith(f)), r(".stamped-questions", u).show(), r("#tab-questions").hide(), r(".question-form-wrapper").prependTo(u), r(".stamped-summary-actions-newquestion").prependTo(u)) : (r(".stamped-questions").replaceWith(f), t ? r(".stamped-questions").show() : r(".stamped-questions").hide()), de(o, t || 1, e), u.length ? t > 1 && b(".stamped-questions-placeholder") : t > 1 && b(v), i || r(".stamped-questions-filter .stamped-sort-select").val("recent"), c && r(".stamped-review-reply-body", f).each(function () {
                  if (!r(this).attr("data-link-processed")) {
                     r(this).attr("data-link-processed", !0);
                     var n = r(this).html();
                     r(this).html(n.linkify())
                  }
               }), h("stamped:questions:loaded"))
            }
         })
      }
   }

   function ke(n) {
      if (r(".stamped-questions").length && !r(".question-form-wrapper").length) {
         var t = r('<div class="question-form-wrapper">').html(n);
         r(".new-review-form").before(t)
      }
   }

   function de(n, t, i) {
      var h = n > 0 ? n / i < 1 ? 1 : Math.ceil(n / i) : 1,
         e, a, s, f, v;
      if (h != 1) {
         var c = '<div class="stamped-pagination" id="stamped-pagination-question"><div><span id="stamped-pagination-prev" class="previous"><a href="#" onclick="StampedFn.pageQuestions(this)" role="link" tabindex="0" data-product-id="" data-page="' + (t - 1) + '"><<\/a><\/span><span id="pages"><\/span><span id="stamped-pagination-next" class="next"><a onclick="StampedFn.pageQuestions(this)" role="link" tabindex="0" data-product-id="" data-page="' + (t + 1) + '">><\/a><\/span><\/div><\/div>',
            o = r(".stamped-questions"),
            l = r(".stamped-questions-placeholder");
         l.length && (o = r(".stamped-questions", l));
         e = r(".stamped-pagination", o);
         e.length ? e.replaceWith(c) : o.append(c);
         e = r(".stamped-pagination", o);
         var n = h,
            t = t,
            u = [];
         if (u.push(1), n <= 7) {
            for (f = 2; f < n; f++) u.push(f);
            n == t && u.push(t)
         }
         for (n >= 8 && (a = t - 2, a >= 1 && (t - 2 != 1 && u.push(t - 2), u.push(t - 1)), t != 1 && u.push(t), s = t + 2, s <= n && (u.push(t + 1), s != n && u.push(t + 2))), t == 1 || t == 1 ? r("#stamped-pagination-prev", e).hide() : r("#stamped-pagination-prev", e).show(), n == t || n == 1 ? r("#stamped-pagination-next", e).hide() : r("#stamped-pagination-next", e).show(), n != t && u.push(n), f = 0; f < u.length; f++) v = u[f] == t, v ? r("#pages", e).append(' <span class="page active"><a style="cursor:pointer;" onclick="StampedFn.pageQuestions(this)" role="button" tabindex="0" data-product-id="" data-page="' + u[f] + '">' + u[f] + "<\/a><\/span> ") : r("#pages", e).append(' <span class="page"><a style="cursor:pointer;" onclick="StampedFn.pageQuestions(this)" role="button" tabindex="0" data-product-id="" data-page="' + u[f] + '">' + u[f] + "<\/a><\/span> ")
      }
   }

   function gt(n, t) {
      r("#stamped-questions-placeholder, .stamped-questions-placeholder").length || (r(".stamped-tabs #tab-reviews").removeClass("active"), r(".stamped-tabs #tab-questions").removeClass("active"), t == "questions" ? r(".stamped-tabs #tab-questions").addClass("active") : t == "reviews" && r(".stamped-tabs #tab-reviews").addClass("active"), n && (r(n).addClass("active"), t = r(n).data("type")), t == "reviews" ? (r(".stamped-reviews").show(), r(".stamped-reviews-filter").show(), r(".stamped-questions").hide(), r(".stamped-questions-filter").hide(), r(".stamped-reviews").attr("tabindex", 0), r(".stamped-questions").attr("tabindex", -1), r("#stamped-sort-select").show()) : t == "questions" && (r(".stamped-reviews").hide(), r(".stamped-reviews-filter").hide(), r(".stamped-questions").show(), r(".stamped-questions-filter").show(), r(".stamped-reviews").attr("tabindex", -1), r(".stamped-questions").attr("tabindex", 0), r("#stamped-sort-select").hide()), r(".new-review-form").hide(), r(".new-question-form").hide())
   }

   function ge() {
      s("Loading Badges...");
      var i;
      if (oi = r(".stamped-product-reviews-badge[data-id], .stamped-product-reviews-badge[data-product-id]"), oi.length && (i = r.map(oi, function (n) {
            if (!r.trim(r(n).html()) && (r(n).attr("data-id") || r(n).attr("data-product-id") || r(n).attr("data-type") || r(n).attr("data-product-type") || r(n).attr("data-product-sku") || r(n).attr("data-product-title"))) return {
               productId: r(n).attr("data-id") || r(n).attr("data-product-id"),
               productType: r(n).attr("data-product-type"),
               productSKU: r(n).attr("data-product-sku") || r(n).attr("data-product-sku2"),
               productTitle: r(n).attr("data-product-title")
            }
         }), i && i.length && r.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: o.SECURE_ENDPOINT + "/widget/badges" + (o.is_disable_cache_badge === !0 ? "?isUseCache=false" : ""),
            data: JSON.stringify({
               productIds: i,
               apiKey: n.StampedGlobalOptions.apiKey,
               sId: n.StampedGlobalOptions.sId,
               storeUrl: n.StampedGlobalOptions.storeUrl
            }),
            success: function (n) {
               oi.each(function () {
                  var u = r(this).attr("data-id") || r(this).attr("data-product-id"),
                     i = r(this).attr("data-type"),
                     t = r.map(n, function (n, t) {
                        if (n.productId == u) return t
                     })[0];
                  t >= 0 && (!i || i == "review") ? r(this).html(n[t].badge) : t >= 0 && i == "qna" && r(this).html(n[t].badgeqna)
               });
               h("stamped:badges:loaded")
            },
            error: function () {}
         })), r(".stamped-product-reviews-badge[data-id].stamped-main-badge, .stamped-product-reviews-badge:first").length) r(t).on("click", ".stamped-product-reviews-badge[data-id].stamped-main-badge, .stamped-product-reviews-badge:first", function () {
         if (r(this).attr("data-type") === "qna") {
            if (r("#stamped-questions-placeholder").length ? b("#stamped-questions-placeholder") : (gt(null, "questions"), b(v)), r(".stamped-badge-caption[data-questions]").length) {
               var n = r(".stamped-badge-caption[data-questions]").attr("data-questions");
               n === "0" && r(".new-question-form").show()
            }
         } else gt(null, "reviews"), b(v)
      })
   }

   function no(n) {
      var t = oo("★", n.reviewRating),
         f = u.attr("data-image-url") || "",
         e = "https://stamped.io/facebookpost?caption=" + t + " " + encodeURIComponent(n.reviewTitle) + "&name=" + t + " " + encodeURIComponent(n.reviewTitle) + "&description=" + encodeURIComponent(n.reviewMessage) + "&link=" + encodeURIComponent(n.productUrl) + "&picture=" + encodeURIComponent(f.replace("%3F", "?")),
         o = "https://www.facebook.com/dialog/feed?app_id=941057476855139&display=popup&link=" + encodeURIComponent(e) + "&name=" + encodeURIComponent(n.reviewTitle) + "&redirect_uri=https://stamped.io/shares?productId=" + n.productId,
         s = "https://twitter.com/intent/tweet?text=" + t + " " + n.reviewMessage.substr(0, 140) + "&url=" + encodeURIComponent(n.productUrl) + "",
         h = "https://plus.google.com/share?url=" + encodeURIComponent(n.productUrl),
         i = r(".stamped-thank-you .stamped-share-links");
      r(".facebook", i).attr("href", o).attr("target", "_blank");
      r(".twitter", i).attr("href", s).attr("target", "_blank");
      r(".google", i).attr("href", h).attr("target", "_blank")
   }

   function to(n, t) {
      var c = [],
         r, u, e, f, s, o, h;
      for (i = 0; i < n.length; i++)
         if (r = n[i], t != !0 || r.reviewUserPhotos || r.reviewUserVideos) {
            if (u = {
                  photos: [],
                  videos: [],
                  name: r.author,
                  via: "Photos",
                  title: r.reviewTitle,
                  body: r.reviewMessage,
                  date: r.reviewDate,
                  reply: r.reviewReply,
                  dateReplied: r.dateReplied,
                  dateFull: r.dateCreated,
                  verifiedType: r.reviewVerifiedType,
                  rating: r.reviewRating,
                  products: [{
                     url: r.productUrl,
                     title: r.productName,
                     imageUrl: r.productImageUrl,
                     imageLargeUrl: r.productImageLargeUrl,
                     productUrl: r.productDirectUrl || ""
                  }],
                  review_id: r.id,
                  votes: {
                     up: r.reviewVotesUp,
                     down: r.reviewVotesDown
                  },
                  options: []
               }, r.reviewUserPhotos || r.reviewUserVideos) {
               if (r.reviewUserVideos)
                  for (e = r.reviewUserVideos.split(","), ii = 0; ii < e.length; ii++) f = "//s3.us-west-2.amazonaws.com/stamped.io/uploads/videos/" + e[ii], s = "//cdn.stamped.io/uploads/videos/" + e[ii] + ".jpg", f.indexOf(".mp4") < 0 && (f = f + ".mp4"), f.indexOf("nothumb") >= 0 && (s = ""), u.photos.push({
                     videoUrl: f,
                     imageThumbnailUrl: s
                  });
               if (r.reviewUserPhotos)
                  for (o = r.reviewUserPhotos.split(","), h = "//cdn.stamped.io/uploads/photos/", r.reviewUserPhotosWatermark && (h = "//cdn.stamped.io/" + r.reviewUserPhotosWatermark + "/uploads/photos/"), ii = 0; ii < o.length; ii++) u.photos.push({
                     imageUrl: h + o[ii],
                     imageThumbnailUrl: "//cdn.stamped.io/uploads/photos/thumb/" + o[ii]
                  })
            } else u.photos.push({
               imageUrl: r.productImageLargeUrl,
               imageThumbnailUrl: r.productImageUrl
            });
            if (r.reviewOptionsList && r.reviewOptionsList.length)
               for (ii = 0; ii < r.reviewOptionsList.length; ii++) u.options.push({
                  message: r.reviewOptionsList[ii].message,
                  value: r.reviewOptionsList[ii].value
               });
            c.push(u)
         } return c
   }

   function io(i, u, f, e, s, c, l, v, y) {
      var tt, st, it, w, b, rt, k, d;
      e !== 1 && e || (i = to(i, s));
      i != null || i.length || ut(u, c);
      l || (l = "en");
      var p, nt, ft, ht = '<div class="stamped-ugc-modal" data-lang="' + l + '" role="dialog" aria-modal="true" aria-label="Customer Review Photos" data-keyboard="true" tabindex="-1"> <div class="stamped-ugc-modal-wrapper" role="region" aria-roledescription="carousel" aria-label="carousel" aria-label="Shop our Instagram look"><span href="javascript:void(0)" title="Close" aria-label="Close" role="button" class="stamped-modal-close show-mobile" style="display:none;" tabindex="0">X<\/span> <div class="stamped-ugc-modal-nav stamped-ugc-modal-nav-previous" role="button" data-direction="left" tabindex="0" aria-label="Previous Photo"> <i class="stamped-fa stamped-fa-angle-left"><\/i> <\/div> <div class="stamped-ugc-modal-image-wrapper" role="group" aria-roledescription="slides" aria-label="slide"> <div class="stamped-ugc-modal-image"><\/div> <ul><\/ul> <\/div> <div class="stamped-ugc-modal-content"> <span href="javascript:void(0)" title="Close" aria-label="Close" role="button" class="stamped-modal-close" tabindex="0">X<\/span> <div class="stamped-ugc-modal-content-wrapper"> <div class="stamped-ugc-modal-user"> <div class="stamped-ugc-modal-user-source"><\/div><h1 class="stamped-ugc-modal-user-username"><\/h1> <\/div> <div class="stamped-ugc-modal-caption"><\/div><div class="stamped-ugc-modal-votes"><\/div> <div class="stamped-ugc-modal-tags"> <span class="stamped-ugc-modal-tag"><a aria-label="Link to Product" {0} target="_top"> <div class="stamped-ugc-modal-tags-product-image-wrapper"><img {1} class="stamped-ugc-modal-tags-product-image" onerror=\'this.style.display = "none"\' alt="{2}" /><\/div> <div class="stamped-ugc-modal-tags-product-title">{2}<\/div> <\/a><div class="stamped-ugc-modal-tags-btn" data-shoppable-url="{3}"><\/div> <\/span> <\/div> <\/div> <\/div> <div class="stamped-ugc-modal-nav stamped-ugc-modal-nav-next" role="button" data-direction="right" tabindex="0" aria-label="Next Photo"> <i class="stamped-fa stamped-fa-angle-right"><\/i> <\/div> <div class="stamped-ugc-modal-list-photos" role="group"><ul><\/ul><\/div> <\/div> <\/div>',
         at = r(f).attr("data-hover-text") || " ",
         vt = r(f).attr("data-shop-button-text") || "Shop Now",
         et = r(f).attr("data-url-param") || "",
         ot = r(f).attr("data-url-store") || br || "",
         yt = r(f).attr("data-cropped") == "false" ? !0 : !1,
         pt = r(f).attr("data-page") || 1,
         wt = r(f).attr("data-take") || 30;
      for (r("#stamped-ugc-modal").length || (p = r(ht), p.attr("data-modal-type", e), p.attr("data-modal-shoppable", y || !1), r(p).appendTo(t.body), p.focus()), tt = "", st = i.length, nt || (nt = r(".stamped-ugc-modal-tags:first", p).html()), it = i ? i.length : 0, w = 0; w < st; w++) b = i[w], rt = b.imageUrl, rt && (tt += templateBlock.formatStringStamped(it, rt), it++), b.photos.length && b.photos[0].imageUrl && (sr[w] = new Image, sr[w].src = b.photos[0].imageUrl);
      if (r(".stamped-ugc-media-block-template", f).append(tt), !ft) {
         r(t).on("keydown", n);
         p.on("click", ".stamped-modal-close", function (n) {
            n.target == this && a(n) === !0 && i()
         });
         p.on("click keypress", ".stamped-ugc-modal-nav-previous, .stamped-ugc-modal-nav-next", function (n) {
            if (a(n) === !0) {
               var t = r(this).attr("data-direction");
               g(t)
            }
         });
         hr || (hr = !0);

         function n(n) {
            n.preventDefault();
            switch (n.keyCode) {
               case 37:
                  g("left");
                  break;
               case 39:
                  g("right");
                  break;
               case 27:
                  i()
            }
         }
         t.addEventListener("touchstart", u, !1);
         t.addEventListener("touchmove", f, !1);
         k = null;
         d = null;

         function u(n) {
            k = n.touches[0].clientX;
            d = n.touches[0].clientY
         }

         function f(n) {
            if (k && d) {
               var r = n.touches[0].clientX,
                  u = n.touches[0].clientY,
                  t = k - r,
                  i = d - u;
               Math.abs(t) > Math.abs(i) ? t > 0 ? g("right") : g("left") : i > 0;
               k = null;
               d = null
            }
         }

         function i() {
            r(t).off("keydown", n);
            p.remove();
            p = null;
            r("body").removeClass("stamped-modal-open")
         }
      }
      ft = !0;
      var ct = function () {
            var t = Number(r(this).text()) + 1,
               n = r(this).data("image-url");
            r(".stamped-ugc-modal-image-wrapper ul li").removeClass("active");
            r(".stamped-ugc-modal-image-wrapper ul li:nth-child(" + t + ")").addClass("active");
            o.modal_ugc_image_viewer == "image" ? r(".stamped-ugc-modal-image", p).html('<img src="' + n + '" alt="Customer Photo" />') : r(".stamped-ugc-modal-image", p).css("background-image", "url(" + n + ")");
            h("stamped:ugcmodal:paged")
         },
         lt = function () {
            var n = r(this).data("index-review"),
               t = r(this).data("index-photo");
            r(".stamped-ugc-modal-list-photos ul li").removeClass("active");
            r(".stamped-ugc-modal-list-photos ul li[data-index-review=" + n + "][data-index-photo=" + t + "]").addClass("active");
            ut(n, t);
            h("stamped:ugcmodal:paged")
         },
         ut = function (u, f) {
            var e = i[u],
               b, k, at, vt, ut, yt, bt, g, d, it, ft, st, ht, tt, rt, dt, pt, s, gt;
            if (e != null && e.photos != null) {
               if (f !== null ? (c = f, f > e.photos.length - 1 && (c = 0)) : c ? c > e.photos.length - 1 && (c = 0) : c = 0, !r(".stamped-ugc-modal-list-photos ul li", p).length) {
                  for (b = 0; b < i.length; b++)
                     for (k = 0; k < i[b].photos.length; k++) {
                        var ni = u == b && f == k ? "active" : "",
                           fi = i[b].photos[k].imageUrl,
                           ti = i[b].name + " " + i[b].title,
                           wt = i[b].photos[k].imageThumbnailUrl,
                           y = t.createElement("li");
                        y.className = ni;
                        y.innerHTML = "";
                        y.className += " stamped-lazyload";
                        at = t.createAttribute("data-index-review");
                        at.value = b;
                        y.setAttributeNode(at);
                        d = t.createAttribute("data-index-photo");
                        d.value = k;
                        y.setAttributeNode(d);
                        y.setAttribute("role", "button");
                        y.setAttribute("tabindex", 0);
                        y.setAttribute("aria-label", ti);
                        n.LazyLoadStamped && LazyLoadStamped.update ? (vt = t.createAttribute("data-bg"), vt.value = "url(" + wt + ")", y.setAttributeNode(vt)) : y.style.background = "url(" + wt + ")";
                        r(".stamped-ugc-modal-list-photos ul", p).append(y);
                        y.onclick = lt
                     }
                  r(t).on("click keypress", ".stamped-ugc-modal-list-photos li.stamped-lazyload", function (n) {
                     a(n) && (r(this).attr("aria-current", "true"), r(this).siblings().attr("aria-current", "false"))
                  });
                  try {
                     n.LazyLoadStamped && LazyLoadStamped.update && LazyLoadStamped.update()
                  } catch (ei) {}
               }
               for (r(".stamped-ugc-modal-list-photos li.stamped-lazyload.active").attr("aria-current", "true"), r(".stamped-ugc-modal-list-photos li.stamped-lazyload.active").siblings().attr("aria-current", "false"), e.photos[c] != null && (ut = e.photos[c].imageUrl, yt = e.photos[c].videoUrl, ut ? o.modal_ugc_image_viewer == "image" ? (r("video", r(".stamped-ugc-modal-image", p)).remove(), r(".stamped-ugc-modal-image", p).html('<img src="' + ut + '" alt="' + e.via + " photo uploaded by " + e.name + " on " + e.dateFull + '" />')) : (r("video", r(".stamped-ugc-modal-image", p)).remove(), r(".stamped-ugc-modal-image", p).css("background-image", "url(" + ut + ")")) : yt && r(".stamped-ugc-modal-image", p).fadeOut("", function () {
                     r(".stamped-ugc-modal-image", p).css("background-image", 'url("")');
                     r(".stamped-ugc-modal-image", p).html('<video class="stamped-ugc-modal-video" src="' + yt + '" width="100%" controls autoplay />');
                     r(this).fadeIn()
                  })), r(".stamped-ugc-modal-image-wrapper ul", p).html(""), ii = 0; ii < e.photos.length; ii++) bt = ii === c ? "active" : "", g = t.createElement("li"), g.className = bt, g.innerHTML = ii, d = t.createAttribute("data-image-url"), d.value = e.photos[ii].imageUrl, g.setAttributeNode(d), r(".stamped-ugc-modal-image-wrapper ul", p).append(g), g.onclick = ct;
               if (r(".stamped-ugc-modal-user-source").text(e.via), it = r(".stamped-ugc-modal-user-username", p), it.text(e.name), it.attr("data-verified-type", e.verifiedType), it.attr("data-username", e.name), ft = "Verified Buyer", st = "Shop Now", v && l != "en" && (ft = v.label_verified_buyer || ft, st = v.label_shop_now || st), it.append('<span class="stamped-verified-badge">' + ft + "<\/span>"), r(".stamped-ugc-modal-tags-btn", p).append("<span>" + st + "<\/span>"), ht = "", e.rating) {
                  for (tt = 0; tt < e.rating; tt++) ht += '<i class="stamped-fa stamped-fa-star" aria-hidden="true"><\/i>';
                  for (tt = 0; tt < 5 - e.rating; tt++) ht += '<i class="stamped-fa stamped-fa-star-o" aria-hidden="true"><\/i>'
               }
               if (rt = "", e.options && e.options.length) {
                  for (rt += '<ul class="">', w = 0; w < e.options.length; w++) {
                     var kt = e.options[w].message,
                        ri = e.options[w].value,
                        ui = so(kt);
                     rt += '<li data-value="' + ui + '"><span class="stamped-ugc-modal-options-message">' + kt + '<\/span> <span class="stamped-ugc-modal-options-value">' + ri + "<\/span><\/li>"
                  }
                  rt += "<\/ul>"
               }
               for (e.reply || (e.reply = ""), dt = e.dateFull ? new Date(e.dateFull) : new Date(e.date), pt = (new timeagoStamped).formatDateString(dt), l != "en" && (pt = e.date), r(".stamped-ugc-modal-caption", p).html('<div class="stamped-ugc-modal-date" data-date="' + e.date + '">' + pt + '<\/div><div class="stamped-ugc-modal-caption-rating">' + ht + '<\/div><div class="stamped-ugc-modal-caption-options">' + rt + '<\/div><h2 class="stamped-ugc-modal-caption-title">' + (e.title || "") + '<\/h2> <div class="stamped-ugc-modal-caption-body">' + e.body + '<\/div> <div class="stamped-ugc-modal-caption-reply">' + e.reply + "<\/div>"), r(".stamped-ugc-modal-votes", p).html('<span class="stamped-ugc-modal-vote-up" aria-pressed="false" role="button" aria-label="Rate review as helpful" tabindex="0" data-count="' + e.votes.up + '" onclick="StampedFn.voteReview(this, ' + e.review_id + ',1)"><i class="stamped-fa stamped-fa-thumbs-up"><\/i><\/span><span class="stamped-ugc-modal-vote-down" aria-pressed="false" tabindex="0" role="button" aria-label="Rate review as not helpful" data-count="' + e.votes.down + '" onclick="StampedFn.voteReview(this, ' + e.review_id + ',-1)"><i class="stamped-fa stamped-fa-thumbs-down"><\/i><\/span>'), r(".stamped-ugc-modal-tags", p).html(""), w = 0; w < e.products.length; w++) s = e.products[w], s.title = s.title ? s.title : "", ot ? (s.url = s.url.replace("?storeUrl=https://", ""), s.url = s.url + "?storeUrl=" + ot) : et && (s.url = s.url + "?param=" + et), gt = s.imageUrl || s.imageLargeUrl, s.imageUrl ? r(".stamped-ugc-modal-tags", p).append(nt.formatStringStamped('href="' + s.url + '" rel="nofollow"', 'src="' + gt + '"', s.title, s.productUrl)) : r(".stamped-ugc-modal-tags", p).append(nt.formatStringStamped('href="' + s.url + '" rel="nofollow"', "", s.title, s.productUrl));
               p.attr("data-review-index", u);
               p.attr("data-photo-index", c);
               hs();
               p.hasClass("open") || (p.addClass("open"), r("body").addClass("stamped-modal-open"), h("stamped:ugcmodal:open"))
            }
         },
         g = function (n) {
            var u, f, t, i;
            if (p.hasClass("open"))
               if (u = p.attr("data-review-index"), f = p.attr("data-photo-index"), r('[data-direction="right"]', p).removeClass("nav-disabled"), r('[data-direction="left"]', p).removeClass("nav-disabled"), n == "left") t = r(".stamped-ugc-modal-list-photos ul li.active").prev(), t.click(), t.length || r('[data-direction="left"]', p).addClass("nav-disabled");
               else if (n == "right") i = r(".stamped-ugc-modal-list-photos ul li.active").next(), r(i.click()), i.length || (r('[data-direction="right"]', p).addClass("nav-disabled"), p.attr("data-modal-type") == "instagram" && h("stamped:ugcmodal:last"));
            else return
         };
      i != null && i.length && ut(u, c)
   }

   function cr(t, i) {
      var u = r(t),
         e = u.attr("data-element-id"),
         f = u.attr("data-widget-type"),
         dt = u.attr("data-widget-persist-data") || !1,
         s = u.attr("data-review-id"),
         h = u.attr("data-review-ids") ? u.attr("data-review-ids").toString().split(",") : null,
         c = u.attr("data-product-id"),
         l = u.attr("data-product-ids") ? u.attr("data-product-ids").toString().split(",") : null,
         a = u.attr("data-product-category") || u.attr("data-product-type"),
         v = u.attr("data-product-brand"),
         y = u.attr("data-product-sku"),
         gt = u.attr("data-product-title"),
         p = u.attr("data-limit-words"),
         w = u.attr("data-random"),
         b = u.attr("data-show-avatar"),
         k = u.attr("data-take"),
         d = u.attr("data-fill-empty"),
         g = u.attr("data-min-rating"),
         nt = u.attr("data-min-length"),
         tt = u.attr("data-rating"),
         it = u.attr("data-tags"),
         rt = u.attr("data-tags-exclude"),
         ut = u.attr("data-topic"),
         ft = u.attr("data-syndication") || !0,
         et = u.data("with-photos"),
         ot = u.data("with-videos"),
         st = u.data("sort-reviews"),
         ht = u.data("widget-data"),
         ct = u.data("widget-language"),
         lt = u.data("widget-country-iso"),
         at = u.data("instagram-gallery-id"),
         vt = u.data("album-id"),
         yt = u.data("customer-email"),
         pt = u.data("customer-first-name"),
         wt = u.data("customer-id"),
         bt = f.indexOf("rewards") > -1 ? o.referral_code : null,
         kt = u.data("is-preview"),
         ni = i || 1;
      return {
         type: f,
         reviewId: s,
         reviewIds: h,
         productId: c,
         productIds: l,
         productCategory: a,
         productBrand: v,
         productSKU: y,
         limitWords: p,
         random: w,
         showAvatar: b,
         isFillEmpty: d,
         apiKey: n.StampedGlobalOptions.apiKey,
         sId: n.StampedGlobalOptions.sId,
         storeUrl: n.StampedGlobalOptions.storeUrl,
         page: i,
         skip: k,
         minRating: g,
         minLength: nt,
         rating: tt,
         isWithPhotos: et,
         isWithVideos: ot,
         sortReviews: st,
         instagramGalleryId: at,
         albumId: vt,
         dataType: ht,
         widgetLanguage: ct,
         widgetCountryIso: lt,
         tags: it,
         tagsExclude: rt,
         topic: ut,
         isSyndication: ft,
         elementId: e,
         customerEmail: yt,
         customerFirstName: pt,
         customerExternalId: wt,
         referralCode: bt,
         isPreview: kt
      }
   }

   function ro(n, t, i) {
      var u = o.SECURE_ENDPOINT + "/widget/reviews",
         f = cr(n, t);
      i = i || {};
      r.ajax({
         type: "GET",
         url: u + "?" + r.param(ni(f)),
         dataType: "json",
         success: function (t) {
            ar(n, t, null, 0, !0);
            i.callback && i.callback()
         }
      })
   }

   function uo(n) {
      const t = {};
      p && (t.testLoyalty2023 = p, d && (t.testLoyaltyAccount = d));
      const i = `${o.SERVICE_HOST.svc_loyalty_widget}/templates/widget?`;
      n.forEach(n => {
         r.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(n),
            xhrFields: {
               withCredentials: !0
            },
            url: i + r.param(t),
            success: function (n) {
               let t = n.elementId,
                  i = r('#stamped-rewards-widget[data-element-id="' + t + '"]');
               ar(i, n, n.translations, 0)
            }
         })
      })
   }

   function lr(n, t) {
      var i = o.SECURE_ENDPOINT + "/widget/reviews/batch";
      r.ajax({
         type: "POST",
         dataType: "json",
         contentType: "application/json",
         data: JSON.stringify({
            data: t
         }),
         xhrFields: {
            withCredentials: !0
         },
         url: i,
         success: function (t) {
            for (var u, e, o = t.length, f = 100, i = 0; i < o; i++) t[i] && (f += 50, u = t[i].elementId, e = n == "rewards" ? r('#stamped-rewards-widget[data-element-id="' + u + '"]') : r('#stamped-reviews-widget[data-element-id="' + u + '"]'), ar(e, t[i], t.translations, f))
         }
      })
   }

   function ar(i, u, f, e, o) {
      setTimeout(function () {
         var c, l, a, s;
         if (u) {
            var e = u.template,
               v = u.lang,
               f = i.attr("data-widget-type"),
               y = i.data("widget-persist-data") || !1;
            r(i).attr("data-lang", v || "en");
            f != "instagram-feed" && f != "instagram-feed-dev" && f != "visual-gallery" && y != !0 && r(i).html("");
            f == "single" ? (i.append(e), StampedWidgetSingleFn, StampedWidgetSingleFn.init(u.data, i, r)) : f == "full-page" || f == "full-page-nps" ? (c = i.attr("data-rich-snippet"), l = location.pathname == "/", u.total > 0 && c == "true" && !l && (a = {
               "@context": "http://schema.org",
               "@type": "Product",
               name: u.shop,
               aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: u.rating,
                  reviewCount: u.total
               }
            }, s = t.createElement("script"), s.type = "application/ld+json", s.innerHTML = JSON.stringify(a), t.getElementsByTagName("head")[0].appendChild(s)), i.append(e), StampedWidgetFullPageFn, StampedWidgetFullPageFn.init(u, i, r)) : f == "full-page-multiple" ? (i.append(e), StampedWidgetFullPageMultipleFn, StampedWidgetFullPageMultipleFn.init(u, i, r)) : f == "reviews-highlight" ? (i.append(e), StampedWidgetReviewsHighlightFn, StampedWidgetReviewsHighlightFn.init(u, i, r)) : f == "reviews-popup" ? (i.append(e), StampedWidgetReviewsPopupFn, StampedWidgetReviewsPopupFn.init(u, i, r)) : f == "people-highlight" ? (i.append(e), StampedWidgetPeopleHighlightFn, StampedWidgetPeopleHighlightFn.init(u, i, r)) : f == "drawer" ? (i.append(e), StampedWidgetDrawerFn, StampedWidgetDrawerFn.init(u, i, r)) : f == "carousel" ? (i.append(e), StampedCarouselFn, StampedCarouselFn.init(u, i, r)) : f == "carousel-nps" ? (i.append(e), StampedCarouselNPSFn, StampedCarouselNPSFn.init(u, i, r)) : f == "carousel-checkout-comments" ? (i.append(e), StampedCarouselCheckoutCommentFn, StampedCarouselCheckoutCommentFn.init(u, i, r)) : f == "carousel-photos" ? (i.append(e), StampedCarouselPhotosFn, StampedCarouselPhotosFn.init(u.data, i, r)) : f == "site-badge" ? (i.append(e), StampedSiteBadgeFn, StampedSiteBadgeFn.init(u, i, r)) : f == "top-rated" ? (i.append(e), StampedTopRatedFn, StampedTopRatedFn.init(u, i, r)) : f == "wall-photos" ? (i.append(e), StampedWallPhotosFn, StampedWallPhotosFn.init(u, i, r), o && b(i)) : f == "checkout-comments" ? (i.append(e), StampedCheckoutCommentsFn, StampedCheckoutCommentsFn.init(u, i, r)) : f == "instagram-feed" ? (r(i).is(":empty") && i.append(e), StampedInstagramFeedFn, StampedInstagramFeedFn.init(u, i, r)) : f == "visual-gallery" ? (n.stampedVisualGalleryDataArr || i.append(e), StampedVisualGalleryFeedFn, StampedVisualGalleryFeedFn.init(u, i, r)) : f == "facebook-messenger-optin" ? (StampedFacebookMessengerOptinFn, StampedFacebookMessengerOptinFn.init(u, i, r)) : f == "nps-submission-form" ? (i.append(e), StampedNPSSubmissionForm, StampedNPSSubmissionForm.init(u, i, r)) : f == "rewards-summary" ? (i.append(e), StampedRewardsSummary, StampedRewardsSummary.init(u, i, r)) : f == "rewards-how-it-works" ? (i.append(e), StampedRewardsHowItWorks, StampedRewardsHowItWorks.init(u, i, r)) : f == "rewards-referral-modal" ? (i.append(e), StampedRewardsReferralModal, StampedRewardsReferralModal.init(u, i, r)) : f == "rewards-referral-claim-modal" ? (i.append(e), StampedRewardsReferralClaimModal, StampedRewardsReferralClaimModal.init(u, i, r)) : f == "rewards-earnings" || f == "rewards-earnings-v2" ? (i.append(e), StampedRewardsEarnings, StampedRewardsEarnings.init(u, i, r)) : f == "rewards-spendings" || f == "rewards-spendings-v2" ? (i.append(e), StampedRewardsSpendings, StampedRewardsSpendings.init(u, i, r)) : f == "rewards-vip-tiers" ? (i.append(e), StampedRewardsVIPTiers, StampedRewardsVIPTiers.init(u, i, r)) : f == "rewards-referral" ? (i.append(e), StampedRewardsReferral, StampedRewardsReferral.init(u, i, r)) : f == "rewards-activities" ? (i.append(e), StampedRewardsActivities, StampedRewardsActivities.init(u, i, r)) : f == "rewards-redeem-variable-slider" ? (i.append(e), StampedRewardsRedeemVariableSlider, StampedRewardsRedeemVariableSlider.init(u, i, r)) : f == "rewards-redeem-select-options" && (i.append(e), StampedRewardsRedeemSelectOptions, StampedRewardsRedeemSelectOptions.init(u, i, r));
            fo();
            h("stamped:reviews:widget:loaded")
         }
      }, e)
   }

   function fo() {
      var n = r(".free-tier-banner");
      n.lenght < 1 && r(".free-tier-banner").detach().appendTo("#stamped-reviews-widget")
   }

   function ai(n, i, r) {
      var u, f;
      r ? (u = new Date, u.setTime(u.getTime() + r * 864e5), f = "; expires=" + u.toGMTString()) : f = "";
      t.cookie = n + "=" + i + f + "; path=/; SameSite=None; Secure"
   }

   function vr(n) {
      for (var i, u = n + "=", f = t.cookie.split(";"), r = 0; r < f.length; r++) {
         for (i = f[r]; i.charAt(0) == " ";) i = i.substring(1, i.length);
         if (i.indexOf(u) == 0) return i.substring(u.length, i.length)
      }
      return null
   }

   function ni(n) {
      for (var t in n)(n[t] === null || n[t] === "" || typeof n[t] == "undefined") && delete n[t];
      return n
   }

   function eo(n) {
      var t = {},
         i;
      return r(n).hasClass("new-review-form") || (n = r(n).parents(".new-review-form")), i = r("input,textarea,select,radio", n).serializeArray(), r.each(i, function () {
         t[this.name] !== undefined ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
      }), t
   }

   function oo(n, t) {
      for (var i = [], r = 0; r < t;) i[r++] = n;
      return i.join("")
   }

   function b(n) {
      var t;
      if (r(n).length && (t = r(v).attr("data-animation"), s("Animation: " + t), t !== "false" && t !== !1)) {
         if (ti == !0) return;
         ti = !0;
         var f = r(n),
            i = r("html, body"),
            u = r(v).attr("data-offset") || r(n).attr("data-offset") || 1;
         ki() && (u = r(v).attr("data-offset-mobile") || r(n).attr("data-offset-mobile") || 1);
         i.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            i.stop();
            ti = !1
         });
         i.animate({
            scrollTop: f.offset().top - u
         }, t || 1e3, function () {
            i.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            ti = !1
         })
      }
   }

   function so(n) {
      return n.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
   }

   function ri(n) {
      var t, i;
      n == "review" ? (gt(null, "reviews"), t = r(".new-review-form"), i = r(".new-question-form"), i.slideUp(), i.removeClass("stamped-visible"), t.hasClass("stamped-visible") ? (t.slideUp(), t.removeClass("stamped-visible"), t.attr("aria-expanded", "false")) : (t.slideDown(400, function () {
         b("#stamped-main-widget .new-review-form")
      }), t.addClass("stamped-visible"), t.attr("aria-expanded", "true")), r(t).find("input[type=text]").length > 0 && r(t).find("input[type=text]").get(0).focus()) : n == "question" && (gt(null, "questions"), t = r(".new-question-form"), i = r(".new-review-form"), i.slideUp(), i.removeClass("stamped-visible"), t.hasClass("stamped-visible") ? (t.slideUp(), t.removeClass("stamped-visible")) : (t.slideDown(400, function () {
         b(".new-question-form")
      }), t.addClass("stamped-visible"), i.attr("aria-expanded", "false")), r(t).find("input[type=text]").length > 0 && r(t).find("input[type=text]").get(0).focus())
   }

   function ho() {
      r(".edit-review-form", u).toggle()
   }

   function tf(n) {
      var i, u, t;
      i = r(n).parents(".new-review-form");
      t = r(n).attr("data-value");
      u = r(n).parent();
      i.find("input[name='reviewRating']").val(t);
      co(t, u);
      cs(n)
   }

   function co(n, t) {
      t.find("a:lt(" + n + ")").removeClass("fa-star-o").addClass("fa-star-checked");
      t.find("a:gt(" + (n - 1) + ")").removeClass("fa-star-checked").addClass("fa-star-o")
   }

   function lo(t) {
      var p = u.data("label-submitting"),
         l = r(".new-review-form .stamped-button-primary", u).val(),
         y = null,
         i, a, f, c, v, e, b, w;
      if ((i = eo(t), i.reviewRating) && i.author && i.reviewMessage.trim()) {
         a = {
            productName: u.attr("data-name"),
            productId: u.attr("data-product-id"),
            productSKU: u.attr("data-product-sku"),
            productType: u.attr("data-product-type"),
            productDescription: u.attr("data-description"),
            productImageUrl: u.attr("data-image-url"),
            productUrl: u.attr("data-url"),
            reviewSource: "widget",
            userReference: u.attr("data-user-reference")
         };
         i = r.extend(i, a);
         y = i;
         f = new FormData;
         for (c in i) v = i[c], v.indexOf("+") > -1 && c.indexOf("customFormOption") > -1 && (v = i[c].replace("+", "%2B")), f.append(c, v);
         e = 0;
         for (b in ft) f.append("image" + e, ft[e]), i["image" + e] = ft[e], e++;
         s(Object.prototype.toString.call(f));
         s(f);
         w = {
            url: "" + o.SECURE_ENDPOINT + "/reviews3?" + r.param(ni({
               apiKey: n.StampedGlobalOptions.apiKey,
               sId: n.StampedGlobalOptions.sId,
               storeUrl: n.StampedGlobalOptions.storeUrl
            })),
            cache: !1,
            processData: !1,
            contentType: !1,
            type: "POST",
            data: f._blob ? f._blob() : f,
            beforeSend: function () {
               r("#stamped-button-submit", u).attr("disabled", "disabled");
               p && r("#stamped-button-submit", u).val(p)
            },
            error: function (n) {
               h("stamped:reviews:submitError");
               o.is_ignore_submit_error == !0 ? rf(y, n, a, l) : (r("#stamped-button-submit", u).removeAttr("disabled"), l && r("#stamped-button-submit", u).val(l))
            },
            success: function (n) {
               rf(y, n, a, l)
            }
         };
         r.ajax(w)
      }
   }

   function rf(n, t, i, f) {
      r(v).length && (no(n), r(".stamped-user-review", u).hide(), r(".stamped-thank-you", u).show(), r(".stamped-thank-you p", u).show(), r(".stamped-thank-you .stamped-share-links", u).show(), r(".new-review-form", u).hide(), r(".edit-review-form", u).hide(), r(".stamped-summary-actions-newreview").hide(), r("#stamped-button-submit", u).removeAttr("disabled"), f && r("#stamped-button-submit", u).val(f), b(v), be(i.productId, t.userReference, !0));
      h("stamped:reviews:submitted")
   }

   function ao(t) {
      var u = !t ? r("#new-question-form") : r(t),
         f = r(v);
      if (u.length && f.length) {
         var e = f.data("name"),
            o = f.data("description"),
            s = f.data("product-sku"),
            h = f.data("url"),
            c = f.data("image-url"),
            i = u.serializeArray();
         i.push({
            name: "productName",
            value: e
         });
         i.push({
            name: "productDescription",
            value: o
         });
         i.push({
            name: "productSKU",
            value: s
         });
         i.push({
            name: "productUrl",
            value: h
         });
         i.push({
            name: "productImageUrl",
            value: c
         });
         i.push({
            name: "apiKey",
            value: n.StampedGlobalOptions.apiKey
         });
         i.push({
            name: "sId",
            value: n.StampedGlobalOptions.sId
         });
         i.push({
            name: "storeUrl",
            value: n.StampedGlobalOptions.storeUrl
         });
         r('input[type="submit"]', u).attr("disabled", "disabled");
         r.ajax({
            type: "POST",
            url: "https://stamped.io/api/questions",
            data: r.param(i),
            crossDomain: !0,
            success: function () {
               u.hide();
               r(".question-form-wrapper .stamped-form-message-success").show();
               r(".stamped-form-message-success").attr("aria-live", "polite");
               u[0].reset();
               r('input[type="submit"]', u).removeAttr("disabled")
            }
         })
      }
   }

   function ui(n) {
      var t = 1;
      n && (t = r(n).data("page"));
      or(t)
   }

   function ot(n, t, i) {
      var o, f, e;
      r || jQuery && (r = jQuery);
      i && r(i).closest(v).length && (u = r(i).closest(v));
      o = u.attr("data-product-id");
      f = r(".stamped-summary-ratings.selected .summary-rating-bar.selected", u).attr("data-rating");
      f && (t = f);
      r(".stamped-sort-select", u).length && (e = r(".stamped-sort-select", u).val());
      dt(n, e, t)
   }

   function vo(n) {
      var t = u.attr("data-product-id");
      n.value && dt(1, n.value, null, !0)
   }

   function yo(n) {
      n.value && or(1, n.value)
   }

   function po(n) {
      var i = r("option:first-child", n).text(),
         f = n.value,
         t, e;
      st = {};
      t = 1;
      r("select.stamped-filter-select").each(function () {
         var n = r("option:first-child", this).text(),
            i = this.value;
         st["qt" + t] = n;
         st["qv" + t] = i;
         t++
      });
      r(".stamped-reviews-filter .stamped-summary-actions-clear").show();
      r(".stamped-reviews", u).attr("data-filtered", "true");
      r(".stamped-sort-select").length && (e = r(".stamped-sort-select").val());
      dt(1, e, null, !0);
      i && f && nr({
         customOptionTitle: i,
         customOptionValue: f
      }, u.attr("data-product-id"))
   }

   function uf(n) {
      if (n == "qna") r(".stamped-questions-filter .stamped-summary-actions-clear").hide(), r(".stamped-questions-search-input").val(""), r(".stamped-questions-search-clear").hide(), r(u).removeAttr("data-search-qna"), ui();
      else {
         r("select.stamped-filter-select").each(function () {
            r(this).val("")
         });
         r(".stamped-summary-keywords-list li").removeClass("selected");
         r(u).removeAttr("data-keyword");
         r(".stamped-reviews-filter .stamped-summary-actions-clear").hide();
         r(".stamped-reviews", u).removeAttr("data-filtered");
         var t;
         r(".stamped-sort-select").length && (t = r(".stamped-sort-select").val());
         st = {};
         r(".stamped-reviews-search-input").val("");
         r(".stamped-reviews-search-clear").hide();
         r(u).removeAttr("data-search");
         er();
         dt(1, t, null, !0)
      }
   }

   function wo(n, t) {
      var i = r(n).data("page"),
         u = r(n).closest("#stamped-reviews-widget");
      u.attr("data-page", i);
      ro(u, i, t)
   }

   function bo(t, i, u) {
      var e = r(t),
         f = e.parent();
      f.fadeTo("slow", .3);
      e.addClass("disable-link");
      r.ajax({
         type: "POST",
         url: o.SECURE_ENDPOINT + "/reviews/vote",
         data: {
            reviewId: i,
            vote: u,
            apiKey: n.StampedGlobalOptions.apiKey,
            sId: n.StampedGlobalOptions.sId,
            storeUrl: n.StampedGlobalOptions.storeUrl
         },
         success: function (n) {
            r(".stamped-thumbs-up", f).attr("data-count", n.voteUp);
            r(".stamped-thumbs-down", f).attr("data-count", n.voteDown);
            r(".stamped-ugc-modal-vote-up", f).attr("data-count", n.voteUp);
            r(".stamped-ugc-modal-vote-down", f).attr("data-count", n.voteDown);
            r(".stamped-thumbs-up i", f).html("  " + n.voteUp);
            r(".stamped-thumbs-down i", f).html("  " + n.voteDown);
            f.fadeTo("slow", 1);
            e.removeClass("disable-link")
         }
      })
   }

   function go(t, i, f, e) {
      var h, s;
      if (vi) {
         for (h = null, s = 0; s < it.length; s++) it[s].id == t && (h = s);
         h != null && (f, StampedFn.openUGCModal(it, h, r(v), null, null, f, yr));
         vi = !1
      } else {
         vi = !0;
         var y = o.SECURE_ENDPOINT + "/widget/reviews",
            p = r(u).attr("data-product-sku") || "",
            c = "",
            l = "",
            a = [];
         e === !0 ? (i = r(u).attr("data-product-id") || "", c = r(u).attr("data-name") || "", l = r(u).attr("data-product-type") || "") : r(".stamped-reviews .stamped-review", u).each(function () {
            var t = r(this),
               n = t.attr("id");
            n = n.replace("stamped-review-", "");
            n && a.push(n)
         });
         r.ajax({
            type: "GET",
            url: y + "?" + r.param(ni({
               type: "widget-carousel-photos",
               reviewId: t,
               reviewIds: a,
               productId: i,
               productSKU: p,
               productType: l,
               productTitle: c,
               random: !1,
               isFillEmpty: !1,
               page: 1,
               skip: 100,
               minRating: 1,
               isWithPhotos: !0,
               apiKey: n.StampedGlobalOptions.apiKey,
               sId: n.StampedGlobalOptions.sId,
               storeUrl: n.StampedGlobalOptions.storeUrl
            })),
            dataType: "json",
            success: function (n) {
               var e, u;
               for (it = n.data, e = null, u = 0; u < it.length; u++) it[u].id == t && (e = u);
               e != null && (f, yr = n.lang, StampedFn.openUGCModal(it, e, r(v), null, null, f, yr, n.translations));
               vi = !1;
               ko = i
            }
         })
      }
      return !1
   }

   function ns(i) {
      var u, f = setInterval(function () {
         typeof n.StampedGlobalOptions != "undefined" && (i !== null && i.orderId && r.ajax({
            type: "GET",
            url: "https://stamped.io/api/plugin/facebookmessenger?" + r.param(ni({
               apiKey: n.StampedGlobalOptions.apiKey,
               sId: n.StampedGlobalOptions.sId,
               storeUrl: n.StampedGlobalOptions.storeUrl,
               orderId: i.orderId,
               customerEmail: i.customerEmail
            })),
            success: function (n) {
               var u, i, f;
               r("body").append(n.html);
               u = r("#stamped-facebook-optin .fb-send-to-messenger")[0].outerHTML;
               i = t.createElement("iframe");
               i.height = "100";
               i.width = "100%";
               f = "<!DOCTYPE html> <html> <head> <meta charset='utf-8' /> <title><\/title> <\/head> <script> var fbPageId, fbUserRef; window.fbAsyncInit = function() { FB.init({ appId : '941057476855139', xfbml : true, version : 'v6.0' }); FB.Event.subscribe('send_to_messenger', function(e) { var modal = window.top.document.getElementById('stamped-facebook-optin'); if (e.event == 'rendered'){ modal.style.display = 'block'; } if (e.event == 'opt_in'){ console.log('hide'); modal.style.display = 'none'; } }); }; (function(d, s, id){ var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = '//connect.facebook.net/en_US/sdk.js'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk') ); <\/script> <body>" + u + "<\/body> <\/html>";
               t.body.appendChild(i);
               r(i).appendTo("#stamped-facebook-optin .fb-send-to-messenger");
               i.contentWindow.document.open();
               i.contentWindow.document.write(f);
               i.contentWindow.document.close()
            }
         }), clearInterval(f));
         u++;
         u >= 5 && clearInterval(f)
      }, 2e3)
   }

   function ts() {
      r("#stamped-facebook-optin").remove()
   }

   function k(t, i) {
      i || (i = n.location.href);
      t = t.replace(/[\[\]]/g, "\\$&");
      var u = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
         r = u.exec(i);
      return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
   }

   function s(t, i) {
      var u = k("stamped_debug") == "true" || n.stamped_debug == !0,
         r = n.stamped_debug_level || k("stamped_debug_level");
      u && (i || console.log("[Stamped.io]", t), i && r && console.log("[Stamped.io level" + r + "]", t))
   }

   function yi(n, i) {
      ut = t.createElement("script");
      ut.type = "text/javascript";
      ut.charset = "UTF-8";
      ut.src = n;
      var r = t.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(ut, r);
      ut.onload = ut.onreadystatechange = i
   }

   function is(n) {
      for (var i, f, e, u = t.styleSheets, r = 0, o = u.length; r < o; r++)
         if (u[r] && u[r].href && u[r].href.indexOf(n) > -1) return;
      i = t.createElement("link");
      i.rel = "stylesheet";
      i.href = n;
      i.type = "text/css";
      f = t.getElementsByTagName("link")[0];
      f ? f.parentNode.insertBefore(i, f) : (e = t.getElementsByTagName("head")[0], i.setAttribute("async", ""), e.appendChild(i))
   }

   function ff(n, t) {
      try {
         return typeof Storage != "undefined" ? (localStorage.setItem(n, JSON.stringify(t)), !0) : !1
      } catch (i) {}
   }

   function ef(n) {
      try {
         if (typeof Storage != "undefined") {
            var t;
            try {
               t = JSON.parse(localStorage.getItem(n)) || null
            } catch (i) {
               t = localStorage.getItem(n)
            }
            return t
         }
         return !1
      } catch (r) {}
   }

   function rs(n) {
      Object.assign(o, n)
   }

   function us() {
      return o
   }

   function of (n, t) {
      var f = "stamped_app_key",
         r = ef(f),
         i, u;
      r && r.apiKey ? (s(r), h("stamped:init:getAppKey", {
         detail: r
      }), fi(r)) : (i = new XMLHttpRequest, i.onreadystatechange = function () {
         var n, t;
         i.readyState === 4 && i.status === 200 && (n = JSON.parse(i.responseText), n && n.apiKey && (ff(f, n), h("stamped:init:getAppKey", {
            detail: n
         }), n.skip === !0 || (appKey = n.apiKey, t = {
            apiKey: appKey
         }, typeof Shopify != "undefined" ? t.storeUrl = Shopify.shop : t.sId = n.sId, fi(t))))
      }, u = "", n == "shopify" ? u = "shopShopifyDomain=" + t : n == "bigcommerce" && (u = "storeHash=" + t), i.open("GET", "https://stamped.io/api/getappkey?" + u, !0), i.send())
   }

   function fi(t) {
      if (n.isInitializedStamped == !0) {
         s("Already initalized");
         StampedFn.loadWidget(!0);
         StampedFn.loadDisplayWidgets();
         return
      }
      if (n.isInitializedStamped = !0, t && (br = t.storeUrl, n.StampedGlobalOptions = t), n.StampedGlobalOptions && n.StampedGlobalOptions.apiKey) {
         var i = k("stamped_force_jquery") == "true" || o.is_force_jquery;
         typeof jQuery == "undefined" || i == !0 ? yi("https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js", function () {
            r = jQuery.noConflict(!0);
            nu();
            n.isInitializedStamped = !0
         }) : (nu(null, jQuery), n.isInitializedStamped = !0)
      }
   }

   function es(n, i) {
      t.addEventListener ? t.addEventListener(n, i) : t.attachEvent("on" + n, function () {
         i.call(t)
      })
   }

   function h(i, r) {
      var u;
      n.CustomEvent ? u = new CustomEvent(i, r) : (u = t.createEvent("CustomEvent"), u.initCustomEvent(i, !0, !0, r));
      try {
         t.dispatchEvent(u)
      } catch (f) {}
   }

   function os() {
      r(".stamped-tabs > li").click(function () {
         var t = Array.prototype.slice.call(this.parentNode.children),
            n;
         t.forEach(function (n) {
            n.setAttribute("aria-selected", !1)
         });
         n = this.getAttribute("aria-selected");
         this.setAttribute("aria-selected", !JSON.parse(n))
      });
      r(".stamped-share-icon").click(function () {
         var t = r(this).siblings(".stamped-share-links"),
            n = t.attr("aria-expanded"),
            i = typeof n != "undefined" && n !== !1 ? n : "false";
         t.attr("aria-expanded", i == "true" ? "false" : "true");
         r(this).toggleClass("stamped-active")
      });
      r(".stamped-rating-holder > a").click(function () {
         var t = Array.prototype.slice.call(this.parentNode.children),
            n;
         t.forEach(function (n) {
            n.setAttribute("aria-pressed", !1)
         });
         n = this.getAttribute("aria-pressed");
         this.setAttribute("aria-pressed", !JSON.parse(n))
      })
   }

   function ss() {
      var n = Array.prototype.slice.call(r(".stamped-pagination > li"));
      n.forEach(function (n) {
         n.classList.contains("active") ? n.children[0].setAttribute("aria-current", "page") : n.removeAttribute("aria-current")
      })
   }

   function hs() {
      r(".stamped-ugc-modal-votes > span").click(function () {
         var t = Array.prototype.slice.call(this.parentNode.children),
            n;
         t.forEach(function (n) {
            n.setAttribute("aria-pressed", !1)
         });
         n = this.getAttribute("aria-pressed");
         this.setAttribute("aria-pressed", !JSON.parse(n))
      })
   }

   function cs(n) {
      var i = Array.prototype.slice.call(n.parentNode.children),
         t;
      i.forEach(function (n) {
         n.setAttribute("aria-pressed", !1)
      });
      t = n.getAttribute("aria-pressed");
      n.setAttribute("aria-pressed", !JSON.parse(t))
   }
   var o = {
         SERVICE_HOST: {
            svc_loyalty_widget: "https://stamped.io/api/widgets/loyalty",
            svc_loyalty_engine: "https://stamped.io/api/v3/loyalty",
            svc_identity: "https://stamped.io/api/v3/identity"
         },
         DEFAULT_ENDPOINT: n.stamped_ajax_url || "//stamped.io/api",
         SECURE_ENDPOINT: n.stamped_ajax_secure_url || "https://stamped.io/api",
         metafields: n.mainWidgetMetafields || "",
         exclude_main_css: n.stamped_exclude_main_css || !1,
         exclude_font: n.stamped_disable_font || !1,
         disable_single_review: n.stamped_disable_review_single || !1,
         modal_ugc_image_viewer: n.stamped_modal_ugc_viewer_type || "image",
         is_preview: n.isStampedLauncherPreview || !1,
         is_init_rewards: !0,
         is_force_jquery: n.stamped_force_jquery || !1,
         is_disable_cache_badge: n.stamped_disable_cache_badge || !1,
         is_disable_cache: n.stamped_disable_cache || !1,
         referral_code: null,
         is_rewards_code_copy: !1,
         is_ignore_submit_error: !1,
         rewards_apply_discount_url_format: n.stamped_rewards_apply_discount_url_format || "",
         slick_options: n.stamped_slick_options || {
            dots: !1,
            infinite: !1,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            slide: ".stamped-review",
            initialSlide: 0,
            rows: 0,
            responsive: [{
               breakpoint: 1024,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
               }
            }, {
               breakpoint: 600,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
               }
            }, {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }]
         },
         includes_options: {
            rewards_button_js: !0,
            rewards_window_js: !0
         }
      },
      l = !1,
      p = !1,
      d = "",
      cf, et, tt, li, sr, hr, ti, w, lt, pr, pi, ei, wr;
   let at = n.location.href.split("?")[1];
   if (at && (at = at.split("#")[0]), at) {
      let n = new URLSearchParams(at);
      n.get("test") === "loyalty2023" && (console.log("test loyalty 2023 preview"), p = !0);
      n.has("testLoyaltyAccount") && (console.log("test loyalty 2023 account"), d = n.get("testLoyaltyAccount"))
   }
   var ut, r, wi = !1,
      bi = !1,
      br = "";
   n.StampedGlobalOptions = {};
   n.isInitializedStamped = !1;
   var u, oi = [],
      ft = [],
      it = [],
      st = {},
      v = "div#stamped-main-widget",
      e = {},
      g, rt, ht, vt, nt, si, yt, pt, wt, bt, f, kt, kr = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }";
   n.newFormatStringStamped = (n, t) => {
      let i = n;
      return i ? (t.forEach((n, t) => {
         i = i.replaceAll(`{${t}}`, n)
      }), i) : ""
   };
   String.prototype.formatStringStamped = function () {
         for (var i, t = this, n = 0; n < arguments.length; n++) i = new RegExp("\\{" + n + "\\}", "gi"), t = t.replace(i, arguments[n]);
         return t
      },
      function () {
         function i(n, i) {
            i = i || {
               bubbles: !1,
               cancelable: !1,
               detail: undefined
            };
            var r = t.createEvent("CustomEvent");
            return r.initCustomEvent(n, i.bubbles, i.cancelable, i.detail), r
         }
         if (typeof n.CustomEvent == "function") return !1;
         i.prototype = n.Event.prototype;
         n.CustomEvent = i
      }();
   n.lazyLoadOptionsStamped = {
      elements_selector: ".stamped-lazyload"
   };
   n.addEventListener("LazyLoad::Initialized", function (t) {
      n.LazyLoadStamped = t.detail.instance
   }, !1);
   cf = function () {
      "use strict";
      var f = "undefined" != typeof n,
         l = f && !("onscroll" in n) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
         ft = f && "IntersectionObserver" in n,
         a = f && "classList" in t.createElement("p"),
         et = {
            elements_selector: "img",
            container: l || f ? t : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "stamped-lazyload-loading",
            class_loaded: "stamped-lazyload-loaded",
            class_error: "stamped-lazyload-error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_reveal: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1
         },
         v = function (i, r) {
            var u, f = new i(r);
            try {
               u = new CustomEvent("LazyLoad::Initialized", {
                  detail: {
                     instance: f
                  }
               })
            } catch (i) {
               (u = t.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                  instance: f
               })
            }
            try {
               n.dispatchEvent(u)
            } catch (r) {}
         },
         i = function (n, t) {
            return n.getAttribute("data-" + t)
         },
         y = function (n, t, i) {
            var r = "data-" + t;
            null !== i ? n.setAttribute(r, i) : n.removeAttribute(r)
         },
         p = function (n) {
            return "true" === i(n, "was-processed")
         },
         w = function (n, t) {
            return y(n, "ll-timeout", t)
         },
         b = function (n) {
            return i(n, "ll-timeout")
         },
         r = function (n, t) {
            n && n(t)
         },
         k = function (n, t) {
            n._loadingCount += t;
            0 === n._elements.length && 0 === n._loadingCount && r(n._settings.callback_finish)
         },
         d = function (n) {
            for (var t, i = [], r = 0; t = n.children[r]; r += 1) "SOURCE" === t.tagName && i.push(t);
            return i
         },
         u = function (n, t, i) {
            i && n.setAttribute(t, i)
         },
         g = function (n, t) {
            u(n, "sizes", i(n, t.data_sizes));
            u(n, "srcset", i(n, t.data_srcset));
            u(n, "src", i(n, t.data_src))
         },
         ot = {
            IMG: function (n, t) {
               var i = n.parentNode;
               i && "PICTURE" === i.tagName && d(i).forEach(function (n) {
                  g(n, t)
               });
               g(n, t)
            },
            IFRAME: function (n, t) {
               u(n, "src", i(n, t.data_src))
            },
            VIDEO: function (n, t) {
               d(n).forEach(function (n) {
                  u(n, "src", i(n, t.data_src))
               });
               u(n, "src", i(n, t.data_src));
               n.load()
            }
         },
         st = function (n, t) {
            var r, u, f = t._settings,
               o = n.tagName,
               e = ot[o];
            if (e) return e(n, f), k(t, 1), void(t._elements = (r = t._elements, u = n, r.filter(function (n) {
               return n !== u
            })));
            ! function (n, t) {
               var r = i(n, t.data_src),
                  u = i(n, t.data_bg);
               r && (n.style.backgroundImage = 'url("'.concat(r, '")'));
               u && (n.style.backgroundImage = u)
            }(n, f)
         },
         nt = function (n, t) {
            a ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
         },
         e = function (n, t, i) {
            n.addEventListener(t, i)
         },
         o = function (n, t, i) {
            n.removeEventListener(t, i)
         },
         tt = function (n, t, i) {
            o(n, "load", t);
            o(n, "loadeddata", t);
            o(n, "error", i)
         },
         it = function (n, t, i) {
            var u = i._settings,
               e = t ? u.class_loaded : u.class_error,
               o = t ? u.callback_loaded : u.callback_error,
               f = n.target;
            ! function (n, t) {
               a ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            }(f, u.class_loading);
            nt(f, e);
            r(o, f);
            k(i, -1)
         },
         ht = function (n, t) {
            var i = function i(u) {
                  it(u, !0, t);
                  tt(n, i, r)
               },
               r = function r(u) {
                  it(u, !1, t);
                  tt(n, i, r)
               };
            ! function (n, t, i) {
               e(n, "load", t);
               e(n, "loadeddata", t);
               e(n, "error", i)
            }(n, i, r)
         },
         ct = ["IMG", "IFRAME", "VIDEO"],
         s = function (n, t) {
            var i = t._observer;
            h(n, t);
            i && t._settings.auto_unobserve && i.unobserve(n)
         },
         rt = function (n) {
            var t = b(n);
            t && (clearTimeout(t), w(n, null))
         },
         lt = function (n, t) {
            var r = t._settings.load_delay,
               i = b(n);
            i || (i = setTimeout(function () {
               s(n, t);
               rt(n)
            }, r), w(n, i))
         },
         h = function (n, t, i) {
            var u = t._settings;
            !i && p(n) || (ct.indexOf(n.tagName) > -1 && (ht(n, t), nt(n, u.class_loading)), st(n, t), function (n) {
               y(n, "was-processed", "true")
            }(n), r(u.callback_reveal, n), r(u.callback_set, n))
         },
         at = function (n) {
            return !!ft && (n._observer = new IntersectionObserver(function (t) {
               t.forEach(function (t) {
                  return function (n) {
                     return n.isIntersecting || n.intersectionRatio > 0
                  }(t) ? function (n, t) {
                     var i = t._settings;
                     r(i.callback_enter, n);
                     i.load_delay ? lt(n, t) : s(n, t)
                  }(t.target, n) : function (n, t) {
                     var i = t._settings;
                     r(i.callback_exit, n);
                     i.load_delay && rt(n)
                  }(t.target, n)
               })
            }, {
               root: (i = n._settings).container === t ? null : i.container,
               rootMargin: i.thresholds || i.threshold + "px"
            }), !0);
            var i
         },
         vt = ["IMG", "IFRAME"],
         ut = function (n, t) {
            return function (n) {
               return n.filter(function (n) {
                  return !p(n)
               })
            }((i = n || function (n) {
               return n.container.querySelectorAll(n.elements_selector)
            }(t), Array.prototype.slice.call(i)));
            var i
         },
         c = function (n, t) {
            this._settings = function (n) {
               return gr({}, et, n)
            }(n);
            this._loadingCount = 0;
            at(this);
            this.update(t)
         };
      return c.prototype = {
         update: function (n) {
            var i, r = this,
               t = this._settings;
            (this._elements = ut(n, t), !l && this._observer) ? (function (n) {
               return n.use_native && "loading" in HTMLImageElement.prototype
            }(t) && ((i = this)._elements.forEach(function (n) {
               -1 !== vt.indexOf(n.tagName) && (n.setAttribute("loading", "lazy"), h(n, i))
            }), this._elements = ut(n, t)), this._elements.forEach(function (n) {
               r._observer.observe(n)
            })) : this.loadAll()
         },
         destroy: function () {
            var n = this;
            this._observer && (this._elements.forEach(function (t) {
               n._observer.unobserve(t)
            }), this._observer = null);
            this._elements = null;
            this._settings = null
         },
         load: function (n, t) {
            h(n, this, t)
         },
         loadAll: function () {
            var n = this;
            this._elements.forEach(function (t) {
               s(t, n)
            })
         }
      }, f && function (n, t) {
         if (t)
            if (t.length)
               for (var i, r = 0; i = t[r]; r += 1) v(n, i);
            else v(n, t)
      }(c, n.lazyLoadOptionsStamped), c
   }();
   ! function (n, t) {
      "object" == typeof module && module.exports ? (module.exports = t(), module.exports.default = module.exports) : n.timeagoStamped = t()
   }("undefined" != typeof n ? n : this, function () {
      function o(n) {
         return n instanceof Date ? n : isNaN(n) ? /^\d+$/.test(n) ? new Date(u(n)) : (n = (n || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(n)) : new Date(u(n))
      }

      function u(n) {
         return parseInt(n)
      }

      function s(n, i, f) {
         i = r[i] ? i : r[f] ? f : "en";
         for (var e = 0, o = n < 0 ? 1 : 0, s = n = Math.abs(n); n >= t[e] && e < l; e++) n /= t[e];
         return n = u(n), e *= 2, n > (0 === e ? 9 : 1) && (e += 1), r[i](n, e, s)[o].replace("%s", n)
      }

      function h(n, t) {
         return ((t = t ? o(t) : new Date) - o(n)) / 1e3
      }

      function a(n) {
         for (var u = 1, i = 0, r = Math.abs(n); n >= t[i] && i < l; i++) n /= t[i], u *= t[i];
         return r %= u, r = r ? u - r : u, Math.ceil(r)
      }

      function v(n) {
         return n.dataset.timeagoStamped ? n.dataset.timeagoStamped : c(n, k)
      }

      function c(n, t) {
         return n.getAttribute ? n.getAttribute(t) : n.attr ? n.attr(t) : void 0
      }

      function y(n, t) {
         return n.setAttribute ? n.setAttribute(e, t) : n.attr ? n.attr(e, t) : void 0
      }

      function p(n) {
         return c(n, e)
      }

      function n(n, t) {
         this.nowDate = n;
         this.defaultLocale = t || "en"
      }

      function f(t, i) {
         return new n(t, i)
      }
      var w = "second_minute_hour_day_week_month_month".split("_"),
         b = "".split("_"),
         r = {
            en: function (n, t) {
               if (0 === t) return ["just now", "right now"];
               var i = w[parseInt(t / 2)];
               return n > 1 && (i += "s"), [n + " " + i + " ago", "in " + n + " " + i]
            },
            zh_CN: function (n, t) {
               if (0 === t) return ["", ""];
               var i = b[parseInt(t / 2)];
               return [n + i + "", n + i + ""]
            }
         },
         t = [60, 60, 24, 7, 365 / 84, 1],
         l = 6,
         k = "datetime",
         e = "data-tid",
         i = {};
      return n.prototype.doRender = function (n, t, r) {
         var u, f = h(t, this.nowDate),
            e = this;
         n.innerHTML = s(f, r, this.defaultLocale);
         i[u = setTimeout(function () {
            e.doRender(n, t, r);
            delete i[u]
         }, Math.min(1e3 * a(f), 2147483647))] = 0;
         y(n, u)
      }, n.prototype.formatDateString = function (n, t) {
         return s(h(n, this.nowDate), t, this.defaultLocale)
      }, n.prototype.render = function (n, t) {
         void 0 === n.length && (n = [n]);
         for (var i = 0, r = n.length; i < r; i++) this.doRender(n[i], v(n[i]), t)
      }, n.prototype.setLocale = function (n) {
         this.defaultLocale = n
      }, f.register = function (n, t) {
         r[n] = t
      }, f.cancel = function (n) {
         var t;
         if (n)(t = p(n)) && (clearTimeout(t), delete i[t]);
         else {
            for (t in i) clearTimeout(t);
            i = {}
         }
      }, f
   });
   tt = 0;
   li = null;
   sr = [];
   hr = !1;
   ti = !1;
   String.linkify || (String.prototype.linkify = function () {
      return this.replace(/\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim, '<a href="$&" target="_blank">$&<\/a>').replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2<\/a>').replace(/[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim, '<a href="mailto:$&">$&<\/a>')
   });
   var vi = !1,
      ko = null,
      yr = null;
   if (w = t.getElementById("stamped-script-widget"), w || (w = t.getElementById("stamped-script-init")), lt = "", w && (lt = w.src), pr = !1, (lt.indexOf("skipCss=true") > 0 || o.exclude_main_css == !0) && (pr = !0), pr || is("//cdn1.stamped.io/files/widget.min.css"), typeof Shopify != "undefined" && (pi = !1, Shopify.shop && (w != null && (lt.indexOf("skip=true") > -1 && (pi = !0), ei = w.getAttribute("data-api-key"), !ei && lt.indexOf("apiKey") > -1 && (ei = k("apiKey", lt)), ei && (pi = !0, fi({
         apiKey: ei,
         storeUrl: Shopify.shop
      }))), pi || of ("shopify", Shopify.shop)), Shopify.Checkout && typeof StampedShopifyCheckout == "undefined")) {
      if (typeof n.StampedShopifyCheckout == "function") return !1;
      yi("//cdn1.stamped.io/files/shopify-checkout.min.js", function () {
         h("stamped:script-shopify-checkout:loaded")
      })
   }
   if (w != null) {
      wr = w.getAttribute("data-store-hash");
      wr && of ("bigcommerce", wr);
      var sf = w.getAttribute("data-store-id"),
         hf = w.getAttribute("data-api-key"),
         fs = w.getAttribute("data-auto-init");
      sf && hf && fs != "false" && fi({
         apiKey: hf,
         sId: sf
      })
   }
   return {
      init: fi,
      initRewards: iu,
      reloadUGC: tu,
      toggleForm: ri,
      setRating: tf,
      submitForm: lo,
      submitQuestionForm: ao,
      toggleFormEdit: ho,
      pageQuestions: ui,
      sortQuestions: yo,
      pageReviews: ot,
      sortReviews: vo,
      filterReviews: po,
      filterClear: uf,
      pageWidget: wo,
      loadBadges: yu,
      loadWidget: au,
      loadDisplayWidgets: pu,
      loadDisplayWidgetsRewards: wu,
      voteReview: bo,
      openUGCModal: io,
      openUGCPhoto: go,
      initOptions: n.StampedGlobalOptions,
      loadSurveyOptin: ns,
      closeSurveyOptin: ts,
      triggerEvent: h,
      on: es,
      jQuery: r,
      stampedLog: s,
      getOptions: us,
      setOptions: rs,
      getLoggedInCustomer: af,
      getDataRewards: vf,
      loadLauncherView: y,
      scrollLauncherView: ne,
      toggleLauncher: ct,
      toggleRewardsModal: ct,
      rewardsApplyCode: fe,
      rewardsReferralClaimCode: se,
      rewardsReferralSendEmail: ee,
      rewardsLink: he,
      rewardsRedeem: wf,
      rewardsPointsRefresh: hi,
      rewardsReferralCopy: ue,
      rewardsCreateActivity: fu,
      rewardsTriggerEarn: ur,
      rewardsTriggerSpend: su,
      triggerEarnActivity: rr,
      triggerRedeemActivity: fr,
      claimAffiliateProgramReward: oe,
      sendAffiliateInvite: hu,
      resetSendAffiliateInvite: cu,
      getLauncherWindow: function () {
         return f
      }
   }
}(window, document);