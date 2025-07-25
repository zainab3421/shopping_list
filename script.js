  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDRNnILGqXMS_9bLrTAgFjZG457vdBPHdM",
    authDomain: "shopping-list-a7ceb.firebaseapp.com",
    databaseURL: "https://shopping-list-a7ceb-default-rtdb.firebaseio.com",
    projectId: "shopping-list-a7ceb",
    storageBucket: "shopping-list-a7ceb.firebasestorage.app",
    messagingSenderId: "509068458907",
    appId: "1:509068458907:web:1e158828547853e187bf3e",
  };

  firebase.initializeApp(firebaseConfig);

  function addAnItem(){
    var item = document.getElementById("inputs").value;
    firebase.database().ref("/").child(item).update({
        purpose:"YAY",
    });
  }