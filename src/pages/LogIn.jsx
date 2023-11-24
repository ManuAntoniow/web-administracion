// COMPONENTS
import LoginCard from '../components/Cards/LoginCard'

// IMG
import logo from '../img/logo.png'

const LogIn = () => {
  return (
    <div className='contenido' style={{height: "100vh"}}>
      <img src={logo} alt='logo' className='logoInicio'/>
      <LoginCard />
    </div>
  )
}

export default LogIn