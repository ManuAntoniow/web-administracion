//REACT
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

// CSS
import './App.css'

// PAGES
import LogIn from './pages/LogIn'
import Inicio from './pages/Inicio'
import Cambios from './pages/Cambios'
import Reclamo from './pages/Reclamo'
import Personas from './pages/Personas'
import Edificios from './pages/Edificios'
import Unidades from './pages/Unidades'
import ViewUnidad from './pages/ViewUnidad'

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
          <Route path='/reclamo/:idReclamo' element={<PrivateRoute><Reclamo /></PrivateRoute>} />
          <Route path='/personas' element={<PrivateRoute><Personas /></PrivateRoute>} />
          <Route path='/edificios' element={<PrivateRoute><Edificios /></PrivateRoute>} />
          <Route path='/unidades' element={<PrivateRoute><Unidades /></PrivateRoute>} />
          <Route path='/unidad/:idUnidad' element={<PrivateRoute><ViewUnidad /></PrivateRoute>} />
          <Route path='/cambios/:tipo' element={<PrivateRoute><Cambios /></PrivateRoute>} />
        </Routes>
      </main>
      {/* {render && <Footer/>} */}
    </div>
  )
}

export default App