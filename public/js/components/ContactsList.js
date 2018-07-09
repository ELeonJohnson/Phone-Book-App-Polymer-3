import {
  LitElement,
  html
} from '/js/components/lit-element.js';
import SideMenu from '/js/components/SideMenu.js'

export default class ContactsList extends LitElement {
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


</style>



    <section class="contacts">
    <h2>Contacts</h2>
      <div class="contact">
        <div class="user-img"></div>
          <div class="fullname">
            Enoch Leon Johnson
          </div>
        <div class="number">
          111 - 111 - 1111
        </div>
        <div class="state">
          OH
        </div>
        <div class="category">
          Family
        </div>
      </div>
    </section>
    </section>


  `
  }
}



customElements.define('contacts-list', ContactsList)
