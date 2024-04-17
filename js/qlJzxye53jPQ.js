var ZAPL = {};
ZAPL.ScriptMaker = function (e, t) {
   var a = document.createElement("script");
   a.type = "text/javascript", a.src = e, "" != t && (a.onload = t), document.getElementsByTagName("head")[0].appendChild(a)
};
ZAPL.is_product_details_found = 0;
ZAPL.productDetailsPage = function () {
   if (meta.page.pageType == 'product') {
      var d_img, c_img = jQuery("img.zend_img_prod_details");
      var z_image = jQuery('img[src*="/products/"][src*="/cdn.shopify.com/s/files/"]').filter('[src*=".jpg"],[src*=".JPG"],[src*=".jpeg"],[src*=".png"],[src*=".gif"]');
      if (z_image.length == 0) {
         z_image = jQuery('img[srcset*="/products/"][srcset*="/cdn.shopify.com/s/files/"]').filter('[srcset*=".jpg"],[src*=".JPG"],[srcset*=".jpeg"],[srcset*=".png"],[srcset*=".gif"]');
      }
      var i = 0;
      z_image.each(function (index, ele) {
         var r = ele.width;
         r > i && (i = r, d_img = ele)
      });
      var url = location.href.split('/products/');
      url = '/products/' + url[1];
      c_img = jQuery(".product-image-main img");
      if (c_img.length > 0) {
         ZAPL.is_product_details_found = 1;
         jQuery(c_img).each(function (i, ele) {
            jQuery(ele).after("<a href='" + url + "'></a>");
         });
      } else if (d_img != "undefined") {
         ZAPL.is_product_details_found = 1;
         jQuery(d_img).after("<a href='" + url + "'></a>");
      }
   }
};
ZAPL.init = function () {
   var a, i, n, o, s, t, is_added = false,
      a_href, q;
   o = jQuery('a[href^="/products/"],a[href^="/collections/"],a[href^="https://www.nanorcollection.com/products/"],a[href^="https://www.nanorcollection.com/collections/"],a[href^="https://nanorcollection.com/products/"],a[href^="https://nanorcollection.com/collections/"],a[href^="http://www.nanorcollection.com/products/"],a[href^="http://www.nanorcollection.com/collections/"],a[href^="http://nanorcollection.com/products/"],a[href^="http://nanorcollection.com/collections/"]');
   t = 0;
   while (t < o.length) {
      try {
         i = o.eq(t);
         n = i.attr('href').split('/');
         a = n[n.length - 1].split('?')[0];
         s = i.parent();
         a_href = i.attr('href');
         if ((a_href.indexOf('/collections/') != -1 && a_href.indexOf('/products/') != -1) || (a_href.indexOf('/collections/') == -1 && a_href.indexOf('/products/') != -1)) {
            jQuery.each(ZAPL.products, function (index, ele) {
               var is_label_appended = 0;
               if (a === ele.handle || a === encodeURI(ele.handle)) {
                  is_added = true;
                  var con = s.find("img").first();
                  if (con.length == 0) {
                     con1 = jQuery(s).find('div[background-image!=none]:first');
                     if (jQuery(con1).css("background-image") != 'none') {
                        con = con1;
                     }
                  }
                  if (!s.hasClass("zend_ribbon_container") && s.find(".zend_ribbon_container").length < 1 && con.length != 0) {
                     var labels = ele.label_id.split(',');
                     jQuery.each(labels, function (k, k_ele) {
                        jQuery.each(ZAPL.labels, function (index, value) {
                           if (k_ele == value['id']) {
                              if (value['show'] == 'product' && meta.page.pageType == 'product') {
                                 con.after(ZAPL["template" + k_ele]);
                                 is_label_appended = 1;
                              } else if (value['show'] == 'collection' && meta.page.pageType == 'collection') {
                                 con.after(ZAPL["template" + k_ele]);
                                 is_label_appended = 1;
                              } else if (value['show'] == 'both') {
                                 con.after(ZAPL["template" + k_ele]);
                                 is_label_appended = 1;
                              }
                           }
                        });
                     });
                     if (is_label_appended) {
                        s.addClass("zend_ribbon_container");
                     }
                  }
               }
            });
         }++t;
      } catch (e) {}
   }
};

function ZAPL_ready() {
   if (window.location.href.indexOf('/cart') > -1) {
      return false;
   }
   ZAPL.products = JSON.parse('[{"handle":"effervescent-1","label_id":"8907"},{"handle":"fruity-set","label_id":"8940"},{"handle":"copy-of-ambrosial-scented-candle-7oz","label_id":"8907"},{"handle":"musky-set","label_id":"8940"},{"handle":"taiga","label_id":"8907"},{"handle":"woodsy-gift-set","label_id":"8940"},{"handle":"effervescent","label_id":"8907"},{"handle":"travel-candle-gift-set","label_id":"8940"},{"handle":"debonair","label_id":"8907"},{"handle":"incandescent","label_id":"8907"},{"handle":"xx-gift-set","label_id":"8940"},{"handle":"cozy-set","label_id":"8940"},{"handle":"deluxe-gift","label_id":"8940"},{"handle":"discovery-gift","label_id":"8940"},{"handle":"xxx-gift-set-2","label_id":"8940"},{"handle":"opulent","label_id":"8907"},{"handle":"quintessence","label_id":"8907"},{"handle":"candle-lovers-gift-set","label_id":"8940"},{"handle":"skin-care-essential-gift-set","label_id":"8940"},{"handle":"the-perfect-trio-gift-set","label_id":"8940"},{"handle":"xxx-gift-set-1","label_id":"8940"},{"handle":"cassia","label_id":"8907"},{"handle":"dapper","label_id":"8907"},{"handle":"elegance-gift","label_id":"8940"},{"handle":"xxx-andle-gift-set","label_id":"8940"},{"handle":"dolce-gabbana-colomba-italian-easter-dove-cake-w-sicilian-almonds-750-g","label_id":"11252"},{"handle":"dolce-gabbana-colomba-easter-dove-cake-w-strawberry-preserves-sicilian-chocolate-spread-1-kg","label_id":"11252"},{"handle":"fiasconaro-dolce-gabbana-chocolate-mini-easter-cake-colomba-100g","label_id":"11252"}]');
   ZAPL.labels = JSON.parse('[{"id":"11252","show":"product"}]');
   ZAPL.template11252 = '<style type="text/css" style="display:none;"> .ribbon_12_11252 .zend_ribbon_12 { top: 0%; left: 0%; bottom: unset; right: unset; } </style> <div class="ribbon_12_11252"> <div class="zend_ribbon_12 zend_lbl_pos" style="width:80px; height:80px; background-color:#050505; opacity:0.98;"> <span style="font-size:16px; color:#ffffff;"> Limited Inventory </span> </div> </div>';
   jQuery("body").append("<link rel='stylesheet' type='text/css' href='https://product-labels.zend-apps.com/css/ribbon-css.css'></link");
   var check_p_detail = setInterval(function () {
      ZAPL.productDetailsPage();
      if (ZAPL.is_product_details_found == 1) {
         clearInterval(check_p_detail);
      }
   }, 1100);
   ZAPL.init();
   setInterval(function () {
      ZAPL.init();
   }, 2000);
}
if (window.self == window.top) {
   "undefined" == typeof jQuery ? ZAPL.ScriptMaker("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", ZAPL_ready) : ZAPL_ready();
}