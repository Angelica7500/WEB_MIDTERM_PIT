class SearchModal extends HTMLElement {
   constructor() {
      super(), this.detailsContainer = this.querySelector("details"), this.summaryToggle = this.querySelector("summary"), this.detailsContainer.addEventListener("keyup", event => event.code && event.code.toUpperCase() === "ESCAPE" && this.close()), this.summaryToggle.addEventListener("click", this.onSummaryClick.bind(this)), this.querySelector('button[type="button"]').addEventListener("click", this.close.bind(this)), this.summaryToggle.setAttribute("role", "button")
   }
   onSummaryClick(event) {
      event.preventDefault(), event.target.closest("details").hasAttribute("open") ? this.close() : this.open(event)
   }
   onBodyClick(event) {
      (!this.contains(event.target) || event.target.classList.contains("modal-overlay")) && this.close(!1)
   }
   open(event) {
      setHeaderHeight(), setScrollbarWidth(), this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this), event.target.closest("details").setAttribute("open", !0), document.body.addEventListener("click", this.onBodyClickEvent), document.body.classList.add("search-modal--open"), trapFocus(this.detailsContainer.querySelector('[tabindex="-1"]'), this.detailsContainer.querySelector('input:not([type="hidden"])'))
   }
   close(focusToggle = !0) {
      removeTrapFocus(focusToggle ? this.summaryToggle : null), this.detailsContainer.removeAttribute("open"), document.body.removeEventListener("click", this.onBodyClickEvent), document.body.classList.remove("search-modal--open")
   }
}
customElements.define("search-modal", SearchModal);
//# sourceMappingURL=/cdn/shop/t/19/assets/search-modal.js.map?v=164267904651882004741654197038