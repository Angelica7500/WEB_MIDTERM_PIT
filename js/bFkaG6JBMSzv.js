class QuickViewDrawer extends MenuDrawer {
   constructor() {
      super({
         classes: {
            open: "quick-view--open",
            opening: "quick-view--opening",
            closing: "quick-view--closing"
         }
      }), this.addEventListener("close", () => {
         const drawerContent = this.querySelector(".quick-view__content");
         drawerContent.innerHTML = "", drawerContent.classList.remove("hide-cover")
      })
   }
}
customElements.define("quick-view-drawer", QuickViewDrawer);
class QuickView extends HTMLElement {
   constructor() {
      super(), new IntersectionObserver(this.handleIntersection.bind(this)).observe(this)
   }
   handleIntersection(entries, _observer) {
      if (!entries[0].isIntersecting) return;
      const drawerContent = this.querySelector(".quick-view__content"),
         productHandle = this.dataset.productHandle;
      let sectionUrl = `${routes.root_url}/products/${productHandle}?view=modal`;
      sectionUrl = sectionUrl.replace("//", "/"), fetch(sectionUrl).then(response => response.text()).then(html => {
         drawerContent.innerHTML = this.getSectionInnerHTML(html, ".quick-view__content"), setTimeout(() => {
            drawerContent.classList.add("hide-cover"), Shopify && Shopify.PaymentButton && Shopify.PaymentButton.init()
         }, 300)
      }).catch(e => {
         console.error(e)
      })
   }
   getSectionInnerHTML(html, selector = ".shopify-section") {
      return new DOMParser().parseFromString(html, "text/html").querySelector(selector).innerHTML
   }
}
customElements.define("quick-view", QuickView);
//# sourceMappingURL=/cdn/shop/t/19/assets/quick-view.js.map?v=30376989890091481571654197076