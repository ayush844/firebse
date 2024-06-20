import {initializeApp} from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD1LDqlaiATuKkERoNzknKGTG31c-viEU",
    authDomain: "tradezystore-87f5a.firebaseapp.com",
    projectId: "tradezystore-87f5a",
    storageBucket: "tradezystore-87f5a.appspot.com",
    messagingSenderId: "747882726993",
    appId: "1:747882726993:web:922308207811aec6cb1a70",
    databseURL: "https://tradezystore-87f5a-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);