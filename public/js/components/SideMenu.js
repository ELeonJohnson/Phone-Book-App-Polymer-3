import {
  LitElement,
  html
} from '/js/lit-element.js?module';

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
      togglePopup: Function
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

@import '/css/global.css';

#side-menu {
  background: #323759;
  height: 100vh;
  padding: 50px 25px;
}

.logo {
  text-align: center;
}

.logo img {
  width: 75px;
  background: #323759;
}

.title {
  font-weight: 700;
  color: #ccced7;
  margin: 1rem 0;
}

#side-menu nav a {
  color: #ccced7;
  text-decoration: none;
  text-transform: capitalize;
  display: block;
  padding: 10px 10px 10px 0;
}

#side-menu nav a span.icon {
  padding: 10px 10px 10px 0;
}



</style>
  <section id="side-menu">
    <div class="logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV30x7ftZl7bs3YUxC-3tntifnn1qZ6KXC_QTtb-a6FFDyFxUE">
    </div>
    <div class="menu">
      <div class="title">Contacts</div>
      <nav>
        <a href="#" on-click="${this.togglePopup}"><span class="icon"> + </span>Add Contact</a>
        <a href="#"><span class="icon"> + </span>Add Contact</a>
        <a href="#"><span class="icon"> + </span>Add Contact</a>
        <a href="#"><span class="icon"> + </span>Add Contact</a>
      </nav>
    </div>
  </section>


  `
  }
}



customElements.define('side-menu', SideMenu)
