/** Shopify CDN: Minification failed

Line 15:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 23:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 38:6 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 39:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 44:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 52:16 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 63:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 78:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 78:37 Transforming default arguments to the configured target environment ("es5") is not supported yet

**/
class MiniCart extends HTMLElement {
  constructor() {
    super();

    this.drawer = document.querySelector('cart-drawer');
    new IntersectionObserver(this.handleIntersection.bind(this)).observe(this);
  }

  handleIntersection(entries, observer) {
    if (!entries[0].isIntersecting) return;
    observer.unobserve(this);

    fetch(this.dataset.url)
      .then(response => response.text())
      .then(html => {
        document.getElementById('mini-cart').innerHTML =
          this.getSectionInnerHTML(html, '.shopify-section');
      })
      .catch(e => {
        console.error(e);
      });
  }

  open() {
    const detailsElement = this.drawer.querySelector('details');
    if (detailsElement.hasAttribute('open')) {
      return;
    }
    
    const summaryElement = this.drawer.querySelector('summary');
    summaryElement.click();

    setTimeout(() => {
      setHeaderHeight();
    }, 250);
  }

  renderContents(parsedState) {
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }));

      if (this.header) this.header.reveal();
      this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'mini-cart',
        section: 'mini-cart',
        selector: '.shopify-section'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }
}

customElements.define('mini-cart', MiniCart);
