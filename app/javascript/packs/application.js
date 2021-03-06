// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

import { initSweetalert } from '../plugins/init_sweetalert';

import { initMapbox } from '../plugins/init_mapbox';

import { initNavbar } from '../plugins/init_navbar';



document.addEventListener('turbolinks:load', () => {
  // Mapbox func
  initMapbox();
  initNavbar();

  initSweetalert('#booking-link', {
  title: "Congratulations!",
  text: "Your activity has been booked successfully!",
  // button: "Let's Go!",
  timer: 10000,
  icon: "success"
    }, (value) => {
      if (value) {
        const link = document.querySelector('#book-alert');
        link.click();
      }
    });
    
});
