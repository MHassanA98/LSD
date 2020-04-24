import firebase from "@react-native-firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyC5hAuUGv0IKNi9fIYtnF_N_2SX2ULfDZs",
    authDomain: "lsd1-924d6.firebaseapp.com",
    databaseURL: "https://lsd1-924d6.firebaseio.com",
    projectId: "lsd1-924d6",
    storageBucket: "lsd1-924d6.appspot.com",
    messagingSenderId: "864340621731",
    appId: "1:864340621731:web:ad5a10596725cc47a3c216",
    measurementId: "G-V2ZK3E22BV"
  };
// if (!firebase.apps.length){
//     export const DB=firebase.initializeApp(firebaseConfig).database()    
// }
// else{
//     export const DB=firebase.database()    
// }
// export const DB=firebase.initializeApp(firebaseConfig).database()
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase;
// export const 