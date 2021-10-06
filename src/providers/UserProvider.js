import React, { useState, useEffect,  createContext } from "react";
import { auth } from "../services/firebase"

export const UserContext = createContext({ user: null })

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      if (!result) return setUser(null)
      const { displayName, email, accessToken, photoURL } = result
      setUser({
        name: displayName,
        email: email,
        picture: photoURL,
        accessToken: accessToken,
        isLogin: true,
      })
    })
  },[])
  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  )
}

export default UserProvider