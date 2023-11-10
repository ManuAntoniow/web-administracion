// REACT
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

// CONTEXT
import { UserContext } from './UserContext'

const PrivateRoute = ({children}) => {
  const {logIn} = useContext(UserContext)
  return logIn ? children : <Navigate to='/'/>
}

export default PrivateRoute