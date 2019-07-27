//(function()  {

	// Initialize Firebase
const firebaseConfig = {
	  apiKey: "AIzaSyBW8cyEkjFX4vx3DtU1pl3ZxLqCndM5zWg",
	  authDomain: "project-30a72.firebaseapp.com",
	  databaseURL: "https://project-30a72.firebaseio.com",
	  projectId: "project-30a72",
	  storageBucket: "project-30a72.appspot.com",
	  messagingSenderId: "500650925586",
	  appId: "1:500650925586:web:820ac7156cb03576"
};

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap=> bigOne.innerText = snap.val());
	
//})();

// The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.2/firebase-app.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBW8cyEkjFX4vx3DtU1pl3ZxLqCndM5zWg",
    authDomain: "project-30a72.firebaseapp.com",
    databaseURL: "https://project-30a72.firebaseio.com",
    projectId: "project-30a72",
    storageBucket: "project-30a72.appspot.com",
    messagingSenderId: "500650925586",
    appId: "1:500650925586:web:820ac7156cb03576"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>