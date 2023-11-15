import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbggVRFg3yeG6Rdva8x2W9p0eL7bKop54',
  authDomain: 'blog-7af46.firebaseapp.com',
  projectId: 'blog-7af46',
  storageBucket: 'blog-7af46.appspot.com',
  messagingSenderId: '189880146996',
  appId: '1:189880146996:web:0b3d5281d202afab2b3e61',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
