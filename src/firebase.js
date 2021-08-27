import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, signInAnonymously, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALcsD-0N3EefaGIPKlcoZR4RCFj54oNtg",
  authDomain: "localcouncil-rcds.firebaseapp.com",
  databaseURL: "https://localcouncil-rcds-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "localcouncil-rcds",
  storageBucket: "localcouncil-rcds.appspot.com",
  messagingSenderId: "648454152152",
  appId: "1:648454152152:web:0653115bf976952d479cad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

// LOGOWANIE Z GOOGLE ///////////////////////
function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        }).catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   const email = error.email;
        //   const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
///////////////////////////////////////////
// LOGOWANIE ANONIMOWE ////////////////////
function signInAnon() {
    signInAnonymously(auth)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
    });
}
///////////////////////////////////////////  
// POBIERANIE KOLEKCJI Z FIRESTORE ////////
// async function getUsers(db) {
//     const usersCol = collection(db, 'users');
//     const usersSnap = await getDocs(usersCol);
//     const users = usersSnap.docs.map(doc => doc.data());
//     return users;
// }
///////////////////////////////////////////

export default {
    signInWithGoogle,
    signInAnon,
    db
};