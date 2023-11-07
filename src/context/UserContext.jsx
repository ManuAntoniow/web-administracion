//REACT
import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {
  const [logIn, setLogIn] = useState(() => {
    const localLog = localStorage.getItem('LOGGED')
    return localLog !== null ? JSON.parse(localLog) : false
  })

  const userActive = () => {
    setLogIn(true)
    localStorage.setItem('LOGGED', JSON.stringify(true))
  }
  
  return(
    <UserContext.Provider value={{userActive, logIn}}>
      {children}
    </UserContext.Provider>
  )
}