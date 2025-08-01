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

  function addItem(){
    var item = document.getElementById("inputs").value;
    firebase.database().ref("/").child(item).update({
        purpose:"YAY",
    });
    firebase.database().ref("/").on("value",function(snapshot){
        document.getElementById("outputs").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            item = childKey;
            createTag = "<p>"+item+"</p>"
            document.getElementById("outputs").innerHTML += createTag;
        })
    })
  }
  function killItem(){
    killed_item = document.getElementById("inputs").value;
    firebase.database().ref("/").child(killed_item).remove();
  }
