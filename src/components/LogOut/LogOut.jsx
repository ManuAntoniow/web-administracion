// REACT
import { useContext } from 'react'

// BOOTSTRAP
import Button from "react-bootstrap/esm/Button"

// CONTEXT
import { UserContext } from '../../context/UserContext'

const LogOut = () => {
  const context = useContext(UserContext)
  const handleLogOut = () => {
    context.logOut()
  }
  return (
    <Button variant='dark' onClick={handleLogOut}>Log Out</Button>
  )
}

export default LogOut