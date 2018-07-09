import {
  LitElement,
  html
} from '/js/components/lit-element.js';

export default class SideMenu extends LitElement {
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
  <section id="side-menu">
    <div class="logo"></div>
    <div class="menu">
      <div class="title">Contacts</div>
      <nav>
        <a href="#">Add Contact</a>
        <a href="#">Add Contact</a>
        <a href="#">Add Contact</a>
        <a href="#">Add Contact</a>
      </nav>
    </div>
  </section>


  `
  }
}



customElements.define('side-menu', SideMenu)
