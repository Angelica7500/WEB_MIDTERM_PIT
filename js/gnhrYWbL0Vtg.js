window.theme = window.theme || {}, theme.config = {
      mqlSmall: !1,
      mediaQuerySmall: "screen and (max-width: 749px)",
      isTouch: !!("ontouchstart" in window || window.DocumentTouch && window.document instanceof DocumentTouch || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints),
      rtl: document.documentElement.getAttribute("dir") === "rtl"
   }, theme.Currency = function () {
      const moneyFormat = "${{amount}}";

      function formatMoney(cents, format) {
         typeof cents == "string" && (cents = cents.replace(".", ""));
         let value = "";
         const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = format || moneyFormat;

         function formatWithDelimiters(number, precision, thousands, decimal) {
            if (thousands = thousands || ",", decimal = decimal || ".", isNaN(number) || number === null) return 0;
            number = (number / 100).toFixed(precision);
            const parts = number.split("."),
               dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
               centsAmount = parts[1] ? decimal + parts[1] : "";
            return dollarsAmount + centsAmount
         }
         switch (formatString.match(placeholderRegex)[1]) {
            case "amount":
               value = formatWithDelimiters(cents, 2);
               break;
            case "amount_no_decimals":
               value = formatWithDelimiters(cents, 0);
               break;
            case "amount_with_comma_separator":
               value = formatWithDelimiters(cents, 2, ".", ",");
               break;
            case "amount_no_decimals_with_comma_separator":
               value = formatWithDelimiters(cents, 0, ".", ",");
               break;
            case "amount_no_decimals_with_space_separator":
               value = formatWithDelimiters(cents, 0, " ");
               break;
            case "amount_with_apostrophe_separator":
               value = formatWithDelimiters(cents, 2, "'");
               break
         }
         return formatString.replace(placeholderRegex, value)
      }
      return {
         formatMoney
      }
   }(), theme.initWhenVisible = function (options) {
      const threshold = options.threshold ? options.threshold : 0;
      new IntersectionObserver((entries, observer2) => {
         entries.forEach(entry => {
            entry.isIntersecting && typeof options.callback == "function" && (options.callback(), observer2.unobserve(entry.target))
         })
      }, {
         rootMargin: `0px 0px ${threshold}px 0px`
      }).observe(options.element)
   },
   function () {
      const mql = window.matchMedia(theme.config.mediaQuerySmall);
      theme.config.mqlSmall = mql.matches, mql.onchange = e => {
         e.matches ? (theme.config.mqlSmall = !0, document.dispatchEvent(new CustomEvent("matchSmall"))) : (theme.config.mqlSmall = !1, document.dispatchEvent(new CustomEvent("unmatchSmall")))
      }, window.addEventListener("beforeunload", () => {
         document.body.classList.add("unloading")
      }), window.addEventListener("DOMContentLoaded", () => {
         document.body.classList.add("loaded")
      }), window.addEventListener("pageshow", event => {
         event.persisted && document.body.classList.remove("unloading")
      });

      function viewportHeight() {
         const platform = navigator?.userAgentData?.platform || navigator?.platform;
         (/iPad|iPhone|iPod/.test(platform) || platform === "MacIntel" && navigator.maxTouchPoints > 1) && document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`), setHeaderHeight()
      }
      if (window.addEventListener("resize", viewportHeight), window.addEventListener("DOMContentLoaded", viewportHeight), document.body.getAttribute("data-page-rendering") !== null) {
         const observer = new IntersectionObserver((entries, _observer) => {
            entries.forEach(entry => {
               const el = entry.target;
               entry.intersectionRatio != 0 && (el.markedVisible || (el.attributeStyleMap && el.attributeStyleMap.set("content-visibility", "visible"), el.markedVisible = !0))
            })
         }, {
            rootMargin: "50px 0px 100px 0px"
         });
         document.querySelectorAll(".shopify-section + .shopify-section").forEach(section => {
            observer.observe(section)
         })
      }
   }(),
   function () {
      var e = !1,
         t;
      document.body.addEventListener("touchstart", function (i) {
         if (!i.target.closest(".flickity-slider")) return e = !1;
         e = !0, t = {
            x: i.touches[0].pageX,
            y: i.touches[0].pageY
         }
      }), document.body.addEventListener("touchmove", function (i) {
         if (e && i.cancelable) {
            var n = {
               x: i.touches[0].pageX - t.x,
               y: i.touches[0].pageY - t.y
            };
            Math.abs(n.x) > Flickity.defaults.dragThreshold && i.preventDefault()
         }
      }, {
         passive: !1
      })
   }();

function isStorageSupported(type) {
   if (window.self !== window.top) return !1;
   const testKey = "beyours:test";
   let storage;
   type === "session" && (storage = window.sessionStorage), type === "local" && (storage = window.localStorage);
   try {
      return storage.setItem(testKey, "1"), storage.removeItem(testKey), !0
   } catch {
      return !1
   }
}

function checkScrollbar() {
   const rect = document.body.getBoundingClientRect();
   return Math.round(rect.left + rect.right) < window.innerWidth
}

function setScrollbarWidth() {
   if (checkScrollbar()) {
      const element = document.createElement("span");
      element.className = "modal-scrollbar-measure", document.body.appendChild(element);
      const width = element.getBoundingClientRect().width - element.clientWidth;
      document.body.removeChild(element), document.documentElement.style.setProperty("--scrollbar-width", `${width}px`)
   }
}

function setHeaderHeight() {
   const header = document.getElementById("shopify-section-header");
   header && document.documentElement.style.setProperty("--header-height", `${parseInt(header.getBoundingClientRect().bottom)}px`)
}

function getFocusableElements(container) {
   return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"))
}
const trapFocusHandlers = {};

function trapFocus(container, elementToFocus = container) {
   var elements = getFocusableElements(container),
      first = elements[0],
      last = elements[elements.length - 1];
   removeTrapFocus(), trapFocusHandlers.focusin = event => {
      event.target !== container && event.target !== last && event.target !== first || document.addEventListener("keydown", trapFocusHandlers.keydown)
   }, trapFocusHandlers.focusout = function () {
      document.removeEventListener("keydown", trapFocusHandlers.keydown)
   }, trapFocusHandlers.keydown = function (event) {
      (event.code ? event.code.toUpperCase() : event.key.toUpperCase()) === "TAB" && (event.target === last && !event.shiftKey && (event.preventDefault(), first.focus()), (event.target === container || event.target === first) && event.shiftKey && (event.preventDefault(), last.focus()))
   }, document.addEventListener("focusout", trapFocusHandlers.focusout), document.addEventListener("focusin", trapFocusHandlers.focusin), elementToFocus && elementToFocus.focus()
}
try {
   document.querySelector(":focus-visible")
} catch {
   focusVisiblePolyfill()
}

function focusVisiblePolyfill() {
   const navKeys = ["ARROWUP", "ARROWDOWN", "ARROWLEFT", "ARROWRIGHT", "TAB", "ENTER", "SPACE", "ESCAPE", "HOME", "END", "PAGEUP", "PAGEDOWN"];
   let currentFocusedElement = null,
      mouseClick = null;
   window.addEventListener("keydown", event => {
      navKeys.includes(event.code.toUpperCase()) && (mouseClick = !1)
   }), window.addEventListener("mousedown", event => {
      mouseClick = !0
   }), window.addEventListener("focus", () => {
      currentFocusedElement && currentFocusedElement.classList.remove("focused"), !mouseClick && (currentFocusedElement = document.activeElement, currentFocusedElement.classList.add("focused"))
   }, !0)
}

function pauseAllMedia() {
   document.querySelectorAll(".js-youtube").forEach(video => {
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
   }), document.querySelectorAll(".js-vimeo").forEach(video => {
      video.contentWindow.postMessage('{"method":"pause"}', "*")
   }), document.querySelectorAll("video").forEach(video => video.pause()), document.querySelectorAll("product-model").forEach(model => {
      model.modelViewerUI && model.modelViewerUI.pause()
   })
}

function removeTrapFocus(elementToFocus = null) {
   document.removeEventListener("focusin", trapFocusHandlers.focusin), document.removeEventListener("focusout", trapFocusHandlers.focusout), document.removeEventListener("keydown", trapFocusHandlers.keydown), elementToFocus && elementToFocus.focus()
}

function onKeyUpEscape(event) {
   if ((event.code ? event.code.toUpperCase() : event.key.toUpperCase()) !== "ESCAPE") return;
   const openDetailsElement = event.target.closest("details[open]");
   if (!openDetailsElement) return;
   const summaryElement = openDetailsElement.querySelector("summary");
   openDetailsElement.removeAttribute("open"), summaryElement.setAttribute("aria-expanded", !1), summaryElement.focus()
}

function filterShopifyEvent(event, domElement, callback) {
   let executeCallback = !1;
   event.type.includes("shopify:section") ? domElement.hasAttribute("data-section-id") && domElement.getAttribute("data-section-id") === event.detail.sectionId && (executeCallback = !0) : event.type.includes("shopify:block") && event.target === domElement && (executeCallback = !0), executeCallback && callback(event)
}

function debounce(fn, wait) {
   let t;
   return (...args) => {
      clearTimeout(t), t = setTimeout(() => fn.apply(this, args), wait)
   }
}

function fetchConfig(type = "json") {
   return {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: `application/${type}`
      }
   }
}
const serializeForm = form => {
   const obj = {},
      formData = new FormData(form);
   for (const key of formData.keys()) {
      const regex = /(?:^(properties\[))(.*?)(?:\]$)/;
      regex.test(key) ? (obj.properties = obj.properties || {}, obj.properties[regex.exec(key)[2]] = formData.get(key)) : obj[key] = formData.get(key)
   }
   return JSON.stringify(obj)
};
typeof window.Shopify > "u" && (window.Shopify = {}), Shopify.bind = function (fn, scope) {
   return function () {
      return fn.apply(scope, arguments)
   }
}, Shopify.setSelectorByValue = function (selector, value) {
   for (var i = 0, count = selector.options.length; i < count; i++) {
      var option = selector.options[i];
      if (value == option.value || value == option.innerHTML) return selector.selectedIndex = i, i
   }
}, Shopify.addListener = function (target, eventName, callback) {
   target.addEventListener ? target.addEventListener(eventName, callback, !1) : target.attachEvent("on" + eventName, callback)
}, Shopify.postLink = function (path, options) {
   options = options || {};
   const method = options.method || "post",
      params = options.parameters || {},
      form = document.createElement("form");
   form.setAttribute("method", method), form.setAttribute("action", path);
   for (const key in params) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden"), hiddenField.setAttribute("name", key), hiddenField.setAttribute("value", params[key]), form.appendChild(hiddenField)
   }
   document.body.appendChild(form), form.submit(), document.body.removeChild(form)
}, Shopify.postLink2 = function (path, options) {
   options = options || {};
   const method = options.method || "post",
      params = options.parameters || {},
      form = document.createElement("form");
   form.setAttribute("method", method), form.setAttribute("action", path);
   for (const key in params)
      for (const index in params[key])
         for (const key2 in params[key][index]) {
            const hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden"), hiddenField.setAttribute("name", `${key}[${index}][${key2}]`), hiddenField.setAttribute("value", params[key][index][key2]), form.appendChild(hiddenField)
         }
   document.body.appendChild(form), form.submit(), document.body.removeChild(form)
}, Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
   this.countryEl = document.getElementById(country_domid), this.provinceEl = document.getElementById(province_domid), this.provinceContainer = document.getElementById(options.hideElement || province_domid), Shopify.addListener(this.countryEl, "change", Shopify.bind(this.countryHandler, this)), this.initCountry(), this.initProvince()
}, Shopify.CountryProvinceSelector.prototype = {
   initCountry: function () {
      var value = this.countryEl.getAttribute("data-default");
      Shopify.setSelectorByValue(this.countryEl, value), this.countryHandler()
   },
   initProvince: function () {
      var value = this.provinceEl.getAttribute("data-default");
      value && this.provinceEl.options.length > 0 && Shopify.setSelectorByValue(this.provinceEl, value)
   },
   countryHandler: function (e) {
      var opt = this.countryEl.options[this.countryEl.selectedIndex],
         raw = opt.getAttribute("data-provinces"),
         provinces = JSON.parse(raw);
      if (this.clearOptions(this.provinceEl), provinces && provinces.length == 0) this.provinceContainer.style.display = "none";
      else {
         for (var i = 0; i < provinces.length; i++) {
            var opt = document.createElement("option");
            opt.value = provinces[i][0], opt.innerHTML = provinces[i][1], this.provinceEl.appendChild(opt)
         }
         this.provinceContainer.style.display = ""
      }
   },
   clearOptions: function (selector) {
      for (; selector.firstChild;) selector.removeChild(selector.firstChild)
   },
   setOptions: function (selector, values) {
      for (var i = 0, count = values.length; i < values.length; i++) {
         var opt = document.createElement("option");
         opt.value = values[i], opt.innerHTML = values[i], selector.appendChild(opt)
      }
   }
};
class QuantityInput extends HTMLElement {
   constructor() {
      super(), this.init()
   }
   init() {
      this.input = this.querySelector("input"), this.changeEvent = new Event("change", {
         bubbles: !0
      }), this.querySelectorAll("button").forEach(button => button.addEventListener("click", this.onButtonClick.bind(this)))
   }
   onButtonClick(event) {
      event.preventDefault();
      const previousValue = this.input.value;
      event.target.name === "plus" ? this.input.stepUp() : this.input.stepDown(), previousValue !== this.input.value && this.input.dispatchEvent(this.changeEvent)
   }
}
customElements.define("quantity-input", QuantityInput);
class MenuDropdown extends HTMLElement {
   constructor() {
      super(), this.classes = {
         isActive: "is-active"
      }, this.addEventListener("focusin", this.openDropdown.bind(this)), this.addEventListener("focusout", this.closeDropdown.bind(this)), this.addEventListener("mouseover", this.openDropdown.bind(this)), this.addEventListener("mouseleave", this.closeDropdown.bind(this))
   }
   openDropdown() {
      this.classList.add(this.classes.isActive)
   }
   closeDropdown() {
      this.classList.remove(this.classes.isActive)
   }
}
customElements.define("menu-dropdown", MenuDropdown);
class MenuDrawer extends HTMLElement {
   constructor(props) {
      super(), this.classes = props ? props.classes : {
         open: "menu-drawer--open",
         opening: "menu-drawer--opening",
         closing: "menu-drawer--closing"
      }, this.mainDetailsToggle = this.querySelector("details"), this.addEventListener("keyup", this.onKeyUp.bind(this)), this.addEventListener("focusout", this.onFocusOut.bind(this)), this.bindEvents()
   }
   bindEvents() {
      this.querySelectorAll("summary").forEach(summary => summary.addEventListener("click", this.onSummaryClick.bind(this))), this.querySelectorAll("button").forEach(button => button.addEventListener("click", this.onCloseButtonClick.bind(this)))
   }
   onKeyUp(event) {
      if ((event.code ? event.code.toUpperCase() : event.key.toUpperCase()) !== "ESCAPE") return;
      const openDetailsElement = event.target.closest("details[open]");
      openDetailsElement && (openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(event, this.mainDetailsToggle.querySelector("summary")) : this.closeSubmenu(openDetailsElement))
   }
   onSummaryClick(event) {
      const summaryElement = event.currentTarget,
         detailsElement = summaryElement.parentNode,
         isOpen = detailsElement.hasAttribute("open"),
         reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      function addTrapFocus() {
         trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector("button")), summaryElement.nextElementSibling.removeEventListener("transitionend", addTrapFocus)
      }
      detailsElement === this.mainDetailsToggle ? (isOpen && event.preventDefault(), isOpen ? this.closeMenuDrawer(event, summaryElement) : this.openMenuDrawer(summaryElement)) : setTimeout(() => {
         detailsElement.classList.add("menu-opening"), summaryElement.setAttribute("aria-expanded", !0), !reducedMotion || reducedMotion.matches ? addTrapFocus() : summaryElement.nextElementSibling.addEventListener("transitionend", addTrapFocus)
      }, 100)
   }
   openMenuDrawer(summaryElement) {
      setHeaderHeight(), setScrollbarWidth(), setTimeout(() => {
         this.mainDetailsToggle.classList.add("menu-opening")
      }), summaryElement.setAttribute("aria-expanded", !0), trapFocus(this.mainDetailsToggle, summaryElement), setTimeout(() => {
         this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this), document.body.addEventListener("click", this.onBodyClickEvent)
      }), document.body.classList.add(this.classes.opening), this.openAnimation()
   }
   closeMenuDrawer(event, elementToFocus = !1) {
      event !== void 0 && (this.mainDetailsToggle.querySelectorAll("details").forEach(details => {
         details.removeAttribute("open"), details.classList.remove("menu-opening")
      }), this.mainDetailsToggle.classList.remove("menu-opening"), this.mainDetailsToggle.classList.add("menu-closing"), removeTrapFocus(elementToFocus), document.body.removeEventListener("click", this.onBodyClickEvent), document.body.classList.remove(this.classes.open), document.body.classList.add(this.classes.closing), this.closeAnimation(this.mainDetailsToggle), this.dispatchEvent(new CustomEvent("close")))
   }
   onFocusOut() {
      setTimeout(() => {
         this.mainDetailsToggle.hasAttribute("open") && !this.mainDetailsToggle.contains(document.activeElement) && this.closeMenuDrawer()
      })
   }
   onCloseButtonClick(event) {
      const detailsElement = event.currentTarget.closest("details");
      this.closeSubmenu(detailsElement)
   }
   closeSubmenu(detailsElement) {
      detailsElement.classList.remove("menu-opening"), detailsElement.querySelector("summary").setAttribute("aria-expanded", !1), removeTrapFocus(), this.closeAnimation(detailsElement)
   }
   openAnimation() {
      let animationStart;
      const handleAnimation = time => {
         animationStart === void 0 && (animationStart = time), time - animationStart < 400 ? window.requestAnimationFrame(handleAnimation) : (document.body.classList.remove(this.classes.opening), document.body.classList.add(this.classes.open))
      };
      window.requestAnimationFrame(handleAnimation)
   }
   closeAnimation(detailsElement) {
      let animationStart;
      const handleAnimation = time => {
         animationStart === void 0 && (animationStart = time), time - animationStart < 400 ? window.requestAnimationFrame(handleAnimation) : (detailsElement === this.mainDetailsToggle && (document.body.classList.remove(this.classes.closing), detailsElement.classList.remove("menu-closing")), detailsElement.removeAttribute("open"), detailsElement.closest("details[open]") && trapFocus(detailsElement.closest("details[open]"), detailsElement.querySelector("summary")))
      };
      window.requestAnimationFrame(handleAnimation)
   }
   onBodyClick(event) {
      this.contains(event.target) || this.closeMenuDrawer(event)
   }
}
customElements.define("menu-drawer", MenuDrawer);
class CartDrawer extends MenuDrawer {
   constructor() {
      super({
         classes: {
            open: "mini-cart--open",
            opening: "mini-cart--opening",
            closing: "mini-cart--closing"
         }
      })
   }
}
customElements.define("cart-drawer", CartDrawer);
class FacetDrawer extends MenuDrawer {
   constructor() {
      super({
         classes: {
            open: "facet-drawer--open",
            opening: "facet-drawer--opening",
            closing: "facet-drawer--closing"
         }
      })
   }
}
customElements.define("facet-drawer", FacetDrawer);
class HeaderDrawer extends MenuDrawer {
   constructor() {
      super({
         classes: {
            open: "menu-mobile--open",
            opening: "menu-mobile--opening",
            closing: "menu-mobile--closing"
         }
      })
   }
}
customElements.define("header-drawer", HeaderDrawer);
class ModalDialog extends HTMLElement {
   constructor() {
      super(), this.querySelector('[id^="ModalClose-"]').addEventListener("click", this.hide.bind(this)), this.addEventListener("keyup", event => {
         (event.code ? event.code.toUpperCase() : event.key.toUpperCase()) === "ESCAPE" && this.hide()
      }), this.classList.contains("media-modal") ? this.addEventListener("pointerup", event => {
         event.pointerType === "mouse" && !event.target.closest("deferred-media, product-model") && this.hide()
      }) : this.addEventListener("click", event => {
         event.target.nodeName === "MODAL-DIALOG" && this.hide()
      })
   }
   show(opener) {
      this.openedBy = opener;
      const popup = this.querySelector(".template-popup");
      document.body.classList.add("overflow-hidden"), this.setAttribute("open", ""), popup && popup.loadContent(), trapFocus(this, this.querySelector('[role="dialog"]')), window.pauseAllMedia()
   }
   hide() {
      document.body.classList.remove("overflow-hidden"), this.removeAttribute("open"), removeTrapFocus(this.openedBy), window.pauseAllMedia()
   }
}
customElements.define("modal-dialog", ModalDialog);
class ModalOpener extends HTMLElement {
   constructor() {
      super(), this.button = this.querySelector("button"), this.button && this.button.addEventListener("click", () => {
         const modal = document.querySelector(this.getAttribute("data-modal"));
         modal && modal.show(this.button)
      })
   }
}
customElements.define("modal-opener", ModalOpener);
class DeferredMedia extends HTMLElement {
   constructor() {
      super(), this.poster = this.querySelector('[id^="Deferred-Poster-"]'), this.poster && this.poster.addEventListener("click", this.loadContent.bind(this))
   }
   loadContent() {
      if (window.pauseAllMedia(), !this.getAttribute("loaded")) {
         const content = document.createElement("div");
         content.appendChild(this.querySelector("template").content.firstElementChild.cloneNode(!0)), content.querySelector("video-section") ? this.appendChild(content).focus() : (this.setAttribute("loaded", !0), this.appendChild(content.querySelector("video, model-viewer, iframe")).focus())
      }
   }
}
customElements.define("deferred-media", DeferredMedia);
class SliderComponent extends HTMLElement {
   constructor() {
      super(), this.slider = this.querySelector('[id^="Slider-"]'), this.sliderItems = this.querySelectorAll('[id^="Slide-"]'), this.enableSliderLooping = !1, this.currentPageElement = this.querySelector(".slider-counter--current"), this.pageTotalElement = this.querySelector(".slider-counter--total"), this.prevButton = this.querySelector('button[name="previous"]'), this.nextButton = this.querySelector('button[name="next"]'), !(!this.slider || !this.nextButton) && theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 200
      })
   }
   init() {
      new ResizeObserver(() => this.initPages()).observe(this.slider), this.slider.addEventListener("scroll", this.update.bind(this)), this.prevButton.addEventListener("click", this.onButtonClick.bind(this)), this.nextButton.addEventListener("click", this.onButtonClick.bind(this))
   }
   initPages() {
      this.sliderItemsToShow = Array.from(this.sliderItems).filter(element => element.clientWidth > 0), !(this.sliderItemsToShow.length < 2) && (this.sliderItemOffset = this.sliderItemsToShow[1].offsetLeft - this.sliderItemsToShow[0].offsetLeft, this.slidesPerPage = Math.floor(this.slider.clientWidth / this.sliderItemOffset), this.totalPages = this.sliderItemsToShow.length - this.slidesPerPage + 1, this.update())
   }
   resetPages() {
      this.sliderItems = this.querySelectorAll('[id^="Slide-"]'), this.initPages()
   }
   update() {
      const previousPage = this.currentPage;
      if (this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItemOffset) + 1, this.currentPageElement && this.pageTotalElement && (this.currentPageElement.textContent = this.currentPage, this.pageTotalElement.textContent = this.totalPages), this.currentPage != previousPage && this.dispatchEvent(new CustomEvent("slideChanged", {
            detail: {
               currentPage: this.currentPage,
               currentElement: this.sliderItemsToShow[this.currentPage - 1]
            }
         })), this.currentPage === 1 && this.currentPage === this.totalPages ? this.classList.add("slider--no-buttons") : this.classList.remove("slider--no-buttons"), this.enableSliderLooping) return;
      const isFirstSlide = this.currentPage === 1,
         isLastSlide = this.currentPage === this.sliderItemsToShow.length;
      isFirstSlide || this.isSlideVisible(this.sliderItemsToShow[0]) ? this.prevButton.setAttribute("disabled", "disabled") : this.prevButton.removeAttribute("disabled"), isLastSlide || this.isSlideVisible(this.sliderItemsToShow[this.sliderItemsToShow.length - 1]) ? this.nextButton.setAttribute("disabled", "disabled") : this.nextButton.removeAttribute("disabled")
   }
   isSlideVisible(element, offset = 0) {
      const lastVisibleSlide = this.slider.clientWidth + this.slider.scrollLeft - offset;
      return element.offsetLeft + element.clientWidth <= lastVisibleSlide && element.offsetLeft >= this.slider.scrollLeft
   }
   onButtonClick(event) {
      event.preventDefault();
      const step = event.currentTarget.dataset.step || 1;
      this.slideScrollPosition = event.currentTarget.name === "next" ? this.slider.scrollLeft + step * this.sliderItemOffset : this.slider.scrollLeft - step * this.sliderItemOffset, this.slideScrollPosition = theme.config.rtl ? this.slideScrollPosition * -1 : this.slideScrollPosition, this.slider.scrollTo({
         left: this.slideScrollPosition
      })
   }
}
customElements.define("slider-component", SliderComponent);
class ThumbnailSlider extends SliderComponent {
   constructor() {
      super()
   }
   init() {
      super.init();
      const variantItems = this.querySelectorAll(".thumbnail-list_item--variant:not(.is-active)");
      if (this.slider.dataset.mediaCount = this.sliderItems.length - variantItems.length, this.querySelector("[data-gang-option]")) {
         const inactiveGangItems = this.querySelectorAll("[data-gang-option]:not(.gang__active)");
         this.slider.dataset.mediaCount = this.sliderItems.length - inactiveGangItems.length
      }
      this.slider.dataset.mediaCount < 2 && this.classList.add("hidden")
   }
}
customElements.define("thumbnail-slider", ThumbnailSlider);
class QuoteSlider extends SliderComponent {
   constructor() {
      super()
   }
   update() {
      super.update(), this.currentPageElement && this.pageTotalElement && (this.sliderItems.forEach(element => {
         element.removeAttribute("aria-current")
      }), this.sliderItemsToShow[this.currentPage - 1].setAttribute("aria-current", !0))
   }
}
customElements.define("quote-slider", QuoteSlider);
class ProductGallery extends SliderComponent {
   constructor() {
      super()
   }
   init() {
      super.init();
      const gallerySliderButtons = this.querySelector(".slider-buttons");
      if (gallerySliderButtons && this.querySelector("[data-gang-option]") && (this.querySelectorAll(".product__media-item.gang__active").length < 2 ? gallerySliderButtons.classList.add("hidden") : gallerySliderButtons.classList.remove("hidden")), this.cursor = this.querySelector(".gallery-cursor"), !this.cursor) return;
      const images = this.querySelectorAll(".product__modal-opener--image");
      images.forEach(image => image.addEventListener("mousemove", this.onMoveHandler.bind(this))), images.forEach(image => image.addEventListener("mouseenter", this.onEnterHandler.bind(this))), images.forEach(image => image.addEventListener("mouseleave", this.onLeaveHandler.bind(this)))
   }
   onMoveHandler(event) {
      this.cursor.style.left = `${event.clientX-32}px`, this.cursor.style.top = `${event.clientY-32}px`
   }
   onEnterHandler() {
      this.cursor.classList.add("show")
   }
   onLeaveHandler() {
      this.cursor.classList.remove("show")
   }
   update() {
      if (super.update(), this.currentPageElement && this.pageTotalElement) {
         const currentElement = this.sliderItemsToShow[this.currentPage - 1];
         currentElement && this.slider.style.setProperty("--force-image-ratio-percent", currentElement.querySelector(".media").style.getPropertyValue("--image-ratio-percent"))
      }
   }
   goToFirstSlide() {
      this.slider.scrollTo({
         left: 0
      })
   }
}
customElements.define("product-gallery", ProductGallery);
class VariantSelects extends HTMLElement {
   constructor() {
      super(), this.addEventListener("change", this.onVariantChange)
   }
   onVariantChange(event) {
      this.updateOptions(), this.updateMasterId(), this.toggleAddButton(!0, "", !1), this.updatePickupAvailability(), this.removeErrorMessage(), this.validateGang(), this.currentVariant ? (this.gangOption ? this.updateGangMedia() : this.updateMedia(), this.updateURL(), this.updateVariantInput(), this.renderProductInfo()) : (this.toggleAddButton(!0, "", !0), this.setUnavailable()), this.handleStickyCart(event.target)
   }
   handleStickyCart(target) {
      if (!document.getElementById(`sticky-cart-${this.dataset.section}`)) return;
      const attribute = target.getAttribute("name");
      if (document.querySelectorAll(`variant-radios[data-section="${this.dataset.section}"] [name="${attribute}"], variant-selects[data-section="${this.dataset.section}"] [name="${attribute}"]`).forEach(input => {
            input.tagName === "INPUT" ? input.checked = input.value === target.value : input.value = target.value
         }), !this.currentVariant || !this.currentVariant.featured_media) return;
      const image = document.querySelector(".sticky-cart__content-image img");
      image && (image.srcset = `${this.currentVariant.featured_media.preview_image.src}&width=70 1x, ${this.currentVariant.featured_media.preview_image.src}&width=140 2x`, image.src = `${this.currentVariant.featured_media.preview_image.src}&width=70`, image.width = 70, image.height = Math.ceil(70 / this.currentVariant.featured_media.preview_image.aspect_ratio))
   }
   updateOptions() {
      this.options = Array.from(this.querySelectorAll("select"), select => select.value)
   }
   updateMasterId() {
      this.currentVariant = this.getVariantData().find(variant => !variant.options.map((option, index) => this.options[index] === option).includes(!1))
   }
   validateGang() {
      const mediaItemWithGang = document.querySelector(`#shopify-section-${this.dataset.section} [data-gang-option]`);
      mediaItemWithGang && (this.gangOption = mediaItemWithGang.dataset.gangOption)
   }
   updateGangMedia() {
      if (!this.gangOption) return;
      const variantInputWrapper = this.querySelector('.variant-input-wrapper[data-option-slug="' + this.gangOption + '"]');
      if (variantInputWrapper ? this.gangIndex = variantInputWrapper.dataset.optionIndex : this.gangOption = null, !this.currentVariant) return;
      const mediaGallery = document.getElementById(`MediaGallery-${this.dataset.section}`),
         gangValue = this.getSlug(this.currentVariant[this.gangIndex]);
      if (this.currentGangValue !== gangValue) {
         document.querySelectorAll(`#shopify-section-${this.dataset.section} [data-gang-connect]`).forEach(function (media) {
            media.classList.remove("gang__active")
         }), this.currentGangValue = gangValue;
         var gangConnect = this.gangOption + "_" + gangValue;
         const newMedias = document.querySelectorAll(`#shopify-section-${this.dataset.section} [data-gang-connect="${gangConnect}"]`);
         if (!newMedias.length) return;
         Array.from(newMedias).reverse().forEach(function (newMedia) {
            newMedia.classList.add("gang__active");
            let parent = newMedia.parentElement;
            parent.firstChild != newMedia && (parent.prepend(newMedia), parent.classList.add("product__media-no-animate"))
         });
         const thumbnailSlider = document.getElementById(`GalleryThumbnails-${this.dataset.section}`);
         if (thumbnailSlider) {
            const inactiveItems = thumbnailSlider.querySelectorAll(".thumbnail-list__item:not(.gang__active)");
            thumbnailSlider.slider.dataset.mediaCount = thumbnailSlider.sliderItems.length - inactiveItems.length, thumbnailSlider.slider.dataset.mediaCount < 2 ? thumbnailSlider.classList.add("hidden") : thumbnailSlider.classList.remove("hidden"), thumbnailSlider.resetPages()
         }
         if (!mediaGallery) {
            const productGallery = document.querySelector(`#shopify-section-${this.dataset.section} product-gallery`);
            productGallery && (productGallery.resetPages(), productGallery.goToFirstSlide())
         }
         const gallerySliderButtons = document.querySelector(`#shopify-section-${this.dataset.section} product-gallery .slider-buttons`);
         gallerySliderButtons && (document.querySelectorAll(`#shopify-section-${this.dataset.section} product-gallery .product__media-item.gang__active`).length < 2 ? gallerySliderButtons.classList.add("hidden") : gallerySliderButtons.classList.remove("hidden"))
      }
      if (!this.currentVariant.featured_media) {
         document.querySelectorAll(`#shopify-section-${this.dataset.section} product-gallery .product__media-item.gang__active.is-active`).length || document.querySelector(`#shopify-section-${this.dataset.section} product-gallery .product__media-item.gang__active`).classList.add("is-active");
         return
      }
      if (mediaGallery) {
         const scrollIntoView = typeof this.dataset.noScroll > "u";
         mediaGallery.setActiveMedia(`${this.dataset.section}-${this.currentVariant.featured_media.id}`, !0, scrollIntoView)
      }
      const modalContent = document.querySelector(`#ProductModal-${this.dataset.section} .product-media-modal__content`);
      if (modalContent) {
         const newMediaModal = modalContent.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`);
         modalContent.prepend(newMediaModal)
      }
      const thumbnailContent = document.querySelector(`#ProductThumbnails-${this.dataset.section}`);
      if (thumbnailContent) {
         const newMediaThumbnail = thumbnailContent.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`);
         thumbnailContent.prepend(newMediaThumbnail)
      }
   }
   getSlug(someString) {
      return someString.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "").replace(/^-/, "")
   }
   updateMedia() {
      if (!this.currentVariant || !this.currentVariant.featured_media) return;
      const newMedia = document.querySelector(`[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`);
      if (!newMedia) return;
      const parent = newMedia.parentElement;
      if (parent.firstChild == newMedia) return;
      parent.prepend(newMedia), parent.classList.add("product__media-no-animate");
      const mediaGallery = document.getElementById(`MediaGallery-${this.dataset.section}`);
      if (mediaGallery) {
         const scrollIntoView = typeof this.dataset.noScroll > "u";
         mediaGallery.setActiveMedia(`${this.dataset.section}-${this.currentVariant.featured_media.id}`, !0, scrollIntoView)
      }
      const modalContent = document.querySelector(`#ProductModal-${this.dataset.section} .product-media-modal__content`);
      if (modalContent) {
         const newMediaModal = modalContent.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`);
         modalContent.prepend(newMediaModal)
      }
      const thumbnailContent = document.querySelector(`#ProductThumbnails-${this.dataset.section}`);
      if (thumbnailContent) {
         const newMediaThumbnail = thumbnailContent.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`);
         thumbnailContent.prepend(newMediaThumbnail)
      }
   }
   updateURL() {
      !this.currentVariant || this.dataset.updateUrl === "false" || window.history.replaceState({}, "", `${this.dataset.url}?variant=${this.currentVariant.id}`)
   }
   updateVariantInput() {
      document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-installment, #product-form-${this.dataset.section}--alt`).forEach(productForm => {
         const input = productForm.querySelector('input[name="id"]');
         input.value = this.currentVariant.id, input.dispatchEvent(new Event("change", {
            bubbles: !0
         }))
      })
   }
   updatePickupAvailability() {
      const pickUpAvailability = document.querySelector("pickup-availability");
      pickUpAvailability && (this.currentVariant && this.currentVariant.available ? pickUpAvailability.fetchAvailability(this.currentVariant.id) : (pickUpAvailability.removeAttribute("available"), pickUpAvailability.innerHTML = ""))
   }
   removeErrorMessage() {
      const section = this.closest("section");
      if (!section) return;
      const productForm = section.querySelector("product-form");
      productForm && productForm.handleErrorMessage()
   }
   renderProductInfo() {
      fetch(`${this.dataset.url}?variant=${this.currentVariant.id}§ion_id=${this.dataset.section}`).then(response => response.text()).then(responseText => {
         this.updateSKU(responseText), this.updatePrice(responseText), this.updatePriceAlt(responseText), this.updateColorName(responseText), this.updateInventoryStatus(responseText), this.currentVariant && this.toggleAddButton(!this.currentVariant.available, variantStrings.soldOut)
      }).catch(e => {
         console.error(e)
      })
   }
   updateSKU(responseText) {
      const id = `sku-${this.dataset.section}`,
         html = new DOMParser().parseFromString(responseText, "text/html"),
         destination = document.getElementById(id),
         source = html.getElementById(id);
      source && destination && (destination.innerHTML = source.innerHTML), destination && destination.classList.remove("visibility-hidden")
   }
   updatePrice(responseText) {
      const id = `price-${this.dataset.section}`,
         html = new DOMParser().parseFromString(responseText, "text/html"),
         destination = document.getElementById(id),
         source = html.getElementById(id);
      source && destination && (destination.innerHTML = source.innerHTML), destination && destination.classList.remove("visibility-hidden")
   }
   updatePriceAlt(responseText) {
      const id = `price-${this.dataset.section}--alt`,
         html = new DOMParser().parseFromString(responseText, "text/html"),
         destination = document.getElementById(id),
         source = html.getElementById(id);
      source && destination && (destination.innerHTML = source.innerHTML), destination && destination.classList.remove("visibility-hidden")
   }
   updateColorName(responseText) {
      const id = `color-${this.dataset.section}`,
         html = new DOMParser().parseFromString(responseText, "text/html"),
         destination = document.getElementById(id),
         source = html.getElementById(id);
      source && destination && (destination.innerHTML = source.innerHTML), destination && destination.classList.remove("visibility-hidden")
   }
   updateInventoryStatus(responseText) {
      const id = `inventory-${this.dataset.section}`,
         html = new DOMParser().parseFromString(responseText, "text/html"),
         destination = document.getElementById(id),
         source = html.getElementById(id);
      source && destination && (destination.innerHTML = source.innerHTML), destination && destination.classList.remove("visibility-hidden")
   }
   toggleAddButton(disable = !0, text, modifyClass = !0) {
      document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-${this.dataset.section}--alt`).forEach(productForm => {
         const addButton = productForm.querySelector('[name="add"]');
         addButton && (disable ? (addButton.setAttribute("disabled", !0), text && (addButton.textContent = text)) : (addButton.removeAttribute("disabled"), addButton.textContent = addButton.dataset.preOrder === "true" ? variantStrings.preOrder : variantStrings.addToCart))
      })
   }
   setUnavailable() {
      document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-${this.dataset.section}--alt`).forEach(productForm => {
         const addButton = productForm.querySelector('[name="add"]');
         if (!addButton) return;
         addButton.textContent = variantStrings.unavailable;
         const price = document.getElementById(`price-${this.dataset.section}`);
         price && price.classList.add("visibility-hidden");
         const priceAlt = document.getElementById(`price-${this.dataset.section}--alt`);
         priceAlt && priceAlt.classList.add("visibility-hidden");
         const inventory = document.getElementById(`inventory-${this.dataset.section}`);
         inventory && inventory.classList.add("visibility-hidden")
      })
   }
   getVariantData() {
      return this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent), this.variantData
   }
}
customElements.define("variant-selects", VariantSelects);
class VariantRadios extends VariantSelects {
   constructor() {
      super()
   }
   updateOptions() {
      const fieldsets = Array.from(this.querySelectorAll("fieldset"));
      this.options = fieldsets.map(fieldset => Array.from(fieldset.querySelectorAll("input")).find(radio => radio.checked).value)
   }
}
customElements.define("variant-radios", VariantRadios);
class ProductForm extends HTMLElement {
   constructor() {
      super(), this.miniCart = document.querySelector("mini-cart"), this.form = this.querySelector("form"), this.form.querySelector("[name=id]").disabled = !1, this.form.addEventListener("submit", this.onSubmitHandler.bind(this))
   }
   onSubmitHandler(evt) {
      if (document.body.classList.contains("template-cart") || !shopSettings.cartDrawer) return;
      evt.preventDefault();
      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains("loading")) return;
      this.handleErrorMessage(), submitButton.setAttribute("aria-disabled", !0), submitButton.classList.add("loading");
      const config = fetchConfig("javascript");
      config.headers["X-Requested-With"] = "XMLHttpRequest", delete config.headers["Content-Type"];
      const formData = new FormData(this.form);
      this.miniCart && formData.append("sections", this.miniCart.getSectionsToRender().map(section => section.id)), formData.append("sections_url", window.location.pathname), config.body = formData, fetch(`${routes.cart_add_url}`, config).then(response => response.json()).then(response => {
         if (response.status) {
            this.handleErrorMessage(response.description);
            return
         }
         this.miniCart && this.miniCart.renderContents(response)
      }).catch(e => {
         console.error(e)
      }).finally(() => {
         submitButton.classList.remove("loading"), submitButton.removeAttribute("aria-disabled")
      })
   }
   handleErrorMessage(errorMessage = !1) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector(".product-form__error-message-wrapper"), this.errorMessageWrapper ? (this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector(".product-form__error-message"), this.errorMessageWrapper.toggleAttribute("hidden", !errorMessage), errorMessage && (this.errorMessage.textContent = errorMessage)) : errorMessage && alert(errorMessage)
   }
}
customElements.define("product-form", ProductForm);
class ProgressBar extends HTMLElement {
   constructor() {
      super(), theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 0
      })
   }
   init() {
      setTimeout(() => {
         const quantity = parseInt(this.dataset.quantity);
         this.style.setProperty("--progress-bar-width", `${quantity*100/30}%`)
      }, 1e3)
   }
}
customElements.define("progress-bar", ProgressBar);
class FormState extends HTMLElement {
   constructor() {
      super(), this.formInputs = this.querySelectorAll("input,select,textarea"), this.form = this.querySelector("form"), this.formInputs.forEach(input => {
         input.addEventListener("input", this.onInputChange.bind(this)), input.addEventListener("blur", this.onInputChange.bind(this))
      }), this.form && this.form.addEventListener("submit", this.onSubmitHandler.bind(this))
   }
   onInputChange(event) {
      this.handleInputCheck(event.target)
   }
   onSubmitHandler(event) {
      let valid = !0;
      if (this.formInputs.forEach(input => {
            this.handleInputCheck(input) || (valid = !1)
         }), !valid) {
         event.preventDefault();
         return
      }
   }
   handleInputCheck(input) {
      return input.classList.contains("required") ? input.value.length === 0 || input.value === input.dataset.empty ? (input.classList.remove("valid"), input.classList.add("invalid"), !1) : (input.classList.remove("invalid"), input.classList.add("valid"), !0) : !0
   }
}
customElements.define("form-state", FormState);
class ListMenuItem extends HTMLElement {
   constructor() {
      super(), this.listMenuHover = this.closest("menu-drawer").querySelector("list-menu-hover"), this.addEventListener("mouseenter", () => {
         this.listMenuHover.open({
            title: this.dataset.title,
            url: this.dataset.url,
            image: this.dataset.image,
            description: this.dataset.description
         })
      })
   }
}
customElements.define("list-menu-item", ListMenuItem);
class ListMenuHover extends HTMLElement {
   constructor() {
      super()
   }
   open(obj) {
      let html = "";
      (obj.image.length > 0 || obj.description.length > 0) && (html += `<a href="${obj.url}" class="hover-collection${obj.image.length>0?"":" hover-collection--no-image"}">`, html += '<figure class="hover-collection__image"' + (obj.image.length > 0 ? `style="background-image:url(${obj.image})"` : "") + "></figure>", html += '<div class="hover-collection__content">', html += `<span class="hover-collection__title h4">${obj.title}</span>`, html += obj.description.length > 0 ? `<div class="hover-collection__description">${obj.description}</div>` : "", html += "</div>", html += "</a>"), this.innerHTML = html
   }
   close() {
      this.innerHTML = ""
   }
}
customElements.define("list-menu-hover", ListMenuHover);
class TransparentHeader extends HTMLElement {
   constructor() {
      super();
      const header = document.getElementById("shopify-section-header");
      header.classList.add("transparent-header"), this.dataset.showSeparator == "true" && header.classList.add("transparent-separator")
   }
}
customElements.define("transparent-header", TransparentHeader);
class ColorSwatch extends HTMLElement {
   constructor() {
      super(), this.addEventListener("mouseenter", this.onHoverHandler.bind(this))
   }
   onHoverHandler() {
      const image = this.closest(".card-wrapper").querySelector(".media img");
      image !== null && (image.src = this.dataset.src, image.srcset = this.dataset.srcset, this.activeColorSwatch())
   }
   activeColorSwatch() {
      this.closest(".card__colors").querySelectorAll(".color-swatch").forEach(color => {
         color.classList.remove("active")
      }), this.parentNode.classList.add("active")
   }
}
customElements.define("color-swatch", ColorSwatch);
class AddToCart extends HTMLElement {
   constructor() {
      super(), this.miniCart = document.querySelector("mini-cart"), this.addEventListener("click", this.onClickHandler.bind(this))
   }
   onClickHandler() {
      const variantId = this.dataset.variantId;
      if (variantId) {
         if (document.body.classList.contains("template-cart") || !shopSettings.cartDrawer) {
            Shopify.postLink(routes.cart_add_url, {
               parameters: {
                  id: variantId,
                  quantity: 1
               }
            });
            return
         }
         this.setAttribute("disabled", !0), this.classList.add("loading");
         const sections = this.miniCart ? this.miniCart.getSectionsToRender().map(section => section.id) : [],
            body = JSON.stringify({
               id: variantId,
               quantity: 1,
               sections,
               sections_url: window.location.pathname
            });
         fetch(`${routes.cart_add_url}`, {
            ...fetchConfig("javascript"),
            body
         }).then(response => response.json()).then(parsedState => {
            this.miniCart && this.miniCart.renderContents(parsedState)
         }).catch(e => {
            console.error(e)
         }).finally(() => {
            this.classList.remove("loading"), this.removeAttribute("disabled")
         })
      }
   }
}
customElements.define("add-to-cart", AddToCart);
class PriceMoney extends HTMLElement {
   constructor() {
      super(), this.init()
   }
   init() {
      const currencies_using_comma_decimals = "ANG,ARS,BRL,BYN,BYR,CLF,CLP,COP,CRC,CZK,DKK,EUR,HRK,HUF,IDR,ISK,MZN,NOK,PLN,RON,RUB,SEK,TRY,UYU,VES,VND".split(","),
         symbol = shopSettings.moneyFormat.replace(/\{{.*}}/, "").trim(),
         bdi = this.querySelector("bdi"),
         price = bdi.textContent;
      let html = price.replace(" ", ""),
         money_symbol_decimal = ".";
      if (currencies_using_comma_decimals.includes(shopSettings.isoCode) && (money_symbol_decimal = ","), price.includes(money_symbol_decimal))
         if (price.lastIndexOf(symbol) + symbol.length === price.length) {
            const price_without_symbol = price.slice(0, price.lastIndexOf(symbol)),
               price_without_decimal = price.slice(0, price.lastIndexOf(money_symbol_decimal)),
               decimal = price_without_symbol.replace(price_without_decimal, "").trim();
            html = html.replace(decimal, `<sup>${decimal}</sup>`)
         } else {
            const price_without_decimal = price.slice(0, price.lastIndexOf(money_symbol_decimal)),
               decimal = price.replace(price_without_decimal, "").trim();
            html = html.replace(decimal, `<sup>${decimal}</sup>`)
         } html = html.replace(symbol, `<span>${symbol}</span>`), bdi.innerHTML = html
   }
}
customElements.define("price-money", PriceMoney);
class SlideshowComponent extends HTMLElement {
   constructor() {
      super(), this.mql = window.matchMedia("(min-width: 750px)"), this.elements = {
         small: this.querySelector(".slideshow__left"),
         content: this.querySelector(".slideshow__content"),
         large: this.querySelector(".slideshow__right")
      }, this.settings = {
         autorotate: this.dataset.autorotate == "true",
         autorotateSpeed: parseInt(this.dataset.autorotateSpeed),
         slidesSmall: this.elements.small.querySelectorAll(".slideshow__image"),
         slidesLarge: this.elements.large.querySelectorAll(".slideshow__image")
      }, theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 600
      }), this.matchMedia()
   }
   init() {
      setTimeout(() => {
         this.flickitySmall = new Flickity(this.elements.small, {
            accessibility: !1,
            rightToLeft: theme.config.rtl,
            prevNextButtons: !1,
            pageDots: !1,
            wrapAround: !0,
            draggable: !1,
            setGallerySize: !1,
            autoPlay: this.settings.autorotate ? this.settings.autorotateSpeed : !1
         }), this.flickityContent = new Flickity(this.elements.content, {
            accessibility: !1,
            rightToLeft: theme.config.rtl,
            prevNextButtons: !0,
            pageDots: !0,
            wrapAround: !0,
            draggable: !this.mql.matches,
            asNavFor: this.elements.small,
            adaptiveHeight: !0,
            arrowShape: "M14.453 30.078q-0.391 1.172-3.125 16.602t-2.539 15.625 16.406 3.125 16.406 2.734 0.195-2.148l0.391-1.563-13.281-2.344q-13.281-2.344-13.281-2.734t2.734-2.344 5.078-3.125q3.906-2.734 9.18-4.688t10.352-2.734q3.516-0.391 8.789-0.391t8.789 0.391q15.625 2.344 28.125 13.281l3.125 2.344 1.563-1.172q1.172-1.172 1.172-1.563t-3.32-3.125-5.273-4.297q-5.078-3.125-11.133-5.664t-11.914-3.711q-3.906-0.781-10.938-0.781t-10.938 0.781q-6.25 1.172-13.281 4.297t-11.719 6.641q-1.563 1.563-1.758 1.367t1.758-12.305l2.344-12.109q0-0.391-1.953-0.781h-1.563q-0.391 0-0.391 0.391z",
            on: {
               ready: () => {
                  const prevNextButtons = this.querySelectorAll(".flickity-button");
                  prevNextButtons && prevNextButtons.forEach(button => {
                     button.setAttribute("tabindex", "-1")
                  })
               }
            }
         }), this.flickityLarge = new Flickity(this.elements.large, {
            accessibility: !1,
            rightToLeft: theme.config.rtl,
            prevNextButtons: !1,
            pageDots: !1,
            wrapAround: !0,
            draggable: !0,
            setGallerySize: !1,
            asNavFor: this.elements.content
         }), this.bindEvents()
      })
   }
   bindEvents() {
      this.flickitySmall.on("scroll", () => {
         this.flickitySmall.slides.forEach((slide, i) => {
            const flickity = this.flickitySmall,
               image = this.settings.slidesSmall[i];
            let x = 0;
            image && (i === 0 ? x = Math.abs(flickity.x) > flickity.slidesWidth ? flickity.slidesWidth + flickity.x + flickity.slides[flickity.slides.length - 1].outerWidth + slide.target : slide.target + flickity.x : i === flickity.slides.length - 1 ? x = Math.abs(flickity.x) + flickity.slides[i].outerWidth < flickity.slidesWidth ? slide.target - flickity.slidesWidth + flickity.x - flickity.slides[i].outerWidth : slide.target + flickity.x : x = slide.target + flickity.x, !theme.config.isTouch && !theme.config.rtl && (image.style.transform = "translateX(" + x * (-1 / 2) + "px)"))
         })
      }), this.flickityLarge.on("scroll", () => {
         this.flickityLarge.slides.forEach((slide, i) => {
            const flickity = this.flickityLarge,
               image = this.settings.slidesLarge[i];
            let x = 0;
            image && (i === 0 ? x = Math.abs(flickity.x) > flickity.slidesWidth ? flickity.slidesWidth + flickity.x + flickity.slides[flickity.slides.length - 1].outerWidth + slide.target : slide.target + flickity.x : i === flickity.slides.length - 1 ? x = Math.abs(flickity.x) + flickity.slides[i].outerWidth < flickity.slidesWidth ? slide.target - flickity.slidesWidth + flickity.x - flickity.slides[i].outerWidth : slide.target + flickity.x : x = slide.target + flickity.x, !theme.config.isTouch && !theme.config.rtl && (image.style.transform = "translateX(" + x * (-1 / 2) + "px)"))
         })
      }), this.elements.content.querySelector(".flickity-button.next").addEventListener("click", () => {
         this.flickitySmall.next(), this.stopPlayer()
      }), this.elements.content.querySelector(".flickity-button.previous").addEventListener("click", () => {
         this.flickitySmall.previous(), this.stopPlayer()
      });
      let currentIndex = null,
         swipeDirection = null;
      this.flickityLarge.on("dragMove", (_event, _pointer, moveVector) => {
         currentIndex = this.flickityLarge.selectedIndex, swipeDirection = this.getSwipeDirection(moveVector), this.stopPlayer()
      }), this.flickityLarge.on("dragEnd", () => {
         this.flickityLarge.selectedIndex !== currentIndex && (swipeDirection === "left" ? this.flickitySmall.next() : this.flickitySmall.previous())
      })
   }
   stopPlayer() {
      this.settings.autorotate && this.flickitySmall.stopPlayer()
   }
   getSwipeDirection(moveVector) {
      return moveVector.x > 0 ? "right" : "left"
   }
   matchMedia() {
      document.addEventListener("matchSmall", () => {
         this.unload(), this.init()
      }), document.addEventListener("unmatchSmall", () => {
         this.unload(), this.init()
      })
   }
   unload() {
      this.flickitySmall && typeof this.flickitySmall.destroy == "function" && this.flickitySmall.destroy(), this.flickityContent && typeof this.flickityContent.destroy == "function" && this.flickityContent.destroy(), this.flickityLarge && typeof this.flickityLarge.destroy == "function" && this.flickityLarge.destroy()
   }
}
customElements.define("slideshow-component", SlideshowComponent);
class TestimonialsComponent extends HTMLElement {
   constructor() {
      super(), this.dataset.slider == "true" && (this.settings = {
         autorotate: this.dataset.autorotate == "true",
         autorotateSpeed: parseInt(this.dataset.autorotateSpeed)
      }, this.slider = this.querySelector(".testimonial__list"), this.previews = this.querySelector(".testimonial__previews"), theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 600
      }), theme.initWhenVisible({
         element: this,
         callback: this.update.bind(this),
         threshold: 0
      }))
   }
   init() {
      setTimeout(() => {
         this.flickity = new Flickity(this.slider, {
            accessibility: !1,
            rightToLeft: theme.config.rtl,
            prevNextButtons: !0,
            arrowShape: {
               x0: 10,
               x1: 60,
               y1: 50,
               x2: 65,
               y2: 45,
               x3: 20
            },
            pageDots: !1,
            wrapAround: !0,
            draggable: !0,
            cellAlign: "center",
            autoPlay: this.settings.autorotate ? this.settings.autorotateSpeed : !1,
            pauseAutoPlayOnHover: !0,
            asNavFor: this.previews
         }), this.flickityNav = new Flickity(this.previews, {
            accessibility: !1,
            rightToLeft: theme.config.rtl,
            prevNextButtons: !1,
            pageDots: !1,
            wrapAround: !0,
            selectedAttraction: .2,
            friction: .8,
            adaptiveHeight: !0
         }), this.flickityNav.previous(), this.settings.autorotate && this.flickity.pausePlayer(), this.flickity.on("staticClick", (_event, _pointer, _cellElement, cellIndex) => {
            typeof cellIndex == "number" && this.flickityNav.select(cellIndex)
         }), this.flickity.on("change", index => {
            this.flickityNav.select(index)
         })
      })
   }
   update() {
      setTimeout(() => {
         this.flickity && this.flickityNav && (this.flickityNav.next(), this.settings.autorotate && this.flickity.unpausePlayer())
      }, 300)
   }
   getSwipeDirection(moveVector) {
      return moveVector.x > 0 ? "right" : "left"
   }
}
customElements.define("testimonials-component", TestimonialsComponent);
class UseAnimate extends HTMLElement {
   constructor() {
      super(), theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 0
      })
   }
   init() {
      this.setAttribute("animate", "")
   }
}
customElements.define("use-animate", UseAnimate);
class AnimateSticky extends HTMLElement {
   constructor() {
      super()
   }
   connectedCallback() {
      this.onScrollHandler = this.onScroll.bind(this), window.addEventListener("scroll", this.onScrollHandler, !1), this.onScrollHandler()
   }
   disconnectedCallback() {
      window.removeEventListener("scroll", this.onScrollHandler)
   }
   onScroll() {
      (window.pageYOffset || document.documentElement.scrollTop) >= this.getOffsetTop(this) ? requestAnimationFrame(this.reveal.bind(this)) : requestAnimationFrame(this.reset.bind(this))
   }
   reveal() {
      this.setAttribute("animate", "")
   }
   reset() {
      this.removeAttribute("animate")
   }
   getOffsetTop(element) {
      let offsetTop = 0;
      for (; element;) offsetTop += element.offsetTop, element = element.offsetParent;
      return offsetTop
   }
}
customElements.define("animate-sticky", AnimateSticky);
class LookbookComponent extends HTMLElement {
   constructor() {
      super(), theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 0
      })
   }
   init() {
      const hotspots = this.querySelectorAll(".look__hotspot");
      hotspots.forEach(hotspot => {
         hotspot.classList.add("active")
      }), setTimeout(() => {
         hotspots.forEach(hotspot => {
            hotspot.classList.remove("active")
         })
      }, 3e3)
   }
}
customElements.define("lookbook-component", LookbookComponent);
class TabCollage extends HTMLElement {
   constructor() {
      super(), this.querySelectorAll(".tab-collage__heading").forEach(button => button.addEventListener("click", this.onButtonClick.bind(this))), this.querySelectorAll(".tab-collage__heading").forEach(button => button.addEventListener("mouseover", this.onButtonClick.bind(this)))
   }
   onButtonClick(event) {
      const target = event.target;
      target.classList.contains("active") || (this.pauseAllMedia(), this.querySelectorAll("[data-block-id]").forEach(button => {
         target.dataset.blockId === button.dataset.blockId ? button.classList.add("active") : button.classList.remove("active")
      }))
   }
   pauseAllMedia() {
      this.querySelectorAll('video-section[data-type="youtube"] iframe').forEach(video => {
         video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
      }), this.querySelectorAll('video-section[data-type="vimeo"] iframe').forEach(video => {
         video.contentWindow.postMessage('{"method":"pause"}', "*")
      })
   }
}
customElements.define("tab-collage", TabCollage);
class CountdownTimer extends HTMLElement {
   constructor() {
      if (super(), this.parent = this.closest(".product-countdown"), this.date = new Date(Date.parse(this.dataset.date)).getTime(), isNaN(this.date) && (this.date = new Date(this.dataset.date.replace(/-/g, "/")).getTime(), isNaN(this.date))) {
         this.unload();
         return
      }
      theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 200
      })
   }
   init() {
      this.timer(), this.dataset.interval = setInterval(this.timer.bind(this), 1e3)
   }
   timer() {
      const now = new Date,
         countTo = new Date(this.date),
         timeDifference = countTo - now;
      if (timeDifference < 0) {
         this.unload();
         return
      }
      const secondsInADay = 60 * 60 * 1e3 * 24,
         secondsInAHour = 60 * 60 * 1e3,
         days = Math.floor(timeDifference / secondsInADay * 1),
         hours = Math.floor(timeDifference % secondsInADay / secondsInAHour * 1),
         mins = Math.floor(timeDifference % secondsInADay % secondsInAHour / (60 * 1e3) * 1),
         secs = Math.floor(timeDifference % secondsInADay % secondsInAHour % (60 * 1e3) / 1e3 * 1);
      if (this.dataset.compact == "true") {
         const dayHTML = days > 0 ? `<div class="countdown__item"><span>${days}${dateStrings.d}</span></div>` : "",
            otherHTML = `<div class="countdown__item"><span>${hours>9?hours:"0"+hours}:${mins>9?mins:"0"+mins}:${secs>9?secs:"0"+secs}</span></div>`;
         this.innerHTML = dayHTML + otherHTML
      } else {
         const dayHTML = days > 0 ? `<div class="countdown__item"><span>${days}</span> ${days==1?dateStrings.day:dateStrings.days}</div>` : "",
            hourHTML = `<div class="countdown__item"><span>${hours}</span> ${hours==1?dateStrings.hour:dateStrings.hours}</div>`,
            minHTML = `<div class="countdown__item"><span>${mins}</span> ${mins==1?dateStrings.minute:dateStrings.minutes}</div>`,
            secHTML = `<div class="countdown__item"><span>${secs}</span> ${secs==1?dateStrings.second:dateStrings.seconds}</div>`;
         this.innerHTML = dayHTML + hourHTML + minHTML + secHTML
      }
   }
   unload() {
      this.dataset.interval && clearInterval(this.dataset.interval), this.classList.add("hidden"), this.parent && this.parent.classList.add("hidden")
   }
}
customElements.define("countdown-timer", CountdownTimer);
class GMap extends HTMLElement {
   constructor() {
      super(), !(!this.dataset.apiKey || !this.dataset.mapAddress) && theme.initWhenVisible({
         element: this,
         callback: this.prepMapApi.bind(this),
         threshold: 200
      })
   }
   prepMapApi() {
      this.loadScript().then(this.initMap.bind(this))
   }
   loadScript() {
      return new Promise((resolve, reject) => {
         const script = document.createElement("script");
         document.body.appendChild(script), script.onload = resolve, script.onerror = reject, script.async = !0, script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.dataset.apiKey
      })
   }
   initMap() {
      new google.maps.Geocoder().geocode({
         address: this.dataset.mapAddress
      }, (results, status) => {
         if (status !== google.maps.GeocoderStatus.OK) Shopify.designMode;
         else {
            const mapOptions = {
                  zoom: parseInt(this.dataset.zoom),
                  center: results[0].geometry.location,
                  draggable: !0,
                  clickableIcons: !1,
                  scrollwheel: !1,
                  disableDoubleClickZoom: !0,
                  disableDefaultUI: !0
               },
               map = new google.maps.Map(this, mapOptions),
               center = map.getCenter();
            map.setCenter(center);
            const icon = {
               path: "M32.7374478,5.617 C29.1154478,1.995 24.2994478,0 19.1774478,0 C14.0544478,0 9.23944778,1.995 5.61744778,5.617 C-1.08555222,12.319 -1.91855222,24.929 3.81344778,32.569 L19.1774478,54.757 L34.5184478,32.6 C40.2734478,24.929 39.4404478,12.319 32.7374478,5.617 Z M19.3544478,26 C15.4954478,26 12.3544478,22.859 12.3544478,19 C12.3544478,15.141 15.4954478,12 19.3544478,12 C23.2134478,12 26.3544478,15.141 26.3544478,19 C26.3544478,22.859 23.2134478,26 19.3544478,26 Z",
               fillColor: this.dataset.markerColor,
               fillOpacity: 1,
               anchor: new google.maps.Point(15, 55),
               strokeWeight: 0,
               scale: .6
            };
            new google.maps.Marker({
               map,
               position: map.getCenter(),
               icon
            });
            const styledMapType = new google.maps.StyledMapType(JSON.parse(this.parentNode.querySelector("[data-gmap-style]").innerHTML));
            map.mapTypes.set("styled_map", styledMapType), map.setMapTypeId("styled_map"), google.maps.event.addDomListener(window, "resize", function () {
               google.maps.event.trigger(map, "resize"), map.setCenter(center)
            })
         }
      })
   }
}
customElements.define("g-map", GMap);
class RelatedButtons extends HTMLElement {
   constructor() {
      super(), window.addEventListener("scroll", this.checkListener.bind(this)), this.querySelectorAll("a").forEach(button => button.addEventListener("click", this.onButtonClick.bind(this)))
   }
   checkListener() {
      const element = document.querySelector(this.dataset.scrollto);
      window.scrollY >= element.offsetTop - element.clientHeight ? this.classList.add("is-flipped") : this.classList.remove("is-flipped")
   }
   onButtonClick(event) {
      event.preventDefault();
      const target = event.target;
      document.querySelector(target.getAttribute("href")).scrollIntoView({
         behavior: "smooth"
      })
   }
}
customElements.define("related-buttons", RelatedButtons);
class ProductRecentlyViewed extends HTMLElement {
   constructor() {
      if (super(), isStorageSupported("local")) {
         const productId = parseInt(this.dataset.productId),
            cookieName = "beyours:recently-viewed",
            items = JSON.parse(window.localStorage.getItem(cookieName) || "[]");
         items.includes(productId) || items.unshift(productId), window.localStorage.setItem(cookieName, JSON.stringify(items.slice(0, 5)))
      }
   }
}
customElements.define("product-recently-viewed", ProductRecentlyViewed);
class RecentlyViewedProducts extends HTMLElement {
   constructor() {
      super(), theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 600
      })
   }
   init() {
      fetch(this.dataset.url + this.getQueryString()).then(response => response.text()).then(text => {
         const html = document.createElement("div");
         html.innerHTML = text;
         const recommendations = html.querySelector("recently-viewed-products");
         recommendations && recommendations.innerHTML.trim().length && (this.innerHTML = recommendations.innerHTML)
      }).catch(e => {
         console.error(e)
      })
   }
   getQueryString() {
      const items = JSON.parse(window.localStorage.getItem("beyours:recently-viewed") || "[]");
      return this.dataset.productId && items.includes(parseInt(this.dataset.productId)) && items.splice(items.indexOf(parseInt(this.dataset.productId)), 1), items.map(item => "id:" + item).slice(0, 4).join(" OR ")
   }
}
customElements.define("recently-viewed-products", RecentlyViewedProducts);
class VideoSection extends HTMLElement {
   constructor() {
      super(), this.background = this.dataset.initMode !== "template", this.background ? theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 600
      }) : this.init()
   }
   init() {
      switch (this.parentSelector = this.dataset.parent || ".media-wrapper", this.parent = this.closest(this.parentSelector), this.dataset.type) {
         case "youtube":
            this.initYoutubeVideo();
            break;
         case "vimeo":
            this.initVimeoVideo();
            break;
         case "mp4":
            this.initMp4Video();
            break
      }
   }
   initYoutubeVideo() {
      this.setAsLoading(), this.loadScript("youtube").then(this.setupYoutubePlayer.bind(this))
   }
   initVimeoVideo() {
      this.setAsLoading(), this.loadScript("vimeo").then(this.setupVimeoPlayer.bind(this))
   }
   initMp4Video() {
      const player = this.querySelector("video");
      if (player) {
         const promise = player.play();
         typeof promise < "u" && promise.then(function () {}).catch(function () {
            player.setAttribute("controls", "")
         })
      }
   }
   loadScript(videoType) {
      return new Promise((resolve, reject) => {
         const script = document.createElement("script");
         document.body.appendChild(script), script.onload = resolve, script.onerror = reject, script.async = !0, script.src = videoType === "youtube" ? "//www.youtube.com/iframe_api" : "//player.vimeo.com/api/player.js"
      })
   }
   setAsLoading() {
      this.parent.setAttribute("loading", !0)
   }
   setAsLoaded() {
      this.parent.removeAttribute("loading"), this.parent.setAttribute("loaded", !0)
   }
   setupYoutubePlayer() {
      const videoId = this.dataset.videoId,
         playerInterval = setInterval(() => {
            window.YT && window.YT.ready(() => {
               const element = document.createElement("div");
               this.appendChild(element), this.player = new YT.Player(element, {
                  videoId,
                  playerVars: {
                     showinfo: 0,
                     controls: !this.background,
                     fs: !this.background,
                     rel: 0,
                     height: "100%",
                     width: "100%",
                     iv_load_policy: 3,
                     html5: 1,
                     loop: 1,
                     playsinline: 1,
                     modestbranding: 1,
                     disablekb: 1
                  },
                  events: {
                     onReady: this.onYoutubeReady.bind(this),
                     onStateChange: this.onYoutubeStateChange.bind(this)
                  }
               }), clearInterval(playerInterval)
            })
         }, 50)
   }
   onYoutubeReady() {
      this.iframe = this.querySelector("iframe"), this.iframe.setAttribute("tabindex", "-1"), this.background && this.player.mute(), typeof this.player.playVideo == "function" && this.player.playVideo(), this.setAsLoaded();
      var observer = new IntersectionObserver((entries, _observer) => {
         entries.forEach(entry => {
            entry.isIntersecting ? this.youtubePlay() : this.youtubePause()
         })
      }, {
         rootMargin: "0px 0px 50px 0px"
      });
      observer.observe(this.iframe)
   }
   onYoutubeStateChange(event) {
      switch (event.data) {
         case -1:
            this.attemptedToPlay && (this.setAsLoaded(), this.closest(".banner").classList.add("video-interactable"));
            break;
         case 0:
            this.youtubePlay();
            break;
         case 1:
            this.setAsLoaded();
            break;
         case 3:
            this.attemptedToPlay = !0;
            break
      }
   }
   youtubePlay() {
      this.background && this.player && typeof this.player.playVideo == "function" && this.player.playVideo()
   }
   youtubePause() {
      this.background && this.player && typeof this.player.pauseVideo == "function" && this.player.pauseVideo()
   }
   setupVimeoPlayer() {
      const videoId = this.dataset.videoId,
         playerInterval = setInterval(() => {
            window.Vimeo && (this.player = new Vimeo.Player(this, {
               id: videoId,
               autoplay: !0,
               autopause: !1,
               background: this.background,
               controls: !this.background,
               loop: !0,
               height: "100%",
               width: "100%"
            }), this.player.ready().then(this.onVimeoReady.bind(this)), clearInterval(playerInterval))
         }, 50)
   }
   onVimeoReady() {
      this.iframe = this.querySelector("iframe"), this.iframe.setAttribute("tabindex", "-1"), this.background && this.player.setMuted(!0), this.setAsLoaded();
      var observer = new IntersectionObserver((entries, _observer) => {
         entries.forEach(entry => {
            entry.isIntersecting ? this.vimeoPlay() : this.vimeoPause()
         })
      }, {
         rootMargin: "0px 0px 50px 0px"
      });
      observer.observe(this.iframe)
   }
   vimeoPlay() {
      this.background && this.player && typeof this.player.play == "function" && this.player.play()
   }
   vimeoPause() {
      this.background && this.player && typeof this.player.pause == "function" && this.player.pause()
   }
}
customElements.define("video-section", VideoSection);
class BundleProduct extends HTMLElement {
   constructor() {
      super(), this.classes = {
         souldout: "price--sold-out",
         onsale: "price--on-sale",
         nocompare: "price--no-compare"
      }, this.price = this.querySelector(".price"), this.variants = this.querySelector("select"), this.variants && this.variants.addEventListener("change", this.onSelectChange.bind(this))
   }
   onSelectChange(event) {
      const variants = event.target,
         variant = variants.options[variants.selectedIndex],
         compare_at_price = parseInt(variant.dataset.compare_at_price || 0),
         price = parseInt(variant.dataset.price || 0),
         available = variant.dataset.available === "true",
         price_varies = variants.dataset.price_varies === "true",
         compare_at_price_varies = variants.dataset.compare_at_price_varies === "true";
      this.price.classList.remove(this.classes.souldout), this.price.classList.remove(this.classes.onsale), this.price.classList.remove(this.classes.nocompare), available === !1 ? this.price.classList.add(this.classes.souldout) : compare_at_price > price && available && this.price.classList.add(this.classes.onsale), price_varies == !1 && compare_at_price_varies && this.price.classList.add(this.classes.nocompare);
      const price__regular = this.querySelector(".price__regular");
      price__regular.querySelector(".price-item--regular").innerHTML = `<price-money><bdi>${theme.Currency.formatMoney(price,shopSettings.moneyFormat)}</bdi></price-money>`;
      const price__sale = this.querySelector(".price__sale");
      price__sale.querySelector(".price-item--regular").innerHTML = `<price-money><bdi>${theme.Currency.formatMoney(compare_at_price,shopSettings.moneyFormat)}</bdi></price-money>`, price__sale.querySelector(".price-item--sale").innerHTML = `<price-money><bdi>${theme.Currency.formatMoney(price,shopSettings.moneyFormat)}</bdi></price-money>`
   }
}
customElements.define("bundle-product", BundleProduct);
class BundleProducts extends HTMLElement {
   constructor() {
      super(), this.miniCart = document.querySelector("mini-cart"), this.button = this.querySelector("button"), this.button && this.button.addEventListener("click", this.onButtonClick.bind(this)), this.blocks = this.querySelectorAll("[data-block-id]"), this.blocks.forEach(block => block.addEventListener("mouseenter", this.onEnterHandler.bind(this))), this.blocks.forEach(block => block.addEventListener("mouseleave", this.onLeaveHandler.bind(this)))
   }
   onEnterHandler(event) {
      this.classList.add("hovering");
      const target = event.target,
         blockId = target.dataset.blockId;
      this.blocks.forEach(block => {
         if (target.nodeName === "BUNDLE-PRODUCT" && block.nodeName === "BUNDLE-PRODUCT") {
            block.classList.add("active");
            return
         }
         block.dataset.blockId === blockId && block.classList.add("active")
      })
   }
   onLeaveHandler() {
      this.classList.remove("hovering"), this.blocks.forEach(block => block.classList.remove("active"))
   }
   onButtonClick(event) {
      event.preventDefault();
      const items = {
         items: [...this.querySelectorAll('[name="id"]')].map(e => e.value).map(e => ({
            id: e,
            quantity: 1
         }))
      };
      if (document.body.classList.contains("template-cart") || !shopSettings.cartDrawer) {
         Shopify.postLink2(routes.cart_add_url, {
            parameters: {
               ...items
            }
         });
         return
      }
      this.handleErrorMessage(), this.button.setAttribute("disabled", !0), this.button.classList.add("loading");
      const sections = this.miniCart ? this.miniCart.getSectionsToRender().map(section => section.id) : [],
         body = JSON.stringify({
            ...items,
            sections,
            sections_url: window.location.pathname
         });
      fetch(`${routes.cart_add_url}`, {
         ...fetchConfig("javascript"),
         body
      }).then(response => response.json()).then(response => {
         if (response.status) {
            this.handleErrorMessage(response.description);
            return
         }
         this.miniCart && this.miniCart.renderContents(response)
      }).catch(e => {
         console.error(e)
      }).finally(() => {
         this.button.classList.remove("loading"), this.button.removeAttribute("disabled")
      })
   }
   handleErrorMessage(errorMessage = !1) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector(".product-form__error-message-wrapper"), this.errorMessageWrapper ? (this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector(".product-form__error-message"), this.errorMessageWrapper.toggleAttribute("hidden", !errorMessage), errorMessage && (this.errorMessage.textContent = errorMessage)) : errorMessage && alert(errorMessage)
   }
}
customElements.define("bundle-products", BundleProducts);
class ShopTheLook extends HTMLElement {
   constructor() {
      super(), this.dataset.blockCount != 1 && theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 600
      })
   }
   init() {
      this.products = this.querySelector(".image-with-text__products"), this.blocks = this.querySelectorAll("lookbook-component [data-block-index]"), this.blocks.forEach(block => block.addEventListener("mouseenter", this.onEnterHandler.bind(this))), this.products.querySelectorAll(".quick-view__summary").forEach(button => button.addEventListener("click", this.onButtonClick.bind(this))), this.initSlider()
   }
   onButtonClick(event) {
      event.preventDefault();
      const block = event.target.closest(".product-container"),
         summaryElement = this.querySelector(`lookbook-component [data-block-index="${block.dataset.blockIndex}"]`).closest("summary");
      summaryElement && summaryElement.click()
   }
   onEnterHandler(event) {
      if (this.flickity && typeof this.flickity.select == "function") {
         const index = parseInt(event.target.dataset.blockIndex);
         this.flickity.select(index)
      }
   }
   onFocusHandler(index) {
      this.blocks.forEach(block => {
         block.classList.remove("focus"), parseInt(block.dataset.blockIndex) === index && block.classList.add("focus")
      })
   }
   initSlider() {
      this.flickity = new Flickity(this.products, {
         accessibility: !1,
         rightToLeft: theme.config.rtl,
         prevNextButtons: !1,
         pageDots: !0,
         wrapAround: !0,
         fade: !0,
         setGallerySize: !0,
         on: {
            ready: () => {
               this.onFocusHandler(0)
            },
            change: index => {
               this.onFocusHandler(index)
            }
         }
      })
   }
}
customElements.define("shop-the-look", ShopTheLook);
class SelectWrapper extends HTMLElement {
   constructor() {
      super(), theme.initWhenVisible({
         element: this,
         callback: this.init.bind(this),
         threshold: 200
      }), this.select = this.querySelector("select"), this.select && this.select.addEventListener("change", this.handleSelectChange.bind(this))
   }
   init() {
      const style = window.getComputedStyle(this.select),
         value = this.select.options[this.select.selectedIndex].text,
         text = document.createElement("span");
      text.style.fontFamily = style.fontFamily, text.style.fontSize = style.fontSize, text.style.fontWeight = style.fontWeight, text.style.visibility = "hidden", text.style.position = "absolute", text.innerHTML = value, document.body.appendChild(text);
      const width = text.clientWidth;
      this.style.setProperty("--width", `${width}px`), text.remove()
   }
   handleSelectChange() {
      this.init()
   }
}
customElements.define("select-wrapper", SelectWrapper);
class ImageComparison extends HTMLElement {
   constructor() {
      super(), this.active = !1, this.button = this.querySelector("button"), this.horizontal = this.dataset.layout === "horizontal", this.init(), theme.initWhenVisible({
         element: this.querySelector(".image-comparison__animate"),
         callback: this.animate.bind(this),
         threshold: 0
      })
   }
   animate() {
      this.setAttribute("animate", ""), this.classList.add("animating"), setTimeout(() => {
         this.classList.remove("animating")
      }, 1e3)
   }
   init() {
      theme.config.isTouch ? (this.button.addEventListener("touchstart", this.startHandler.bind(this)), document.body.addEventListener("touchend", this.endHandler.bind(this)), document.body.addEventListener("touchmove", this.onHandler.bind(this))) : (this.button.addEventListener("mousedown", this.startHandler.bind(this)), document.body.addEventListener("mouseup", this.endHandler.bind(this)), document.body.addEventListener("mousemove", this.onHandler.bind(this)))
   }
   startHandler() {
      this.active = !0, this.classList.add("scrolling")
   }
   endHandler() {
      this.active = !1, this.classList.remove("scrolling")
   }
   onHandler(e) {
      if (!this.active) return;
      const event = e.touches && e.touches[0] || e,
         x = this.horizontal ? event.pageX - this.offsetLeft : event.pageY - this.offsetTop;
      this.scrollIt(x)
   }
   scrollIt(x) {
      const distance = this.horizontal ? this.clientWidth : this.clientHeight,
         max = distance - 20,
         mousePercent = Math.max(20, Math.min(x, max)) * 100 / distance;
      this.style.setProperty("--percent", mousePercent + "%")
   }
}
customElements.define("image-comparison", ImageComparison);
//# sourceMappingURL=/cdn/shop/t/19/assets/global.js.map?v=21244418125198555381654200097