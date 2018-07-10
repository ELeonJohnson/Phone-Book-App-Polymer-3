import {
  LitElement,
  html
} from '/js/lit-element.js?module';
import SideMenu from '/js/components/SideMenu.js'
import ContentArea from '/js/components/ContentArea.js'

class counterComp extends LitElement {
  constructor() {
    super()
    this.total = {
      number: 0
    }
    this.popupOpen = false
    this.togglePopup = this.togglePopup.bind(this)
    this.saveContact = this.saveContact.bind(this)
    this.allContacts = []
}

  //Properties for css styling
  static get properties() {
    return {
      total: Object,
      popupOpen: Boolean,
      akkContacts: Array
    }
  }

  _firstRendered() {

    }

    togglePopup() {
      this.popupOpen = !this.popupOpen
      console.log('clicked button')
      console.log(this.popupOpen)
    }

    saveContacts(contact, event) {
      event.preventDefault()
      function immutablePush(arr, newEntry){
        return [...arr, newEntry]
      }
      let newArray = immutablePush(this.allContacts, contact)
      this.allContacts = newArray
    }



  // Rendering properties
  _render({
    color,
    background,
    fontWeight
  }) {
    return html`
<style>
@import '/css/global.css';

.main-page {
  display: grid;
  grid-template-columns: 250px 1fr;
}

</style>

<div class="main-page">
  <side-menu togglePopup="${this.togglePopup}"></side-menu>
  <content-area popupOpen="${this.popupOpen}" togglePopup="${this.togglePopup}" saveContact="${this.saveContact}"></content-area>
</div>
  `
  }
}



customElements.define('counter-comp', counterComp)
