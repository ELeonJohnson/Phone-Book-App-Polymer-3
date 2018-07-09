import {
  LitElement,
  html
} from '/js/components/lit-element.js';
import SideMenu from '/js/components/SideMenu.js'
import ContactList from '/js/components/ContactsList.js'

export default class ContentArea extends LitElement {
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
#content-area {
  background:#fcfdff;
  padding: 50px 80px;
}

</style>


  <section id="content-area">
    <contacts-list></contacts-list>
  </section>

  `
  }
}



customElements.define('content-area', ContentArea)
