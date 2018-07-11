import {
  LitElement,
  html
} from '/js/lit-element.js';
import SideMenu from '/js/components/SideMenu.js'

export default class FavoritesList extends LitElement {
  constructor() {
    super()
    this.total = {
      number: 0
    }
    this.displayAllFavorites = this.displayAllFavorites.bind(this)

  }

  //Properties for css styling
  static get properties() {
    return {
      total: Object,
      allContacts: Array
    }
  }

  _firstRendered() {

    }

    displayAllFavorites() {
      return this.allContacts.map((contact) => {
        if(contact.favorites == 'yes') {
          return html `
          <div class="card">
            <div class="user-img"></div>
              <div class="fullname">
                  <span class="text">${contact.first_name} ${contact.last_name}</span>
                <span class="sub">Full Name</span>
              </div>
            <div class="number">
              <span class="text">${contact.phone_number}</span>
              <span class="sub">Phone Number</span>

            </div>
            <div class="state">
              <span class="text">${contact.state}</span>
              <span class="sub">State</span>

            </div>
            <div class="category">
              <span class="text">${contact.category}</span>
              <span class="sub">Category</span>

            </div>
          </div>
          `
        }
      })
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

  .favorites {
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  h2 {
    color: #3e4162;
    font-weight: 300;
    grid-column: 1/4;
  }

  .card {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #3d4060;
    padding: 15px 0 0;
    border-radius: 10px;
    transition: all .4s ease-in-out;
    cursor: pointer;
    -webkit-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
    box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
  }

  .card:hover {
    -webkit-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
    box-shadow: 0px 4px 77px -17px rgba(0,0,0,0.36);
  }

  .user-img {
    background-image:
    url("https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg");
    height: 80px;
    width: 80px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    grid-column: 1/3;
    align-self: center;
    justify-self: center;
  }

  .user-img-2 {
    background-image:
    url("https://s3.amazonaws.com/uifaces/faces/twitter/_hartjeg/128.jpg");
    height: 80px;
    width: 80px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    grid-column: 1/3;
    align-self: center;
    justify-self: center;
  }

  .user-img-3 {
    background-image:
    url("https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg");
    height: 80px;
    width: 80px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    grid-column: 1/3;
    align-self: center;
    justify-self: center;
  }

  .fullname {
    font-weight: 700;
    text-transform: capitalize;
    grid-column: 1/3;
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0, .1);
  }

  .number {
      font-weight: 500;
      grid-column: 1/3;
      padding: 20px;
      border-bottom: 1px solid rgba(0,0,0, .1);

  }

  .text {
    display: block;
    text-align: center;
  }

  .sub {
    display: block;
    color: #b4b5c4;
    font-weight: 300;
    font-size: .8rem;
    text-align: center;
    margin: 5px 0;
  }

  .category {
    border-left: 1px solid rgba(0,0,0, .1);

  }

  .fullname, .user-img, .category, .state, .number {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 15px;
  }

</style>



    <section class="favorites">
    <h2>Favorites</h2>
    ${this.displayAllFavorites()}



    </section>


  `
  }
}



customElements.define('favorites-list', FavoritesList)
