
// sQuery for card hovor dimmer for card
$('.special.cards .image').dimmer({
    on: 'hover'
  });


//   ===== may need firebase to collect data from inputs ==========

 // Initialize Firebase
 var config = {
    apiKey: firebaseKey, //make your own key from firebase
    authDomain: "jared-spears-portfolio.firebaseapp.com",
    databaseURL: "https://jared-spears-portfolio.firebaseio.com",
    projectId: "jared-spears-portfolio",
    storageBucket: "",
    messagingSenderId: "932459567542"
  };
  firebase.initializeApp(config);

//   have #submit ready for calling firebase

// ==============end of firebase ======================================
