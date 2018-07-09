import {
  LitElement,
  html
} from '/js/components/lit-element.js';
import SideMenu from '/js/components/SideMenu.js'
import ContentArea from '/js/components/ContentArea.js'

class counterComp extends LitElement {
  constructor() {
    super()
    this.total = {
      number: 0
    }

  }

  //Properties for css styling
  static get properties() {
    return {
      total: Object,
    }
  }

  _firstRendered() {

    }



  // Rendering properties
  _render({
    color,
    background,
    fontWeight
  }) {
    return html `
<style>
.main-page {
  display: grid;
  grid-template-columns: 250px 1fr;
}

</style>

<div class="main-page">
  <side-menu></side-menu>
  <content-area></content-area>
</div>
  `
  }
}



customElements.define('counter-comp', counterComp)
