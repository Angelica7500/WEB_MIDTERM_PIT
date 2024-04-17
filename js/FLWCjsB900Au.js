(function () {
   var __sections__ = {};
   (function () {
      for (var i = 0, s = document.getElementById("sections-script").getAttribute("data-sections").split(","); i < s.length; i++) __sections__[s[i]] = !0
   })(),
   function () {
      if (!(!__sections__["cart-recommendations"] && !window.DesignMode)) try {
         class ProductRecommendations extends HTMLElement {
            constructor() {
               super(), new IntersectionObserver(this.handleIntersection.bind(this), {
                  rootMargin: "0px 0px 600px 0px"
               }).observe(this)
            }
            handleIntersection(entries, observer) {
               entries[0].isIntersecting && (observer.unobserve(this), fetch(this.dataset.url).then(response => response.text()).then(text => {
                  const html = document.createElement("div");
                  html.innerHTML = text;
                  const recommendations = html.querySelector("product-recommendations");
                  recommendations && recommendations.innerHTML.trim().length && (this.innerHTML = recommendations.innerHTML)
               }).catch(e => {
                  console.error(e)
               }))
            }
         }
         customElements.define("product-recommendations", ProductRecommendations)
      } catch (e) {
         console.error(e)
      }
   }(),
   function () {
      if (!(!__sections__["featured-product"] && !window.DesignMode)) try {
         customElements.get("product-modal") || customElements.define("product-modal", class extends ModalDialog {
            constructor() {
               super()
            }
            hide() {
               super.hide(), window.pauseAllMedia()
            }
            show(opener) {
               super.show(opener), this.showActiveMedia()
            }
            showActiveMedia() {
               this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach(element => {
                  element.classList.remove("active")
               });
               const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`),
                  activeMediaTemplate = activeMedia.querySelector("template"),
                  activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
               activeMedia.classList.add("active"), activeMedia.scrollIntoView();
               const container = this.querySelector('[role="document"]');
               container.scrollLeft = (activeMedia.width - container.clientWidth) / 2, activeMedia.nodeName == "DEFERRED-MEDIA" && activeMediaContent && activeMediaContent.querySelector(".js-youtube") && activeMedia.loadContent()
            }
         })
      } catch (e) {
         console.error(e)
      }
   }(),
   function () {
      if (__sections__.footer) try {
         class LocalizationForm extends HTMLElement {
            constructor() {
               super(), this.elements = {
                  input: this.querySelector('input[name="locale_code"], input[name="country_code"]'),
                  button: this.querySelector("button"),
                  panel: this.querySelector("ul")
               }, this.elements.button.addEventListener("click", this.openSelector.bind(this)), this.elements.button.addEventListener("focusout", this.closeSelector.bind(this)), this.addEventListener("keyup", this.onContainerKeyUp.bind(this)), this.querySelectorAll("a").forEach(item => item.addEventListener("click", this.onItemClick.bind(this)))
            }
            hidePanel() {
               this.elements.button.setAttribute("aria-expanded", "false"), this.elements.panel.setAttribute("hidden", !0)
            }
            onContainerKeyUp(event) {
               event.code.toUpperCase() === "ESCAPE" && (this.hidePanel(), this.elements.button.focus())
            }
            onItemClick(event) {
               event.preventDefault();
               const form = this.querySelector("form");
               this.elements.input.value = event.currentTarget.dataset.value, form && form.submit()
            }
            openSelector() {
               this.elements.button.focus(), this.elements.panel.toggleAttribute("hidden"), this.elements.button.setAttribute("aria-expanded", (this.elements.button.getAttribute("aria-expanded") === "false").toString())
            }
            closeSelector(event) {
               const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === "BUTTON";
               (event.relatedTarget === null || shouldClose) && this.hidePanel()
            }
         }
         customElements.define("localization-form", LocalizationForm)
      } catch (e) {
         console.error(e)
      }
   }(),
   function () {
      if (__sections__.header) try {
         class StickyHeader extends HTMLElement {
            constructor() {
               super()
            }
            connectedCallback() {
               this.header = document.getElementById("shopify-section-header"), this.headerBounds = {}, this.currentScrollTop = 0, this.preventReveal = !1, this.onScrollHandler = this.onScroll.bind(this), this.hideHeaderOnScrollUp = () => this.preventReveal = !0, this.addEventListener("preventHeaderReveal", this.hideHeaderOnScrollUp), window.addEventListener("scroll", this.onScrollHandler, !1), this.createObserver()
            }
            disconnectedCallback() {
               this.removeEventListener("preventHeaderReveal", this.hideHeaderOnScrollUp), window.removeEventListener("scroll", this.onScrollHandler)
            }
            createObserver() {
               new IntersectionObserver((entries, observer2) => {
                  if (this.headerBounds = entries[0].intersectionRect, this.headerBounds.top === 0 && this.headerBounds.bottom === 0) {
                     const scrollTop = window.pageYOffset || document.documentElement.scrollTop,
                        boundingClientRect = entries[0].boundingClientRect;
                     this.headerBounds = {
                        top: scrollTop + boundingClientRect.top,
                        bottom: scrollTop + boundingClientRect.bottom
                     }
                  }
                  observer2.disconnect()
               }).observe(this.header)
            }
            onScroll() {
               const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
               scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom ? requestAnimationFrame(this.hide.bind(this)) : scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom ? this.preventReveal ? (window.clearTimeout(this.isScrolling), this.isScrolling = setTimeout(() => {
                  this.preventReveal = !1
               }, 66), requestAnimationFrame(this.hide.bind(this))) : requestAnimationFrame(this.reveal.bind(this)) : scrollTop <= this.headerBounds.top && requestAnimationFrame(this.reset.bind(this)), this.currentScrollTop = scrollTop
            }
            hide() {
               this.header.classList.add("shopify-section-header-hidden", "shopify-section-header-sticky")
            }
            reveal() {
               this.header.classList.add("shopify-section-header-sticky", "animate"), this.header.classList.remove("shopify-section-header-hidden")
            }
            reset() {
               this.header.classList.remove("shopify-section-header-hidden", "shopify-section-header-sticky", "animate")
            }
         }
         customElements.define("sticky-header", StickyHeader)
      } catch (e) {
         console.error(e)
      }
   }(),
   function () {
      if (__sections__["main-product"]) try {
         customElements.get("product-modal") || customElements.define("product-modal", class extends ModalDialog {
            constructor() {
               super()
            }
            hide() {
               super.hide(), window.pauseAllMedia()
            }
            show(opener) {
               super.show(opener), this.showActiveMedia()
            }
            showActiveMedia() {
               this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach(element => {
                  element.classList.remove("active")
               });
               const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`),
                  activeMediaTemplate = activeMedia.querySelector("template"),
                  activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
               activeMedia.classList.add("active"), activeMedia.scrollIntoView();
               const container = this.querySelector('[role="document"]');
               container.scrollLeft = (activeMedia.width - container.clientWidth) / 2, activeMedia.nodeName == "DEFERRED-MEDIA" && activeMediaContent && activeMediaContent.querySelector(".js-youtube") && activeMedia.loadContent()
            }
         })
      } catch (e) {
         console.error(e)
      }
   }(),
   function () {
      if (__sections__["product-recommendations"]) try {
         class ProductRecommendations extends HTMLElement {
            constructor() {
               super(), new IntersectionObserver(this.handleIntersection.bind(this), {
                  rootMargin: "0px 0px 600px 0px"
               }).observe(this)
            }
            handleIntersection(entries, observer) {
               entries[0].isIntersecting && (observer.unobserve(this), fetch(this.dataset.url).then(response => response.text()).then(text => {
                  const html = document.createElement("div");
                  html.innerHTML = text;
                  const recommendations = html.querySelector("product-recommendations");
                  recommendations && recommendations.innerHTML.trim().length && (this.innerHTML = recommendations.innerHTML)
               }).catch(e => {
                  console.error(e)
               }))
            }
         }
         customElements.define("product-recommendations", ProductRecommendations)
      } catch (e) {
         console.error(e)
      }
   }()
})();
//# sourceMappingURL=/cdn/shop/t/19/compiled_assets/scripts.js.map?2260=