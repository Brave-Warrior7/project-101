// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB7TvS4KZAwa8nkAHzJGPzChyUfZO3XMt4",
    authDomain: "classtest-7257f.firebaseapp.com",
    databaseURL: "https://classtest-7257f-default-rtdb.firebaseio.com",
    projectId: "classtest-7257f",
    storageBucket: "classtest-7257f.appspot.com",
    messagingSenderId: "200656192107",
    appId: "1:200656192107:web:011878ebdc63aabf46e72e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



