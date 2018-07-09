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

@import '/css/global.css';


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
    width: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
    grid-column: 1/5;
  }

  .form-group {
    padding: 0;
    position: relative;
  }

  label {
    font-size: .7rem;
    background: white;
    position: absolute;
    top: -5px;
    display: inline-block;
  }

  input[type="text"] {
    padding: 10px;
    display: block;
    width: 100%;
  }

  .first-name {
    grid-column: 1/3;
  }

  .last-name {
    grid-column: 3/5;
  }

  .address-1 {
    grid-column: 1/5;
  }

  .address-2 {
    grid-column: 1/5;
  }

  .city {
    grid-column: 1/3;
  }

  .button {
    justify-self: end;
    grid-column: 4/5;
  }

  .button button {
    cursor: pointer;
    padding: 10px 25px;
    border: 1px solid rgba(0, 0, 0, .1);
    color: white;
    border-radius: 5px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
    background: #6db3f2; /* Old browsers */
    background: -moz-linear-gradient(top, #6db3f2 0%, #54a3ee 50%, #3690f0 51%, #1e69de 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #6db3f2 0%,#54a3ee 50%,#3690f0 51%,#1e69de 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #6db3f2 0%,#54a3ee 50%,#3690f0 51%,#1e69de 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

</style>

<section class="form-popup">
  <form>
    <h2>Add a new contact</h2>
    <div class="form-group first_name">
      <label for="first_name"> First Name</label>
      <input type="text" name="first_name"></input>
    </div>

    <div class="form-group last_name">
      <label for="last_name"> Last Name</label>
      <input type="text" name="last_name"></input>
    </div>

    <div class="form-group address-1">
      <label for="address_1">Address #1</label>
      <input type="text" name="address_1"></input>
    </div>

    <div class="form-group address-2">
      <label for="address_2">Address #2</label>
      <input type="text" name="address_2"></input>
    </div>

    <div class="form-group city">
      <label for="city">City</label>
      <input type="text" name="city"></input>
    </div>

    <div class="form-group state">
      <label for="state">State</label>
      <input type="text" name="state"></input>
    </div>

    <div class="form-group zipcode">
      <label for="zipcode">Zipcode</label>
      <input type="text" name="zipcode"></input>
    </div>

    <div class="form-group button">
    <button type="submit">Add</button>
    </div>

  </form>
</section>


  `
  }
}



customElements.define('form-popup', FormPopup)
