
// keys
// var k = require(".config.js");

// sQuery for card hovor dimmer for card
$('.special.cards .image').dimmer({
    on: 'hover'
  });

  // function for the anchor for the connect tab to animate down to the connect form
  $(document).ready(function){
    $("a.scrollLink").click(function(event){
      event.preventDefault();
      $("html.body").animate({scrollTop: $($(this).
        attr("href")).offset().top}, 500);
    })
  }

//   ===== may need firebase to collect data from inputs ==========

 // Initialize Firebase
//  var config = {
//     apiKey: fireBaseKey,                                     //you must create a .gitignore file for your key
//     authDomain: "jared-spears-portfolio.firebaseapp.com",
//     databaseURL: "https://jared-spears-portfolio.firebaseio.com",
//     projectId: "jared-spears-portfolio",
//     storageBucket: "",
//     messagingSenderId: "932459567542"
//   };
//   firebase.initializeApp(config);

//   have #submit ready for calling firebase

// ==============end of firebase ======================================