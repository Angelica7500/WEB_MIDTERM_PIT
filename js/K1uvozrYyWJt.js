class CartRemoveButton extends HTMLElement {
   constructor() {
      super(), this.addEventListener("click", event => {
         event.preventDefault(), this.closest("cart-items").updateQuantity(this.dataset.index, 0)
      })
   }
}
customElements.define("cart-remove-button", CartRemoveButton);
class CartItems extends HTMLElement {
   constructor() {
      super(), this.lineItemStatusElement = document.getElementById("shopping-cart-line-item-status"), this.cartErrors = document.getElementById("cart-errors"), this.currentItemCount = Array.from(this.querySelectorAll('[name="updates[]"]')).reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0), this.debouncedOnChange = debounce(event => {
         this.onChange(event)
      }, 300), this.addEventListener("change", this.debouncedOnChange.bind(this))
   }
   onChange(event) {
      event.target !== null && this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute("name"))
   }
   getSectionsToRender() {
      let sections = [{
         id: "main-cart-items",
         section: document.getElementById("main-cart-items")?.dataset.id,
         selector: ".js-contents"
      }, {
         id: "mini-cart",
         section: "mini-cart",
         selector: ".shopify-section"
      }, {
         id: "cart-icon-bubble",
         section: "cart-icon-bubble",
         selector: ".shopify-section"
      }, {
         id: "cart-live-region-text",
         section: "cart-live-region-text",
         selector: ".shopify-section"
      }, {
         id: "main-cart-footer",
         section: document.getElementById("main-cart-footer")?.dataset.id,
         selector: ".js-contents"
      }];
      return document.querySelector("#main-cart-footer .free-shipping") && sections.push({
         id: "main-cart-footer",
         section: document.getElementById("main-cart-footer")?.dataset.id,
         selector: ".free-shipping"
      }), sections
   }
   updateQuantity(line, quantity, name) {
      this.enableLoading(line);
      const sections = this.getSectionsToRender().map(section => section.section),
         body = JSON.stringify({
            line,
            quantity,
            sections,
            sections_url: window.location.pathname
         });
      fetch(`${routes.cart_change_url}`, {
         ...fetchConfig(),
         body
      }).then(response => response.text()).then(state => {
         const parsedState = JSON.parse(state);
         this.classList.toggle("is-empty", parsedState.item_count === 0);
         const cartFooter = document.getElementById("main-cart-footer");
         cartFooter && cartFooter.classList.toggle("is-empty", parsedState.item_count === 0), this.getSectionsToRender().forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
               const elementToReplace = element.querySelector(section.selector) || element;
               elementToReplace && parsedState.sections[section.section] && (elementToReplace.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.section], section.selector))
            }
         }), this.updateLiveRegions(line, parsedState.item_count);
         const lineItem = document.getElementById(`CartItem-${line}`);
         lineItem && name && lineItem.querySelector(`[name="${name}"]`).focus(), this.disableLoading()
      }).catch(() => {
         this.querySelectorAll(".loading-overlay").forEach(overlay => overlay.classList.add("hidden")), this.disableLoading(), this.cartErrors && (this.cartErrors.textContent = cartStrings.error)
      })
   }
   updateLiveRegions(line, itemCount) {
      if (this.currentItemCount === itemCount) {
         const quantityError = document.getElementById(`Line-item-error-${line}`);
         quantityError && (quantityError.querySelector(".cart-item__error-text").innerHTML = cartStrings.quantityError.replace("[quantity]", document.getElementById(`Quantity-${line}`).value))
      }
      this.currentItemCount = itemCount, this.lineItemStatusElement && this.lineItemStatusElement.setAttribute("aria-hidden", !0);
      const cartStatus = document.getElementById("cart-live-region-text");
      cartStatus && (cartStatus.setAttribute("aria-hidden", !1), setTimeout(() => {
         cartStatus.setAttribute("aria-hidden", !0)
      }, 1e3))
   }
   getSectionInnerHTML(html, selector) {
      return new DOMParser().parseFromString(html, "text/html").querySelector(selector)?.innerHTML
   }
   enableLoading(line) {
      const cartItems = document.getElementById("main-cart-items");
      cartItems && cartItems.classList.add("cart__items--disabled");
      const loadingOverlay = this.querySelectorAll(".loading-overlay")[line - 1];
      loadingOverlay && loadingOverlay.classList.remove("hidden"), document.activeElement.blur(), this.lineItemStatusElement && this.lineItemStatusElement.setAttribute("aria-hidden", !1)
   }
   disableLoading() {
      const cartItems = document.getElementById("main-cart-items");
      cartItems && cartItems.classList.remove("cart__items--disabled")
   }
   renderContents(parsedState) {
      this.getSectionsToRender().forEach(section => {
         const element = document.getElementById(section.id);
         console.log(element, parsedState.sections[section.id]), element && (element.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector))
      })
   }
}
customElements.define("cart-items", CartItems);
class CartNote extends HTMLElement {
   constructor() {
      super(), this.addEventListener("change", debounce(event => {
         const body = JSON.stringify({
            note: event.target.value
         });
         fetch(`${routes.cart_update_url}`, {
            ...fetchConfig(),
            body
         })
      }, 300))
   }
}
customElements.define("cart-note", CartNote);
class DiscountCode extends HTMLElement {
   constructor() {
      super(), isStorageSupported("session") && (this.setupDiscount(), this.addEventListener("change", event => {
         window.sessionStorage.setItem("discount", event.target.value)
      }))
   }
   setupDiscount() {
      const discount = window.sessionStorage.getItem("discount");
      discount !== null && (this.querySelector('input[name="discount"]').value = discount)
   }
}
customElements.define("discount-code", DiscountCode);
class ShippingCalculator extends HTMLElement {
   constructor() {
      super(), this.setupCountries(), this.errors = this.querySelector("#ShippingCalculatorErrors"), this.success = this.querySelector("#ShippingCalculatorSuccess"), this.zip = this.querySelector("#ShippingCalculatorZip"), this.country = this.querySelector("#ShippingCalculatorCountry"), this.province = this.querySelector("#ShippingCalculatorProvince"), this.button = this.querySelector("button"), this.button.addEventListener("click", this.onSubmitHandler.bind(this))
   }
   setupCountries() {
      Shopify && Shopify.CountryProvinceSelector && new Shopify.CountryProvinceSelector("ShippingCalculatorCountry", "ShippingCalculatorProvince", {
         hideElement: "ShippingCalculatorProvinceContainer"
      })
   }
   onSubmitHandler(event) {
      event.preventDefault(), this.errors.classList.add("hidden"), this.success.classList.add("hidden"), this.zip.classList.remove("invalid"), this.country.classList.remove("invalid"), this.province.classList.remove("invalid"), this.button.classList.add("loading"), this.button.setAttribute("disabled", !0);
      const body = JSON.stringify({
         shipping_address: {
            zip: this.zip.value,
            country: this.country.value,
            province: this.province.value
         }
      });
      let sectionUrl = `${routes.cart_url}/shipping_rates.json`;
      sectionUrl = sectionUrl.replace("//", "/"), fetch(sectionUrl, {
         ...fetchConfig("javascript"),
         body
      }).then(response => response.json()).then(parsedState => {
         if (parsedState.shipping_rates) this.success.classList.remove("hidden"), this.success.innerHTML = "", parsedState.shipping_rates.forEach(rate => {
            const child = document.createElement("p");
            child.innerHTML = `${rate.name}: ${rate.price} ${Shopify.currency.active}`, this.success.appendChild(child)
         });
         else {
            let errors = [];
            Object.entries(parsedState).forEach(([attribute, messages]) => {
               errors.push(`${attribute.charAt(0).toUpperCase()+attribute.slice(1)} ${messages[0]}`)
            }), this.errors.classList.remove("hidden"), this.errors.querySelector(".errors").innerHTML = errors.join("; ")
         }
      }).catch(e => {
         console.error(e)
      }).finally(() => {
         this.button.classList.remove("loading"), this.button.removeAttribute("disabled")
      })
   }
}
customElements.define("shipping-calculator", ShippingCalculator);
//# sourceMappingURL=/cdn/shop/t/19/assets/cart.js.map?v=61715728594914621201654200095