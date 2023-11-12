// REACT
import { useContext } from 'react'

// BOOTSTRAP
import Button from "react-bootstrap/esm/Button"

// CONTEXT
import { UserContext } from '../../context/UserContext'

const LogOut = () => {
  const context = useContext(UserContext)
  return (
    <Button onClick={context.logOut()}>Log Out</Button>
  )
}

export default LogOut