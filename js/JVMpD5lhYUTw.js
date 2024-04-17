class FooterAccordion extends HTMLElement {
   constructor() {
      super(), this.detailsContainer = this.querySelector("details"), this.summaryToggle = this.querySelector("summary"), this.summaryIsEmpty = this.summaryToggle.textContent.trim().length == 0, this.detailsContainer.addEventListener("keyup", event => event.code.toUpperCase() === "ESCAPE" && this.close()), this.summaryToggle.addEventListener("click", this.onSummaryClick.bind(this)), document.addEventListener("matchSmall", this.close.bind(this)), document.addEventListener("unmatchSmall", this.open.bind(this)), !theme.config.mqlSmall || this.summaryIsEmpty ? (this.detailsContainer.setAttribute("open", !0), this.summaryIsEmpty && this.detailsContainer.setAttribute("empty", !0)) : this.detailsContainer.removeAttribute("open")
   }
   onSummaryClick(event) {
      event.preventDefault(), event.target.closest("details").hasAttribute("open") ? this.close() : this.open()
   }
   open() {
      this.detailsContainer.setAttribute("open", !0)
   }
   close() {
      theme.config.mqlSmall && !this.summaryIsEmpty && this.detailsContainer.removeAttribute("open")
   }
}
customElements.define("footer-accordion", FooterAccordion);
//# sourceMappingURL=/cdn/shop/t/19/assets/footer-accordion.js.map?v=158562398533116985351654197043