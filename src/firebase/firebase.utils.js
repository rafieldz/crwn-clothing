import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBeb0i9xIY-hQXowosBv-0tz5NJI5BVAWU",
    authDomain: "crwn-clothing-d6ea2.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d6ea2.firebaseio.com",
    projectId: "crwn-clothing-d6ea2",
    storageBucket: "",
    messagingSenderId: "424487125462",
    appId: "1:424487125462:web:e9dbd2f736503c97"
  }

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
