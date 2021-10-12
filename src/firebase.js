

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8oob87D8s88L7AqsZWaf77YcT0Ww1ro0",
  authDomain: "todo-app-react-4d9c2.firebaseapp.com",
  databaseURL: "https://todo-app-react-4d9c2-default-rtdb.firebaseio.com",
  projectId: "todo-app-react-4d9c2",
  storageBucket: "todo-app-react-4d9c2.appspot.com",
  messagingSenderId: "189069999127",
  appId: "1:189069999127:web:01e7b4ab66651f1841b052",
  measurementId: "G-N5WCRWSC4R"
});

const db = firebaseApp.firestore();

// export { db };

export default db;