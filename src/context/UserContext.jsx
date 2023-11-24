//REACT
import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {
  const [documento, setDocumento] = useState(() => {
    const localLog = localStorage.getItem('DOCUMENTO')
    return localLog !== null ? JSON.parse(localLog) : ''
  })
  const [logIn, setLogIn] = useState(() => {
    const localLog = localStorage.getItem('LOGGED')
    return localLog !== null ? JSON.parse(localLog) : false
  })

  const userActive = (docu) => {
    setDocumento(docu)
    localStorage.setItem('DOCUMENTO', JSON.stringify(docu))
    setLogIn(true)
    localStorage.setItem('LOGGED', JSON.stringify(true))
  }
  
  const logOut = () => {
    setDocumento('')
    localStorage.setItem('DOCUMENTO', JSON.stringify(''))
    setLogIn(false)
    localStorage.setItem('LOGGED', JSON.stringify(false))
  }

  return(
    <UserContext.Provider value={{userActive, logOut, logIn, documento}}>
      {children}
    </UserContext.Provider>
  )
}