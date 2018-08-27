import * as firebase from 'firebase';

// Initialize Firebase
var configAuthen = {
	apiKey: "AIzaSyAg_J5j8qhbkRKrOrzLZXTEoZCr9OEsSpc",
	authDomain: "loginapp-8e672.firebaseapp.com",
	databaseURL: "https://loginapp-8e672.firebaseio.com",
	projectId: "loginapp-8e672",
	storageBucket: "loginapp-8e672.appspot.com",
	messagingSenderId: "880089488937"
	};

	if (!firebase.apps.length) {
		firebase.initializeApp(configAuthen);
	}

	// const database = firebase.database();

export {firebase}