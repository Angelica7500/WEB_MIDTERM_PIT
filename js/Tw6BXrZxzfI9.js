class CartRecommendations extends HTMLElement {
   constructor() {
      super(), new IntersectionObserver(this.handleIntersection.bind(this)).observe(this)
   }
   handleIntersection(entries, observer) {
      entries[0].isIntersecting && (observer.unobserve(this), fetch(this.dataset.url).then(response => response.text()).then(text => {
         const html = document.createElement("div");
         html.innerHTML = text;
         const recommendations = html.querySelector("cart-recommendations");
         recommendations && recommendations.innerHTML.trim().length && (this.innerHTML = recommendations.innerHTML)
      }).catch(e => {
         console.error(e)
      }))
   }
}
customElements.define("cart-recommendations", CartRecommendations);
//# sourceMappingURL=/cdn/shop/t/19/assets/cart-recommendations.js.map?v=79268977417882524161654197085