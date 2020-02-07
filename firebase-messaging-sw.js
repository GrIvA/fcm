importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyDHsF-9cSXHHM6Yags6GeqXaUj9iEGwStw",
    authDomain: "cy-fb-notify-dev.firebaseapp.com",
    databaseURL: "https://cy-fb-notify-dev.firebaseio.com",
    projectId: "cy-fb-notify-dev",
    storageBucket: "cy-fb-notify-dev.appspot.com",
    messagingSenderId: "514210465262",
    appId: "1:514210465262:web:3985b888809005f7013aff",
    measurementId: "G-K41F8XVSQF"
};
firebase.initializeApp(firebaseConfig);


var messaging = firebase.messaging();
