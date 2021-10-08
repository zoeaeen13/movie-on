import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
initializeApp(firebaseConfig)

export const auth = getAuth()

// google signIn
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
}

export const logout = async () => {
  await signOut(auth)
}
