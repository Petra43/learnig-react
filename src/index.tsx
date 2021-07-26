import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyCn80ywYrGB5RSeAQzgm8zTWYeCnTF6nnE",
  authDomain: "testporject-48fbd.firebaseapp.com",
  databaseURL: "https://testporject-48fbd-default-rtdb.firebaseio.com",
  projectId: "testporject-48fbd",
  storageBucket: "testporject-48fbd.appspot.com",
  messagingSenderId: "372932554189",
  appId: "1:372932554189:web:0a70cffd21fbcccf85e884"
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
