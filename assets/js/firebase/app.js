
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAONsz-DF-SeZ0F_dqc2tlzPgJ5PCz8cog",
    authDomain: "projeto-strangerthingsdio.firebaseapp.com",
    databaseURL: "https://projeto-strangerthingsdio-default-rtdb.firebaseio.com",
    projectId: "projeto-strangerthingsdio",
    storageBucket: "projeto-strangerthingsdio.appspot.com",
    messagingSenderId: "674070845651",
    appId: "1:674070845651:web:9dab466416c4b479bfdc26"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app
