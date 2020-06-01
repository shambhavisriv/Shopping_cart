import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

//<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>


 //    https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyBBlHxKe8noM4sqP6GrKAEBmllgupW2b5U",
    authDomain: "cart-web-app.firebaseapp.com",
    databaseURL: "https://cart-web-app.firebaseio.com",
    projectId: "cart-web-app",
    storageBucket: "cart-web-app.appspot.com",
    messagingSenderId: "4131436762",
    appId: "1:4131436762:web:25e5d118dec9698d650de3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


