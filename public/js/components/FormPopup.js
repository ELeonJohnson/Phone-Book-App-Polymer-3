import {
  LitElement,
  html
} from '/js/components/lit-element.js';
import SideMenu from '/js/components/SideMenu.js'

export default class FormPopup extends LitElement {
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
  .form-popup {
    background: #2b304c;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    background: white;
    padding: 20px;
    width: 800px;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
  }

</style>

<section class="form-popup">
  <form>
    <h2>Add a new contact</h2>
    <div class="form-group">
      <label for="first_name"> Last Name</label>
      <input type="text" name="last_name"></input>
    </div>

    <div class="form-group">
      <label for="first_name">Address #1</label>
      <input type="text" name="address_1"></input>
    </div>

    <div class="form-group">
      <label for="first_name">Address #2</label>
      <input type="text" name="address_2"></input>
    </div>

    <div class="form-group">
      <label for="first_name">City</label>
      <input type="text" name="city"></input>
    </div>

    <div class="form-group">
      <label for="first_name">State</label>
      <input type="text" name="state"></input>
    </div>

    <div class="form-group">
      <label for="first_name">Zipcode</label>
      <input type="text" name="zipcode"></input>
    </div>

    <div>
    <button type="submit">Add</button>
    </div>

  </form>
</section>


  `
  }
}



customElements.define('form-popup', FormPopup)
