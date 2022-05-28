// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCG6Qo-imot_S3NwBVQ-oOcQTnzMFG5D2Q",
      authDomain: "classtest-4eec5.firebaseapp.com",
      projectId: "classtest-4eec5",
      storageBucket: "classtest-4eec5.appspot.com",
      messagingSenderId: "967633852471",
      appId: "1:967633852471:web:809003c75f7659693207b2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
