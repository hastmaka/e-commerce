import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAv7Rcj4s1CZLetPoQ-FrUDqhQeZpE2Scg",
  authDomain: "react-63e14.firebaseapp.com",
  databaseURL: "https://react-63e14-default-rtdb.firebaseio.com",
  projectId: "react-63e14",
  storageBucket: "react-63e14.appspot.com",
  messagingSenderId: "802378271916",
  appId: "1:802378271916:web:ab1e6a6384cb6319b52309",
  measurementId: "G-GMY5QJ5TDC"
};

export const initialize = () => {
  console.log('Initialize Firebase');
  initializeApp(firebaseConfig)
}
