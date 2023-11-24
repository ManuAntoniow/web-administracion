//REACT
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

// CSS
import './App.css'

// PAGES
import LogIn from './pages/LogIn'
import Inicio from './pages/Inicio'
import CrearReclamo from './pages/CrearReclamo'
import Reclamo from './pages/Reclamo'

// COMPONENTS
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

//CONTEXT
import { UserProvider } from './context/UserContext'
import PrivateRoute from './context/PrivateRoute'

// API
export const URL = 'http://localhost:8080/'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent/>
      </BrowserRouter>
    </UserProvider>
  )
}

function AppContent() {
  const location = useLocation()
  const render = location.pathname !== '/'
  return (
    <div className="App">
      {render && <NavBar/>}
      <main>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/inicio' element={<PrivateRoute><Inicio /></PrivateRoute>} />
          <Route path='/crearReclamo' element={<PrivateRoute><CrearReclamo /></PrivateRoute>} />
          <Route path='/reclamo/:idReclamo' element={<PrivateRoute><Reclamo /></PrivateRoute>} />
        </Routes>
      </main>
      {/* {render && <Footer/>} */}
    </div>
  )
}

export default App